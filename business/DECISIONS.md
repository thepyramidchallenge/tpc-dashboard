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

### D3 — Live = credibility loss-leader; online + reports = the profit engine
- Status: ACCEPTED (founder "buys" the reframe, 2026-06-27)
- Updated: 2026-06-27
- Body: Treat the live event primarily as the trust/verification layer, not the
  early revenue layer. The structural profit pool is **online + reports**
  (software-like, high margin); live mints the credibility that makes them sell.
- Why: Season 2 unit economics — live is high-fixed-cost, demand-starved,
  CAC≈ARPU, capacity-capped → structurally hard to profit. Online/report have
  near-zero marginal cost and ~79–85% margin.
- Evidence: Season 2 cost $90K vs revenue $60.7K (−$29.3K); ARPU $453; ads CAC
  ≈ ARPU. Report line ~79% margin. (See H1, H3.)
- Links: H3 · ROADMAP (live event is not in the WS plan; platform is)
- Revisit: if the founder decides live must stand alone at break-even long-term.

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
