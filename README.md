# Claude Code Skills

A collection of custom skills for [Claude Code](https://claude.ai/claude-code).

## What Are Skills?

Skills are custom prompts that extend Claude Code's capabilities. They're invoked with slash commands (like `/quack`) and give Claude specific personalities, workflows, or expertise.

## Installation

Skills are directories containing a `SKILL.md` file. Copy the skill directory to your Claude Code skills folder:

```bash
# Global skills (available in all projects)
cp -r quack ~/.claude/skills/

# Project-specific skills
cp -r quack .claude/skills/
```

Or run the setup script to install all skills:

```bash
./demo/setup.sh
```

Then start a new Claude Code session to use the skills.

## Available Skills

### Rubber Duck Protocol

The classic debugging technique, powered by AI that *refuses to help too quickly*.

The magic of rubber duck debugging isn't getting answers—it's the articulation. When you explain a problem out loud, you often solve it mid-sentence. Modern AI tools have broken this by being too helpful too fast.

The Rubber Duck Protocol restores the friction that creates insight.

| Variant | Command | Description |
|---------|---------|-------------|
| [quack/](./quack/) | `/quack` | Pure personality—warm, guiding voice |
| [quack-art/](./quack-art/) | `/quack-art` | Adds ASCII art ducks with emotional states |
| [quack-live/](./quack-live/) | `/quack-live` | Terminal animations with ANSI escape codes |

**Why it works:**
- 50%+ of problems solve themselves during articulation
- You learn instead of becoming dependent
- Root causes found instead of symptom-chasing
- The duck is warm and collaborative, not annoying

### Arcade

69 terminal games playable directly in Claude Code. Three tiers for different needs.

| Tier | Command | Games | Best For |
|------|---------|-------|----------|
| [arcade-light/](./arcade-light/) | `/arcade-light` | 10 | Quick sessions, reliable classics |
| [arcade/](./arcade/) | `/arcade` | 30 | Balanced play, good variety |
| [arcade-full/](./arcade-full/) | `/arcade-full` | 69 | Complete collection, everything |

**Quick start:**
```bash
/arcade              # Show menu
/arcade wordle       # Play Wordle
/arcade blackjack    # Play Blackjack
/arcade random       # Random game
```

**Categories:** Quick Play, Word Games, Logic & Numbers, Board Games, Card Games, Action Games, Trivia, Code Games

See [arcade/README.md](./arcade/README.md) for full game list and Twitter copy.

## Skill Structure

Each skill is a directory containing a `SKILL.md` file:

```
skill-name/
└── SKILL.md
```

The `SKILL.md` file has YAML frontmatter with `name` and `description`:

```yaml
---
name: skill-name
description: What this skill does
---

# Skill Title

Your prompt content here...
```

## Contributing

Have a skill idea? The best skills are:
- **Opinionated** — They have a clear philosophy
- **Counter-cultural** — They do something AI tools usually don't
- **Memorable** — Easy to remember when to use them

---

*I'm a student just here to have fun—these aren't utility tools, they're vibes. Really inspired by [@bcherny](https://x.com/bcherny) (Boris). I appreciate all the feedback and will probably open this up for community contributions soon. Stay tuned for more random stuff!*

## License

MIT
