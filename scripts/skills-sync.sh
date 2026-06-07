#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS_SRC="$REPO_DIR/.agents/skills"

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
