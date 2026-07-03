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
    updated:   "2026-07-03",
    updatedBy: "Claude (Fable 5)",
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
    "The 2026-07-03 review upgrade sprint is CLOSED and fully merged into ROADMAP (UPGRADE_PLAN_2026-07.md deleted per founder — docs/ stays lean; plan text lives in git history). Backend: WS6-18/19/20/21 all deployed — Cloud Run tpc-api-00027-6tg with max-instances=1, CORS allow-list, rate limits, Sheets retry + question cache, structured logs, admin audit stamping, dormant graders fail-closed until WS7; suite 37/37. Frontend: WS5-00 refactor (App.jsx 2,182 → 465 lines) + WS5-00b error layer code-complete, 232 tests green — ONE ACTION LEFT: deploy WS5-00+00b together to Pages via deploy.sh (production still serves pre-refactor cc64b52). Renumber (founder 2026-07-03): former WS6 is now WS6.1 · QA/polish/launch, and WS6.2 · UI review holds ALL UI-review work — WS6.2-01 notify-layer message classes (are toasts right for every alert?), WS6.2-02 whole-app screen review, plus moved-in copy/timer-colouring/usability-a11y/unselect (ex WS6-04/05/09/12). Then WS5-01/02/03 admin UI (mount admin behind the WS5-14 lazy boundary).",

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
      next:  "WS5 admin build in progress on the agreed split: frontend track done (WS5-14 lazy #/admin chunk; WS5-01 list/lifecycle UI + WS5-02 editor with student-identical preview + WS5-07 subTopic placeholder, frontend halves against the mocked contract; suite 248 green; not deployed) — waiting on the Codex backend track (WS5-03 state machine + adminListQuestions/transitionQuestion, in flight in cloud-run/) for the live list → edit → approve → serve smoke. Also still pending: the WS5-00+00b Pages deploy (production serves pre-refactor cc64b52). Then WS5-04 seed sets → WS4.2 mock → WS6.1 polish + WS6.2 UI review → pilot/launch.",
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
      next:  "Source of truth for full-stack platform work — tracks the Phase-1 roadmap. WS4.3 save/session integrity hardened; WS6.1-18/19/20/21 deployed (backend tpc-api-00027-6tg with max-instances=1, frontend cc64b52).",
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
      { title: "WS5 — Admin & content", project: "tpc-online-platform", owner: "natalie", note: "Engineering #2. List/lifecycle UI (WS5-01), editor+validation (WS5-02), backend state machine (WS5-03), seed authored sets only — never real_seed (WS5-04). Live Sheets now include 30 K2 authored dummy arithmetic rows for testing; production-quality content remains open." },
      { title: "WS4.2 — Fixed QuestionSet practice", project: "tpc-online-platform", owner: "natalie", note: "Engineering #3. Run a QuestionSet in fixed order through the runner (test-like defaults). Depends on WS5-04 sets." },
      { title: "WS6.1 + WS6.2 — Polish + UI review → pilot → launch", project: "tpc-online-platform", owner: "natalie", note: "Engineering #4. WS6.1-18/19/20/21 are deployed. WS6.1 keeps accuracy/cold-start/fallback/concurrency-smoke; WS6.2 (new phase) holds ALL UI review — notify-layer message classes (are toasts right for every alert?), copy, timer colouring, usability/a11y, unselect, whole-app screen review — before WS6.1-11 pilot." },
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
        { label: "WS4.3 · Save/session integrity", state: "done" },
        { label: "WS6.1-18 · API surface hardening", state: "done" },
        { label: "WS6.1-19 · Sheets reliability", state: "done" },
        { label: "WS6.1-20 · Observability", state: "done" },
        { label: "WS6.1-21 · Backend test gaps", state: "done" },
        { label: "WS5 · Admin & content",             state: "todo"   },
        { label: "WS4.2 · Mock / full-set (after WS5-04)", state: "todo" },
        { label: "WS6.1 · QA, polish, pilot → launch", state: "active" },
        { label: "WS6.2 · UI review (all UI-review work)", state: "todo" },
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
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Founder decision: WS5-15 content production sizing is on hold and not a current-stage priority. ROADMAP and UPGRADE_PLAN now mark it as deferred; Business Space Q1 keeps the sizing draft as background evidence only, to reopen when monthly challenge cadence or paid-report operations become active." },
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Track C WS5-15 content production sizing drafted into Business Space: H3 now includes a content-floor model of 25 approved questions per active level per month (20-question monthly challenge set + 25% reserve), with K2/K3 launch at ~50 approved questions/month and all K2-P6 at ~200/month; Q1 now lists the founder decisions needed before closing the task (launch levels, set length/reserve, author/QC owner, QC budget, AI-drafting stance, report-QC staffing). ROADMAP WS5-15 cites the draft and remains open pending those choices." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5-00 frontend structure refactor complete (Track B, P0): App.jsx cut from 2,182 to 465 lines across five behavior-neutral commits — all 12 screens extracted to src/components/screens/, shared primitives to src/components/ui.jsx, pure helpers to src/lib/, and the WS4.3 state machinery isolated into src/hooks/ (useAuth, usePracticeSession, useCompletedSaveQueue, useQuiz) with latches/refs moved verbatim. All 231 frontend tests pass unmodified after every step; production build passes; demo-mode browser smoke covered the full practice loop (setup → briefing → quiz with pause sheet → submit → result → report → refresh-restore) with no console errors. WS5-01/02 admin UI is now unblocked. Not yet deployed to Pages (no user-visible change; deploys with WS5-00b error layer, next up). ROADMAP, AGENT_HANDOFF, UPGRADE_PLAN updated." },
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "WS6-19 Sheets reliability complete and live: added retry/backoff around Google Sheets helper calls for transient quota/rate-limit/5xx failures, plus a 30s per-instance cache for listQuestions/getQuestionSet invalidated by upsertQuestion. Runtime knobs documented (SHEETS_RETRY_MAX_ATTEMPTS, SHEETS_RETRY_BASE_MS, QUESTION_CACHE_TTL_MS). Backend tests 29/29; deployed Cloud Run tpc-api-00024-9l8 serving 100% with max-instances=1 preserved; live smoke passed ping, allowed-origin CORS, denied-origin no-echo, OPTIONS preflight, and unauth protected-read rejection. ROADMAP, AGENT_HANDOFF, UPGRADE_PLAN, and cloud-run README updated." },
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "WS6-18 API surface hardening complete and live: Cloud Run tpc-api-00023-htg serves 100% with max-instances=1 preserved, wildcard CORS replaced by an allow-list, non-ping actions rate-limited per verified uid with IP fallback for unauth/invalid-token traffic, and hardcoded ADMIN_EMAILS defaults removed from source with ADMIN_EMAILS now explicit in Cloud Run env. Backend tests 24/24; live smoke passed ping, allowed-origin CORS, denied-origin no-echo, OPTIONS preflight, and unauth protected-read rejection. ROADMAP, AGENT_HANDOFF, UPGRADE_PLAN, and cloud-run README updated." },
    { date: "2026-07-03", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Track D ops complete: reauthenticated gcloud as info@pyramidchallenge.org and capped Cloud Run tpc-api to max-instances=1 as the interim R8 mitigation until WS6-10 characterizes multi-instance behavior. Cloud Run deployed revision tpc-api-00022-qxq serving 100% traffic; service template annotation autoscaling.knative.dev/maxScale=1; live ping healthy. Updated ROADMAP, AGENT_HANDOFF, and docs/UPGRADE_PLAN_2026-07.md to mark Track D finished and retain the revisit-before-post-pilot-load warning." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Full system review (design docs + cloud-run backend + prototype-v0.2 frontend code) → review upgrade sprint plan committed as docs/UPGRADE_PLAN_2026-07.md with new ROADMAP tasks WS5-00/00b/14/15, WS6-18/19/20/21, WS7-13. Verdict: architecture, auth/grading integrity and governance strong; three material risks — App.jsx 2,182-line monolith right before WS5 admin UI (→ WS5-00 refactor, P0), untracked backend hardening gaps (CORS *, no rate limiting, no Sheets retry/cache, thin observability, untested draft endpoints → WS6-18..21), and the E1 critical path running through all of WS6 (→ pilot-gating vs post-pilot labels, Track C). Plan is directory-partitioned into parallel tracks so Codex + Claude sessions can co-work (A=cloud-run, B=prototype-v0.2, C=docs, D=ops max-instances=1 interim for R8). Plan only — no code changed, nothing deployed; roadmap statuses unchanged." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "",
      summary: "Workspace governance Phase 0 implemented (founder approved; recorded as D8 here, same model as tf-dashboard's decision no. 21): every D/H/E/Q entry now carries a linter-enforced Domain: tag (TPC enum: pricing/platform/live/trust/growth/brand/content/ops/workspace; all 26 entries backfilled); business/INDEX.md is auto-generated by scripts/build-index.js and the linter fails when stale; module-doc rules codified — platform repos hold implementation docs only, cite-never-restate, forbidden ledger filenames, module D#-references must resolve (tpc-online-platform-admin/docs/README.md added with a Governing decisions section); changelog rotation rule defined (>40 entries → keep newest ~30, archive to changelog/ARCHIVE-YYYY-MM.md). Deliberately NOT done per D8: no ledger splitting, no build pipelines, no per-module dashboards, no RAG." },
    { date: "2026-07-03", who: "Claude (Fable 5)", project: "",
      summary: "Workspace discipline is now machine-enforced (founder request, applied to both founder workspaces): scripts/check-workspace.js — zero-dependency linter validating data.js (evaluates; status/state enums; board/roadmap project+owner keys resolve; changelog newest-first; meta.updated stamped) and the Business Space (D/H/E entries need Status+Updated lines; SUPERSEDED → targets must exist; every D#/H#/E#/Q# reference resolves to a real entry). GitHub Action .github/workflows/check.yml runs it on every push, so protocol violations fail CI instead of silently rotting. A weekly librarian scheduled agent (Sundays 20:00) additionally does a read-only drift review — unrecorded decisions, unflipped H# statuses, stale RUNNING experiments, done-but-still-on-board cards, answered-but-open Q#s. AGENTS.md now requires running the linter before every commit." },
    { date: "2026-07-02", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Full WS4.3 save/session-integrity risk review + verification (against code, tests, and deploy records). First pass flagged 1 High + 8 Medium (H1 token-expiry silent save-loss; M1 non-durable retry queue; M2 phantom client-only draft when createDraftSession fails; M3 orphaned draft rows; M4 non-atomic Sessions/Attempts partial-save data loss; M5 shared-device pending-save bleed across accounts; M6 last-write-wins draft race; M7 finish/submit not crash-safe on refresh; M8 non-transactional double-submit) plus 7 Low (L1 empty-string selectedOptionId grading as 'A'; L2 client-owned attempt set; L3 client timestamps; L4 unbounded DraftSessions; L5 swallowed upsertUser failure; L6 thin cross-device report=R11; L7 Math.random ids/bookmark divergence). Verification: confirmed all fixes are production-wired (not just green tests) — caught L5 as a false-green (test mocked upsertUser to reject, but real backend.upsertUser swallowed failures via safe()), which Codex then fixed (62d2216, upsertUser now throws). All H1/M1–M8/L1/L5 fixed + deployed; L2–L4/L6/L7 routed to WS7-11/WS7-12/WS6-16/WS8-01/WS6-17. Backend 19 tests pass, frontend 231 pass. Residual (documented, not open): M8 lock is same-instance only → cross-instance safety stays with R8/WS6-10; production 'deployed' rests on git + deploy records, not a live smoke (preview sandbox-blocked)." },
    { date: "2026-07-02", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "WS4.3 save/session-integrity hardening in response to the risk review. Fixed H1 (auth.js token-expiry check + refreshIdToken re-auth before writes; saves carry throwAuth so the retry path can clear+refresh; Result shows 'sign in again to save'), M1 (durable retry queue: online/focus/visibilitychange listeners + backoff timer + re-entrancy guard), M2 (startQuiz aborts with a message instead of a phantom client-only draft), M3 (markDraftSubmittedIfPresent reconciles the source draft on the saveSession fallback), M4 (repairMissingSessionAttempts backfills a partially-written session on retry), M5 (clear pendingCompletedSaves on sign-out + account switch), M6 (monotonic draftRevision + backend acceptsDraftSaveRevision rejects stale overwrites), M7 (checkpoint pending Result + queue + screen=result before upload), M8 (withSessionSaveLock serializes same uid+sessionId saves; final-submit button disables). Also L1 (fail-closed single_choice grading for empty/whitespace/malformed selectedOptionId/index, backend + frontend) and L5 (upsertUser surfaces write failures so setup stays put on failure). Routed L2→WS7-11, L3→WS7-12, L4→WS6-16, L6→WS8-01, L7→WS6-17. Sensitive-asset cleanup: removed public real-seed K2/K3 photos + full-paper SVG exports from the Pages artifact (old Pages deployment records deleted). Deployed: Cloud Run tpc-api-00021-trw (100%, ping healthy) + public gh-pages cc64b52 (bundle index-D2Ku2D4e.js). Backend 19 tests pass, frontend 231 pass." },
    { date: "2026-07-02", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "Frontend UI refresh (presentation only): login + first-login setup now show the real TPC logo lockup (pyramid mark + wordmark); replaced scattered colour-emoji with one monochrome inline-SVG line-icon set across tabs/bell/profile/Recent/status/Result/drafts/pause sheet; Home dashboard now visualizes numbers as an average-accuracy donut ring + Practice-completed progress bar + colour-coded Recent accuracy bars; section collapse toggle changed from the ugly inverted triangle to a right-aligned chevron glyph (always available, whole-section collapse, count in header). Frontend 226 pass / 1 skipped; deployed to public gh-pages (bundle index-CxF-9TzT.js, css index-DhNJaRu6.css); live confirmed. NOTE: a concurrent deploy race on gh-pages briefly overwrote this build — redeployed and re-verified." },
    { date: "2026-07-02", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS4.3-13 young-learner UI polish (new sub-task; frontend/presentation only, no backend or DraftSessions schema change). Home promotes the newest unfinished practice to a 繼續練習 Continue card (progress ring, topic, updated time, Resume + Discard); other drafts get an inline progress bar + per-row discard, so drafts can be dropped from Home without resuming. The runner's ambiguous ✕-discards-immediately control became a non-destructive 暫停 Pause sheet (Save for later / Keep going / Discard) available in instant AND at-end modes — instant runs are now saveable — replacing the native window.confirm. Frontend 221 pass / 1 skipped, build passes, pause sheet visually verified in demo mode. Deployed to public gh-pages 76805dc (bundle index-B-lPdRen.js); live site confirmed serving it." },
    { date: "2026-06-30", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Switched Attempts.attemptId to backend-generated only, added regression coverage, deployed Cloud Run tpc-api-00017-ct4, and updated live Results.Fields. Added 30 K2 authored/approved dummy arithmetic questions plus set_k2_dummy_arithmetic_01 to live TPC Questions for signed-in testing; backend tests 13 pass and live ping is healthy." },
    { date: "2026-06-30", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Deployed WS4.3 backend/table work: live TPC Results now has DraftSessions with header/status validation and Fields docs; Cloud Run tpc-api-00016-f7p serves 100% with fail-closed server grading, sessionId idempotency, and DraftSessions endpoints. Frontend code creates/resumes server drafts and queues failed completed saves. Backend tests 12 pass, frontend tests 197 pass/1 skipped, build passed, live ping healthy." },
    { date: "2026-06-30", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Updated WS4.3 planning against the latest repo: authenticated reads are already done (WS6-14), so WS4.3 now focuses on fail-closed grading, completed-save idempotency/retry, and confirmed cross-device DraftSessions after the pre-pilot save blockers. README/HANDOFF/ROADMAP/sheet notes aligned." },
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
  ],
};
