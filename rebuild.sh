#!/usr/bin/env bash
# =============================================================================
# aiot-cybersecurity-salekit — safe, zero-downtime rebuild for
# aiot-cybersecurity.tesaiot.dev
# =============================================================================
# CONTENT FLOW
#   Content team pushes to  github.com/ManotChai/tesa-aiot-cybersecurity (upstream)
#   This deploy clone is    github.com/wiroon/tesa-aiot-cybersecurity    (origin, fork)
#   This script: pull upstream/main → merge → push fork → build → publish.
#
# WHY out_live/ (same pattern as bento-studio-web/rebuild.sh)
#   tesa-nginx serves this site from a bind mount. `next build` (output:export)
#   DELETES and recreates `out/`, which changes its inode and breaks a bind
#   mount pointing straight at `out/` — the container then sees an empty dir.
#   docker-compose therefore mounts the STABLE `out_live/` dir; we build into
#   `out/` (scratch) and rsync INTO `out_live/` in place. Inode never changes,
#   nginx picks up new files live — no container restart, no downtime.
#
#   NEVER point the nginx mount back at `out/`, and NEVER `rm -rf out_live`.
#
# USAGE
#   ./rebuild.sh             # pull latest content from upstream, build, publish
#   ./rebuild.sh --no-pull   # rebuild what is checked out locally only
# =============================================================================
set -euo pipefail

cd "$(dirname "$0")"

BUILD_DIR="out"
LIVE_DIR="out_live"

if [[ "${1:-}" != "--no-pull" ]]; then
  echo "▶ Pulling latest content from upstream (ManotChai/tesa-aiot-cybersecurity) ..."
  git fetch upstream
  git merge --no-edit upstream/main
  echo "▶ Syncing fork (origin) ..."
  git push origin main || echo "⚠ Could not push to fork — continuing with deploy anyway."
fi

echo "▶ Installing dependencies (npm ci) ..."
npm ci --no-audit --no-fund

echo "▶ Building static export (next build → $BUILD_DIR/) ..."
npm run build

if [[ ! -f "$BUILD_DIR/index.html" ]]; then
  echo "✗ Build produced no $BUILD_DIR/index.html — aborting, NOT touching $LIVE_DIR/" >&2
  exit 1
fi

echo "▶ Publishing into stable $LIVE_DIR/ (rsync in place — preserves inode) ..."
mkdir -p "$LIVE_DIR"
rsync -a --delete "$BUILD_DIR/" "$LIVE_DIR/"

echo "✓ Published. nginx serves $LIVE_DIR/ live — no restart needed."
echo "  Verify: curl -s -o /dev/null -w '%{http_code}\\n' https://aiot-cybersecurity.tesaiot.dev/"
