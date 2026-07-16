# Deep-Dive Report #2 — Visual Question Factory: Verdict, Corrections & the Parallel-Build Plan

- **Date:** 2026-07-03 (same-day follow-up to Report #1)
- **Author:** Claude (Fable 5), commissioned by Max
- **Trigger:** Max + ChatGPT strategic update proposing the Visual Question Factory as the highest-priority MVP, with E1 reframed as requiring 6–12 months of monthly cadence.
- **Method:** 4 parallel probes before writing — (1) archetype classification of all 40 real TPC01 K2/K3 items + visual reading of 17 rendered papers; (2) a **working feasibility micro-build** (scene-spec schema → deterministic SVG renderer → PNG → visual solve, built and run in a sandbox); (3) prior-art/market/rights research with sources; (4) an adversarial red team on the pivot itself. ~214K tokens; every load-bearing claim tagged FACT vs INFERENCE.
- **Scope:** analysis + proposals only. No ledger, workspace view, or platform repo was touched. Ledger drafts in §7 are for discussion.

> **TL;DR 一句版:** Factory — **起,但唔係用嚟代替 E1**。個 architecture 經 probe 實證可行(下面有真樣板),科學上有 25 年 AIG 文獻背書,個 niche 亦真係無人佔。但「要 6–12 個月先驗證到」呢句喺 ledger 入面無任何證據支持,而且 134 個 warm families 已經受過你講嗰種 trust treatment — **最細版 factory 一至兩星期起好,佢嘅第一批出品就係 E1 份卷,E1 喺 week 1 釘死日期。** 三個 archetype 只覆蓋真卷 ~20–28%,50 條/月要 8–12 個 archetype — week 1 答「條 loop 得唔得」,唔係「養唔養到 monthly cadence」。

---

## 1 · Verdict on the pivot 判決

**The factory concept survives — strengthened, in fact.** Three things the probes established that the ChatGPT discussion could only assume:

1. **The architecture demonstrably works.** The feasibility probe built the entire loop — JSON scene-spec schema (all 3 archetypes), a zero-dependency deterministic SVG renderer, PNG export, and answer verification — in **one agent session with zero debug iterations**. Below is an actual probe output, generated from a spec and solved correctly from the image alone:

<div style="max-width:640px;margin:14px 0;border:1px solid #dfe3e8;border-radius:10px;overflow:hidden">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" font-family="Arial, 'Noto Sans TC', sans-serif"><rect width="800" height="502" fill="#FFFFFF"/><text x="400" y="34" text-anchor="middle" font-size="26" font-weight="bold" fill="#1A1A1A">有幾多個紅色蘋果？</text><text x="400" y="62" text-anchor="middle" font-size="18" fill="#555">How many red apples are there?</text><rect x="30" y="78" width="740" height="240" rx="14" fill="#F4F6F8" stroke="#D8DEE4" stroke-width="2"/><g transform="translate(122.5 138)"><g><path d="M0 -19.074 C -36.414 -36.414, -36.414 24.276, 0 34.68 C 36.414 24.276, 36.414 -36.414, 0 -19.074 Z" fill="#E0442C" stroke="#333333" stroke-width="4" stroke-linejoin="round"/><path d="M0 -20.808 C -1.734 -32.946, 3.468 -38.148, 4.1616 -39.882" fill="none" stroke="#6B4A2B" stroke-width="5" stroke-linecap="round"/><path d="M4.1616 -34.68 C 17.34 -46.818000000000005, 29.477999999999998 -38.148, 27.744 -32.946 C 19.074 -26.009999999999998, 8.67 -27.744, 4.1616 -34.68 Z" fill="#5FA052" stroke="#333333" stroke-width="2.5"/></g></g><g transform="translate(307.5 138)"><path d="M0.0 -34.7 L8.6 -11.8 L33.0 -10.7 L13.9 4.5 L20.4 28.1 L0.0 14.6 L-20.4 28.1 L-13.9 4.5 L-33.0 -10.7 L-8.6 -11.8 Z" fill="#F5C518" stroke="#333333" stroke-width="4" stroke-linejoin="round"/></g><g transform="translate(492.5 138)"><g><path d="M0 -19.074 C -36.414 -36.414, -36.414 24.276, 0 34.68 C 36.414 24.276, 36.414 -36.414, 0 -19.074 Z" fill="#3E9B4F" stroke="#333333" stroke-width="4" stroke-linejoin="round"/><path d="M0 -20.808 C -1.734 -32.946, 3.468 -38.148, 4.1616 -39.882" fill="none" stroke="#6B4A2B" stroke-width="5" stroke-linecap="round"/><path d="M4.1616 -34.68 C 17.34 -46.818000000000005, 29.477999999999998 -38.148, 27.744 -32.946 C 19.074 -26.009999999999998, 8.67 -27.744, 4.1616 -34.68 Z" fill="#5FA052" stroke="#333333" stroke-width="2.5"/></g></g><g transform="translate(677.5 138)"><g><path d="M0 -19.074 C -36.414 -36.414, -36.414 24.276, 0 34.68 C 36.414 24.276, 36.414 -36.414, 0 -19.074 Z" fill="#E0442C" stroke="#333333" stroke-width="4" stroke-linejoin="round"/><path d="M0 -20.808 C -1.734 -32.946, 3.468 -38.148, 4.1616 -39.882" fill="none" stroke="#6B4A2B" stroke-width="5" stroke-linecap="round"/><path d="M4.1616 -34.68 C 17.34 -46.818000000000005, 29.477999999999998 -38.148, 27.744 -32.946 C 19.074 -26.009999999999998, 8.67 -27.744, 4.1616 -34.68 Z" fill="#5FA052" stroke="#333333" stroke-width="2.5"/></g></g><g transform="translate(122.5 258)"><g><circle cx="0.0" cy="-20.8" r="14.5656" fill="#8A4FBF" stroke="#333333" stroke-width="3"/><circle cx="19.8" cy="-6.4" r="14.5656" fill="#8A4FBF" stroke="#333333" stroke-width="3"/><circle cx="12.2" cy="16.8" r="14.5656" fill="#8A4FBF" stroke="#333333" stroke-width="3"/><circle cx="-12.2" cy="16.8" r="14.5656" fill="#8A4FBF" stroke="#333333" stroke-width="3"/><circle cx="-19.8" cy="-6.4" r="14.5656" fill="#8A4FBF" stroke="#333333" stroke-width="3"/><circle r="11.7912" fill="#F5C518" stroke="#333333" stroke-width="3"/></g></g><g transform="translate(307.5 258)"><g><path d="M0 -19.074 C -36.414 -36.414, -36.414 24.276, 0 34.68 C 36.414 24.276, 36.414 -36.414, 0 -19.074 Z" fill="#E0442C" stroke="#333333" stroke-width="4" stroke-linejoin="round"/><path d="M0 -20.808 C -1.734 -32.946, 3.468 -38.148, 4.1616 -39.882" fill="none" stroke="#6B4A2B" stroke-width="5" stroke-linecap="round"/><path d="M4.1616 -34.68 C 17.34 -46.818000000000005, 29.477999999999998 -38.148, 27.744 -32.946 C 19.074 -26.009999999999998, 8.67 -27.744, 4.1616 -34.68 Z" fill="#5FA052" stroke="#333333" stroke-width="2.5"/></g></g><g transform="translate(492.5 258)"><g><path d="M0 -19.074 C -36.414 -36.414, -36.414 24.276, 0 34.68 C 36.414 24.276, 36.414 -36.414, 0 -19.074 Z" fill="#3E9B4F" stroke="#333333" stroke-width="4" stroke-linejoin="round"/><path d="M0 -20.808 C -1.734 -32.946, 3.468 -38.148, 4.1616 -39.882" fill="none" stroke="#6B4A2B" stroke-width="5" stroke-linecap="round"/><path d="M4.1616 -34.68 C 17.34 -46.818000000000005, 29.477999999999998 -38.148, 27.744 -32.946 C 19.074 -26.009999999999998, 8.67 -27.744, 4.1616 -34.68 Z" fill="#5FA052" stroke="#333333" stroke-width="2.5"/></g></g><g transform="translate(677.5 258)"><path d="M0.0 -34.7 L8.6 -11.8 L33.0 -10.7 L13.9 4.5 L20.4 28.1 L0.0 14.6 L-20.4 28.1 L-13.9 4.5 L-33.0 -10.7 L-8.6 -11.8 Z" fill="#F5C518" stroke="#333333" stroke-width="4" stroke-linejoin="round"/></g><rect x="38" y="338" width="169" height="96" rx="12" fill="#FFFFFF" stroke="#C4CCD4" stroke-width="2"/><g><circle cx="60" cy="360" r="15" fill="#2B6FD4"/><text x="60" y="366" text-anchor="middle" font-size="17" font-weight="bold" fill="#FFF">A</text></g><text x="122.5" y="400" text-anchor="middle" font-size="42" font-weight="bold" fill="#1A1A1A">2</text><rect x="223" y="338" width="169" height="96" rx="12" fill="#FFFFFF" stroke="#C4CCD4" stroke-width="2"/><g><circle cx="245" cy="360" r="15" fill="#2B6FD4"/><text x="245" y="366" text-anchor="middle" font-size="17" font-weight="bold" fill="#FFF">B</text></g><text x="307.5" y="400" text-anchor="middle" font-size="42" font-weight="bold" fill="#1A1A1A">3</text><rect x="408" y="338" width="169" height="96" rx="12" fill="#FFFFFF" stroke="#C4CCD4" stroke-width="2"/><g><circle cx="430" cy="360" r="15" fill="#2B6FD4"/><text x="430" y="366" text-anchor="middle" font-size="17" font-weight="bold" fill="#FFF">C</text></g><text x="492.5" y="400" text-anchor="middle" font-size="42" font-weight="bold" fill="#1A1A1A">4</text><rect x="593" y="338" width="169" height="96" rx="12" fill="#FFFFFF" stroke="#C4CCD4" stroke-width="2"/><g><circle cx="615" cy="360" r="15" fill="#2B6FD4"/><text x="615" y="366" text-anchor="middle" font-size="17" font-weight="bold" fill="#FFF">D</text></g><text x="677.5" y="400" text-anchor="middle" font-size="42" font-weight="bold" fill="#1A1A1A">5</text></svg>
</div>

*Rendered deterministically from a JSON scene-spec by ~230 lines of dependency-free code; the answer (B) is machine-verified by recomputing from the spec. Programmer-art, not brand-art — that gap is precisely where Max's design skill enters (§2 Q4).*

2. **The science is 25+ years old and validates the design.** Template-based Automatic Item Generation ("item models" — Bejar/ETS; Gierl & Haladyna 2013) is exactly the scene-spec-as-truth pattern; the Sandia Matrix Generator proved rule-based **visual** item generation with modellable difficulty in 2010; and 2025 field studies (91 college classes, ~1,700 students) validated the LLM generate→critique→revise loop as producing items psychometrically comparable to expert-written ones. This is not a speculative architecture.

3. **The slot is genuinely unoccupied — for economic, not technical reasons.** Generic AI quiz tools are text-first with no verification; early-childhood visual leaders (Funexpected, Khan Kids) are handcrafted learning products, not assessment; academic visual AIG never shipped commercially; HK contest players author by hand. The intersection (K2/K3 visual · bilingual HK · contest-grade verified keys · monthly cadence) only matters to someone whose *business is* trustworthy measurement of pre-readers — i.e., TPC's exact thesis. **Corollary: the engine itself is weak defensibility (the components are public science); the moat is the calibrated item bank + difficulty data + brand it feeds. Speed matters more than secrecy.**

**But the sequencing framing does not survive.** The claim "one or two online tests won't validate; trust needs 6–12 months" fails three tests:

- **It has no evidence behind it.** No H#, no E#, no threshold. E1's own ledger entry says *"even 5–10% early is informative; track the trajectory."* A claim that no single result can falsify is not a hypothesis — it is insurance against a scary number.
- **It ignores the warm-cohort asymmetry.** The 134 Season 2 families **already received the repeated-exposure trust treatment** — physically, at the event, with 53% report attach. The 6–12-month argument applies to *cold* audiences only. A warm E1 ≥25% is an unambiguous green light available in weeks for ~HK$0; deferring it because cold trust takes months is a category error.
- **It recreates Report #1's flagged failure mode with the nouns swapped.** "E1 仲係 PROPOSED、冇日期、冇 owner、冇收款方法,而火力擺咗喺 E1 上游嘅 ___" — last week the blank said *engineering polish*; this proposal fills it with *content factory*. The sentence still scans.

**The synthesis: factory and E1 are complements, not rivals.** E1 cannot run on TPC01 (burned since the exposure incident) — it needs ~20–25 fresh K2 questions anyway. The factory's week-1/2 output **is** E1's question paper. One pipeline: minimal factory → first approved set → dated warm E1 → gate everything else on that read. And one insight the ChatGPT discussion missed entirely: **scene-spec parametric variants are literally D6's integrity MVP item #3** (question randomization: order + numbers) — after the TPC01 burn, spec-driven regeneration makes any future leak survivable in minutes. That value survives even if E1 returns 2%.

---

## 2 · The 10 questions, answered directly

**Q1 — Factory first, or manual E1 first?** Neither: **converged**. Minimal factory (1–2 weeks) whose sole deliverable is E1's set; E1 gets its calendar date in week 1, before factory code is written. Manual-only E1 wastes the authoring effort on unrepeatable output; factory-without-E1-date is the new procrastination. Hard rule from the red team: **if by end of week 1 E1 still has no date, stop factory work until it does.**

**Q2 — Is visual-first scope correct?** Directionally yes (K2+K3 = 57% of Season 2; pre-readers can't parse text) — but the real papers correct it in two ways. FACT: the proposed 3 archetypes cover only **8/40 = 20%** of the real TPC01 items (~32% of the visual ones). And **9/40 (22.5%) of real items are text-only arithmetic/word problems needing no renderer at all** — a text track is a near-free coverage win the visual-first framing ignores. Corrected scope: 3 visual archetypes + a **4th cheap one (visual comparison/extremum**: most-in-basket, longest-pencil, ruler-difference — 4/40 of real papers and trivially spec-able**)** + the text-arithmetic track → **>60% coverage**. The spatial family (15%, including most difficulty-3 visual items) genuinely can't be spec-rendered yet — park it.

**Q3 — Deterministic SVG or free-form AI images?** Deterministic, unambiguously — the probe settled this empirically. Grid-cell placement makes collisions impossible by construction; ground truth is machine-recomputable from the spec; output is byte-identical everywhere. Free-form image generation reintroduces every failure the architecture exists to kill (miscounts, ambiguity, non-auditability). AI illustration is a later *style layer* on top of spec-driven composition. Two probe findings that must become rules: **(a)** system emoji are disqualified — the same codepoint renders differently on iOS/Android, and "count the apples" must be pixel-identical for every child; bundle version-pinned SVG assets and publish **server-side PNG** (SVG `<text>` is also not device-deterministic for the bilingual stem); **(b)** multi-colour glyphs break colour predicates — a red apple has a green leaf, so "count the green things" is genuinely ambiguous to a 4-year-old; lint rule: colour-only predicates ⇒ single-colour geometric glyphs only.

**Q4 — Minimum visual quality for parent trust?** The bar is the real TPC01 style, which the archetype probe documented precisely: flat 2-tone vector glyphs (base fill + lighter highlight), no outlines on objects, pale-beige ellipse ground shadows, brand dark-teal for all text/banners/abstract shapes, bilingual stem lines, large bold choice numerals in bordered cells. The probe's programmer-art is legible but not adorable — and the probe's verdict is that **glyph craft at K2 legibility is the single hardest part of the whole factory**, the one part that cannot be delegated to an intern or an agent. This is where 你 as ex-brand-designer are the bottleneck resource: a curated, owned, brand-consistent SVG glyph pack (~100–200 canonical objects, built up over weeks, starting with ~6–10). Week 1 bootstraps with permissively-licensed sets — **Noto Emoji (Apache 2.0) or Fluent Emoji (MIT)**; avoid OpenMoji (CC BY-SA share-alike is a live ambiguity inside paid proprietary content); Twemoji acceptable with attribution.

**Q5 — How many approved questions/month for meaningful cadence?** The ledger already answers: 25/level/month (20-question set + 25% reserve) → **50/month for K2+K3** (H3/Q1). E1 itself needs only ~25 K2 (or 2×25 for both levels). But the honest structural answer: **a 20-question monthly set cannot be 3 archetypes repeated seven times** — pedagogically thin and visibly machine-made. Full cadence needs 8–12 archetype families, and each new archetype = new renderer capability + new solver logic + new failure modes. **The true cost curve is per-archetype engineering, which the current plan prices at zero.** Difficulty mix should replicate the real papers: ~60–65% easy / ~25% medium / ~10–15% hard, with the observed K3 signature move (planting the naive-procedure answer as a distractor) as an explicit difficulty lever.

**Q6 — Realistic QC time target?** First, the KPI must be honest: **total human minutes (including rejects and repair-round re-reviews) ÷ approved questions**. Worked example from the red team: 10-min reviews at 50% approval = 25 min/approved — *worse* than the current manual floor (15–25 min, Q1) while feeling faster. Target: **≤10 min/approved, all-in, at the genuine Season 2 quality bar**; kill threshold >20 min. And the 20–40 min "manual today" baseline is itself unmeasured — no external benchmark exists anywhere in the AIG literature (the probe looked), so **the manual control arm (Max hand-authors 25 questions, timed) is mandatory week-1 work**. It doubles as the reviewer's golden set. Measured internally, this number becomes a proprietary metric competitors don't have.

**Q7 — Copyright/similarity risks?** Own papers: unrestricted — mining TPC01 for archetypes, difficulty ladders and distractor patterns is clean use of own IP (and after the exposure incident, parametric distance from TPC01 items is *also* an integrity requirement, not just a legal nicety). Competitor papers: **ideas may inform a human-written taxonomy document; competitor material must never enter the generator's context window** (derivation trail + substantial-similarity exposure; HK enforces assessment-paper copyright for real — Cap. 528, HKEAA licensing, actual Customs prosecutions; HK fair dealing is narrow, not US fair use). Hygiene from day 1: a **provenance log per item** (spec hash, template id, asset licences) — cheap, and it's simultaneously the answer to a copyright challenge *and* to a parent's "how do I know these answers are right".

**Q8 — Integrate into WS5 admin now, or separate offline factory?** **Separate, emphatically.** A standalone `tpc-question-factory` repo whose only hand-off artifact is a **versioned batch file** (JSON + rendered images) matching the platform's existing contract: the `Questions` row schema (`questionId · domain · topic · level · engine=quiz · type=single_choice · prompt(JSON) · options(JSON) · answerRule(JSON) · … · difficulty · source · seedId · status=draft`), imported via the **WS5-04 sheet-script path** (which already bypasses the rate-limited API by design; `source` value = its own tag, never `real_seed`). Zero code coupling with Natalie's repos; the factory never writes to the DB, never touches the admin UI, never calls the production API. One unavoidable coupling: the schema itself — **spend one short session agreeing the contract with Natalie before building** (details in §6).

**Q9 — Which workspace entries update?** Drafts in §7 — for discussion, nothing applied. Summary: D9 (windowed challenges — still unwritten from Report #1), D10 (factory as supply line, stage-gated — *not* a 12-month cadence pre-commitment), H7 (falsifiable with the honest KPI), E4 (corrected scope + kill criteria), an E1 amendment (date + owner + warm cohort + payment method), and a new Q10 (glyph library ownership & licensing).

**Q10 — Smallest week-1 plan that gives a real answer?** Not 8 agents. The probe proved the "independent solver" is **pure deterministic code** for all 3 archetypes (the answer is a function of the spec — an LLM re-deriving it adds cost, not verification; reserve the LLM for checking the *stem wording* matches the scene). The minimal loop: **(1)** schema-constrained generator → **(2)** deterministic spec→SVG/PNG renderer → **(3)** deterministic spec-derived answer check + asset-integrity gate → **(4)** timed human review queue. Run 100 through, read the **failure histogram**, and only then automate the biggest bucket (that's when the reviewer/repair agents earn their place). ~2–3 days of build. Full plan in §4.

---

## 3 · Probe evidence highlights 探測結果重點

**From the real papers (all 40 items classified, 17 images read):**
- Archetype distribution is far broader than the proposal assumes: counting/quantity (5), text arithmetic (9), pattern (4), odd-one-out (2), comparison/measurement (4), spatial (6), shape ID (1), conditional/common-sense (5), sequencing/combinatorics/temporal (4).
- K2→K3 difficulty levers, observed: object count 9–12 regular rows → 14 pseudo-random scatter + attribute filter; single-step → two-step composition; concrete cute glyphs → abstract tokens with fewer pattern cycles shown; and the K3 signature: **the naive-procedure answer planted as a distractor** (count-all 14 vs red-only 8; visible cubes 13 vs with-hidden 14).
- Ambiguity risks the factory must formally guard: odd-one-out uniqueness must be *proven* (exactly one item violates the shared invariant, under rotation/reflection equivalence — the real K2 bracelet item is the highest-risk case); occlusion of countable targets must be forbidden; real-world-knowledge answers (heaviest animal) break scene-spec-as-truth and don't belong in the factory.
- FACT worth knowing regardless of the factory: **the current prototype bank itself would fail an asset-integrity gate** — 12 questions declare `choiceType:image` referencing 40+ choice-image files that don't exist on disk. The factory pipeline needs exactly such a gate; the platform apparently does too.

**From the feasibility build:** end-to-end loop in minutes, zero debug cycles; render-fidelity solving matched spec answers 3/3; grid placement eliminates collision by construction; qlmanage works for inspection but production needs rsvg-convert/sharp (decide day 1); canvas height must be computed per archetype; distractor-logic errors are the class of subtle mistake that survives validation — **weak distractors stay a human problem** (the AIG literature agrees: distractor quality is the one dimension where generated items measurably lag human ones).

**From the funnel benchmarks:** even human-written MCQs only pass expert review ~73–75% of the time, and operational AIG deployments lose a meaningful share at calibration — the proposed 100→15–20 funnel is *realistic overall* but its losses are drawn at the wrong stages: schema-validity should run 85–95% (mechanical), while the brutal gate is human review of visual/age-appropriateness/distractor quality. Expect ~90 schema-valid → ~70 solver-consistent → then the human gate decides everything. If the human gate passes <40%, the machine gates aren't catching what matters.

---

## 4 · The corrected week-1 plan 修正後嘅第一週計劃

**Day 0 (before any factory code):**
1. Two ledger sentences: **E1 date (6–8 weeks out) + owner + manual FPS/PayMe rail**; **windowed 24–72h challenges, never gun-start**. (Both carried over, still undone, from Report #1 §5.)
2. Squarespace nav link + `practice.` subdomain (~1 hour, still undone).
3. One schema-contract session with Natalie (§6).
4. Decide PNG export tooling (rsvg-convert or sharp).

**Days 1–3 (build, Max + agents; intern if hired — see §6 containment):**
5. Scene-spec schema v1 (probe's v0.1 exists as seed material — 3 archetypes + comparison/extremum 4th; small enums: ~6–10 glyphs, 6 colours, 3 sizes, max 4×6 grid; difficulty-driving features as explicit fields).
6. Deterministic renderer + spec-derived answer checker + asset-integrity gate + provenance log.
7. Schema-constrained generator (LLM) with 1 retry; **no reviewer agent, no repair loop yet**.
8. Timed human review queue (a Sheet is fine: item, image, one-tap approve/reject/reason, timestamps).

**Days 3–5 (measure, Max is the instrument):**
9. **Manual control arm:** Max hand-authors 25 K2 questions through the real QC bar, timed — the baseline the 20–40 min claim never had, and the golden set for any future automated reviewer.
10. **Machine arm:** generate 100 specs → run the funnel → Max reviews the survivors with a stopwatch.
11. Read the failure histogram together; decide *from data* which stage earns automation (reviewer agent? repair loop? better glyphs?).

**Week 2:** automate the top failure bucket only; add the text-arithmetic track (free coverage); assemble **one full 20-question K2 windowed set + 25% reserve** from approved items — factory or manual, whichever cleared the bar. That set has a name: **the E1 paper.**

---

## 5 · Kill / double-down criteria 生死線

| Signal (week-1/2 read) | Decision |
|---|---|
| <~8 of 100 reach human approval at the real bar | **Kill/downgrade** — archetype/renderer thesis failing; E1 runs on the manual set (E1 is never hostage to the factory) |
| Total human min/approved > ~20 (incl. rejects) | **Kill** — no better than the manual floor; the factory is a costume for manual QC |
| Render-fidelity mismatches > ~30% of solver-consistent items | **Kill** — the deterministic-renderer premise is the broken part; more agents won't fix rendering |
| Max blind-rates approved items below the Season 2 bar | **Kill** — approval-rate KPIs are meaningless if the bar drifted |
| E1 has no calendar date by end of week 1 | **Stop factory work until it does** — otherwise the factory is confirmed as the new E1-avoidance mechanism |
| ≥15 approved at ≤10 min/approved + one full set assembled | **Double down** — lock the warm E1 date on that set; fund archetypes #5–6 and the K3 track; reopen WS5-15/Q1 with the measured cost as its first real datum |
| (Post-E1) warm attach ≥~25% AND cost/question under the Q1 floor | Name a content owner, budget **3 months** (not 12) of K2/K3-only monthly cadence; only then test the cold-audience exposure thesis as its own stage-gated E# |

**Stage gates on the cadence itself:** Gate 1 = warm E1 read (week 6–8; ≥25% go / <10–15% kills the cold-online thesis per Report #1 §5). Gate 2 = month-3 real cost actuals (Q3) vs the H3 rows. **No 12-month content pre-commitment before both gates pass.** If Gate 1 fails, the factory survives with a different job: supply for live events and live-verified report sales.

---

## 6 · Parallel-build plan 並行開發設計

The July 3 sprint already proved the model that works here: **directory-partitioned tracks, one owner per repo, contracts instead of shared files.** Extended to the new reality (Max full-time, Natalie as main platform builder, Codex in flight, possible intern):

**Track N — Natalie (+ Codex): the platform.** `tpc-online-platform-admin` + public mirror are hers alone. Critical path unchanged: WS5-03 live smoke → WS5-04 seed import → WS4.2 → pilot. Nobody else commits to her repos — including me and including Max during factory work.

**Track F — Max (+ intern + agents): the factory.** New standalone repo `tpc-question-factory` (private — it will contain answer keys). Interface contract, agreed once with Natalie **before** building:
- **Output artifact:** versioned batch file (JSON + rendered PNGs) matching the `Questions` row schema exactly (`engine=quiz`, `type=single_choice`, `status=draft`, its own `source` tag, `subTopic`-ready metadata since that's a declared open item). Image hosting is decided at import time by Track N (WS5-05 placeholder rule already covers this).
- **Import path:** the existing WS5-04 sheet-script route only. The factory never calls the API, never writes to live Sheets (its review queue is its own spreadsheet), never touches the admin UI.
- **Sync points (the only two):** batch handoff for import, and E1 set assembly. Everything else is asynchronous by construction.

**Track D — Max + me: dashboard, reports, business space.** Ledger updates after you've digested this report.

**Intern containment (this is the important one):** the red team's sharpest correction — the intern risk isn't code leakage (content generation is the commodity layer by TPC's own constitution; the moat is the bank + trust). The risks are quality-bar drift and **a second content-exposure incident two weeks after TPC01**. Containment that makes the intern a genuine asset:
- Intern owns the **renderer + pipeline tooling only** — deterministic, unit-testable, judgeable against a golden set of spec→image pairs. Ideal trial-by-work for evaluating them, with measurable output in week 1.
- Intern never touches: generation prompts, curriculum/taxonomy, the QC bar, approval rights, or any batch of *approved* items with answer keys destined for a live challenge.
- Private repo; Max holds sole approve; written success criteria; 2-week checkpoint before any scope expansion.

**Hygiene preconditions (both still open from Report #1, and they matter more with 3–4 parallel actors):** fix this machine's git credentials + the runbook rev-guard before multi-actor work intensifies; complete the public-repo history purge — an intern cloning repos is exactly when stray sensitive history bites.

**Git discipline for everyone:** one actor per repo per session; no shared working clones; deploys only from a freshly-synced checkout (the gh-pages deploy race and the stale-clone footgun were both this month's lessons).

---

## 7 · Proposed ledger drafts 建議嘅 ledger 條目（草稿,未寫入 — 傾完先郁）

**D9 — First online challenges are windowed, never gun-start** *(carried from Report #1, still unwritten)*: 24–72h completion window. Rationale: runs E1 at hundreds of participants on the current stack; removes the datastore migration from the E1 critical path; deletes break-first risk #3.

**D10 — Repeatable visual content production is the supply line for online cadence — built minimal, gated hard.** TPC builds an AI-assisted K2/K3 visual question factory (scene-spec as truth → deterministic render → machine answer-verification → human final approval; no auto-publish). Its first deliverable is E1's question set. It is *not* a prerequisite for E1's date, and it does *not* authorize a 12-month cadence: cadence is stage-gated on Gate 1 (warm E1 read) and Gate 2 (month-3 cost actuals vs H3). Human role: curriculum director / final examiner. Links: D4, D6 (parametric variants = randomization + leak resilience), H3, H5, Q1, E4.

**H7 — AI-assisted visual production reduces content cost enough to sustain monthly cadence.** Falsifiable form: total human minutes per approved question (including rejects and repair re-reviews), at the genuine Season 2 quality bar, ≤10 min — vs the measured manual baseline (control arm, week 1) and the Q1 ledger floor of 15–25 min QC-only. Status: UNVALIDATED. Known unknowns: per-archetype engineering cost (the real cost curve), distractor quality (the literature's known AIG weak spot).

**E4 — Visual Question Factory MVP (week 1–2).** Scope: K2/K3, single-choice, 4 archetypes (counting-by-attribute, pattern-completion, odd-one-out, comparison/extremum) + text-arithmetic track; minimal loop (generator → deterministic renderer → spec-derived answer check → timed human queue); manual control arm of 25 hand-authored timed questions; 100 machine candidates through the funnel. Metrics: honest QC-min/approved, funnel histogram, error taxonomy, archetype reliability. Success/kill: per §5 table. Explicitly *not* in scope: reviewer/repair agents before the failure histogram justifies them, auto-publish, K2–P6 coverage, free-form AI illustration.

**E1 amendment:** calendar date (6–8 weeks out) + named owner + manual FPS/PayMe payment + warm cohort (134 Season 2 families) + windowed format + question set = E4's output (manual fallback). Read as upper bound: ≥25% green-lights the online thesis; <10–15% warm kills the cold-cadence plan before the content budget is spent.

**Q10 — Who owns the glyph library, and under what licence?** Week-1 bootstrap: Noto Emoji (Apache 2.0) / Fluent (MIT); never OpenMoji (share-alike) or platform-native emoji (device-inconsistent rendering). End state: Max-designed owned SVG sprite set (~100–200 objects) — brand signature + zero licence overhead. Includes: provenance log per item; server-side PNG as the published artifact; the multi-colour-glyph lint rule.

---

## 8 · 直話直說

1. 「一兩次 online test 驗證唔到 trust」— 呢句嘢冇 H#、冇 E#、冇 threshold,係同 ChatGPT 傾出嚟,唔係從 evidence 嚟。一個永遠唔會俾單次結果否定嘅 claim 唔係 hypothesis,係唔想見到嗰個數嘅保險。你個 Constitution 話 *"Excitement is not evidence"* — dread 都唔係。
2. 你有 134 個 warm families,佢哋已經受晒你講嗰種「重複接觸」treatment,53% 買咗 report。連呢個近乎免費、只賺唔蝕嘅 read 都未攞,就想簽 12 個月 content 支出 — 個 order 掉轉咗。
3. 上星期份 report 話你 building before learning,你嘅回應係換咗樣嘢嚟 build。Factory 唔係問題 — **用 factory 做 E1 冇日期嘅理由先係問題。**
4. 個 KPI 好易呃自己:唔計 reject 同 repair 時間,10 分鐘 review + 50% approval = 實際 25 min/approved,差過你而家個 manual floor。仲有你連 manual baseline 都未量過 — 第一週自己做埋 manual arm,唔好淨係睇機器。
5. 3 個 archetype 覆蓋唔到 monthly cadence(真卷得 20–28%)。真正嘅 cost curve 係 per-archetype engineering,個 plan 而家當佢係零。
6. 8-agent pipeline 係 week-1 overengineering — 你三個 archetype 嘅答案全部係 spec 嘅 deterministic function,LLM solver 喺度重新推導 spec 已經寫明嘅嘢。最細版:generator + renderer + spec answer-check + 計時 human queue,兩三日。跑 100 條,睇 histogram,先決定 automate 邊度。
7. Intern 條線劃喺 renderer/tooling,唔好俾佢掂 prompts、QC bar、approval、real answer keys。TPC01 兩星期前先燒完。
8. 最快最平嗰幾樣仲未做:Squarespace 條 link、subdomain、Season 3 日期、E1 日期。唔好起一間 factory 供貨俾一條 stage 0 係 404 嘅 funnel。

---

## Appendix · Method & artifacts

- **Probes:** 4 parallel agents (~214K tokens, 66 tool calls): real-paper archetype classification (40 items parsed, 17 PNGs visually read); feasibility micro-build (schema + renderer + 3 rendered samples + PNG export + visual solve — artifacts in the session sandbox, ready to seed the factory repo on a go-decision); market/prior-art/rights research (30 sources; AIG literature, tool landscape EN+中文, icon licensing, HK copyright); adversarial red team with ledger + Report #1 access.
- **First-hand verification:** the rendered sample above was independently inspected and solved by the report author; the platform schema contract (§6) was read directly from the admin repo docs (read-only).
- **Nothing was modified** outside this report and its dashboard registry entry: no ledger changes, no workspace-view changes, no platform-repo writes.
- **Next report:** after Max and Natalie's discussion — if D10/H7/E4 are adopted, I can apply the ledger updates, seed the factory repo from the probe artifacts, and write the intern's task brief in the same pass.
