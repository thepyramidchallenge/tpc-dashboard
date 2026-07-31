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
    updated:   "2026-07-31",
    updatedBy: "Natalie + Codex",
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
   * use one of these keys. Split: Max = pyramid-site + UI in general, plus
   * the WS5.2 question factory and WS5.3 asset factory (reassigned
   * 2026-07-31, after Natalie closed WS5.2 to GO) and the WS6.2 UI review
   * (reassigned the same day);
   * Natalie = the rest of the learning platform (data layer, content,
   * QuestionSets, WS6.1 pilot).
   * --------------------------------------------------------------------- */
  owners: {
    max:     { name: "Max",     zh: "Max",     scope: "pyramid-site + UI in general incl. WS6.2 UI review + question/asset factories (WS5.2 · WS5.3) / 網站重建、整體 UI（含 WS6.2 介面檢視）、出題及素材工廠", color: "#1f7a96" },
    natalie: { name: "Natalie", zh: "Natalie", scope: "Learning platform, data, content (excl. WS5.2/WS5.3 factories) / 學習平台、資料層、內容（工廠除外）", color: "#6d4fd6" },
    both:    { name: "Max + Natalie", zh: "Max + Natalie", scope: "Shared / 共同", color: "#5a6570" },
  },

  // The single most important thing to know before starting work today.
  focus:
    "WS4.2 is production-complete: the fixed 30-question mock, admin publish/unpublish gate, exact active-attempt snapshot, reload recovery, integrity log and bilingual Coming Soon state all passed live. Current platform focus returns to bounded official content and WS5.1-04 exact-version QuestionSets; Max owns WS5.2/WS5.3, Natalie keeps human approval and WS5.1-04 onward, and Treasure activation remains on hold.",

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
      next:  "Public Pages 14b2494 serves merged main e3a5d7f (WS4.2 plus the glyph release) via workflow 30627860310. Keep each bounded-pack AI row at review until explicit approval, then build the official WS5.1-04 exact-version QuestionSets. Cross-device language persistence still requires a separate backend/migration release.",
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
      next:  "The completed WS4.2 release is recorded on private main. Cloud Run tpc-api-ws42align0731 serves 100% from b91684e; public Pages serves application source e3a5d7f; migrations and the full publish/run/reload/submit/unpublish smoke passed. Next: official WS5.1-04 QuestionSets after bounded content approval; the account-language backend and Customers migration remain undeployed.",
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
      { title: "Contributor access scope — needs Max", project: "tpc-online-platform", owner: "max", note: "Open question raised by Natalie 2026-07-31, awaiting Max; nothing is settled. Concerns how broadly contributors are scoped as the team grows, and whether the 2026-07-03 deep-dive §6 proposal (never ratified — its draft ledger entries were never adopted) should be updated, applied, or marked superseded. Written up in the private repo under docs/ROADMAP.md → 'Open question for Max — contributor access scope'; kept out of the Business Space because this repo is public." },
      { title: "Bounded official content → exact-version QuestionSets", project: "tpc-online-platform", owner: "both", note: "Shared handoff: Max owns bounded WS5.2 generation and keeps each candidate at status=review with independent-judge evidence; Natalie owns explicit human approval and WS5.1-04 exact-version QuestionSets. Do not count calibration or smoke rows as official content. Treasure remains held under WS5.2-04." },
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS6.3 report tab enhancements", project: "tpc-online-platform", owner: "both", note: "Parallel lane — does not displace the shadow feedback proof. Dixon (intern) is implementing; Max and Natalie stay accountable. Frontend only, on the existing WS3.1-06 Report screen: extract aggregation into a tested reportStats.js, then accuracy trend, topic/domain breakdown with a 7d/30d/all filter, local past-attempt review in the History drill-in, minimum-data guards, and test coverage. Cross-device completeness stays WS8-04; WS8-01, WS8-10, WS8-12 and WS9-00 remain excluded and unassigned." },
      { title: "WS6.1 — pilot-gating polish", project: "tpc-online-platform", owner: "natalie", note: "Do only launch-critical polish before real users: accuracy consistency, R8/concurrency smoke, fallback audit and first-time-user default → WS6.1-11 pilot. Split from WS6.2 on 2026-07-31 when the UI review moved to Max; the two now run as separate lanes." },
      { title: "WS6.2 — UI review", project: "tpc-online-platform", owner: "max", note: "Reassigned to Max 2026-07-31, matching his UI-in-general scope. Pilot-relevant pass: notify/validation classes, whole-app screen-by-screen review, bilingual copy, glyph/colour/button consistency, Home layout, button UAT, young-learner usability and the Log abnormal-activity banner. Five tasks stay held until after the pilot. WS6.2-07 still confirms UID/display-field scope with Max first." },
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
        { label: "Dixon · Learner zh-HK/en UI (frontend live; header selector removed)", state: "done" },
        { label: "Full-review gate · 10 P1/P2 risks remediated and regression register retained", state: "done" },
        { label: "WS4.2 · Mock / fixed 30-question set", state: "done" },
        { label: "WS6.1 · QA, polish, pilot → launch", state: "active" },
        { label: "WS11 · Backend maintainability refactor (01 bootstrap dedupe + 02 lint done; 03–05 now unblocked but sequenced after current content work)", state: "active" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "max",
      title:   "UI review (WS6.2) — pilot-relevant pass",
      items: [
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
        { label: "WS5.3 · Asset factory (AI SVG gen)", state: "active" },
        { label: "Recurring AI factories (WS5.2-01f/01g evidence-gated auto-approval · WS5.3-05 illustrative-asset generator)", state: "hold" },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "both",
      title:   "Report tab enhancements (WS6.3) — Dixon implementing",
      items: [
        { label: "WS6.3-00 · Extract Report aggregation into a tested src/lib/reportStats.js", state: "todo" },
        { label: "WS6.3-01 · Accuracy trend over time (session-level, cross-device-safe fields)", state: "todo" },
        { label: "WS6.3-02 · Topic/domain breakdown + 7d/30d/all time filter", state: "todo" },
        { label: "WS6.3-03 · Local past-attempt review in the History drill-in", state: "todo" },
        { label: "WS6.3-04 · Minimum-data guards and sync states", state: "todo" },
        { label: "WS6.3-05 · Report test coverage", state: "todo" },
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
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "SIGN-IN POLISH: the login gate is now a centred card on the surface backdrop (language pills, brand, Google button and hint grouped; scoped so the account-setup form keeps its full panel), a pulsing skeleton pill holds the Google button slot while the GIS script loads (the button used to appear seconds late with nothing in its place), and a hung GIS load now surfaces the retry UI after 8s instead of failing silently. PR #57 merged as 5b0564a and deployed as Pages d2072f8; 607/607 frontend tests; live signin-card CSS marker verified. Docs synced via PR #59." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "WS4.2 COMPLETE: PR #52 merged the agreed fixed-set behavior as b91684e. Production gained the QuestionSets publication seal and exact DraftSessions question snapshot; Cloud Run tpc-api-ws42align0731 serves 100% with zero error logs through smoke. A superadmin published only the 30-question K2 smoke set, confirmed the 15-minute fixed-order briefing, reloaded and resumed the same wall-clock attempt, submitted all 30, verified the compact integrity record (telemetry present; one recovery), then unpublished it. Sheets read-back found 30 Attempts, no residual draft, successful publish/unpublish logs, all 8 sets draft and a blank final seal; learners again see the bilingual Coming Soon card. Public Pages 14b2494 now serves merged main e3a5d7f through workflow 30627860310, retaining both WS4.2 and Claude's glyph alignment. WS4.2-02/03 are closed; official content and WS5.1-04 QuestionSets remain next." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UI POLISH RELEASE: two frontend changes shipped to Pages. (1) Boot loader: the static \u25b2 splash became the logo mark assembling itself layer by layer (pure CSS/SVG, reduced-motion safe, also on the admin lazy-chunk fallback). (2) In-progress markers + glyph alignment (PR #50): every control whose function is deferred, Phase 2/3 or held \u2014 Profile upgrade, generator Treasure tab/button, Batch upload, Class A asset help, reserved question types \u2014 now carries a monochrome hourglass icon, and all interactive-control glyphs (back chevrons, list chevrons, Report clock, Result check/cross, bookmark flag, notification dots, quiz stepper, admin plus/spark/arrow/grid/dots) were unified on the shared monochrome Icon set with 12 new shapes; \u2039\u203a stripped from i18n strings. Combined tree verified 607/607 frontend tests + build; deployed as Pages cbb632f from merge 7a3a07d on top of the WS4.2 release; hourglass marker confirmed in the live bundle. Docs synced via PR #53." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "RECOVERY ALIGNMENT: closed the user-visible five-minute UI / 12-minute deployed-backend mismatch without shipping the held language-preference backend. Minimal release 62ae763 applies only the already-merged dc1ea75 timeout/test patch to exact diagnostics source 826c180; backend 518/518 and lint 0 errors passed. Cloud Run tpc-api-takeover5m0731 was staged at 0%, became Ready, passed tagged health, retained byte-identical non-image runtime configuration, then moved to 100%; canonical health passed and post-cutover error/5xx count was zero. No Sheets migration/read/write, generation action, frontend deploy, Customers migration or language-preference action occurred. Platform PR #49 merged the synchronized release boundary into main 8459c82. WS5.2-01j6 remains active only for a future controlled five-minute stale-attempt/takeover and late-result proof using suitable existing production state; do not create generation work solely for the smoke." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS6.2 UI review reassigned from Natalie to Max, matching his UI-in-general scope. The combined \"WS6.1 + WS6.2 pilot-gating polish\" card is split in two, since the halves now have different owners: WS6.1 launch-critical polish stays with Natalie, WS6.2 becomes its own Max-owned lane (15 tasks, 5 held until after the pilot). WS6.2-07 still confirms UID/display-field scope with Max before its review. Platform docs record the same gate on the WS6.2 section (157a146), mirroring how WS6.3 names its lane owner. That commit also corrected docs/README.md, which still claimed the diagnostics source was not in main — merging it made that false, and only the public Admin UI is still missing." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "REPORT TAB: recorded the WS6.3 lane now that its plan landed (platform 8600c57) — six frontend-only tasks on the existing WS3.1-06 Report screen: extract aggregation into a tested reportStats.js, accuracy trend, topic/domain breakdown with a 7d/30d/all filter, local past-attempt review in the History drill-in, minimum-data guards, and test coverage. Dixon (intern) is implementing; Natalie chose to keep the lane owned by Max and Natalie rather than add a new owner key, so accountability stays with the principals and Dixon is named in the card note. It is a parallel lane and does not displace the shadow feedback proof. Exclusions restated so they are not quietly absorbed later: cross-device completeness stays WS8-04, and WS8-01, WS8-10, WS8-12 and WS9-00 remain unassigned. Platform side landed earlier today: the AGENT_HANDOFF.md → docs/ move completed as a tracked rename with every reference repointed, FULL_REVIEW_RISKS.md was deleted with its one still-open item FR-07 (static SVG validation) migrated into ROADMAP under WS5.3-08 plus a short operational gate in the handoff, and the WS6.3 queue entry followed once the move was committed." },
    { date: "2026-07-31", who: "Natalie + Codex", project: "tpc-online-platform",
      summary: "DASHBOARD CLEANUP: consolidated the duplicate bounded-content and QuestionSets cards into one shared Now card. Max owns bounded WS5.2 generation; Natalie owns explicit human approval and WS5.1-04 exact-version QuestionSets. The cleanup changes no product scope: calibration/smoke rows remain excluded from official content, and Treasure remains held under WS5.2-04. The ownership history now says Max inherited no open WS5.2-01m build item rather than overstating all WS5.2 work as closed." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "GOVERNANCE: raised an open question for Max on contributor access scope, and assigned the existing report tab (WS3.1-06, Report.jsx — data visualization plus past-attempt review) to Dixon, TPC's intern; WS8-01 and WS8-04 are explicitly excluded. Natalie's position is that the intern will also join wider platform development and will therefore have access to most sensitive information; she asked that Max be flagged rather than that access be restricted unilaterally. Nothing is settled — this awaits Max. The detail is written up in the PRIVATE platform repo (docs/ROADMAP.md) and deliberately kept out of the Business Space, because tpc-dashboard is a public repository and the specifics would be world-readable; only this neutral pointer is public. Context for the decision: the 2026-07-03 deep-dive §6 intern-containment proposal was never ratified — its draft ledger entries were never adopted, and the decision, hypothesis and experiment ledgers still stop at D9, H6 and E3 — while practice has already moved past it since Dixon directed the live learner-language release. The dashboard roadmap/board entries for Dixon's report work are deliberately NOT added yet — the '[Check] Report tab requirements and roadmap' session is still drafting them, and Natalie chose to record ownership and the new task IDs together in one pass once that plan lands." },
    { date: "2026-07-31", who: "Natalie + Claude (Opus 4.8)", project: "tpc-online-platform",
      summary: "OWNERSHIP: WS5.2 (question factory) and WS5.3 (asset factory) are reassigned in full from Natalie to Max, effective today. Natalie's closing position on WS5.2 is the 2026-07-24 01c7 GO for the bounded official seed-pack lane — 9 of 10 full-review risks cleared (all four P1s), with FR-07's stricter static-SVG parser hardening deferred to WS5.3-08. WS5.2-01m closed earlier the same day in the parallel Codex session, so Max inherits no open WS5.2-01m build item; WS5.2-04 (Treasure curation/comparison/activation) transfers as held work. Dashboard changes: WS5.2/WS5.3 roadmap rows lifted out of Natalie's Phase-1 group into a new Max-owned 'Question & asset factories' group, carrying the held recurring-factories and WS5.2-04 rows; Dixon's learner zh-HK/en UI row stays in Natalie's Phase-1 group since it is not factory work; the Now card was rebased onto Codex's replacement and notes that generation is Max's while approval and WS5.1-04 onward stay Natalie's. Unchanged and deliberately so: GO authorizes the bounded lane only — it does not approve any candidate, publish answer guides, enable auto-approval, or start recurring generation, and human approval remains mandatory." },
    { date: "2026-07-31", who: "Dixon (initiator) + Codex", project: "tpc-online-platform",
      summary: "Dixon initiated and acceptance-directed the learner zh-HK/en UI release. Private main is 6ed5105; public Pages is f26f5f7 via successful workflow 30619332923. Live sign-in and Settings language selectors remain, while the authenticated learner-header selector was removed at Dixon's follow-up. Frontend 583/583 and the 94-module build passed. No language Cloud Run backend or production Customers Sheet migration was deployed." },
    { date: "2026-07-31", who: "Natalie + Claude (Fable 5)", project: "tpc-online-platform",
      summary: "UI polish: the boot splash and admin lazy-chunk fallback now show an animated pyramid loader — the logo mark assembling itself course by course (pure CSS/SVG, 0.2s fade-in delay so fast boots never flash it, reduced-motion users get the complete static mark). Committed as 66e2f20 on codex/ws5-2-01m-feedback-loop, kept strictly separate from the parallel uncommitted WS5.2-01m work; deploy-gate tests 549/549, published via deploy.sh as Pages bf1907e (workflow 30611377059) and live-verified on the public app." },
    { date: "2026-07-30", who: "Natalie + Codex (GPT-5); Claude evidence reviewed", project: "tpc-online-platform",
      summary: "JULY 30 WRAP — UI: Home dashboard typography/grid and the accuracy trend were iterated into an adaptive, runtime-built, pointer/keyboard-accessible five-point chart; the watch-pairing panel gained independent Codex/Claude CLI-aware model presets and exact custom IDs, all published through reviewed Pages releases. RELIABILITY: a real repeated-sign-in/Home fan-out caused 62 Sheets reads/minute and eight quota rejections; Codex traced it to duplicate GIS/auth work plus separate hydration calls, shipped one guarded getHomeBootstrap with a five-tab Results batchGet and one Questions read, and verified one fresh sign-in at six total Sheets reads, all attempt-1/200, followed by a five-minute window with zero reads, retries, quota errors, API errors, 5xx, or companion polling. WS5.2/GOVERNANCE: the obsolete evaluator path was physically removed; Phase-1 production sizing, recurring generation and auto-approval boundaries were closed or routed to later evidence gates; ROADMAP workstream summaries were restored; the expanded model picker landed on main 96007e6. HUMAN–AI REVIEW: exact source 2c71644 is live on Cloud Run tpc-api-ws5201m0730 at 100% and Pages df57e43; QuestionReviewEvaluations grew from 18 to 25 columns, and frozen human revisions, manual companion re-judging, fingerprint-bound approval, immutable evidence history and failure retention passed backend 497/497, frontend 546/546, migration 4/4, build and lint. The source remains pushed but unmerged on codex/ws5-2-01m-feedback-loop; 01m8a is honestly partial until one real revise→rejudge→decide round is read back. DOCS: all 20 tracked Markdown files were reconciled and pushed at 9ea066d; links/fences, 65 API actions, 326 unique roadmap IDs and all 18 calculated progress summaries pass. CRITICAL ASSESSMENT: Codex delivered substantial, well-tested product/release progress and responded well to the quota incident, but deployment from an unmerged branch and the still-unrun acceptance journey are material integration risks; daily UI/release churn also increased operational surface. No independently attributable July 30 Claude source/docs commit or active Claude worktree was found, so today does not support a symmetric agent-output comparison. Claude remains the configured independent-judge lane and its earlier co-authored 8c40a82 staging/recovery/metrics foundation is still embedded, but July 30's attributable implementation, incident response, release and documentation work was Codex-led." },
    { date: "2026-07-27", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Post-closure daily wrap for July 25–26, recorded after all meaningful platform development tasks became idle. The sole source change after the prior July 24 dashboard wrap was the final consolidation at 11d59c7; no further commit or deployment evidence landed on July 25–26. tpc-online-platform is clean and aligned with origin/main, and all 20 tracked Markdown files remain synchronized, so no platform documentation edit was necessary. Claude's co-authored 8c40a82 contribution is fully contained in main and supplied a strong WS5.2-01j foundation—pre-judge staging, judge-only recovery, one-replacement budgets, honest batch aggregates and per-attempt metrics—while Codex then hardened, tested, migrated, deployed and documented the wider release. Critical verdict: WS5.2 is operationally closed only for the bounded official seed-pack lane, not for recurring or autonomous generation; explicit human approval remains mandatory. The next product constraint is approved content inventory and disjoint QuestionSets, while FR-07 SVG allowlisting, FR-08 production asset evidence/snapshots and FR-09 frontend deployment remain follow-ups." },
    { date: "2026-07-24", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Final all-Codex July 24 wrap, recorded only after every other task became idle. The blinded 24-candidate comparison was accepted and selected direct compiled prompting; the live factory now has immutable prompt/input inspection, grouped time/token/cost metrics, Phase-1 answer guides, retained approval evidence, a daily purge, and the typed 87-row GenerationRecords ledger, with legacy split tabs deleted. The full 10-risk gate and all seven 01j recovery cases closed. Literal production proofs passed for judge-only retry, promotion Retry import plus payload-clearing Discard, 12-minute stale release/late-result rejection, and partial-family Finish; the seven-day elapsed wait was explicitly waived with automated expiry/non-restoration coverage, making WS5.2-01c7 GO for the bounded official seed-pack lane without waiving human approval. A real transient Sheets-quota burst was hardened by changing metrics to one three-range batchGet and failing quota responses immediately with Retry-After; the final retry fix removed a stale server-evaluator dependency, and the post-fix window was clean. Current production is Cloud Run tpc-api-ws52retry at 100% from backend e3d050d and Pages c5bbc84 from UI source 36ffd03; Home, Users/access, Log, Question Bank/Generator/Review and Asset Library improvements are live. Final validation includes backend 481/481, frontend 528/528, Vite build, zero audit findings, and clean quota telemetry. All 20 platform Markdown files were synchronized and pushed as docs tip 15183c2, with 12/12 local links and all 315 ROADMAP definitions intact. Next: bounded official review rows with saved judge evidence and explicit human approval, then WS5.1-04 QuestionSets." },
    { date: "2026-07-24", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap across all July 23 platform tasks, recorded after every other Codex task stopped. WS4.3-25 session telemetry was migrated and released: Cloud Run tpc-api-00092-xp6 serves 100%, Pages 83dcc63 came from source 73b2e05, 101 fabricated pre-cutoff zero attempt times became null, and authenticated timed/untimed, save/resume, reload, History, denominator, timing and topic-label smokes passed. Source work fixed awaited audit logging and same-second log pagination; pinned exact generator/judge CLI/model roles; added deterministic prompt export manifests; added hash-checked, chunked 30-day exact input retention plus dry-run-first purge; and integrated backend-authoritative prompts, Phase-1 answer guides, pre-judge staging, judge-only recovery, one-replacement budgets, honest batch aggregates and per-attempt timing metrics. A private non-promoting route rehearsal produced 24/24 structurally valid, corrected-judge-gate-passing candidates awaiting blinded human review, but it used frozen local inputs and does not close 01c7. The full review registered 10 open P1/P2 release risks. After all Codex and Claude rooms were idle for 10 minutes, the shared tree was reconciled, documentation synced, verified at backend 433/433 + frontend 506/506 + build/lint/audits green, and pushed clean as fe8904d. No 01k/01l/01j production deployment occurred; clear the risk gate, run the four migrations, finish UI/purge scheduling/live smokes, then run the official backend-managed comparison. The scheduled sync later confirmed dashboard, pyramid-site and tpc-online-platform current on main." },
    { date: "2026-07-23", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Completed WS5.2 post-01c7 Step 1 prompt freeze as platform commit 60f76a1. Candidate generation now uses the same private brief-only instructions for Codex and Claude, with no Claude generator.md overlay; requires natural localized character-name pairs such as 美美/Mia; requires teaching explanations as separate Traditional Chinese and equivalent English paragraphs; and treats same-seed diversity as an encouraged quality goal rather than an integrity gate or mandatory dedupe. The local scaffold policy is QF-2026-07-23, focused scaffold/preflight coverage passes 11/11, the full backend suite previously passed 336/336 with lint at 0 errors, and no comparison batch, Question row, promotion or deployment was started. Next: scaffold the blinded scored re-run for the same four seeds." },
    { date: "2026-07-23", who: "Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap recorded after every other July 23 task stopped. The only completed Codex work today was the scheduled repository sync: dashboard, pyramid-site and tpc-online-platform were all already clean and current on main, with the platform still at f73d841. No platform source, production, roadmap, focus or board state changed, so the existing 01c7 NO-GO / iterate priorities remain current." },
    { date: "2026-07-22", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Codex daily wrap for all July 21 tasks, recorded after every other Codex task stopped. The WS5.2 calibration finished: 01c6 yielded 8/8 would-approve candidates (4 as-is, 4 after minor edits), the controlled 2×2 A/B showed generator.md was quality-neutral within each model, Natalie set 01c7 to NO-GO / iterate, and the preferred bootstrap configuration is Codex + brief-only; freeze the prompt fixes and run a blinded scored Codex-vs-Claude comparison before any official 60-per-level generation. The live question-generation lane was cut over to GenerationJobs/GenerationSlots with GenerationRuns retained as rollback, gained complete saved independent review plus generation-time sibling-set handling, bounded transient/gate-failure recovery and exact-attempt release, and moved companion discovery/termination to a revocable three-hour session. The final read-efficiency release batches control-table reads, reuses locked snapshots and polls foreground clients every 15 seconds, reducing one-job claim from 9 to 2 reads and submit/promotion from 21 to 5; PR #6 merged as f73d841, Cloud Run tpc-api-00090-ncz serves 100%, Pages 65109e5 is live, and backend 281/281 plus frontend 481/481 and the production build pass. Home bootstrap, production-status tooling and protected source delivery were also improved, while production automation remains intentionally unconfigured. The July 22 daily sync then confirmed dashboard, pyramid-site and tpc-online-platform clean and current on main." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "A real post-recovery companion_judge_failed issue established the bounded transient retry policy. Companion source 37974f0 now retries generator or independent-judge CLI/structured-output failure exactly once after one second in a fresh process, retaining the same claimed slot attempt and reusing the same candidate for judge retry. Valid completed gate failures are never auto-retried; if both phase attempts fail, revision 00087's exact-attempt release still moves the slot to needs_regeneration without a Question row. Committed source passes 276/276; the founder-Mac combined full-sibling/compatibility source passes 279/279; lint 0 errors. No Cloud Run redeploy was required." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Closed the recurring stuck-generating failure in the local AI-question companion. Commit df0a19d adds an attempt-bound, idempotent backend failure report: generator, independent-judge, submit and normal SIGINT/SIGTERM failures release only the exact still-generating attempt to needs_regeneration; duplicate, stale and post-success reports cannot overwrite authoritative state, and no model/error text is sent. Cloud Run tpc-api-00087-qzd is live at 100% with auth/fingerprint/rate-limit controls preserved; ping and invalid-capability route smokes passed. The founder-Mac companion also retains the older-backend review-shape compatibility retry. Committed suite 274/274 and combined local suite 277/277 pass, lint 0 errors. Hard power/network outages retain the 12-minute stale-attempt recovery safety net." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Reduced signed-in Home startup to one authenticated getHomeBootstrap request backed by a single Results workbook batchGet for sessions, bookmarks, notifications and drafts; Attempts are no longer loaded until history is requested. Established deployed infrastructure plus scripts/production-status.py as machine truth and AGENT_HANDOFF.md as the one human operational context, removing volatile revision/test-count duplication and correcting the production ledger description. Added path-aware source CI and a protected, exact-SHA, manually dispatched backend-first production promotion workflow with candidate health/config checks, explicit traffic promotion and verified public Pages publication. Source and docs are complete; no production deployment was made, and one-time GitHub production-environment, WIF and public-repo-token activation remains explicit." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Resolved the repeated genjob_d586cae5 slot-1 submit failure after attempt 2 identified attestation_review_invalid:evaluation. The independent Claude review was not the defect: production REQUIRE_EVALUATION_FINGERPRINT=true had been applied to pre-promotion candidate validation even though no live Question row—and therefore no content fingerprint—exists at that stage. Commit 4b69f3b exempts only this advisory pre-promotion check; candidate/prompt hashes still bind the review, while final human approval retains exact-content fingerprint enforcement. Production-flag companion/rejection/final-approval coverage and the complete backend suite pass 272/272; lint remains 0 errors. Cloud Run tpc-api-00086-m8r is Ready and serves 100% through LATEST with a new image digest; live action-router health passed. Read-only Sheet verification shows attempt 2 left the same slot generating with blank reserved/question IDs and no payload/hash, so Natalie should retry the same job/slot as attempt 3 rather than create a new job." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Investigated the first post-rollout full-review submit: genjob_d586cae5 slot 1 generated with Codex and judged with Claude, then failed closed as attestation_review_invalid. No candidate, payload or Question row was retained; the slot remains recoverable at generating/attempt 1. There were exactly two stable k2_q12 siblings and no concurrent promotion, ruling out live comparison-set drift. The backend had collapsed shape, comparison-set, evaluation and rationale failures into one opaque code, so d95899f now returns a safe stage suffix without logging question content (272/272, lint 0 errors). Deployment uncovered a second operational defect: Ready revisions 83–85 existed but traffic was explicitly pinned to 00082. Traffic is repaired to 100% LATEST on tpc-api-00085-m5l, so future deploys route normally. Next action: retry the same slot; success completes the saved-review smoke, while any failure now identifies its exact validation stage." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Took the complete AI-question review contract live without globally freezing production writes. Stopped only local AI generation, copied the 7 JOB/SESSION and 16 SLOT rows from GenerationRuns into exact GenerationJobs/GenerationSlots projections, re-read the source to prove no drift, and left GenerationRuns untouched for rollback. Added/read back Questions.generationReview at AA1 plus its Fields definition; hardened both migrations for Sheets-truncated trailing blanks and an initially 26-column grid. Cloud Run tpc-api-00082-dxj serves the matching backend at 100%; Pages 171a69c from source 46b3a26 serves the saved full review/session UI. Pages Actions, API ping and live bundles passed; the obsolete AI-draft-disabled/Retry-score copy is absent. Old-runtime rows including k2_m000003_ai remain honestly manual because no complete review was generated. Backend 272/272, frontend 476/476, production build and lint (0 errors) pass. Remaining: non-promoting watch/revocation smoke, an explicitly authorized new-row saved-review readback smoke, and physical removal of the obsolete server adapter." },
    { date: "2026-07-21", who: "Natalie + Codex (GPT-5)", project: "tpc-online-platform",
      summary: "Fixed the missing AI-question review at its real source. The local independent judge no longer returns only three gates: its versioned contract now produces the full advisory review (gates, eight-category seed and closest-sibling comparisons, anchored confidence ratings and rationale). Claims include sanitized same-seed review/approved siblings; the backend requires the exact comparison set, validates/recomputes every raw judgment, carries the review through idempotent promotion and stores it in server-owned admin-only Questions.generationReview. Student reads omit it and content edits clear it. Generator results display gates, confidence, both similarity percentages, all eight judgments and rationale; the approval panel prefills the same editable evidence without a second disabled model call. Added the frozen-write schema migration/template/docs and fail-closed legacy behavior. Natalie then confirmed production still serves the old disabled-server-draft/Retry score bundle: job genjob_f79e4d5f-4d3c-43aa-88e7-f8d9810b4f37 created k2_m000003_ai without a full saved review, while the k3_q16 slot failed the question gate. Existing rows remain manual. Backend 269/269, frontend 476/476, targeted UI 41/41, production build and lint (0 errors) pass. Coordinated migration/deploy needs explicit authorization and remains blocked by the recorded activation gate." },
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
  ],
};
