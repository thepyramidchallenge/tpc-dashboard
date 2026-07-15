# TPC Constitution

One page. Read before building anything. Challenge it if evidence says so.

## What TPC is

The Pyramid Challenge is trying to become **one of the most trusted measurement
systems for children's mathematical & computational thinking in Hong Kong** —
the *credential / trust layer*, not the content layer.

**It is NOT** another online quiz, worksheet generator, question bank, online
competition, or AI tutor. In the AI era, questions/explanations/apps are cheap;
**building software is no longer the moat.** What stays scarce — and what TPC
sells — is *credible measurement, benchmarking, progress, insight, trust*.

The job a parent hires TPC for: **"Is my child doing well — compared with whom,
against what, and are they improving?"** Most products give content. TPC reduces
uncertainty.

## The product line (why each piece exists)

- **Live competition** = the **credibility anchor** — physical, proctored, hard
  to fake; high per-head margin. It *mints* trust. (Not capacity-capped — it scales
  with rooms/days/staff; HK incumbents run ~15–20k 人次/yr profitably.)
- **Online platform** = the **scale + low-CAC + repeat engine** — software
  economics (near-zero marginal cost), so it can be an independent income stream
  *and* lower the live event's CAC / extend LTV.
- **Evaluation report (個人考核報告)** = the moat **already monetised** — the
  highest-margin, most defensible line (see `DECISIONS.md` D1, `HYPOTHESES.md` H1).

The two halves are **coupled**: online add-ons (reports / awards / tiers) sell
*because* the live event mints the credibility behind them.

## Long-term arc

TPC's deepest positioning is **assessment infrastructure**, not "an online maths
competition". Build the digital engine **online first** (low-risk), then
**digitize the live event** (iPad check-in → assign → timed → instant marking →
live leaderboard), and feed live-verified results back into a longitudinal,
**cross-context ability portfolio** per child (live + online + practice +
integrity). The real product is that *compounding portfolio* — not a one-off
report. This turns TPC from an *event business* into an *assessment
infrastructure + subscription + live-verification* hybrid. The arc is the
destination, **gated on Phase-1 validation** — not a pre-committed build-out.
Detail: `DECISIONS.md` D7.

## Decision framework (evaluate options roughly in this order)

1. Does it help us **learn about parents**?
2. Does it improve **trust**?
3. Does it strengthen **long-term differentiation**?
4. Does it **simplify future evolution**?
5. Does it **reduce implementation complexity**?
6. Does it improve **short-term revenue**?

Revenue is last **on purpose**. TPC is internally funded (from HKYCAA + Team
Futura cash flow) and has time; it optimises for learning/validation/trust
first. This is *not* a licence for unlimited spend — engineering stays
disciplined. Free online challenge exists to **learn + build trust + create the
ranking database**, not as charity or a gimmick.

## The polish floor (group-wide DNA)

Across all of the founder's businesses — HKYCAA, Team Futura, TPC, and whatever
comes next — every **customer-facing surface must feel finished, polished and
premium** (完成品, never 半完成品). This is not an aesthetic preference; it is
the market-entry thesis itself: these businesses exist because competitors ship
incomplete-feeling products, and the polish gap *is* the opening. For TPC it is
doubly binding: the product **is** trust (framework question 2), and a
half-finished surface is the fastest way to destroy credibility in an
assessment brand.

- **Scope is variable; polish is not.** Under time pressure, cut features —
  ship fewer, simpler things — but everything a customer touches must read as
  a complete, quality product.
- **Cut, don't expose.** An unfinished feature gets removed or hidden — never
  shipped as placeholders, broken states, or "coming soon" scaffolding.
- **Not a licence to slip.** If polish threatens the ship date, shrink scope
  until polish fits the window; never extend the window indefinitely. (This
  sits alongside "engineering stays disciplined" above — polish is a floor on
  what ships, not a budget for gold-plating.)
- **Customer 接觸面 only.** Internal tools (admin views, dashboards, scripts)
  optimise for iteration speed instead — do not over-apply this floor there.
- **The test:** would a first-time customer, seeing only this surface, believe
  it is a finished product from a professional operation?

## How we work (humans and AI)

- **AI is not here to obey.** Don't blindly follow the founder, prior decisions,
  or docs. Understand → reason → challenge → improve. If a better path serves the
  business objective, say so with tradeoffs and a proposed experiment.
- **Partition, don't pipeline** (AGENTS.md doctrine "Control flow → reasoning
  flow", measured on the sister Hermes project): engineering owns deterministic
  execution, tools, data, permissions, guardrails, tests; reasoning owns
  understanding open-ended human input, judgement, and deciding which tools to
  call. The AI-era architect's skill is placing that boundary — and re-placing it
  as models improve — not designing ever-more control flow. A deterministic
  branch firing on context it cannot read has crossed into reasoning. AI
  optimises *inside* the frame; the human owns *changing* the frame.
- Treat **Natalie** as a product thinker, not just an engineer. Disagreement is
  welcome; **silent** disagreement is the failure mode.
- On any dispute: separate **fact / assumption / evidence / missing-evidence**,
  then name the **experiment** that resolves it. Prefer experiments over debates.
- **Evidence gates build — don't build ahead of validation.** Concretely: do not
  build Phase-2+ infrastructure (iPad live event, full subscription stack) before
  E1/E2 return a positive read. Excitement is not evidence. (See D7.)
- Don't inflate evidence (report "53%" as "just over half", not "most").
- **Communication style:** the founder prefers **港式中文 mixed with English
  technical terms** in conversation. Durable docs in this folder stay in English
  for multi-agent robustness.

## Information weight (not everything here is a rule)

`Technical specs` → normally must follow · `Business principles` → default
guidance · `Decisions (D#)` → current best understanding · `Hypotheses (H#)` →
working assumptions · `Open questions (Q#)` → unknowns. Treat each accordingly.

## Success definition — 2026

> The real measure of TPC 2026 is **not** how many attend the next live event —
> it is **selling the first genuine batch of paid online members**, while the
> live competition reaches break-even (~199 participants).

The goal of this whole space is not to preserve the founder's opinions. It is to
build a decision system that eventually makes **better calls than the founder
alone** — and that helps decide what TPC should *become* next.
