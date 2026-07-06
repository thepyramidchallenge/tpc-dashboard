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
    "WS5 admin is FULLY deployed as of 2026-07-06 and ready for the WS5-17 smoke. Production = Cloud Run `tpc-api-00032-8l5` + Pages `a3cdd46` (bundle `index-CuQp5Ia8.js`; source `0798534`), carrying all four WS5 layers together: the review flow (draft→提交審批→批准/退回→重新提交審批; disabled terminal), the version policy (儲存改工作稿，批准出新版本 — snapshot-on-approve into the new QuestionVersions tab, keep all versions), WS5-16 per-tab permissions (Users-tab storage, no AdminEmails sheet), and the field-rules pass (limits alignment, domain↔topic autofill, reviewNote keep-but-clear 已解除 prefix, createdBy/createdAt authorship, English-only studentName, superadmin-only 日誌). Live Questions header runs …reviewNote(T1)·version(U1)·createdBy(V1)·createdAt(W1); QuestionVersions tab + Fields docs in place (read-back verified). Next: live-smoke WS5-17 end to end (incl. v1/v2 minting + 版本歷史) and close WS5-01/02/03/16 if green.",

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
      next:  "WS5 fully deployed 2026-07-06 (source `0798534`, Pages `a3cdd46`, Cloud Run `tpc-api-00032-8l5`): review flow + version policy (QuestionVersions snapshot-on-approve) + per-tab permissions (Users-tab storage, no AdminEmails sheet) + field-rules pass. Live sheet migrations complete (reviewNote T1 · version U1 · createdBy V1 · createdAt W1 · QuestionVersions tab). Live-smoke WS5-17: create/edit draft → submit review → approve/unapprove with reviewNote → resubmit → student serveability, plus owner add-user/tab-permission/revoke. Then close WS5-01/02/03 and WS5-16 as smoke permits, seed authored sets (WS5-04), then WS4.2 fixed-set practice → WS6.1 polish + WS6.2 UI review → pilot/launch.",
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
      next:  "Source of truth for full-stack platform work — tracks the Phase-1 roadmap. Current WS5 source/deploy checkpoint: `0798534` (review flow + version policy + per-tab permissions + field-rules); Pages `a3cdd46`; Cloud Run `tpc-api-00032-8l5`; all live-sheet migrations done (reviewNote/version/createdBy/createdAt + QuestionVersions tab); WS5-17 live smoke remains.",
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
      { title: "WS5 live smoke", project: "tpc-online-platform", owner: "natalie", note: "Live now has the stale-account access fix (`5257544` / Cloud Run `tpc-api-00031-qbx` / Pages `95a2a3f`), so owner should see 管理員. Smoke review flow + admin permissions on live." },
      { title: "Hero parallax parity",        project: "pyramid-site",        owner: "max",     note: "7-layer hero is reproducible offline — confirm it matches live." },
      { title: "Absorb scoring/report graphics", project: "pyramid-site",     owner: "max",     note: "distribution curve, scoring table, radar 1/2 → public/img (ASSET_GATHER §B)." },
    ],
    next: [
      { title: "WS5-04 — Authored sets", project: "tpc-online-platform", owner: "natalie", note: "After WS5-17 smoke, seed authored QuestionSets only — never real_seed. Live Sheets already include 30 K2 authored dummy arithmetic rows for testing; production-quality content remains open." },
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
        { label: "WS5 · Admin & content",             state: "active"   },
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
  ],
};
