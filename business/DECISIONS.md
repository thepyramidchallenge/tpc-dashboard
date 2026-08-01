# Decisions (D#)

Accepted business-level decisions and the evidence behind them. Product/technical
decisions live in `tpc-online-platform-admin/docs/ROADMAP.md`. Newest entries can
go at the bottom; never reuse a number.

---

### D1 — Pricing & funnel architecture
- Status: ACCEPTED
- Domain: pricing
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
- Status: ACCEPTED (Max agreed 2026-06-27)
- Domain: pricing
- Updated: 2026-06-27 (attribution resolved 2026-07-16 — D9)
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
- Domain: live, platform
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
- Domain: pricing, platform
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
- Status: ACCEPTED (Max agreed 2026-06-27)
- Domain: trust, brand
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
- Domain: trust
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
- Domain: platform, live
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

### D8 — Workspace governance: one global truth, module docs cite it, machine-enforced
- Status: ACCEPTED
- Domain: workspace
- Updated: 2026-07-03
- Body: TPC keeps **one global Business Space** — no per-module
  CONSTITUTION/DECISIONS/ledgers, ever. Three layers: (1) **Global truth** —
  CONSTITUTION, D/H/E/Q ledgers (each entry now carries a `Domain:` tag;
  `business/INDEX.md` is auto-generated by `scripts/build-index.js`),
  data.js (status + module registry); the WS work-breakdown stays in
  `tpc-online-platform-admin/docs/ROADMAP.md`. (2) **Module space** — each
  platform repo holds implementation docs only (README with a "Governing
  decisions" section, ARCHITECTURE, RUNBOOK, HANDOFF), which **cite D#s and
  never restate them**. (3) **Enforcement** — shared linter
  (domain enum, index staleness, forbidden ledger filenames in module docs,
  module cross-refs must resolve, changelog size warning), CI, weekly
  librarian. Changelog rotation: when data.js changelog exceeds ~40 entries,
  keep the newest ~30 and append the rest to `changelog/ARCHIVE-YYYY-MM.md`
  (append-only).
- Deliberately NOT done: no ledger splitting before ~50–60 D# entries; no
  build step between data.js and any roadmap source; no per-module
  dashboards; no vector/RAG search.
- Why: business decisions are cross-cutting, so module-level decision files
  would create parallel truths. Domain tags + the generated index give
  humans and agents scoped navigation without fragmenting the ledgers.
- Links: D6 · CONSTITUTION · AGENTS.md · business/README.md ·
  scripts/check-workspace.js · tf-dashboard decision no. 21 (same model,
  both of Max's workspaces; bare cross-workspace D-tokens are avoided here
  so the reference linter stays unambiguous)
- Revisit: changelog >40 · D# >50 · an agent citing a wrong decision due to
  ledger noise.

### D9 — Decision attribution follows the originating person and device
- Status: ACCEPTED
- Domain: workspace
- Updated: 2026-07-31
- Body: Human decisions are attributed by **originating account/device**, per the
  map below. Named agent implementation and review attribution stays with that
  agent, unchanged.

  | Origin | Attributed to |
  |---|---|
  | `ktf@Hais-MacBook-Pro` — the dev Mac holding the `TPC Root` workspace | **Max** (founder) |
  | Max's other computer | **Max** (founder) |
  | `/Users/hkycaa` MacBook, general operation | **Natalie** |
  | `/Users/hkycaa/Documents/TPC-webpage-UI-Dixon` and later Dixon-directed work | **Dixon** (intern, joined 2026-07) |

  A person, not a directory, is the unit: work Dixon initiates or
  acceptance-directs is Dixon's even though it originates inside Natalie's
  account, and work Natalie initiates there stays Natalie's. Where a device is
  shared, whoever initiated and accepted the change is the attributed person.
  Historical generic “founder” labels are resolved **per workspace**, because the
  label meant different people in different repos: in `tpc-online-platform`
  founder = **Natalie**; in this dashboard — the Business Space, the ledgers and
  the commissioned reports — founder = **Max**. Append-only archives
  (`changelog/ARCHIVE-*.md`) and Git history stay unchanged and are read under
  this rule.
- Why: TPC is now operated by three people across three accounts; a shared role
  label, and a two-device map, both erased who actually made each decision.
- Evidence: Natalie confirmed on 2026-07-16 that the `/Users/hkycaa` MacBook is
  exclusively hers, that decisions originating from the other computer are Max's,
  and that the dashboard groundwork, Business Space and reports were built by Max.
  The per-workspace split is corroborated by wording that predates this decision:
  the platform's `CLAUDE.md` stated “This project is owned by **Natalie**”, while
  `business/README.md` listed Natalie *separately from* “the founder” — so the
  two labels were never the same person. Git authorship did **not** distinguish
  the devices (316 of 320 platform commits carried the shared `HKYCAA
  <info@pyramidchallenge.org>` identity), so blame/reflog was not and cannot be
  the basis for anything before 2026-07-31. The 2026-07 amendment was forced by
  two facts the original map could not express: the dev Mac (`ktf`) is a third
  account it never named, and Dixon — a new intern — initiated and
  acceptance-directed the live learner-language release (`d97d492`, Pages
  workflow `30619332923`) from inside Natalie's account.
- Enforcement: Max ruled on 2026-07-31 that every change originating from the dev
  Mac is signed Max. That account's global Git identity is therefore
  `Max <info@pyramidchallenge.org>`; commits made there from 2026-07-31 onward
  carry it, and blame is authoritative for the dev Mac from that date forward.
  Other accounts keep their existing identity — Git author alone still does not
  separate Natalie from Dixon, so their split rests on this ledger.
- Links: D8 · AGENTS.md · data.js · business/README.md
- Revisit: if a device becomes shared without a named initiator, the operators
  change again, Dixon's role changes, or a decision is intentionally joint.

### D10 — Three-person ownership re-cut for the UAT sprint
- Status: ACCEPTED
- Domain: workspace, ops
- Updated: 2026-07-31
- Body: Ownership across the platform is re-cut for the founder sprint
  (2026-07-31 → UAT week 2026-09-10..13): **Max** owns learner-facing UI/UX
  (Home, Practice, 答題畫面, settings, parent shell), the visual question
  factory (scene-spec → SVG) and generation operations; **Natalie** owns the
  data layer, integrity/audit machinery, backend, governed generation lane and
  admin platform; **Dixon** (intern) owns the reports page and question-review
  operations (math/curricular correctness). K-level developmental-fit review
  sits with Max (OT background). pyramid-site work is paused for the sprint
  and resumes after UAT. Review duty is bounded: Dixon's review load stays
  under ~1.5 h/day so reports work survives.
- Why: Max moved from Team Futura dev onto the platform on 2026-07-31; the old
  two-owner split (D9 owners map) no longer matched who does what, and Dixon's
  role had grown past "intern helping".
- Evidence: Max ruled this on 2026-07-31. Dixon initiated and
  acceptance-directed the live learner-language release (platform d97d492);
  he is a qualified primary-level math tutor; neither Dixon nor Natalie
  teaches kindergarten, which is what routes K-level developmental fit to Max.
  Natalie's async review is pending — she may challenge any boundary.
- Links: D9 · data.js owners · tpc-online-platform-admin/docs/RECIPE_HARNESS_SPEC.md
- Revisit: at UAT close-out; if Natalie's review objects; if Dixon's role or
  hours change.

### D11 — Offline recipe harness: mandate and hard boundary
- Status: ACCEPTED
- Domain: platform, content
- Updated: 2026-07-31
- Body: Generation-recipe iteration (August) runs in an **offline harness** on
  Max's dev Mac, consuming frozen snapshots of the production contracts
  (QF-GEN-2026-07-23b, QF-JUDGE-2026-07-31a+35d3129, question schema, qff1
  category vocabulary) so the proven recipe transfers 1:1 into the governed
  lane. Hard rules: every harness-generated question is throwaway and
  internal-only (per the accepted WS5.2-01a scope); **nothing from the harness
  is ever imported into production** — after the recipe converges, production
  content is regenerated through the governed lane so live questions carry
  real provenance (D6); the harness touches no production surface and leaves
  the WS5.2-04 Treasure hold untouched. Founder start was ruled without a
  prior sync: the spec's open questions became async review items for Natalie.
  Convergence gate: two consecutive 30-question holdout validation batches at
  ≥75–80% Dixon pass → GO/NO-GO 2026-08-21..23; NO-GO cuts scope, not the
  deadline.
- Why: the production feedback loop is deliberately dormant (shadow gate,
  activation refused until the matched-comparison contract), and iterating
  recipes through the governed lane would pollute production ledgers with
  throwaway rows — while the calibration precedent (01c Run 001, offline,
  payload-private) already established the offline pattern.
- Evidence: RECIPE_HARNESS_SPEC.md (ACTIVE, platform repo branch
  docs/offline-recipe-harness-spec) with the scene-spec visual design and
  working PoC (factory-harness/visual-poc.html, 7 archetypes K2–P6);
  WS5.2-01a decisions 2026-07-10 already required pre-launch generation to be
  in-house-only.
- Links: D6 · D10 · D12 · tpc-online-platform-admin/docs/RECIPE_HARNESS_SPEC.md
- Revisit: at GO/NO-GO 2026-08-21..23; if Natalie's async review objects; when
  WS5.2-04 gets its founder GO.

### D12 — Infrastructure stays on Sheets + Drive through UAT
- Status: ACCEPTED
- Domain: platform, ops
- Updated: 2026-07-31
- Body: No data-layer or asset-store migration before UAT. Google Sheets
  (behind the Cloud Run adapter) and Drive (asset library) remain the stack;
  the migration decision is deferred to ~2026-10 after UAT, taken on real load
  data. Triggers that reopen it: sustained concurrency trending toward the
  ~60 reads/min per-service-account quota (not a one-off spike), product
  queries Sheets cannot serve (e.g. D5 ranking at scale), or approach to the
  1000-free-user target. Pre-UAT hardening is operational only: invite waves
  (~10 families each), a W5 dress rehearsal load test, and a kid-friendly
  retry state for 429s. Factory-generated SVGs ship inline in the question row
  (they are text, versioned and reviewed with the question) rather than as
  per-image Drive registrations.
- Why: the 2026-07-30 incident proved the quota ceiling is real but also that
  the fixed cost is low (6 reads per cold sign-in, 2–3 warm); UAT scale
  (dozens of families in waves) fits with headroom, while a migration would
  re-verify the entire integrity/test surface inside a six-week window with
  zero slack — infrastructure is not the bottleneck UAT is testing.
- Evidence: July 30 Sheets incident (62 reads/min, 8 quota rejections) and its
  fix with production proof; the backend adapter was built for a later swap;
  UAT recruitment targets the Season 2 base in waves.
- Links: D7 · D11 · tpc-online-platform-admin/docs/ARCHITECTURE.md
- Revisit: ~2026-10 post-UAT with real load data, or on any trigger above.
