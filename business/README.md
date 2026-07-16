# TPC Business Space — the *why* layer

This folder is The Pyramid Challenge's **decision memory**. It preserves *why*
the business makes the choices it makes — the layer that normally evaporates and
that future humans/agents unknowingly reverse.

It is **not** a manifesto, a spec, or a prompt. It is a small, structured,
**living** record of vision, decisions, bets, experiments, and unknowns.

> New collaborator (AI agent / Natalie / Max / a developer / either owner months from
> now)? **Read [`CONSTITUTION.md`](CONSTITUTION.md) first**, then
> `HYPOTHESES.md` + `DECISIONS.md`. Understand before you build.

---

## What lives where

| File | Holds | Question it answers |
|---|---|---|
| [`CONSTITUTION.md`](CONSTITUTION.md) | One page: what TPC is, the decision framework, how we work | "What is this and how do we decide?" |
| [`DECISIONS.md`](DECISIONS.md) | `D#` — accepted decisions + their evidence | "Why did we choose this?" |
| [`HYPOTHESES.md`](HYPOTHESES.md) | `H#` — bets with a validation status | "What are we assuming, and how sure are we?" |
| [`EXPERIMENTS.md`](EXPERIMENTS.md) | `E#` — experiments + the metric that resolves them | "What will tell us if a bet is true?" |
| [`OPEN_QUESTIONS.md`](OPEN_QUESTIONS.md) | `Q#` — known unknowns | "What don't we know yet?" |

## Boundary with the other docs (no overlap, no drift)

- **This business space** owns the **why / strategy / bets** (business-level).
- **`tpc-online-platform-admin/docs/ROADMAP.md`** owns **product & technical
  decisions** and the WS work-breakdown. Business entries here *link to* the WS
  they gate; they do not duplicate it.
- **`tpc-dashboard/data.js`** owns **daily status** (focus, now/next/blocked).

If a business entry and a product decision ever contradict, that contradiction
is itself important — surface it, don't silently pick one.

Human decision attribution follows **D9**: decisions made from Natalie's
MacBook are attributed to Natalie; decisions originating from Max's other
computer are attributed to Max. Keep named agent authorship intact.

## Entry schema (keep every entry in this shape)

```
### D7 — Short title
- Status:   ACCEPTED | SUPERSEDED            (H#: UNVALIDATED | PARTIAL | VALIDATED | REJECTED)
- Domain:   one or more of: pricing · platform · live · trust · growth · brand · content · ops · workspace
- Updated:  2026-06-27
- Body:     the decision / belief / question, in 1–4 lines
- Why:      the reasoning
- Evidence: data or repo facts (cite numbers / files)
- Links:    ROADMAP WSx · H#/E#/Q# · [[memory-slug]]
- Revisit:  the condition that should reopen this
```

Numbers are append-only and never reused. To change a decision, add a new entry
and mark the old one `SUPERSEDED → D#`.

`Domain:` is required on every D/H/E/Q entry (comma-separate multiples; the
allowed set lives in `scripts/lint-config.json` and is linter-enforced).
[`INDEX.md`](INDEX.md) is **auto-generated** — never edit it by hand; run
`node scripts/build-index.js` after editing any ledger, or the linter fails.

## Module documentation rules (D8 — one truth, many platforms)

Platform repos (tpc-online-platform-admin, pyramid-site, …) keep
**implementation docs only**: `README.md` (with a **"Governing decisions"**
section listing the D#s that govern it), `ARCHITECTURE`, `RUNBOOK`,
`HANDOFF`. Three linter-enforced rules:

1. **Cite, never restate** — module docs link to D#s; they never copy a
   decision's body (copies drift and become parallel truths).
2. **Forbidden filenames** — no `CONSTITUTION.md` / `DECISIONS.md` /
   `HYPOTHESES.md` / `EXPERIMENTS.md` / `OPEN_QUESTIONS.md` inside module
   folders. Global truth lives only here.
3. **One-way reference** — modules cite business/ as authority; business/
   cites module paths only as evidence links.

---

## Update protocol — the forcing function (so this never goes stale)

This space dies the moment it becomes write-only. The dashboard survives because
updating it is wired into every work session; copy that discipline here.

**A business-level decision, a new piece of market evidence, a bet confirmed or
killed, or a new strategic unknown → add or update an entry in the same session.
Not later.**

When you do:
1. Add/edit the `D/H/E/Q` entry using the schema above; stamp `Updated`.
2. If it changes a bet's status (e.g. an experiment returned), update the linked
   `H#` status and note the result in the `E#`.
3. If it changes the plan, also flip the linked **ROADMAP** WS and the
   **dashboard** board/changelog (see `../AGENTS.md`).
4. Keep entries short. Evidence is a citation, not an essay.

Challenge before you record: separate **fact** from **assumption**, name the
**evidence**, and propose the **experiment** that would resolve a disagreement.
Silent agreement is a failure mode here (see `CONSTITUTION.md`).
