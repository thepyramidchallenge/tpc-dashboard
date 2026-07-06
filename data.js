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
    updated:   "2026-07-06",
    updatedBy: "Claude (Fable 5)",
    note:      "Live at thepyramidchallenge.github.io/tpc-dashboard · light theme. · Business Space (the *why*): business/ (CONSTITUTION + decisions/hypotheses/experiments). · Reports (深度報告): reports/ — periodic commissioned deep-dives.",
  },

  /* --- reports (deep-dive reports tab) -----------------------------------
   * Founder-commissioned periodic deep-dive reports. Registry only — the
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
      summary: "4-probe review of the factory-first pivot: architecture proven live (working scene-spec→SVG micro-build embedded), 25yr AIG science backs it, niche genuinely open — but 3 archetypes cover only 20-28% of real papers, the 6-12-month claim is unfalsifiable, and the factory must feed a dated warm E1, not replace it. Answers all 10 founder questions + week-1 plan, kill criteria, intern containment, parallel-track design, plus draft ledger entries (2 decisions, 1 hypothesis, 1 experiment, 1 open question — next free numbers) awaiting founder discussion." },
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
    "Engineering-first priority is reset: close current engineering evidence (WS5.3 browser smoke + WS5.1-18j log retention guard), then content/fixed-set work (WS5.2 seed pack → WS5.1-04 sets → WS5.1-05 placeholders → WS4.2), then pilot polish, then Business Space/report validation (WS7-06 log-only → WS9-00 $99 report).",

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
      next:  "Priority order refreshed in ROADMAP: Tier 0 close WS5.3 browser smoke and add WS5.1-18j log retention/rotation before pilot traffic; Tier 1 generate the WS5.2 seed pack from real_seed as ai_generated variants, assemble WS5.1-04 K2/K3 QuestionSets, add WS5.1-05 placeholders, then run WS4.2 fixed-set practice; Tier 2 pilot polish; Tier 3 WS7-06 log-only + WS9-00 $99 report validation.",
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
      next:  "Source of truth for full-stack platform work — tracks the Phase-1 roadmap. Current priority order: close WS5.3 smoke evidence and WS5.1-18j log retention/rotation, then WS5.2 seed-pack lane → WS5.1-04 sets → WS5.1-05 placeholders → WS4.2 fixed-set flow, then pilot-gating WS6.1/WS6.2, then Business Space/report validation via WS7-06 + WS9-00.",
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
      { title: "WS5.3 素材庫 — interactive founder smoke", project: "tpc-online-platform", owner: "natalie", note: "Infra is LIVE (Assets tab migrated, backend tpc-api-00040-r74 + ASSET_* env, GET /asset verified, console on gh-pages 370359c, Drive shared to tpc-sheets SA). Do the browser loop signed in as admin: drop <assetId>.svg in incoming/ → 待登記 → 登記 → 提交審批 → 批准 → GET /asset serves it; 退回 needs a note; re-check the 3 failed pilot SVGs. Then the human category/QC review." },
      { title: "WS5.1-18j — Log retention guard", project: "tpc-online-platform", owner: "natalie", note: "Founder spotted the append-only log growth risk after WS5.1-18e passed. Before pilot traffic: define row soft caps and add archive/rotation so AdminLog/StudentLog cannot hit Google Sheets limits." },
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS5.2 seed pack → WS5.1-04 sets", project: "tpc-online-platform", owner: "natalie", note: "Priority Tier 1. No new pretend-authored content: document the lightweight 55% rule, generate K2/K3 ai_generated variants from real_seed with seedId provenance, approve/import them, then assemble 3-5 K2 + 3-5 K3 non-real_seed QuestionSets." },
      { title: "WS5.1-05 + WS4.2 fixed-set flow", project: "tpc-online-platform", owner: "natalie", note: "After sets exist: add/verify placeholder handling for the 69 missing per-choice images, then run a fixed QuestionSet end-to-end through Practice/mock and save a session tagged to the set id." },
      { title: "WS6.1 + WS6.2 — pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical polish before real users: accuracy consistency, R8/concurrency smoke, fallback audit, first-time-user default, and pilot-relevant UI/copy/usability/visual/log-abnormal-banner review → WS6.1-11 pilot." },
      { title: "WS7-06 + WS9-00 — report validation (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier starts after engineering substrate exists. Co-ship WS7-06 log-only integrity with the first online challenge/report path, then WS9-00 $99 one-off report MVP via the Sheets→Affinity pipeline. Full WS7/WS8/WS9-01+ remains gated on E1/E2." },
      { title: "Deploy pyramid-site",         project: "pyramid-site",        owner: "max",     note: "Vercel/Netlify once parity is reached." },
    ],
    blocked: [
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
        { label: "WS6.1-18 · API surface hardening", state: "done" },
        { label: "WS6.1-19 · Sheets reliability", state: "done" },
        { label: "WS6.1-20 · Observability", state: "done" },
        { label: "WS6.1-21 · Backend test gaps", state: "done" },
        { label: "WS5.1 · Admin UI & content platform", state: "active" },
        { label: "WS5.2 · Question factory (seed-pack lane active; recurring AI hold)", state: "active" },
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
        { label: "Migrate Sheets → Firestore/Supabase (at WS7)", state: "todo" },
        { label: "AI generation → WS5.2 (questions) / WS5.3 (SVG assets)", state: "hold" },
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
    end

    %% ---- backend ----
    subgraph BE["Backend"]
      auth["Google Identity Services<br/>Cloud Run token verification"]:::be
      api["Cloud Run API<br/>(SheetsBackend · Node)<br/>asia-east2 · live"]:::be
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
    adapter --> api
    api --> sheets
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
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 full review (docs vs code) + founder-directed polish, committed f0fdf2c (private main; NOT deployed to Pages — founder to authorize). Review verdict: WS5.1 ~95% (deferred items already tracked), WS5.2 design-only, WS5.3 ~70% (interactive smoke + taxonomy review left); all claimed invariants matched code. 8 risk flags recorded in AGENT_HANDOFF §5 — headline: admin question edits are last-save-wins with no updatedAt conflict check (stale tab silently overwrites; ROADMAP decision log → WS6.1-10), case-sensitive upsertUser email match could split a mixed-case pre-created account into two rows, and public /asset approved-only serving lacks a regression test. Risk #4 closed same day: new backend end-to-end test pins that a roster admin grant survives the Google sign-in merge. Code in the same pass (founder verified the asterisk fix in-browser): admin add-user required asterisks now red required-star; admin 題庫/素材庫 timestamps human-readable via shared formatWhen (Drive UTC → HK time, unit-tested) and 待登記 inbox shows 更新時間 from Drive modifiedTime; question final render moved to fixed-ratio photo frames (--photo-ratio 4/3, --choice-photo-ratio 1/1, both TBC by founder) with clamped never-truncated stem text. Frontend 354 / build green; my AdminAssets.jsx edits ride with the parallel session's in-flight label refactor." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex wrap-up across today's chatrooms: fixed the dashboard deploy-pages rerun failure by naming the Pages artifact with `github.run_attempt` and verified the replacement deploy; read the platform/admin roadmap state and identified WS5.1-07a + WS5.1-18e as closable; recorded founder-passed smokes for SubTopic persistence/filtering and 日誌 AdminLog/StudentLog; captured the new WS5.1-18j log-retention guard after the founder spotted Google Sheets growth risk; verified dashboard consistency checks; and aligned the next closeout sequence to WS5.3 interactive smoke + log retention before moving into WS5.2 seed pack → WS5.1-04 sets → WS5.1-05 placeholders → WS4.2." },
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 founder revisions built + deployed (backend tpc-api-00042-r6l, Pages gh-pages 71d7815; backend 82 / frontend 351 tests, build green). (1) Dropped licence + sourceNote from the Assets schema (all SVGs in-house) — live Assets tab + Fields cleaned to 20 cols (founder's 1 test row preserved), migration + tests updated. (2) Manual upload: new uploadAsset endpoint writes the SVG/PNG into Drive incoming/ and the console gets an 上載素材 Upload button → registration editor prefilled; all Drive calls now pass supportsAllDrives. NEEDS a Shared Drive (service accounts have no My-Drive quota) — founder to create one, move Asset Library in, add tpc-sheets as Content Manager, then a 30-sec ASSET_*_FOLDER_ID env update; until then the button errors but the manual Drive-drop + 待登記 register path still works. (3) Category is now a friendly grouped 中文/English picker (editor) + friendly labels (table); backend still stores the dot-code. (4) Class A/B explained inline during registration. (5) Required fields marked with red asterisks. (6) The vague 'fix the highlighted fields' toast now names the exact fields to fix. Also confirmed WS5.1-07 subTopic is now fully LIVE (Questions gained the subTopic column, 24 cols, and the deployed backend has the read/write code). Founder is live-testing; interactive WS5.3 smoke + WS5.3-01c category-taxonomy review continue with the founder." },
    { date: "2026-07-06", who: "Founder + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed WS5.1-18e Log UI browser smoke: founder confirmed 日誌 loads both AdminLog and StudentLog, and one admin action plus one student action produced rows. New risk captured as WS5.1-18j: append-only logs need retention/rotation before pilot traffic so AdminLog/StudentLog do not grow into Google Sheets file/API limits." },
    { date: "2026-07-06", who: "Founder + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed WS5.1-07a SubTopic live persistence/filtering: live `Questions` has `subTopic` appended after `createdAt`, `Fields` documents free-text subTopic, Cloud Run is on `tpc-api-00041-dr9`, backend round-trip test passes, and founder browser smoke passed save/reopen plus admin list filtering. ROADMAP now marks WS5.1-07/07a done for Phase 1; WS5.1-07c/07d taxonomy process/migration remain later." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Reprioritized the platform roadmap and dashboard around the founder's engineering-first → Business Space/report sequence. ROADMAP Priority order now has Tier 0 current engineering closure (WS5.1-18e Log UI smoke, WS5.1-07 subTopic closeout, WS5.3 browser smoke), Tier 1 content/fixed-set engineering (WS5.2 lightweight 55% rule + seed-pack lane → WS5.1-04 K2/K3 QuestionSets → WS5.1-05 placeholders → WS4.2 fixed-set flow), Tier 2 pilot-gating WS6.1/WS6.2 polish, Tier 3 Business Space/report validation (WS7-06 log-only integrity → WS9-00 $99 report MVP), and Tier 4 gated full WS7/WS8/WS9-01+. Also routed WS5.1-04 question creation to WS5.2 as `source=ai_generated` variants from `real_seed` with `seedId`; no new pretend-authored content." },
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 taken LIVE (infra): ran the founder go-live checklist end-to-end. (1) Confirmed the Drive `Asset Library` folder is now shared to the `tpc-sheets` service account as Editor — impersonated-SA check returns canEdit:true on both incoming/ (1jyF3PUc…) and library/ (1bq84iaW…), clearing the prior 403 blocker. (2) Ran `migrate-ws5-3-assets-tab.js` against live TPC Questions via SA-impersonation token — `Assets` tab + 22 Fields rows created, header reads back OK (tab currently header-only). (3) Redeployed the backend from source: `gcloud run deploy --source` → `tpc-api-00040-r74` serving 100%, now carrying the asset endpoints + `ASSET_INCOMING_FOLDER_ID`/`ASSET_LIBRARY_FOLDER_ID` env; verified public `GET /asset` (400 no-id, 404 non-approved) and ping OK. (4) Rebuilt + deployed the frontend → gh-pages `370359c` (AdminApp bundle now carries the 素材庫 console; live site 200). Remaining = the interactive founder browser smoke (sign-in admin → upload SVG to incoming/ → 登記 → 批准 → served), which needs a real admin Google session (backend requires an app-audience ID token — not CLI-scriptable), plus the human category/QC review. NB documented: a service account has no My-Drive quota, so registration only *moves* the user-uploaded file (never creates) — a future AI generator must upload under its own quota/shared drive, not as tpc-sheets. Docs updated (AGENT_HANDOFF §1/§2, ROADMAP WS5.3-01) + committed locally 6868e1d (not pushed). WS5.3 stays in-progress until the interactive smoke passes." },
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.1-02f version-history view — authored the compare/inspect implementation: new pure `src/admin/versionCompare.js` (snapshotToFields / questionFromDraft / diffFields) + the AdminEditor history panel now expands each approved edition's full snapshot fields and diffs two editions (vN ↔ another version or the live working copy) with changed-field highlighting; 5 unit + 2 behavior tests, frontend suite + build green. Confirmed LIVE on gh-pages (admin chunk AdminApp-DBxKjNjs.js serves the compare/inspect code, 98 kB = 02f-only, no asset console); interactive founder smoke (approved question with ≥2 versions) in progress with founder. Also did the founder-requested deferred-item routing pass in ROADMAP — every WS5.1 [~] item now names a concrete destination: WS5.1-02e→WS6.2-03, 02d/03e→WS6.2-01, 01h/03d→new WS8-10 (report-time snapshot stamping), 01d→new WS6.1-22 (admin batch ops), 01g→new WS6.1-23 (large-bank scale); rollback/copy split to WS5.1-02g. Then diagnosed a live bug: 子主題 SubTopic is a REQUIRED editor field but the Questions sheet has no subTopic column (and normalizeQuestionRow drops it), so it silently never persists — fix pending founder decision (persist vs make-optional). Shared working tree with parallel Codex/Fable sessions." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 asset library built end-to-end in source per founder plan (manual input now, AI generation later — same registry/QC pipeline for both producers). This session: Drive `Asset Library` folder tree created under TPC online platform (incoming/ · library/{content-objects,math,logic,pages} · source-exports; ids in sheets-template README); backend Assets registry on TPC Questions (adminListAssets/upsertAsset/transitionAsset with the question lifecycle + server-owned reviewNote, 待登記 inbox over Drive, admin base64 preview, public approved-only GET /asset, admin-audit + 日誌 asset.* vocabulary; backend 69→79 tests); full 素材庫 admin console replacing the placeholder tab (ERP table with Drive thumbnails, filters, batch Approve, inbox 登記 flow, asset editor with QC checklist + lifecycle buttons; frontend 348 tests, build green, admin chunk still lazy); template CSV + idempotent migrate-ws5-3-assets-tab.js. NOT live: Assets tab migration was permission-blocked this session — founder checklist in AGENT_HANDOFF §2 item 2 (share Drive folder to tpc-sheets SA as Editor → run migration → set ASSET_*_FOLDER_ID env → deploy both → smoke incl. the 3 failed pilot SVGs). No status flips: WS5.3 stays in-progress until the live smoke. Coordination note: this ran alongside the Codex session in the same tree — Codex's commits 76bb7bb/9d0ef56 swept this session's asset files into history; content is correct, attribution is mixed." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Updated and published platform source/docs for WS5.1-02f version-history compare/inspect and the WS5.3 Asset Library foundation: private admin repo pushed through 47aa0aa; public frontend deployed to gh-pages 69b74d8 from source/docs 2ece136 (live index-CcRK4Cp1.js + AdminApp-BOrCk5_w.js). Asset proposal includes Drive-backed Assets registry/API, approved-only /asset serving, frontend asset editor + 素材庫 console scaffolding, template CSV + migration script, and docs/handoff updates. Validation: backend 79 tests, frontend 343 tests, frontend build passes. Live asset endpoint smoke still waits on Assets sheet + Drive folder/env migration." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex day wrap-up across sessions, not just this chat: (1) `f7daa5c` fixed the admin question editor/list workflow after live-smoke findings (backend validation test tweaks + AdminApp/AdminEditor/adminValidation/styles updates); (2) `03c03a2` broke the oversized unfinished WS5 ROADMAP work into explicit child checklist IDs `WS5-01a`...`WS5-18g` without marking tasks complete; (3) `fdf7ecf` built WS5-18 backend activity logs — superadmin-gated `adminListLogs`, AdminLog/StudentLog fire-and-forget dual-write hooks, template CSVs, and `migrate-ws5-18-log-tabs.js` — with backend suite 61→68, followed by `0944b8d` docs noting live migration + Cloud Run deploy are pending founder approval; (4) diagnosed the public Pages failure email for run 28779435632 as a GitHub-side deploy flake (`Deployment failed, try again later`), while latest gh-pages run 28780192157 succeeded on `15a1102` and live site serves `assets/index-DA81w3w2.js`. Dashboard updated + changelog rotated." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Toast colour rule shipped per founder: every top pop-up now follows red = error, green = pass/success, white = saved draft. New green success tone (已提交審批 as requested, plus 已批准並建立 vN / 已退回 / 已停用 / 已更新 N 題 / admin grant·revoke / user added); saved-draft toasts stay white; all blocking or failed messages moved to red (validation prompts, missing 審批備註, no-applicable-transition, backend-not-ready, sign-in expired, 沒有題目, sign-up field checks); legacy warn tone renders red so nothing is ever off-palette. Rule pinned by tests. Clean-room commit be4e27e (excluded the parallel session's in-flight 5-option/version-cell work); frontend 300 / backend 60 / build green; Pages deployed from a clean worktree → gh-pages 99ce687 (bundle index-zbKgAeu4.js), live asset verified; backend unchanged (tpc-api-00034-2qt). Also pre-decides the colour tier of WS6.2-01 message-class review." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Founder's live-smoke blocker fixed + evening production deploy. 儲存草稿 on a half-finished question was rejected by the full validation prompt (請填寫題目文字/至少需要兩個選項/請指定正確答案); decision + fix: Save draft = working-copy save with PARTIAL validation (only format/length problems on filled fields block it), while 提交審批/重新提交審批 keep the full required-fields gate — mirrored server-side (upsertQuestion partial; transitionQuestion now fully validates on →review as well as →approved with validation_failed-prefixed errors), so a half-finished draft parks any time but can never enter the review queue or go live. Coordination note: committed via selective staging + clean-worktree verification to avoid shipping the parallel session's then-unfinished adminTabs refactor; once that landed (b587aee), redeployed BOTH from clean main c9eb7c5 → production now = Cloud Run tpc-api-00034-2qt + Pages 0c9a36a (bundle index-XSKIodC4.js), ping + asset checks green, carrying lenient saves AND role-derived admin tabs together. Tests at deploy: backend 60 / frontend 299 / build green. Founder can resume the WS5-17 smoke; the other smoke findings (save/reopen blocker, 5-option request, pagination, SubTopic filter) are recorded in ROADMAP by the parallel session." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5-16 adminTabs RETIRED per founder: authorization is a backend setting recorded in md, not controllable in the frontend. Admin tab access is now derived from Users.role alone (student=none; admin=題庫+素材庫; superadmin=all incl. 管理員+日誌) — the per-admin tick boxes, adminSetAdminTabs action, and the Users.adminTabs column are all gone (live column deleted via SA path, read-back verified; Fields row removed and the role row documents the rule; templates mirrored). adminListUsers is now superadmin-only for reads AND mutations. Rule recorded in ROADMAP decision log + sheets-template README + handoff. Tests: backend 60 / frontend 299 / build green (source b587aee). Source-only — redeploy Cloud Run + Pages before the WS5-17 smoke (deployed revs still show tick boxes; ticking fails harmlessly on the missing column)." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 field-rules pass implemented per founder (source db56c74+0798534; the parallel session's deploy entry below attributed it to Codex — it was this Claude session). Questions tab: frontend limits aligned to backend (prompt 1000, id 120) with live n/limit character counters; topic dropdown grouped by domain with bidirectional domain↔topic auto-populate; reviewNote keep-but-clear (approve shows a confirm quoting the note — editor/pencil/batch — then keeps it prefixed 已解除 cleared instead of wiping); new server-owned createdBy/createdAt authorship columns (stamped once on insert, 作者/最後更新 list columns + editor line). Admin tab: studentName = English letters ≤120 required at student sign-up (new/changed values only so legacy names keep signing in; setup placeholder now Chan Siu Ming); 日誌 Log tab now superadmin-only (WS5-18 gate). Tests: backend 61 / frontend 298 / build green; behaviors test-pinned. Full record docs/FIELD_RULES_2026-07-06.md. Open item: option-label soft warning (~80 chars) at UI stage; founder to review 素材庫 (WS5-08/09/10) + 日誌 feed (WS5-18) proposals later. No status flips (WS5-17 live smoke pending)." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "",
      summary: "CONSTITUTION: added 'The polish floor (group-wide DNA)' per founder transcription — customer-facing surfaces must feel finished/premium (完成品, never 半完成品) across HKYCAA / Team Futura / TPC; for TPC doubly binding since the product IS trust (framework question 2). Scope is variable, polish is not (cut features, don't expose half-built ones); not a licence to slip ship dates (shrink scope instead); customer 接觸面 only — internal tools optimise for iteration speed; includes the first-time-customer test. Mirrored into tf-dashboard CONSTITUTION same session (with an interaction rule for TF's launch-risk-tier decision there)." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "PRODUCTION DEPLOY (founder-approved): Cloud Run tpc-api-00032-8l5 (100%, ping verified) + Pages a3cdd46 (bundle index-CuQp5Ia8.js, admin chunk AdminApp-DhICkYOQ.js; built from source 0798534) — all WS5 layers now live together: the 2026-07-05 review flow, the 2026-07-06 version policy (snapshot-on-approve QuestionVersions shelf), WS5-16 per-tab permissions, and Codex's field-rules pass (limits alignment, domain↔topic autofill, reviewNote keep-but-clear with 已解除 prefix, createdBy/createdAt authorship, English-only studentName, superadmin-only 日誌). Pre-deploy checks: whole tree green (backend 61 / frontend 298 / build). Same session also completed the remaining live-sheet migration (createdBy V1 + createdAt W1 via tpc-sheets SA impersonation, read-back verified) after spotting Codex's pending-migration note — live Questions header now runs through createdAt at W1. Also fixed the failing workspace-check CI (meta.updated stamp). Status flips deliberately NOT made: WS5-17 live smoke is the remaining gate before closing WS5-01/02/03/16." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Live TPC Questions workbook migrated for the version policy (docs e45e1a2): after founder gcloud reauth, applied via the same tpc-sheets service-account impersonation path Codex used — Questions.version added at U1, new QuestionVersions tab created (sheetId 205032640; header questionId·version·approvedAt·approvedBy·approvedByUid·snapshot), and the workbook's own Fields tab now documents reviewNote, version, and all six QuestionVersions columns (rows 36–43; reviewNote had been undocumented since its 07-05 addition). All writes read-back verified. The deploy rider from the previous entry is CLEARED — live sheets are ready; remaining for WS5-17 = redeploy Cloud Run + Pages (current revs predate the version layer), then the live smoke incl. v1/v2 minting + 版本歷史." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 question version policy decided AND built per founder (source 680edf1, pushed; backend 59 / frontend 293 / build green — source-only on top of the deployed tpc-api-00031-qbx, so no status flips). Core rule 儲存改工作稿，批准出新版本: the live Questions row is the working copy (saves overwrite it in any editable status and are never snapshotted — saving an unapproved edit without resubmitting keeps 退回 status); only a →approved transition mints a version. version = approval count, server-owned; every approval appends a full-row snapshot to the new append-only QuestionVersions tab and ALL approved versions are retained so student attempts stay auditable (the founder's v0/t-1/t idea becomes the history view's default display, not a storage cap); approvals fail closed if the tab is missing. UI: 版本 panel by the editor status line, 版本歷史 read-only history, save toasts say 未建立新版本, approve toast names the minted vN, sortable 版本 list column. Founder ratifications also recorded in the ROADMAP decision log (draft+unapproved edits confirmed; no unapproved→draft edge; approved rework = unapprove first; column-width persistence accepted as follow-up). DEPLOY RIDER for WS5-17: before the next Cloud Run deploy, append version (U1) to live Questions and create the QuestionVersions tab — approvals fail closed without it." },
    { date: "2026-07-05", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Fixed the live missing 管理員 tab for the owner without changing the founder-preferred order (題庫 → 素材庫 → 管理員 → 日誌). Root cause: the live Users row for info@pyramidchallenge.org was stale (`role=admin`, blank `adminTabs`) while `SUPER_ADMIN_EMAILS` made the account superadmin server-side; `getUser` returned the raw row, so the frontend cached only questions access. Source `5257544` makes Cloud Run `getUser` resolve env superadmin/admin roles and serialized tabs before returning, exports it for regression coverage, and adds a frontend account-access refresh hook so cached users update after load/sign-in. Deployed backend Cloud Run `tpc-api-00031-qbx` (100%) and public Pages `95a2a3f` with bundle `index-RE1NZKix.js`; tests: backend server suite 57 pass, focused frontend admin/app-flow 90 pass, production build green, live ping healthy, Pages now serves the new bundle." },
    { date: "2026-07-05", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Fixed the live Google Sheet headers after reading Claude's latest no-AdminEmails storage revision. Local ADC was stale (`invalid_rapt`), so Codex used the Cloud Run `tpc-sheets` service-account impersonation path to apply the same columns-only migration via Sheets API: `TPC Customers.Users.adminTabs` added/verified at `L1`, and `TPC Questions.Questions.reviewNote` added/verified at `T1`. No `AdminEmails` sheet was created. Dashboard focus/project/board now show columns fixed; WS5-17 live smoke is the remaining step." },
    { date: "2026-07-05", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5-16 storage finalized per founder + production redeployed. Founder decisions applied through the day: accounts console mirrors the backend Users sheet exactly (uid-first columns, drag-resizable widths, 題庫-pattern filters); Linked = has a Google-auth uid (derived server-side; manual adds show N until first sign-in); 新增用戶 Add user is a full editor-style page requiring the table's fields per backend rules (adminCreateUser writes a real Users row); per-admin tab tick boxes (題庫/管理員) on admin rows decide which admin tabs each account shows — and the final storage revision: NO separate AdminEmails sheet, every grant/revoke/tick writes the Customers Users tab directly (role + adminTabs cells; reviewNote likewise just a new Questions column; provenance = admin_audit Cloud Logging). Source `47405c6` (backend 56 / frontend 288 / build green) deployed to production: Pages `7f52c05` (bundle index-Bsjg9oS6.js, live-verified) + Cloud Run `tpc-api-00030-9p2` (super-admin gates smoked). Original outstanding item was the columns-only migration; Codex completed it later the same day. Board/focus updated; WS5 roadmap stays active pending the WS5-17 live smoke." },
    { date: "2026-07-05", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Dashboard catch-up for today's WS5 platform work: `f08ac8b` made the full founder-approved question review flow code-complete (draft→review→approved/unapproved, unapproved edit+resubmit, approved→unapproved/disabled, disabled terminal; server-owned `reviewNote`; status-driven editor buttons; read-only review/approved views; sortable/safer question list; Assets and Log placeholder tabs; WS5-16 per-admin tab permissions/adminCreateUser/adminSetAdminTabs included in the same green tree). Verification recorded in platform docs: frontend 288 pass, backend 57 pass, build green. `2b30a50` added the idempotent live Sheet migration script and recorded production deploy state: Pages `gh-pages` `beb4c8c` (bundle `index-DSMkLxtk.js`, admin chunk `AdminApp-BVM08NUk.js`) and Cloud Run `tpc-api-00029-lnz` with `SUPER_ADMIN_EMAILS=info@pyramidchallenge.org`; live smoke confirmed superadmin-gated users/permission actions are no longer unknown actions. Remaining blocker: run `cloud-run/scripts/migrate-ws5-16-sheets.js` against live Customers/Questions to create/update `AdminEmails.tabs`, append `Users.adminTabs`, and append `Questions.reviewNote`; until then grant/tick actions fail on the missing tab and reviewNote/adminTabs values may be dropped by header mapping. Dashboard focus/project/board/roadmap updated accordingly; full WS5 closure waits for WS5-17 live smoke after migration." },
    { date: "2026-07-05", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 題庫 full question review flow implemented per founder decisions (source f08ac8b, pushed to origin; code-complete + all suites green — NOT deployed, so no board/roadmap status flipped). New state machine replaces the interim draft→approved shortcut: draft→提交審批(review)→批准/退回(approved/unapproved); 退回 requires a 審批備註 review note (new server-owned reviewNote column — now a separate field from the student-facing 解釋 explanation, fixing the mislabeled column); unapproved rows stay editable and 重新提交審批 back to review; approved→退回/停用; disabled terminal (doc contradiction resolved: ROADMAP wins, disabled→approved dropped from handoff/architecture). Editor buttons are status-driven; review/approved open read-only; batch Approve applies to review rows only and 批准 joins the pencil menu on review rows. List UX: selection clears on any filter change (hidden-row batch footgun closed), sortable column headers, no wasted question fetch on other admin tabs, a11y search-help fix, bilingual approval-flow banner. New placeholder tabs per founder plan: 素材庫 Assets 6th + 日誌 Log 8th. Deploy rider (WS5-17): live Questions sheet needs a reviewNote column appended before Cloud Run/Pages redeploy. Ran alongside the parallel WS5-16 per-tab-permissions session; combined tree green (frontend 288, backend 57, build ok)." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "",
      summary: "Deep-dive report #2 published to the Reports tab (visual-question-factory): responds to the founder's factory-first strategic update after the ChatGPT discussion. Method: 4 parallel probes — all 40 real TPC01 items archetype-classified (proposed 3 archetypes cover only 20-28% of real papers; comparison/extremum 4th + text-arithmetic track lift to >60%), a WORKING scene-spec→deterministic-SVG micro-build (rendered sample embedded in the report; solver = pure code for these archetypes), prior-art research (25yr AIG literature validates the architecture; the K2/K3-visual-bilingual-contest niche is genuinely unoccupied — niche economics, not infeasibility; moat = calibrated bank not engine), and a red team on the pivot. Verdict: build the MINIMAL factory in 1-2 weeks, its first output IS the E1 paper; the 6-12-month-exposure claim is unfalsifiable as stated and must not delay a dated warm-cohort E1; honest KPI = total human min (incl. rejects) per approved question ≤10 vs a timed manual control arm. Includes week-1 plan, kill/double-down criteria, intern containment (renderer/tooling only, never prompts/QC/answer keys), parallel-track design (factory = new standalone private repo, WS5-04 sheet-script import contract, Natalie's repos untouched), and draft ledger text for discussion (windowed-challenge decision + factory-supply-line decision + factory-cost hypothesis + factory-MVP experiment + glyph-licensing open question, at the next free D/H/E/Q numbers — deliberately NOT written into the ledgers yet). Nothing outside reports/+data.js touched per founder instruction." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "",
      summary: "NEW REPORTS TAB (third view beside Workspace & Business space): periodic founder-commissioned deep-dive reports — registry in data.js reports[], content in reports/<id>.md, rendered exactly like the Business space (marked, pills nav, #reports hash). First report published: 2026-07-03 Strategy deep-dive #1 (3 deep-dive agents + 2 red-team skeptics, ~418K tokens): evidence audit (H2 unvalidated carries 100% of online revenue), core insight (bottleneck moved from engineering to content/trust/E1-date), HK competitor reality check, 3/6/12-month moves, scale flywheel, what-breaks-first ranking, cheap-experiment list. Per founder: additive only — focus/board/roadmap deliberately NOT touched (digest first); the stale items found (focus still claims WS5-00+00b deploy pending; WS5 roadmap state todo vs actually active; entrance-qr-scan placeholder note) are recorded in the report §1, to fix after founder review. Two verified act-now hazards recorded in report §0: TPC01 papers exposure (public-repo history purge needed; TPC01 burned for scoring) and the stale local platform clone (deploy-revert footgun; fix credentials + runbook rev guard)." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Founder UX requests shipped (gh-pages 8e32d56, bundle index-BOMVQ2mB.js): 管理 Admin is now the 5th tab after Bookmarks — rendered only for server-stamped admin accounts, students keep exactly 4 tabs, the admin code stays in its lazy chunk, and the redundant Profile entry button was removed. The admin question list was restyled as a POS/inventory-style console: clickable per-status stat cards (total/draft/review/approved/unapproved/disabled) that sync with the status filter, a search box across id/topic/prompt text, and a dense inventory table (ID + stem preview, level, domain/topic, type, difficulty, source, status chip, per-row Edit + lifecycle actions) with horizontal scroll on narrow screens. Also: the generic 'Something went wrong / Retry' the founder hit now reads 管理後台尚未啟用 'admin backend not ready (WS5-03 in development)' — the honest state until the Codex backend track deploys adminListQuestions/transitionQuestion. Suite 255 pass; demo browser smoke verified tab order, stat-card filtering, and the table." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "LIVE INCIDENT fixed + deployed (gh-pages a668f17, bundle index-BvHH9ujz.js): founder sign-in showed '未能儲存你的帳戶資料 / check your connection'. Cloud Logging showed 5× upsertUser → 401 'auth required' with zero successful verifyGoogleToken all day — the app had routed a stale local profile (stored user missing region, no session token) into the setup screen, whose save could only fail, and the error copy wrongly blamed the connection. Backend behaved correctly. Frontend fix: completeSetup now uses the refresh-aware getWritableIdToken(); token-less or 401/403 setup saves route back to sign-in with honest copy ('sign in with Google again') keeping typed values; the missing-region effect no longer opens setup without a token. 3 incident regression tests added (one old test had asserted the buggy null-token save); suite 251 pass; live bundle verified. Founder action: reload + sign in again. Note: this deploy also carries the WS5 admin frontend chunk — the Admin screen fails gracefully until the WS5-03 backend deploys. Feeds WS6.2-01 (auth vs connection message classes)." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5-00 + WS5-00b deployed to production Pages and live-confirmed: gh-pages fa23362, bundle index-B2lAt2fq.js (structure refactor + bilingual error layer). Deploy was built from the committed pre-admin state (3b35375) via a clean git worktree because the working tree carried WS5 admin work-in-progress. Gotcha recorded in AGENT_HANDOFF: two Pages builds of the first artifact push failed with a bare deployment error and a stuck re-run; pushing a fresh gh-pages commit fixed it in 26s. Same session recorded founder decisions: WS5-03 edit-while-approved = disable first; WS5-05 images = placeholder first (real assets stage 2). All pending local commits pushed (platform origin/main + dashboard)." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 frontend admin track built (Claude track of the agreed Codex/Claude split; not deployed): WS5-14 done — all admin code in src/admin/ behind React.lazy, emitting a separate ~18.5 kB AdminApp chunk students never download, with the hidden Pages-safe #/admin hash route (deep-link honoured through sign-in) and a Profile → Manage-questions entry gated on the server-stamped Users.role==='admin'. WS5-01 frontend half: question list with level/domain/type/source/status filters and lifecycle buttons drawn from the edge-table mirror (server stays the authority), friendly invalid_transition/validation_failed/not_found handling, sign-in ask + not-authorized guards. WS5-02 frontend half: quiz/single_choice editor with bilingual validation, content-only saves (never status; disable_first explained per the founder rule), and a student-identical live preview through the same normalizer + renderer registry students use. WS5-07 subTopic placeholder field included. 16 new tests → frontend suite 248 pass; build green; demo-mode browser smoke passed with clean console. Blocked on WS5-03 backend (Codex, in flight) for the live list → edit → approve → serve smoke that closes WS5-01/02." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Docs cleanup pass (founder request): AGENT_HANDOFF condensed 440 → 226 lines — the Recent-history section (255 lines of same-day entries) consolidated into 5 dated entries + an earlier-pointer, with per-task detail intentionally left to ROADMAP acceptance notes and git log; superseded deploy bullets pruned from its status sections. sheets-template/WS4_LIVE_SHEET_MIGRATION.md retired: its unique live content (the three production spreadsheet IDs, canonical Phase-1 value rules, DraftSessions lifecycle notes) moved into a new 'Live workbooks (production)' section of sheets-template/README.md; the completed-migration narrative went to git history. Repo md count 14 → 13; no plan, scope, or status meaning changed." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Roadmap↔docs sync pass across all repo markdown, with live verification: frontend suite re-run 232/232 (0 skipped), backend 37/37, and production Pages confirmed still serving pre-refactor cc64b52 — so the WS5-00+00b joint deploy is genuinely the one pending action. Status corrections only, no plan changes: ARCHITECTURE header still claimed only WS0–WS4.1 built (now WS0–WS4.3 + upgrade sprint); ROADMAP's WS4.3 'latest deploy/test' block pinned superseded numbers (now points at AGENT_HANDOFF §1); Done-reference line now includes WS5-00/00b and WS6.1-18..21; cloud-run README pinned tpc-api-00014-nwg as the current rev (now handoff-pointed, 00027-6tg as of today); prototype README claimed 138 tests / 1 skipped (now 232/0, noting the skipped case was removed while the WS5-05 content gap stays open)." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 plan reviewed and execution split agreed (recorded in ROADMAP WS5 section): backend track for Codex in cloud-run only (WS5-03 state machine + new transitionQuestion + adminListQuestions -> WS5-02 backend validation -> WS5-13 exposure counters) and frontend track for Claude in prototype-v0.2 only (WS5-14 lazy /admin route -> WS5-01 admin list/lifecycle UI -> WS5-02 editor with live preview -> WS5-07 subTopic placeholder). Key review findings folded into the contract: no admin read path existed (listQuestions always student-filtered), upsertQuestion accepted arbitrary status writes (now content-only by contract), admin role already server-stamped on Users rows, WS5-04 seed imports must bypass the rate-limited API via sheet scripts, WS5-13 increments only in createDraftSession. Frontend builds against mocks until WS5-03 deploys, then end-to-end smoke." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Founder UI-review backlog added to WS6.2 (WS6.2-07..11): review UID combination (scope TBC — confirm before starting); differentiate the quiz question-number box from the answer-option box (currently too similar); Home dashboard review — decide table-like results layout and label every % as accuracy vs completion rate (currently ambiguous to users); UAT all button state changes + study each button's customer journey; align monochrome glyphs across all pages, review colour scheme and button visual styling. WS6.2-03 widened from button renaming to ALL UI text, with pop-up/toast copy reviewed jointly with WS6.2-01." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS6 renumbered per founder: former WS6 is now WS6.1 · QA/polish/launch (WS6-NN → WS6.1-NN, suffixes unchanged), and WS6.2 · UI review is the home of ALL UI-review work — WS6.2-01 notify-layer message-class review + WS6.2-02 whole-app screen review (ex WS6.5-01/02), plus four moved-in tasks: WS6-04→WS6.2-03 copy review, WS6-05→WS6.2-04 timer colouring, WS6-09→WS6.2-05 usability/a11y (incl. axe rider), WS6-12→WS6.2-06 unselect decision. Swept all repo docs (incl. dated entries), backend test titles (37/37 green), and dashboard live fields; older changelog entries below keep pre-renumber IDs (append-only log) — the 1:1 mapping lives in the ROADMAP decision log. This consciously supersedes the IDs-stay-stable rule for WS6 only." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UPGRADE_PLAN_2026-07.md deleted per founder (keep docs/ lean; already merged into ROADMAP; full plan text retrievable via git show 8a8e3b4). New ROADMAP phase WS6.5 · UI review created to hold the WS5-00b follow-up: the alert→toast / confirm→sheet conversion was mechanical, so WS6.5-01 must decide per message class whether a pop-up toast, blocking sheet, or inline state is the right presentation (plus toast TTL/stacking, retry affordances, bilingual tone for young readers), and WS6.5-02 runs a whole-app screen-by-screen UI review once the WS5 admin screens exist — sequenced after WS5 + WS4.2 and before the WS6-11 pilot." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Review upgrade sprint verified + closed; UPGRADE_PLAN_2026-07.md merged into ROADMAP and reduced to an archive stub (no parallel task truth, D8 spirit). Independent verification of the sprint output passed: backend suite 37/37 locally, live ping healthy, CORS deny/allow behavior confirmed against production, ADMIN_EMAILS defaults gone from source, WS5-00 structure confirmed on disk (App.jsx 465 lines; 11 screen components + 4 hooks). Task evidence now lives in ROADMAP acceptance notes (WS5-00/00b, WS6-18..21 all flipped with deploy revisions; WS6-09 carries the a11y rider; WS5-15 founder-held; WS7-13 deferred to the DB decision per founder), runtime knobs in cloud-run/README, ops state in AGENT_HANDOFF. Remaining sprint action: deploy WS5-00+00b together to Pages via deploy.sh." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5-00b bilingual error layer complete: zero window.alert and zero window.confirm left in the frontend. New src/lib/notify.js (notify / notifyError(context) / confirmDialog, single-flight) + src/components/Notices.jsx render young-learner bilingual toasts (with retry actions) and an in-app confirm bottom-sheet; sign-out and submit-with-unanswered now use the sheet, and WS5 admin CRUD will inherit notifyError. Frontend tests 232 pass (new sign-out-cancel case; failed-start and failed-profile-save asserted through the component); build passes; demo-mode browser smoke verified toast + both confirm sheets. Track B (WS5-00 + WS5-00b) is code-complete — deploy both to Pages via deploy.sh pending. Post-refactor review notes recorded: protect useQuiz from regrowing, keep admin routing out of App.jsx via the WS5-14 lazy boundary." },
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "WS6-21 backend test gaps complete and deployed: added a minimal in-memory mock-Sheets harness, covered DraftSessions create/get/save/discard/submit including stale revisions, submitted-is-read-only, slim submitted payload, and repeat-submit idempotency; removed dormant non-Phase-1 graders (numeric_entry/fill_blank/matching/drag_order/step_entry) until WS7 and pinned fail-closed behavior. Backend tests now 37/37; deployed Cloud Run tpc-api-00027-6tg serving 100% with maxScale=1 preserved and live smoke passed." },
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "WS6-20 observability complete and live: Cloud Run tpc-api-00026-qf2 serves 100% with max-instances=1 preserved. Backend now emits structured api_request logs with requestId/action/method/verified uid+email/latency/outcome, echoes/generates X-Request-Id, logs token verification failures as auth_verify_failed without token contents, sanitizes invalid-token responses, and stamps admin upsertQuestion writes with verified updatedBy/updatedByUid plus admin_audit. Backend tests 31/31; live smoke passed and Cloud Logging confirmed api_request + auth_verify_failed jsonPayload entries. ROADMAP, AGENT_HANDOFF, UPGRADE_PLAN, and cloud-run README updated." },
  ],
};
