# Changelog archive — 2026-06

Append-only. Rotated out of data.js per the changelog-rotation rule
(AGENTS.md); newest first within each rotation batch.

## Rotated 2026-07-03 (11 entries)

- **2026-06-25** · Claude (Opus 4.8) · tpc-online-platform — WS3.2 DONE: React student app (prototype-v0.2) is production. Close-out review fixed B1 (one-practice-one-save), B4 (instant feedback = no timer), C1 (notification badge clears) and C3 cleanup. Gates closed — browser QA passed, production switched to the v0.2 build (deploy.sh → gh-pages), and REQUIRE_AUTH=true enforced on Cloud Run (rev tpc-api-00006-jsm; real-login save verified). Added a Vitest + Testing Library suite (138 pass, 1 skipped). Known gap: 69 per-choice crop images missing (deferred to WS5).
- **2026-06-25** · Codex · tpc-online-platform — Started WS3.1 React rebuild: created prototype-v0.2 as a React + Vite + JavaScript static SPA, ported the student flow shell (sign-in/setup, Home, Practice setup, Quiz, Result, Report, Profile), preserved Cloud Run/GIS adapter boundaries, added bundled K2/K3 data/assets, and verified npm install/build plus local Chrome sign-in render.
- **2026-06-24** · Claude (Opus 4.8) · tpc-online-platform — WS2 DONE: real Google sign-in live + tested end-to-end. Vendor-neutral Google Identity Services on the frontend (TPC.auth adapter) → Cloud Run verifyGoogleToken verifies the ID token server-side; uid = Google sub; first-login writes Customers.Users. Admin role server-authoritative (ADMIN_EMAILS allow-list). Verified a real Google account signed up on production. Note: REQUIRE_AUTH still off (write lockdown is the one remaining toggle). No Firebase/Supabase dependency.
- **2026-06-24** · Claude (Opus 4.8) · tpc-online-platform — WS1 DONE: full Sheets data layer live + tested. Backend pivoted Apps Script → Cloud Run (Node, asia-east2, project tpc-platform-2026) reading/writing all 3 workbooks via a service account. Verified end-to-end against real sheets — getQuestionSet, upsertUser, saveSession (server-side graded), listUserHistory all 200. Prototype apiUrl wired; reads (gviz) + writes (Cloud Run) both live.
- **2026-06-24** · Claude (Opus 4.8) · tpc-online-platform — WS1 read path: stood up the Google Sheets question bank and linked the prototype to it (gviz CSV, read-only). Verified live end-to-end — 40 K2/K3 questions + 5 sets load, DATA_SOURCE flips to 'live' with bundled fallback. Write API (sessions/attempts) + SheetsBackend adapter still outstanding.
- **2026-06-24** · Claude (Opus 4.8) — Fixed stale links: live URL → thepyramidchallenge.github.io/tpc-dashboard; repo URLs → thepyramidchallenge org; workspace marked offline-only.
- **2026-06-24** · Claude (Opus 4.8) · tpc-online-platform — Synced roadmap with TASKS_PHASE1.md — added 'Adaptive difficulty' to Later phases (the one plan item missing from the dashboard).
- **2026-06-22** · Claude (Opus 4.8) — Reworked the colour scheme for readability — system map is now colour-coded by owner/layer (Max=teal, Natalie=violet, backend=blue/green).
- **2026-06-22** · Claude (Opus 4.8) — Switched the dashboard to a light/white theme.
- **2026-06-22** · Claude (Opus 4.8) — Added ownership (分工: Max = pyramid-site + UI, Natalie = platform), bilingual labels, and published the dashboard online at hkycaa.github.io/tpc-dashboard.
- **2026-06-22** · Claude (Opus 4.8) — Created the workspace dashboard (system map, roadmap, board, changelog) as the daily source of truth.
