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
    updated:   "2026-06-22",
    updatedBy: "Claude (Opus 4.8)",
    note:      "Live at hkycaa.github.io/tpc-dashboard · light theme.",
  },

  /* --- people / ownership 分工 ------------------------------------------
   * Who owns what. `owner` fields elsewhere (projects, roadmap, board) must
   * use one of these keys. Split: Max = pyramid-site + UI in general;
   * Natalie = the rest (learning platform, data layer, content).
   * --------------------------------------------------------------------- */
  owners: {
    max:     { name: "Max",     zh: "Max",     scope: "pyramid-site + UI in general / 網站重建及整體 UI", color: "#3f8aa6" },
    natalie: { name: "Natalie", zh: "Natalie", scope: "Learning platform, data, content / 學習平台、資料層、內容", color: "#b89cff" },
    both:    { name: "Max + Natalie", zh: "Max + Natalie", scope: "Shared / 共同", color: "#9aa7ad" },
  },

  // The single most important thing to know before starting work today.
  focus:
    "pyramid-site is the near-term priority: reach visual parity with the live " +
    "Squarespace site, then deploy. In parallel, start tpc-online-platform WS0→WS1 " +
    "(the Sheets data layer is the spine of Phase 1).",

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
      repo:  "github.com/HKYCAA/pyramid-site",
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
      repo:  "github.com/HKYCAA/tpc-online-platform",
      run:   "cd tpc-online-platform/prototype && python3 _serve.py   # http://127.0.0.1:5510",
      next:  "Build the Phase-1 free Practice MVP — start WS0 setup → WS1 data layer.",
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
      repo:  "github.com/HKYCAA/tpc-workspace",
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
      { title: "WS0 — repo + app skeleton",   project: "tpc-online-platform", owner: "natalie", note: "SPA scaffold + Firebase Auth project (Google sign-in) + hosting decision." },
      { title: "WS1 — Sheets data layer",     project: "tpc-online-platform", owner: "natalie", note: "Apps Script JSON API + Backend interface (SheetsBackend). The spine." },
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
        { label: "WS0 · Project setup",               state: "todo"   },
        { label: "WS1 · Data layer (Sheets + API + adapter)", state: "todo" },
        { label: "WS2 · Auth & onboarding",           state: "todo"   },
        { label: "WS3 · App shell & student screens",  state: "todo"   },
        { label: "WS4 · Question engine",             state: "todo"   },
        { label: "WS5 · Admin & content",             state: "todo"   },
        { label: "WS6 · QA, polish, pilot → launch",   state: "todo"   },
      ],
    },
    {
      project: "tpc-online-platform",
      owner:   "natalie",
      title:   "Later phases",
      items: [
        { label: "Test Mode + ranking",              state: "todo"   },
        { label: "Payments (Stripe / subscription)",  state: "todo"   },
        { label: "Migrate Sheets → Firestore/Supabase", state: "todo" },
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
      app["App shell<br/>(Home · Practice · Result · Report · Admin)"]:::wip
      adapter{{"Backend interface<br/>(data-access adapter)"}}:::iface
    end

    %% ---- backend ----
    subgraph BE["Backend"]
      auth["Managed Auth<br/>Firebase / Supabase · Google sign-in"]:::be
      sheets[("Google Sheets<br/>via Apps Script JSON API<br/>(now)")]:::be
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
    adapter --> sheets
    adapter -.->|migration| future

    classDef actor fill:#fdf7e7,stroke:#b07d00,color:#5c4a16,stroke-width:1px;
    classDef live fill:#eaf4f8,stroke:#2b6478,color:#1d4a5a;
    classDef wip fill:#eaf4f8,stroke:#3f8aa6,color:#1d4a5a,stroke-dasharray:4 3;
    classDef ref fill:#f1f3f5,stroke:#aab1b8,color:#5a6570;
    classDef iface fill:#fdf7e7,stroke:#b07d00,color:#5c4a16;
    classDef be fill:#eaf4f8,stroke:#2b6478,color:#1d4a5a;
    classDef future fill:#f6f7f9,stroke:#aab1b8,color:#6a727c,stroke-dasharray:4 3;
  `,

  /* --- changelog --------------------------------------------------------
   * PREPEND newest first. One line per session: { date, who, project, summary }.
   * project "" = cross-cutting / workspace.
   * --------------------------------------------------------------------- */
  changelog: [
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Switched the dashboard to a light/white theme." },
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Added ownership (分工: Max = pyramid-site + UI, Natalie = platform), bilingual labels, and published the dashboard online at hkycaa.github.io/tpc-dashboard." },
    { date: "2026-06-22", who: "Claude (Opus 4.8)", project: "",
      summary: "Created the workspace dashboard (system map, roadmap, board, changelog) as the daily source of truth." },
  ],
};
