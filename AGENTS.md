# Dashboard update protocol

The team dashboard lives here: open `index.html` (double-click — no
build step, works offline). It is the **daily source of truth**: focus, project
status, system map, roadmap, Now/Next/Blocked board, and a changelog.

**You only ever edit one file: [`data.js`](data.js).** The HTML renders whatever
is in it. Do not edit `index.html` unless you're changing the layout itself.

---

## For agents — run this at the end of every work session

After finishing a piece of work (and as part of writing your documentation),
update `data.js`:

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
9. **Verify Pages actually deployed** — the automatic `pages-build-deployment`
   on this repo fails intermittently ("Deployment failed, try again later";
   observed 2026-07-02 and 2026-07-03), and the live site silently stays on
   the old commit. After pushing, check and (if needed) rebuild:

   ```bash
   gh api repos/thepyramidchallenge/tpc-dashboard/pages/builds/latest --jq .status
   # not "built"? trigger a manual rebuild — it has succeeded every time:
   gh api -X POST repos/thepyramidchallenge/tpc-dashboard/pages/builds
   ```

   Do not stop at "pushed" — the update isn't done until the live data.js
   serves the new commit.

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

## Control flow → reasoning flow (how to architect AI-native systems)

A group-wide doctrine, learned on the sister project's Hermes Inbox (Team Futura,
2026-07) and **measured** there — it applies to every AI-native system we build,
TPC and Family Hermes included.

**Both extremes are wrong.** "Give everything to one powerful LLM" is not
architecture — real systems still need deterministic tools, APIs, permissions,
guardrails, data integrity, regression tests. But a fully deterministic pipeline
(classifier → routing → resolver → composer) drifts the other way: engineering
stops **supporting** reasoning and starts **replacing** it. The skill is not
picking a side — it is **partitioning**.

**The partition.**
- **Engineering owns** what must be exactly right every time: deterministic
  execution, APIs, tools, data integrity, permissions, safety guardrails,
  regression testing.
- **Reasoning owns** what depends on open-ended input: understanding the human,
  judgement, workflow orchestration, deciding which tools to call, integrating
  evidence, deciding whether to answer or defer.
- The future is neither "all deterministic" nor "all AI" — it is knowing where
  the boundary is. **And the boundary MOVES**: as models improve, work that was
  reasoning-territory becomes cheap enough to make deterministic, and rigid
  branches that were fine become constraints. Re-examine the partition when
  capability changes; it is not carved once.

**Control flow → reasoning flow.** Traditional software has the programmer define
every branch (`if A → B → call tool X`). Both humans and AI architect-agents
inherit that, which is why almost every architecture proposal drifts toward more
pipeline. But modern reasoning models crossed a threshold — many hand-designed
control flows no longer add value; they have become constraints. The move is not
to delete structure; it is to change **who owns the workflow**: engineering
provides the tools, evidence and boundaries; the reasoning model decides what to
call and how to combine it.

**The architecture smell (with an operational test).** When you find yourself
continuously adding routing rules, if-else branches, exception handlers, glue
code, the instinct is "the workflow is incomplete." That instinct is often wrong
— continuous routing patches usually mean the decision has already crossed from
deterministic into reasoning. The precise test, measured on Hermes: **a
deterministic branch that fires on context it cannot fully read** has crossed the
line (Hermes force-appended a pay-now link whenever the evidence held one, blind
to a parent who had just said 「已付」 / 「太遲啦」). Before adding another branch,
ask: should this decision still be deterministic workflow, or has it become
reasoning?

**Where reasoning is most valuable.** Not generating text — **interpreting
open-ended human input**. Traditional software forces humans to adapt (IVR menus,
rigid forms, twenty layers of options). AI-native systems invert it: the human
arrives with multiple intents, implicit assumptions, missing context, and the
model adapts to the human. Optimise **how software understands humans**, not how
humans communicate with software.

**The human architect's job.** AI optimises *within* an architecture, extremely
well — and it will optimise the existing pipeline forever, proposing another
routing rule, another patch, rarely questioning the frame it was handed. (Hermes:
the same model that could reason out the correct answer in *debugging* kept
proposing more glue in *production*; the architectural leap came from the human.)
Within a task frame, patching is the locally-correct move — so the leap requires
stepping **outside** the frame, a different act than solving the task. The AI-era
architect's maturity is therefore not how much workflow they design — it is **how
accurately they partition the system**, and **owning the frame the AI optimises
inside**. Challenge the assumption; the model will not do it for you.

**Measured, not asserted.** On Hermes: an offline A/B over 45 real drafts, model
held constant, same send-time guards, blind judge + human audit — a reasoning
agent beat the rigid pipeline on usefulness AND on audited safety. Build TPC's
AI systems from this partition, not from a growing pipeline.

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
