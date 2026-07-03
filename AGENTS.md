# Dashboard update protocol

The team dashboard lives here: open `dashboard/index.html` (double-click — no
build step, works offline). It is the **daily source of truth**: focus, project
status, system map, roadmap, Now/Next/Blocked board, and a changelog.

**You only ever edit one file: [`data.js`](data.js).** The HTML renders whatever
is in it. Do not edit `index.html` unless you're changing the layout itself.

---

## For agents — run this at the end of every work session

After finishing a piece of work (and as part of writing your documentation),
update `dashboard/data.js`:

1. **Stamp it** — set `meta.updated` (today) and `meta.updatedBy` (you).
2. **Focus** — if priorities shifted, rewrite `focus` (one sentence: the single
   most important thing right now).
3. **Project status** — keep each `projects[].status` / `health` honest
   (`stable` | `active` | `blocked` | `planned`).
4. **Board** — move cards between `board.now` / `next` / `blocked`. Remove cards
   that are done (they live on in the changelog).
5. **Roadmap** — flip the relevant `roadmap[].items[].state`
   (`todo → active → done`, or `hold`).
6. **System map** — edit the `systemMap` Mermaid string **only if the
   architecture changed** (new service, new link, a migration that happened).
7. **Changelog** — **prepend** one line:
   `{ date, who, project, summary }` (newest first; `project: ""` = workspace-wide).
8. **Commit & push** — this folder is its own **standalone repo**
   (`thepyramidchallenge/tpc-dashboard`): `git add -A && git commit -m "…" && git push`.
   GitHub Pages redeploys automatically; reload the page to verify.

Keep edits small and valid JS — a trailing comma or unclosed string will break
rendering. If the page shows an error banner, re-check the last thing you edited.

**Before every commit, run the workspace linter:**
`node scripts/check-workspace.js` — it machine-enforces this protocol
(data.js evaluates; valid status/state values; board/roadmap `project` and
`owner` keys resolve; changelog newest-first and `meta.updated` stamped;
Business Space entries follow the schema incl. the required `Domain:` tag;
every `D#/H#/E#/Q#` reference — including in module-repo docs — points to an
entry that exists; `business/INDEX.md` is fresh; module folders contain no
ledger files — D8 governance). CI (`.github/workflows/check.yml`) runs the
same check on every push. Scripts are shared with `tf-dashboard` — 改 script
記得兩邊 sync.

**After editing any `business/*.md`:** run `node scripts/build-index.js` to
regenerate `business/INDEX.md` (auto-generated navigation — never hand-edit).

**Changelog rotation (D8):** when the linter warns that `data.js` changelog
exceeds ~40 entries, run `node scripts/rotate-changelog.js . 30` — it keeps
the newest 30 in data.js and appends the rest to
`changelog/ARCHIVE-YYYY-MM.md` (append-only, never rewrite history).

---

## Field reference

| Field | Values / shape |
|---|---|
| `projects[].status` / `health` | `stable` `active` `blocked` `planned` |
| `roadmap[].items[].state` | `done` `active` `todo` `hold` |
| `board.{now,next,blocked}[]` | `{ title, project, note }` — `project` matches a `projects[].id` or `""` |
| `changelog[]` | `{ date, who, project, summary }` — prepend newest first |
| `systemMap` | a [Mermaid](https://mermaid.js.org/syntax/flowchart.html) flowchart string |

## Where it lives / online

- **Repo:** this is a **standalone** repo — `thepyramidchallenge/tpc-dashboard`
  (public). It sits in the **offline** `TPC Root` workspace as `dashboard/`, but
  it is its own git repo (push directly; no subtree mirror anymore).
- **Live site:** https://thepyramidchallenge.github.io/tpc-dashboard/ (GitHub
  Pages, served from `main`). The site is **publicly reachable** by URL — keep
  credentials/secrets out of `data.js`.

## Offline note

The system map uses Mermaid loaded from a CDN, so the **first** load needs
internet. To make it fully offline, download `mermaid.min.js` into this folder
and change the `<script src=…>` at the top of `index.html` to `./mermaid.min.js`.
