#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS_SRC="$REPO_DIR/.agents/skills"
CONTEXT_SRC="$REPO_DIR/.agents/context"

# --- Skills ---
SKILL_DIRS=(
  "$HOME/.claude/skills"
  "$HOME/.cursor/skills"
  "$HOME/.codex/skills"
  "$HOME/.gemini/skills"
)

for skill_dir in "${SKILL_DIRS[@]}"; do
  if [[ -L "$skill_dir" ]]; then
    echo "Removing old symlink: $skill_dir"
    rm "$skill_dir"
  fi
  mkdir -p "$skill_dir"

  for skill in "$SKILLS_SRC"/*/; do
    skill_name="$(basename "$skill")"
    [[ "$skill_name" == .* ]] && continue   # skip hidden dirs like .system
    [[ -L "${skill%/}" ]] && continue       # skip symlinks (globally installed skills)
    ln -sfn "$skill" "$skill_dir/$skill_name"
  done
done

echo "Skills synced."

# --- Context files ---
# Each entry is "src_relative_to_context_dir:dest_absolute".
# Cursor global rules are UI-only (Settings > Rules); no local file to sync.
CONTEXT_LINKS=(
  "global.md:$HOME/.claude/CLAUDE.md"
  "global.md:$HOME/.gemini/GEMINI.md"
)

for entry in "${CONTEXT_LINKS[@]}"; do
  src="$CONTEXT_SRC/${entry%%:*}"
  dest="${entry##*:}"
  mkdir -p "$(dirname "$dest")"
  if [[ -f "$dest" && ! -L "$dest" ]]; then
    echo "Backing up existing $(basename "$dest") → ${dest}.bak"
    mv "$dest" "${dest}.bak"
  fi
  ln -sfn "$src" "$dest"
done

echo "Context files synced."
