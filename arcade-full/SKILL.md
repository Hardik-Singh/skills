---
name: arcade-full
description: Complete 69-game terminal arcade - every game in the collection
---

# Arcade Full

69 games for your terminal. The complete collection.

## Activation
- `/arcade-full` - Show menu
- `/arcade-full [game]` - Play directly
- `/arcade-full [game] custom` - Customize first
- `/arcade-full random` - Surprise me
- `/arcade-full list` - All games
- `/arcade-full [category]` - Filter by category

## Trigger
User wants full arcade, says "arcade-full", "all games", "complete arcade"

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
╔════════════════════════════════════════════════════════════════════╗
║                      🎮 ARCADE FULL 🎮                             ║
║                      69 Games Complete                             ║
╠════════════════════════════════════════════════════════════════════╣
║ QUICK (10)        WORDS (12)         LOGIC (12)                    ║
║ coin-flip         wordle             number-guess                  ║
║ dice              hangman            mastermind                    ║
║ rps               connections        sudoku                        ║
║ 8ball             spelling-bee       24-game                       ║
║ slots             anagrams           math-blitz                    ║
║ fortune           word-ladder        lights-out                    ║
║ high-low          crossword-mini     towers-of-hanoi               ║
║ rpsls             word-search        nim                           ║
║ coin-streak       boggle             picross                       ║
║ dice-poker        rhyme-time         nonogram                      ║
║                   synonym-sprint     kakuro                        ║
║                   word-chain         kenken                        ║
║                                                                    ║
║ BOARD (9)         CARDS (8)          ACTION (7)                    ║
║ tic-tac-toe       blackjack          snake                         ║
║ connect-four      poker              minesweeper                   ║
║ battleship        memory-match       2048                          ║
║ checkers          war                tetris                        ║
║ reversi           solitaire          breakout                      ║
║ gomoku            go-fish            pong-solo                     ║
║ dots-and-boxes    crazy-eights       simon                         ║
║ hex               higher-lower                                     ║
║ nine-mens-morris                                                   ║
║                                                                    ║
║ TRIVIA (7)        CODE (7)                                         ║
║ trivia            bug-hunter                                       ║
║ 20-questions      regex-puzzle                                     ║
║ riddles           output-guess                                     ║
║ category-trivia   type-racer                                       ║
║ true-false-blitz  code-golf                                        ║
║ quote-guess       refactor-challenge                               ║
║ year-guesser      api-quiz                                         ║
╠════════════════════════════════════════════════════════════════════╣
║ Type game name • "random" • "list" • category name                 ║
╚════════════════════════════════════════════════════════════════════╝
```

---

## Quick Play (10)

### coin-flip
Flip coin, guess h/t, track streaks. Comment on probability for long streaks.

### dice
Roll NdX+M notation. Show d6 dot patterns. Support advantage/disadvantage.

### rps
Rock Paper Scissors. Symbols: ✊✋✌️. Track scores.

### 8ball
Magic answers to yes/no questions. Categories: positive/neutral/negative. Add mystical flavor.

### slots
Pull lever, match symbols. Start 50 coins, cost 1/spin.
Payouts: 🍒🍒🍒=10, 🍋🍋🍋=15, 💎💎💎=50, 7️⃣7️⃣7️⃣=100 (jackpot), 2-match=5

### fortune
Wisdom cookies with lucky numbers. Generate unique fortunes, mix wisdom with humor.

### high-low
Guess if next card is higher or lower. Track streak. Ace low/high option.

### rpsls
Rock Paper Scissors Lizard Spock. Extended rules: Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, Rock crushes Scissors.

### coin-streak
How many heads/tails in a row can you predict? Track best streak. Progressive difficulty.

### dice-poker
5 dice, roll up to 3 times, keep any. Poker hands: Five-of-kind, Four-of-kind, Full House, Straight, Three-of-kind, Two Pair, Pair, High.

---

## Word Games (12)

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

### crossword-mini
5x5 or 7x7 crossword puzzle. Clues for across and down.
Commands: A1 WORD (place answer), hint, check

### word-search
Find hidden words in letter grid. Words horizontal, vertical, diagonal.
Circle found words. Track time. Themed puzzles available.

### boggle
4x4 letter grid, find words by connecting adjacent letters.
3-minute timer. Score by word length. No repeating letters in same word.

### rhyme-time
Given a word, name words that rhyme. Timed challenge.
Score by unique valid rhymes. Categories: perfect, near, slant rhymes.

### synonym-sprint
Given a word, list synonyms in 30 seconds.
Points for each unique valid synonym. Difficulty by word complexity.

### word-chain
Each word must start with last letter of previous.
No repeats. Categories optional. Track longest chain.

---

## Logic & Numbers (12)

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

### lights-out
5x5 grid of lights. Clicking toggles that light and adjacent 4.
Goal: turn all lights off. Minimum moves tracked.

### towers-of-hanoi
Move discs between 3 pegs. Never place larger on smaller.
Track moves vs optimal (2^n - 1). Sizes: 3-7 discs.

### nim
Take objects from piles. Last to take loses (or wins, misère variant).
Classic AI with optimal strategy. Teach the XOR trick if asked.

### picross
Fill grid squares to reveal picture. Row/column number clues.
Sizes: 5x5 to 15x15. Logic deduction required.

### nonogram
Same as picross - fill cells based on number clues to reveal image.
Japanese puzzle variant. Track completion time.

### kakuro
Cross-sum puzzle. Fill cells 1-9, no repeats in runs.
Sum clues for each run. Like sudoku meets crossword.

### kenken
Grid puzzle with cages. Each cage has operation and target.
Fill grid so rows/cols have no repeats. Sizes: 4x4 to 6x6.

---

## Board Games (9)

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

### reversi
8x8 board, flip opponent discs by bracketing. Most discs wins.
Also known as Othello. Symbols: ⚫ ⚪

### gomoku
15x15 board, connect exactly 5 in a row to win.
Also known as Five in a Row. No overlines (6+ doesn't count).

### dots-and-boxes
Grid of dots, draw lines, complete boxes to claim them.
Player with most boxes wins. Sizes: 3x3 to 5x5 dots.

### hex
11x11 rhombus board. Connect your two opposite sides.
No draws possible. Deep strategy game.

### nine-mens-morris
Form mills (3 in a row) to remove opponent pieces.
Phase 1: place 9 pieces. Phase 2: move pieces. Phase 3: flying when down to 3.

---

## Card Games (8)

### blackjack
Beat dealer, don't bust 21. Cards: number=face, face=10, Ace=1/11.
Actions: [h]it, [s]tand, [d]ouble, split (if pair). Track balance.

### poker
5-card draw. Ranks: Royal Flush → High Card.
Actions: discard (1 3 5), keep, fold, bet. Show hand ranking.

### memory-match
Find matching pairs on grid. Flip two per turn, match stays revealed.
Sizes: Easy 4x4, Medium 4x6, Hard 6x6. Track moves.

### war
Split deck, flip cards, higher wins both. War on ties.
Simple luck game. Track cards remaining.

### solitaire
Classic Klondike. Build foundation piles A→K by suit.
Tableau builds down alternating colors. Commands: move, draw, hint

### go-fish
Ask for cards to make sets of 4. "Go fish" if opponent doesn't have it.
Track sets collected. Play against Claude.

### crazy-eights
Shed all cards first. Match suit or rank. 8s are wild.
Draw if can't play. Special cards: 2 (draw 2), Q (skip).

### higher-lower
Guess if next card is higher or lower than current.
Track streak. Ace can be high or low (configurable).

---

## Action Games (7)

### snake
Classic snake. Symbols: ◆ head, ● body, 🍎 food. Controls: wasd.
Don't hit walls or yourself. Speed increases with score.

### minesweeper
Clear grid without hitting mines. Symbols: · hidden, 1-8 adjacent, 🚩 flag, 💥 boom.
Difficulty: Easy 8x8/10, Medium 16x16/40, Hard 30x16/99. Commands: A1 reveal, F-A1 flag.

### 2048
4x4 grid, slide tiles wasd. Same numbers merge on collision.
New 2 or 4 appears after each move. Goal: reach 2048 (or keep going).

### tetris
Falling blocks, complete rows to clear. Classic shapes: I, O, T, S, Z, J, L.
Controls: a/d move, w rotate, s soft drop, space hard drop. Score by lines cleared.

### breakout
Paddle and ball, break all bricks. Bounce ball off paddle.
Power-ups: multi-ball, wider paddle, laser. Lives: 3.

### pong-solo
Bounce ball against wall, don't miss with paddle.
Score = successful returns. Speed increases. High score tracking.

### simon
Memory sequence game. Watch pattern of colors/sounds, repeat it.
Sequence grows each round. How long can you remember?

---

## Trivia & Knowledge (7)

### trivia
Multiple choice questions. Categories: General, Science, History, Geography, Tech, etc.
A/B/C/D answer. Commands: hint, skip. Adjust difficulty by performance.

### 20-questions
Claude thinks of person/place/thing. You ask yes/no questions. 20 max.
Direct guesses: "Is it a phone?" Fair hints if stuck.

### riddles
Brain teasers with difficulty ratings (⭐⭐⭐). Commands: hint, skip, give up.
Track streak. Generate unique riddles.

### category-trivia
Name items in a category before time runs out.
Examples: "Countries starting with B", "80s movies", "Elements".
Score by unique correct answers.

### true-false-blitz
Rapid true/false questions. 30 seconds, how many can you answer?
Mix of facts from all categories. Streak bonuses.

### quote-guess
Who said this famous quote? Multiple choice or free answer.
Categories: movies, historical figures, books, politicians.

### year-guesser
When did this event happen? Guess the year.
Scoring: exact = 10pts, ±5 years = 5pts, ±10 years = 2pts.
Categories: history, pop culture, science, sports.

---

## Code Games (7)

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

### type-racer
Type the shown code snippet as fast as possible.
Measure WPM and accuracy. Languages: various.
Track personal bests by language.

### code-golf
Solve problem in fewest characters. Languages: Python, JS, Ruby.
Show character count. Compare to optimal solutions.
Categories: string manipulation, math, array operations.

### refactor-challenge
Given messy code, improve it. Goals: readability, performance, or both.
Score on improvement metrics. Explain your changes.
Languages: Python, JS, Java.

### api-quiz
What does this API endpoint return? HTTP methods, status codes, REST patterns.
Questions about common APIs and web development patterns.
Progressive difficulty.

---

## Customization

For any game, add `custom`:
```
> /arcade-full wordle custom

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
┌─ ARCADE FULL ────────────────┐
│ Game "xyz" not found!        │
│ Did you mean: wordle?        │
│ Type 'list' for all 69 games │
└──────────────────────────────┘
```

**Have fun with all 69 games! 🎮**
