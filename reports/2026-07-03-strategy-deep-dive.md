# Deep-Dive Report #1 — Strategy, Scaling & What Breaks First

- **Date:** 2026-07-03
- **Author:** Claude (Fable 5), commissioned by the founder
- **Method:** 3 parallel deep-dive agents (business plan · platform engineering · GTM/ops) + 2 adversarial red-team agents (economics skeptic · execution skeptic), ~418K tokens of review across both repos, all business ledgers, the live marketing site and live app, plus first-hand verification of every load-bearing claim.
- **Scope note:** this is a point-in-time review. It records findings — it deliberately changes nothing in the Workspace or Business space. Stale items it names were left as-is for the founder to action.

> **TL;DR 一句版:** engineering 已經唔係 critical path — content、trust、同一個 E1 日期先係。Code ~90% 完成，content ~0%，north-star experiment 冇日期。三個月內最重要嘅唔係再 build,而係用最平嘅方法攞 E1 第一個數。

---

## 0 · Act-now hazards 即刻要處理（本 review 已核實）

**1. Content-security incident — real papers were publicly exposed.**
A set of real TPC challenge papers (TPC01 K2/K3), complete with answer keys, explanations and marks — including a set named for the July 2026 monthly challenge — was publicly exposed via one of the public repos. The current version was cleaned the same day, but git history retention means the material remains recoverable until the repo is fully recreated. Consequences and required actions:

- Treat **all TPC01 items as burned for any scored use**. The first online challenge must use freshly authored items.
- Recreate the affected public repo (history purge, not just a new commit). ~1 hour of work.
- For a company whose only product is trustworthy measurement, nothing else on the board outranks this.
- Full technical detail is deliberately kept **off** this public page; it lives in the private repo's handoff notes and the session log.

**2. Stale local clone is a production footgun.**
The local working copy of the platform's private repo cannot currently fetch from origin (credential failure, verified) and holds the **pre-hardening** backend — six revisions behind the live service. The documented redeploy command builds from local source, so one obedient future session would silently revert the CORS allow-list, rate limits, retry/cache and audit logging. Fix: repair credentials → hard-sync → add one runbook line: *"verify live rev ≥ 00027 before any deploy."*

---

## 1 · Workspace & dashboard review 工作區檢視

**Mechanical health: good.** Linter passes clean; changelog at 37 entries (under the 40 rotation threshold); the D8 governance system (one global truth, cite-never-restate, CI linter, weekly librarian) is genuinely well designed — rare discipline for a 3-person company.

**Content staleness found (recorded, not yet fixed — founder to confirm):**

1. `focus` still says "ONE ACTION LEFT: deploy WS5-00+00b" — but the changelog in the same file records that deploy as done and live-confirmed, with two later deploys on top.
2. `projects[tpc-online-platform].next` repeats the same stale claim and cites an outdated test count.
3. Roadmap item **WS5 · Admin & content is `todo`** while the WS5 frontend track is code-complete and the admin tab is deployed live — should be `active`; the board still lists WS5 under *next* when it is clearly *now*.
4. Minor: the `entrance-qr-scan` card still carries its migration placeholder note; AGENTS.md still refers to the pre-migration `dashboard/` folder name.

The pattern: deploys land faster than the derived views (`focus`, `next`, roadmap states) get re-stamped. The append-only changelog is accurate; the summaries lag.

**The one governance gap that matters:** E1 — the north star, on which the entire online thesis rests — has been status `PROPOSED` since 2026-06-27 with **no date, no owner, no payment method**, and nothing in the ledgers binds it to a calendar.

---

## 2 · The business, as evidenced 商業現況同證據

What the ledgers actually establish (evidence audit across H1–H6, E1–E3):

| Bet | Status | What the evidence really says |
|---|---|---|
| H1 parents pay for measurement | PARTIAL | Real: 53% report attach (71/134) at ~79% margin, ~88% full price. But bundle-discount-driven and **live-context only**. |
| H2 WTP transfers to at-home online | **UNVALIDATED** | "Evidence: none yet" — and 100% of projected online revenue rests on it. |
| H3 online self-sustains at modest attach | MODELLED only | Needs ~12% attach at the hoped ~$10K/mo cost, ~19% at today's ~$16K — and the real cost is untracked (Q3). |
| H4 demand is D2C parent-pull | SUPPORTED | Social 51% / search 16% / HKYCAA 11% / email 9% / teachers ~3%. |
| H5 costs trend down with AI | ASSUMED | The binding cost is human trust-labour (content QC, report QC) that the plan itself refuses to automate — it rides wage curves, not model-price curves. |
| H6 integrity = the paid moat | ASSERTED | Not yet market-tested. |

**The economics stress point.** H3's table divides by 1,000 free **users**, but E1's metric is attach on challenge **completers**. If 1,000 signups yield 30–40% completers, the required attach on completers is ~30–40% — dangerously close to the live 53% that was itself bundle-inflated. And the WS5-15 content floor (QC alone HK$2.5–8.5K/mo at K2/K3 scope, HK$10–34K/mo at all-level scope) can consume the entire ~$10K "future cost" row before authoring and illustration are even counted. The null hypothesis for cold freemium conversion is 2–5%; the plan needs 12–29%. **E1 is not a confirmation exercise — it is a genuine coin flip.** Which is exactly why it must run now and cheaply, not after five more engineering milestones.

**The funnel has no top (verified live).** thepyramidchallenge.org contains zero links to the online platform. A parent today cannot travel the funnel at all. The free tier is unlaunched; every paid online rung is unbuilt; the app lives on a github.io URL (a trust tax on a trust brand). Meanwhile the cheapest fixes in the whole workspace — one Squarespace nav link, a custom subdomain, one email to the 134 Season 2 families — need zero engineering.

---

## 3 · The core insight 核心洞察

**The bottleneck moved, and the roadmap hasn't noticed.**

AI collapsed the cost of software — TPC's own repos prove it (a hardened, tested, full-stack platform built in ~6 weeks by 1.5 people plus agents). But the plan still behaves as if engineering is the critical path. It isn't anymore. The actual critical path runs through the three things AI cannot mint:

1. **Content** — code ~90% done; content ~0% done. Production holds 30 dummy arithmetic rows against a need of ~50 approved questions/month for even a K2/K3-only launch — and the sizing/staffing question (WS5-15/Q1) went on hold the same week the admin console got its polish. The factory is beautiful; there is no raw material.
2. **A date** — E1 is the single biggest bet in the ledger and it has no calendar date, no owner, no payment rail, sequenced behind five engineering milestones. The Constitution says *learning before revenue*; current execution is *building before learning*.
3. **A funnel top** — see above. Zero links, zero public launch, zero acquisition plan for the 1,000-free-user target, and no named owner for the 51% channel (social).

---

## 4 · Market reality check 市場對照

The workspace contains **no competitor file**. The red team looked (public sources, 2026-07-03):

- **MathConceptition** — covers 12 grades *including kindergarten*, 10,000+ HK/GBA participants, free entry via schools, and a contest report **included** in the participant portal.
- **華夏盃** — free preliminaries distributed through school circulars.
- **MAOHK** — free online K1–P6 maths competition with rankings.
- **Math Kangaroo HK** — already ran 6,708 HK/Macau students **online with virtual proctoring**, which weakens the claim that credible online measurement can't be replicated without a live event.

The slot TPC wants is occupied by brands with 15–75× the volume and a zero-CAC school channel TPC does not have (teacher referral ~3%). The one-sentence question that must have a true answer before assuming 12–19% attach: **「TPC 張 $99 report 講到啲乜，係 MathConceptition 嗰份 included report 講唔到嘅？」** A ~HK$400 mystery-shop of a competitor's report would answer it in an afternoon.

---

## 5 · Moves 行動建議

### 3 個月 (Jul–Sep 2026): stop building, start measuring

**Week 1 — hygiene and free wins:**
- Purge the exposed papers (recreate the public repo); declare TPC01 burned for scoring.
- Fix the local-clone credentials + add the runbook rev-check guard.
- Add the platform link to the Squarespace nav; move the app to `practice.thepyramidchallenge.org`.
- Write two one-sentence decisions into the ledger: **(a)** first online challenges are **windowed (24–72h), never gun-start** — this single sentence makes E1 runnable at hundreds of participants on the existing stack and deletes the database migration from the E1 critical path; **(b)** an **E1 calendar date within 6–8 weeks, with a named owner**.

**Weeks 2–6 — the content sprint and the dirty E1:**
- Author **25 real K2 questions through the actual QC bar, timing every step** — one week that answers whether the content floor is HK$2.5K or HK$8.5K/month and whether launch is possible at all.
- Small-class pilot as soon as those 25 questions exist (seeding bypasses the admin console anyway — the pilot does not need to wait for it).
- **Run E1 dirty:** email the 134 Season 2 families → free windowed challenge → $99 report offer, manual FPS/PayMe, existing Sheets→Affinity pipeline. Read the result as an **upper bound** (warm, live-verified cohort): warm attach ≥25% makes cold 12–19% plausible; warm attach <10–15% kills H2 for the price of one email.
- Interview 10 Season 2 report buyers; mystery-shop a competitor report → the workspace's first competitor file.
- **Date Season 3.** E1's own method says "alongside Season 3" — no S3 date means the north star has no deadline. Break-even needs 199 heads; the venue ran at 18% capacity; the +65 marginal participants are ≈HK$29K of nearly pure contribution on the same fixed cost.

### 6 個月 (Oct–Dec 2026): fork on the E1 read

- **Warm attach ≥ ~25%** → go public with monthly cadence, **K2/K3 only** (the content floor at 2 levels is absorbable; at 8 levels it eats the whole cost budget). Name a content owner with a budget. Replace manual checkout once orders pass ~30–50/month. Make the datastore call (Supabase — one migration buys transactional safety, percentile SQL and history joins; ~1–3 weeks of work, and it is a rewrite of ~20 functions, not the "adapter flip" the docs imply).
- **Warm attach < ~10–15%** → don't push a dead door. Reposition: sell the online report only to live-verified families (trust-anchored), and re-cast the online platform as the live event's CAC engine (E3) — the economics may support that even if standalone online revenue doesn't.
- Either way: Season 3 executes toward 199 with owned channels + the platform list + the Top-3% coupon; the $580 bundle seeds E2; Q3 cost tracking runs so the real H3 row is known; the concurrency load test gets an actual pass number; and **someone is named as marketing owner**.

### 12 個月 (through mid-2027):

- **Positive branch:** industrialise the three floors — content (AI-drafting under human QC un-held once quality clears the bar, contractor authoring per question), payments (full rail), datastore (done before any synchronous event). Then and only then: expand levels, trigger the live-event digitisation (D7 Phase 2, per Q9), consider multi-region (Q8). The compounding cross-context portfolio becomes real after ~6 months of monthly cadence — that is the actual moat, and it is a 2027 asset.
- **Negative branch:** TPC is a live-first assessment brand with an online CAC-reducer. Two events/year at 300–400 heads with 53% report attach is a genuinely profitable small business (~HK$45–90K per event contribution from reports alone at scale) — smaller than the thesis, but real.

---

## 6 · How to rapidly scale 快速擴張嘅真答案

The rapid-scale lever is **not** platform users — it is the **flywheel between the two legs**. The live event has ~5× venue headroom on the same ~HK$90K fixed cost; every marginal participant is ≈$453 of nearly pure contribution — but ads CAC ≈ ARPU means those participants cannot be *bought*. The online free tier exists to make live participants ~free to acquire; the live event exists to make online attach possible. Scale = spinning that loop faster:

> owned list → cheaper live fill → more trust minted → higher online attach → bigger list

The report line is already built for it (labour-flat to ~700 units per batch). Everything else — subscriptions, all 8 levels, iPads, live leaderboards — is correctly gated and should stay gated.

The scale sequence for the platform itself: fix the funnel top → warm cohort → **windowed** challenges (hundreds of participants on the current stack) → datastore migration → only then synchronous/gun-start formats at thousands.

---

## 7 · What breaks first 邊度先爆（排序）

| # | What | Breaks at | Mechanism |
|---|---|---|---|
| 1 | **Content** | Launch week 1 / month 2 | 30 dummy rows vs 50/month needed; unstaffed, on hold. **Already broken today.** |
| 2 | **Trust integrity** | First prize-bearing challenge | Burned question bank + "log day 1, enforce later" + thinnest cohorts + a $200 coupon incentive. One visibly gamed Top-3% and the percentile — which *is* the product — is dead. |
| 3 | **Sheets backend** | ~40–50 simultaneous sign-ins / ~30 concurrent quiz-takers | One service account ≈ 60 reads + 60 writes/min; a login costs ~9 calls; every answer re-reads a whole tab. A gun-start of 200 kids is 5–7× over quota → spinners in front of six-year-olds. The windowed-challenge decision defuses this **for free**; the datastore migration retires it. Note: `max-instances=1` is load-bearing for correctness — adding instances *reintroduces* race conditions; the escape is the datastore, never more instances. |
| 4 | **Manual ops** | ~30–50 paid orders/month | Manual checkout + reconciliation + dispatch lands on a founder running three companies. |
| 5 | **People** | The next recurring process added | No marketing owner, no content owner, founder ÷ 3 orgs. The plan implies a fourth full-timer who does not exist. Either hire the capacity or shrink scope (K2/K3, bi-monthly) — choosing neither is choosing failure by default. |
| 6 | **Live CAC** | Any paid-ads growth push | Season 2 ads CAC ≈ ARPU ($453) — paid growth is zero-margin until the owned funnel works. |

---

## 8 · 直話直說 — red-team challenges（俾 founder 嘅真心話）

1. 你個 decision system 好誠實咁寫住 H2 係 *"the single biggest bet the whole funnel rests on / Evidence: none yet"* — 但 E1 到今日仲係 PROPOSED，冇日期、冇 owner、冇收款方法，而成個 sprint 嘅火力擺咗喺 E1 上游四、五個 milestone 嘅 engineering polish。Constitution 話 revenue 排最尾因為 learning 排最先 — E1 就係 learning。而家個做法係 learning 都排埋最尾，剩低嘅係 building。
2. 你嘅 thesis 自己打自己:Constitution 話 trust 係 LIVE 鑄造、H2 承認 online *structurally lower-trust*、D1 仲特登將 online report 定價低過 live report 嚟強化呢個訊息 — 然後成條 online revenue 假設家長會為一個你自己都話冇咁可信嘅 measurement 俾錢。如果 trust 唔 transfer,online 唔係 scale engine,係一個好貴嘅 mailing list。
3. 53% 呢個數做緊超出佢負荷嘅工作:n=134、單一 event、early-bird bundle 壓價買返嚟。佢證明咗「有啲香港家長喺付費實體賽事入面會加購報告」,冇證明過任何 online 嘢。所有 online projection 應該改用 freemium 2–5% 做 null hypothesis。
4. 你將 Q1/WS5-15 hold 咗,但同一份 ledger 話佢 gates *"the whole funnel top"*。Content cost 唔係 development-stage detail — 佢決定咗 E1 及唔及格嘅分數線。而家係「唔知租金幾多就開緊間舖」。
5. 三個組織、三個人、冇 marketing owner、冇 content owner:個 plan 隱含咗第四個 full-time 人,而嗰個人唔存在。要麼縮 scope,要麼認真請人 — 唔好兩樣都唔做。
6. Season 3 係成個 2026 success definition 嘅一半,但全 workspace 搵唔到日期、場地、budget。訂咗日期,個系統先有時鐘。

---

## 9 · 平價實驗清單 — what would settle each objection

| Objection | The experiment that settles it | Cost |
|---|---|---|
| H2 trust-transfer | Dirty E1 to the 134 warm families (windowed challenge + $99 report, manual payment) + 10 buyer interviews | ~HK$0 build, 4–6 weeks |
| Cost floor / which H3 row | Track one real month of all-in cost (Q3) + author 25 real questions **timed** | ~2 hours/month + 1 week |
| Competition | Mystery-shop MathConceptition's included report; side-by-side vs TPC 報告 | ~HK$400, one afternoon |
| Funnel/denominator | Squarespace nav link + public free tier + 4 weeks of signup & completion data | ~1 hour, zero engineering |
| Live-leg CAC | Publish Season 3 date + pre-registration; track owned-channel share vs Season 2's ~20% | A landing page |
| Pricing | A/B $49 vs $99 first report inside E1; instrument the $198 upgrade prompt | Free inside E1 |
| Concurrency | Give the load test a number and run it (ramp logins until the latency knee) | Hours |

---

## Appendix · Method & inputs

- **Inputs read:** all Business-space ledgers (CONSTITUTION, D1–D8, H1–H6, E1–E3, Q1–Q9), `data.js` + changelog archive, both platform repos (docs, backend source line-by-line, frontend structure, test suites executed locally), top-level workspace docs, `pyramid-site`, `entrance-qr-scan`, live fetches of thepyramidchallenge.org and the live app, and public competitive sources.
- **Verification:** every load-bearing claim in §0 was re-verified first-hand before publication; agent findings were treated as leads, not facts, until checked.
- **Known limitation:** the deployed backend revision could not be source-verified from this machine (see hazard #2) — its hardening state is attested by the dashboard changelog only.
- **Next report:** commissioned on demand (定期 by founder request). Suggested cadence: after the E1 warm-cohort read, then quarterly.
