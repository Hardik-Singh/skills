# Claude Code Skills

A collection of custom skills for [Claude Code](https://claude.ai/claude-code).

## What Are Skills?

Skills are custom prompts that extend Claude Code's capabilities. They're invoked with slash commands (like `/quack`) and give Claude specific personalities, workflows, or expertise.

## Installation

1. Copy the `.md` file for the skill you want to your Claude Code skills directory:
   ```bash
   # Global skills (available in all projects)
   cp rubber-duck.md ~/.claude/skills/

   # Project-specific skills
   cp rubber-duck.md .claude/skills/
   ```

2. Restart Claude Code or start a new session

3. Use the skill with its slash command (e.g., `/quack`)

## Available Skills

### Rubber Duck Protocol

The classic debugging technique, powered by AI that *refuses to help too quickly*.

The magic of rubber duck debugging isn't getting answers—it's the articulation. When you explain a problem out loud, you often solve it mid-sentence. Modern AI tools have broken this by being too helpful too fast.

The Rubber Duck Protocol restores the friction that creates insight.

| Variant | Command | Description |
|---------|---------|-------------|
| [rubber-duck.md](./rubber-duck.md) | `/quack` | Pure personality—warm, guiding voice |
| [rubber-duck-ascii.md](./rubber-duck-ascii.md) | `/quack-art` | Adds ASCII art ducks with emotional states |
| [rubber-duck-animated.md](./rubber-duck-animated.md) | `/quack-live` | Terminal animations with ANSI escape codes |

**Why it works:**
- 50%+ of problems solve themselves during articulation
- You learn instead of becoming dependent
- Root causes found instead of symptom-chasing
- The duck is warm and collaborative, not annoying

## Contributing

Have a skill idea? The best skills are:
- **Opinionated** — They have a clear philosophy
- **Counter-cultural** — They do something AI tools usually don't
- **Memorable** — Easy to remember when to use them

## License

MIT
