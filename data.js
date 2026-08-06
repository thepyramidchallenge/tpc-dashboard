/* =============================================================================
 * TPC WORKSPACE DASHBOARD — DATA
 * -----------------------------------------------------------------------------
 * THIS is the file you (and agents) edit. The dashboard (index.html) just
 * renders whatever is here. You almost never need to touch the HTML.
 *
 * HOW TO UPDATE (see AGENTS.md for the full protocol):
 *   1. meta.updated / meta.updatedBy  → stamp who touched it & when
 *   2. focus                          → the one thing that matters most today
 *   3. projects[].status / health     → keep each project's state honest
 *   4. board (now / next / blocked)   → move cards as work flows
 *   5. roadmap[].items[].state        → flip todo → active → done
 *   6. systemMap                      → ONLY when the architecture changes
 *   7. changelog                      → prepend a one-line entry every session
 *
 * Allowed values:
 *   status / health : "stable" | "active" | "blocked" | "planned"
 *   roadmap state   : "done"   | "active" | "todo"    | "hold"
 * ========================================================================== */

window.TPC_DASHBOARD = {

  /* --- header / standup ------------------------------------------------- */
  meta: {
    updated:   "2026-08-06",
    updatedBy: "Max + Claude (Opus 5)",
    note:      "Live at thepyramidchallenge.github.io/tpc-dashboard · light theme. · Business Space (the *why*): business/ (CONSTITUTION + decisions/hypotheses/experiments). · Reports (深度報告): reports/ — periodic commissioned deep-dives.",
  },

  /* --- reports (deep-dive reports tab) -----------------------------------
   * commissioned by Max periodic deep-dive reports. Registry only — the
   * content lives in reports/<id>.md, rendered by the Reports tab (same
   * mechanism as the Business space). PREPEND newest first. To add a report:
   * write reports/<id>.md, prepend an entry here, stamp meta.updated.
   * --------------------------------------------------------------------- */
  reports: [
    { id:    "2026-07-03-visual-question-factory",
      date:  "2026-07-03",
      who:   "Claude (Fable 5)",
      title: "Deep-dive #2 — Visual Question Factory: verdict, corrections & parallel-build plan",
      zh:    "深度檢討 #2 · 出題工廠",
      summary: "4-probe review of the factory-first pivot: architecture proven live (working scene-spec→SVG micro-build embedded), 25yr AIG science backs it, niche genuinely open — but 3 archetypes cover only 20-28% of real papers, the 6-12-month claim is unfalsifiable, and the factory must feed a dated warm E1, not replace it. Answers all 10 questions from Max + week-1 plan, kill criteria, intern containment, parallel-track design, plus draft ledger entries (2 decisions, 1 hypothesis, 1 experiment, 1 open question — next free numbers) awaiting discussion with Max." },
    { id:    "2026-07-03-strategy-deep-dive",
      date:  "2026-07-03",
      who:   "Claude (Fable 5)",
      title: "Strategy deep-dive #1 — the business, scaling, what breaks first",
      zh:    "深度檢討 #1",
      summary: "5-agent review (business plan / platform engineering / GTM-ops + 2 red-team skeptics) → evidence audit, core insight (the bottleneck moved to content/trust/E1-date), market reality check, 3/6/12-month moves, scale flywheel, what-breaks-first ranking, and the cheap experiments that settle each objection." },
  ],

  /* --- people / ownership 分工 ------------------------------------------
   * Who owns what. `owner` fields elsewhere (projects, roadmap, board) must
   * use one of these keys. Split: Max = learner UI/UX (WS6.2), plus
   * the WS5.2 question factory and WS5.3 asset factory (reassigned
   * 2026-07-31, after Natalie closed WS5.2 to GO), generation ops and the
   * paused pyramid-site;
   * Natalie = the rest of the learning platform (data layer, integrity,
   * backend, human approval, admin platform, WS6.1 pilot);
   * Dixon = the WS6.3 report tab lane end-to-end, per Max's 2026-08-01 D10
   * ruling (ownership is lean and trust-based; the intern owns the lane
   * rather than being supervised per checkpoint). The WS6.3-06d D5/E1
   * ranking-language review is the one carve-out and stays with Max.
   * --------------------------------------------------------------------- */
  owners: {
    max:     { name: "Max",     zh: "Max",     scope: "Learner UI/UX (WS6.2) · question & asset factories (WS5.2 · WS5.3) · generation ops · pyramid-site (paused) / 學生端UI、出題及素材工廠、生成營運 (D10)", color: "#1f7a96" },
    natalie: { name: "Natalie", zh: "Natalie", scope: "Data layer, integrity, backend, human approval + WS5.1-04 onward, admin platform (excl. factories) / 資料層、後端、審批、學習平台 (D10)", color: "#6d4fd6" },
    dixon:   { name: "Dixon",   zh: "Dixon",   scope: "Intern (joined 2026-07) — WS6.3 reports + question review / 實習生：報告頁、審題 (D10)", color: "#b06a1f" },
    both:    { name: "Max + Natalie", zh: "Max + Natalie", scope: "Shared / 共同", color: "#5a6570" },
  },

  // The single most important thing to know before starting work today.
  focus:
    "Pilot readiness is bottlenecked by approved official K2/K3 content and one unproven backend fix, not WS4.2 core. The merge-lane backlog is cleared and the backend cutover already happened: Cloud Run tpc-api-lvpc9b1e47e serves 100% carrying merged #171/#174/#175, so the separately staged tpc-api-lv092f8dd never took traffic. The fixed-set completion/replay UAT that had failed on legacy version-zero snapshots has since PASSED against the deployed source, per merged PR #168; what remains on that lane is literal-total 10/4 read acceptance and a fresh five-read start proof. Alongside that: preserve the live governed learner path, run serialized pilot-scale concurrency evidence, and replace or unpublish the sole dummy mock before public launch. Treasure activation remains on hold.",

  /* --- projects --------------------------------------------------------- */
  projects: [
    {
      id:    "pyramid-site",
      name:  "pyramid-site",
      owner: "max",
      tag:   "Marketing site (rebuild)",
      role:  "Squarespace-free rebuild of thepyramidchallenge.org — Next.js (App Router) + React + Tailwind.",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/pyramid-site",
      run:   "cd pyramid-site && npm install && npm run dev   # http://localhost:3000",
      next:  "Reach visual parity with live site → deploy (Vercel/Netlify).",
    },
    {
      id:    "tpc-online-platform",
      name:  "tpc-online-platform",
      owner: "natalie",
      tag:   "Learning platform (Phase 1)",
      role:  "Interactive Practice/Test SPA for K2–P6. Backend on Google Sheets behind an adapter (Firestore/Supabase-ready).",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/tpc-online-platform",
      run:   "cd tpc-online-platform/prototype-v0.2 && npm install && npm run dev   # Vite local URL",
      next:  "The current public frontend boundary has one canonical owner in the private platform handoff rather than being recopied across workspace prose. Pages now serves 098d243c from source a2c24301 (PR #173, full-screen submission stage), which supersedes the PR #136 layout release and carries the 模擬測驗/套題 → 模擬賽 rename. The layout lane still has NOT been reviewed by Max (WS6.2-20b), so that review is a post-deploy check on live production. Chinese-only Admin chrome IS merged and live: PR #155 (48a56d3) and PR #157 (6098f819) completed it, and the consoles are no longer bilingual — bilingual question content is retained by design under PR #92. Backend: the cutover happened — Cloud Run tpc-api-lvpc9b1e47e serves 100% and carries merged PRs #171, #174 and #175. tpc-api-lv092f8dd (PR #171 alone) never took traffic and was superseded by this newer revision built from main c9b1e47; pcmp5ccf, secrot0804 and points0803 are now historical at 0%. The fixed-set completion/replay UAT has PASSED against the deployed source (merged PR #168): two excluded-admin first submissions and three no-op replays with exact 1 Session / 30 version-0 Attempts / 1 incomplete report / 0 cohorts. Still open on that lane: literal-total 10/4 read acceptance and a fresh five-read start proof. Continue bounded official-content approval, pilot-scale concurrency evidence and the launch replacement/unpublish action for the dummy mock.",
    },
    {
      id:    "tpc-online-platform-admin",
      name:  "tpc-online-platform-admin",
      owner: "natalie",
      tag:   "Platform — full private repo",
      role:  "FULL private project: React v0.2 frontend + Cloud Run backend + docs + sheets templates. The public tpc-online-platform is the published-frontend mirror of this.",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/tpc-online-platform-admin",
      run:   "cd tpc-online-platform-admin/prototype-v0.2 && npm install && npm run dev   # Vite · backend in cloud-run/",
      next:  "Private main includes merged PR #152 / cf5258e. WS6.1-30 is complete: deploy.sh runs encoding checks against the exact revision before publication, then reports attributed frontend/backend boundary drift after publication; --strict is available for pre-merge gating. PR #147 separately closed the frontend dependency audit with prototype-v0.2 npm audit at 0 vulnerabilities. The #134/#135 routing question is settled: #134 merged, #135 closed and replaced by #149. PR #169 now enforces exact-head CI plus gatekeeper approval on automated merges, proven by #173. PRs #174, #175 and #168 all merged, and the backend cut over to tpc-api-lvpc9b1e47e. PR #168 rebased and rewrote the release-truth docs against the live pair, and check-docs.mjs boundary now reports no doc naming a different current pair — so the boundary drift is closed. Open lanes: literal-total 10/4 read acceptance and a fresh five-read start proof, load/fallback/small-class pilot (WS6.1-10/11/13/29), official K2/K3 content, and WS6.3-01/-02/-05/-07. Draft PR #177 cleanly reconciles the WS6.3-07 design record on exact current main; product approval and frontend implementation remain open. Next remains bounded official content, pilot reliability and signed-in Report UAT.",
    },
    {
      id:    "entrance-qr-scan",
      name:  "entrance-qr-scan",
      owner: "both",
      tag:   "Event ops — staff QR scanner",
      role:  "Mobile-friendly QR scanner for staff check-in. GitHub Pages frontend + Google Apps Script backend writing scan/manual records to Sheets.",
      status: "stable",
      health: "stable",
      repo:  "github.com/thepyramidchallenge/entrance-qr-scan",
      run:   "open entrance-qr-scan/index.html   # frontend/ assets · backend = Apps Script (clasp)",
      next:  "In use for event check-in. (Added during migration sync — adjust owner/status as needed.)",
    },
    {
      id:    "mainpage",
      name:  "mainpage",
      owner: "max",
      tag:   "Design assets (reference)",
      role:  "Legacy Squarespace design folder. Source of brand/identity/hero assets. Read-only; being absorbed into pyramid-site.",
      status: "stable",
      health: "stable",
      repo:  "— not versioned (intentional) —",
      run:   "— design source, no app —",
      next:  "Finish migrating remaining assets (see ASSET_GATHER.md), then archive.",
    },
    {
      id:    "tpc-workspace",
      name:  "tpc-workspace (meta)",
      owner: "both",
      tag:   "Workspace docs + this dashboard",
      role:  "Top-level planning docs (README, MIGRATION_PLAN, GIT_STRUCTURE, ASSET_GATHER) + this dashboard. Ignores the subprojects.",
      status: "stable",
      health: "stable",
      repo:  "— local / offline-only (no remote) —",
      run:   "open dashboard/index.html",
      next:  "Keep this dashboard current as the daily source of truth.",
    },
  ],

  /* --- now / next / blocked board --------------------------------------
   * Each card: { title, project, note }. project must match a projects[].id
   * (or "" for cross-cutting). Keep ~3–6 cards per column; archive the rest
   * into the changelog when done.
   * --------------------------------------------------------------------- */
  board: {
    now: [
      { title: "Bounded official content -> exact-version QuestionSets", project: "tpc-online-platform", owner: "both", note: "The governed set workflow, readable 30-question builder and latest-version performance evidence are live. Max owns bounded WS5.2 generation; Natalie owns explicit human approval and WS5.1-04 QuestionSets. Production still has one intentionally published pre-launch dummy plus seven drafts; do not count demo/calibration rows as official content, and replace or unpublish the dummy before launch. Treasure remains held under WS5.2-04." },
      { title: "Learner UI design sprint — 答題畫面 first", project: "tpc-online-platform", owner: "max", note: "Designer Space steps 1–5 are MERGED AND DEPLOYED (PR #191, source d4a9c13 → Pages 225d321): preview toggle, 設計 tab with Playground/Atelier/Cosmos, the tonal depth model, and two adoption rounds — the second one put C · Cosmos on the answering screen whole (palette, 字級 32/20/17/13/38, shapeKit, ground film, card radius 20). Deployed deliberately with no learners on the platform; it is an internal look, not a launch. Max is now iterating ON that recipe: 2026-08-06 lifted C's ground one step (#22405F/#152B44/#35608A — the old #0B1626 deep end read as off, not as night) and moved the grain so it rides the shaded part only, with the lit plane painted clean over it. That iteration is in the working tree, NOT committed or deployed. Local demo has 14 visual fixtures behind ?demo=1&visual=1. Design freeze Aug 21; feeds the WS6.2 review lane." },
      { title: "Pilot reliability + release discipline", project: "tpc-online-platform", owner: "natalie", note: "WS4.2 core and adjacent learner polish are live. WS6.1-30 is merged through PR #152: exact-revision encoding failure blocks publication, while the post-publication boundary reporter distinguishes a successful Pages push from incomplete release documentation and supports --strict before merge. The Aug 3 Sheets alert was a transient overlap of production UAT/admin reads on an old revision, not a quota/backend failure: all 58 reads succeeded first attempt and no rollback was needed. Serialize production tests and polling, then reduce replay/append/ledger read amplification before the pilot-scale concurrency gate." },
    ],
    next: [
      { title: "Recipe GO/NO-GO — Aug 21–23", project: "tpc-online-platform", owner: "max", note: "Gate (D11): two consecutive 30q holdout validation batches at ≥75–80% Dixon pass + judge agreement good enough to pre-filter → governed-lane intake starts (W4–5, ~15–20 approvals/day toward two disjoint 30-question sets per level). NO-GO cuts scope (single level / smaller pool), never the date." },
      { title: "UAT — Sep 10–13 (K2/K3 deep)", project: "tpc-online-platform", owner: "both", note: "Feature freeze Sep 4; dry run Sep 7–9; invite waves ~10 families each from the Season 2 base (invites out ~Aug 24). Pass = K2 completes 10q unaided · parents understand the report · zero quota red. Kid micro-tests (Aug 24–30, Sep 1–6) and a W5 dress-rehearsal load test precede it (D12)." },
      { title: "WS6.3 report tab enhancements", project: "tpc-online-platform", owner: "dixon", note: "Dixon owns this lane end-to-end under Max's 2026-08-01 D10 ruling. Real rolling Practice evidence, refType=set Mock history/Result drill-in, minimum-data and sync guards are live. PR #141 now labels every hardcoded challenge cohort/ranking value as bilingual sample data; this resolves the immediate claim breach but does not settle the final report format or authorize real ranking. Remaining functional work is WS6.3-01 accuracy trend and WS6.3-02 topic/domain 7d/30d/all, with WS6.3-05 coverage. Draft PR #177 records WS6.3-07's proposed Mock no-evidence states, bilingual copy and implementation contract on current main; it remains a design draft pending product approval and has no frontend implementation. Carve-out: WS6.3-06d, the D5/E1 review of the synthetic cohort-average and percentile claims, stays routed to Max and is not Dixon's to settle. Signed-in production Report UAT remains open." },
      { title: "WS6.1 - pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical work before real users: pilot-scale concurrency/write-contention proof, fallback audit, accuracy consistency and first-time-user evidence -> WS6.1-11. WS6.1-28 latest-version exposure/accuracy telemetry is complete and live; the Aug 3 transient UAT overlap is useful evidence but does not close the concurrency task." },
      { title: "WS6.2 — UI review", project: "tpc-online-platform", owner: "max", note: "WS6.2-20b is the live blocker: the cross-tab layout system, the top-bar page title and the 模擬測驗/套題 → 模擬賽 rename reached production on 2026-08-04 without his review, so production is running an unreviewed UI lane. Reassigned to Max 2026-07-31, matching his UI-in-general scope. Pilot-relevant pass: notify/validation classes, whole-app screen-by-screen review, bilingual copy, glyph/colour/button consistency, Home layout, button UAT, young-learner usability and the Log abnormal-activity banner. Five tasks stay held until after the pilot. WS6.2-07 still confirms UID/display-field scope with Max first." },
      { title: "WS7-06 + WS9-00 — report validation (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier starts after engineering substrate exists. Co-ship WS7-06 log-only integrity with the first online challenge/report path, then WS9-00 $99 one-off report MVP via the Sheets→Affinity pipeline. Full WS7/WS8/WS9-01+ remains gated on E1/E2." },
    ],
    blocked: [
      { title: "Release lane — cutover and boundary drift both closed", project: "tpc-online-platform", owner: "natalie", note: "Cloud Run tpc-api-lvpc9b1e47e serves 100% from main c9b1e47, carrying merged PRs #171, #174 and #175; the staged tpc-api-lv092f8dd never took traffic. The fixed-set completion/replay UAT that had failed on legacy version-zero snapshots has PASSED against the deployed source — two excluded-admin first submissions and three no-op replays with exact 1 Session / 30 version-0 Attempts / 1 incomplete report / 0 cohorts. PR #168 merged as d0e9b90 after rebasing and rewriting the release docs against Pages 098d243c / source a2c24301, and check-docs.mjs boundary now reports no doc naming a different current pair, so the documentation drift that had the handoff wrong on both layers is closed. STILL OPEN on this lane: literal-total 10/4 read acceptance and a fresh five-read start proof (observed totals were 11/5 because StudentLog performs one separate wrapper read). WS6.3-07 is now isolated in clean draft PR #177 from exact d0e9b90; it is design-only and still awaits product approval and implementation. Do not merge by ancestry alone: claude/admin-chinese-only-wip is superseded by merged #155/#157, codex/release-integrity-gate by #152/#163, and public deployment branches are release outputs, not merge sources. 73 worktrees exist and 8 are dirty (6 with tracked changes, one of them the primary checkout) — keep them quarantined, do not clean wholesale." },
      { title: "pyramid-site — paused for UAT sprint", project: "pyramid-site", owner: "max", note: "Hero parallax parity, scoring/report graphics absorb, deploy, CDN photo export (ASSET_GATHER §B/§E) — all parked by D10 until after UAT; resume ~mid-Sep." },
    ],
  },

  /* --- roadmap / rollout -----------------------------------------------
   * Grouped by project. Each item flips: todo → active → done (or hold).
   * --------------------------------------------------------------------- */
  roadmap: [
    {
      project: "pyramid-site",
      owner:   "max",
      title:   "Marketing site rebuild",
      items: [
        { label: "Next.js scaffold + brand system",   state: "done"   },
        { label: "Hero parallax (7 layers) — paused for UAT sprint (D10)", state: "hold" },
        { label: "Content sections parity — paused for UAT sprint (D10)",  state: "hold" },
        { label: "Asset migration (mainpage → public) — paused (D10)",     state: "hold" },
        { label: "Deploy (Vercel/Netlify)",           state: "todo"   },
        { label: "Link into learning platform",       state: "todo"   },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 1 — Free Practice MVP",
      items: [
        { label: "WS0 · Project setup",               state: "done"   },
        { label: "WS1 · Data layer (Sheets + API + adapter)", state: "done" },
        { label: "WS2 · Auth & onboarding incl. WS2-07 region capture", state: "done" },
        { label: "WS3.1 · App shell & student screens", state: "done" },
        { label: "WS3.2 · Close-out (B1/B4/C1/C3, prod, auth, tests)", state: "done" },
        { label: "WS4.1 · Question engine",           state: "done" },
        { label: "WS4.3 · Save/session integrity", state: "done" },
        { label: "WS6.1-18...21 - Backend hardening / reliability / observability / tests", state: "done" },
        { label: "WS6.1-28 - Latest-version exposure and accuracy evidence (migration + live proof)", state: "done" },
        { label: "WS6.1-30/30a - Exact-revision encoding gate + attributed release-boundary reporter (PR #152 merged)", state: "done" },
        { label: "WS5.1 · Admin UI & content platform", state: "active" },
        { label: "Question Set Builder readability + balanced demo (PR #132 live)", state: "done" },
        { label: "Dixon · Learner zh-HK/en UI (frontend live; header selector removed)", state: "done" },
        { label: "Full-review gate · 10 P1/P2 risks remediated and regression register retained", state: "done" },
        { label: "WS4.2 · Mock / fixed 30-question set", state: "done" },
        { label: "WS6.1 · QA, polish → UAT week Sep 10–13 (K2/K3 deep)", state: "active" },
        { label: "WS11 · Backend maintainability refactor (01 bootstrap dedupe + 02 lint done; 03–05 now unblocked but sequenced after current content work)", state: "active" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "UI review (WS6.2) — pilot-relevant pass",
      items: [
        { label: "WS6.2-19 · Result metric visualization + spacing (PR #130 live)", state: "done" },
        { label: "Founder redesign lane — K2-self-operable learner UI (freeze Aug 21, D10)", state: "active" },
        { label: "Adjacent learner polish - edge-to-edge tabs + Profile-only language (df7dbca / bd4f511 live)", state: "done" },
        { label: "WS6.2-01 · Notify-layer message classes + form vs field validation", state: "todo" },
        { label: "WS6.2-02 · Whole-app screen-by-screen review", state: "todo" },
        { label: "WS6.2-03 · Bilingual labels, buttons and copy", state: "todo" },
        { label: "WS6.2-05 · Young-learner usability + non-audio accessibility", state: "todo" },
        { label: "WS6.2-08…12 · Glyphs/colours/buttons, Home layout, button UAT, Log banner", state: "todo" },
        { label: "WS6.2-04/06/13/14/15 · Held until after pilot (colour logic, unselect, cross-device language, audio, image ratios)", state: "hold" },
        { label: "WS6.2-07 · Confirm UID/display-field scope with Max, then review", state: "todo" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "Question & asset factories (WS5.2 · WS5.3)",
      items: [
        { label: "WS5.2-01c6/01c7 · 24-candidate comparison accepted; direct compiled prompting selected; bounded official lane GO", state: "done" },
        { label: "WS5.2-01d/01h/01i · Typed GenerationRecords ledger + 3-hour session-paired companion + transport/promotion proofs", state: "done" },
        { label: "WS5.2-01k/01l done; WS5.2-01j live with five-minute UI/backend alignment, controlled boundary proof + Admin diagnostics UI publication remaining", state: "active" },
        { label: "WS5.2-01m · Human-revision/manual-rejudge safety, evidence proof, and source merge", state: "done" },
        { label: "WS5.2-02e · Approval evaluation and retained decision-evidence readback", state: "done" },
        { label: "WS5.2-02f · Independent judge persistence/UI and obsolete server evaluator removal", state: "done" },
        { label: "WS5.2-04 · Treasure curation, matched comparison and activation", state: "hold" },
        { label: "WS5.3 · Visual factory — scene-spec → SVG (PoC done: 7 archetypes K2–P6)", state: "active" },
        { label: "Offline recipe harness - PR #70 safety blockers fixed and merged; calibration / GO-NO-GO evidence remains active (D11)", state: "active" },
        { label: "Recurring AI factories (WS5.2-01f/01g evidence-gated auto-approval · WS5.3-05 illustrative-asset generator)", state: "hold" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "dixon",
      title:   "Report tab enhancements (WS6.3) - real-data integration and Dixon graphs live",
      items: [
        { label: "WS6.3-00 · Extract Report aggregation into a tested src/lib/reportStats.js", state: "done" },
        { label: "WS6.3-01 · Accuracy trend over time (session-level, cross-device-safe fields)", state: "todo" },
        { label: "WS6.3-02 · Topic/domain breakdown + 7d/30d/all time filter", state: "todo" },
        { label: "WS6.3-03 · Local past-attempt review in the History drill-in", state: "done" },
        { label: "WS6.3-04 · Minimum-data guards and sync states", state: "done" },
        { label: "WS6.3-05 · Report test coverage", state: "active" },
        { label: "WS6.3-06 - Integrate hub with real Practice/Mock history and explicit Official sample", state: "done" },
        { label: "WS6.3-07 · Mock report no-evidence state design — draft PR #177; approval and implementation open", state: "active" },
        { label: "ReportHub sample boundary - bilingual demo labels pinned by PR #141; final format/ranking still open", state: "done" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 2 / 3 — later phases",
      items: [
        { label: "WS7-06 · Log-only integrity subset (co-ship with report)", state: "todo" },
        { label: "WS9-00 · $99 report MVP (E1 north-star)", state: "todo" },
        { label: "WS7 · Test Mode + ranking (gated on E1/E2)", state: "todo"   },
        { label: "WS8 · Reporting v2 & adaptive (gated on E1/E2)", state: "todo"   },
        { label: "WS6.1-02/-03 - Accepted Phase 2/3 bookmark loop design (PR #138 docs); Dixon-initiated private sandbox validates interactions only, production tasks remain held", state: "hold" },
        { label: "WS9-01+ · Subscription + payments (gated on E1/E2)", state: "todo"   },
        { label: "WS10 · Advanced question interactions & visual renderers (ex-WS4.4: class-A visual model, tap/hotspot, mini-games, open numeric)", state: "hold" },
        { label: "WS7-16 datastore decision + WS7-13 adapter parity (Sheets → Firestore/Supabase)", state: "todo" },
      ],
    },
  ],

  /* --- system map (Mermaid flowchart) -----------------------------------
   * Edit this text ONLY when the architecture changes. Mermaid syntax:
   * https://mermaid.js.org/syntax/flowchart.html
   * --------------------------------------------------------------------- */
  systemMap: `flowchart TB
    %% ---- actors ----
    students([K2–P6 students<br/>+ parents]):::actor
    admins([Admins / authors]):::actor

    %% ---- marketing ----
    subgraph MKT["Marketing / registration 行銷 · owner: Max"]
      live["Live site (today)<br/>Squarespace + Commerce<br/>thepyramidchallenge.org"]:::live
      rebuild["pyramid-site (rebuild)<br/>Next.js · React · Tailwind"]:::wip
    end

    %% ---- design source ----
    mainpage["mainpage/<br/>design assets · brand · hero"]:::ref

    %% ---- platform ----
    subgraph PLAT["tpc-online-platform — Practice / Test SPA · owner: Natalie"]
      app["App shell<br/>(Home · Practice · Result · Report · Admin)"]:::plat
      adapter{{"Backend interface<br/>(data-access adapter)"}}:::iface
      companion["Local CLI companion<br/>one-job + session watch live<br/>Codex/Claude generate + independent judge"]:::wip
    end

    %% ---- backend ----
    subgraph BE["Backend"]
      auth["Google Identity Services<br/>Cloud Run token verification"]:::be
      api["Cloud Run API<br/>(SheetsBackend · Node)<br/>asia-east2 · live"]:::be
      drive[("Google Drive<br/>Asset Library<br/>incoming · library")]:::store
      sheets[("Google Sheets<br/>Customers · Questions · Results<br/>QuestionReviewEvaluations<br/>GenerationPrompts · GenerationInputPackages<br/>GenerationRecords")]:::store
      future[("Firestore / Supabase<br/>(flip adapter when<br/>tests scale to 100s)")]:::future
    end

    %% ---- flows ----
    mainpage -->|assets feed| rebuild
    students --> live
    students --> rebuild
    rebuild -.->|"planned: Login / Practice link"| app
    students --> app
    admins --> app
    app --> auth
    app --> adapter
    app -.->|"one-job pairing · session token display"| companion
    adapter --> api
    companion -->|"authenticated slot submit"| api
    api --> sheets
    api --> drive
    api -.->|migration| future

    %% owner-tinted regions: teal = Max, violet = Natalie, neutral = infra
    style MKT  fill:#f1f9fb,stroke:#bcdae4,stroke-width:1.5px
    style PLAT fill:#f7f4fe,stroke:#dcd2f8,stroke-width:1.5px
    style BE   fill:#f7f8fa,stroke:#dfe3e8,stroke-width:1.5px

    classDef actor fill:#fff1cc,stroke:#e0a100,stroke-width:2px,color:#5c4400;
    classDef live  fill:#d4ebf2,stroke:#1f7a96,stroke-width:2px,color:#0e3d4d;
    classDef wip   fill:#d4ebf2,stroke:#1f7a96,stroke-width:2px,color:#0e3d4d,stroke-dasharray:5 3;
    classDef ref   fill:#eceff2,stroke:#97a3ad,stroke-width:1.5px,color:#3e4750;
    classDef plat  fill:#e7e0fb,stroke:#6d4fd6,stroke-width:2px,color:#34246e;
    classDef iface fill:#efe7fc,stroke:#6d4fd6,stroke-width:2px,color:#34246e;
    classDef be    fill:#dce7f5,stroke:#3e63b5,stroke-width:2px,color:#1e3666;
    classDef store fill:#d6f0de,stroke:#2e9d57,stroke-width:2px,color:#14502c;
    classDef future fill:#eef0f2,stroke:#aab1b8,stroke-width:1.5px,color:#69727c,stroke-dasharray:5 3;
  `,

  /* --- changelog --------------------------------------------------------
   * PREPEND newest first. One line per session: { date, who, project, summary }.
   * project "" = cross-cutting / workspace.
   * --------------------------------------------------------------------- */
  changelog: [
    { date: "2026-08-06", who: "Max + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "C · COSMOS ITERATION 1 — GROUND LEVEL + GRAIN PLACEMENT (working tree only in tpc-online-platform-admin; not committed, not merged, not deployed — live Pages still serves d4a9c13 / 225d321). First iteration ON the recipe adopted yesterday rather than a new curation, from two calls by Max: BG 而家太深色, and 做唔做到只係 shading 位先落 grain. (1) GROUND, ONE STEP UP: #16273D / #0B1626 / #27435F → #22405F / #152B44 / #35608A, the same night blue about +10 L*, changed in both places every adoption touches — styles.css :root for the real answering screen and curations/cosmos.js for the gallery. The old set bottomed out at #0B1626, which is near-black, so the lower half of the stage ramp read as off rather than as night and the mascot and the amber selection were the only things left with any luminance. Contrast was never the constraint and still is not: white on ground 10.7:1, 14.4:1 at the deep end. One further rung (#294C70 / #1B3553 / #3E6E9C) was rendered on the real stage and REJECTED — at that level the character blue #4FA8F5 stops separating from the ground and the mascot glow washes out, so that rung is the ceiling rather than the next step. (2) GRAIN RIDES THE SHADE: new shapeKit.grainOnShade dial, default true. The grain filter now wraps the body and the shadow tone only, and the lit region is painted clean over it, so texture stops where the light starts; at tones 2 there is no shadow tone, so shade is the body colour and the lit disc is the only clean region. This is a PLACEMENT change and not a strength dial, and it was measured rather than asserted — luminance sigma in a 1.5-unit patch of choice_circle.svg rasterised at 24x: shade 1.81 before and 1.81 after, lit 1.55 before and 0.00 after. The mascot follows the same rule, its one lit rim now outside the filter. Both kits carry the dial and cannot drift: src/lib/shapeTokens.js and factory-harness/lib/render-svg.js, with shapeKit.test.jsx pinning the placement on both sides — an in-app render assertion that the lit tone is not a descendant of the filtered group, plus harness-source strings. 14 fixtures re-rendered, second run byte-identical. Gates: 821/821 across 41 files, 119-module build, no console errors in the running app. ONE CORRECTION TO YESTERDAY'S RECORD: the WS6.2-22e claim that the shipped assets match the components is wrong for prototype-v0.2/public/img/mascot/pyramid-buddy.svg — that file is referenced nowhere in src/, still carries the pre-correction three-quads-per-tier extrusion in the old green palette, and its own header comment cites src/admin/design/PyramidBuddy.jsx, a path that does not exist (the live component is src/components/PyramidBuddy.jsx). Nothing renders it, so nothing on screen is affected, but the handoff line asserting parity was not true." },
    { date: "2026-08-05", who: "Max + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "MERGED + DEPLOYED — ANSWERING-UI REVAMP + DESIGNER SPACE (main d4a9c13 via PR #191, live as Pages 225d321; verified by reading index-D3Ze7vr7.js back off the live page, HTTP 200; rollback point c9b8b519 / 81ea59ac). Deployed with no learners on the platform (Max: no students at all, just us) — an internal look, not a launch. FIRST release where the answering screen palette, type scale, option art and mascot all changed at once: curation C · Cosmos is the adopted recipe, so the stage is now a deep ground. The publisher's own boundary checker then flagged 18 doc lines still naming the previous pair as current — the same drift class that had AGENT_HANDOFF wrong on both layers on 2026-08-04 — and those are cleared to zero in the same session. Closes Max's learner UI/UX lane for the day: Designer Space build order 1-4 complete plus two adoption rounds. The gallery's job turned out to be finding what a passing test suite could not, three times. WS3.1-04c: a right and a wrong answer painted identically on the rebuilt answering stage — .quiz-screen .choice overrode the global correct/wrong colours, leaving one pixel of border width and an animation, and 806 green tests never noticed; now real --quiz-correct / --quiz-wrong tokens. WS3.1-04d: the shipped mascot put a rx=7 rounded front rect against sharp-mitred planes, opening a 7x7 notch of background at every shared corner, and the harness triangle lit its RIGHT face while the stated light source is top-left; both fixed at source and the fixtures re-rendered. And the grain was measurably not reaching the pixels at all (luminance sigma 0.61 of 255) because the noise sat in the alpha channel and fractalNoise never spans 0-1 — now sigma 5.69. One durable product rule came out of it, written as a named constant for the question factory: NO grain on length_compare / area_composite / angle_straight_line / chart_average, because visual treatment must not interfere with the ability being tested. The depth model was corrected twice by Max against the Funexpected and Kurzgesagt references (extrusion -> flat+grain -> tonal layering inside one silhouette), and the mascot was redrawn from a 2.5D building into a flat stepped-pyramid character with its own `character` palette role in bright blue. Gates: 820/820 across 41 files, 119-module build, fixture generation idempotent by checksum, encoding audited clean. Deploying is a visible product change (palette, type scale, option art, mascot) and needs its own decision." },
    { date: "2026-08-05", who: "Max + Cursor (Grok 4.5)", project: "tpc-online-platform",
      summary: "DESIGNER SPACE STEP 4 — ADOPTION ROUND (source only, branch feat/answering-ui-revamp, not merged/deployed). Max ruled 採用 A 嘅形狀 + B 嘅字級. WS6.2-22d: A's shapeKit (tonal model) taught to factory-harness/lib/render-svg.js and the 11 shape-kit fixture SVGs re-rendered; B's 字級 (34/19/16/12/40 + weights, sans family kept — serif not taken) into quiz-scoped --quiz-t-* tokens; card radius → A's 26; no palette adopted. Shipped mascot ported to shared-vertex tiers (WS3.1-04d closed — 穿崩位 gone). shapeKit.test.jsx now pins post-adoption truth. Gates: 819/819 across 41 files, 115-module build. Tree left dirty for review." },
    { date: "2026-08-05", who: "Max + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "DESIGNER SPACE STEP 3 + TWO FINDINGS THE LOOP PRODUCED (source only, branch feat/answering-ui-revamp, not merged/deployed). WS6.2-22c adds Atelier 工作室 beside Playground on the same question — the comparison is the product, because a style is only judgeable against an alternative. But the comparison's first job was to be wrong about us. FINDING 1 (WS3.1-04c, closed): the four-state tile specimen showed that on the rebuilt answering stage a right answer and a wrong answer paint identically — .quiz-screen .choice overrode the global correct/wrong colours, leaving one pixel of border width and an animation to carry the meaning, and a passing 806-test suite never noticed. The stage now has real --quiz-correct (#1E9E6A) and --quiz-wrong (#D2543B) tokens with a 12% tint; wrong is a warm coral, not an alarm red, because a K2 learner is being told to look again. The same pass moved the stage's hardcoded whites onto --quiz-on-ground (17 declarations inside the stage's own rules; 83 white literals elsewhere untouched) — a literal #fff assumed a dark ground and made a light-ground curation impossible. Both inert at the shipped palette, verified by computed style on the live stage. FINDING 2, from Max on seeing the first render: 過度 emphasis on 2.5D. Re-read Funexpected — their blocks are a single flat fill with paper grain, overlap and tilt; no top plane, no side face, no drop shadow. Our kit drew extruded planes while citing them. shapeKit is now a dial: every offset derives from depth (depth 7 still reproduces the harness, which is what the 14 rendered fixtures are), depth 0 + darkAmount 0 is flat, grainOpacity lays an SVG fractal-noise grain, tilt rotates. Playground was revised onto it with the critique in its deltaLog; Atelier starts from it. Honest limit, visible in the comparison: the two screens differ in ground, chrome, radius and type but share option art and mascot, because those are pre-rendered SVGs — teaching the harness the chosen kit is exactly what step 4 (adoption) is for. The tab is also two levels on Max's call: level one is a card per curation whose face is the answering screen itself — the real QuizRunner under that curation's tokens, scaled down and inert — so the two poles separate at a glance instead of being described by swatches; the specimens and the comparison are one click in — exploding every specimen onto the first screen buried the decision the tab exists for under the evidence for it. Gates: 819/819 across 41 files, 115-module build." },
    { date: "2026-08-05", who: "Max + Cursor Grok 4.5", project: "tpc-online-platform",
      summary: "DESIGNER SPACE STEP 2 — TAB SHELL + PLAYGROUND CURATION (source only, branch feat/answering-ui-revamp, not merged/deployed). WS6.2-22b: admin-tier 設計 tab at #/admin/design between 素材庫 and the superadmin-only 用戶/日誌 pair. AdminDesign takes a curation as a prop and renders the six specimens (real QuizRunner, choice four-states with a scoped hover mirror, in-app 2.5D shape kit paired with factory-harness/lib/render-svg.js, inline Pyramid Buddy recoloured from the palette, bilingual type scale with an honest “font not loaded” hint, parent score card) inside .curation-preview[data-curation] via curationStyle — tokens never written to :root. The one allowed production CSS edit qualifies body:has(.quiz-stage) to body:has(.app--wide .quiz-stage) so a specimen cannot repaint the admin page. Two changes on review: the four-state tiles now sit inside a real .quiz-screen so the REAL rules paint them (restating them in the specimen would let the gallery drift from the screen it claims to preview), and the shape-kit sync test now reads the harness source and fails when its constants move rather than asserting the app's own constants against literals. THE GALLERY EARNED ITS KEEP ON DAY ONE: the four-state specimen showed that on the rebuilt answering stage a right answer and a wrong answer paint identically — .quiz-screen .choice overrides the global correct/wrong colours, leaving only 1px of border width and the pop/shake animation to carry the meaning in instant-feedback runs. A passing 806-test suite never noticed; a specimen did, on its first render. Logged as WS3.1-04c and left to Max, because what 答對/答錯 should look like on the new stage is a design call, not a mechanical fix. Gates: 816/816 across 41 files (10 new, zero existing tests edited) and the 114-module build; isolation verified live by computed style (embedded stage resolves the curation green while :root keeps the product green). Next on this lane: step 3 (Atelier curation side-by-side)." },
    { date: "2026-08-05", who: "Max + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "LEARNER-PREVIEW TOGGLE — DESIGNER SPACE STEP 1 (source only, branch feat/answering-ui-revamp, not merged/deployed). Max ruled the Designer Space plan earlier today (docs/DESIGNER_SPACE.md): a proposal gallery of design recipes rendered through the REAL components, deliberately not a theme engine and not a runtime reskin, with adoption performed as a human+agent edit of actual tokens and components. Build order step 1 is now built as WS6.2-22a: a 預覽學生介面 switch at the end of the admin chrome hides the 題庫/素材庫/用戶/日誌 tabs and the admin-only affordances (Settings' 更改 on 年級/地區 and the fields its edit route unlocks, plus the question-target notification deep link into the 題庫 editor), and a floating 退出預覽 chip is the only way back — it renders outside the screen tree so it survives the nav-free 答題/結果 screens, where an operator would otherwise be trapped. State is sessionStorage, so it survives a reload and dies with the window. The switch is COSMETIC ONLY and never a permission boundary: unrelated to demoMode (which grants the consoles in DEV) and to the server-stamped admin tiers, which it never touches — src/lib/learnerPreview.js says so in code, as Max required, so nobody later builds an access rule on it. Two calls beyond the written spec: entering preview leaves an admin console for Home (a console with its tabs hidden is not a learner screen, and the same guard catches an admin deep link opened while the flag is set), and the chip is bottom-centred and ink-coloured rather than a white corner pill, because the 答題 screen keeps its CTA bottom-right and operator chrome must not be mistaken for the design under review. Gates: 806/806 frontend tests across 38 files (3 new, zero existing tests edited) and the 108-module build; verified in the running app at 1280 and 375 including the answering screen. Designer Space steps 2–4 (tab shell + one curation, second curation, one adoption round) remain open." },
    { date: "2026-08-05", who: "Max + Cursor Grok", project: "tpc-online-platform",
      summary: "ANSWERING-UI FIXTURES + DEMO VISUAL POOL (source only, branch feat/answering-ui-revamp). Expanded demo design fixtures to fixture_vq01–vq14: kept the original seven from harness batch 20260803-1227 and added seven validator-pass questions from batch 20260803-2215 (q01/q02/q05/q07/q08/q09/q12) via a generalized inject-fixtures.js BATCHES list. Demo URL ?demo=1&visual=1 now restricts the practice pool to those fixtures across all levels (repeats when the pool is shorter than the requested count); inert outside DEV demo mode. Governed 40-question bank untouched. Frontend 803/803 across 38 files. Not pushed or deployed — Max can redesign the 答題畫面 against image-dominant sessions locally." },
    { date: "2026-08-04", who: "Dixon (owner) + Codex", project: "tpc-online-platform",
      summary: "WS6.3-07 DESIGN RECONCILIATION — DRAFT, NOT IMPLEMENTED. The stale codex/ws63-empty-mock-report-design branch was nine commits behind current main d0e9b90 and had no unique commits, so none of it was merged or cherry-picked. Draft PR #177 manually transplants only its three WS6.3-07 documentation hunks (+131/-3): the Mock report no-evidence state priority, bilingual copy, desktop/mobile wireframes, accessibility rules and later implementation/test contract. The PR is based on exact current main, all six CI checks pass, and the change classifier confirms docs-only. Product approval and frontend implementation remain open; no deployment or production state changed. The eight dirty platform worktrees remain quarantined and untouched. An older unmerged branch's historical reuse of the WS6.3-07 label is superseded by WS6.1-31 and is not part of PR #177." },
    { date: "2026-08-04", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "RELEASE TRUTH RE-DERIVED FROM LIVE STATE. A re-check ~20 minutes after the previous correction found the boundary had moved again: PRs #174 and #175 merged, main advanced to c9b1e47, and the backend cut over — Cloud Run tpc-api-lvpc9b1e47e now serves 100% carrying #171/#174/#175, so the staged tpc-api-lv092f8dd never took traffic at all. The larger finding is that the platform's own docs/AGENT_HANDOFF.md deployed-truth table — the doc CLAUDE.md makes every agent read first — was wrong on BOTH layers: it recorded tpc-api-secrot0804 / d1160c1 and asserted no cutover had occurred, and recorded Pages 4c6f3edb / source 6098f819 whose bundles are not served. Verified instead from gcloud run traffic and by fetching the served page (index-BvTuH1R5.js is served; index-BYqXPFj4.js, which the table named, is not). PR #176 corrects that table. Draft PR #168 could not be the fix: it records the same superseded boundary, is 8 commits behind main, and its 11-file documentation update is still uncommitted in a worktree. The repo's own check-docs.mjs boundary checker (built under WS6.1-30) reproduces this in seconds and still reports 16 stale 'current release' lines across 9 further docs — the tooling to prevent this drift exists and was simply not run. CORRECTION within the same hour: PR #168 then merged as d0e9b90, having rebased and rewritten the release docs against the live pair — so the boundary drift is closed and the checker reports clean across all 17 previously-flagged lines. The redundant PR #176 was closed unmerged. That merge also supersedes an earlier claim on this page: the fixed-set completion/replay UAT has PASSED against the deployed source (two excluded-admin first submissions, three no-op replays, exact 1 Session / 30 version-0 Attempts / 1 incomplete report / 0 cohorts), not 'not yet re-run' as stated an hour earlier. What genuinely remains on that lane is literal-total 10/4 read acceptance and a fresh five-read start proof. No backend state was touched from this session." },
    { date: "2026-08-04", who: "Dixon (initiator) + Codex; Claude design record retained", project: "tpc-online-platform",
      summary: "BOOKMARK UX SANDBOX — PRIVATE DESIGN EVIDENCE, NOT PRODUCTION. Dixon initiated the sandbox build from the five-platform bookmark UX that Natalie accepted with Claude and merged as PR #138 / 398fe4f. The private Sites sandbox demonstrates topic/type grouping, expandable bilingual question review with answer/explanation, preset reason chips, five-second removal Undo, an instructional empty state, calm flashcards and a bookmark-sourced Practice preview with child-controlled removal after a correct answer. Codex delegated the first implementation to a builder agent named luna_max on the available coding model, then caught and fixed an answer-option mismatch by separating the display answer from the canonical correct option; starter-only tests were replaced with two bookmark contract checks and the build passed. A generated social card was rejected because it invented visual content, so it was not shipped. The sandbox is local/sample-state UI only: no TPC platform source, auth, Cloud Run, Sheets, cross-device persistence or production deployment changed. WS6.1-02/-03 and WS8-04/-06/-11/-12 remain held/open; dashboard focus and system map are unchanged." },
    { date: "2026-08-04", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "DASHBOARD TRUTH CORRECTION: the live page was asserting four things that production contradicts. It said PRs #134/#135 still needed routing (#134 merged 09:07, #135 closed and replaced by #149); it said the Chinese-only Admin change was unmerged with no PR and that \"the consoles remain bilingual in production\" (PRs #155/48a56d3 and #157/6098f819 merged and are live — the exact opposite of what the page claimed); and it pinned the release boundary at Pages 5871539 with Cloud Run tpc-api-points0803 serving d1160c1. Verified current truth: Pages serves 098d243c from source a2c24301 (PR #173), and Cloud Run tpc-api-pcmp5ccf serves 100% while tpc-api-lv092f8dd — PR #171's legacy version-zero fix — is Ready at 0% awaiting smoke and cutover. The stale board card is replaced by the actual open sequence: smoke, conditional cutover, repeat the fixed-set completion UAT that failed on legacy version-zero snapshots, merge draft PR #168 last. Two items the prior status sweep omitted are now recorded: PR #174 (retire the duplicate legacy exposure count — a production schema mutation in the same exposure area as the cutover) and the reclassification of claude/admin-chinese-only-wip from \"do not merge, 42 failures\" to superseded by #155/#157. Worktree hygiene restated with measured counts: 73 worktrees, 8 dirty, 6 with tracked changes, one of which is the primary checkout and therefore not quarantinable. No platform code, task status or scope changed." },
    { date: "2026-08-04", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS6.3 report tab enhancements now display under Dixon on the board and roadmap. The dixon owner key already existed with \"WS6.3 reports + question review\" as its scope, but no card in the file ever used it — both WS6.3 entries still carried the interim owner: \"both\" from 2026-07-31, when Natalie kept accountability with the principals and named Dixon only in the card text. Max's 2026-08-01 D10 ruling settled that question the other way (ownership is lean and trust-based; Dixon owns WS6.3 end-to-end and is encouraged to take further features), so the cards were inconsistent with both the ruling and the owners registry. Flipping them makes the badge match the ruling. One carve-out is written into the note so the ownership change does not silently transfer it: WS6.3-06d, the D5/E1 review of the synthetic cohort-average and percentile claims, stays routed to Max. Exclusions are unchanged — cross-device completeness stays WS8-04, and WS8-01, WS8-10, WS8-12 and WS9-00 remain unassigned. Dashboard presentation only: no platform code, task status, scope or roadmap ID changed." },
    { date: "2026-08-04", who: "Natalie + Claude", project: "tpc-online-platform",
      summary: "RELEASE-BOUNDARY INTEGRITY MERGED: PR #152 landed as cf5258e and supersedes the earlier local Codex candidate. prototype-v0.2/scripts/check-docs.mjs now checks encoding against the exact revision being published and blocks deploy on corruption; its corrupted fixture is built from character codes so the self-test cannot poison the tracked tree. After publication, the boundary mode reports attributed source/Pages/revision claims across three-line wrapped windows, compares backend claims only when --backend is supplied, and remains advisory because Pages already changed; --strict provides the pre-merge failure mode. Validation covered the clean tree, 12 stale frontend lines under a different pair, isolated stale-backend detection and an exit-1 corrupted fixture. WS6.1-30 is done with WS6.1-30a owning the boundary reporter. PR #147 also closed the frontend dependency audit, independently confirmed by prototype-v0.2 npm audit reporting 0 vulnerabilities. No deployment occurred as part of these merges." },
    { date: "2026-08-04", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "RELEASE-BOUNDARY INTEGRITY (SOURCE COMPLETE, NOT PUSHED/MERGED/DEPLOYED): WS6.1-30 now has a zero-dependency repository checker wired into cloud-run npm run lint. It rejects tracked C1/common Latin-1→UTF-8 mojibake, enforces one machine-readable current frontend source/Pages owner in AGENT_HANDOFF while allowing historical release SHAs, and compares that marker with public gh-pages through npm run check:release. deploy.sh prints the previous and new full SHA receipts and, after publishing, fails clearly as Pages published / release documentation incomplete when the marker is stale; a safe writer changes only that marker, so operators do not mistake the failure for rollback or redeploy a docs-only follow-up. Validation: 7 focused integrity tests, backend 582/582, frontend 729/729, 107-module build, lint 0 errors/15 existing warnings, live public-boundary comparison, shell syntax and diff checks. Local platform commit db23f41 on codex/release-integrity-gate; no production or public Pages state changed." },
    { date: "2026-08-04", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "LAYOUT RELEASE + DEPLOY: every tab had drifted onto its own page frame, type scale, headline and vertical rhythm — five CSS rules competed over the page width, so at a 1920px window content began on three different left edges (270 / 371 / 801, a 531px jump between Report and Settings). PR #136 replaced them with one token frame and one type scale where heading level decides size, moved the page title into the top bar as the real h1, moved each console's actions into its sub-tab row, and renamed 模擬測驗/套題 → 模擬賽 (75 replacements, i18n resources included so both locales moved together). Measured after the change: all eight tabs start content at +24px with a 14px rhythm and 24px padding. Merged as ba01aeb and deployed to Pages ffad818; a follow-up deploy then published source 4da0506 as Pages 5871539, gated on 729/729 frontend tests and the 107-module build. NOT reviewed by Max (WS6.2-20b) — production is running an unreviewed UI lane, and deployed is not accepted. Separately, the Chinese-only admin-console decision is implemented on a branch but NOT merged and has no PR: 42 of 722 assertions still name changed copy, so the admin consoles are still bilingual in production." },
    { date: "2026-08-04", who: "Natalie + Codex (GPT-5); Claude output evaluated", project: "tpc-online-platform",
      summary: "AUG 3 DAILY CLOSEOUT (published only after the 20 most recent other TPC Codex tasks all ended task_complete). DELIVERY -- WS4.2 core stayed closed while adjacent releases completed governed QuestionSet approval/builder/history behavior, edge-to-edge learner tabs and Profile-only language, active-Quiz/Result review, real Practice/Mock reporting, latest-version exposure/accuracy telemetry, Result scoring visuals, FedCM hardening and the hardened offline recipe harness. Current production is Cloud Run tpc-api-points0803 from backend d1160c1 and frontend df7dbca on Pages bd4f511 through workflow 30824219824; frontend gate 722/722 across 36 files plus the 106-module build, backend 576/576 and lint 0 errors/15 existing warnings. DATA -- production remains one intentionally published dummy mock plus seven drafts; replace or unpublish it before public launch. OPERATIONS -- the 10:28 UTC Sheets alert was a transient overlapping-UAT event on an old revision: all 58 reads succeeded first attempt, no quota/retry/429/5xx or duplicate write occurred, the current revision was not implicated, and no rollback was needed; serialize production UAT/polling before reducing replay, append and ledger-read amplification. MERGE AUDIT -- safe bookmark Phase 2/3 design PR #138 merged; docs closeout PR #145 merged platform main at bc114140. PRs #134/#135/#136 remain deliberately unmerged: held Notifications/Test scope, a conflicting report lane whose unmerged tree briefly served production, and an incomplete/conflicting demo-bilingual lane. Older remote branches are stale or superseded snapshots, not ancestry-merge candidates. DOCS -- 30 tracked Markdown files are synchronized to the live release; 0 broken relative links, balanced fences, 386 unique roadmap checklist IDs and a Markdown-only clean diff. CRITICAL EVALUATION -- Codex was strongest at integration boundaries, regression gates, live evidence, incident attribution and documentation truth; Claude was strongest at fast learner-UX iteration, visual exploration and harness prototyping. The combined output moved features unusually quickly, but release discipline lagged the feature velocity: overlapping production sessions, one unmerged tree serving traffic, direct-to-main episodes, stale branches and three conflicting open lanes are the clearest warning. The product is materially closer to pilot-ready, but official K2/K3 content, serialized load evidence, signed-in Report UAT, fallback/accessibility review and dummy-content removal remain launch gates rather than polish." },
    { date: "2026-08-03", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "EVENING WRAP — merge audit closed and everything landed on main. Natalie-side audit of the harness PR raised 7 findings (XSS in the review page, unfrozen contracts, CLI env/cwd, fake agreement metric, spec contradiction, non-fail-closed exchange, external-seed rights); all fixed same-day with regression tests, and the audit response is on the PR. Four PRs merged under the founder mandate with rollback safety: #140 FD namespace rename, #141 ReportHub sample-data labelling (Max ruled relabel-as-explicit-sample on the ranking breach — bilingual demo banner + flagged ranking metric + 4 pinning tests, live-verified), #142 batch-payload untrack cleanup, #70 the hardened harness lane. FD38 ratified by Max + Natalie: every seed — TPC 歷屆 or external — stays internal forever, only derived questions ship; external-seed hold lifted for Dixon. Dixon submitted his first review round (7/7 with teacher-grade notes; caught the chart-label mismatch the judge scored 87 — judge-human agreement honestly 0.29, threshold work continues). Batch 2 ran with deltas d1–d5: 12/12 generated, validator mechanically screened 5 real defects (an arithmetic error, two archetype-contract violations, two missing fields) before any human time. Frontend 722/722. Production deploy of merged main awaits Max approval." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION SET BUILDER READABILITY - LIVE. PR #132 merged as frontend source dd8ea89228466d3e984ccdf33fcb381b8852453a and deployed as Pages d0adf49b29e64548c4c9145cefc39a10fc271a87. The builder now uses a compact master/detail layout with independently scrolling Question Library and Selected Set panes, collapsed advanced filters, compact bilingual preview controls, a narrow-screen pane switcher and a wrapping concept grid. Development-only K2/K3 inventory is spread across all 10 concepts, so a 30-question recommendation selects exactly three per concept and interleaves all 10 before repeating. Exact-source gates passed 718/718 tests across 35 files and the 106-module build; public HTML and the matching main/Admin/demo-fixture/CSS bundles returned HTTP 200. No backend, schema, Sheets or authenticated production-data action occurred." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "RESULT METRIC VISUAL REFINEMENT - LIVE. PR #130 merged as frontend source bea240a291dff0695158334762529bd55bf64ceb and deployed as Pages 3ad247dd1febcff1643a8ca3a91383e8022d3c67 through successful workflow 30807887729. The full-screen Result now separates difficulty-weighted score from count-based outcomes: one aligned score progress bar, one correct/incorrect/unanswered distribution bar, completion shown separately, explicit legacy unanswered handling, restrained teal/coral/neutral colours and a non-shrinking summary section with balanced spacing. Exact-source release gates passed 712/712 frontend tests across 34 files and the 105-module build; public HTML and fingerprinted CSS/JS assets returned HTTP 200. No backend, schema, Sheets or authenticated production-data action occurred. The inherited high-severity PostCSS development-dependency advisory remains separately open." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "REPORT REAL-DATA INTEGRATION - LIVE. PR #124 merged as source 0f446e9fc5891eed43b63d944580ab51a7e93260 and first deployed as Pages da8836a20963ad7680ca73ed2d08a57c0f5c0415 through workflow 30803833341. Current source f4ea76a98e556aace2117280b1610832672ad83d retains it as Pages f7335a1482f632515cde817a7a6e2cd9fd43b7ba through workflow 30804330057 and also includes Dixon's challenge graphs. Practice uses rolling hydrated learner answers; Mock uses real refType=set history and reopens the existing Result drill-in; report subpages reuse the TopBar return arrow. Current combined gates pass 707/707 frontend tests across 34 files and the 104-module build; signed-in production Report UAT is not claimed. No backend action, Cloud Run deploy, Sheets read/write or schema change. Dixon's graph code does not affect Practice integration, while its synthetic cohort/ranking claims still need separate D5/E1 review." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION CREATION ACTION HIERARCHY (SOURCE ONLY): candidate c206e64 moves New manual question and the gated New AI question from the page-level Question Bank header into a dedicated action row inside the active question subtab. Both controls remain available in Needs review/All questions, remain fully visible at 1280px, and disappear in Sets. Browser tab-transition proof passed; focused admin tests pass 139/139, full frontend 699/699, and the 103-module build passes. No platform push, merge, production write or deployment was performed." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION-SET BUILDER READABILITY (SOURCE ONLY): candidate 6efee3b, rebased on the PR #114 platform boundary 38679ca, aligns the set composer with the AI-generation editor instead of rendering one long pool-plus-selection page. The left Question Library keeps recommendation, search, filters and batch selection in an independently scrolling pane; the right Selected Set keeps ordered questions, concept-count chips, reorder/remove controls and compact save actions in its own pane. Populated 30/30 and empty K2/K3 states were browser-verified against the 80 demo fixtures; focused admin tests pass 150/150, the rebased full frontend passes 699/699, and the 103-module build passes. No platform merge, push, production data write or deployment was performed." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "WS4.2 SIGNED-IN CONFIRMATION PROOF: the final PR #104 evidence gap is closed on production. From the approved published-set member k2_dummy_arith_01, Disable opened the bilingual impact dialog and named exactly one affected set: K2 基礎運算測試題 / K2 Dummy Arithmetic Practice (set_k2_dummy_arithmetic_01). The dialog warned that the mock would disappear from learners immediately and would require repair plus re-approval before returning. Cancel closed the dialog cleanly; k2_dummy_arith_01 remained Approved and learner Home still showed the published mock as task 1. No question, set, attempt or publication state changed. Platform evidence is merged through PR #113 / main 08be981." },
    { date: "2026-08-03", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "WS4.2 FINE-TUNING RELEASE: a review of the shipped mock preset raised seven items; six were already closed on main by parallel Codex work (learner level scoping, set-member preview, release stamp, published-but-hidden admin incident, immutable history titles, discovery ordering, and the draft set builder). The two remaining shipped together in PR #104, merged as 82f193c. (1) Disabling or unapproving a question that belongs to an approved published set now warns first: the server returns the exact affected sets with a state-bound confirmation token bound to each set's approved/published hashes and reviewedAt, so a stale confirmation cannot be replayed, and transitionQuestion fails closed unless the retry carries the current token. Cancel changes nothing. (2) A mock the learner already finished renders as 已完成 with its latest accuracy, date and attempt count instead of a permanent 可開始, while staying retakeable. Released to both layers: Cloud Run tpc-api-setimpact0803 serves 100% and Pages 5da4386 serves the same source — the first time backend and frontend have shared one exact boundary since 07-31, and they must stay together because an older frontend cannot obtain an impact token. Traffic did not follow the deploy (this service pins named revisions), so update-traffic was required after the build. Gates at the merge commit: backend 575/575, lint 0 errors, frontend 688/688, 101-module build; live bundles confirmed to carry both changes. Rollback points are tpc-api-smartsets0803b and gh-pages 60565f1. Still outstanding: a signed-in admin walkthrough of the confirmation dialog itself, and the dummy K2 set remains the only published mock — unpublish or replace it before public launch." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION-SET DEMO INVENTORY (SOURCE ONLY): candidate 84b33f4 adds 80 dev-only approved Maths questions to the demo Question Bank—10 for each of four topics in each of K2 and K3, spanning difficulties 1–3 with reliable synthetic current-version accuracy evidence. K2 and K3 both recommend complete 30-question sets; fixture-only balancing is 8/8/7/7 across the four topics. A pre-existing safety gap was closed so Demo Save never calls the live backend. Frontend 694/694 and the 102-module build pass; live Sheets/API/production remain untouched." },
    { date: "2026-08-03", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Seven visual design fixtures injected into the demo question bank (fixture_vq01–07, all seven archetypes, source ai_generated, dev/demo-only behind an includeFixtures flag — production Sheets untouched per D11; Natalie pre-agreed direct merge). Harness batch questions converted via a new scene-spec→SVG renderer to static SVGs under public/img/fixtures; q02 repaired. Frontend 617/617 green, governed 40-question bank byte-identical, live-verified in demo practice (P6 run serves pure fixtures). Purpose: Max s 答題 UI revamp now has 題圖 + 選項圖 + 圖文混合 cases to design against. Also today: full-archetype UAT coverage ruled (Dixon owns the blueprint), harness+exchange mailbox live with Dixon (dixontsetk) invited, teacher-authoring direction agreed (docs-in/agent-ingest, post-UAT)." },
    { date: "2026-08-03", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "PRACTICE SETUP/BRIEFING UX + MULTI-SELECT TOPICS \u2014 LIVE. Two releases from a five-platform UX comparison (Kahoot, Fun Expected Maths, TestGorilla, SHL, Pymetrics), both frontend-only with no backend action, no audio and no child-visible ranking. (1) PR #88: Setup now presents ONE start action \u2014 a run card carrying the recommended configuration until the learner changes it \u2014 with count/difficulty/timer/feedback moved into a collapsed More options, topic cards carrying a Report-consistent accuracy meter suppressed below the minimum-evidence bar, and fixed mock sets moved into their own section because a set run freezes membership/order/feedback/timing so the practice controls never applied to it; the official scheduled test stays off the screen entirely as the WS7-14 Coming Soon item. Briefing replaced four stat tiles with three fact rows (how many, total time up front, when answers appear) keeping only the rules those rows do not state. A regression was caught pre-deploy: Result's \u7df4\u7fd2\u5f31\u9805 sends the weakest topic to Setup, and the new run card would have discarded it \u2014 nothing covered that path, PracticeSetup.test.jsx now does. (2) PR #100: \u7bc4\u7587 selection is multi-select with \u6df7\u5408 exclusive (choosing it clears every topic, choosing a topic clears it, turning off the last topic falls back to Mixed), and a recommendation may now span up to 3 topics that share one reason and can each serve a full run. Sessions.refId is unchanged for mixed and single-topic runs; only a genuine multi-topic subset uses the joined topicA|topicB form, and draft settings keys stay byte-identical for the existing cases so no two subsets share a draft. The recommendation algorithm (90-day window, judged thresholds, weak/refresh/coverage/maintenance order, viability and topic-set rules) is recorded in the existing ARCHITECTURE \u00a75 Practice section per Natalie, not a new file. Merged main efa091b; Pages 457aa9b serving index-Dpcg-dX4.js / index-WO_5325W.css, markers verified live. 676/676 frontend tests across 31 files + 100-module build. WS6.2 is Max's lane \u2014 merged on Natalie's explicit direction, formal review still pending." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION PERFORMANCE (SOURCE ONLY): Natalie chose latest-version-only aggregates. WS6.1-28 now records deterministic, uid-free per-question/version start evidence, stamps the exact graded questionVersion on Attempts, and projects only the current version's exposure, submitted, correct and derived accuracy values onto Questions; approval resets the projection and late older-version submissions are excluded. Question Bank shows sortable Exposure and Accuracy with correct/submitted plus a low-sample label. An additive, idempotent Questions/Results migration and templates are ready. Local gates pass: backend 567/567, lint 0 errors (15 existing warnings), frontend 657/657, and 100-module build. No workbook migration, deployment, production write or live smoke was performed." },
    { date: "2026-08-03", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SETTINGS LAYOUT FIX: Natalie flagged the redesigned Settings page as still ugly, and at desktop width she was right — the page held no measure, so rows stretched the full viewport stage with each label a screen-width from its value and hairlines running edge to edge; it read as a spreadsheet. Settings now keeps a 620px column and each group (個人資料/偏好設定/帳戶) sits in a bordered card matching Home's container language. Root cause worth remembering: the .app--shell/.app--fullscreen rules reset .screen to max-width:none later in the cascade, which silently defeated the first max-width attempt — per-screen measures must be restated after those blocks. Also fixed the settings language pill clipping its selected option's corners. 655/655 tests; verified at 1280 and 375. PR #96 merged as e1a18d2, deployed as Pages 6a3ed01; docs via PR #97." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION BANK SET VISIBILITY (SOURCE ONLY): the Sets list previously showed only each set's question count, so admins could not inspect which questions were selected—especially for published/read-only sets. Candidate 7d93cd1, rebased on private main e1a18d2 after PR #96, adds a collapsible View questions control to every set row and shows all members in saved order with question text, domain/topic, lifecycle status, version and ineligibility warnings. Verification passed 656/656 frontend tests and the 100-module build. Nothing was pushed, merged or deployed; Pages remains 1feca6f from frontend source dc3a30d, and any publication must be a separate release." },
    { date: "2026-08-03", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "PROFILE LOCK + SETTINGS REDESIGN: students can no longer change 年級 or 地區 after sign-up, with NO self-correction path — an admin corrects mistakes through the 用戶 console. The backend is the authority: upsertUser rejects a changed yearLevel/region on a non-admin row (level_locked/region_locked), while unchanged resubmits still pass, a blank legacy field may be filled once, and admin rows stay editable. Cloud Run tpc-api-profilelock0803 is live at 100% traffic (ping 200, unauthenticated upsert rejected, zero errors after cutover). Settings was also rebuilt as an identity card over 個人資料/偏好設定/帳戶 row groups — every row reads label → value → affordance, editable rows carry 更改 and locked rows a lock glyph (refs TestGorilla/SHL grouped panes, Kahoot identity header). Backend 552/552, frontend 623/623. PR #82 (lock) and PR #85 (redesign) merged; Pages d264a32 from source 25af7fe." },
    { date: "2026-08-03", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "RESULT SUMMARY REDESIGN: the post-practice result page leads with celebration instead of a raw percentage (Natalie's UX direction, refs Kahoot/Pymetrics energy + TestGorilla clarity). Live now: stars + 完成了！ + an accuracy-tiered encouragement line, a fraction ring showing 答對題數 X／Y in question counts (replacing weighted 得分 points and the % bigstat), one 用時 caption, and a labelled action row \u2014 再玩 (primary), 練習弱項 naming the weakest topic and pre-selecting it in Practice setup, 主頁. Codex's PR #76 review filters (全部/答錯/答對/已標記, expand-all-incorrect) are untouched beneath it; expanded review questions now centre their options. Natalie reviewed iterations (card \u2192 flat \u2192 tinted band \u2192 plain stage). PR #75 merged as 1d8da31, deployed as Pages 4910764; 622/622 tests; live bundle marker verified. Docs synced via PR #79." },
    { date: "2026-08-03", who: "Natalie + Codex (GPT-5); Claude output reviewed", project: "tpc-online-platform",
      summary: "AUG 2 WRAP + FINAL AUG 3 CLOSEOUT (published after every other Codex task stopped): no Codex platform source/docs work completed during Aug 2 proper; the delayed closeout then merged safe governance/docs PRs #69/#71/#72 and WS4.2 learner fix PR #73. Live source 38ee384 / Pages 3e2a170 (workflow 30784770689) passed 619/619 + the 97-module build: Result rows reopen the attempted question with submitted/correct answers and explanation, while Result and Briefing fill the viewport. Founder direction leaves exactly 1 dummy 30-question/15-minute mock published for pre-launch use + 7 draft sets (AdminLog log_n6os8jxgt6u4); Home and Practice agree, official Test stays Coming Soon, and launch readiness must replace/unpublish the dummy. Codex synchronized all 24 Markdown files through PR #74/main 5543917 (24 links/0 broken, 176 balanced fences, 351 unique Roadmap definitions) and recorded pending source-only head fe88f41 for edge-to-edge learner tabs + Profile-only language selection, with no PR/merge/deploy claim. PR #70 remains unmerged: Claude/Max produced a useful harness, 7-slot experimental batch and visual-prompt deltas quickly, but release claims still outrun frozen inputs, HTML/CLI isolation, honest agreement and consistent judging evidence; the new automatic sibling-repo git push and external-past-paper rights rules widen the safety/governance gap. Codex supplied the Result gap fix, integration boundary, live verification and adversarial review; Claude supplied rapid factory prototyping and iteration. Six stale no-PR branches remain intentionally unmerged because current main already contains later integrated behavior." },
    { date: "2026-08-03", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Recipe harness B1–B4 built and smoked (PR #70 branch). Validator (closed schema + per-archetype answer recompute), headless gen/judge CLI runners with single-retry and offline guard, blind review.html (judge verdict locked until the human submits; qff1 category chips; verdicts JSON export) and agreement reports with a cross-batch tracker. Real-model smoke batch 3/3 validator pass; simulated review round-trip showed the calibration signal working (judge confidence 70 on approved vs 42 on rejected). Baseline visual generator/judge prompts (draft v0) codify the scene-spec PoC method with an 8-point acceptance bar. Discovered the FD18 prompt snapshots already in-repo — generator snapshot is superseded 31c, so the text lane needs Natalie to run prompts:export for active 23b (§8.1). First real batch tonight; Dixon blind-reviews tomorrow morning." },
    { date: "2026-08-01", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Contributor access scope resolved by Max (raised by Natalie 2026-07-31): the 2026-07-03 deep-dive containment proposal is superseded; contributor access follows D10 ownership — lean and trust-based, no content fences or per-checkpoint approvals, and Dixon is encouraged to own features end-to-end (WS6.3 already his). Two system-level disciplines recorded, applying to everyone including Max: a second-person look on any production publish from feature freeze (Sep 4) through UAT week, and confidentiality via the signed internship contract (NDA + IP assignment). Existing gates unchanged (superadmin-only generation, human approval, WS5.2-04 hold, student-data hygiene). Full ruling in the private repo ROADMAP (PR #69); board card closed." },
    { date: "2026-07-31", who: "Max + Claude (Fable 5)", project: "",
      summary: "FOUNDER SPRINT KICKOFF — Max moved from Team Futura dev onto the platform and set a six-week runway to UAT (Sep 10–13, K2/K3 deep, not eight levels thin). Three decisions minted: D10 ownership re-cut (Max = learner UI/UX + factories + generation ops, converging with Natalie's same-day WS5.2/WS5.3/WS6.2 reassignment and adding Dixon = WS6.3 reports + question review, with K-level developmental fit routed to Max's OT background and pyramid-site paused), D11 offline recipe-harness mandate (internal-only, never imports into production, recipe-only deliverable, daily two-checkpoint batch cadence, GO/NO-GO Aug 21–23; founder start ruled without a sync — Natalie reviews async), and D12 infra stays on Sheets+Drive through UAT (migration decision ~Oct on real load data; factory SVGs ship inline in the question row). Enabling work landed same-day: RECIPE_HARNESS_SPEC.md ACTIVE on platform branch docs/offline-recipe-harness-spec with a working scene-spec→SVG PoC (7 archetypes from K2 counting to P6 composite-area/angles/chart-average — the deterministic-renderer design lets the existing text judge evaluate visual questions by judging the spec, so no vision judge is needed); platform-doc factory decisions renamed to FD10–FD35 (formerly D-numbered 10–35) so bare D# tokens resolve to this ledger; a six-week delivery plan published to the team. Scope cuts confirmed: user mailbox hidden in favour of static announcements; narration is TTS-only on 文字題 with an optional narrationScript schema field pending. First text batch fires the night of Aug 3; Dixon blind-reviews all of it Aug 4 morning as the confidence-threshold calibration." },
    { date: "2026-07-31", who: "Max + Claude (Opus 5)", project: "",
      summary: "D9 attribution amended for a third operator and a third device. Dixon joined as intern in 2026-07, initiated and acceptance-directed the live learner-language release (platform d97d492, Pages workflow 30619332923) from inside Natalie's /Users/hkycaa account — so the old two-device map attributed his work to Natalie. D9 now maps origin → person as a table (dev Mac ktf@Hais-MacBook-Pro + Max's other computer = Max; /Users/hkycaa = Natalie; Dixon-initiated or acceptance-directed work = Dixon regardless of the account it originates in), with the person, not the directory, as the unit. Max ruled that every change originating from the dev Mac is signed Max: that account's global Git identity is now Max <info@pyramidchallenge.org>, so blame is authoritative there from today forward, while Natalie and Dixon still both commit as HKYCAA and their split rests on this ledger. Registered dixon in owners. Synced the D9 restatements in business/README.md and the platform repo's CLAUDE.md. Also fixed the access gap behind all of this: tpc-online-platform-admin is private under the thepyramidchallenge personal account and HKYCAA was not a collaborator, so git pull on the dev Mac failed with 'Repository not found' and the local copy had sat 4 weeks stale at July 3; HKYCAA now holds write, pull verified." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "NAVIGATION + LAYOUT: three student/admin UX fixes shipped as one release (PR #66, Pages a0ea79f). (1) The header back arrow now returns to the page the user actually came from via a screen-history stack, falling back to Home only when there is no history; back-hops are never re-recorded so repeated back walks the trail. (2) The pre-practice briefing is a flat full-page layout \u2014 the branch version was reconciled in favour of the parallel session's divider-based flat design already on main. (3) The admin Questions/Assets/Users/Log consoles now fill the whole window edge-to-edge (no grey gutter or rounded card); student screens keep the card. Merged tree 617/617 tests; live bundle marker verified. Docs synced via PR #67." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN FINAL FORM: Natalie reviewed the card iteration and chose a full-panel login instead — brand, Google button and hint clustered at the vertical centre, no card, and the 中文|English pills removed from the sign-in screen (language switching now starts at Settings or in-quiz; pre-auth pages render default zh-HK). The GIS skeleton pill and 8s load-timeout retry from the card iteration stay. PR #60 merged as b3813b7 and deployed as Pages dd98ac2 (also carries the lazy Question Bank Sets subtab); merged tree 608/608 tests; new bundle verified live. Handoff release boundary corrected via PR #63 after a doc race with the parallel session." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN POLISH: the login gate is now a centred card on the surface backdrop (language pills, brand, Google button and hint grouped; scoped so the account-setup form keeps its full panel), a pulsing skeleton pill holds the Google button slot while the GIS script loads (the button used to appear seconds late with nothing in its place), and a hung GIS load now surfaces the retry UI after 8s instead of failing silently. PR #57 merged as 5b0564a and deployed as Pages d2072f8; 607/607 frontend tests; live signin-card CSS marker verified. Docs synced via PR #59." },
  ],
};
