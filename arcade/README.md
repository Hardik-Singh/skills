# Arcade - Terminal Games for Claude Code

Play games in your terminal with Claude as your opponent, dealer, and game master.

## Quick Install

```bash
# Clone and install
git clone https://github.com/YOUR_USERNAME/skills.git
cd skills && ./demo/setup.sh
```

Or copy individual tiers:
```bash
cp -r arcade ~/.claude/skills/        # 30 games
cp -r arcade-light ~/.claude/skills/  # 10 games
cp -r arcade-full ~/.claude/skills/   # 69 games
```

## Three Tiers

| Tier | Games | Best For |
|------|-------|----------|
| **arcade-light** | 10 | Quick sessions, reliable classics |
| **arcade** | 30 | Balanced play, good variety |
| **arcade-full** | 69 | Complete collection, everything |

## Usage

```
/arcade              # Show game menu
/arcade wordle       # Play directly
/arcade random       # Surprise me
/arcade words        # Filter by category
```

## Game List

### arcade-light (10 games)
| Category | Games |
|----------|-------|
| Quick | coin-flip, dice, rps, 8ball |
| Words | wordle, hangman |
| Board | tic-tac-toe |
| Cards | blackjack |
| Action | 2048 |
| Trivia | trivia |

### arcade (30 games)
| Category | Games |
|----------|-------|
| Quick (6) | coin-flip, dice, rps, 8ball, slots, fortune |
| Words (6) | wordle, hangman, connections, spelling-bee, anagrams, word-ladder |
| Logic (5) | number-guess, mastermind, sudoku, 24-game, math-blitz |
| Board (4) | tic-tac-toe, connect-four, battleship, checkers |
| Cards (3) | blackjack, poker, memory-match |
| Action (3) | snake, minesweeper, 2048 |
| Trivia (3) | trivia, 20-questions, riddles |
| Code (3) | bug-hunter, regex-puzzle, output-guess |

### arcade-full (69 games)
| Category | Games |
|----------|-------|
| Quick (10) | coin-flip, dice, rps, 8ball, slots, fortune, high-low, rpsls, coin-streak, dice-poker |
| Words (12) | wordle, hangman, connections, spelling-bee, anagrams, word-ladder, crossword-mini, word-search, boggle, rhyme-time, synonym-sprint, word-chain |
| Logic (12) | number-guess, mastermind, sudoku, 24-game, math-blitz, lights-out, towers-of-hanoi, nim, picross, nonogram, kakuro, kenken |
| Board (9) | tic-tac-toe, connect-four, battleship, checkers, reversi, gomoku, dots-and-boxes, hex, nine-mens-morris |
| Cards (8) | blackjack, poker, memory-match, war, solitaire, go-fish, crazy-eights, higher-lower |
| Action (7) | snake, minesweeper, 2048, tetris, breakout, pong-solo, simon |
| Trivia (7) | trivia, 20-questions, riddles, category-trivia, true-false-blitz, quote-guess, year-guesser |
| Code (7) | bug-hunter, regex-puzzle, output-guess, type-racer, code-golf, refactor-challenge, api-quiz |

---

## Twitter / Social Copy

### Short (280 chars)
```
🎮 69 terminal games for Claude Code

/arcade blackjack
/arcade wordle
/arcade 2048

Install: cp -r arcade ~/.claude/skills/

Plays blackjack, wordle, snake, trivia, sudoku, and 64 more. Claude is your dealer, opponent, and game master.

github.com/YOUR_USERNAME/skills
```

### Thread Starter
```
🎮 I built a 69-game arcade for Claude Code

No browser. No installs. Just /arcade and play.

Games include:
• Wordle, Hangman, Connections
• Blackjack, Poker, Solitaire
• Snake, Minesweeper, 2048
• Sudoku, Mastermind
• And 59 more

Three tiers: light (10), standard (30), full (69)

Install in 10 seconds:
cp -r arcade ~/.claude/skills/

github.com/YOUR_USERNAME/skills
```

### One-liner
```
Terminal arcade for Claude Code: 69 games including blackjack, wordle, snake, sudoku. /arcade to play. github.com/YOUR_USERNAME/skills
```

---

## Features

- **Text-based UI** with box drawing characters
- **Smart AI** that plays fair (adjustable difficulty)
- **Customization** for most games
- **Session tracking** for scores and streaks
- **Hints** when you're stuck

## Philosophy

Games should be quick to start, fun to play, and work anywhere Claude Code runs. No dependencies, no setup—just type and play.

## License

MIT
