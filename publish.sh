#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# Publish the dashboard to the PUBLIC mirror repo HKYCAA/tpc-dashboard, which
# serves  https://hkycaa.github.io/tpc-dashboard/  via GitHub Pages.
#
# Source of truth stays here in tpc-workspace (PRIVATE). This script splits the
# dashboard/ folder out and force-pushes it to the public repo's main branch.
#
# Run it AFTER you commit a change to dashboard/ (e.g. data.js):
#     bash dashboard/publish.sh
# -----------------------------------------------------------------------------
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

REMOTE=dashboard-pages
PUBLIC_URL=https://github.com/HKYCAA/tpc-dashboard.git

# make sure the public remote is configured
git remote get-url "$REMOTE" >/dev/null 2>&1 || git remote add "$REMOTE" "$PUBLIC_URL"

# split dashboard/ into a temp branch and force-push it to the public main
git branch -D _pages >/dev/null 2>&1 || true
git subtree split --prefix dashboard -b _pages >/dev/null
git push -f "$REMOTE" _pages:main
git branch -D _pages >/dev/null

echo "✓ Published → https://hkycaa.github.io/tpc-dashboard/"
