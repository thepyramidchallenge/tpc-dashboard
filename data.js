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
    updated:   "2026-06-28",
    updatedBy: "Codex",
    note:      "Live at thepyramidchallenge.github.io/tpc-dashboard · light theme. · Business Space (the *why*): business/ (CONSTITUTION + decisions/hypotheses/experiments).",
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
    "tpc-online-platform WS2-07 region/year-level capture is live (D5; backend tpc-api-00015-khx + public bundle index-PmkUqDvs.js). Next engineering order: WS4.3 save integrity → WS5 admin/content → WS4.2 mock → WS6 polish/pilot/launch; then Business-Space validation — WS7-06 integrity logging day-1 (D6) + WS9-00 $99 report MVP (E1 north-star, D4). WS7/WS8/WS9 subscription remains gated on E1/E2 (D7 'evidence gates build').",

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
      next:  "WS2-07 region capture is live. Engineering-first order: WS4.3 save integrity → WS5 admin/content → WS4.2 mock → WS6 pilot/launch; then Business-Space validation (WS7-06 log-only + WS9-00 $99 report MVP = E1 north-star) with WS7/8/9 subscription gated on E1/E2.",
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
      next:  "Source of truth for full-stack platform work — tracks the Phase-1 roadmap. WS2-07 is live; next platform work is WS4.3 → WS5 → WS4.2 → WS6.",
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
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS4.3 — Save/session integrity", project: "tpc-online-platform", owner: "natalie", note: "Engineering #1. Pre-pilot: WS4.3-01 forged-score fail-closed (R3) + WS4.3-03 failed completed-save retry/offline (R6). In-progress draft/resume (WS4.3-02/04) deferred — don't build a persistence system pre-pilot (codex)." },
      { title: "WS5 — Admin & content", project: "tpc-online-platform", owner: "natalie", note: "Engineering #2. List/lifecycle UI (WS5-01), editor+validation (WS5-02), backend state machine (WS5-03), seed authored sets only — never real_seed (WS5-04). Live policy serves 0 sheet questions until rows are approved." },
      { title: "WS4.2 — Fixed QuestionSet practice", project: "tpc-online-platform", owner: "natalie", note: "Engineering #3. Run a QuestionSet in fixed order through the runner (test-like defaults). Depends on WS5-04 sets." },
      { title: "WS6 — Polish → pilot → launch", project: "tpc-online-platform", owner: "natalie", note: "Engineering #4. Accuracy/copy/timer/accessibility + concurrency smoke (R8, WS6-10) → WS6-11 pilot → launch free Practice. R7 malformed-payload guard already done (WS4.1-08)." },
      { title: "WS7-06 + WS9-00 — integrity logging + $99 report (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier (E1 north-star). Co-ship: WS7-06 log-only integrity (randomization + focus/blur + answer-timeline, D6) so the first online challenge carries baseline integrity, THEN/with WS9-00 $99 report off that result via the Sheets→Affinity pipeline (D4). WS7/8/9 subscription gated on E1/E2 (D7)." },
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
        { label: "WS4.3 · Save/session integrity (next)", state: "active" },
        { label: "WS5 · Admin & content",             state: "todo"   },
        { label: "WS4.2 · Mock / full-set (after WS5-04)", state: "todo" },
        { label: "WS6 · QA, polish, pilot → launch",   state: "todo"   },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Phase 2 / 3 — later phases",
      items: [
        { label: "WS9-00 · $99 report MVP (E1 north-star)", state: "todo" },
        { label: "WS7 · Test Mode + ranking (gated on E1/E2)", state: "todo"   },
        { label: "WS8 · Reporting v2 & adaptive (gated on E1/E2)", state: "todo"   },
        { label: "WS9-01+ · Subscription + payments (gated on E1/E2)", state: "todo"   },
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
    { date: "2026-06-28", who: "Codex", project: "tpc-online-platform",
      summary: "WS2-07 region/year-level capture is live and passed user check: public frontend gh-pages 548f2ca serves bundle index-PmkUqDvs.js with Region setup UI; Cloud Run tpc-api-00015-khx serves 100% with recordLogin/lastLoginAt; live TPC Customers.Users header has region after yearLevel and lastLoginAt at the end; ROADMAP/HANDOFF updated to mark WS2-07 done." },
    { date: "2026-06-28", who: "Claude (Opus 4.8)", project: "",
      summary: "Correction + reframe (founder): live events are NOT capacity-capped — HK incumbents run ~15–20k 人次/yr over 3 events profitably (scale via rooms/days/staff). Reframed D3 from 'live = structural loss-leader' to 'live ⇄ online: both coupled, no pre-committed lead, each must have a credible path to standalone break-even'; fixed the CONSTITUTION capacity line. Binding constraint = demand/brand + per-head CAC, not capacity." },
    { date: "2026-06-28", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Applied a codex roadmap review (all 7 points sound): split WS4.3-03 into pre-pilot failed-completed-save retry vs deferred in-progress draft/resume (new WS4.3-04) to avoid building a persistence system pre-pilot; made WS7-06 log-only integrity a co-ship/prereq for WS9-00 (the first $99-report challenge must capture baseline integrity); moved WS2-07 region capture to pre-pilot (avoid backfilling real users); clarified WS5-01 = lifecycle UI vs WS5-03 = backend state-machine enforcement; required WS5-04 QuestionSets to use authored/approved rows (never real_seed); synced WIREFLOW to one-save-at-completion + engine/type (multiple_choice retired) + audio-deferred." },
    { date: "2026-06-28", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Kept WSx-0N IDs (reverted a P## global-reindex experiment). Ordering is now carried by: (1) workstream sections in priority order, (2) ascending -0N suffixes within each theme, (3) the bottom Priority-order list. Within-group fix: moved WS6-11 (pilot → launch) to the end of WS6 — it's the final launch gate but its low suffix is historical; ID kept stable so the ~4 refs to it don't break. Evaluation: themes are sound; WS6 was the only group with an internal order issue." },
    { date: "2026-06-28", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "ROADMAP physically reordered so sections read in execution order: WS4.2 (mock) section moved to after WS5 → Phase-1 now flows WS4.1 → WS4.3 → WS5 → WS4.2 → WS6 (gated WS7/8/9 under Phase 2/3). No task IDs changed and no closed [x] item moved — existing -0N suffixes already ascend within each workstream, so the section reorder is what makes the WSX-0N read in priority order. WS4.2's number stays below WS4.3/WS5 only because WS4.2-01 is closed/frozen (noted inline)." },
    { date: "2026-06-27", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Roadmap rearranged engineering-first → then Business Space (synced across ROADMAP, AGENT_HANDOFF, dashboard). Task-level Priority order: Tier 1 engineering in dependency order (WS4.3 save integrity → WS5 admin/content → WS4.2 mock → WS6 pilot/launch); Tier 2 Business-Space validation (new WS2-07 region capture per D5; new WS9-00 $99 report MVP = E1 north-star per D4; WS7-06 integrity logging day-1 per D6); Tier 3 WS7/WS8/WS9-01+ subscription gated on E1/E2 (D7 'evidence gates build'). Also: real Google sign-in verified live end-to-end (the last open WS4.1 check); new WS6-15 first-time cold-start practice default routed. WS IDs kept stable so Business-Space D# links survive." },
    { date: "2026-06-27", who: "Codex", project: "tpc-online-platform",
      summary: "Implemented R5 authenticated reads by default: Cloud Run tpc-api-00012-sqq now leaves only ping public; unauthenticated listQuestions/getQuestionSet/upsertQuestion reject in live smoke; user-owned reads derive uid/email from the verified token. Public frontend gh-pages 447c7b0 now sends ID tokens for protected reads and keeps bundled samples out of the production JS bundle. Backend tests 6 pass; frontend tests 192 pass, 1 skipped." },
    { date: "2026-06-27", who: "Claude (Opus 4.8)", project: "",
      summary: "Constitution: added an 'evidence gates build — don't build ahead of validation' operating principle (no Phase-2+ iPad/subscription infra before E1/E2). Also wired all repo agent-entrypoints (admin CLAUDE.md, public README, pyramid-site CLAUDE.md) to point at the Business Space before product/strategy decisions." },
    { date: "2026-06-27", who: "Claude (Opus 4.8)", project: "",
      summary: "Business Space updates: D6 integrity model (graded trust tiers; integrity score gates prize eligibility; camera/mic skipped, no public shaming, log-now-enforce-later) + H6 (anti-cheat = the paid-tier moat); D7 the long arc (online builds the engine → digitized iPad live event + live leaderboard → cross-context ability portfolio; reframes TPC as an assessment-infrastructure hybrid); D5 ranking = 'top X% among TPC challengers' + cohort/region disclosure; Q8 markets, Q9 digitization trigger. Nav-bar view switcher restyled (teal active) to stand out." },
    { date: "2026-06-27", who: "Claude (Opus 4.8)", project: "",
      summary: "Created the Business Space (business/) — TPC's decision memory for the *why*: CONSTITUTION (what TPC is, decision framework, AI-should-challenge) + DECISIONS (pricing/funnel ladder, 6-mo bundle, live=loss-leader, transactional-first, ranking framing) + HYPOTHESES (H1 report-WTP PARTIAL, H2 trust-transfer UNVALIDATED, H3 self-sustain model) + EXPERIMENTS (E1 online $99 report attach = north-star, E2 bundle renewal, E3 live break-even) + OPEN_QUESTIONS + an update protocol. Grounded in the Season 2 economics analysis." },
    { date: "2026-06-27", who: "Claude (Opus 4.8)", project: "",
      summary: "Added the migrated repos to the board: tpc-online-platform-admin (full private project — frontend v0.2 + Cloud Run backend + docs) and entrance-qr-scan (staff check-in QR scanner). All repos now under the thepyramidchallenge org." },
    { date: "2026-06-26", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Full WS1–4.1 risk review (verified against code, live backend, and tests). Catalogued R1–R12. Confirmed Codex's R1–R5 handling is sound: R1 admin-gate is correct and enforced live (POST upsertQuestion w/o token → rejected), R2 source/exposure deploy is live (listQuestions now returns 0 sheet rows; bundled fallback covers the app), R3 forged-score routed to WS4.3-01, R4 exposure cap honestly removed + routed to WS5-13, R5 read IDOR routed to WS6-14. Backend tests 4 pass. Flagged R3 + R5 as live-exploitable pre-pilot blockers, and R6–R12 (save-timeout hang, no error boundary, concurrent Sheets writes, etc.) for the next pass." },
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
