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
    updated:   "2026-07-21",
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
    "Run one honestly blinded 2–5-seed WS5.2-01c6 calibration with frozen generator/judge prompt versions, then make the 01c7 go/no-go. Until both close, start no further production batch and do not approve the six prematurely-live review rows; exact next actions are at the top of tpc-online-platform/AGENT_HANDOFF.md.",

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
      next:  "Current gate: honestly blinded WS5.2-01c6 calibration → 01c7 go/no-go → reconcile the prematurely-live companion lane. Live stack remains Pages 6c15afe (minimal cwd-independent command hotfix 1a14da5) + Cloud Run tpc-api-00079-lkw (100%, max instances 1). Q+A results and session-paired watch remain source-built only; do not migrate/deploy them or run another production batch before the activation and failure/recovery gates close.",
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
      next:  "Source of truth for full-stack platform work. Local source now makes Single and Batch one operator flow; `single` is derived ledger metadata only. Frontend 476/476 and the production build pass. These 2026-07-21 changes are not yet committed or deployed; GenerationCompanionSessions migration, backend/frontend watch rollout and non-promoting smoke remain pending behind the existing activation gates.",
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
      { title: "WS5.2-01c6 blinded calibration → 01c7 go/no-go", project: "tpc-online-platform", owner: "natalie", note: "Run one private 2–5-seed calibration with frozen, versioned generator/judge prompts; review randomized candidates in the rendered UI and record quality, failure patterns, time and cost. Keep the prematurely-live companion lane contained: no new production batch and no approval of k3_l000001_ai–k3_l000006_ai before the decision." },
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS5.2 Q+A + session-watch guarded rollout", project: "tpc-online-platform", owner: "natalie", note: "Verified source shows authoritative prompt, A–E, correct answer and explanation, and adds one-command-per-session watch without a browser localhost/deep-link launcher. After activation gates: migrate/read back GenerationCompanionSessions, deploy backend then frontend, and run a non-promoting smoke. Keep one-job recovery; do not start another production batch yet." },
      { title: "WS5.1-05 + WS4.2 fixed-set flow", project: "tpc-online-platform", owner: "natalie", note: "After sets exist: add/verify placeholder handling for the 69 missing per-choice images, then run a fixed QuestionSet end-to-end through Practice/mock and save a session tagged to the set id." },
      { title: "WS6.1 + WS6.2 — pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical polish before real users: accuracy consistency, R8/concurrency smoke, fallback audit, first-time-user default, and pilot-relevant UI/copy/usability/visual/log-abnormal-banner review → WS6.1-11 pilot." },
      { title: "WS7-06 + WS9-00 — report validation (E1)", project: "tpc-online-platform", owner: "natalie", note: "Business tier starts after engineering substrate exists. Co-ship WS7-06 log-only integrity with the first online challenge/report path, then WS9-00 $99 one-off report MVP via the Sheets→Affinity pipeline. Full WS7/WS8/WS9-01+ remains gated on E1/E2." },
      { title: "Deploy pyramid-site",         project: "pyramid-site",        owner: "max",     note: "Vercel/Netlify once parity is reached." },
    ],
    blocked: [
      { title: "WS5.2-02e approval artifact closure", project: "tpc-online-platform", owner: "natalie", note: "Not failed: the stored decision/version/evaluation result is not visible in the frontend, so Natalie will not perform a hidden Sheets/AdminLog check. Choose an authenticated admin readback view or formally waive the manual UI smoke based on existing automated/backend evidence. This does not block private 01c6–01c7 calibration, but remains required for §10.2/live approval-evidence closure." },
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
        { label: "WS5.2-01c6/01c7 · Honestly blinded calibration + go/no-go (current)", state: "active" },
        { label: "WS5.2-01d/01h/01i · GenerationRuns + authenticated local subscription-CLI companion (live; activation evidence/recovery closure pending)", state: "active" },
        { label: "WS5.2-02e · Approval stored-result visibility or manual-smoke waiver", state: "active" },
        { label: "WS5.3 · Asset factory (AI SVG gen)", state: "active" },
        { label: "WS4.2 · Mock / full-set (after WS5.1-04)", state: "todo" },
        { label: "WS6.1 · QA, polish, pilot → launch", state: "active" },
        { label: "WS6.2 · UI review (pilot-relevant pass)", state: "active" },
        { label: "WS11 · Backend maintainability refactor (01 bootstrap dedupe + 02 lint done; 03–05 gated on 01c7 closure)", state: "active" },
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
      companion["Local CLI companion<br/>one-job live · session watch source-only<br/>Codex/Claude generate + independent judge"]:::wip
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
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Confirmed and enforced one AI-question-generation flow for both one-question and multi-question runs. The admin always configures seed/output allocations, creates one backend-owned job, uses the same companion, gates, progress/result screen, recovery rules and deliberate human-approval handoff. Exactly one seed × one output is merely derived `mode=single` API/ledger metadata; any larger allocation is `batch`, with no operator mode switch or caller-selected branch. Refactored the request builder so mode cannot disagree with allocations, removed mode-specific frontend validation, and parameterized the lifecycle regression to prove 1-output and 3-output jobs follow the same create → token → read-only watch path. QUESTION_FACTORY, ROADMAP and AGENT_HANDOFF now record the decision. Frontend 476/476 and production build pass; source changes remain local/uncommitted and are not deployed." },
    { date: "2026-07-17", who: "Claude (Fable 5)", project: "",
      summary: "End-of-day Claude wrap across all of today's chatrooms (shared checkout with Codex; each platform item has its own detailed entry below). Platform: (1) WS5.3-07 Drive file-ID trust boundary — the last full-review P1 — ruled with Natalie, blast-radius-audited and taken LIVE as tpc-api-00075-h8f (Opus 4.8). (2) WS5.2-01h7 superadmin-only AI generation ruled and enforced at both backend and frontend layers with refusal tests, integrated with the parallel Codex watch lane as f5b3314. (3) WS5.2-01c5 review-method rehearsal completed with Natalie as scribe and CLOSED — method findings now feed the blinded 01c6/01c7 calibration at the head of the queue. (4) NEW WS11 backend-maintainability track registered in ROADMAP (8e33cec) with its first two phases landed on origin/main at zero runtime diff: WS11-01 scripts-bootstrap dedupe 401c3f8 (15 of 16 scripts on scripts/lib/bootstrap.js, backend 268/268; companion-sessions port + live ADC read-back smoke deferred) and WS11-02 eslint gate e63b281 (npm run lint, 0 errors); WS11-03/04/05 stay gated on the 01c7 containment closing — the WS11 roadmap row was added to this dashboard today. (5) Committed the valid doc corrections the Codex final audit left pending (01c5→01c6/01c7 references in AGENT_HANDOFF/QUESTION_FACTORY/ROADMAP) as 6a209aa, pushed; platform tree clean at wrap. Workspace: dashboard changelog rotated per D8 into changelog/ARCHIVE-2026-07.md; workspace docs synced to the 2026-07-17 layout (458dd58); ten stale finished release-lane git worktrees (18f/18g lanes, ws4.3-23 release trio, 02g p1-3 trio, reconcile, patch-source) removed from TPC Root (~2 GB freed; every branch, including three unmerged doc/patch branches, retained in the platform repo)." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "End-of-day all-Codex wrap after every other task stopped. Release/security closeout: reconciled the backend/live ancestry into the verified main line; made Pages deploys commit-pinned, test-gated and reproducible; upgraded Vitest/Google clients so frontend/backend audits are zero; consolidated and deployed the reviewed security fixes, including the Drive file-ID trust boundary. WS5.2: built the private CLI scaffold/validator and completed the Codex+Claude 1×1 smokes; closed 01c5 as an unblinded review-method rehearsal; versioned the generator/judge contract, made the independent judge the sole AI evaluation draft, added fail-closed 01j recovery work, and source-built a superadmin-only session-paired watch plus authoritative Q+A result readback. The official GenerationRuns/one-job companion nevertheless went live before 01c7 and produced six review rows after one fail-closed regeneration; these are neither approved content nor calibration evidence. A minimal Pages hotfix now gives a cwd-independent `npm --prefix` command without activating watch. Final synchronized priority: run one honestly blinded 2–5-seed 01c6 calibration, make the 01c7 go/no-go, then reconcile the live lane before any new production batch or approval. Later gates remain 01j failure/recovery, 02e authenticated readback-or-waiver, GenerationCompanionSessions migration/readback, guarded backend/frontend rollout and non-promoting smoke. ROADMAP/QUESTION_FACTORY/AGENT_HANDOFF corrections from the final audit are valid and intentionally remain uncommitted for the owning platform task." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Fixed the live AI Generator command after it again told Natalie to run npm from ~ without a package path. The UI now emits one exact cwd-independent command using `npm --prefix \"$HOME/Documents/TPC Root/tpc-online-platform/cloud-run\"`, so it works from any folder and still keeps the pairing token out of argv. To avoid accidentally shipping the still-undeployed session-watch frontend/backend contract, the public release was cut as a minimal two-file hotfix from the exact live bad3490 line: private hotfix source 1a14da5 (462/462 + build) → Pages 6c15afe. The matching current-main form, including watch and targeted `--slot-id` recovery commands, is pushed as e7d598a (475/475 + build). Pages Actions, live asset readback and a signed-in browser smoke passed with no console warnings/errors. No backend migration/deploy or production generation was run." },
    { date: "2026-07-17", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "WS5.2-01c5 review-method rehearsal COMPLETED and closed. Natalie worked through the full rubric on the known (unblinded) k2_q03 Codex/Claude pair with Claude as scribe: all three integrity gates pass for both candidates; the 8-category surface-similarity indicator lands at 28.6% for each (well under the 55% reference), with the artwork-N/A rule rehearsed after an initial Same-marking; sibling distinctness ruled borderline (different storylines and operand order, but shared sum 13 and the same consecutive-run distractor pattern — flagged as an optional 01c6 generation-rule improvement); Score E reached 79.0 (codex) and 81.67 (claude) of 90 scorable points with visual polish N/A because raw text cannot be judged for polish. Final decisions: both would approve only after required adjustments (codex explanation must restate the story context, not just the arithmetic; claude should use an English name rather than romanized Siu Ming in the English half) plus a rendered-UI polish check. No generator ranking claimed; nothing promoted. Timing: ~25 minutes for one seed-pair with a live scribe. Method findings recorded for 01c6: blinded review against the rendered question UI with declared difficulty shown, pre-applied N/A rules, sibling categories judged together, an explanation-context checklist line, and a notes field on every category/score. Docs: ROADMAP 01c5 done, AGENT_HANDOFF queue now leads with 01c6–01c7; committed b777104 and pushed." },
    { date: "2026-07-17", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Completed and security-hardened the accepted WS5.2-01i2 session-paired watch source: start the companion once with one hidden session token, then each later New generation click is discovered without another Terminal visit. The browser still never launches or contacts a local process, localhost port or deep link. Session auth is discovery-only; the backend mints a submission-only capability bound to one exact job/slot/attempt and serializes acquire/submit against Stop or re-pair revocation. Quiet authenticated heartbeats keep healthy long model work online; two consecutive unconfirmed slot failures stop/close the watcher before a third claim; recovery is a single-shot `--slot-id` command that cannot take the watcher's current/later work. The UI removes connected, expired and revoked bearers and reports a genuinely missed heartbeat offline. Natural session expiry stops discovery while an already-issued slot capability keeps its independent maximum two-hour TTL for in-flight completion; explicit revocation invalidates it. Private main 2db34db is pushed; backend 268/268, frontend 475/475, production build, local visual QA, diff checks and multi-agent security/UX review pass. Source only: GenerationCompanionSessions migration, backend/frontend deploy and a non-promoting smoke remain pending; no production batch was started." },
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
  ],
};
