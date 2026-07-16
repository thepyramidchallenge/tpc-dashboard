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
    updated:   "2026-07-16",
    updatedBy: "Natalie + Codex (GPT-5)",
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
    "Do not deploy the current backend until the Codex full-review queue is triaged: 5 P1 + 3 P2 findings were found; completed-session integrity (P1 #1) is fixed locally at d911413, while four P1s remain. In parallel, WS5.2-02e is LIVE awaiting Natalie's §10.2 browser smoke; 02f AI evaluation is source-complete but undeployed; and 01c Run 001 is internally preflighted (20/20) awaiting human verification, confidence scores and real review time.",

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
      next:  "Live = Pages f8d8fcf · Cloud Run tpc-api-00060-wxv. Local source validation = frontend 424 (02f) / backend 151 (01c + WS4.3-22). 02e rails are live with k3_m000001_ai seeded; Natalie's §10.2 smoke is the closure gate. 02f is source-complete but must deploy only from d911413 or later after the remaining full-review P1s are triaged. WS5.2-01a is closed; 01c Run 001 awaits human verification before the official seed-pack lane → WS5.1-04 sets.",
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
      next:  "Source of truth for full-stack platform work. Local main d911413 is 2 commits ahead of origin/main: 7676ce1 adds the internal-only WS5.2-01c calibration harness; d911413 fixes full-review P1 #1 (completed-session integrity). Public Pages is f8d8fcf; Cloud Run is tpc-api-00060-wxv. Next: triage/fix the four remaining P1s → push safe source → Natalie's §10.2 smoke + 02f deploy consent/API key → complete 01c human review → official seed-pack lane → WS5.1-04 sets.",
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
      { title: "Full-review remediation — 4 P1 + 3 P2 remain", project: "tpc-online-platform", owner: "natalie", note: "Codex found 5 P1 and 3 P2 integrity/security/deploy issues. P1 #1 (duplicate/mutable completed-session attempts, draft-pool mismatch and Sessions/Attempts disagreement) is fixed locally at d911413 with backend 151 green; not deployed. Remaining P1s: draft-save race, stale AI-evaluation binding, partial approval journal writes and arbitrary service-account Drive file IDs. P2s: upsertUser mass assignment, token verification before rate limiting and dirty-tree production deploys." },
      { title: "Natalie's actions — panel-parity phone · whitelist bell", project: "tpc-online-platform", owner: "natalie", note: "① Open the admin console on a real phone (100dvh pager behaviour; dashboard flip waits on it). ② Grant/revoke self-approval → target admin's bell rings (current backend tpc-api-00060-wxv). Also still owed when convenient: editor asset-picker path smoke (WS5.3-03). (18i vocabulary ratification: DONE 2026-07-10.)" },
      { title: "WS5.2-02e §10.2 smoke + 02f deploy consent", project: "tpc-online-platform", owner: "natalie", note: "02e rails are LIVE (QuestionReviewEvaluations migrated → tpc-api-00060-wxv → Pages f8d8fcf) and k3_m000001_ai is seeded. Natalie: run the §10.2 panel→Sheets smoke, then disable the row and flip 02e. 02f is committed bf42874 and needs ANTHROPIC_API_KEY, but any backend deploy must use d911413 or later and wait for the remaining P1 review queue to be triaged." },
      { title: "WS5.2-01c internal calibration → official seed pack", project: "tpc-online-platform", owner: "natalie", note: "WS5.2-01a is closed: retain all 40 seeds; target 60 approved per level as two disjoint 30-question sets; pre-launch runs stay internal-only. Run 001 (7676ce1) preflighted 20/20 outputs, 20 seed + 10 sibling comparisons, max similarity 43.75%, AI-draft outcome 16 approve / 1 unapprove / 3 gate-fail. An in-house human must verify/adjust the drafts, enter confidence and record actual review time before 01c closes; no live write or official question creation occurred." },
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
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
        { label: "WS6.1-18…21 · Backend hardening / reliability / observability / tests", state: "done" },
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
    adapter --> api
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
    { date: "2026-07-06", who: "Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "WS5.1-02f version-history view — authored the compare/inspect implementation: new pure `src/admin/versionCompare.js` (snapshotToFields / questionFromDraft / diffFields) + the AdminEditor history panel now expands each approved edition's full snapshot fields and diffs two editions (vN ↔ another version or the live working copy) with changed-field highlighting; 5 unit + 2 behavior tests, frontend suite + build green. Confirmed LIVE on gh-pages (admin chunk AdminApp-DBxKjNjs.js serves the compare/inspect code, 98 kB = 02f-only, no asset console); interactive Natalie's smoke (approved question with ≥2 versions) in progress with Natalie. Also did requested by Natalie deferred-item routing pass in ROADMAP — every WS5.1 [~] item now names a concrete destination: WS5.1-02e→WS6.2-03, 02d/03e→WS6.2-01, 01h/03d→new WS8-10 (report-time snapshot stamping), 01d→new WS6.1-22 (admin batch ops), 01g→new WS6.1-23 (large-bank scale); rollback/copy split to WS5.1-02g. Then diagnosed a live bug: 子主題 SubTopic is a REQUIRED editor field but the Questions sheet has no subTopic column (and normalizeQuestionRow drops it), so it silently never persists — fix pending Natalie's decision (persist vs make-optional). Shared working tree with parallel Codex/Fable sessions." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.3 素材庫 asset library built end-to-end in source per Natalie's plan (manual input now, AI generation later — same registry/QC pipeline for both producers). This session: Drive `Asset Library` folder tree created under TPC online platform (incoming/ · library/{content-objects,math,logic,pages} · source-exports; ids in sheets-template README); backend Assets registry on TPC Questions (adminListAssets/upsertAsset/transitionAsset with the question lifecycle + server-owned reviewNote, 待登記 inbox over Drive, admin base64 preview, public approved-only GET /asset, admin-audit + 日誌 asset.* vocabulary; backend 69→79 tests); full 素材庫 admin console replacing the placeholder tab (ERP table with Drive thumbnails, filters, batch Approve, inbox 登記 flow, asset editor with QC checklist + lifecycle buttons; frontend 348 tests, build green, admin chunk still lazy); template CSV + idempotent migrate-ws5-3-assets-tab.js. NOT live: Assets tab migration was permission-blocked this session — Natalie's checklist in AGENT_HANDOFF §2 item 2 (share Drive folder to tpc-sheets SA as Editor → run migration → set ASSET_*_FOLDER_ID env → deploy both → smoke incl. the 3 failed pilot SVGs). No status flips: WS5.3 stays in-progress until the live smoke. Coordination note: this ran alongside the Codex session in the same tree — Codex's commits 76bb7bb/9d0ef56 swept this session's asset files into history; content is correct, attribution is mixed." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Updated and published platform source/docs for WS5.1-02f version-history compare/inspect and the WS5.3 Asset Library foundation: private admin repo pushed through 47aa0aa; public frontend deployed to gh-pages 69b74d8 from source/docs 2ece136 (live index-CcRK4Cp1.js + AdminApp-BOrCk5_w.js). Asset proposal includes Drive-backed Assets registry/API, approved-only /asset serving, frontend asset editor + 素材庫 console scaffolding, template CSV + migration script, and docs/handoff updates. Validation: backend 79 tests, frontend 343 tests, frontend build passes. Live asset endpoint smoke still waits on Assets sheet + Drive folder/env migration." },
    { date: "2026-07-06", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex day wrap-up across sessions, not just this chat: (1) `f7daa5c` fixed the admin question editor/list workflow after live-smoke findings (backend validation test tweaks + AdminApp/AdminEditor/adminValidation/styles updates); (2) `03c03a2` broke the oversized unfinished WS5 ROADMAP work into explicit child checklist IDs `WS5-01a`...`WS5-18g` without marking tasks complete; (3) `fdf7ecf` built WS5-18 backend activity logs — superadmin-gated `adminListLogs`, AdminLog/StudentLog fire-and-forget dual-write hooks, template CSVs, and `migrate-ws5-18-log-tabs.js` — with backend suite 61→68, followed by `0944b8d` docs noting live migration + Cloud Run deploy are pending Natalie's approval; (4) diagnosed the public Pages failure email for run 28779435632 as a GitHub-side deploy flake (`Deployment failed, try again later`), while latest gh-pages run 28780192157 succeeded on `15a1102` and live site serves `assets/index-DA81w3w2.js`. Dashboard updated + changelog rotated." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Toast colour rule shipped per Natalie: every top pop-up now follows red = error, green = pass/success, white = saved draft. New green success tone (已提交審批 as requested, plus 已批准並建立 vN / 已退回 / 已停用 / 已更新 N 題 / admin grant·revoke / user added); saved-draft toasts stay white; all blocking or failed messages moved to red (validation prompts, missing 審批備註, no-applicable-transition, backend-not-ready, sign-in expired, 沒有題目, sign-up field checks); legacy warn tone renders red so nothing is ever off-palette. Rule pinned by tests. Clean-room commit be4e27e (excluded the parallel session's in-flight 5-option/version-cell work); frontend 300 / backend 60 / build green; Pages deployed from a clean worktree → gh-pages 99ce687 (bundle index-zbKgAeu4.js), live asset verified; backend unchanged (tpc-api-00034-2qt). Also pre-decides the colour tier of WS6.2-01 message-class review." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Natalie's live-smoke blocker fixed + evening production deploy. 儲存草稿 on a half-finished question was rejected by the full validation prompt (請填寫題目文字/至少需要兩個選項/請指定正確答案); decision + fix: Save draft = working-copy save with PARTIAL validation (only format/length problems on filled fields block it), while 提交審批/重新提交審批 keep the full required-fields gate — mirrored server-side (upsertQuestion partial; transitionQuestion now fully validates on →review as well as →approved with validation_failed-prefixed errors), so a half-finished draft parks any time but can never enter the review queue or go live. Coordination note: committed via selective staging + clean-worktree verification to avoid shipping the parallel session's then-unfinished adminTabs refactor; once that landed (b587aee), redeployed BOTH from clean main c9eb7c5 → production now = Cloud Run tpc-api-00034-2qt + Pages 0c9a36a (bundle index-XSKIodC4.js), ping + asset checks green, carrying lenient saves AND role-derived admin tabs together. Tests at deploy: backend 60 / frontend 299 / build green. Natalie can resume the WS5-17 smoke; the other smoke findings (save/reopen blocker, 5-option request, pagination, SubTopic filter) are recorded in ROADMAP by the parallel session." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5-16 adminTabs RETIRED per Natalie: authorization is a backend setting recorded in md, not controllable in the frontend. Admin tab access is now derived from Users.role alone (student=none; admin=題庫+素材庫; superadmin=all incl. 管理員+日誌) — the per-admin tick boxes, adminSetAdminTabs action, and the Users.adminTabs column are all gone (live column deleted via SA path, read-back verified; Fields row removed and the role row documents the rule; templates mirrored). adminListUsers is now superadmin-only for reads AND mutations. Rule recorded in ROADMAP decision log + sheets-template README + handoff. Tests: backend 60 / frontend 299 / build green (source b587aee). Source-only — redeploy Cloud Run + Pages before the WS5-17 smoke (deployed revs still show tick boxes; ticking fails harmlessly on the missing column)." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5 field-rules pass implemented per Natalie (source db56c74+0798534; the parallel session's deploy entry below attributed it to Codex — it was this Claude session). Questions tab: frontend limits aligned to backend (prompt 1000, id 120) with live n/limit character counters; topic dropdown grouped by domain with bidirectional domain↔topic auto-populate; reviewNote keep-but-clear (approve shows a confirm quoting the note — editor/pencil/batch — then keeps it prefixed 已解除 cleared instead of wiping); new server-owned createdBy/createdAt authorship columns (stamped once on insert, 作者/最後更新 list columns + editor line). Admin tab: studentName = English letters ≤120 required at student sign-up (new/changed values only so legacy names keep signing in; setup placeholder now Chan Siu Ming); 日誌 Log tab now superadmin-only (WS5-18 gate). Tests: backend 61 / frontend 298 / build green; behaviors test-pinned. Full record docs/FIELD_RULES_2026-07-06.md. Open item: option-label soft warning (~80 chars) at UI stage; Natalie to review 素材庫 (WS5-08/09/10) + 日誌 feed (WS5-18) proposals later. No status flips (WS5-17 live smoke pending)." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "",
      summary: "CONSTITUTION: added 'The polish floor (group-wide DNA)' per Max's transcription — customer-facing surfaces must feel finished/premium (完成品, never 半完成品) across HKYCAA / Team Futura / TPC; for TPC doubly binding since the product IS trust (framework question 2). Scope is variable, polish is not (cut features, don't expose half-built ones); not a licence to slip ship dates (shrink scope instead); customer 接觸面 only — internal tools optimise for iteration speed; includes the first-time-customer test. Mirrored into tf-dashboard CONSTITUTION same session (with an interaction rule for TF's launch-risk-tier decision there)." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "PRODUCTION DEPLOY (Max-approved): Cloud Run tpc-api-00032-8l5 (100%, ping verified) + Pages a3cdd46 (bundle index-CuQp5Ia8.js, admin chunk AdminApp-DhICkYOQ.js; built from source 0798534) — all WS5 layers now live together: the 2026-07-05 review flow, the 2026-07-06 version policy (snapshot-on-approve QuestionVersions shelf), WS5-16 per-tab permissions, and Codex's field-rules pass (limits alignment, domain↔topic autofill, reviewNote keep-but-clear with 已解除 prefix, createdBy/createdAt authorship, English-only studentName, superadmin-only 日誌). Pre-deploy checks: whole tree green (backend 61 / frontend 298 / build). Same session also completed the remaining live-sheet migration (createdBy V1 + createdAt W1 via tpc-sheets SA impersonation, read-back verified) after spotting Codex's pending-migration note — live Questions header now runs through createdAt at W1. Also fixed the failing workspace-check CI (meta.updated stamp). Status flips deliberately NOT made: WS5-17 live smoke is the remaining gate before closing WS5-01/02/03/16." },
    { date: "2026-07-06", who: "Claude (Fable 5)", project: "tpc-online-platform",
      summary: "Live TPC Questions workbook migrated for the version policy (docs e45e1a2): after Natalie reauthenticated gcloud, applied via the same tpc-sheets service-account impersonation path Codex used — Questions.version added at U1, new QuestionVersions tab created (sheetId 205032640; header questionId·version·approvedAt·approvedBy·approvedByUid·snapshot), and the workbook's own Fields tab now documents reviewNote, version, and all six QuestionVersions columns (rows 36–43; reviewNote had been undocumented since its 07-05 addition). All writes read-back verified. The deploy rider from the previous entry is CLEARED — live sheets are ready; remaining for WS5-17 = redeploy Cloud Run + Pages (current revs predate the version layer), then the live smoke incl. v1/v2 minting + 版本歷史." },
  ],
};
