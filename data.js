/* =============================================================================
 * TPC WORKSPACE DASHBOARD Ã¢ÂÂ DATA
 * -----------------------------------------------------------------------------
 * THIS is the file you (and agents) edit. The dashboard (index.html) just
 * renders whatever is here. You almost never need to touch the HTML.
 *
 * HOW TO UPDATE (see AGENTS.md for the full protocol):
 *   1. meta.updated / meta.updatedBy  Ã¢ÂÂ stamp who touched it & when
 *   2. focus                          Ã¢ÂÂ the one thing that matters most today
 *   3. projects[].status / health     Ã¢ÂÂ keep each project's state honest
 *   4. board (now / next / blocked)   Ã¢ÂÂ move cards as work flows
 *   5. roadmap[].items[].state        Ã¢ÂÂ flip todo Ã¢ÂÂ active Ã¢ÂÂ done
 *   6. systemMap                      Ã¢ÂÂ ONLY when the architecture changes
 *   7. changelog                      Ã¢ÂÂ prepend a one-line entry every session
 *
 * Allowed values:
 *   status / health : "stable" | "active" | "blocked" | "planned"
 *   roadmap state   : "done"   | "active" | "todo"    | "hold"
 * ========================================================================== */

window.TPC_DASHBOARD = {

  /* --- header / standup ------------------------------------------------- */
  meta: {
    updated:   "2026-08-03",
    updatedBy: "Natalie + Codex",
    note:      "Live at thepyramidchallenge.github.io/tpc-dashboard ÃÂ· light theme. ÃÂ· Business Space (the *why*): business/ (CONSTITUTION + decisions/hypotheses/experiments). ÃÂ· Reports (Ã¦Â·Â±Ã¥ÂºÂ¦Ã¥Â Â±Ã¥ÂÂ): reports/ Ã¢ÂÂ periodic commissioned deep-dives.",
  },

  /* --- reports (deep-dive reports tab) -----------------------------------
   * commissioned by Max periodic deep-dive reports. Registry only Ã¢ÂÂ the
   * content lives in reports/<id>.md, rendered by the Reports tab (same
   * mechanism as the Business space). PREPEND newest first. To add a report:
   * write reports/<id>.md, prepend an entry here, stamp meta.updated.
   * --------------------------------------------------------------------- */
  reports: [
    { id:    "2026-07-03-visual-question-factory",
      date:  "2026-07-03",
      who:   "Claude (Fable 5)",
      title: "Deep-dive #2 Ã¢ÂÂ Visual Question Factory: verdict, corrections & parallel-build plan",
      zh:    "Ã¦Â·Â±Ã¥ÂºÂ¦Ã¦ÂªÂ¢Ã¨Â¨Â #2 ÃÂ· Ã¥ÂÂºÃ©Â¡ÂÃ¥Â·Â¥Ã¥Â»Â ",
      summary: "4-probe review of the factory-first pivot: architecture proven live (working scene-specÃ¢ÂÂSVG micro-build embedded), 25yr AIG science backs it, niche genuinely open Ã¢ÂÂ but 3 archetypes cover only 20-28% of real papers, the 6-12-month claim is unfalsifiable, and the factory must feed a dated warm E1, not replace it. Answers all 10 questions from Max + week-1 plan, kill criteria, intern containment, parallel-track design, plus draft ledger entries (2 decisions, 1 hypothesis, 1 experiment, 1 open question Ã¢ÂÂ next free numbers) awaiting discussion with Max." },
    { id:    "2026-07-03-strategy-deep-dive",
      date:  "2026-07-03",
      who:   "Claude (Fable 5)",
      title: "Strategy deep-dive #1 Ã¢ÂÂ the business, scaling, what breaks first",
      zh:    "Ã¦Â·Â±Ã¥ÂºÂ¦Ã¦ÂªÂ¢Ã¨Â¨Â #1",
      summary: "5-agent review (business plan / platform engineering / GTM-ops + 2 red-team skeptics) Ã¢ÂÂ evidence audit, core insight (the bottleneck moved to content/trust/E1-date), market reality check, 3/6/12-month moves, scale flywheel, what-breaks-first ranking, and the cheap experiments that settle each objection." },
  ],

  /* --- people / ownership Ã¥ÂÂÃ¥Â·Â¥ ------------------------------------------
   * Who owns what. `owner` fields elsewhere (projects, roadmap, board) must
   * use one of these keys. Split: Max = pyramid-site + UI in general, plus
   * the WS5.2 question factory and WS5.3 asset factory (reassigned
   * 2026-07-31, after Natalie closed WS5.2 to GO) and the WS6.2 UI review
   * (reassigned the same day);
   * Natalie = the rest of the learning platform (data layer, content,
   * QuestionSets, WS6.1 pilot).
   * --------------------------------------------------------------------- */
  owners: {
    max:     { name: "Max",     zh: "Max",     scope: "Learner UI/UX (WS6.2) ÃÂ· question & asset factories (WS5.2 ÃÂ· WS5.3) ÃÂ· generation ops ÃÂ· pyramid-site (paused) / Ã¥Â­Â¸Ã§ÂÂÃ§Â«Â¯UIÃ£ÂÂÃ¥ÂÂºÃ©Â¡ÂÃ¥ÂÂÃ§Â´Â Ã¦ÂÂÃ¥Â·Â¥Ã¥Â»Â Ã£ÂÂÃ§ÂÂÃ¦ÂÂÃ§ÂÂÃ©ÂÂ (D10)", color: "#1f7a96" },
    natalie: { name: "Natalie", zh: "Natalie", scope: "Data layer, integrity, backend, human approval + WS5.1-04 onward, admin platform (excl. factories) / Ã¨Â³ÂÃ¦ÂÂÃ¥Â±Â¤Ã£ÂÂÃ¥Â¾ÂÃ§Â«Â¯Ã£ÂÂÃ¥Â¯Â©Ã¦ÂÂ¹Ã£ÂÂÃ¥Â­Â¸Ã§Â¿ÂÃ¥Â¹Â³Ã¥ÂÂ° (D10)", color: "#6d4fd6" },
    dixon:   { name: "Dixon",   zh: "Dixon",   scope: "Intern (joined 2026-07) Ã¢ÂÂ WS6.3 reports + question review / Ã¥Â¯Â¦Ã§Â¿ÂÃ§ÂÂÃ¯Â¼ÂÃ¥Â Â±Ã¥ÂÂÃ©Â ÂÃ£ÂÂÃ¥Â¯Â©Ã©Â¡Â (D10)", color: "#b06a1f" },
    both:    { name: "Max + Natalie", zh: "Max + Natalie", scope: "Shared / Ã¥ÂÂ±Ã¥ÂÂ", color: "#5a6570" },
  },

  // The single most important thing to know before starting work today.
  focus:
    "Founder sprint to UAT (Sep 10-13, K2/K3 deep): keep the live WS4.2 learner path honest, integrate the pending edge-to-edge/Profile-only-language polish deliberately, and make PR #70 fail-closed before treating its experimental batches as a release-ready calibration lane. Treasure activation remains on hold.",

  /* --- projects --------------------------------------------------------- */
  projects: [
    {
      id:    "pyramid-site",
      name:  "pyramid-site",
      owner: "max",
      tag:   "Marketing site (rebuild)",
      role:  "Squarespace-free rebuild of thepyramidchallenge.org Ã¢ÂÂ Next.js (App Router) + React + Tailwind.",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/pyramid-site",
      run:   "cd pyramid-site && npm install && npm run dev   # http://localhost:3000",
      next:  "Reach visual parity with live site Ã¢ÂÂ deploy (Vercel/Netlify).",
    },
    {
      id:    "tpc-online-platform",
      name:  "tpc-online-platform",
      owner: "natalie",
      tag:   "Learning platform (Phase 1)",
      role:  "Interactive Practice/Test SPA for K2Ã¢ÂÂP6. Backend on Google Sheets behind an adapter (Firestore/Supabase-ready).",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/tpc-online-platform",
      run:   "cd tpc-online-platform/prototype-v0.2 && npm install && npm run dev   # Vite local URL",
      next:  "WS6.1-28 latest-version question performance is source-complete and locally verified. Next gate is the additive Questions/Results workbook migration, matching backend/frontend deployment, and authenticated live proof; do not describe the new metrics as live before those steps pass.",
    },
    {
      id:    "tpc-online-platform-admin",
      name:  "tpc-online-platform-admin",
      owner: "natalie",
      tag:   "Platform Ã¢ÂÂ full private repo",
      role:  "FULL private project: React v0.2 frontend + Cloud Run backend + docs + sheets templates. The public tpc-online-platform is the published-frontend mirror of this.",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/tpc-online-platform-admin",
      run:   "cd tpc-online-platform-admin/prototype-v0.2 && npm install && npm run dev   # Vite ÃÂ· backend in cloud-run/",
      next:  "Private source now projects current-version-only question exposure and accuracy, with exact attempt-version stamping and Question Bank metrics. Run migrate:question-performance against both workbooks before deploying the matching source, then live-smoke idempotent starts, submissions, and version rollover.",
    },
    {
      id:    "entrance-qr-scan",
      name:  "entrance-qr-scan",
      owner: "both",
      tag:   "Event ops Ã¢ÂÂ staff QR scanner",
      role:  "Mobile-friendly QR scanner for staff check-in. GitHub Pages frontend + Google Apps Script backend writing scan/manual records to Sheets.",
      status: "stable",
      health: "stable",
      repo:  "github.com/thepyramidchallenge/entrance-qr-scan",
      run:   "open entrance-qr-scan/index.html   # frontend/ assets ÃÂ· backend = Apps Script (clasp)",
      next:  "In use for event check-in. (Added during migration sync Ã¢ÂÂ adjust owner/status as needed.)",
    },
    {
      id:    "mainpage",
      name:  "mainpage",
      owner: "max",
      tag:   "Design assets (reference)",
      role:  "Legacy Squarespace design folder. Source of brand/identity/hero assets. Read-only; being absorbed into pyramid-site.",
      status: "stable",
      health: "stable",
      repo:  "Ã¢ÂÂ not versioned (intentional) Ã¢ÂÂ",
      run:   "Ã¢ÂÂ design source, no app Ã¢ÂÂ",
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
      repo:  "Ã¢ÂÂ local / offline-only (no remote) Ã¢ÂÂ",
      run:   "open dashboard/index.html",
      next:  "Keep this dashboard current as the daily source of truth.",
    },
  ],

  /* --- now / next / blocked board --------------------------------------
   * Each card: { title, project, note }. project must match a projects[].id
   * (or "" for cross-cutting). Keep ~3Ã¢ÂÂ6 cards per column; archive the rest
   * into the changelog when done.
   * --------------------------------------------------------------------- */
  board: {
    now: [
      { title: "Bounded official content Ã¢ÂÂ exact-version QuestionSets", project: "tpc-online-platform", owner: "both", note: "Shared handoff: Max owns bounded WS5.2 generation and keeps each candidate at status=review with independent-judge evidence; Natalie owns explicit human approval and WS5.1-04 exact-version QuestionSets. Source-only candidate 7d93cd1 restores ordered selected-question visibility for every set row but still needs a separate PR/release. Do not count calibration or smoke rows as official content. Treasure remains held under WS5.2-04." },
      { title: "Learner UI design sprint Ã¢ÂÂ Ã§Â­ÂÃ©Â¡ÂÃ§ÂÂ«Ã©ÂÂ¢ first", project: "tpc-online-platform", owner: "max", note: "K2-self-operable single interface (Funexpected bar): audio/demonstration over reading, big targets, parent shell gated, settings streamlined, 429 kid-friendly retry state. Design freeze Aug 21; feeds the WS6.2 review lane." },
      { title: "WS4.2 adjacent polish + launch gate", project: "tpc-online-platform", owner: "max", note: "Live core is complete on PR #73. Review pending source-only head fe88f41 for edge-to-edge Home/Practice/Report/Bookmarks and the accepted Profile-only language rule; retain keyboard/focus/ARIA, narrow/zoomed bilingual and phone/tablet safe-area checks. Before official launch, replace or unpublish the sole dummy mock." },
    ],
    next: [
      { title: "Recipe GO/NO-GO Ã¢ÂÂ Aug 21Ã¢ÂÂ23", project: "tpc-online-platform", owner: "max", note: "Gate (D11): two consecutive 30q holdout validation batches at Ã¢ÂÂ¥75Ã¢ÂÂ80% Dixon pass + judge agreement good enough to pre-filter Ã¢ÂÂ governed-lane intake starts (W4Ã¢ÂÂ5, ~15Ã¢ÂÂ20 approvals/day toward two disjoint 30-question sets per level). NO-GO cuts scope (single level / smaller pool), never the date." },
      { title: "UAT Ã¢ÂÂ Sep 10Ã¢ÂÂ13 (K2/K3 deep)", project: "tpc-online-platform", owner: "both", note: "Feature freeze Sep 4; dry run Sep 7Ã¢ÂÂ9; invite waves ~10 families each from the Season 2 base (invites out ~Aug 24). Pass = K2 completes 10q unaided ÃÂ· parents understand the report ÃÂ· zero quota red. Kid micro-tests (Aug 24Ã¢ÂÂ30, Sep 1Ã¢ÂÂ6) and a W5 dress-rehearsal load test precede it (D12)." },
      { title: "WS6.3 report tab enhancements", project: "tpc-online-platform", owner: "both", note: "Parallel lane Ã¢ÂÂ does not displace the shadow feedback proof. Dixon (intern) is implementing; Max and Natalie stay accountable. Frontend only, on the existing WS3.1-06 Report screen: extract aggregation into a tested reportStats.js, then accuracy trend, topic/domain breakdown with a 7d/30d/all filter, local past-attempt review in the History drill-in, minimum-data guards, and test coverage. Cross-device completeness stays WS8-04; WS8-01, WS8-10, WS8-12 and WS9-00 remain excluded and unassigned." },
      { title: "WS6.1 Ã¢ÂÂ pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical polish before real users: accuracy consistency, R8/concurrency smoke, fallback audit and first-time-user default Ã¢ÂÂ WS6.1-11 pilot. Split from WS6.2 on 2026-07-31 when the UI review moved to Max; the two now run as separate lanes." },
      { title: "WS6.2 Ã¢ÂÂ UI review", project: "tpc-online-platform", owner: "max", note: "Reassigned to Max 2026-07-31, matching his UI-in-general scope. Pilot-relevant pass: notify/validation classes, whole-app screen-by-screen review, bilingual copy, glyph/colour/button consistency, Home layout, button UAT, young-learner usability and the Log abnormal-activity banner. Five tasks stay held until after the pilot. WS6.2-07 still confirms UID/display-field scope with Max first." },
      { title: "WS7-06 + WS9-00 Ã¢ÂÂ report validation (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier starts after engineering substrate exists. Co-ship WS7-06 log-only integrity with the first online challenge/report path, then WS9-00 $99 one-off report MVP via the SheetsÃ¢ÂÂAffinity pipeline. Full WS7/WS8/WS9-01+ remains gated on E1/E2." },
    ],
    blocked: [
      { title: "PR #70 offline harness - not release-ready", project: "tpc-online-platform", owner: "max", note: "The branch now records an experimental 7-slot batch and useful visual-prompt deltas, but the original blockers remain: promised frozen production contracts/seeds/rubric are absent; review HTML still embeds model-controlled content unsafely; child CLIs inherit the parent environment/workspace; agreement reporting is mislabeled; and visual-judge rules conflict. The new exchange helper also copies review/manifest/report artifacts into a sibling repo and runs git add/commit/push without safe batchId, trusted-repo/branch, clean-tree or explicit-approval gates; external-past-paper intake needs real rights/T&C governance, not provenance alone. Keep unmerged until fail-closed." },
      { title: "pyramid-site Ã¢ÂÂ paused for UAT sprint", project: "pyramid-site", owner: "max", note: "Hero parallax parity, scoring/report graphics absorb, deploy, CDN photo export (ASSET_GATHER ÃÂ§B/ÃÂ§E) Ã¢ÂÂ all parked by D10 until after UAT; resume ~mid-Sep." },
    ],
  },

  /* --- roadmap / rollout -----------------------------------------------
   * Grouped by project. Each item flips: todo Ã¢ÂÂ active Ã¢ÂÂ done (or hold).
   * --------------------------------------------------------------------- */
  roadmap: [
    {
      project: "pyramid-site",
      owner:   "max",
      title:   "Marketing site rebuild",
      items: [
        { label: "Next.js scaffold + brand system",   state: "done"   },
        { label: "Hero parallax (7 layers) Ã¢ÂÂ paused for UAT sprint (D10)", state: "hold" },
        { label: "Content sections parity Ã¢ÂÂ paused for UAT sprint (D10)",  state: "hold" },
        { label: "Asset migration (mainpage Ã¢ÂÂ public) Ã¢ÂÂ paused (D10)",     state: "hold" },
        { label: "Deploy (Vercel/Netlify)",           state: "todo"   },
        { label: "Link into learning platform",       state: "todo"   },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 1 Ã¢ÂÂ Free Practice MVP",
      items: [
        { label: "WS0 ÃÂ· Project setup",               state: "done"   },
        { label: "WS1 ÃÂ· Data layer (Sheets + API + adapter)", state: "done" },
        { label: "WS2 ÃÂ· Auth & onboarding incl. WS2-07 region capture", state: "done" },
        { label: "WS3.1 ÃÂ· App shell & student screens", state: "done" },
        { label: "WS3.2 ÃÂ· Close-out (B1/B4/C1/C3, prod, auth, tests)", state: "done" },
        { label: "WS4.1 ÃÂ· Question engine",           state: "done" },
        { label: "WS4.3 ÃÂ· Save/session integrity", state: "done" },
        { label: "WS6.1-18Ã¢ÂÂ¦21 ÃÂ· Backend hardening / reliability / observability / tests", state: "done" },
        { label: "WS5.1 ÃÂ· Admin UI & content platform", state: "active" },
        { label: "Dixon ÃÂ· Learner zh-HK/en UI (frontend live; header selector removed)", state: "done" },
        { label: "Full-review gate ÃÂ· 10 P1/P2 risks remediated and regression register retained", state: "done" },
        { label: "WS4.2 ÃÂ· Mock / fixed 30-question set", state: "done" },
        { label: "WS6.1 ÃÂ· QA, polish Ã¢ÂÂ UAT week Sep 10Ã¢ÂÂ13 (K2/K3 deep)", state: "active" },
        { label: "WS11 ÃÂ· Backend maintainability refactor (01 bootstrap dedupe + 02 lint done; 03Ã¢ÂÂ05 now unblocked but sequenced after current content work)", state: "active" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "UI review (WS6.2) Ã¢ÂÂ pilot-relevant pass",
      items: [
        { label: "Founder redesign lane Ã¢ÂÂ K2-self-operable learner UI (freeze Aug 21, D10)", state: "active" },
        { label: "Adjacent learner polish Ã¢ÂÂ edge-to-edge tabs + Profile-only language (fe88f41 source-only)", state: "active" },
        { label: "WS6.2-01 ÃÂ· Notify-layer message classes + form vs field validation", state: "todo" },
        { label: "WS6.2-02 ÃÂ· Whole-app screen-by-screen review", state: "todo" },
        { label: "WS6.2-03 ÃÂ· Bilingual labels, buttons and copy", state: "todo" },
        { label: "WS6.2-05 ÃÂ· Young-learner usability + non-audio accessibility", state: "todo" },
        { label: "WS6.2-08Ã¢ÂÂ¦12 ÃÂ· Glyphs/colours/buttons, Home layout, button UAT, Log banner", state: "todo" },
        { label: "WS6.2-04/06/13/14/15 ÃÂ· Held until after pilot (colour logic, unselect, cross-device language, audio, image ratios)", state: "hold" },
        { label: "WS6.2-07 ÃÂ· Confirm UID/display-field scope with Max, then review", state: "todo" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "Question & asset factories (WS5.2 ÃÂ· WS5.3)",
      items: [
        { label: "WS5.2-01c6/01c7 ÃÂ· 24-candidate comparison accepted; direct compiled prompting selected; bounded official lane GO", state: "done" },
        { label: "WS5.2-01d/01h/01i ÃÂ· Typed GenerationRecords ledger + 3-hour session-paired companion + transport/promotion proofs", state: "done" },
        { label: "WS5.2-01k/01l done; WS5.2-01j live with five-minute UI/backend alignment, controlled boundary proof + Admin diagnostics UI publication remaining", state: "active" },
        { label: "WS5.2-01m ÃÂ· Human-revision/manual-rejudge safety, evidence proof, and source merge", state: "done" },
        { label: "WS5.2-02e ÃÂ· Approval evaluation and retained decision-evidence readback", state: "done" },
        { label: "WS5.2-02f ÃÂ· Independent judge persistence/UI and obsolete server evaluator removal", state: "done" },
        { label: "WS5.2-04 ÃÂ· Treasure curation, matched comparison and activation", state: "hold" },
        { label: "WS5.3 ÃÂ· Visual factory Ã¢ÂÂ scene-spec Ã¢ÂÂ SVG (PoC done: 7 archetypes K2Ã¢ÂÂP6)", state: "active" },
        { label: "Offline recipe harness ÃÂ· PR #70 blocked on contract/privacy/calibration correctness before any real batch; GO/NO-GO target Aug 21-23 (D11)", state: "active" },
        { label: "Recurring AI factories (WS5.2-01f/01g evidence-gated auto-approval ÃÂ· WS5.3-05 illustrative-asset generator)", state: "hold" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "both",
      title:   "Report tab enhancements (WS6.3) Ã¢ÂÂ Dixon implementing",
      items: [
        { label: "WS6.3-00 ÃÂ· Extract Report aggregation into a tested src/lib/reportStats.js", state: "todo" },
        { label: "WS6.3-01 ÃÂ· Accuracy trend over time (session-level, cross-device-safe fields)", state: "todo" },
        { label: "WS6.3-02 ÃÂ· Topic/domain breakdown + 7d/30d/all time filter", state: "todo" },
        { label: "WS6.3-03 ÃÂ· Local past-attempt review in the History drill-in", state: "todo" },
        { label: "WS6.3-04 ÃÂ· Minimum-data guards and sync states", state: "todo" },
        { label: "WS6.3-05 ÃÂ· Report test coverage", state: "todo" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 2 / 3 Ã¢ÂÂ later phases",
      items: [
        { label: "WS7-06 ÃÂ· Log-only integrity subset (co-ship with report)", state: "todo" },
        { label: "WS9-00 ÃÂ· $99 report MVP (E1 north-star)", state: "todo" },
        { label: "WS7 ÃÂ· Test Mode + ranking (gated on E1/E2)", state: "todo"   },
        { label: "WS8 ÃÂ· Reporting v2 & adaptive (gated on E1/E2)", state: "todo"   },
        { label: "WS9-01+ ÃÂ· Subscription + payments (gated on E1/E2)", state: "todo"   },
        { label: "WS10 ÃÂ· Advanced question interactions & visual renderers (ex-WS4.4: class-A visual model, tap/hotspot, mini-games, open numeric)", state: "hold" },
        { label: "WS7-16 datastore decision + WS7-13 adapter parity (Sheets Ã¢ÂÂ Firestore/Supabase)", state: "todo" },
      ],
    },
  ],

  /* --- system map (Mermaid flowchart) -----------------------------------
   * Edit this text ONLY when the architecture changes. Mermaid syntax:
   * https://mermaid.js.org/syntax/flowchart.html
   * --------------------------------------------------------------------- */
  systemMap: `flowchart TB
    %% ---- actors ----
    students([K2Ã¢ÂÂP6 students<br/>+ parents]):::actor
    admins([Admins / authors]):::actor

    %% ---- marketing ----
    subgraph MKT["Marketing / registration Ã¨Â¡ÂÃ©ÂÂ· ÃÂ· owner: Max"]
      live["Live site (today)<br/>Squarespace + Commerce<br/>thepyramidchallenge.org"]:::live
      rebuild["pyramid-site (rebuild)<br/>Next.js ÃÂ· React ÃÂ· Tailwind"]:::wip
    end

    %% ---- design source ----
    mainpage["mainpage/<br/>design assets ÃÂ· brand ÃÂ· hero"]:::ref

    %% ---- platform ----
    subgraph PLAT["tpc-online-platform Ã¢ÂÂ Practice / Test SPA ÃÂ· owner: Natalie"]
      app["App shell<br/>(Home ÃÂ· Practice ÃÂ· Result ÃÂ· Report ÃÂ· Admin)"]:::plat
      adapter{{"Backend interface<br/>(data-access adapter)"}}:::iface
      companion["Local CLI companion<br/>one-job + session watch live<br/>Codex/Claude generate + independent judge"]:::wip
    end

    %% ---- backend ----
    subgraph BE["Backend"]
      auth["Google Identity Services<br/>Cloud Run token verification"]:::be
      api["Cloud Run API<br/>(SheetsBackend ÃÂ· Node)<br/>asia-east2 ÃÂ· live"]:::be
      drive[("Google Drive<br/>Asset Library<br/>incoming ÃÂ· library")]:::store
      sheets[("Google Sheets<br/>Customers ÃÂ· Questions ÃÂ· Results<br/>QuestionReviewEvaluations<br/>GenerationPrompts ÃÂ· GenerationInputPackages<br/>GenerationRecords")]:::store
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
    app -.->|"one-job pairing ÃÂ· session token display"| companion
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
    { date: "2026-08-03", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Seven visual design fixtures injected into the demo question bank (fixture_vq01–07, all seven archetypes, source ai_generated, dev/demo-only behind an includeFixtures flag — production Sheets untouched per D11; Natalie pre-agreed direct merge). Harness batch questions converted via a new scene-spec→SVG renderer to static SVGs under public/img/fixtures; q02 repaired. Frontend 617/617 green, governed 40-question bank byte-identical, live-verified in demo practice (P6 run serves pure fixtures). Purpose: Max s ç­é¡ UI revamp now has é¡å + é¸é å + åææ··å cases to design against. Also today: full-archetype UAT coverage ruled (Dixon owns the blueprint), harness+exchange mailbox live with Dixon (dixontsetk) invited, teacher-authoring direction agreed (docs-in/agent-ingest, post-UAT)." },
    { date: "2026-08-03", who: "Natalie + Claude (Opus 5)", project: "tpc-online-platform",
      summary: "PRACTICE SETUP/BRIEFING UX + MULTI-SELECT TOPICS \u2014 LIVE. Two releases from a five-platform UX comparison (Kahoot, Fun Expected Maths, TestGorilla, SHL, Pymetrics), both frontend-only with no backend action, no audio and no child-visible ranking. (1) PR #88: Setup now presents ONE start action \u2014 a run card carrying the recommended configuration until the learner changes it \u2014 with count/difficulty/timer/feedback moved into a collapsed More options, topic cards carrying a Report-consistent accuracy meter suppressed below the minimum-evidence bar, and fixed mock sets moved into their own section because a set run freezes membership/order/feedback/timing so the practice controls never applied to it; the official scheduled test stays off the screen entirely as the WS7-14 Coming Soon item. Briefing replaced four stat tiles with three fact rows (how many, total time up front, when answers appear) keeping only the rules those rows do not state. A regression was caught pre-deploy: Result's \u7df4\u7fd2\u5f31\u9805 sends the weakest topic to Setup, and the new run card would have discarded it \u2014 nothing covered that path, PracticeSetup.test.jsx now does. (2) PR #100: \u7bc4\u7587 selection is multi-select with \u6df7\u5408 exclusive (choosing it clears every topic, choosing a topic clears it, turning off the last topic falls back to Mixed), and a recommendation may now span up to 3 topics that share one reason and can each serve a full run. Sessions.refId is unchanged for mixed and single-topic runs; only a genuine multi-topic subset uses the joined topicA|topicB form, and draft settings keys stay byte-identical for the existing cases so no two subsets share a draft. The recommendation algorithm (90-day window, judged thresholds, weak/refresh/coverage/maintenance order, viability and topic-set rules) is recorded in the existing ARCHITECTURE \u00a75 Practice section per Natalie, not a new file. Merged main efa091b; Pages 457aa9b serving index-Dpcg-dX4.js / index-WO_5325W.css, markers verified live. 676/676 frontend tests across 31 files + 100-module build. WS6.2 is Max's lane \u2014 merged on Natalie's explicit direction, formal review still pending." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION PERFORMANCE (SOURCE ONLY): Natalie chose latest-version-only aggregates. WS6.1-28 now records deterministic, uid-free per-question/version start evidence, stamps the exact graded questionVersion on Attempts, and projects only the current version's exposure, submitted, correct and derived accuracy values onto Questions; approval resets the projection and late older-version submissions are excluded. Question Bank shows sortable Exposure and Accuracy with correct/submitted plus a low-sample label. An additive, idempotent Questions/Results migration and templates are ready. Local gates pass: backend 567/567, lint 0 errors (15 existing warnings), frontend 657/657, and 100-module build. No workbook migration, deployment, production write or live smoke was performed." },
    { date: "2026-08-03", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SETTINGS LAYOUT FIX: Natalie flagged the redesigned Settings page as still ugly, and at desktop width she was right â the page held no measure, so rows stretched the full viewport stage with each label a screen-width from its value and hairlines running edge to edge; it read as a spreadsheet. Settings now keeps a 620px column and each group (åäººè³æ/åå¥½è¨­å®/å¸³æ¶) sits in a bordered card matching Home's container language. Root cause worth remembering: the .app--shell/.app--fullscreen rules reset .screen to max-width:none later in the cascade, which silently defeated the first max-width attempt â per-screen measures must be restated after those blocks. Also fixed the settings language pill clipping its selected option's corners. 655/655 tests; verified at 1280 and 375. PR #96 merged as e1a18d2, deployed as Pages 6a3ed01; docs via PR #97." },
    { date: "2026-08-03", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "QUESTION BANK SET VISIBILITY (SOURCE ONLY): the Sets list previously showed only each set's question count, so admins could not inspect which questions were selectedâespecially for published/read-only sets. Candidate 7d93cd1, rebased on private main e1a18d2 after PR #96, adds a collapsible View questions control to every set row and shows all members in saved order with question text, domain/topic, lifecycle status, version and ineligibility warnings. Verification passed 656/656 frontend tests and the 100-module build. Nothing was pushed, merged or deployed; Pages remains 1feca6f from frontend source dc3a30d, and any publication must be a separate release." },
    { date: "2026-08-03", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "PROFILE LOCK + SETTINGS REDESIGN: students can no longer change å¹´ç´ or å°å after sign-up, with NO self-correction path â an admin corrects mistakes through the ç¨æ¶ console. The backend is the authority: upsertUser rejects a changed yearLevel/region on a non-admin row (level_locked/region_locked), while unchanged resubmits still pass, a blank legacy field may be filled once, and admin rows stay editable. Cloud Run tpc-api-profilelock0803 is live at 100% traffic (ping 200, unauthenticated upsert rejected, zero errors after cutover). Settings was also rebuilt as an identity card over åäººè³æ/åå¥½è¨­å®/å¸³æ¶ row groups â every row reads label â value â affordance, editable rows carry æ´æ¹ and locked rows a lock glyph (refs TestGorilla/SHL grouped panes, Kahoot identity header). Backend 552/552, frontend 623/623. PR #82 (lock) and PR #85 (redesign) merged; Pages d264a32 from source 25af7fe." },
    { date: "2026-08-03", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "RESULT SUMMARY REDESIGN: the post-practice result page leads with celebration instead of a raw percentage (Natalie's UX direction, refs Kahoot/Pymetrics energy + TestGorilla clarity). Live now: stars + å®æäºï¼ + an accuracy-tiered encouragement line, a fraction ring showing ç­å°é¡æ¸ Xï¼Y in question counts (replacing weighted å¾å points and the % bigstat), one ç¨æ caption, and a labelled action row \u2014 åç© (primary), ç·´ç¿å¼±é  naming the weakest topic and pre-selecting it in Practice setup, ä¸»é . Codex's PR #76 review filters (å¨é¨/ç­é¯/ç­å°/å·²æ¨è¨, expand-all-incorrect) are untouched beneath it; expanded review questions now centre their options. Natalie reviewed iterations (card \u2192 flat \u2192 tinted band \u2192 plain stage). PR #75 merged as 1d8da31, deployed as Pages 4910764; 622/622 tests; live bundle marker verified. Docs synced via PR #79." },
    { date: "2026-08-03", who: "Natalie + Codex (GPT-5); Claude output reviewed", project: "tpc-online-platform",
      summary: "AUG 2 WRAP + FINAL AUG 3 CLOSEOUT (published after every other Codex task stopped): no Codex platform source/docs work completed during Aug 2 proper; the delayed closeout then merged safe governance/docs PRs #69/#71/#72 and WS4.2 learner fix PR #73. Live source 38ee384 / Pages 3e2a170 (workflow 30784770689) passed 619/619 + the 97-module build: Result rows reopen the attempted question with submitted/correct answers and explanation, while Result and Briefing fill the viewport. Founder direction leaves exactly 1 dummy 30-question/15-minute mock published for pre-launch use + 7 draft sets (AdminLog log_n6os8jxgt6u4); Home and Practice agree, official Test stays Coming Soon, and launch readiness must replace/unpublish the dummy. Codex synchronized all 24 Markdown files through PR #74/main 5543917 (24 links/0 broken, 176 balanced fences, 351 unique Roadmap definitions) and recorded pending source-only head fe88f41 for edge-to-edge learner tabs + Profile-only language selection, with no PR/merge/deploy claim. PR #70 remains unmerged: Claude/Max produced a useful harness, 7-slot experimental batch and visual-prompt deltas quickly, but release claims still outrun frozen inputs, HTML/CLI isolation, honest agreement and consistent judging evidence; the new automatic sibling-repo git push and external-past-paper rights rules widen the safety/governance gap. Codex supplied the Result gap fix, integration boundary, live verification and adversarial review; Claude supplied rapid factory prototyping and iteration. Six stale no-PR branches remain intentionally unmerged because current main already contains later integrated behavior." },
    { date: "2026-08-03", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Recipe harness B1âB4 built and smoked (PR #70 branch). Validator (closed schema + per-archetype answer recompute), headless gen/judge CLI runners with single-retry and offline guard, blind review.html (judge verdict locked until the human submits; qff1 category chips; verdicts JSON export) and agreement reports with a cross-batch tracker. Real-model smoke batch 3/3 validator pass; simulated review round-trip showed the calibration signal working (judge confidence 70 on approved vs 42 on rejected). Baseline visual generator/judge prompts (draft v0) codify the scene-spec PoC method with an 8-point acceptance bar. Discovered the FD18 prompt snapshots already in-repo â generator snapshot is superseded 31c, so the text lane needs Natalie to run prompts:export for active 23b (Â§8.1). First real batch tonight; Dixon blind-reviews tomorrow morning." },
    { date: "2026-08-01", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Contributor access scope resolved by Max (raised by Natalie 2026-07-31): the 2026-07-03 deep-dive containment proposal is superseded; contributor access follows D10 ownership Ã¢ÂÂ lean and trust-based, no content fences or per-checkpoint approvals, and Dixon is encouraged to own features end-to-end (WS6.3 already his). Two system-level disciplines recorded, applying to everyone including Max: a second-person look on any production publish from feature freeze (Sep 4) through UAT week, and confidentiality via the signed internship contract (NDA + IP assignment). Existing gates unchanged (superadmin-only generation, human approval, WS5.2-04 hold, student-data hygiene). Full ruling in the private repo ROADMAP (PR #69); board card closed." },
    { date: "2026-07-31", who: "Max + Claude (Fable 5)", project: "",
      summary: "FOUNDER SPRINT KICKOFF Ã¢ÂÂ Max moved from Team Futura dev onto the platform and set a six-week runway to UAT (Sep 10Ã¢ÂÂ13, K2/K3 deep, not eight levels thin). Three decisions minted: D10 ownership re-cut (Max = learner UI/UX + factories + generation ops, converging with Natalie's same-day WS5.2/WS5.3/WS6.2 reassignment and adding Dixon = WS6.3 reports + question review, with K-level developmental fit routed to Max's OT background and pyramid-site paused), D11 offline recipe-harness mandate (internal-only, never imports into production, recipe-only deliverable, daily two-checkpoint batch cadence, GO/NO-GO Aug 21Ã¢ÂÂ23; founder start ruled without a sync Ã¢ÂÂ Natalie reviews async), and D12 infra stays on Sheets+Drive through UAT (migration decision ~Oct on real load data; factory SVGs ship inline in the question row). Enabling work landed same-day: RECIPE_HARNESS_SPEC.md ACTIVE on platform branch docs/offline-recipe-harness-spec with a working scene-specÃ¢ÂÂSVG PoC (7 archetypes from K2 counting to P6 composite-area/angles/chart-average Ã¢ÂÂ the deterministic-renderer design lets the existing text judge evaluate visual questions by judging the spec, so no vision judge is needed); platform-doc factory decisions renamed to FD10Ã¢ÂÂFD35 (formerly D-numbered 10Ã¢ÂÂ35) so bare D# tokens resolve to this ledger; a six-week delivery plan published to the team. Scope cuts confirmed: user mailbox hidden in favour of static announcements; narration is TTS-only on Ã¦ÂÂÃ¥Â­ÂÃ©Â¡Â with an optional narrationScript schema field pending. First text batch fires the night of Aug 3; Dixon blind-reviews all of it Aug 4 morning as the confidence-threshold calibration." },
    { date: "2026-07-31", who: "Max + Claude (Opus 5)", project: "",
      summary: "D9 attribution amended for a third operator and a third device. Dixon joined as intern in 2026-07, initiated and acceptance-directed the live learner-language release (platform d97d492, Pages workflow 30619332923) from inside Natalie's /Users/hkycaa account Ã¢ÂÂ so the old two-device map attributed his work to Natalie. D9 now maps origin Ã¢ÂÂ person as a table (dev Mac ktf@Hais-MacBook-Pro + Max's other computer = Max; /Users/hkycaa = Natalie; Dixon-initiated or acceptance-directed work = Dixon regardless of the account it originates in), with the person, not the directory, as the unit. Max ruled that every change originating from the dev Mac is signed Max: that account's global Git identity is now Max <info@pyramidchallenge.org>, so blame is authoritative there from today forward, while Natalie and Dixon still both commit as HKYCAA and their split rests on this ledger. Registered dixon in owners. Synced the D9 restatements in business/README.md and the platform repo's CLAUDE.md. Also fixed the access gap behind all of this: tpc-online-platform-admin is private under the thepyramidchallenge personal account and HKYCAA was not a collaborator, so git pull on the dev Mac failed with 'Repository not found' and the local copy had sat 4 weeks stale at July 3; HKYCAA now holds write, pull verified." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "NAVIGATION + LAYOUT: three student/admin UX fixes shipped as one release (PR #66, Pages a0ea79f). (1) The header back arrow now returns to the page the user actually came from via a screen-history stack, falling back to Home only when there is no history; back-hops are never re-recorded so repeated back walks the trail. (2) The pre-practice briefing is a flat full-page layout \u2014 the branch version was reconciled in favour of the parallel session's divider-based flat design already on main. (3) The admin Questions/Assets/Users/Log consoles now fill the whole window edge-to-edge (no grey gutter or rounded card); student screens keep the card. Merged tree 617/617 tests; live bundle marker verified. Docs synced via PR #67." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN FINAL FORM: Natalie reviewed the card iteration and chose a full-panel login instead Ã¢ÂÂ brand, Google button and hint clustered at the vertical centre, no card, and the Ã¤Â¸Â­Ã¦ÂÂ|English pills removed from the sign-in screen (language switching now starts at Settings or in-quiz; pre-auth pages render default zh-HK). The GIS skeleton pill and 8s load-timeout retry from the card iteration stay. PR #60 merged as b3813b7 and deployed as Pages dd98ac2 (also carries the lazy Question Bank Sets subtab); merged tree 608/608 tests; new bundle verified live. Handoff release boundary corrected via PR #63 after a doc race with the parallel session." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN POLISH: the login gate is now a centred card on the surface backdrop (language pills, brand, Google button and hint grouped; scoped so the account-setup form keeps its full panel), a pulsing skeleton pill holds the Google button slot while the GIS script loads (the button used to appear seconds late with nothing in its place), and a hung GIS load now surfaces the retry UI after 8s instead of failing silently. PR #57 merged as 5b0564a and deployed as Pages d2072f8; 607/607 frontend tests; live signin-card CSS marker verified. Docs synced via PR #59." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "WS4.2 COMPLETE: PR #52 merged the agreed fixed-set behavior as b91684e. Production gained the QuestionSets publication seal and exact DraftSessions question snapshot; Cloud Run tpc-api-ws42align0731 serves 100% with zero error logs through smoke. A superadmin published only the 30-question K2 smoke set, confirmed the 15-minute fixed-order briefing, reloaded and resumed the same wall-clock attempt, submitted all 30, verified the compact integrity record (telemetry present; one recovery), then unpublished it. Sheets read-back found 30 Attempts, no residual draft, successful publish/unpublish logs, all 8 sets draft and a blank final seal; learners again see the bilingual Coming Soon card. Public Pages 14b2494 now serves merged main e3a5d7f through workflow 30627860310, retaining both WS4.2 and Claude's glyph alignment. WS4.2-02/03 are closed; official content and WS5.1-04 QuestionSets remain next." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UI POLISH RELEASE: two frontend changes shipped to Pages. (1) Boot loader: the static \u25b2 splash became the logo mark assembling itself layer by layer (pure CSS/SVG, reduced-motion safe, also on the admin lazy-chunk fallback). (2) In-progress markers + glyph alignment (PR #50): every control whose function is deferred, Phase 2/3 or held \u2014 Profile upgrade, generator Treasure tab/button, Batch upload, Class A asset help, reserved question types \u2014 now carries a monochrome hourglass icon, and all interactive-control glyphs (back chevrons, list chevrons, Report clock, Result check/cross, bookmark flag, notification dots, quiz stepper, admin plus/spark/arrow/grid/dots) were unified on the shared monochrome Icon set with 12 new shapes; \u2039\u203a stripped from i18n strings. Combined tree verified 607/607 frontend tests + build; deployed as Pages cbb632f from merge 7a3a07d on top of the WS4.2 release; hourglass marker confirmed in the live bundle. Docs synced via PR #53." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "RECOVERY ALIGNMENT: closed the user-visible five-minute UI / 12-minute deployed-backend mismatch without shipping the held language-preference backend. Minimal release 62ae763 applies only the already-merged dc1ea75 timeout/test patch to exact diagnostics source 826c180; backend 518/518 and lint 0 errors passed. Cloud Run tpc-api-takeover5m0731 was staged at 0%, became Ready, passed tagged health, retained byte-identical non-image runtime configuration, then moved to 100%; canonical health passed and post-cutover error/5xx count was zero. No Sheets migration/read/write, generation action, frontend deploy, Customers migration or language-preference action occurred. Platform PR #49 merged the synchronized release boundary into main 8459c82. WS5.2-01j6 remains active only for a future controlled five-minute stale-attempt/takeover and late-result proof using suitable existing production state; do not create generation work solely for the smoke." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS6.2 UI review reassigned from Natalie to Max, matching his UI-in-general scope. The combined \"WS6.1 + WS6.2 pilot-gating polish\" card is split in two, since the halves now have different owners: WS6.1 launch-critical polish stays with Natalie, WS6.2 becomes its own Max-owned lane (15 tasks, 5 held until after the pilot). WS6.2-07 still confirms UID/display-field scope with Max before its review. Platform docs record the same gate on the WS6.2 section (157a146), mirroring how WS6.3 names its lane owner. That commit also corrected docs/README.md, which still claimed the diagnostics source was not in main Ã¢ÂÂ merging it made that false, and only the public Admin UI is still missing." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "REPORT TAB: recorded the WS6.3 lane now that its plan landed (platform 8600c57) Ã¢ÂÂ six frontend-only tasks on the existing WS3.1-06 Report screen: extract aggregation into a tested reportStats.js, accuracy trend, topic/domain breakdown with a 7d/30d/all filter, local past-attempt review in the History drill-in, minimum-data guards, and test coverage. Dixon (intern) is implementing; Natalie chose to keep the lane owned by Max and Natalie rather than add a new owner key, so accountability stays with the principals and Dixon is named in the card note. It is a parallel lane and does not displace the shadow feedback proof. Exclusions restated so they are not quietly absorbed later: cross-device completeness stays WS8-04, and WS8-01, WS8-10, WS8-12 and WS9-00 remain unassigned. Platform side landed earlier today: the AGENT_HANDOFF.md Ã¢ÂÂ docs/ move completed as a tracked rename with every reference repointed, FULL_REVIEW_RISKS.md was deleted with its one still-open item FR-07 (static SVG validation) migrated into ROADMAP under WS5.3-08 plus a short operational gate in the handoff, and the WS6.3 queue entry followed once the move was committed." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "DASHBOARD CLEANUP: consolidated the duplicate bounded-content and QuestionSets cards into one shared Now card. Max owns bounded WS5.2 generation; Natalie owns explicit human approval and WS5.1-04 exact-version QuestionSets. The cleanup changes no product scope: calibration/smoke rows remain excluded from official content, and Treasure remains held under WS5.2-04. The ownership history now says Max inherited no open WS5.2-01m build item rather than overstating all WS5.2 work as closed." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "GOVERNANCE: raised an open question for Max on contributor access scope, and assigned the existing report tab (WS3.1-06, Report.jsx Ã¢ÂÂ data visualization plus past-attempt review) to Dixon, TPC's intern; WS8-01 and WS8-04 are explicitly excluded. Natalie's position is that the intern will also join wider platform development and will therefore have access to most sensitive information; she asked that Max be flagged rather than that access be restricted unilaterally. Nothing is settled Ã¢ÂÂ this awaits Max. The detail is written up in the PRIVATE platform repo (docs/ROADMAP.md) and deliberately kept out of the Business Space, because tpc-dashboard is a public repository and the specifics would be world-readable; only this neutral pointer is public. Context for the decision: the 2026-07-03 deep-dive ÃÂ§6 intern-containment proposal was never ratified Ã¢ÂÂ its draft ledger entries were never adopted, and the decision, hypothesis and experiment ledgers still stop at D9, H6 and E3 Ã¢ÂÂ while practice has already moved past it since Dixon directed the live learner-language release. The dashboard roadmap/board entries for Dixon's report work are deliberately NOT added yet Ã¢ÂÂ the '[Check] Report tab requirements and roadmap' session is still drafting them, and Natalie chose to record ownership and the new task IDs together in one pass once that plan lands." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS5.2 (question factory) and WS5.3 (asset factory) are reassigned in full from Natalie to Max, effective today. Natalie's closing position on WS5.2 is the 2026-07-24 01c7 GO for the bounded official seed-pack lane Ã¢ÂÂ 9 of 10 full-review risks cleared (all four P1s), with FR-07's stricter static-SVG parser hardening deferred to WS5.3-08. WS5.2-01m closed earlier the same day in the parallel Codex session, so Max inherits no open WS5.2-01m build item; WS5.2-04 (Treasure curation/comparison/activation) transfers as held work. Dashboard changes: WS5.2/WS5.3 roadmap rows lifted out of Natalie's Phase-1 group into a new Max-owned 'Question & asset factories' group, carrying the held recurring-factories and WS5.2-04 rows; Dixon's learner zh-HK/en UI row stays in Natalie's Phase-1 group since it is not factory work; the Now card was rebased onto Codex's replacement and notes that generation is Max's while approval and WS5.1-04 onward stay Natalie's. Unchanged and deliberately so: GO authorizes the bounded lane only Ã¢ÂÂ it does not approve any candidate, publish answer guides, enable auto-approval, or start recurring generation, and human approval remains mandatory." },
    { date: "2026-07-31", who: "Dixon (initiator) + Codex", project: "tpc-online-platform",
      summary: "Dixon initiated and acceptance-directed the learner zh-HK/en UI release. Private main is 6ed5105; public Pages is f26f5f7 via successful workflow 30619332923. Live sign-in and Settings language selectors remain, while the authenticated learner-header selector was removed at Dixon's follow-up. Frontend 583/583 and the 94-module build passed. No language Cloud Run backend or production Customers Sheet migration was deployed." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UI polish: the boot splash and admin lazy-chunk fallback now show an animated pyramid loader Ã¢ÂÂ the logo mark assembling itself course by course (pure CSS/SVG, 0.2s fade-in delay so fast boots never flash it, reduced-motion users get the complete static mark). Committed as 66e2f20 on codex/ws5-2-01m-feedback-loop, kept strictly separate from the parallel uncommitted WS5.2-01m work; deploy-gate tests 549/549, published via deploy.sh as Pages bf1907e (workflow 30611377059) and live-verified on the public app." },
    { date: "2026-07-30", who: "Natalie + Codex (GPT-5); Claude evidence reviewed", project: "tpc-online-platform",
      summary: "JULY 30 WRAP Ã¢ÂÂ UI: Home dashboard typography/grid and the accuracy trend were iterated into an adaptive, runtime-built, pointer/keyboard-accessible five-point chart; the watch-pairing panel gained independent Codex/Claude CLI-aware model presets and exact custom IDs, all published through reviewed Pages releases. RELIABILITY: a real repeated-sign-in/Home fan-out caused 62 Sheets reads/minute and eight quota rejections; Codex traced it to duplicate GIS/auth work plus separate hydration calls, shipped one guarded getHomeBootstrap with a five-tab Results batchGet and one Questions read, and verified one fresh sign-in at six total Sheets reads, all attempt-1/200, followed by a five-minute window with zero reads, retries, quota errors, API errors, 5xx, or companion polling. WS5.2/GOVERNANCE: the obsolete evaluator path was physically removed; Phase-1 production sizing, recurring generation and auto-approval boundaries were closed or routed to later evidence gates; ROADMAP workstream summaries were restored; the expanded model picker landed on main 96007e6. HUMANÃ¢ÂÂAI REVIEW: exact source 2c71644 is live on Cloud Run tpc-api-ws5201m0730 at 100% and Pages df57e43; QuestionReviewEvaluations grew from 18 to 25 columns, and frozen human revisions, manual companion re-judging, fingerprint-bound approval, immutable evidence history and failure retention passed backend 497/497, frontend 546/546, migration 4/4, build and lint. The source remains pushed but unmerged on codex/ws5-2-01m-feedback-loop; 01m8a is honestly partial until one real reviseÃ¢ÂÂrejudgeÃ¢ÂÂdecide round is read back. DOCS: all 20 tracked Markdown files were reconciled and pushed at 9ea066d; links/fences, 65 API actions, 326 unique roadmap IDs and all 18 calculated progress summaries pass. CRITICAL ASSESSMENT: Codex delivered substantial, well-tested product/release progress and responded well to the quota incident, but deployment from an unmerged branch and the still-unrun acceptance journey are material integration risks; daily UI/release churn also increased operational surface. No independently attributable July 30 Claude source/docs commit or active Claude worktree was found, so today does not support a symmetric agent-output comparison. Claude remains the configured independent-judge lane and its earlier co-authored 8c40a82 staging/recovery/metrics foundation is still embedded, but July 30's attributable implementation, incident response, release and documentation work was Codex-led." },
    { date: "2026-07-27", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Post-closure daily wrap for July 25Ã¢ÂÂ26, recorded after all meaningful platform development tasks became idle. The sole source change after the prior July 24 dashboard wrap was the final consolidation at 11d59c7; no further commit or deployment evidence landed on July 25Ã¢ÂÂ26. tpc-online-platform is clean and aligned with origin/main, and all 20 tracked Markdown files remain synchronized, so no platform documentation edit was necessary. Claude's co-authored 8c40a82 contribution is fully contained in main and supplied a strong WS5.2-01j foundationÃ¢ÂÂpre-judge staging, judge-only recovery, one-replacement budgets, honest batch aggregates and per-attempt metricsÃ¢ÂÂwhile Codex then hardened, tested, migrated, deployed and documented the wider release. Critical verdict: WS5.2 is operationally closed only for the bounded official seed-pack lane, not for recurring or autonomous generation; explicit human approval remains mandatory. The next product constraint is approved content inventory and disjoint QuestionSets, while FR-07 SVG allowlisting, FR-08 production asset evidence/snapshots and FR-09 frontend deployment remain follow-ups." },
    { date: "2026-07-24", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Final all-Codex July 24 wrap, recorded only after every other task became idle. The blinded 24-candidate comparison was accepted and selected direct compiled prompting; the live factory now has immutable prompt/input inspection, grouped time/token/cost metrics, Phase-1 answer guides, retained approval evidence, a daily purge, and the typed 87-row GenerationRecords ledger, with legacy split tabs deleted. The full 10-risk gate and all seven 01j recovery cases closed. Literal production proofs passed for judge-only retry, promotion Retry import plus payload-clearing Discard, 12-minute stale release/late-result rejection, and partial-family Finish; the seven-day elapsed wait was explicitly waived with automated expiry/non-restoration coverage, making WS5.2-01c7 GO for the bounded official seed-pack lane without waiving human approval. A real transient Sheets-quota burst was hardened by changing metrics to one three-range batchGet and failing quota responses immediately with Retry-After; the final retry fix removed a stale server-evaluator dependency, and the post-fix window was clean. Current production is Cloud Run tpc-api-ws52retry at 100% from backend e3d050d and Pages c5bbc84 from UI source 36ffd03; Home, Users/access, Log, Question Bank/Generator/Review and Asset Library improvements are live. Final validation includes backend 481/481, frontend 528/528, Vite build, zero audit findings, and clean quota telemetry. All 20 platform Markdown files were synchronized and pushed as docs tip 15183c2, with 12/12 local links and all 315 ROADMAP definitions intact. Next: bounded official review rows with saved judge evidence and explicit human approval, then WS5.1-04 QuestionSets." },
    { date: "2026-07-24", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap across all July 23 platform tasks, recorded after every other Codex task stopped. WS4.3-25 session telemetry was migrated and released: Cloud Run tpc-api-00092-xp6 serves 100%, Pages 83dcc63 came from source 73b2e05, 101 fabricated pre-cutoff zero attempt times became null, and authenticated timed/untimed, save/resume, reload, History, denominator, timing and topic-label smokes passed. Source work fixed awaited audit logging and same-second log pagination; pinned exact generator/judge CLI/model roles; added deterministic prompt export manifests; added hash-checked, chunked 30-day exact input retention plus dry-run-first purge; and integrated backend-authoritative prompts, Phase-1 answer guides, pre-judge staging, judge-only recovery, one-replacement budgets, honest batch aggregates and per-attempt timing metrics. A private non-promoting route rehearsal produced 24/24 structurally valid, corrected-judge-gate-passing candidates awaiting blinded human review, but it used frozen local inputs and does not close 01c7. The full review registered 10 open P1/P2 release risks. After all Codex and Claude rooms were idle for 10 minutes, the shared tree was reconciled, documentation synced, verified at backend 433/433 + frontend 506/506 + build/lint/audits green, and pushed clean as fe8904d. No 01k/01l/01j production deployment occurred; clear the risk gate, run the four migrations, finish UI/purge scheduling/live smokes, then run the official backend-managed comparison. The scheduled sync later confirmed dashboard, pyramid-site and tpc-online-platform current on main." },
    { date: "2026-07-23", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Completed WS5.2 post-01c7 Step 1 prompt freeze as platform commit 60f76a1. Candidate generation now uses the same private brief-only instructions for Codex and Claude, with no Claude generator.md overlay; requires natural localized character-name pairs such as Ã§Â¾ÂÃ§Â¾Â/Mia; requires teaching explanations as separate Traditional Chinese and equivalent English paragraphs; and treats same-seed diversity as an encouraged quality goal rather than an integrity gate or mandatory dedupe. The local scaffold policy is QF-2026-07-23, focused scaffold/preflight coverage passes 11/11, the full backend suite previously passed 336/336 with lint at 0 errors, and no comparison batch, Question row, promotion or deployment was started. Next: scaffold the blinded scored re-run for the same four seeds." },
    { date: "2026-07-23", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap recorded after every other July 23 task stopped. The only completed Codex work today was the scheduled repository sync: dashboard, pyramid-site and tpc-online-platform were all already clean and current on main, with the platform still at f73d841. No platform source, production, roadmap, focus or board state changed, so the existing 01c7 NO-GO / iterate priorities remain current." },
    { date: "2026-07-22", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap for all July 21 tasks, recorded after every other Codex task stopped. The WS5.2 calibration finished: 01c6 yielded 8/8 would-approve candidates (4 as-is, 4 after minor edits), the controlled 2ÃÂ2 A/B showed generator.md was quality-neutral within each model, Natalie set 01c7 to NO-GO / iterate, and the preferred bootstrap configuration is Codex + brief-only; freeze the prompt fixes and run a blinded scored Codex-vs-Claude comparison before any official 60-per-level generation. The live question-generation lane was cut over to GenerationJobs/GenerationSlots with GenerationRuns retained as rollback, gained complete saved independent review plus generation-time sibling-set handling, bounded transient/gate-failure recovery and exact-attempt release, and moved companion discovery/termination to a revocable three-hour session. The final read-efficiency release batches control-table reads, reuses locked snapshots and polls foreground clients every 15 seconds, reducing one-job claim from 9 to 2 reads and submit/promotion from 21 to 5; PR #6 merged as f73d841, Cloud Run tpc-api-00090-ncz serves 100%, Pages 65109e5 is live, and backend 281/281 plus frontend 481/481 and the production build pass. Home bootstrap, production-status tooling and protected source delivery were also improved, while production automation remains intentionally unconfigured. The July 22 daily sync then confirmed dashboard, pyramid-site and tpc-online-platform clean and current on main." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "A real post-recovery companion_judge_failed issue established the bounded transient retry policy. Companion source 37974f0 now retries generator or independent-judge CLI/structured-output failure exactly once after one second in a fresh process, retaining the same claimed slot attempt and reusing the same candidate for judge retry. Valid completed gate failures are never auto-retried; if both phase attempts fail, revision 00087's exact-attempt release still moves the slot to needs_regeneration without a Question row. Committed source passes 276/276; the founder-Mac combined full-sibling/compatibility source passes 279/279; lint 0 errors. No Cloud Run redeploy was required." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed the recurring stuck-generating failure in the local AI-question companion. Commit df0a19d adds an attempt-bound, idempotent backend failure report: generator, independent-judge, submit and normal SIGINT/SIGTERM failures release only the exact still-generating attempt to needs_regeneration; duplicate, stale and post-success reports cannot overwrite authoritative state, and no model/error text is sent. Cloud Run tpc-api-00087-qzd is live at 100% with auth/fingerprint/rate-limit controls preserved; ping and invalid-capability route smokes passed. The founder-Mac companion also retains the older-backend review-shape compatibility retry. Committed suite 274/274 and combined local suite 277/277 pass, lint 0 errors. Hard power/network outages retain the 12-minute stale-attempt recovery safety net." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Reduced signed-in Home startup to one authenticated getHomeBootstrap request backed by a single Results workbook batchGet for sessions, bookmarks, notifications and drafts; Attempts are no longer loaded until history is requested. Established deployed infrastructure plus scripts/production-status.py as machine truth and AGENT_HANDOFF.md as the one human operational context, removing volatile revision/test-count duplication and correcting the production ledger description. Added path-aware source CI and a protected, exact-SHA, manually dispatched backend-first production promotion workflow with candidate health/config checks, explicit traffic promotion and verified public Pages publication. Source and docs are complete; no production deployment was made, and one-time GitHub production-environment, WIF and public-repo-token activation remains explicit." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Resolved the repeated genjob_d586cae5 slot-1 submit failure after attempt 2 identified attestation_review_invalid:evaluation. The independent Claude review was not the defect: production REQUIRE_EVALUATION_FINGERPRINT=true had been applied to pre-promotion candidate validation even though no live Question rowÃ¢ÂÂand therefore no content fingerprintÃ¢ÂÂexists at that stage. Commit 4b69f3b exempts only this advisory pre-promotion check; candidate/prompt hashes still bind the review, while final human approval retains exact-content fingerprint enforcement. Production-flag companion/rejection/final-approval coverage and the complete backend suite pass 272/272; lint remains 0 errors. Cloud Run tpc-api-00086-m8r is Ready and serves 100% through LATEST with a new image digest; live action-router health passed. Read-only Sheet verification shows attempt 2 left the same slot generating with blank reserved/question IDs and no payload/hash, so Natalie should retry the same job/slot as attempt 3 rather than create a new job." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Investigated the first post-rollout full-review submit: genjob_d586cae5 slot 1 generated with Codex and judged with Claude, then failed closed as attestation_review_invalid. No candidate, payload or Question row was retained; the slot remains recoverable at generating/attempt 1. There were exactly two stable k2_q12 siblings and no concurrent promotion, ruling out live comparison-set drift. The backend had collapsed shape, comparison-set, evaluation and rationale failures into one opaque code, so d95899f now returns a safe stage suffix without logging question content (272/272, lint 0 errors). Deployment uncovered a second operational defect: Ready revisions 83Ã¢ÂÂ85 existed but traffic was explicitly pinned to 00082. Traffic is repaired to 100% LATEST on tpc-api-00085-m5l, so future deploys route normally. Next action: retry the same slot; success completes the saved-review smoke, while any failure now identifies its exact validation stage." },
  ],
};
