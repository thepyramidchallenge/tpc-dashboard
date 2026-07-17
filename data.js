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
    updated:   "2026-07-17",
    updatedBy: "Natalie + Claude (Fable 5)",
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
   * use one of these keys. Split: Max = pyramid-site + UI in general;
   * Natalie = the rest (learning platform, data layer, content).
   * --------------------------------------------------------------------- */
  owners: {
    max:     { name: "Max",     zh: "Max",     scope: "pyramid-site + UI in general / 網站重建及整體 UI", color: "#1f7a96" },
    natalie: { name: "Natalie", zh: "Natalie", scope: "Learning platform, data, content / 學習平台、資料層、內容", color: "#6d4fd6" },
    both:    { name: "Max + Natalie", zh: "Max + Natalie", scope: "Shared / 共同", color: "#5a6570" },
  },

  // The single most important thing to know before starting work today.
  focus:
    "Pause further production generation: human-review the six new review rows, reconcile the prematurely-live companion lane with WS5.2-01c5–01c7 and 01j, then finish the Q+A result UI deployment. Promotion is not approval. Exact next actions: top of tpc-online-platform/AGENT_HANDOFF.md.",

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
      next:  "Live stack: Pages b0eab6f (source b5a5172) + Cloud Run tpc-api-00079-lkw (100%, max instances 1). GenerationRuns, pairing/claim/submit and the local Codex/Claude companion are live. Job genjob_2518586d-4323-472f-93f2-1bb07feedd56 settled six review rows after one fail-closed regeneration. Pause more generation; human-review those rows and close 01c5–01c7/01j. Q+A-in-results is source-built and awaiting normal frontend deployment.",
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
      next:  "Source of truth for full-stack platform work. Private main bad3490 contains the deployed companion lane. Current source reloads canonical Questions rows into Generator results (prompt, A–E, answer, explanation), stays on Single results and keeps watching retryable failures. Verify/deploy that frontend change only after full tests; separately reconcile the live lane with the skipped 01c7/non-promoting activation evidence.",
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
      { title: "WS5.2 live-lane containment + human review", project: "tpc-online-platform", owner: "natalie", note: "Do not start another production batch. Human-review k3_l000001_ai–k3_l000006_ai, record the one fail-closed regeneration, and reconcile the now-live companion with 01c5–01c7 plus 01j. These six review rows are not approved content or calibration evidence." },
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS5.2 result Q+A frontend deploy", project: "tpc-online-platform", owner: "natalie", note: "Source joins review-ready IDs to authoritative Questions rows and shows prompt, A–E, correct answer and explanation without retaining staging payloads; Single stays on results and companion retries remain watchable. Complete full verification and use the guarded Pages deploy." },
      { title: "WS5.1-05 + WS4.2 fixed-set flow", project: "tpc-online-platform", owner: "natalie", note: "After sets exist: add/verify placeholder handling for the 69 missing per-choice images, then run a fixed QuestionSet end-to-end through Practice/mock and save a session tagged to the set id." },
      { title: "WS6.1 + WS6.2 — pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical polish before real users: accuracy consistency, R8/concurrency smoke, fallback audit, first-time-user default, and pilot-relevant UI/copy/usability/visual/log-abnormal-banner review → WS6.1-11 pilot." },
      { title: "WS7-06 + WS9-00 — report validation (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier starts after engineering substrate exists. Co-ship WS7-06 log-only integrity with the first online challenge/report path, then WS9-00 $99 one-off report MVP via the Sheets→Affinity pipeline. Full WS7/WS8/WS9-01+ remains gated on E1/E2." },
      { title: "Deploy pyramid-site",         project: "pyramid-site",        owner: "max",     note: "Vercel/Netlify once parity is reached." },
    ],
    blocked: [
      { title: "WS5.2-02e approval artifact closure", project: "tpc-online-platform", owner: "natalie", note: "Not failed: the stored decision/version/evaluation result is not visible in the frontend, so Natalie will not perform a hidden Sheets/AdminLog check. Choose an authenticated admin readback view or formally waive the manual UI smoke based on existing automated/backend evidence. This does not block 01c5." },
      { title: "Export CDN-hotlinked photos", project: "pyramid-site",        owner: "max",     note: "About photo, report mockup, trophy — need Squarespace export (ASSET_GATHER §E)." },
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
        { label: "Hero parallax (7 layers)",          state: "active" },
        { label: "Content sections parity",           state: "active" },
        { label: "Asset migration (mainpage → public)", state: "active" },
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
        { label: "WS6.1-18…21 · Backend hardening / reliability / observability / tests", state: "done" },
        { label: "WS5.1 · Admin UI & content platform", state: "active" },
        { label: "WS5.2 · Question factory (seed-pack lane active; recurring AI hold)", state: "active" },
        { label: "WS5.2-01d/01h/01i · GenerationRuns + authenticated local subscription-CLI companion (live; activation evidence/recovery closure pending)", state: "active" },
        { label: "WS5.2-02e · Approval stored-result visibility or manual-smoke waiver", state: "active" },
        { label: "WS5.3 · Asset factory (AI SVG gen)", state: "active" },
        { label: "WS4.2 · Mock / full-set (after WS5.1-04)", state: "todo" },
        { label: "WS6.1 · QA, polish, pilot → launch", state: "active" },
        { label: "WS6.2 · UI review (pilot-relevant pass)", state: "active" },
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
        { label: "WS9-01+ · Subscription + payments (gated on E1/E2)", state: "todo"   },
        { label: "WS10 · Advanced question interactions & visual renderers (ex-WS4.4: class-A visual model, tap/hotspot, mini-games, open numeric)", state: "hold" },
        { label: "WS7-16 datastore decision + WS7-13 adapter parity (Sheets → Firestore/Supabase)", state: "todo" },
        { label: "Recurring AI factories (WS5.2-01f/01g evidence-gated auto-approval · WS5.3-05 illustrative-asset generator)", state: "hold" },
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
      companion["Local CLI companion (live)<br/>Codex/Claude subscriptions<br/>generate + independent judge"]:::wip
    end

    %% ---- backend ----
    subgraph BE["Backend"]
      auth["Google Identity Services<br/>Cloud Run token verification"]:::be
      api["Cloud Run API<br/>(SheetsBackend · Node)<br/>asia-east2 · live"]:::be
      drive[("Google Drive<br/>Asset Library<br/>incoming · library")]:::store
      sheets[("Google Sheets<br/>Customers · Questions · Results<br/>(service account)")]:::store
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
    app -.->|"manual job pairing"| companion
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
    { date: "2026-07-17", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Ruled and enforced superadmin-only AI generation (WS5.2-01h7). Natalie's decision: the companion subscription CLIs live on the owner's computer, so generation is owner-only for now and multi-operator/admin-tier generation is explicitly a later development stage. Enforcement landed at both layers: backend moved adminCreateGenerationJob, adminIssueGenerationCompanionToken, adminGenerateQuestionSlot, adminPromoteGenerationSlot and adminGetGenerationJob from the admin gate to the superadmin gate (companion claim/submit stay pairing-token-authenticated, and the token uid must match the now-superadmin job creator), and the 題庫 ✦ New AI question entry plus direct generator routes hide/fail closed for admin-tier accounts, which keep review/approval. New refusal tests cover both layers. Committed as the integrated private main f5b3314 together with the parallel Codex session's source-built WS5.2-01i2 session-paired watch lane after waiting out its in-flight edits; backend 261/261 and frontend 469/469 pass on the integrated tree and origin is pushed. The rule is source-enforced, deploys pending — the live tpc-api-00079-lkw still gates generation at admin tier until the next revision. Docs: ROADMAP WS5.2-01h7 and an AGENT_HANDOFF non-negotiable boundary. The six genjob_2518586d review rows still await Natalie's human review; current focus stays WS5.2-01c5." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Ran the existing live companion job genjob_2518586d-4323-472f-93f2-1bb07feedd56 from the correct cloud-run package after the UI's cwd-ambiguous command failed from ~. The dual subscription-CLI lane generated six K3 candidates: one first attempt failed answer+technical gates and was discarded; regeneration passed; all six slots settled review_ready as k3_l000001_ai–k3_l000006_ai with zero issues. They remain real status=review rows requiring human approval, not calibration/approval-yield evidence; further production generation is paused because 01c7/non-promoting activation evidence and 01j recovery remain open. Source now reloads canonical Questions rows into Generator results to show prompt, A–E, correct answer and explanation, keeps Single results on-screen, clarifies the cloud-run cwd, and keeps watching gate-failure retries; frontend 463/463, production build and local visual QA pass, deployment pending. Cloud Run tpc-api-00079-lkw is confirmed at 100%. A no-terminal design is technically possible via a signed login-started backend-polling helper; no browser-triggerable localhost/deep-link launcher was accepted." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Consolidated the final all-Codex documentation state through private main f64e503. QUESTION_FACTORY accepts official production as live GenerationRuns first, then a founder-run authenticated local Codex/Claude subscription-CLI companion (generator and independent judge) submitting one slot at a time to the TPC backend; no developer model API key, direct Sheets write or completed production batch handoff. ROADMAP retains all 284 rows in one ascending WS0→WS10 registry, with all 141 done and 143 open/partial tasks interleaved by ID; readability is restored through workstream progress summaries, parent/child indentation and task-family spacing without changing any task wording or status. Dependencies and S/M/L estimates remain visible, held commitments keep explicit IDs, and Git owns the retired deployment diary. AGENT_HANDOFF and root/backend/template/architecture/wireflow docs are synchronized. Current 01c5 is a method rehearsal because the known pair is already unblinded; honest calibration follows. Validation: exact task-ID/order/status/content audit and diff check pass." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Cleaned and synchronized the platform documentation after reconciling both sibling source lines. Private main d14a4b2 now contains the local CLI batch lane (79a9c41), GenerationRuns typed-row staging (f8e5385), and one concise 175-line AGENT_HANDOFF replacing the accumulated ~1,100-line second changelog. Current status was synchronized across the root/backend/frontend/template READMEs, ARCHITECTURE, QUESTION_FACTORY, ROADMAP, WIREFLOW, docs index and agent protocol: four production smokes closed; approval evidence remains an explicit frontend-readback-or-waiver decision; current focus is 01c5; GenerationRuns is source-built but not deployed/migrated; WS7-18 remains later-stage. Removed the resolved branch-reconciliation blocker. Validation: backend 224/224, frontend 461/461, production build, diff checks and all 14 local Markdown-link targets pass; origin/main is pushed through d14a4b2." },
    { date: "2026-07-17", who: "Natalie + Codex + Claude", project: "tpc-online-platform",
      summary: "Late cross-task result folded into the all-Codex wrap-up: origin/main commit f8e5385 consolidates never-migrated GenerationJobs/GenerationSlots into one 29-column GenerationRuns typed-row tab (one JOB row per run plus SLOT rows per requested output). One writer per row and no duplicated metadata are retained; creation is one append; JOB counts are creation/settlement snapshots while reads derive live SLOT status; the { job, slots } frontend contract is unchanged. Validation recorded by that task: backend 215/215 and untouched frontend 461/461. This is source-built, not live: the workbook has no generation tabs, providers/worker remain unwired, and the retired two-tab migration must never run. The handoff/dashboard also expose the resulting repo reconciliation debt: local 79a9c41 CLI work and origin f8e5385 are siblings and must be merged before platform commit/push/deploy. Current focus remains 01c5 blind human review; neither this server lane nor the approval-evidence UI/waiver choice blocks it." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Production acceptance update after all other Codex tasks became idle: Natalie passed the authenticated two-tab Save-for-later conflict/retry, self-approval whitelist grant/revoke bell, question-editor asset-picker save/reopen, and physical-phone admin panel-parity (100dvh versus mobile URL bar) smokes. The dashboard manual-smoke card is closed. WS5.2 §10.2 approval evidence remains unverified rather than failed: the retained post-decision ID/version/evaluation artifacts are not visible in the frontend, and Natalie will not inspect hidden Sheets/AdminLog results. Recorded the non-blocking closure choice — add an authenticated admin readback view or formally waive the manual UI artifact check based on existing automated/backend evidence. Current focus stays WS5.2-01c5 blind Codex-vs-Claude human review, then 01c6–01c7 calibration/go-no-go." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Consolidated and shipped the complete security/release closeout. Cloud Run tpc-api-secfinal-0717 now serves 100% (max instances 1, writes open, fingerprint enforcement on, RATE_LIMIT_XFF_CLIENT_FROM_RIGHT=1) with all five full-review P1s plus the upsertUser server-owned-field allowlist and pre-verification Google-token limiter; tpc-api-00075-h8f remains tagged ws5307 at 0% for rollback. Two zero-traffic direct-run.app canaries proved XFF position 2 spoofable and position 1 stable; unsafe canary tags were removed. Downloaded live server.js and lockfile hashes exactly match the consolidated branch; ping/auth gates and error logs are clean. The frontend rate-limit failover was hardened so existing users never enter setup on a 429, then Pages b0eab6f was built from committed source b5a5172 through the detached-worktree deploy guard; the GitHub Pages workflow and live bundle were verified. Consolidated PR #3 is merged and private main 5295ecc now holds the release plus final handoff; GitHub also recognizes contained approval PR #1 as merged. Validation: backend 209/209, frontend 461/461, Vite build, and both production dependency audits green/zero vulnerabilities. Current focus moves to Natalie's zero-API local CLI question-generation Phase B/C lane plus the remaining authenticated human smokes." },
    { date: "2026-07-17", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Last full-review P1 CLOSED and LIVE — WS5.3-07 Drive file-ID trust boundary deployed as Cloud Run tpc-api-00075-h8f (100% traffic). Sequence: Natalie ruled the design questions (registry is NOT a trust boundary — location-verify even registry fileIds incl. public /asset, which contains the accepted sheet-status bypass; ship read+write halves together; sheet-status bypass itself left as-is). Fix committed on mainline branch ws53-asset-fileid-guard (d4e49ac: servedAssetContent/assetFileMetadata/assertAssetFileLocation — kind+MIME from real Drive metadata, trashed/native/oversize rejected before download, registration gated to incoming/, moveAssetFileToLibrary never strips foreign parents; backend 154 green). Blast radius then VERIFIED minimal via Natalie-run read-only SA Drive audits: reach = asset shared drive + 3 Google-native workbooks + one .DS_Store; no binaries with student data were ever reachable. Deploy: discovered live code = release lineage 368e6d0 (image-identical 00078/00081, writes already unfrozen), so the fix was cherry-picked code-only onto it as ws53-07-release (ab95dbc, 149 tests green incl. the 5 new security tests); pre-deploy validation passed all 3 registered assets against the new location check; smoked at the ws5307 tag URL at 0% traffic, then 100% shifted and production re-smoked (3 approved assets 200 image/svg+xml, bogus 404, unauth write/admin-read refused, ping OK). Docs: ROADMAP WS5.3-07 + AGENT_HANDOFF updated on the mainline branch (049d26a). Merge debt: fold ws53-asset-fileid-guard + ws53-07-release into the canonical line; optional Drive hardening noted (share Database folder to the SA instead of the parent folder)." },
    { date: "2026-07-16", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "End-of-day Claude wrap across six chatrooms (shared checkout with Codex; some work overlaps). (1) D9 attribution sweep: founder→Natalie/Max by reflog/blame provenance across platform, dashboard and Business Space, pushed. (2) QUESTION_FACTORY review landed Natalie's zero-API local CLI generation lane (Claude Code / Codex CLI → 01c validation → trusted promotion; CLI bake-off) — design chat-only, unrecorded/unbuilt after macOS revoked that session's Documents access. (3) Mid-day two-P1 deploy (tpc-api-00065-dv8, since superseded) with the REQUIRE_EVALUATION_FINGERPRINT flip, plus AGENT_HANDOFF top consolidation (b0eee83) and ROADMAP/QUESTION_FACTORY sync. (4) Verification pass caught the day's third deploy race (branch Pages deploy silently clobbering main's), the undocumented approval-panel commit, and the WS4.3-23 frontend-live/backend-not-live mismatch — feeding the frontend reconcile. (5) Approval-evaluation reviewer UX: analyses on arrival, gates/similarity colour matrices, confidence bars, Adjust toggle dropped (LIVE via Pages 4a21abf); sticky evaluation rail 0c43d5e (desktop right rail + 評估/學生預覽 tabs, mobile rail-first; 459 tests) committed on origin/main, NOT deployed pending Natalie's word; two StrictMode bugs and a select intrinsic-width leak fixed. (6) Last full-review P1 — service-account Drive file-ID reads — implemented + tested on ws53-asset-fileid-guard in an isolated worktree (backend 154 green there), uncommitted/undeployed, integration question open with Natalie. Consolidated follow-up list (decisions owed, manual smokes, engineering next) merged to the top of AGENT_HANDOFF.md (782d5df, pushed). Live state verified via gcloud/git at wrap time: tpc-api-00078-jid 100% + Pages 4a21abf, FREEZE_WRITES=true pending Natalie." },
    { date: "2026-07-16", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "End-of-day Codex wrap across all platform tasks. WS5.2 Phase B/C was source-built (GenerationJobs/Slots, bounded validation, independent admission, 7-day bound payloads, trusted promotion/reconciliation, Single/Batch + four-click review flow); the temporary public generator preview was then withdrawn after it exposed demo-admin surfaces, real admin fixtures were sanitized and a production-query regression guard added. Full-review P1 #1–#4 are now live: immutable/unique sessions, explicit conflict-safe saved drafts, exact-content approval fingerprints, and atomic/retry-safe approval decisions. The final workbook migration + second read-back passed; provenance-correct source 368e6d0 is in draft PR #1; Cloud Run tpc-api-00078-jid serves 100% (max instances 1) and Pages 4a21abf serves the decision-ID bundle, with FREEZE_WRITES=true pending Natalie's explicit lift. Remaining P1: arbitrary Drive file-ID reads. Security P2: upsertUser allowlist committed as 2d39d2f but not live; token limiter source is 200/200 green but uncommitted/deploy-blocked until direct-run.app XFF position and classroom shared-NAT behavior are proven. Frontend is reconciled into main; backend reconciliation remains mandatory before another deploy." },
    { date: "2026-07-16", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Restored GCP CLI + ADC authentication for info@pyramidchallenge.org and verified project tpc-platform-2026, region asia-east2, Cloud Run tpc-api-00060-wxv and maxScale=1. Published a deliberately read-only WS5.2 generator preview while keeping the real production generator gated off: private source 9d00bb0/fa52150/4faefe5 pushed; public Pages fec2788 serves index-BW725_Eu.js + AdminApp-BP6sDQdp.js; production accounts do not see the AI entry and direct real routes fail closed. The public `?generatorPreview=1` path uses deterministic local fixtures only (no model, backend, Sheets or production Question write). Live browser smoke passed 4-output Batch, import failure/retry, gate failure/retry, strong/weak AI draft scores, candidate selection and handoff into the existing per-question approval panel. Frontend 444/444 + production build; backend remains source-tested 173/173. No Cloud Run deploy, staging-tab migration, provider key/config or real question generation occurred; four P1s and the async/429 batch boundary still gate production." },
    { date: "2026-07-16", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Started WS5.2 AI-question-generation Phase B/C and kept the rollout boundary explicit. Source now has exact GenerationJobs/GenerationSlots templates + idempotent read-back migration; admin-gated stable-job/slot APIs; strict bounded-lane/taxonomy/text-only validation; provider-neutral generator plus independent admission hooks that fail closed; discarded gate failures; SHA-256-bound 7-day passing payload; reserved-ID/read-before-retry trusted promotion with three write attempts; notification/audit hooks; and a dedicated Single/Batch generator with refresh routes, passed-only results, targeted retries and sequential approval entry. Independent review found and fixed creator-attribution/WS5.1-19 separation, aggregate partial-state semantics, caller-job-ID docs, advanced-lifecycle reconciliation and persistent collision handling. Validation: backend 173/173, frontend 440/440, production build and diff checks pass. No model/admission adapter, live Sheets migration, Cloud Run/Pages deploy or browser smoke occurred. 01h4 remains partial because the browser-driven maximum can issue 51 writes against the default 30/min; the four existing P1 backend findings still gate deployment." },
    { date: "2026-07-16", who: "Natalie + Codex (GPT-5)", project: "",
      summary: "Attribution correction recorded as Business Space D9: this MacBook's human decisions are Natalie's; human decisions originating from Max's other computer are Max's. Active records were normalized line by line using local reflog + Git blame provenance; named agent attribution, append-only archives and Git history remain unchanged." },
    { date: "2026-07-15", who: "Max + Claude (Opus 4.8)", project: "",
      summary: "DOCTRINE — 'Control flow → reasoning flow' recorded group-wide (AGENTS.md doctrine + CONSTITUTION 'How we work' pointer; mirrored from tf-dashboard where it was measured). Max's distilled two-week Hermes Inbox reflection, generalised for every AI-native system we build (TPC + Family Hermes included): both extremes are wrong (a bare LLM is not architecture; a fully deterministic pipeline drifts into engineering REPLACING reasoning) — the skill is PARTITIONING. Engineering owns deterministic execution/tools/data/permissions/guardrails/tests; reasoning owns understanding open-ended human input, judgement, tool-choice, evidence integration, and the answer-or-defer call. Control flow → reasoning flow = change WHO owns the workflow (programmer → model). Architecture smell + operational test: a deterministic branch firing on context it cannot read has crossed into reasoning. Reasoning is most valuable interpreting open-ended human input — optimise how software understands humans. The human architect's job: AI optimises WITHIN a frame forever and rarely questions it; maturity = accuracy of the partition + owning the frame, not amount of workflow designed. Two refinements: (1) within a task frame patching IS locally correct, so the leap requires stepping OUTSIDE the frame; (2) the partition MOVES as models improve — re-examine it. Measured on Hermes (offline A/B, 45 real drafts, model held constant, same guards, human-audited): reasoning agent beat the rigid pipeline on usefulness AND audited safety." },
    { date: "2026-07-10", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex wrap-up across all current platform tasks, not just this chat. (1) Question-factory scope: recorded factory decision 13 (rights-cleared external-seed provenance), audited all 40 K2/K3 real_seed questions, identified 25 text-ready / 5 adaptation-review / 10 visual-required routes plus the K2 difficulty-3/observation and K3 shape/classification gaps, merged the packet into canonical QUESTION_FACTORY.md, and closed WS5.2-01a with Natalie's decisions: retain all 40; build 60 approved questions per level as two disjoint 30-question sets; keep every pre-launch run internal-only. (2) WS5.2-01c Run 001 committed as 7676ce1: an exact-schema, offline-I/O-guarded harness plus 20 private test outputs (10 K2 + 10 K3), 20 seed and 10 unique sibling comparisons, max similarity 43.75%, and AI-draft screening 16 would-approve / 1 would-unapprove / 3 gate-fail; focused 13/13 and backend 151/151 pass. The payload is mode 600, git-ignored and Cloud-Run-excluded; no live write/deploy/official question creation occurred. Human verification, confidence and actual review time remain before closure. (3) Independent full-project review: frontend 412 + backend 123 + production build + demo/admin/AI-panel browser smoke passed, but uncovered 5 P1 and 3 P2 integrity/security/deploy defects plus dependency-audit debt. The first P1—duplicate/mutable completed attempts and Sessions/Attempts disagreement—is now fixed by follow-up commit d911413 (WS4.3-22, backend 151); four P1 and three P2 findings remain to triage. Local platform main is two commits ahead of origin/main; neither 7676ce1 nor d911413 is deployed." },
    { date: "2026-07-10", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.2-02e taken LIVE end-to-end + WS5.2-02f AI evaluator built (evening chatroom). (1) 02e completion: the §10 Claude⇄Codex split was marked with the shared payload contract, then both tracks landed — track A approval-evaluation panel committed 4668238 (pure scoring module + panel + editor approve-gating; full in-browser demo drive passed), track B backend independently reviewed, re-tested (123 green) and committed 03810e9 to unblock deploy; production QuestionReviewEvaluations tab migrated via SA impersonation (read-back OK, 16 cols); Cloud Run tpc-api-00060-wxv deployed from committed HEAD (ping + unauthenticated smoke green); Pages deployed (since carried forward by the 18i deploy f8d8fcf); Natalie seeded the §10.2 smoke row k3_m000001_ai via the committed idempotent script. Remaining closure gate = Natalie's §10.2 in-browser smoke (approve → QuestionReviewEvaluations row + evaluationId in AdminLog + bell; stale retry). (2) Natalie's factory-register decision 14 (evening): the evaluation PROCESS is AI, the final decision stays human — WS5.2-02f built source-complete bf42874: backend draftQuestionEvaluation calls claude-opus-4-8 (adaptive thinking, structured JSON, §3 rubric; every draft re-validated by the same recompute that enforces approvals; fail-closed without ANTHROPIC_API_KEY) and the panel gains ✦ AI 初評 prefill with rationale card; evaluationSource (human/ai_draft/ai_adjusted) lands in AdminLog detail as the WS5.2-01g shadow-mode calibration trail. Backend 132 / frontend 424 / build green; deploy (backend-first runbook in AGENT_HANDOFF) + API key are owed by Natalie. (3) LLM strategy consult recorded: keep generator and evaluator in different model families (kills judge self-preference — GPT for generation later is a fine pairing with the Claude evaluator); at 50 questions/level/month API cost is noise (~US$30–40/mo Opus-tier for K2+K3), so pick by measured quality via a panel bake-off; the no-API bootstrap lane (manual ChatGPT generation → §4.3 file handoff → trusted import, human-checklist evaluation) is legitimate, but automating consumer subscriptions is not — the one-click admin generation flow (WS5.2-01h) requires API billing." },
    { date: "2026-07-10", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.1-18i 詞彙批准 CLOSED same-day: Natalie ruled all nine packet decisions (D1 vocab as-is · D2 phantom system DROPPED · D3 grammar rule official: log actions=base verb, notification types=past participle · D4 collapsed session_submit/notification_read kept · D5 six notification types · D6 asset taxonomy ROUTED to WS5.3-01c · D7b affinity.pages→content.pages while unused · D8 twelve console labels with Natalie's wording 允許自我批准/取消自我批准 · ruling 9 keep 帳戶). Applied in 3b39695 (AdminLog.jsx labels+filters, assetMeta rename, Fields/README mirrors; frontend 412 pass) and merged into the ROADMAP decision log (be56244; working packet doc + artifact retired per Natalie's instruction). Same evening, requested by Natalie deploy: labels LIVE in Pages f8d8fcf — served bundle verified to carry the new vocabulary (and none of the dropped values); the deploy also ships the committed 02e1 approval-panel frontend ahead of backend, per the §10 order-free contract. Both live workbook Fields cells then synced via SA-impersonated Sheets writes with read-back verification (Customers AdminLog.category cell at row 18; Results Notifications.type cell at row 40 — whose old value predated even 18f), so 18i closes with NO remaining tails; Results__Fields.csv notification enum was fixed en route (68f120c, dc6d22a had missed it). (Cell refs reworded for the workspace linter.)" },
    { date: "2026-07-10", who: "Claude (Fable 5)", project: "",
      summary: "Big-picture plan sync: the dashboard roadmap now mirrors docs/ROADMAP.md's current workstream structure — new WS10 · Advanced question interactions & visual renderers added to Phase 2/3 on hold (the former WS4.4 family renumbered + rehomed by Natalie's decision: class-A visual model, tap/hotspot, mini-games, open numeric); the stale 'AI generation → WS5.2/WS5.3' hold row replaced by the accurate 'recurring AI factories' hold (WS5.2's bounded seed-pack lane is active Phase 1 work; only 01f/01g auto-approval and the WS5.3-05 asset generator stay held); the datastore row now names WS7-16 decision + WS7-13 adapter parity; the four WS6.1-18…21 hardening rows collapsed to one done row. Also reverted the earlier same-day fine-grained stage-sync commit per Natalie's direction — the dashboard tracks the plan and session outcomes, not minute-level status." },
    { date: "2026-07-10", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Claude day wrap-up (rest of 2026-07-10, ALL chatrooms — beyond the 18f/18g/19 closure entries below). (1) WS5.2 question factory: docs/QUESTION_FACTORY.md accepted as the canonical bounded-lane contract — reviewer-guided 55% similarity indicator, three integrity gates, anchored 0–5 confidence rubric, and the retained-analysis amendment (policy point 9): every final approve/unapprove appends one compact QuestionReviewEvaluations record (no question-content copy) while the backend recomputes eligibility and rejects evaluation_stale; §10 records the Claude⇄Codex two-track split. Track A approval-evaluation panel is committed (4668238: approvalEvaluation.js scoring module + ApprovalEvaluationPanel.jsx + editor approve-gating; frontend 412 local, demo-mode Natalie drive passed); track B backend persistence + tab migration is source-complete in-tree. Go-live gate: migration read-back → deploy → §10.2 real ai_generated smoke. (2) Natalie unparked 18i: joint 18i+WS5.3-01c ratification packet delivered as docs/VOCABULARY_RATIFICATION.md (nine decisions + full bilingual stored-value tables, five survey agents, load-bearing claims source-verified); Natalie's review underway — Appendix A reviewed, first amendment 取消自我批准 revoke label; apply nothing until ratified. (3) Docs governance sweep: AGENT_HANDOFF restructured 930→610 lines (single TL;DR + 02e coordination block up top; every fact lives in exactly one section; stale 18f smoke script and 'whitelist bell not live' warnings resolved; superseded blocks compressed into §7 history); ROADMAP index order fixed — WS5.1-19 un-nested from inside the 18x sub-list, priority tiers renumbered to a continuous 1–13 with Tier 0 = items owed by Natalie, long tasks decomposed into WS5.2-01h1–01h6 · 02e1/02e2 · WS6.1-13a–13c, and six missing 2026-07-10 cross-cutting decision-log entries added (19 separation of duties · 18f scope + targetId=Users.uid rule · 18g freeze · panel-parity rule · 02e retained analysis + split · ratification pending); WS4.4 renumbered to WS10 (advanced renderers = Phase 2–3 workstream) and on-hold terminology standardized repo-wide. All pushed through private main 6059285; memory/phase notes synced." },
    { date: "2026-07-10", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.1-18g CLOSED: Natalie passed the live bell\u2192editor click smoke \u2014 a question-target notification opens the \u984c\u5eab editor directly on that question (no table stop-over), welcome/self-approve rows stay plain unlinked text. With 18f+19 already smoked, the whole WS5.1-18 family is now closed except the deliberately-parked later-stage 18h (\u65e5\u8a8c dashboard) and 18i (vocab review \u2014 scope enumerated in ROADMAP). Docs-only closure; live stack unchanged (Cloud Run tpc-api-00059-rwn \u00b7 Pages 988da4c)." },
    { date: "2026-07-10", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.1-18 umbrella CLOSED: Natalie passed the 18f Notifications smoke (submit→admin bell, unapprove+note→author bell, badge clear + read=TRUE, fresh-signup welcome) and the WS5.1-19 self-approval smoke — both ticked in ROADMAP, 18h/18i stay parked. Same evening: login/setup screens fixed to the full-width panel (.app--auth, Natalie's report); 審批備註 review-note textarea widened to fill the editor column; notification click-through built (Natalie's request) then frozen by Natalie to question-only scope — bell rows with targetType=question deep-link into the 題庫 editor, welcome/user rows stay informational, 日誌 target clicks keep filter behaviour. Deploys: Pages gh-pages 988da4c (bundle verified live) and Cloud Run tpc-api-00059-rwn from committed HEAD, which also settles the dc6d22a/717e8d2 whitelist-bell race between two parallel sessions (frontend 375 / backend 110 green). Remaining smokes for Natalie: 18g bell→editor click, panel-parity real phone, whitelist bell." },
    { date: "2026-07-10", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed WS5.1-13 live after gcloud reauthentication. Deployed exposure telemetry to Cloud Run tpc-api-00051-zr8 (100% traffic, ping healthy; revision template maxScale=1), reran backend 99/99, and used the signed-in production app for authenticated counter smoke. Two distinct 10-question draft starts produced exactly 20 Questions.exposureStartedCount increments; overlapping questions correctly reached 2. Both smoke drafts were discarded afterward while started-exposure counters intentionally remained. ROADMAP/AGENT_HANDOFF now mark 13a-e complete; next WS5.1 closure item is the agreed WS5.1-18f Notifications two-lane integration." },
    { date: "2026-07-10", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "WS5.1-13 exposure telemetry implemented and pushed as private source 7396b73: Natalie kept one Questions.exposureStartedCount field and explicitly removed maxExposure/serve caps/automatic retirement. Live TPC Questions migrated through the connected Sheets path (column Y + Fields row; 81 existing questions initialized to 0; read-back verified). createDraftSession now increments once per new draftId+question, de-dupes duplicate pool ids, rejects unknown ids before draft creation, strips forged counter writes, invalidates cache, and shares a process-wide Questions write lock with admin edits under maxScale=1. Backend 99 pass. Cloud Run remains tpc-api-00050-hvp because local gcloud credentials require interactive reauthentication; deploy + one live increment smoke remain before closing the task." },
    { date: "2026-07-09", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex wrap-up across recent platform sessions, not just this chat: WS5.3 question-editor asset linking was deployed after the picker was not visible, with prompt.assetId and sparse option assetIds now saved into questions and served back as imageAssetId/choiceAssets; later maintenance removed the duplicate free-text option asset field and kept validation aligned. Today the question-bank lifecycle was hardened and shipped end-to-end: generated questionIds now lock the question level, ids are not recycled unless the exact draft row is deleted, deleteQuestion accepts raw status draft only, and approved/review/unapproved/disabled/retired/blank rows are rejected server-side while the list toolbar, row menu, and editor expose delete only for exact drafts. Private source main d228be6 is pushed; public Pages gh-pages 3a83b16 is republished from that commit; Cloud Run tpc-api-00050-hvp is live. Verification: backend 96 pass, frontend 363 pass. Next: Natalie's browser smoke admin lifecycle + picker, then resume the seed-pack lane." },
    { date: "2026-07-09", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Responsive desktop/tablet UI shipped (Natalie-directed, WS6.2). The phone-only v0.2 student app now adapts to computer/iPad: at ≥900px the top tab bar becomes a persistent left sidebar (company logo top-left) inside a fixed-height app shell — sidebar + header stay pinned while only the content pane scrolls — filling the full viewport width, with student and admin panels sharing 32px content padding so they align; 820–899px gives the quiz runner a two-column layout (prompt left, choices right); <900px is unchanged (original top tabs / single column / bottom sheets, verified identical). All four admin consoles (Questions/Assets/Users/Log) now paginate 25/50 rows via a shared admin/AdminPager.jsx with the pager pinned to the bottom of the panel; admin tables stretch to fill when narrower than the console; confirm/pause sheets recentre as modal dialogs on desktop; the Home data-source footer shows only in demo. Pure frontend/CSS — no backend/API/data-model change. Frontend suite green (362) + build green. Committed to private origin/main; production Pages deploy state recorded in AGENT_HANDOFF. NOTE: a separate unrelated in-tree feature (delete-draft-question + level-lock: cloud-run/server.js, backend.js, AdminApp/AdminEditor, tests) was left uncommitted — not authored in this session." },
    { date: "2026-07-09", who: "Codex", project: "tpc-online-platform",
      summary: "WS5.3-03 question-editor asset linking deployed after Natalie could not see the picker: backend Cloud Run tpc-api-00047-8xm + Pages bc9463f, with live CSS/JS verified. Approved asset dropdowns now bind prompt.assetId and option assetIds, prompt assets serve as imageAssetId, sparse option assets stay position-aligned as choiceAssets, and live IDs render through public /asset. Remaining: Natalie's browser smoke + richer search/filter UX later." },
    { date: "2026-07-09", who: "Claude (Opus 4.8)", project: "",
      summary: "AGENTS.md: 修正誤導性 `dashboard/` 路徑前綴——standalone repo 由根目錄 serve index.html/data.js，並無 dashboard/ 子資料夾（Line 3 & 15）。面試 sandbox 係本 repo 嘅副本，籌備時發現。Where-it-lives 段落嘅 dashboard/ 掛載描述屬正確，保留。" },
    { date: "2026-07-06", who: "Codex", project: "tpc-online-platform",
      summary: "Post-Fable sync: waited for the dashboard Fable 5 deploy to finish, then reconciled platform docs/templates to the current WS5.3 state. Updated AGENT_HANDOFF/ROADMAP/ARCHITECTURE/WIREFLOW plus README/runbooks and sheets templates: Assets is now the slim 18-column registry, backend current is tpc-api-00044-8d6, manual Drive-drop registration works, and the remaining blocker is specifically Shared Drive quota for in-app Upload. Added missing Assets Fields rows, corrected Questions__Assets.csv, and synced the dashboard board/system map. Validation green: backend 84, frontend 354, frontend build, asset header check." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Claude day wrap-up across ALL of today's sessions (Fable 5 + Opus 4.8, every chatroom — the Claude counterpart to the Codex wrap-up). (1) WS5.1 admin console hardened end-to-end: field-rules pass (prompt/id limits + counters, domain↔topic auto-populate, reviewNote keep-but-clear with 已解除 prefix, server-owned createdBy/createdAt, English-only studentName, superadmin-only 日誌), lenient 儲存草稿 vs full 提交審批 gate mirrored server-side, adminTabs RETIRED → role-derived tabs with the live column deleted, snapshot-on-approve version policy + WS5.1-02f compare/inspect history UI, and the toast colour rule (red=error / green=success / white=draft) — carried live through the day's production deploys (backend tpc-api-00032→00034; multiple Pages pushes). (2) WS5.3 素材庫 from zero to live: full Drive-backed registry + lifecycle + approved-only /asset serving + admin console built in source (Fable), infra go-live checklist executed (Drive share verified, Assets migration, tpc-api-00040-r74, Pages), then two Natalie-directed revision rounds (Opus): licence/sourceNote then labelZh/labelEn dropped (tags carry naming, 18 cols), friendly bilingual category picker + Class A/B inline help, clearer field-naming errors, incoming→library move bug fixed (idempotent + fires on approval) with the full serve loop verified on Natalie's live SVG, manual upload built but blocked on a real Shared Drive (SA has no My-Drive quota — Natalie's top action in AGENT_HANDOFF §2); backend tests 69→84 across the day, latest tpc-api-00044-8d6 + Pages 2b06b00. (3) Governance + review: CONSTITUTION polish-floor entry (group-wide 完成品 DNA); full WS5 docs-vs-code review — verdict WS5.1 ~95% / WS5.2 design-only / WS5.3 ~70%, 8 risk flags in AGENT_HANDOFF §5 (headline: admin question edits are last-save-wins with no conflict check) + 2 ROADMAP decision-log entries, risk #4 closed same day by the new roster-grant-survives-sign-in backend test; Natalie-authorized evening deploy gh-pages 80cb060 (red required-star asterisks on add-user, formatWhen timestamps incl. Drive UTC→HK, 待登記 更新時間, fixed-ratio photo frames 4/3 & 1/1 TBC) — all curl-verified live. Still open for Claude's next sessions: Shared Drive + WS5.3 interactive smoke, WS5.1-18j log retention, /asset approved-only regression test, upsertUser email case-normalization." },
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 Natalie-directed round 2 built + deployed (backend tpc-api-00044-8d6, Pages gh-pages 2b06b00; backend 84 / frontend 354 tests, build green). (1) Fixed the incoming→library move bug — the file only moved at registration with the category-at-that-moment, so assets registered before their category was set never moved; moveAssetFileToLibrary is now idempotent + also fires on approval, and the one stuck asset was hand-moved. GET /asset now returns Natalie's live SVG (full serve loop verified). (2) Dropped labelZh + labelEn entirely (redundant with tags + fileName) — schema now 18 cols, name/description lives in tags; live Assets tab + Fields + migration + tests updated. (3) Added 其他 Other to both category and class as catch-alls. (4) Manual upload button built but BLOCKED: the service account has no My-Drive storage quota, so uploads need a real Shared Drive (sharing the folder as Editor is not enough) — recorded as the TOP item in AGENT_HANDOFF §2 (WS5.3) for Natalie to action next time; manual Drive-drop → 待登記 → 登記 still works meanwhile. Earlier same-day: dropped licence/sourceNote, friendly category picker, required asterisks, clearer errors, confirmed WS5.1-07 subTopic live. Natalie is live-testing." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 full review (docs vs code) + Natalie-directed polish, committed f0fdf2c (private main; Natalie later authorized the Pages deploy — live as gh-pages 80cb060 from source 9311592, bundle index-fjhilKdj.js, admin chunk + photo-frame CSS + red required-star all curl-verified live). Review verdict: WS5.1 ~95% (deferred items already tracked), WS5.2 design-only, WS5.3 ~70% (interactive smoke + taxonomy review left); all claimed invariants matched code. 8 risk flags recorded in AGENT_HANDOFF §5 — headline: admin question edits are last-save-wins with no updatedAt conflict check (stale tab silently overwrites; ROADMAP decision log → WS6.1-10), case-sensitive upsertUser email match could split a mixed-case pre-created account into two rows, and public /asset approved-only serving lacks a regression test. Risk #4 closed same day: new backend end-to-end test pins that a roster admin grant survives the Google sign-in merge. Code in the same pass (Natalie verified the asterisk fix in-browser): admin add-user required asterisks now red required-star; admin 題庫/素材庫 timestamps human-readable via shared formatWhen (Drive UTC → HK time, unit-tested) and 待登記 inbox shows 更新時間 from Drive modifiedTime; question final render moved to fixed-ratio photo frames (--photo-ratio 4/3, --choice-photo-ratio 1/1, both TBC by Natalie) with clamped never-truncated stem text. Frontend 354 / build green; my AdminAssets.jsx edits ride with the parallel session's in-flight label refactor." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex wrap-up across today's chatrooms: fixed the dashboard deploy-pages rerun failure by naming the Pages artifact with `github.run_attempt` and verified the replacement deploy; read the platform/admin roadmap state and identified WS5.1-07a + WS5.1-18e as closable; recorded Natalie-passed smokes for SubTopic persistence/filtering and 日誌 AdminLog/StudentLog; captured the new WS5.1-18j log-retention guard after Natalie spotted Google Sheets growth risk; verified dashboard consistency checks; and aligned the next closeout sequence to WS5.3 interactive smoke + log retention before moving into WS5.2 seed pack → WS5.1-04 sets → WS5.1-05 placeholders → WS4.2." },
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 Natalie's revisions built + deployed (backend tpc-api-00042-r6l, Pages gh-pages 71d7815; backend 82 / frontend 351 tests, build green). (1) Dropped licence + sourceNote from the Assets schema (all SVGs in-house) — live Assets tab + Fields cleaned to 20 cols (Natalie's 1 test row preserved), migration + tests updated. (2) Manual upload: new uploadAsset endpoint writes the SVG/PNG into Drive incoming/ and the console gets an 上載素材 Upload button → registration editor prefilled; all Drive calls now pass supportsAllDrives. NEEDS a Shared Drive (service accounts have no My-Drive quota) — Natalie to create one, move Asset Library in, add tpc-sheets as Content Manager, then a 30-sec ASSET_*_FOLDER_ID env update; until then the button errors but the manual Drive-drop + 待登記 register path still works. (3) Category is now a friendly grouped 中文/English picker (editor) + friendly labels (table); backend still stores the dot-code. (4) Class A/B explained inline during registration. (5) Required fields marked with red asterisks. (6) The vague 'fix the highlighted fields' toast now names the exact fields to fix. Also confirmed WS5.1-07 subTopic is now fully LIVE (Questions gained the subTopic column, 24 cols, and the deployed backend has the read/write code). Natalie is live-testing; interactive WS5.3 smoke + WS5.3-01c category-taxonomy review continue with Natalie." },
    { date: "2026-07-06", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed WS5.1-18e Log UI browser smoke: Natalie confirmed 日誌 loads both AdminLog and StudentLog, and one admin action plus one student action produced rows. New risk captured as WS5.1-18j: append-only logs need retention/rotation before pilot traffic so AdminLog/StudentLog do not grow into Google Sheets file/API limits." },
    { date: "2026-07-06", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed WS5.1-07a SubTopic live persistence/filtering: live `Questions` has `subTopic` appended after `createdAt`, `Fields` documents free-text subTopic, Cloud Run is on `tpc-api-00041-dr9`, backend round-trip test passes, and Natalie's browser smoke passed save/reopen plus admin list filtering. ROADMAP now marks WS5.1-07/07a done for Phase 1; WS5.1-07c/07d taxonomy process/migration remain later." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Reprioritized the platform roadmap and dashboard around Natalie's engineering-first → Business Space/report sequence. ROADMAP Priority order now has Tier 0 current engineering closure (WS5.1-18e Log UI smoke, WS5.1-07 subTopic closeout, WS5.3 browser smoke), Tier 1 content/fixed-set engineering (WS5.2 lightweight 55% rule + seed-pack lane → WS5.1-04 K2/K3 QuestionSets → WS5.1-05 placeholders → WS4.2 fixed-set flow), Tier 2 pilot-gating WS6.1/WS6.2 polish, Tier 3 Business Space/report validation (WS7-06 log-only integrity → WS9-00 $99 report MVP), and Tier 4 gated full WS7/WS8/WS9-01+. Also routed WS5.1-04 question creation to WS5.2 as `source=ai_generated` variants from `real_seed` with `seedId`; no new pretend-authored content." },
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 taken LIVE (infra): ran Natalie's go-live checklist end-to-end. (1) Confirmed the Drive `Asset Library` folder is now shared to the `tpc-sheets` service account as Editor — impersonated-SA check returns canEdit:true on both incoming/ (1jyF3PUc…) and library/ (1bq84iaW…), clearing the prior 403 blocker. (2) Ran `migrate-ws5-3-assets-tab.js` against live TPC Questions via SA-impersonation token — `Assets` tab + 22 Fields rows created, header reads back OK (tab currently header-only). (3) Redeployed the backend from source: `gcloud run deploy --source` → `tpc-api-00040-r74` serving 100%, now carrying the asset endpoints + `ASSET_INCOMING_FOLDER_ID`/`ASSET_LIBRARY_FOLDER_ID` env; verified public `GET /asset` (400 no-id, 404 non-approved) and ping OK. (4) Rebuilt + deployed the frontend → gh-pages `370359c` (AdminApp bundle now carries the 素材庫 console; live site 200). Remaining = the interactive Natalie's browser smoke (sign-in admin → upload SVG to incoming/ → 登記 → 批准 → served), which needs a real admin Google session (backend requires an app-audience ID token — not CLI-scriptable), plus the human category/QC review. NB documented: a service account has no My-Drive quota, so registration only *moves* the user-uploaded file (never creates) — a future AI generator must upload under its own quota/shared drive, not as tpc-sheets. Docs updated (AGENT_HANDOFF §1/§2, ROADMAP WS5.3-01) + committed locally 6868e1d (not pushed). WS5.3 stays in-progress until the interactive smoke passes." },
  ],
};
