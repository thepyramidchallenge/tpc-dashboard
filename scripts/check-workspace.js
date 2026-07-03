#!/usr/bin/env node
/* =============================================================================
 * WORKSPACE LINTER — machine-enforced update protocol
 * -----------------------------------------------------------------------------
 * Validates the workspace dashboard (data.js) and the Business Space
 * (business/*.md) so protocol violations fail at commit/CI time instead of
 * being discovered months later. Shared between tf-dashboard and
 * tpc-dashboard — it auto-detects `window.<NAME>_DASHBOARD`.
 *
 * Usage:  node scripts/check-workspace.js [repo-root]   (default: cwd)
 * Exit:   0 = clean (warnings allowed) · 1 = errors found
 *
 * Zero dependencies. Node >= 18.
 * ========================================================================== */

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(process.argv[2] || process.cwd());
const errors = [];
const warnings = [];
const err = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

const ALLOWED_STATUS = new Set(['stable', 'active', 'blocked', 'planned']);
const ALLOWED_STATE = new Set(['done', 'active', 'todo', 'hold']);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/* --- 0 · config (scripts/lint-config.json, optional) --------------------- */
let CONFIG = { domains: [], moduleDocRoots: [], changelogWarnAt: 40 };
const cfgPath = path.join(ROOT, 'scripts', 'lint-config.json');
if (fs.existsSync(cfgPath)) {
  try {
    CONFIG = Object.assign(CONFIG, JSON.parse(fs.readFileSync(cfgPath, 'utf8')));
  } catch (e) {
    err('scripts/lint-config.json: invalid JSON — ' + e.message);
  }
}
const DOMAINS = new Set(CONFIG.domains);

function isValidDate(s) {
  if (typeof s !== 'string' || !DATE_RE.test(s)) return false;
  const d = new Date(s + 'T00:00:00Z');
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

/* --- 1 · data.js ------------------------------------------------------- */
const dataPath = path.join(ROOT, 'data.js');
let data = null;
if (!fs.existsSync(dataPath)) {
  err('data.js: file not found at ' + dataPath);
} else {
  const code = fs.readFileSync(dataPath, 'utf8');
  const nameMatch = code.match(/window\.([A-Z][A-Z0-9_]*_DASHBOARD)\s*=/);
  if (!nameMatch) {
    err('data.js: cannot find `window.<NAME>_DASHBOARD = {...}` assignment');
  } else {
    const globalName = nameMatch[1];
    const sandbox = { window: {} };
    try {
      vm.runInNewContext(code, sandbox, { timeout: 3000 });
      data = sandbox.window[globalName];
      if (!data || typeof data !== 'object') {
        err(`data.js: window.${globalName} did not evaluate to an object`);
        data = null;
      }
    } catch (e) {
      err('data.js: does not evaluate — ' + e.message);
    }
  }
}

if (data) {
  /* meta */
  if (!data.meta || typeof data.meta !== 'object') {
    err('data.js meta: missing');
  } else {
    if (!isValidDate(data.meta.updated)) {
      err(`data.js meta.updated: "${data.meta.updated}" is not a valid YYYY-MM-DD date`);
    }
    if (!data.meta.updatedBy || !String(data.meta.updatedBy).trim()) {
      err('data.js meta.updatedBy: empty — stamp who touched the dashboard');
    }
  }

  /* owners */
  const ownerKeys = new Set(Object.keys(data.owners || {}));
  const checkOwner = (owner, where) => {
    if (owner === undefined) return; // owner is optional on cards
    if (!ownerKeys.has(owner)) {
      err(`${where}: owner "${owner}" is not a key of owners {${[...ownerKeys].join(', ')}}`);
    }
  };

  /* projects */
  const projectIds = new Set();
  if (!Array.isArray(data.projects) || data.projects.length === 0) {
    err('data.js projects: missing or empty');
  } else {
    data.projects.forEach((p, i) => {
      const where = `data.js projects[${i}] (${p.id || p.name || '?'})`;
      if (!p.id) err(`${where}: missing id`);
      else if (projectIds.has(p.id)) err(`${where}: duplicate project id "${p.id}"`);
      else projectIds.add(p.id);
      if (!ALLOWED_STATUS.has(p.status)) err(`${where}: status "${p.status}" not in {${[...ALLOWED_STATUS].join('|')}}`);
      if (!ALLOWED_STATUS.has(p.health)) err(`${where}: health "${p.health}" not in {${[...ALLOWED_STATUS].join('|')}}`);
      checkOwner(p.owner, where);
    });
  }
  const checkProjectRef = (proj, where) => {
    if (proj === undefined || proj === '') return; // "" = workspace-wide
    if (!projectIds.has(proj)) {
      err(`${where}: project "${proj}" does not match any projects[].id (or "")`);
    }
  };

  /* board */
  if (!data.board || typeof data.board !== 'object') {
    err('data.js board: missing');
  } else {
    for (const col of ['now', 'next', 'blocked']) {
      const cards = data.board[col];
      if (!Array.isArray(cards)) { err(`data.js board.${col}: missing array`); continue; }
      cards.forEach((c, i) => {
        const where = `data.js board.${col}[${i}] ("${(c.title || '?').slice(0, 40)}")`;
        if (!c.title || !String(c.title).trim()) err(`${where}: missing title`);
        checkProjectRef(c.project, where);
        checkOwner(c.owner, where);
      });
      if (cards.length > 8) warn(`data.js board.${col}: ${cards.length} cards — protocol says keep ~3–6, archive the rest to the changelog`);
    }
  }

  /* roadmap */
  if (!Array.isArray(data.roadmap)) {
    err('data.js roadmap: missing array');
  } else {
    data.roadmap.forEach((g, gi) => {
      const gw = `data.js roadmap[${gi}] ("${(g.title || '?').slice(0, 40)}")`;
      checkProjectRef(g.project, gw);
      checkOwner(g.owner, gw);
      if (!Array.isArray(g.items) || g.items.length === 0) { err(`${gw}: missing/empty items`); return; }
      g.items.forEach((it, ii) => {
        if (!ALLOWED_STATE.has(it.state)) {
          err(`${gw} items[${ii}] ("${(it.label || '?').slice(0, 40)}"): state "${it.state}" not in {${[...ALLOWED_STATE].join('|')}}`);
        }
      });
    });
  }

  /* systemMap */
  if (typeof data.systemMap !== 'string' || !data.systemMap.trim()) {
    err('data.js systemMap: missing or empty');
  }

  /* changelog */
  if (!Array.isArray(data.changelog) || data.changelog.length === 0) {
    err('data.js changelog: missing or empty');
  } else {
    let prev = null;
    data.changelog.forEach((c, i) => {
      const where = `data.js changelog[${i}]`;
      if (!isValidDate(c.date)) err(`${where}: date "${c.date}" is not a valid YYYY-MM-DD date`);
      if (c.who === undefined || !String(c.who).trim()) err(`${where}: missing who`);
      if (!c.summary || !String(c.summary).trim()) err(`${where}: missing summary`);
      if (c.project !== undefined) checkProjectRef(c.project, where);
      if (prev && isValidDate(c.date) && isValidDate(prev.date) && c.date > prev.date) {
        err(`${where}: date ${c.date} is newer than changelog[${i - 1}] ${prev.date} — changelog must be prepend-newest-first`);
      }
      prev = c;
    });
    if (data.meta && isValidDate(data.meta.updated) && isValidDate(data.changelog[0].date)
        && data.changelog[0].date > data.meta.updated) {
      err(`data.js: newest changelog entry (${data.changelog[0].date}) is newer than meta.updated (${data.meta.updated}) — stamp meta.updated`);
    }
    if (data.changelog.length > CONFIG.changelogWarnAt) {
      warn(`data.js changelog: ${data.changelog.length} entries (> ${CONFIG.changelogWarnAt}) — rotate: keep the newest ~30 here, append the rest to changelog/ARCHIVE-YYYY-MM.md (append-only; rule in AGENTS.md)`);
    }
  }

  /* WS cross-check: every WS task id shown on the dashboard must exist in ROADMAP.md */
  const roadmapMd = path.join(ROOT, 'ROADMAP.md');
  if (fs.existsSync(roadmapMd) && Array.isArray(data.roadmap)) {
    const roadmapText = fs.readFileSync(roadmapMd, 'utf8');
    const seenWs = new Set();
    for (const g of data.roadmap) {
      for (const it of g.items || []) {
        for (const wsId of String(it.label || '').match(/\bWS\d+(?:\.\d+)?-\d+\b/g) || []) {
          if (seenWs.has(wsId)) continue;
          seenWs.add(wsId);
          if (!roadmapText.includes(wsId)) {
            err(`data.js roadmap: references ${wsId} but it does not appear in ROADMAP.md — task ids must match the work plan`);
          }
        }
      }
    }
  }
}

/* --- 2 · business/*.md — Business Space schema + cross-links ----------- */
const BIZ = path.join(ROOT, 'business');
const FILES = {
  D: 'DECISIONS.md',
  H: 'HYPOTHESES.md',
  E: 'EXPERIMENTS.md',
  Q: 'OPEN_QUESTIONS.md',
};
const known = { D: new Set(), H: new Set(), E: new Set(), Q: new Set() };
const bodies = {}; // id -> entry body text
const HEADING_RE = /^###\s+([DHEQ])(\d+)\s*[—–-]/;

if (!fs.existsSync(BIZ)) {
  warn('business/: folder not found — skipping Business Space checks');
} else {
  for (const [prefix, fname] of Object.entries(FILES)) {
    const fpath = path.join(BIZ, fname);
    if (!fs.existsSync(fpath)) { warn(`business/${fname}: not found`); continue; }
    const text = fs.readFileSync(fpath, 'utf8');
    const lines = text.split('\n');

    // split into entries by ### headings
    let current = null; // {id, num, start}
    const flush = (endLine) => {
      if (!current) return;
      bodies[current.id] = lines.slice(current.start, endLine).join('\n');
      current = null;
    };
    lines.forEach((line, ln) => {
      if (line.startsWith('### ')) {
        flush(ln);
        const m = line.match(HEADING_RE);
        if (!m) {
          warn(`business/${fname}:${ln + 1}: heading "${line.slice(0, 60)}" does not match \`### ${prefix}<n> — title\``);
          return;
        }
        const [, p, num] = m;
        if (p !== prefix) err(`business/${fname}:${ln + 1}: entry ${p}${num} is in the wrong file (expected ${prefix}#)`);
        const id = p + num;
        if (known[p].has(Number(num))) err(`business/${fname}:${ln + 1}: duplicate id ${id} — numbers are append-only and never reused`);
        known[p].add(Number(num));
        current = { id, num: Number(num), start: ln };
      }
    });
    flush(lines.length);
  }

  // per-entry schema: D/H/E need Status + Updated; Q is free-form except Domain
  for (const [id, body] of Object.entries(bodies)) {
    const prefix = id[0];
    // Domain applies to all four ledgers
    const dm = body.match(/^-\s*Domain:\s*(.+)$/m);
    if (DOMAINS.size > 0) {
      if (!dm) {
        err(`business ${id}: missing "- Domain:" line (allowed: ${[...DOMAINS].join(', ')})`);
      } else {
        for (const d of dm[1].split(/,\s*/).map((s) => s.trim()).filter(Boolean)) {
          if (!DOMAINS.has(d)) err(`business ${id}: domain "${d}" not in lint-config.json domains {${[...DOMAINS].join(', ')}}`);
        }
      }
    }
    if (prefix === 'Q') continue;
    if (!/^-\s*Status:/m.test(body)) err(`business ${id}: missing "- Status:" line (schema in business/README.md)`);
    const up = body.match(/^-\s*Updated:\s*(\S+)/m);
    if (!up) err(`business ${id}: missing "- Updated:" line`);
    else if (!isValidDate(up[1])) err(`business ${id}: Updated date "${up[1]}" is not a valid YYYY-MM-DD date`);
    // SUPERSEDED entries must point somewhere that exists
    const statusLine = (body.match(/^-\s*Status:(.*)$/m) || [,''])[1];
    if (/SUPERSEDED/.test(statusLine)) {
      const tgt = statusLine.match(/SUPERSEDED\s*(?:→|->)\s*([DHEQ])(\d+)/);
      if (!tgt) warn(`business ${id}: SUPERSEDED but no "→ D#" target on the Status line`);
      else if (!known[tgt[1]].has(Number(tgt[2]))) err(`business ${id}: SUPERSEDED → ${tgt[1]}${tgt[2]} but that entry does not exist`);
    }
  }

  // cross-reference check: any D#/H#/E#/Q# token must point to a real entry
  const REF_RE = /\b([DHEQ])(\d{1,3})\b/g;
  const scanTargets = [
    ...Object.values(FILES).map((f) => path.join(BIZ, f)),
    path.join(BIZ, 'README.md'),
    path.join(ROOT, 'ROADMAP.md'),
    path.join(ROOT, 'AGENTS.md'),
    dataPath,
  ];
  for (const f of scanTargets) {
    if (!fs.existsSync(f)) continue;
    const text = fs.readFileSync(f, 'utf8');
    const seen = new Set();
    let m;
    while ((m = REF_RE.exec(text)) !== null) {
      const [tok, p, num] = m;
      if (seen.has(tok)) continue;
      seen.add(tok);
      if (known[p].size === 0) continue; // that space has no entries at all — not a ref system here
      if (!known[p].has(Number(num))) {
        err(`${path.relative(ROOT, f)}: references ${tok} but no such entry exists (max ${p}${Math.max(...known[p])})`);
      }
    }
  }
}

/* --- 3 · INDEX.md staleness ---------------------------------------------- */
if (fs.existsSync(BIZ)) {
  try {
    const { buildIndex } = require('./build-index.js');
    const expected = buildIndex(ROOT);
    const indexPath = path.join(BIZ, 'INDEX.md');
    if (!fs.existsSync(indexPath)) {
      err('business/INDEX.md: missing — run `node scripts/build-index.js`');
    } else if (fs.readFileSync(indexPath, 'utf8') !== expected) {
      err('business/INDEX.md: stale — run `node scripts/build-index.js` after editing business/*.md');
    }
  } catch (e) {
    warn('index check skipped: ' + e.message);
  }
}

/* --- 4 · module documentation rules (D21: cite, never restate) ----------- */
const FORBIDDEN_MODULE_FILES = new Set([
  'CONSTITUTION.md', 'DECISIONS.md', 'HYPOTHESES.md', 'EXPERIMENTS.md', 'OPEN_QUESTIONS.md',
]);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.vercel', 'coverage']);

function walkMd(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkMd(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
}

for (const rel of CONFIG.moduleDocRoots || []) {
  const rootDir = path.resolve(ROOT, rel);
  if (!fs.existsSync(rootDir)) continue; // sibling repos are absent in CI — local/librarian runs cover this
  const mdFiles = [];
  try { walkMd(rootDir, mdFiles); } catch (e) { warn(`module root ${rel}: walk failed — ${e.message}`); continue; }
  let readmeSeen = false;
  for (const f of mdFiles) {
    const base = path.basename(f);
    const relF = path.relative(path.dirname(ROOT), f);
    if (FORBIDDEN_MODULE_FILES.has(base)) {
      err(`${relF}: module folders must not contain a ${base} — global truth lives only in the dashboard repo's business/ (cite, never restate)`);
      continue;
    }
    // cross-refs in module docs must resolve against the global ledgers
    const text = fs.readFileSync(f, 'utf8');
    const seen = new Set();
    let m;
    const re = /\b([DHEQ])(\d{1,3})\b/g;
    while ((m = re.exec(text)) !== null) {
      const [tok, p, num] = m;
      if (seen.has(tok)) continue;
      seen.add(tok);
      if (known[p] && known[p].size > 0 && !known[p].has(Number(num))) {
        err(`${relF}: references ${tok} but no such entry exists in business/ (max ${p}${Math.max(...known[p])})`);
      }
    }
    if (base === 'README.md' && path.dirname(f) === rootDir) {
      readmeSeen = true;
      if (!/governing decisions/i.test(text)) {
        warn(`${relF}: module README has no "Governing decisions" section — list the D#s that govern this module`);
      }
    }
  }
  if (!readmeSeen) warn(`module root ${rel}: no README.md at its top level — add one with a "Governing decisions" section`);
}

/* --- report -------------------------------------------------------------- */
const rel = path.basename(ROOT);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s) in ${rel}:`);
  for (const w of warnings) console.log('  • ' + w);
}
if (errors.length) {
  console.log(`\n✗ ${errors.length} error(s) in ${rel}:`);
  for (const e of errors) console.log('  • ' + e);
  console.log('\nWorkspace check FAILED — fix the above before committing (protocol: AGENTS.md).');
  process.exit(1);
}
console.log(`✓ workspace check passed for ${rel}` + (warnings.length ? ` (${warnings.length} warning(s))` : ''));
