/* =============================================================================
 * TPC WORKSPACE DASHBOARD â DATA
 * -----------------------------------------------------------------------------
 * THIS is the file you (and agents) edit. The dashboard (index.html) just
 * renders whatever is here. You almost never need to touch the HTML.
 *
 * HOW TO UPDATE (see AGENTS.md for the full protocol):
 *   1. meta.updated / meta.updatedBy  â stamp who touched it & when
 *   2. focus                          â the one thing that matters most today
 *   3. projects[].status / health     â keep each project's state honest
 *   4. board (now / next / blocked)   â move cards as work flows
 *   5. roadmap[].items[].state        â flip todo â active â done
 *   6. systemMap                      â ONLY when the architecture changes
 *   7. changelog                      â prepend a one-line entry every session
 *
 * Allowed values:
 *   status / health : "stable" | "active" | "blocked" | "planned"
 *   roadmap state   : "done"   | "active" | "todo"    | "hold"
 * ========================================================================== */

window.TPC_DASHBOARD = {

  /* --- header / standup ------------------------------------------------- */
  meta: {
    updated:   "2026-08-03",
    updatedBy: "Natalie + Codex (GPT-5)",
    note:      "Live at thepyramidchallenge.github.io/tpc-dashboard Â· light theme. Â· Business Space (the *why*): business/ (CONSTITUTION + decisions/hypotheses/experiments). Â· Reports (æ·±åº¦å ±å): reports/ â periodic commissioned deep-dives.",
  },

  /* --- reports (deep-dive reports tab) -----------------------------------
   * commissioned by Max periodic deep-dive reports. Registry only â the
   * content lives in reports/<id>.md, rendered by the Reports tab (same
   * mechanism as the Business space). PREPEND newest first. To add a report:
   * write reports/<id>.md, prepend an entry here, stamp meta.updated.
   * --------------------------------------------------------------------- */
  reports: [
    { id:    "2026-07-03-visual-question-factory",
      date:  "2026-07-03",
      who:   "Claude (Fable 5)",
      title: "Deep-dive #2 â Visual Question Factory: verdict, corrections & parallel-build plan",
      zh:    "æ·±åº¦æª¢è¨ #2 Â· åºé¡å·¥å» ",
      summary: "4-probe review of the factory-first pivot: architecture proven live (working scene-specâSVG micro-build embedded), 25yr AIG science backs it, niche genuinely open â but 3 archetypes cover only 20-28% of real papers, the 6-12-month claim is unfalsifiable, and the factory must feed a dated warm E1, not replace it. Answers all 10 questions from Max + week-1 plan, kill criteria, intern containment, parallel-track design, plus draft ledger entries (2 decisions, 1 hypothesis, 1 experiment, 1 open question â next free numbers) awaiting discussion with Max." },
    { id:    "2026-07-03-strategy-deep-dive",
      date:  "2026-07-03",
      who:   "Claude (Fable 5)",
      title: "Strategy deep-dive #1 â the business, scaling, what breaks first",
      zh:    "æ·±åº¦æª¢è¨ #1",
      summary: "5-agent review (business plan / platform engineering / GTM-ops + 2 red-team skeptics) â evidence audit, core insight (the bottleneck moved to content/trust/E1-date), market reality check, 3/6/12-month moves, scale flywheel, what-breaks-first ranking, and the cheap experiments that settle each objection." },
  ],

  /* --- people / ownership åå·¥ ------------------------------------------
   * Who owns what. `owner` fields elsewhere (projects, roadmap, board) must
   * use one of these keys. Split: Max = pyramid-site + UI in general, plus
   * the WS5.2 question factory and WS5.3 asset factory (reassigned
   * 2026-07-31, after Natalie closed WS5.2 to GO) and the WS6.2 UI review
   * (reassigned the same day);
   * Natalie = the rest of the learning platform (data layer, content,
   * QuestionSets, WS6.1 pilot).
   * --------------------------------------------------------------------- */
  owners: {
    max:     { name: "Max",     zh: "Max",     scope: "Learner UI/UX (WS6.2) Â· question & asset factories (WS5.2 Â· WS5.3) Â· generation ops Â· pyramid-site (paused) / å­¸çç«¯UIãåºé¡åç´ æå·¥å» ãçæçé (D10)", color: "#1f7a96" },
    natalie: { name: "Natalie", zh: "Natalie", scope: "Data layer, integrity, backend, human approval + WS5.1-04 onward, admin platform (excl. factories) / è³æå±¤ãå¾ç«¯ãå¯©æ¹ãå­¸ç¿å¹³å° (D10)", color: "#6d4fd6" },
    dixon:   { name: "Dixon",   zh: "Dixon",   scope: "Intern (joined 2026-07) â WS6.3 reports + question review / å¯¦ç¿çï¼å ±åé ãå¯©é¡ (D10)", color: "#b06a1f" },
    both:    { name: "Max + Natalie", zh: "Max + Natalie", scope: "Shared / å±å", color: "#5a6570" },
  },

  // The single most important thing to know before starting work today.
  focus:
    "Founder sprint to UAT (Sep 10-13, K2/K3 deep): first make the offline harness trustworthy and production-equivalent; no real batch from PR #70 until contract freezing, CLI isolation, review-page escaping and honest judge-human metrics are fixed. Run the K2-self-operable UI design lane in parallel; Treasure activation remains on hold.",

  /* --- projects --------------------------------------------------------- */
  projects: [
    {
      id:    "pyramid-site",
      name:  "pyramid-site",
      owner: "max",
      tag:   "Marketing site (rebuild)",
      role:  "Squarespace-free rebuild of thepyramidchallenge.org â Next.js (App Router) + React + Tailwind.",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/pyramid-site",
      run:   "cd pyramid-site && npm install && npm run dev   # http://localhost:3000",
      next:  "Reach visual parity with live site â deploy (Vercel/Netlify).",
    },
    {
      id:    "tpc-online-platform",
      name:  "tpc-online-platform",
      owner: "natalie",
      tag:   "Learning platform (Phase 1)",
      role:  "Interactive Practice/Test SPA for K2âP6. Backend on Google Sheets behind an adapter (Firestore/Supabase-ready).",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/tpc-online-platform",
      run:   "cd tpc-online-platform/prototype-v0.2 && npm install && npm run dev   # Vite local URL",
      next:  "Public Pages a0ea79f serves application source 40da0f5 (PR #66 navigation + layout release). Keep each bounded-pack AI row at review until explicit approval, then build the official WS5.1-04 exact-version QuestionSets. Cross-device language persistence still requires a separate backend/migration release.",
    },
    {
      id:    "tpc-online-platform-admin",
      name:  "tpc-online-platform-admin",
      owner: "natalie",
      tag:   "Platform â full private repo",
      role:  "FULL private project: React v0.2 frontend + Cloud Run backend + docs + sheets templates. The public tpc-online-platform is the published-frontend mirror of this.",
      status: "active",
      health: "active",
      repo:  "github.com/thepyramidchallenge/tpc-online-platform-admin",
      run:   "cd tpc-online-platform-admin/prototype-v0.2 && npm install && npm run dev   # Vite Â· backend in cloud-run/",
      next:  "Private main is synchronized through 324c34d. Cloud Run tpc-api-ws42align0731 serves 100% from b91684e; public Pages serves application source 40da0f5 as Pages a0ea79f. The WS4.2 migrations and publish/run/reload/submit/unpublish smoke passed. Next: official WS5.1-04 QuestionSets after bounded content approval; the account-language backend and Customers migration remain undeployed.",
    },
    {
      id:    "entrance-qr-scan",
      name:  "entrance-qr-scan",
      owner: "both",
      tag:   "Event ops â staff QR scanner",
      role:  "Mobile-friendly QR scanner for staff check-in. GitHub Pages frontend + Google Apps Script backend writing scan/manual records to Sheets.",
      status: "stable",
      health: "stable",
      repo:  "github.com/thepyramidchallenge/entrance-qr-scan",
      run:   "open entrance-qr-scan/index.html   # frontend/ assets Â· backend = Apps Script (clasp)",
      next:  "In use for event check-in. (Added during migration sync â adjust owner/status as needed.)",
    },
    {
      id:    "mainpage",
      name:  "mainpage",
      owner: "max",
      tag:   "Design assets (reference)",
      role:  "Legacy Squarespace design folder. Source of brand/identity/hero assets. Read-only; being absorbed into pyramid-site.",
      status: "stable",
      health: "stable",
      repo:  "â not versioned (intentional) â",
      run:   "â design source, no app â",
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
      repo:  "â local / offline-only (no remote) â",
      run:   "open dashboard/index.html",
      next:  "Keep this dashboard current as the daily source of truth.",
    },
  ],

  /* --- now / next / blocked board --------------------------------------
   * Each card: { title, project, note }. project must match a projects[].id
   * (or "" for cross-cutting). Keep ~3â6 cards per column; archive the rest
   * into the changelog when done.
   * --------------------------------------------------------------------- */
  board: {
    now: [
      { title: "Bounded official content â exact-version QuestionSets", project: "tpc-online-platform", owner: "both", note: "Shared handoff: Max owns bounded WS5.2 generation and keeps each candidate at status=review with independent-judge evidence; Natalie owns explicit human approval and WS5.1-04 exact-version QuestionSets. Do not count calibration or smoke rows as official content. Treasure remains held under WS5.2-04." },
      { title: "Learner UI design sprint â ç­é¡ç«é¢ first", project: "tpc-online-platform", owner: "max", note: "K2-self-operable single interface (Funexpected bar): audio/demonstration over reading, big targets, parent shell gated, settings streamlined, 429 kid-friendly retry state. Design freeze Aug 21; feeds the WS6.2 review lane." },
    ],
    next: [
      { title: "Recipe GO/NO-GO â Aug 21â23", project: "tpc-online-platform", owner: "max", note: "Gate (D11): two consecutive 30q holdout validation batches at â¥75â80% Dixon pass + judge agreement good enough to pre-filter â governed-lane intake starts (W4â5, ~15â20 approvals/day toward two disjoint 30-question sets per level). NO-GO cuts scope (single level / smaller pool), never the date." },
      { title: "UAT â Sep 10â13 (K2/K3 deep)", project: "tpc-online-platform", owner: "both", note: "Feature freeze Sep 4; dry run Sep 7â9; invite waves ~10 families each from the Season 2 base (invites out ~Aug 24). Pass = K2 completes 10q unaided Â· parents understand the report Â· zero quota red. Kid micro-tests (Aug 24â30, Sep 1â6) and a W5 dress-rehearsal load test precede it (D12)." },
      { title: "WS6.3 report tab enhancements", project: "tpc-online-platform", owner: "both", note: "Parallel lane â does not displace the shadow feedback proof. Dixon (intern) is implementing; Max and Natalie stay accountable. Frontend only, on the existing WS3.1-06 Report screen: extract aggregation into a tested reportStats.js, then accuracy trend, topic/domain breakdown with a 7d/30d/all filter, local past-attempt review in the History drill-in, minimum-data guards, and test coverage. Cross-device completeness stays WS8-04; WS8-01, WS8-10, WS8-12 and WS9-00 remain excluded and unassigned." },
      { title: "WS6.1 â pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical polish before real users: accuracy consistency, R8/concurrency smoke, fallback audit and first-time-user default â WS6.1-11 pilot. Split from WS6.2 on 2026-07-31 when the UI review moved to Max; the two now run as separate lanes." },
      { title: "WS6.2 â UI review", project: "tpc-online-platform", owner: "max", note: "Reassigned to Max 2026-07-31, matching his UI-in-general scope. Pilot-relevant pass: notify/validation classes, whole-app screen-by-screen review, bilingual copy, glyph/colour/button consistency, Home layout, button UAT, young-learner usability and the Log abnormal-activity banner. Five tasks stay held until after the pilot. WS6.2-07 still confirms UID/display-field scope with Max first." },
      { title: "WS7-06 + WS9-00 â report validation (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier starts after engineering substrate exists. Co-ship WS7-06 log-only integrity with the first online challenge/report path, then WS9-00 $99 one-off report MVP via the SheetsâAffinity pipeline. Full WS7/WS8/WS9-01+ remains gated on E1/E2." },
    ],
    blocked: [
      { title: "PR #70 offline harness - not release-ready", project: "tpc-online-platform", owner: "max", note: "Do not run a real batch. The branch omits the frozen active contracts and seed/rubric inputs it claims to test; the review page executes unescaped model-controlled HTML/script; spawned CLIs inherit the parent environment and repo access; the report does not calculate judge-human agreement; the spec contradicts itself on whether visual questions bypass judging; and the PR is stale against main and far larger than its docs/PoC description. Narrow syntax, diff and validator tests pass, but they do not close these blockers. Review is recorded on PR #70." },
      { title: "pyramid-site â paused for UAT sprint", project: "pyramid-site", owner: "max", note: "Hero parallax parity, scoring/report graphics absorb, deploy, CDN photo export (ASSET_GATHER Â§B/Â§E) â all parked by D10 until after UAT; resume ~mid-Sep." },
    ],
  },

  /* --- roadmap / rollout -----------------------------------------------
   * Grouped by project. Each item flips: todo â active â done (or hold).
   * --------------------------------------------------------------------- */
  roadmap: [
    {
      project: "pyramid-site",
      owner:   "max",
      title:   "Marketing site rebuild",
      items: [
        { label: "Next.js scaffold + brand system",   state: "done"   },
        { label: "Hero parallax (7 layers) â paused for UAT sprint (D10)", state: "hold" },
        { label: "Content sections parity â paused for UAT sprint (D10)",  state: "hold" },
        { label: "Asset migration (mainpage â public) â paused (D10)",     state: "hold" },
        { label: "Deploy (Vercel/Netlify)",           state: "todo"   },
        { label: "Link into learning platform",       state: "todo"   },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 1 â Free Practice MVP",
      items: [
        { label: "WS0 Â· Project setup",               state: "done"   },
        { label: "WS1 Â· Data layer (Sheets + API + adapter)", state: "done" },
        { label: "WS2 Â· Auth & onboarding incl. WS2-07 region capture", state: "done" },
        { label: "WS3.1 Â· App shell & student screens", state: "done" },
        { label: "WS3.2 Â· Close-out (B1/B4/C1/C3, prod, auth, tests)", state: "done" },
        { label: "WS4.1 Â· Question engine",           state: "done" },
        { label: "WS4.3 Â· Save/session integrity", state: "done" },
        { label: "WS6.1-18â¦21 Â· Backend hardening / reliability / observability / tests", state: "done" },
        { label: "WS5.1 Â· Admin UI & content platform", state: "active" },
        { label: "Dixon Â· Learner zh-HK/en UI (frontend live; header selector removed)", state: "done" },
        { label: "Full-review gate Â· 10 P1/P2 risks remediated and regression register retained", state: "done" },
        { label: "WS4.2 Â· Mock / fixed 30-question set", state: "done" },
        { label: "WS6.1 Â· QA, polish â UAT week Sep 10â13 (K2/K3 deep)", state: "active" },
        { label: "WS11 Â· Backend maintainability refactor (01 bootstrap dedupe + 02 lint done; 03â05 now unblocked but sequenced after current content work)", state: "active" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "UI review (WS6.2) â pilot-relevant pass",
      items: [
        { label: "Founder redesign lane â K2-self-operable learner UI (freeze Aug 21, D10)", state: "active" },
        { label: "WS6.2-01 Â· Notify-layer message classes + form vs field validation", state: "todo" },
        { label: "WS6.2-02 Â· Whole-app screen-by-screen review", state: "todo" },
        { label: "WS6.2-03 Â· Bilingual labels, buttons and copy", state: "todo" },
        { label: "WS6.2-05 Â· Young-learner usability + non-audio accessibility", state: "todo" },
        { label: "WS6.2-08â¦12 Â· Glyphs/colours/buttons, Home layout, button UAT, Log banner", state: "todo" },
        { label: "WS6.2-04/06/13/14/15 Â· Held until after pilot (colour logic, unselect, cross-device language, audio, image ratios)", state: "hold" },
        { label: "WS6.2-07 Â· Confirm UID/display-field scope with Max, then review", state: "todo" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "Question & asset factories (WS5.2 Â· WS5.3)",
      items: [
        { label: "WS5.2-01c6/01c7 Â· 24-candidate comparison accepted; direct compiled prompting selected; bounded official lane GO", state: "done" },
        { label: "WS5.2-01d/01h/01i Â· Typed GenerationRecords ledger + 3-hour session-paired companion + transport/promotion proofs", state: "done" },
        { label: "WS5.2-01k/01l done; WS5.2-01j live with five-minute UI/backend alignment, controlled boundary proof + Admin diagnostics UI publication remaining", state: "active" },
        { label: "WS5.2-01m Â· Human-revision/manual-rejudge safety, evidence proof, and source merge", state: "done" },
        { label: "WS5.2-02e Â· Approval evaluation and retained decision-evidence readback", state: "done" },
        { label: "WS5.2-02f Â· Independent judge persistence/UI and obsolete server evaluator removal", state: "done" },
        { label: "WS5.2-04 Â· Treasure curation, matched comparison and activation", state: "hold" },
        { label: "WS5.3 Â· Visual factory â scene-spec â SVG (PoC done: 7 archetypes K2âP6)", state: "active" },
        { label: "Offline recipe harness Â· PR #70 blocked on contract/privacy/calibration correctness before any real batch; GO/NO-GO target Aug 21-23 (D11)", state: "active" },
        { label: "Recurring AI factories (WS5.2-01f/01g evidence-gated auto-approval Â· WS5.3-05 illustrative-asset generator)", state: "hold" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "both",
      title:   "Report tab enhancements (WS6.3) â Dixon implementing",
      items: [
        { label: "WS6.3-00 Â· Extract Report aggregation into a tested src/lib/reportStats.js", state: "todo" },
        { label: "WS6.3-01 Â· Accuracy trend over time (session-level, cross-device-safe fields)", state: "todo" },
        { label: "WS6.3-02 Â· Topic/domain breakdown + 7d/30d/all time filter", state: "todo" },
        { label: "WS6.3-03 Â· Local past-attempt review in the History drill-in", state: "todo" },
        { label: "WS6.3-04 Â· Minimum-data guards and sync states", state: "todo" },
        { label: "WS6.3-05 Â· Report test coverage", state: "todo" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 2 / 3 â later phases",
      items: [
        { label: "WS7-06 Â· Log-only integrity subset (co-ship with report)", state: "todo" },
        { label: "WS9-00 Â· $99 report MVP (E1 north-star)", state: "todo" },
        { label: "WS7 Â· Test Mode + ranking (gated on E1/E2)", state: "todo"   },
        { label: "WS8 Â· Reporting v2 & adaptive (gated on E1/E2)", state: "todo"   },
        { label: "WS9-01+ Â· Subscription + payments (gated on E1/E2)", state: "todo"   },
        { label: "WS10 Â· Advanced question interactions & visual renderers (ex-WS4.4: class-A visual model, tap/hotspot, mini-games, open numeric)", state: "hold" },
        { label: "WS7-16 datastore decision + WS7-13 adapter parity (Sheets â Firestore/Supabase)", state: "todo" },
      ],
    },
  ],

  /* --- system map (Mermaid flowchart) -----------------------------------
   * Edit this text ONLY when the architecture changes. Mermaid syntax:
   * https://mermaid.js.org/syntax/flowchart.html
   * --------------------------------------------------------------------- */
  systemMap: `flowchart TB
    %% ---- actors ----
    students([K2âP6 students<br/>+ parents]):::actor
    admins([Admins / authors]):::actor

    %% ---- marketing ----
    subgraph MKT["Marketing / registration è¡é· Â· owner: Max"]
      live["Live site (today)<br/>Squarespace + Commerce<br/>thepyramidchallenge.org"]:::live
      rebuild["pyramid-site (rebuild)<br/>Next.js Â· React Â· Tailwind"]:::wip
    end

    %% ---- design source ----
    mainpage["mainpage/<br/>design assets Â· brand Â· hero"]:::ref

    %% ---- platform ----
    subgraph PLAT["tpc-online-platform â Practice / Test SPA Â· owner: Natalie"]
      app["App shell<br/>(Home Â· Practice Â· Result Â· Report Â· Admin)"]:::plat
      adapter{{"Backend interface<br/>(data-access adapter)"}}:::iface
      companion["Local CLI companion<br/>one-job + session watch live<br/>Codex/Claude generate + independent judge"]:::wip
    end

    %% ---- backend ----
    subgraph BE["Backend"]
      auth["Google Identity Services<br/>Cloud Run token verification"]:::be
      api["Cloud Run API<br/>(SheetsBackend Â· Node)<br/>asia-east2 Â· live"]:::be
      drive[("Google Drive<br/>Asset Library<br/>incoming Â· library")]:::store
      sheets[("Google Sheets<br/>Customers Â· Questions Â· Results<br/>QuestionReviewEvaluations<br/>GenerationPrompts Â· GenerationInputPackages<br/>GenerationRecords")]:::store
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
    app -.->|"one-job pairing Â· session token display"| companion
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
    { date: "2026-08-03", who: "Natalie + Codex (GPT-5); Claude output reviewed", project: "tpc-online-platform",
      summary: "AUG 2 WRAP + MERGE AUDIT (run after every other Codex room stopped): no Codex platform source or documentation work completed during Aug 2; the scheduled sync after midnight only confirmed clean GitHub alignment. Claude/Max's contributor ruling (PR #69) and D9 attribution sync (PR #71) were merged, then Codex synchronized all 24 Markdown files through private main 324c34d (PR #72): 24 local links resolve, 166 fence markers balance, all 350 ROADMAP definitions are unique, the feature-freeze second-person publish gate reached the handoff, and factory decision references 10-36 became FD-prefixed so they no longer collide with the Business Space. PR #70 was deliberately not merged: although its narrow validator/syntax/diff checks pass and the PoC is directionally useful, it lacks the promised frozen active contracts/seeds/rubric, exposes model-controlled script/HTML in review.html, gives child CLIs the parent environment/workspace, calls confidence groupings judge-human agreement, contradicts itself on visual judging, and is stale/overscoped. Six older no-PR release/doc branches were also not merged: current main already carries their later integrated behavior or current documentation, while their tips are stale snapshots that would regress the tree; they remain cleanup candidates, not pending product work. Critical assessment: Claude moved product framing and prototyping quickly, but claimed release/calibration readiness ahead of the evidence; Codex added the missing integration/privacy review and merged only the safe governance/docs slice. Production remains Cloud Run b91684e and Pages source 40da0f5 / Pages a0ea79f." },
    { date: "2026-08-03", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Recipe harness B1–B4 built and smoked (PR #70 branch). Validator (closed schema + per-archetype answer recompute), headless gen/judge CLI runners with single-retry and offline guard, blind review.html (judge verdict locked until the human submits; qff1 category chips; verdicts JSON export) and agreement reports with a cross-batch tracker. Real-model smoke batch 3/3 validator pass; simulated review round-trip showed the calibration signal working (judge confidence 70 on approved vs 42 on rejected). Baseline visual generator/judge prompts (draft v0) codify the scene-spec PoC method with an 8-point acceptance bar. Discovered the FD18 prompt snapshots already in-repo — generator snapshot is superseded 31c, so the text lane needs Natalie to run prompts:export for active 23b (§8.1). First real batch tonight; Dixon blind-reviews tomorrow morning." },
    { date: "2026-08-01", who: "Max + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Contributor access scope resolved by Max (raised by Natalie 2026-07-31): the 2026-07-03 deep-dive containment proposal is superseded; contributor access follows D10 ownership â lean and trust-based, no content fences or per-checkpoint approvals, and Dixon is encouraged to own features end-to-end (WS6.3 already his). Two system-level disciplines recorded, applying to everyone including Max: a second-person look on any production publish from feature freeze (Sep 4) through UAT week, and confidentiality via the signed internship contract (NDA + IP assignment). Existing gates unchanged (superadmin-only generation, human approval, WS5.2-04 hold, student-data hygiene). Full ruling in the private repo ROADMAP (PR #69); board card closed." },
    { date: "2026-07-31", who: "Max + Claude (Fable 5)", project: "",
      summary: "FOUNDER SPRINT KICKOFF â Max moved from Team Futura dev onto the platform and set a six-week runway to UAT (Sep 10â13, K2/K3 deep, not eight levels thin). Three decisions minted: D10 ownership re-cut (Max = learner UI/UX + factories + generation ops, converging with Natalie's same-day WS5.2/WS5.3/WS6.2 reassignment and adding Dixon = WS6.3 reports + question review, with K-level developmental fit routed to Max's OT background and pyramid-site paused), D11 offline recipe-harness mandate (internal-only, never imports into production, recipe-only deliverable, daily two-checkpoint batch cadence, GO/NO-GO Aug 21â23; founder start ruled without a sync â Natalie reviews async), and D12 infra stays on Sheets+Drive through UAT (migration decision ~Oct on real load data; factory SVGs ship inline in the question row). Enabling work landed same-day: RECIPE_HARNESS_SPEC.md ACTIVE on platform branch docs/offline-recipe-harness-spec with a working scene-specâSVG PoC (7 archetypes from K2 counting to P6 composite-area/angles/chart-average â the deterministic-renderer design lets the existing text judge evaluate visual questions by judging the spec, so no vision judge is needed); platform-doc factory decisions renamed to FD10âFD35 (formerly D-numbered 10â35) so bare D# tokens resolve to this ledger; a six-week delivery plan published to the team. Scope cuts confirmed: user mailbox hidden in favour of static announcements; narration is TTS-only on æå­é¡ with an optional narrationScript schema field pending. First text batch fires the night of Aug 3; Dixon blind-reviews all of it Aug 4 morning as the confidence-threshold calibration." },
    { date: "2026-07-31", who: "Max + Claude (Opus 5)", project: "",
      summary: "D9 attribution amended for a third operator and a third device. Dixon joined as intern in 2026-07, initiated and acceptance-directed the live learner-language release (platform d97d492, Pages workflow 30619332923) from inside Natalie's /Users/hkycaa account â so the old two-device map attributed his work to Natalie. D9 now maps origin â person as a table (dev Mac ktf@Hais-MacBook-Pro + Max's other computer = Max; /Users/hkycaa = Natalie; Dixon-initiated or acceptance-directed work = Dixon regardless of the account it originates in), with the person, not the directory, as the unit. Max ruled that every change originating from the dev Mac is signed Max: that account's global Git identity is now Max <info@pyramidchallenge.org>, so blame is authoritative there from today forward, while Natalie and Dixon still both commit as HKYCAA and their split rests on this ledger. Registered dixon in owners. Synced the D9 restatements in business/README.md and the platform repo's CLAUDE.md. Also fixed the access gap behind all of this: tpc-online-platform-admin is private under the thepyramidchallenge personal account and HKYCAA was not a collaborator, so git pull on the dev Mac failed with 'Repository not found' and the local copy had sat 4 weeks stale at July 3; HKYCAA now holds write, pull verified." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "NAVIGATION + LAYOUT: three student/admin UX fixes shipped as one release (PR #66, Pages a0ea79f). (1) The header back arrow now returns to the page the user actually came from via a screen-history stack, falling back to Home only when there is no history; back-hops are never re-recorded so repeated back walks the trail. (2) The pre-practice briefing is a flat full-page layout \u2014 the branch version was reconciled in favour of the parallel session's divider-based flat design already on main. (3) The admin Questions/Assets/Users/Log consoles now fill the whole window edge-to-edge (no grey gutter or rounded card); student screens keep the card. Merged tree 617/617 tests; live bundle marker verified. Docs synced via PR #67." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN FINAL FORM: Natalie reviewed the card iteration and chose a full-panel login instead â brand, Google button and hint clustered at the vertical centre, no card, and the ä¸­æ|English pills removed from the sign-in screen (language switching now starts at Settings or in-quiz; pre-auth pages render default zh-HK). The GIS skeleton pill and 8s load-timeout retry from the card iteration stay. PR #60 merged as b3813b7 and deployed as Pages dd98ac2 (also carries the lazy Question Bank Sets subtab); merged tree 608/608 tests; new bundle verified live. Handoff release boundary corrected via PR #63 after a doc race with the parallel session." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN POLISH: the login gate is now a centred card on the surface backdrop (language pills, brand, Google button and hint grouped; scoped so the account-setup form keeps its full panel), a pulsing skeleton pill holds the Google button slot while the GIS script loads (the button used to appear seconds late with nothing in its place), and a hung GIS load now surfaces the retry UI after 8s instead of failing silently. PR #57 merged as 5b0564a and deployed as Pages d2072f8; 607/607 frontend tests; live signin-card CSS marker verified. Docs synced via PR #59." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "WS4.2 COMPLETE: PR #52 merged the agreed fixed-set behavior as b91684e. Production gained the QuestionSets publication seal and exact DraftSessions question snapshot; Cloud Run tpc-api-ws42align0731 serves 100% with zero error logs through smoke. A superadmin published only the 30-question K2 smoke set, confirmed the 15-minute fixed-order briefing, reloaded and resumed the same wall-clock attempt, submitted all 30, verified the compact integrity record (telemetry present; one recovery), then unpublished it. Sheets read-back found 30 Attempts, no residual draft, successful publish/unpublish logs, all 8 sets draft and a blank final seal; learners again see the bilingual Coming Soon card. Public Pages 14b2494 now serves merged main e3a5d7f through workflow 30627860310, retaining both WS4.2 and Claude's glyph alignment. WS4.2-02/03 are closed; official content and WS5.1-04 QuestionSets remain next." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UI POLISH RELEASE: two frontend changes shipped to Pages. (1) Boot loader: the static \u25b2 splash became the logo mark assembling itself layer by layer (pure CSS/SVG, reduced-motion safe, also on the admin lazy-chunk fallback). (2) In-progress markers + glyph alignment (PR #50): every control whose function is deferred, Phase 2/3 or held \u2014 Profile upgrade, generator Treasure tab/button, Batch upload, Class A asset help, reserved question types \u2014 now carries a monochrome hourglass icon, and all interactive-control glyphs (back chevrons, list chevrons, Report clock, Result check/cross, bookmark flag, notification dots, quiz stepper, admin plus/spark/arrow/grid/dots) were unified on the shared monochrome Icon set with 12 new shapes; \u2039\u203a stripped from i18n strings. Combined tree verified 607/607 frontend tests + build; deployed as Pages cbb632f from merge 7a3a07d on top of the WS4.2 release; hourglass marker confirmed in the live bundle. Docs synced via PR #53." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "RECOVERY ALIGNMENT: closed the user-visible five-minute UI / 12-minute deployed-backend mismatch without shipping the held language-preference backend. Minimal release 62ae763 applies only the already-merged dc1ea75 timeout/test patch to exact diagnostics source 826c180; backend 518/518 and lint 0 errors passed. Cloud Run tpc-api-takeover5m0731 was staged at 0%, became Ready, passed tagged health, retained byte-identical non-image runtime configuration, then moved to 100%; canonical health passed and post-cutover error/5xx count was zero. No Sheets migration/read/write, generation action, frontend deploy, Customers migration or language-preference action occurred. Platform PR #49 merged the synchronized release boundary into main 8459c82. WS5.2-01j6 remains active only for a future controlled five-minute stale-attempt/takeover and late-result proof using suitable existing production state; do not create generation work solely for the smoke." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS6.2 UI review reassigned from Natalie to Max, matching his UI-in-general scope. The combined \"WS6.1 + WS6.2 pilot-gating polish\" card is split in two, since the halves now have different owners: WS6.1 launch-critical polish stays with Natalie, WS6.2 becomes its own Max-owned lane (15 tasks, 5 held until after the pilot). WS6.2-07 still confirms UID/display-field scope with Max before its review. Platform docs record the same gate on the WS6.2 section (157a146), mirroring how WS6.3 names its lane owner. That commit also corrected docs/README.md, which still claimed the diagnostics source was not in main â merging it made that false, and only the public Admin UI is still missing." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "REPORT TAB: recorded the WS6.3 lane now that its plan landed (platform 8600c57) â six frontend-only tasks on the existing WS3.1-06 Report screen: extract aggregation into a tested reportStats.js, accuracy trend, topic/domain breakdown with a 7d/30d/all filter, local past-attempt review in the History drill-in, minimum-data guards, and test coverage. Dixon (intern) is implementing; Natalie chose to keep the lane owned by Max and Natalie rather than add a new owner key, so accountability stays with the principals and Dixon is named in the card note. It is a parallel lane and does not displace the shadow feedback proof. Exclusions restated so they are not quietly absorbed later: cross-device completeness stays WS8-04, and WS8-01, WS8-10, WS8-12 and WS9-00 remain unassigned. Platform side landed earlier today: the AGENT_HANDOFF.md â docs/ move completed as a tracked rename with every reference repointed, FULL_REVIEW_RISKS.md was deleted with its one still-open item FR-07 (static SVG validation) migrated into ROADMAP under WS5.3-08 plus a short operational gate in the handoff, and the WS6.3 queue entry followed once the move was committed." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "DASHBOARD CLEANUP: consolidated the duplicate bounded-content and QuestionSets cards into one shared Now card. Max owns bounded WS5.2 generation; Natalie owns explicit human approval and WS5.1-04 exact-version QuestionSets. The cleanup changes no product scope: calibration/smoke rows remain excluded from official content, and Treasure remains held under WS5.2-04. The ownership history now says Max inherited no open WS5.2-01m build item rather than overstating all WS5.2 work as closed." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "GOVERNANCE: raised an open question for Max on contributor access scope, and assigned the existing report tab (WS3.1-06, Report.jsx â data visualization plus past-attempt review) to Dixon, TPC's intern; WS8-01 and WS8-04 are explicitly excluded. Natalie's position is that the intern will also join wider platform development and will therefore have access to most sensitive information; she asked that Max be flagged rather than that access be restricted unilaterally. Nothing is settled â this awaits Max. The detail is written up in the PRIVATE platform repo (docs/ROADMAP.md) and deliberately kept out of the Business Space, because tpc-dashboard is a public repository and the specifics would be world-readable; only this neutral pointer is public. Context for the decision: the 2026-07-03 deep-dive Â§6 intern-containment proposal was never ratified â its draft ledger entries were never adopted, and the decision, hypothesis and experiment ledgers still stop at D9, H6 and E3 â while practice has already moved past it since Dixon directed the live learner-language release. The dashboard roadmap/board entries for Dixon's report work are deliberately NOT added yet â the '[Check] Report tab requirements and roadmap' session is still drafting them, and Natalie chose to record ownership and the new task IDs together in one pass once that plan lands." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS5.2 (question factory) and WS5.3 (asset factory) are reassigned in full from Natalie to Max, effective today. Natalie's closing position on WS5.2 is the 2026-07-24 01c7 GO for the bounded official seed-pack lane â 9 of 10 full-review risks cleared (all four P1s), with FR-07's stricter static-SVG parser hardening deferred to WS5.3-08. WS5.2-01m closed earlier the same day in the parallel Codex session, so Max inherits no open WS5.2-01m build item; WS5.2-04 (Treasure curation/comparison/activation) transfers as held work. Dashboard changes: WS5.2/WS5.3 roadmap rows lifted out of Natalie's Phase-1 group into a new Max-owned 'Question & asset factories' group, carrying the held recurring-factories and WS5.2-04 rows; Dixon's learner zh-HK/en UI row stays in Natalie's Phase-1 group since it is not factory work; the Now card was rebased onto Codex's replacement and notes that generation is Max's while approval and WS5.1-04 onward stay Natalie's. Unchanged and deliberately so: GO authorizes the bounded lane only â it does not approve any candidate, publish answer guides, enable auto-approval, or start recurring generation, and human approval remains mandatory." },
    { date: "2026-07-31", who: "Dixon (initiator) + Codex", project: "tpc-online-platform",
      summary: "Dixon initiated and acceptance-directed the learner zh-HK/en UI release. Private main is 6ed5105; public Pages is f26f5f7 via successful workflow 30619332923. Live sign-in and Settings language selectors remain, while the authenticated learner-header selector was removed at Dixon's follow-up. Frontend 583/583 and the 94-module build passed. No language Cloud Run backend or production Customers Sheet migration was deployed." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UI polish: the boot splash and admin lazy-chunk fallback now show an animated pyramid loader â the logo mark assembling itself course by course (pure CSS/SVG, 0.2s fade-in delay so fast boots never flash it, reduced-motion users get the complete static mark). Committed as 66e2f20 on codex/ws5-2-01m-feedback-loop, kept strictly separate from the parallel uncommitted WS5.2-01m work; deploy-gate tests 549/549, published via deploy.sh as Pages bf1907e (workflow 30611377059) and live-verified on the public app." },
    { date: "2026-07-30", who: "Natalie + Codex (GPT-5); Claude evidence reviewed", project: "tpc-online-platform",
      summary: "JULY 30 WRAP â UI: Home dashboard typography/grid and the accuracy trend were iterated into an adaptive, runtime-built, pointer/keyboard-accessible five-point chart; the watch-pairing panel gained independent Codex/Claude CLI-aware model presets and exact custom IDs, all published through reviewed Pages releases. RELIABILITY: a real repeated-sign-in/Home fan-out caused 62 Sheets reads/minute and eight quota rejections; Codex traced it to duplicate GIS/auth work plus separate hydration calls, shipped one guarded getHomeBootstrap with a five-tab Results batchGet and one Questions read, and verified one fresh sign-in at six total Sheets reads, all attempt-1/200, followed by a five-minute window with zero reads, retries, quota errors, API errors, 5xx, or companion polling. WS5.2/GOVERNANCE: the obsolete evaluator path was physically removed; Phase-1 production sizing, recurring generation and auto-approval boundaries were closed or routed to later evidence gates; ROADMAP workstream summaries were restored; the expanded model picker landed on main 96007e6. HUMANâAI REVIEW: exact source 2c71644 is live on Cloud Run tpc-api-ws5201m0730 at 100% and Pages df57e43; QuestionReviewEvaluations grew from 18 to 25 columns, and frozen human revisions, manual companion re-judging, fingerprint-bound approval, immutable evidence history and failure retention passed backend 497/497, frontend 546/546, migration 4/4, build and lint. The source remains pushed but unmerged on codex/ws5-2-01m-feedback-loop; 01m8a is honestly partial until one real reviseârejudgeâdecide round is read back. DOCS: all 20 tracked Markdown files were reconciled and pushed at 9ea066d; links/fences, 65 API actions, 326 unique roadmap IDs and all 18 calculated progress summaries pass. CRITICAL ASSESSMENT: Codex delivered substantial, well-tested product/release progress and responded well to the quota incident, but deployment from an unmerged branch and the still-unrun acceptance journey are material integration risks; daily UI/release churn also increased operational surface. No independently attributable July 30 Claude source/docs commit or active Claude worktree was found, so today does not support a symmetric agent-output comparison. Claude remains the configured independent-judge lane and its earlier co-authored 8c40a82 staging/recovery/metrics foundation is still embedded, but July 30's attributable implementation, incident response, release and documentation work was Codex-led." },
    { date: "2026-07-27", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Post-closure daily wrap for July 25â26, recorded after all meaningful platform development tasks became idle. The sole source change after the prior July 24 dashboard wrap was the final consolidation at 11d59c7; no further commit or deployment evidence landed on July 25â26. tpc-online-platform is clean and aligned with origin/main, and all 20 tracked Markdown files remain synchronized, so no platform documentation edit was necessary. Claude's co-authored 8c40a82 contribution is fully contained in main and supplied a strong WS5.2-01j foundationâpre-judge staging, judge-only recovery, one-replacement budgets, honest batch aggregates and per-attempt metricsâwhile Codex then hardened, tested, migrated, deployed and documented the wider release. Critical verdict: WS5.2 is operationally closed only for the bounded official seed-pack lane, not for recurring or autonomous generation; explicit human approval remains mandatory. The next product constraint is approved content inventory and disjoint QuestionSets, while FR-07 SVG allowlisting, FR-08 production asset evidence/snapshots and FR-09 frontend deployment remain follow-ups." },
    { date: "2026-07-24", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Final all-Codex July 24 wrap, recorded only after every other task became idle. The blinded 24-candidate comparison was accepted and selected direct compiled prompting; the live factory now has immutable prompt/input inspection, grouped time/token/cost metrics, Phase-1 answer guides, retained approval evidence, a daily purge, and the typed 87-row GenerationRecords ledger, with legacy split tabs deleted. The full 10-risk gate and all seven 01j recovery cases closed. Literal production proofs passed for judge-only retry, promotion Retry import plus payload-clearing Discard, 12-minute stale release/late-result rejection, and partial-family Finish; the seven-day elapsed wait was explicitly waived with automated expiry/non-restoration coverage, making WS5.2-01c7 GO for the bounded official seed-pack lane without waiving human approval. A real transient Sheets-quota burst was hardened by changing metrics to one three-range batchGet and failing quota responses immediately with Retry-After; the final retry fix removed a stale server-evaluator dependency, and the post-fix window was clean. Current production is Cloud Run tpc-api-ws52retry at 100% from backend e3d050d and Pages c5bbc84 from UI source 36ffd03; Home, Users/access, Log, Question Bank/Generator/Review and Asset Library improvements are live. Final validation includes backend 481/481, frontend 528/528, Vite build, zero audit findings, and clean quota telemetry. All 20 platform Markdown files were synchronized and pushed as docs tip 15183c2, with 12/12 local links and all 315 ROADMAP definitions intact. Next: bounded official review rows with saved judge evidence and explicit human approval, then WS5.1-04 QuestionSets." },
    { date: "2026-07-24", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap across all July 23 platform tasks, recorded after every other Codex task stopped. WS4.3-25 session telemetry was migrated and released: Cloud Run tpc-api-00092-xp6 serves 100%, Pages 83dcc63 came from source 73b2e05, 101 fabricated pre-cutoff zero attempt times became null, and authenticated timed/untimed, save/resume, reload, History, denominator, timing and topic-label smokes passed. Source work fixed awaited audit logging and same-second log pagination; pinned exact generator/judge CLI/model roles; added deterministic prompt export manifests; added hash-checked, chunked 30-day exact input retention plus dry-run-first purge; and integrated backend-authoritative prompts, Phase-1 answer guides, pre-judge staging, judge-only recovery, one-replacement budgets, honest batch aggregates and per-attempt timing metrics. A private non-promoting route rehearsal produced 24/24 structurally valid, corrected-judge-gate-passing candidates awaiting blinded human review, but it used frozen local inputs and does not close 01c7. The full review registered 10 open P1/P2 release risks. After all Codex and Claude rooms were idle for 10 minutes, the shared tree was reconciled, documentation synced, verified at backend 433/433 + frontend 506/506 + build/lint/audits green, and pushed clean as fe8904d. No 01k/01l/01j production deployment occurred; clear the risk gate, run the four migrations, finish UI/purge scheduling/live smokes, then run the official backend-managed comparison. The scheduled sync later confirmed dashboard, pyramid-site and tpc-online-platform current on main." },
    { date: "2026-07-23", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Completed WS5.2 post-01c7 Step 1 prompt freeze as platform commit 60f76a1. Candidate generation now uses the same private brief-only instructions for Codex and Claude, with no Claude generator.md overlay; requires natural localized character-name pairs such as ç¾ç¾/Mia; requires teaching explanations as separate Traditional Chinese and equivalent English paragraphs; and treats same-seed diversity as an encouraged quality goal rather than an integrity gate or mandatory dedupe. The local scaffold policy is QF-2026-07-23, focused scaffold/preflight coverage passes 11/11, the full backend suite previously passed 336/336 with lint at 0 errors, and no comparison batch, Question row, promotion or deployment was started. Next: scaffold the blinded scored re-run for the same four seeds." },
    { date: "2026-07-23", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap recorded after every other July 23 task stopped. The only completed Codex work today was the scheduled repository sync: dashboard, pyramid-site and tpc-online-platform were all already clean and current on main, with the platform still at f73d841. No platform source, production, roadmap, focus or board state changed, so the existing 01c7 NO-GO / iterate priorities remain current." },
    { date: "2026-07-22", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap for all July 21 tasks, recorded after every other Codex task stopped. The WS5.2 calibration finished: 01c6 yielded 8/8 would-approve candidates (4 as-is, 4 after minor edits), the controlled 2Ã2 A/B showed generator.md was quality-neutral within each model, Natalie set 01c7 to NO-GO / iterate, and the preferred bootstrap configuration is Codex + brief-only; freeze the prompt fixes and run a blinded scored Codex-vs-Claude comparison before any official 60-per-level generation. The live question-generation lane was cut over to GenerationJobs/GenerationSlots with GenerationRuns retained as rollback, gained complete saved independent review plus generation-time sibling-set handling, bounded transient/gate-failure recovery and exact-attempt release, and moved companion discovery/termination to a revocable three-hour session. The final read-efficiency release batches control-table reads, reuses locked snapshots and polls foreground clients every 15 seconds, reducing one-job claim from 9 to 2 reads and submit/promotion from 21 to 5; PR #6 merged as f73d841, Cloud Run tpc-api-00090-ncz serves 100%, Pages 65109e5 is live, and backend 281/281 plus frontend 481/481 and the production build pass. Home bootstrap, production-status tooling and protected source delivery were also improved, while production automation remains intentionally unconfigured. The July 22 daily sync then confirmed dashboard, pyramid-site and tpc-online-platform clean and current on main." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "A real post-recovery companion_judge_failed issue established the bounded transient retry policy. Companion source 37974f0 now retries generator or independent-judge CLI/structured-output failure exactly once after one second in a fresh process, retaining the same claimed slot attempt and reusing the same candidate for judge retry. Valid completed gate failures are never auto-retried; if both phase attempts fail, revision 00087's exact-attempt release still moves the slot to needs_regeneration without a Question row. Committed source passes 276/276; the founder-Mac combined full-sibling/compatibility source passes 279/279; lint 0 errors. No Cloud Run redeploy was required." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed the recurring stuck-generating failure in the local AI-question companion. Commit df0a19d adds an attempt-bound, idempotent backend failure report: generator, independent-judge, submit and normal SIGINT/SIGTERM failures release only the exact still-generating attempt to needs_regeneration; duplicate, stale and post-success reports cannot overwrite authoritative state, and no model/error text is sent. Cloud Run tpc-api-00087-qzd is live at 100% with auth/fingerprint/rate-limit controls preserved; ping and invalid-capability route smokes passed. The founder-Mac companion also retains the older-backend review-shape compatibility retry. Committed suite 274/274 and combined local suite 277/277 pass, lint 0 errors. Hard power/network outages retain the 12-minute stale-attempt recovery safety net." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Reduced signed-in Home startup to one authenticated getHomeBootstrap request backed by a single Results workbook batchGet for sessions, bookmarks, notifications and drafts; Attempts are no longer loaded until history is requested. Established deployed infrastructure plus scripts/production-status.py as machine truth and AGENT_HANDOFF.md as the one human operational context, removing volatile revision/test-count duplication and correcting the production ledger description. Added path-aware source CI and a protected, exact-SHA, manually dispatched backend-first production promotion workflow with candidate health/config checks, explicit traffic promotion and verified public Pages publication. Source and docs are complete; no production deployment was made, and one-time GitHub production-environment, WIF and public-repo-token activation remains explicit." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Resolved the repeated genjob_d586cae5 slot-1 submit failure after attempt 2 identified attestation_review_invalid:evaluation. The independent Claude review was not the defect: production REQUIRE_EVALUATION_FINGERPRINT=true had been applied to pre-promotion candidate validation even though no live Question rowâand therefore no content fingerprintâexists at that stage. Commit 4b69f3b exempts only this advisory pre-promotion check; candidate/prompt hashes still bind the review, while final human approval retains exact-content fingerprint enforcement. Production-flag companion/rejection/final-approval coverage and the complete backend suite pass 272/272; lint remains 0 errors. Cloud Run tpc-api-00086-m8r is Ready and serves 100% through LATEST with a new image digest; live action-router health passed. Read-only Sheet verification shows attempt 2 left the same slot generating with blank reserved/question IDs and no payload/hash, so Natalie should retry the same job/slot as attempt 3 rather than create a new job." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Investigated the first post-rollout full-review submit: genjob_d586cae5 slot 1 generated with Codex and judged with Claude, then failed closed as attestation_review_invalid. No candidate, payload or Question row was retained; the slot remains recoverable at generating/attempt 1. There were exactly two stable k2_q12 siblings and no concurrent promotion, ruling out live comparison-set drift. The backend had collapsed shape, comparison-set, evaluation and rationale failures into one opaque code, so d95899f now returns a safe stage suffix without logging question content (272/272, lint 0 errors). Deployment uncovered a second operational defect: Ready revisions 83â85 existed but traffic was explicitly pinned to 00082. Traffic is repaired to 100% LATEST on tpc-api-00085-m5l, so future deploys route normally. Next action: retry the same slot; success completes the saved-review smoke, while any failure now identifies its exact validation stage." },
  ],
};
