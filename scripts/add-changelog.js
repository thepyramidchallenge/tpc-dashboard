#!/usr/bin/env node
/* =============================================================================
 * ADD CHANGELOG ENTRY — the safe way to prepend to data.js
 * -----------------------------------------------------------------------------
 * Why this exists: on 2026-08-03 the changelog was inserted with a `perl -0pi`
 * one-liner carrying \x{2014}-style escapes and no -CSD. The escape upgrades the
 * slurped byte string, so the file's UTF-8 bytes were reinterpreted as Latin-1
 * and re-encoded on write -- the WHOLE file, not the matched line. It compounded
 * on every pass and took two files down before anyone noticed.
 *
 * The trigger was shell quoting: prose full of em-dashes and CJK is painful to
 * embed in a shell one-liner, so it gets escaped, and the escaping is what broke
 * it. So this script never takes the summary through argv -- it reads it from a
 * file or from stdin, as bytes, and writes UTF-8 explicitly.
 *
 * Usage:
 *   node scripts/add-changelog.js --who "Max + Claude (Fable 5)" \
 *        --project tpc-online-platform --summary-file entry.md
 *   ... | node scripts/add-changelog.js --who "Natalie + Codex"   # stdin
 *
 * Options:
 *   --who <str>          required — who did the work
 *   --project <id>       projects[].id, or omit/"" for workspace-wide
 *   --summary-file <f>   read the summary from a file (default: stdin)
 *   --date <YYYY-MM-DD>  default: today (local)
 *   --updated-by <str>   meta.updatedBy (default: --who)
 *   --root <dir>         repo root (default: cwd)
 *   --dry-run            print the entry and what would change, write nothing
 *
 * Exit: 0 = written · 1 = refused (see message)
 *
 * Zero dependencies. Node >= 18.
 * ========================================================================== */

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* --- args ---------------------------------------------------------------- */
const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf('--' + name);
  return i >= 0 ? argv[i + 1] : undefined;
};
const has = (name) => argv.includes('--' + name);

const ROOT = path.resolve(flag('root') || process.cwd());
const DRY = has('dry-run');
const who = flag('who');
const project = flag('project') === undefined ? '' : flag('project');
const updatedBy = flag('updated-by') || who;

const die = (msg) => { console.error('add-changelog: ' + msg); process.exit(1); };

if (!who || !who.trim()) die('--who is required (who did the work)');

const today = (() => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
})();
const date = flag('date') || today;
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) die(`--date "${date}" is not YYYY-MM-DD`);

/* --- summary: from a file or stdin, never from argv ---------------------- */
let summary;
const sf = flag('summary-file');
if (sf) {
  if (!fs.existsSync(sf)) die(`--summary-file "${sf}" not found`);
  summary = fs.readFileSync(sf, 'utf8');
} else {
  if (process.stdin.isTTY) {
    die('no summary: pass --summary-file <f>, or pipe the text in on stdin');
  }
  summary = fs.readFileSync(0, 'utf8');
}
summary = summary.replace(/\s+$/, '');
if (!summary.trim()) die('summary is empty');

/* --- load data.js -------------------------------------------------------- */
const dataPath = path.join(ROOT, 'data.js');
if (!fs.existsSync(dataPath)) die('data.js not found at ' + dataPath);
const src = fs.readFileSync(dataPath, 'utf8');

/* Refuse to touch an already-damaged file: every write adds another layer.
 * Same detector as check-workspace.js check 5. */
const ENC_BAD = /[\u0080-\u009F]|[\u00C2\u00C3][\u0080-\u00BF]/;
if (ENC_BAD.test(src)) {
  die('data.js already contains mojibake — repair it first (node scripts/check-workspace.js will point at it). Writing now would add another encoding layer.');
}
if (ENC_BAD.test(summary)) {
  die('the summary text itself contains mojibake — it was mangled before it got here. Fix the source, do not commit it.');
}

const evaluate = (code) => {
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { timeout: 5000 });
  const key = Object.keys(sandbox.window).find((k) => /_DASHBOARD$/.test(k));
  if (!key) throw new Error('no window.<NAME>_DASHBOARD assignment');
  return sandbox.window[key];
};

let data;
try { data = evaluate(src); } catch (e) { die('data.js does not evaluate — ' + e.message); }

/* --- validate against the same rules the linter enforces ----------------- */
const ids = new Set((data.projects || []).map((p) => p.id));
if (project !== '' && !ids.has(project)) {
  die(`--project "${project}" is not a projects[].id {${[...ids].join(', ')}} (use "" for workspace-wide)`);
}
const newest = data.changelog && data.changelog[0] && data.changelog[0].date;
if (newest && date < newest) {
  die(`--date ${date} is older than the newest entry (${newest}); the changelog must stay newest-first`);
}

/* --- build the entry ----------------------------------------------------- */
/* JSON.stringify gives a valid JS string literal: it escapes quotes,
 * backslashes and newlines, and leaves real UTF-8 characters alone. That is
 * exactly the property the perl one-liner did not have. */
const entry =
  `    { date: ${JSON.stringify(date)}, who: ${JSON.stringify(who)}, project: ${JSON.stringify(project)},\n` +
  `      summary: ${JSON.stringify(summary)} },\n`;

const anchor = src.match(/^[ \t]*changelog:\s*\[[ \t]*\r?\n/m);
if (!anchor) die('cannot find the `changelog: [` array in data.js');
let out = src.slice(0, anchor.index + anchor[0].length) + entry + src.slice(anchor.index + anchor[0].length);

/* --- stamp meta ---------------------------------------------------------- */
let stamped = false;
out = out.replace(/(\bupdated:\s*")(\d{4}-\d{2}-\d{2})(")/, (m, a, old, c) => {
  stamped = true;
  return a + date + c;
});
if (!stamped) die('cannot find meta.updated to stamp');
if (updatedBy) {
  out = out.replace(/(\bupdatedBy:\s*")((?:[^"\\]|\\.)*)(")/, (m, a, old, c) =>
    a + JSON.stringify(updatedBy).slice(1, -1) + c);
}

/* --- verify before writing ----------------------------------------------- */
let after;
try { after = evaluate(out); } catch (e) { die('the result would not evaluate — aborted, nothing written (' + e.message + ')'); }
if (after.changelog.length !== data.changelog.length + 1) die('entry count did not increase by exactly 1 — aborted');
if (after.changelog[0].summary !== summary) die('round-trip mismatch on the new summary — aborted');
if (ENC_BAD.test(out)) die('the result contains mojibake — aborted, nothing written');

/* --- write --------------------------------------------------------------- */
const rel = path.relative(process.cwd(), dataPath) || 'data.js';
if (DRY) {
  console.log(entry.replace(/\n$/, ''));
  console.log(`\n(dry run) ${rel}: would add 1 entry (${after.changelog.length} total) and stamp meta.updated=${date}`);
} else {
  fs.writeFileSync(dataPath, out, 'utf8');
  console.log(`${rel}: added ${date} / ${who}${project ? ' / ' + project : ''} — ${after.changelog.length} entries, meta.updated=${date}`);
  console.log('next: node scripts/check-workspace.js && git add -A && git commit && git push');
}
