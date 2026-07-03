# Hypotheses (H#)

Working bets with an honest validation status. The job of this file is to stop us
mistaking an *assumption* for a *fact*.

Status: `UNVALIDATED` · `PARTIAL` (some evidence) · `VALIDATED` · `REJECTED`

---

### H1 — Parents pay for measurement/insight, not content
- Status: **PARTIAL** (validated only in the live-event context)
- Domain: pricing, brand
- Updated: 2026-06-27
- Belief: the load-bearing wall of TPC — parents will pay for credible
  measurement, not for more questions.
- Evidence for: Season 2 (first near-market-reality live event, near-zero
  discount): **report attach 53%** (71/134) at **~79% margin**. ~88% paid full
  price. Demand was **D2C** (see H4).
- Evidence against / caveats: it's "just over half", not 70–80%; mostly driven by
  the early-bird bundle ($170 vs $280 original) so full standalone WTP is
  under-tested; and it only proves measurement **attached to a credible physical
  event** — not at-home online (that's H2).
- Links: D1 · D3 · [[tpc-season2-economics]] · [[tpc-report-product]]

### H2 — The measurement WTP transfers to at-home online (the trust-transfer bet)
- Status: **UNVALIDATED** ← the single biggest bet the whole funnel rests on
- Domain: trust, platform
- Updated: 2026-06-27
- Belief: parents will pay (a $99 one-off report, then a $198/$298 tier) for
  measurement based on an at-home, un-proctored online challenge — not only after
  a physical event.
- Evidence: none yet. The report sells at the live event *because* the result is
  credible; online is structurally lower-trust. Mitigations in play: seeding the
  online ranking with verified live scores (a "✓ verified" badge), the Top-3%
  live coupon, and feeding live results back into the online profile.
- How we'll know: **E1** (online $99 report attach rate) and **E2** (bundle
  renewal rate).
- Links: D1 · D4 · E1 · E2 · Q2

### H3 — Online can self-sustain at a reachable report-attach rate
- Status: **MODELLED, UNVALIDATED**
- Domain: pricing, platform
- Updated: 2026-07-03
- Belief: because online cost is software-leveraged and the $99 report is
  high-margin, self-sustain needs only a modest attach rate, not the live 53%.
- Model (online report $99, ~$85 contribution; 1,000 free users):

  | Online monthly cost | $99 report buyers/mo to cover it | = attach on 1,000 free |
  |---|---|---|
  | ~$10K (future maintenance: post-sprint + AI leverage) | ~118 | **~12%** |
  | ~$16K (current lean, no ads) | ~188 | ~19% |
  | ~$25K (with ads) | ~294 | ~29% |

  Cost components: part-time build/content labour + AI tooling + infra (the
  all-in bands in the table above). Founder's thesis: cost **declines** as the infra sprint completes and
  frontier models cut build effort (see H5). Reports reach self-sustain with
  ~4–5× fewer buyers than subscriptions ($28/mo-equiv would need ~360–890).
- Content-floor update (WS5-15 sizing draft, 2026-07-03): assume one **20-question**
  monthly challenge set per active level plus a 25% approved-question reserve,
  i.e. **25 approved questions / active level / month**. K2/K3-only launch =
  **50 approved questions/month**; K2-P6 all-level launch = **200 approved
  questions/month**. QC-only floor at 15-25 min/question and HK$200-400/hour is
  roughly **HK$2.5K-8.5K/month** for K2/K3 or **HK$10K-34K/month** for all 8
  levels; authoring, illustration, report QC, and rework sit on top. This keeps
  the H3 ~$10K future-cost row plausible only if level scope stays narrow or
  AI+human-QC materially reduces authoring load.
- How we'll know: E1 attach + actual cost tracking (Q3).
- Links: D3 · D4 · E1 · Q1 · Q3 · ROADMAP WS5-15

### H4 — TPC demand is D2C parent-pull, not channel-push
- Status: **SUPPORTED** (good news for a direct-trust moat)
- Domain: growth
- Updated: 2026-06-27
- Belief: families come to TPC directly, not via tuition-centre/teacher channels.
- Evidence: Season 2 acquisition — social media 51%, Google search 16%, past
  HKYCAA 11%, own email 9%, **teacher/school referral only ~3%**. Online platform
  is D2C-native, so this de-risks the funnel. Constraint becomes **CAC + social
  dependency**, and ~11% is cross-subsidised by the existing HKYCAA audience.
- Links: H1 · [[tpc-season2-economics]]

### H5 — Build/maintenance cost trends down over time (AI leverage)
- Status: **ASSUMED** (founder's core thesis; plausible, untracked)
- Domain: ops, platform
- Updated: 2026-06-27
- Belief: after the major infrastructure sprint, active builder hours drop; and
  frontier-model leaps make planning/building faster with lower late-stage
  complexity → online's cost floor falls.
- Caveat: the floor is **not** ~$0. There is a recurring **content + report-QC**
  cost (fresh monthly quality questions + the report-QC batch) that is tied to
  trust — over-automating it risks the moat (see Q1). Key-person: the platform is
  maintainable in-house even if the current owner is unavailable, so the real
  floor is "who staffs content/QC", not "who writes code".
- Links: H3 · Q1 · Q3

### H6 — Credible-ranking / integrity IS the paid-tier moat (not a feature)
- Status: **ASSERTED** (strategic belief; follows from H1 + D3, not yet market-tested)
- Domain: trust
- Updated: 2026-06-27
- Belief: because AI makes content/questions ~free, TPC's defensible value is a
  *credible, graded, explainable* benchmark. The integrity system is therefore the
  core moat of the paid tier — and its deepest, hardest-to-copy mechanic is
  **ability-profile consistency calibrated against live results** (online-inflated
  vs live-median → flag), which a competitor without a live event cannot replicate.
- Evidence: consistent with H1 (parents pay for credible measurement) and D3 (live
  = credibility anchor); the price ladder already encodes it ($99 online vs $160
  live report, D1).
- How we'll know: whether the integrity tier moves willingness-to-pay / prize trust
  (ties to E1/E2); whether live-vs-online calibration yields actionable flags.
- Links: D6 · D1 · D3 · H1
