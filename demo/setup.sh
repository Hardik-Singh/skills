#!/bin/bash

# Install all rubber duck skill variants

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_DIR="$HOME/.claude/skills"

mkdir -p "$SKILLS_DIR"

echo "🦆 Installing rubber duck skills..."

cp "$SCRIPT_DIR/../rubber-duck.md" "$SKILLS_DIR/"
echo "  ✓ rubber-duck.md → /quack"

cp "$SCRIPT_DIR/../rubber-duck-ascii.md" "$SKILLS_DIR/"
echo "  ✓ rubber-duck-ascii.md → /quack-art"

cp "$SCRIPT_DIR/../rubber-duck-animated.md" "$SKILLS_DIR/"
echo "  ✓ rubber-duck-animated.md → /quack-live"

echo ""
echo "Done! Start a new Claude Code session to use the skills."
echo ""
echo "Commands:"
echo "  /quack      - Pure personality (text only)"
echo "  /quack-art  - With ASCII art ducks"
echo "  /quack-live - With terminal animations"
echo ""
echo "See TESTING-SCRIPT.md for demo scenarios."
