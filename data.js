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
    updated:   "2026-06-26",
    updatedBy: "Codex",
    note:      "Live at thepyramidchallenge.github.io/tpc-dashboard · light theme.",
  },

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
    "tpc-online-platform WS4.1 is closed and live-smoked; next platform focus is WS4.2 fixed QuestionSet practice plus WS5 content/admin approval.",

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
      next:  "WS4.1 question engine is closed and live-smoked. Next: WS4.2 fixed QuestionSet practice, then WS5 content/admin approval so sheet questions become serveable.",
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
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS4.2 — Fixed QuestionSet practice", project: "tpc-online-platform", owner: "natalie", note: "Run a selected QuestionSet in fixed order through the existing runner with test-like defaults." },
      { title: "WS4.3 — Save/session integrity", project: "tpc-online-platform", owner: "natalie", note: "Route R3 here: fail closed on unknown question IDs and decide completed vs draft session storage before pilot/ranking." },
      { title: "WS5 — Content approval path", project: "tpc-online-platform", owner: "natalie", note: "Approve/author serveable sheet questions; current live policy returns 0 sheet questions until rows pass status/source/exposure gates." },
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
        { label: "WS2 · Auth & onboarding",           state: "done"   },
        { label: "WS3.1 · App shell & student screens", state: "done" },
        { label: "WS3.2 · Close-out (B1/B4/C1/C3, prod, auth, tests)", state: "done" },
        { label: "WS4.1 · Question engine",           state: "done" },
        { label: "WS4.2 · Mock / full-set exercises", state: "active" },
        { label: "WS4.3 · Save/session integrity",    state: "todo" },
        { label: "WS5 · Admin & content",             state: "todo"   },
        { label: "WS6 · QA, polish, pilot → launch",   state: "todo"   },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 2 / 3 — later phases",
      items: [
        { label: "WS7 · Test Mode + ranking",          state: "todo"   },
        { label: "WS8 · Reporting v2 & adaptive",      state: "todo"   },
        { label: "WS9 · Accounts & monetization",      state: "todo"   },
        { label: "Migrate Sheets → Firestore/Supabase (at WS7)", state: "todo" },
        { label: "AI question/image generation",      state: "hold"   },
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
    { date: "2026-06-26", who: "Codex", project: "tpc-online-platform",
      summary: "Routed R3 out of WS4.1 into new WS4.3 Save/session integrity: completed-session save hardening, forged-score fallback removal, and draft/resume storage decisions before pilot or ranking data matters." },
    { date: "2026-06-26", who: "Codex", project: "tpc-online-platform",
      summary: "Hardened WS4.1 closure for R1: deployed Cloud Run revision tpc-api-00011-l5l with upsertQuestion admin-gated to verified ADMIN_EMAILS. Backend tests now cover missing, non-admin, unverified-admin, and verified-admin identities; live smoke rejects unauthenticated upsertQuestion and keeps source/exposure checks green." },
    { date: "2026-06-26", who: "Codex", project: "tpc-online-platform",
      summary: "Closed WS4.1: deployed Cloud Run revision tpc-api-00010-kqb and live-smoked source/exposure hygiene. listQuestions and getQuestionSet no longer return non-approved, real_seed, or globally exhausted rows; current sheet policy yields 0 serveable live questions, so the app falls back to bundled content until content approval." },
    { date: "2026-06-26", who: "Codex", project: "tpc-online-platform",
      summary: "Deployed WS4.1-05 live: Cloud Run revision tpc-api-00009-jgs is serving 100% traffic, public frontend gh-pages f6e11ff includes the bookmark toggle-off call, production read smoke passed, and unauthenticated write rejection remains enforced." },
    { date: "2026-06-26", who: "Codex", project: "tpc-online-platform",
      summary: "Implemented WS4.1-05 removeBookmark end-to-end: Cloud Run now removes matching Results.Bookmarks rows with verified identity binding, the frontend calls removeBookmark when toggling off, and the smoke script verifies add/remove/list." },
    { date: "2026-06-26", who: "Codex", project: "tpc-online-platform",
      summary: "Roadmap numbering sync: WS3.1 is app shell, WS3.2 is close-out, WS4.1 is question engine, and WS4.2 is mock/full-set work. Updated dependent roadmap references and dashboard labels; next platform task is WS4.1-05 removeBookmark end-to-end." },
    { date: "2026-06-25", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Planning sync: docs/ROADMAP.md is now the detailed plan (WS0–WS9, WSx-0N task IDs, S/M/L effort, exit criteria, decision log); AGENT_HANDOFF.md slimmed to status/ops/risks (722→148 lines). Decision log resolved — mock = test-like Practice preset, accuracy = count-based % + marks score, AI gen = HOLD, public leaderboard = none, audio = defer. Dashboard roadmap aligned: added WS3.1/WS3.2 (done) + WS4.2 mock; later phases renamed to WS7/WS8/WS9." },
    { date: "2026-06-25", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS3.2 DONE: React student app (prototype-v0.2) is production. Close-out review fixed B1 (one-practice-one-save), B4 (instant feedback = no timer), C1 (notification badge clears) and C3 cleanup. Gates closed — browser QA passed, production switched to the v0.2 build (deploy.sh → gh-pages), and REQUIRE_AUTH=true enforced on Cloud Run (rev tpc-api-00006-jsm; real-login save verified). Added a Vitest + Testing Library suite (138 pass, 1 skipped). Known gap: 69 per-choice crop images missing (deferred to WS5)." },
    { date: "2026-06-25", who: "Codex", project: "tpc-online-platform",
      summary: "Started WS3.1 React rebuild: created prototype-v0.2 as a React + Vite + JavaScript static SPA, ported the student flow shell (sign-in/setup, Home, Practice setup, Quiz, Result, Report, Profile), preserved Cloud Run/GIS adapter boundaries, added bundled K2/K3 data/assets, and verified npm install/build plus local Chrome sign-in render." },
    { date: "2026-06-24", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS2 DONE: real Google sign-in live + tested end-to-end. Vendor-neutral Google Identity Services on the frontend (TPC.auth adapter) → Cloud Run verifyGoogleToken verifies the ID token server-side; uid = Google sub; first-login writes Customers.Users. Admin role server-authoritative (ADMIN_EMAILS allow-list). Verified a real Google account signed up on production. Note: REQUIRE_AUTH still off (write lockdown is the one remaining toggle). No Firebase/Supabase dependency." },
    { date: "2026-06-24", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS1 DONE: full Sheets data layer live + tested. Backend pivoted Apps Script → Cloud Run (Node, asia-east2, project tpc-platform-2026) reading/writing all 3 workbooks via a service account. Verified end-to-end against real sheets — getQuestionSet, upsertUser, saveSession (server-side graded), listUserHistory all 200. Prototype apiUrl wired; reads (gviz) + writes (Cloud Run) both live." },
    { date: "2026-06-24", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS1 read path: stood up the Google Sheets question bank and linked the prototype to it (gviz CSV, read-only). Verified live end-to-end — 40 K2/K3 questions + 5 sets load, DATA_SOURCE flips to 'live' with bundled fallback. Write API (sessions/attempts) + SheetsBackend adapter still outstanding." },
    { date: "2026-06-24", who: "Claude (Opus 4.8)", project: "",
      summary: "Fixed stale links: live URL → thepyramidchallenge.github.io/tpc-dashboard; repo URLs → thepyramidchallenge org; workspace marked offline-only." },
    { date: "2026-06-24", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Synced roadmap with TASKS_PHASE1.md — added 'Adaptive difficulty' to Later phases (the one plan item missing from the dashboard)." },
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Reworked the colour scheme for readability — system map is now colour-coded by owner/layer (Max=teal, Natalie=violet, backend=blue/green)." },
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Switched the dashboard to a light/white theme." },
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Added ownership (分工: Max = pyramid-site + UI, Natalie = platform), bilingual labels, and published the dashboard online at hkycaa.github.io/tpc-dashboard." },
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Created the workspace dashboard (system map, roadmap, board, changelog) as the daily source of truth." },
  ],
};
