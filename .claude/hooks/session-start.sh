#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web (remote) environments; locally devs
# manage their own node_modules.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Restore dependencies so `npm run dev` / `npm run build` work immediately.
# `npm install` (not `ci`) is idempotent and benefits from container caching.
npm install --no-audit --no-fund
