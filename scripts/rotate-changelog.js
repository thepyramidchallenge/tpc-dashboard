#!/usr/bin/env node
// Rotate data.js changelog: keep newest KEEP entries, append the rest to
// changelog/ARCHIVE-YYYY-MM.md (append-only). Usage: node rotate-changelog.js <repoRoot> [KEEP]
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(process.argv[2]);
const KEEP = Number(process.argv[3] || 30);
const dataPath = path.join(ROOT, 'data.js');
let text = fs.readFileSync(dataPath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(text, sandbox);
const globalName = text.match(/window\.([A-Z][A-Z0-9_]*_DASHBOARD)\s*=/)[1];
const changelog = sandbox.window[globalName].changelog;
if (changelog.length <= KEEP) { console.log('nothing to rotate'); process.exit(0); }

const archived = changelog.slice(KEEP);

// find start offset of the (KEEP+1)-th entry inside the changelog section
const clStart = text.indexOf('changelog: [');
if (clStart === -1) throw new Error('changelog section not found');
const entryRe = /^\s{4}\{ date: "/gm;
entryRe.lastIndex = clStart;
let m, count = 0, cutAt = -1;
while ((m = entryRe.exec(text)) !== null) {
  count++;
  if (count === KEEP + 1) { cutAt = m.index; break; }
}
if (cutAt === -1) throw new Error('cut point not found');
if (count !== KEEP + 1) throw new Error('unexpected entry count');

// truncate: everything from the cut point is replaced by the array/object close
const newText = text.slice(0, cutAt) + '  ],\n};\n';
// sanity: evaluate
const sb2 = { window: {} };
vm.runInNewContext(newText, sb2);
if (sb2.window[globalName].changelog.length !== KEEP) throw new Error('post-rotate count mismatch');

// archive file named by the month of the newest archived entry
const month = archived[0].date.slice(0, 7);
const archDir = path.join(ROOT, 'changelog');
fs.mkdirSync(archDir, { recursive: true });
const archPath = path.join(archDir, `ARCHIVE-${month}.md`);
let arch = fs.existsSync(archPath) ? fs.readFileSync(archPath, 'utf8') : `# Changelog archive — ${month}\n\nAppend-only. Rotated out of data.js per the changelog-rotation rule\n(AGENTS.md); newest first within each rotation batch.\n`;
arch += `\n## Rotated ${new Date().toISOString().slice(0, 10)} (${archived.length} entries)\n\n`;
for (const c of archived) {
  arch += `- **${c.date}** · ${c.who}${c.project ? ' · ' + c.project : ''} — ${c.summary}\n`;
}
fs.writeFileSync(archPath, arch);
fs.writeFileSync(dataPath, newText);
console.log(`rotated ${archived.length} entries -> ${path.relative(ROOT, archPath)}; data.js keeps ${KEEP}`);
