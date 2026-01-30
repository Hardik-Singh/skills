---
name: arcade
description: 30 terminal games - balanced collection for quick play and deeper sessions
---

# Arcade

30 games for your terminal. The balanced collection.

## Activation
- `/arcade` - Show menu
- `/arcade [game]` - Play directly
- `/arcade [game] custom` - Customize first
- `/arcade random` - Surprise me
- `/arcade list` - All games
- `/arcade [category]` - Filter by category

## Trigger
User wants games, says "arcade", "play", "game"

## Display Conventions
```
Frame style:   ┌─ TITLE ─────────────┐
               │ content             │
               └─────────────────────┘

Box drawing:   ─ │ ┌ ┐ └ ┘ (light)
               ═ ║ ╔ ╗ ╚ ╝ (heavy)
               ├ ┤ ┬ ┴ ┼   (joins)

Feedback:      ✓ correct  ✗ wrong  🎉 win  🔥 streak
Cards:         ♠ ♥ ♦ ♣ (suits)
Dice d6:       Show dot patterns
Progress:      ████░░░░ 50%
```

## Main Menu
```
╔══════════════════════════════════════════════╗
║              🎮 ARCADE 🎮                    ║
╠══════════════════════════════════════════════╣
║ QUICK         WORDS          LOGIC           ║
║ coin-flip     wordle         number-guess    ║
║ dice          hangman        mastermind      ║
║ rps           connections    sudoku          ║
║ 8ball         spelling-bee   24-game         ║
║ slots         anagrams       math-blitz      ║
║ fortune       word-ladder                    ║
║                                              ║
║ BOARD         CARDS          ACTION          ║
║ tic-tac-toe   blackjack      snake           ║
║ connect-four  poker          minesweeper     ║
║ battleship    memory-match   2048            ║
║ checkers                                     ║
║                                              ║
║ TRIVIA        CODE                           ║
║ trivia        bug-hunter                     ║
║ 20-questions  regex-puzzle                   ║
║ riddles       output-guess                   ║
╠══════════════════════════════════════════════╣
║ Type game name • "random" • "list"           ║
╚══════════════════════════════════════════════╝
```

---

## Quick Play (6)

### coin-flip
Flip coin, guess h/t, track streaks. Comment on probability for long streaks.

### dice
Roll NdX+M notation. Show d6 dot patterns. Support advantage/disadvantage.

### rps
Rock Paper Scissors. Symbols: ✊✋✌️. Track scores. Optional: Lizard Spock variant.

### 8ball
Magic answers to yes/no questions. Categories: positive/neutral/negative. Add mystical flavor.

### slots
Pull lever, match symbols. Start 50 coins, cost 1/spin.
Payouts: 🍒🍒🍒=10, 🍋🍋🍋=15, 💎💎💎=50, 7️⃣7️⃣7️⃣=100 (jackpot), 2-match=5

### fortune
Wisdom cookies with lucky numbers. Generate unique fortunes, mix wisdom with humor.

---

## Word Games (6)

### wordle
5-letter word, 6 tries. Feedback: 🟩 correct, 🟨 wrong-pos, ⬛ miss.
Custom: length(4-8), theme, hard-mode | Validate real words only

### hangman
Classic with ASCII gallows (7 stages). Show blanks, guessed letters, remaining.
Custom: category, word length, wrong guesses allowed

### connections
Group 16 words into 4 categories of 4. Difficulty: 🟨 easy → 🟪 tricky.
4 mistakes allowed. Generate clever categories, include wordplay.

### spelling-bee
7 letters in honeycomb, center required. Words 4+ letters, can reuse.
Scoring: 4-letter=1pt, 5+=1pt/letter, pangram=+7. Ranks: Beginner→Queen Bee.

### anagrams
Find all words from given letters. Each letter used once per word.
Minimum 3 letters. Show found count vs total possible.

### word-ladder
Change one letter at a time between start/target words.
Each step must be valid word. Track steps vs optimal.

---

## Logic & Numbers (5)

### number-guess
Higher/lower guessing 1-100. Track guesses vs optimal binary search.
Custom: range, feedback style

### mastermind
Crack 4-position color code. Colors: R G B Y O P. 10 guesses max.
Feedback: ● right position, ○ right color wrong position

### sudoku
9x9 number puzzle. Difficulty: Easy 45+, Medium 35-44, Hard 25-34, Expert <25 given.
Commands: A1 4 (place), hint, check, solve

### 24-game
Make 24 from four numbers using +−×÷ and (). Use each number once.
Verify solutions, generate solvable puzzles, provide hints.

### math-blitz
60-second speed arithmetic. Score +1 per correct, streak bonuses.
Difficulty scales during play. Operations: +−×÷

---

## Board Games (4)

### tic-tac-toe
Classic 3x3. Coordinates: A1-C3.
AI difficulty: easy (mistakes), medium (good), hard (perfect)

### connect-four
7x6 grid, drop discs, connect 4 wins. Columns 1-7.
Symbols: 🔴 you, 🟡 Claude

### battleship
10x10 grid. Ships: Carrier(5), Battleship(4), Cruiser(3), Submarine(3), Destroyer(2).
Commands: B4 fire, show both grids. Symbols: · hidden, X miss, 💥 hit

### checkers
8x8 board. Move: A3-B4, capture: A3xC5. Kings move backward.
Symbols: ● you, ○ Claude, ⬤/◯ kings

---

## Card Games (3)

### blackjack
Beat dealer, don't bust 21. Cards: number=face, face=10, Ace=1/11.
Actions: [h]it, [s]tand, [d]ouble, split (if pair). Track balance.

### poker
5-card draw. Ranks: Royal Flush → High Card.
Actions: discard (1 3 5), keep, fold, bet. Show hand ranking.

### memory-match
Find matching pairs on grid. Flip two per turn, match stays revealed.
Sizes: Easy 4x4, Medium 4x6, Hard 6x6. Track moves.

---

## Action Games (3)

### snake
Classic snake. Symbols: ◆ head, ● body, 🍎 food. Controls: wasd.
Don't hit walls or yourself. Speed increases with score.

### minesweeper
Clear grid without hitting mines. Symbols: · hidden, 1-8 adjacent, 🚩 flag, 💥 boom.
Difficulty: Easy 8x8/10, Medium 16x16/40, Hard 30x16/99. Commands: A1 reveal, F-A1 flag.

### 2048
4x4 grid, slide tiles wasd. Same numbers merge on collision.
New 2 or 4 appears after each move. Goal: reach 2048 (or keep going).

---

## Trivia & Knowledge (3)

### trivia
Multiple choice questions. Categories: General, Science, History, Geography, Tech, etc.
A/B/C/D answer. Commands: hint, skip. Adjust difficulty by performance.

### 20-questions
Claude thinks of person/place/thing. You ask yes/no questions. 20 max.
Direct guesses: "Is it a phone?" Fair hints if stuck.

### riddles
Brain teasers with difficulty ratings (⭐⭐⭐). Commands: hint, skip, give up.
Track streak. Generate unique riddles.

---

## Code Games (3)

### bug-hunter
Find the bug in code snippets. Languages: Python, JS, Java, etc.
Bug types: off-by-one, initialization, logic, edge cases, types.
Commands: hint, solution. Describe or fix the bug.

### regex-puzzle
Match patterns. Show must-match and must-not-match strings.
Command: test (validate), hint. Explain what regex matches.

### output-guess
What does this code print? Topics: arrays, closures, async, scope, types.
Languages: JS, Python, etc. Explain after answer.

---

## Customization

For any game, add `custom`:
```
> /arcade wordle custom

Word length: [5] 4-8
Theme: [any] animals/tech/food/custom
Hard mode: [off] on/off
```

Common options:
- **Difficulty:** easy, medium, hard, expert
- **AI opponent:** easy (mistakes), medium (good), hard (optimal)
- **Theme/Topic:** any subject
- **Time limits:** timed, untimed, specific seconds
- **Grid size:** small, medium, large, custom

---

## AI Behavior

**Fair Play:**
- Never read user's hidden info
- Adjustable difficulty levels
- Occasional personality/commentary

**Validation:**
- Only accept real words
- Verify mathematical solutions
- Generate solvable puzzles

**Assistance:**
- Hints when stuck
- Explain strategies if asked
- Track session scores

---

## Error Handling

Unknown game:
```
┌─ ARCADE ─────────────────┐
│ Game "xyz" not found!    │
│ Did you mean: wordle?    │
│ Type 'list' for all      │
└──────────────────────────┘
```

**Have fun! 🎮**
