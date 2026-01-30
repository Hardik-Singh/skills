#!/bin/bash

# Setup script for Claude Code Skills
# Copies all skills to your global Claude Code skills directory

SKILLS_DIR="$HOME/.claude/skills"
SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Create skills directory if it doesn't exist
mkdir -p "$SKILLS_DIR"

# Copy all skill directories
echo "Installing skills to $SKILLS_DIR..."

cp -r "$SCRIPT_DIR/quack" "$SKILLS_DIR/"
cp -r "$SCRIPT_DIR/quack-art" "$SKILLS_DIR/"
cp -r "$SCRIPT_DIR/quack-live" "$SKILLS_DIR/"
cp -r "$SCRIPT_DIR/arcade-light" "$SKILLS_DIR/"
cp -r "$SCRIPT_DIR/arcade" "$SKILLS_DIR/"
cp -r "$SCRIPT_DIR/arcade-full" "$SKILLS_DIR/"

echo "Done! Installed skills:"
echo "  - quack (rubber duck debugging)"
echo "  - quack-art (with ASCII art)"
echo "  - quack-live (with animations)"
echo "  - arcade-light (10 games)"
echo "  - arcade (30 games)"
echo "  - arcade-full (69 games)"
echo ""
echo "Start a new Claude Code session to use them."
