# Decisions (D#)

Accepted business-level decisions and the evidence behind them. Product/technical
decisions live in `tpc-online-platform-admin/docs/ROADMAP.md`. Newest entries can
go at the bottom; never reuse a number.

---

### D1 — Pricing & funnel architecture
- Status: ACCEPTED
- Updated: 2026-06-27
- Body: The full value ladder is locked:

  | Tier | Price (HKD) | Role |
  |---|---|---|
  | Free monthly online challenge | $0 | lead pool · ranking DB · credibility · retargeting |
  | One-off online report (digital) | **$99** | on-ramp + willingness-to-pay test (north-star, see E1) |
  | Online tier — 6 months | **$198** | the "double it" upgrade from $99; LTV |
  | Online tier — 1 year | **$298** | best value; retention |
  | Live entry | $380 | credibility anchor |
  | Live + physical report | $550 | proven core (Season 2: 53% report attach) |
  | Full package (live + report + 6-mo tier) | **$580** | tier bundled at +$30 to seed online from verified live buyers |

- Why: $99 one-off is deliberately half of the $198 6-month tier → "pay ~$100
  more, get 6 months" upgrade nudge. Online report ($99, digital) is priced below
  the live report ($160, physical/proctored) on purpose — the price gap reflects
  and *reinforces* the live event's credibility premium.
- Evidence: Season 2 (see H1) proved transactional report attach at 53% / ~79%
  margin. Free monthly challenge `Top 3%` gets a $200 live-event coupon — a
  discount-on-a-sale (cost only on conversion), self-selecting high-intent users.
- Links: ROADMAP WS7 (Test Mode), WS9 (monetization) · H1 · H2 · E1 · E2
- Revisit: if online $99 attach is weak, A/B a lower intro price (see Q4).

### D2 — Bundle the **6-month** tier (not 12) into the full package
- Status: ACCEPTED (founder agreed 2026-06-27)
- Updated: 2026-06-27
- Body: The full package ($580) includes the **6-month** online tier, not 12.
- Why: the bundle's real value is the **renewal moment** — whether a verified
  live buyer pays the real $198 to continue is the cleanest trust-transfer
  signal. 6 months lands that signal **inside** the 6-month learning window;
  12 months would push it past it. (12-mo wins on engagement runway — use it
  later for LTV once validated.)
- Links: E2 · D1
- Revisit: after the trust-transfer bet (H2) resolves.

### D3 — Live ⇄ online: both must be viable; no pre-committed lead
- Status: ACCEPTED (reframed 2026-06-28 — supersedes the earlier "live = structural loss-leader")
- Updated: 2026-06-28
- Body: Don't pre-assume which side breaks through first or which is "the main
  dish". Live and online are **highly coupled and feed back** (live mints
  credibility that lifts online attach; online lowers live's CAC + extends LTV),
  and **each can break through on its own**. Stance: stay **open**, and hold both to
  the same business-reality bar — **each must have a credible path to standalone
  break-even** (no permanent subsidy). Let evidence reveal the lead.
- Clarifications:
  - "Capable of break-even" ≠ break-even every quarter — near-term sub-scale losses
    while building demand/brand are *investment*, not failure (Constitution:
    learn/validate first; revenue last). The test is the **trajectory** to viability.
  - **Correction (2026-06-28):** live is **not** capacity-capped — it scales with
    rooms/days/staff; HK incumbents run ~15–20k 人次/yr over 3 events *profitably*.
    TPC's Season 2 loss was **low volume + CAC≈ARPU (no brand yet)**, not structural;
    live can be standalone-profitable at volume.
  - Measure each side **standalone**, but name the coupling so a result isn't
    mis-attributed (e.g. online attach riding on live's credibility).
- Why: incumbents prove live profits at volume; the binding constraint is
  **demand/brand + per-head CAC**, not capacity (their brand makes marketing
  near-free per head; TPC's $40k/134 is the brand-gap tax). TPC's edge is
  **differentiation** (measurement / online / digitized live — higher margin, harder
  to copy), not a paper-event volume war.
- Evidence: Season 2 — cost $90K vs rev $60.7K (−$29.3K); ARPU $453; ads CAC≈ARPU;
  report line ~79% margin (H1). Incumbents ~15–20k 人次/yr, profitable.
- Links: H1 · H3 · D7 · D1
- Revisit: as live and online each accumulate evidence on their path to break-even.

### D4 — Sequence monetization: transactional report **first**, subscription **after**
- Status: ACCEPTED (recommended & uncontested, 2026-06-27)
- Updated: 2026-06-27
- Body: Validate online monetization by selling the one-off $99 report off an
  online challenge result (reusing the existing Sheets→Affinity report pipeline)
  **before** building the full subscription/analysis stack. Layer subscription
  for LTV only once one-off attach is healthy.
- Why: the one-off mirrors the *proven* behaviour and the smallest build; it
  tests the biggest assumption (H2) before committing WS5/WS7/WS8. A $99 report
  also yields ~5× the revenue of one month of subscription, so it reaches
  self-sustain with ~4–5× fewer buyers (see H3).
- Links: E1 · H2 · H3 · ROADMAP WS5/WS7/WS8
- Revisit: once E1 shows healthy attach + upgrade rate.

### D5 — Ranking framing: "Top X% among TPC challengers" + disclose the cohort
- Status: ACCEPTED (founder agreed 2026-06-27)
- Updated: 2026-06-27
- Body: Publish ranking as **"top X% among TPC challengers"** — never an implied
  HK-wide ("全港") percentile until cohorts are large enough to be statistically
  meaningful. **Always disclose the challenger background composition next to the
  percentile**: cohort size, the **region mix** (e.g. HK / Taiwan / Singapore /
  … %), and the year-level breakdown — so the benchmark is transparent about
  *who* the cohort is rather than over-claiming.
- Why: TPC's entire moat is trust; an over-claimed "全港排名" on a thin or
  multi-region cohort risks the one asset that matters. Disclosing the mix turns
  cohort composition from a weakness into a **credibility feature** (honest,
  auditable) — and the base is potentially multi-region, which is itself why an
  HK-only frame would be wrong. Protect the percentile — it *is* the product.
- Implies: capture **region** (and confirm year-level) at sign-up so the
  composition can be shown.
- Links: Q2 · Q8 · CONSTITUTION (trust)
- Revisit: when active users per cohort pass an agreed credibility threshold (Q2).

### D6 — Integrity model: graded, explainable trust (the paid-tier moat)
- Status: ACCEPTED (framework + refinements confirmed 2026-06-27)
- Updated: 2026-06-27
- Body: the goal is **not** 100% cheat-prevention but a **credible, graded,
  explainable integrity score**. Three trust tiers:
  1. **Practice / Unverified** — learning product (AI explain, error analysis,
     training); not in the official ranking (or a separate "practice board"); light
     integrity.
  2. **Online Ranked / Integrity-Checked** — the monthly challenge; enters the
     ranking *with an integrity indicator* (Standard Verified · Integrity Warning ·
     Not Eligible for Prize). This is the main funnel (free monthly, eCert, Top-3%
     coupon).
  3. **Live Verified** — live-event result; highest trust ("Official TPC Score",
     eligible for award / trophy / school-portfolio use).

  Integrity score (High / Medium / Low) gates **prize eligibility**, not ranking
  inclusion. To parents: *"not eligible for prize due to incomplete integrity
  check"* — never an accusation of cheating.

  **MVP v1 (5 things):** full-screen/focus detection · answer-timeline logging ·
  question randomization (order + numbers) · integrity score (High/Med/Low) ·
  prize-eligibility rule.
- Why: in the AI era content is ~free; the defensible moat is **credible ranking +
  ability comparison + long-term profile + trust**. So anti-cheat **is** the
  paid-tier moat, not a side feature (see H6). The tiers also make the live event
  indispensable (apex trust) and create an online→live conversion narrative
  ("validate your online Top-3% at the live event for an Official Score"). The
  **trust ladder = the price ladder**: $99 online report vs $160 live report (D1)
  is exactly the Online-Standard vs Live-Verified premium.
- Decided refinements (2026-06-27):
  - **No camera/mic** — skipped (not deferred): recording K2–P6 minors at home is a
    privacy/PDPO + consent + parental-resistance + fragility cost for low marginal
    gain over behavioural + item-design + profile methods, and cuts against the
    trust brand. Lean on B (behavioural) + C (item design) + D (profile).
  - **No public shaming** — the integrity score gates prize eligibility *quietly*;
    do not publicly label a paying parent's result "Low Integrity" early
    (false-positive backlash). High precision / low false-positive.
  - **Log day 1, enforce later** — high-value methods (profile-consistency, timing
    anomalies) need history + population baselines absent in month 1. Log
    everything cheaply now; score/enforce once baselines exist. Early integrity
    rests on item randomization (day 1) + honesty pledge + live calibration.
- Links: D1 (price=trust ladder) · D3 (live=apex) · D5 (ranking) · H6 · Q1
  (item-design = the content-engine investment; invest once, win twice) ·
  ROADMAP WS7-06 (integrity signals)
- Revisit: set numeric thresholds once behavioural data is collected.

### D7 — The long arc: platform-first → digitized live → unified portfolio
- Status: ACCEPTED (strategic direction; phases gated on validation)
- Updated: 2026-06-27
- Body: TPC's deepest positioning is **assessment infrastructure**, not "an online
  maths competition". Build the digital engine online first, then migrate the
  physical event onto it:
  - **Phase 1 — Online builds the engine.** Question bank, year/age banding, online
    submission, instant marking, ability breakdown, ranking logic, integrity score
    (D6), monthly challenge, paid analysis tier. Goal is *not* online-contest
    revenue per se — it's proving the engine (UI clarity, K2/K3 usability, marking
    reliability, ranking dispute-rate, report WTP, anti-cheat signal, difficulty
    calibration) in a **low-risk** environment.
  - **Phase 2 — Digitize the live event.** iPad-based: QR check-in → system assigns
    paper → countdown → answer → submit → instant marking. Paper kept as early
    backup; the core data flow moves onto the platform.
  - **Phase 3 — Live leaderboard as event experience.** Provisional ranking on a big
    screen, by year/level, updating live; instant award-list / certificate data (no
    manual spreadsheet entry). **Leaderboard split: parents/staff see the full
    ranking; children see progress / badges / personal best / completion** — protects
    young learners (K2 = 41%) and is *how we soften the "elite" tone (Q7) without
    losing credibility*.
  - **Phase 4 — Live results feed the online profile.** Live-verified score writes
    back into a longitudinal, cross-context **ability portfolio** (live + online +
    practice + integrity + skill-domain history + percentile trend + live-vs-online
    consistency).
- Why: reframes TPC from an **event business** into an **assessment infrastructure
  + recurring subscription + live verification** hybrid. The real product becomes
  the **cross-context longitudinal portfolio**, not a one-off report (the report is
  a snapshot export of it). The portfolio **compounds** — every month of data makes
  it more valuable and harder to copy → the deepest moat. It also *retroactively
  justifies* building the question/marking/ranking engine (ROADMAP WS4–WS8) even
  though "measurement, not content, is the moat": that engine **is** the live-event
  infrastructure, and online is its low-risk proving ground.
- Discipline: the arc is the destination, **not a pre-committed build-out**. Phases
  2–4 stay gated on Phase-1 validation (esp. E1 trust-transfer, report WTP). Don't
  buy iPads / build on-site infra on faith.
- Links: D3 (live=apex) · D6 (integrity) · H1 · H6 · Q7 (leaderboard split softens
  tone) · Q9 · ROADMAP WS4–WS8 (the Phase-1 engine), WS7 (test/ranking)
- Revisit: Phase-2 trigger = Phase-1 engine proven (see Q9).
