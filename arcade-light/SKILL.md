---
name: arcade-light
description: Quick terminal games - 10 essential games with minimal overhead
---

# Arcade Light

10 essential games for your terminal. Quick sessions, maximum fun.

## Activation
- `/arcade-light` - Show menu
- `/arcade-light [game]` - Play directly
- `/arcade-light [game] custom` - Customize first
- `/arcade-light random` - Surprise me

## Trigger
User wants quick games, says "arcade-light", "quick game", "simple game"

## Display Conventions
```
Frame style:   ┌─ TITLE ─────────────┐
               │ content             │
               └─────────────────────┘

Box drawing:   ─ │ ┌ ┐ └ ┘ (light)
               ═ ║ ╔ ╗ ╚ ╝ (heavy)

Feedback:      ✓ correct  ✗ wrong  🎉 win  🔥 streak
Cards:         ♠ ♥ ♦ ♣ (suits)
Dice d6:       Show dot patterns
Progress:      ████░░░░ 50%
```

## Main Menu
```
╔══════════════════════════════════════════════╗
║           🎮 ARCADE LIGHT 🎮                 ║
╠══════════════════════════════════════════════╣
║ QUICK           WORDS          BOARD         ║
║ coin-flip       wordle         tic-tac-toe   ║
║ dice            hangman                      ║
║ rps                                          ║
║ 8ball           CARDS          ACTION        ║
║                 blackjack      2048          ║
║ TRIVIA                                       ║
║ trivia                                       ║
╠══════════════════════════════════════════════╣
║ Type game name • "random"                    ║
╚══════════════════════════════════════════════╝
```

---

## Quick Play (4)

### coin-flip
Flip coin, guess h/t, track streaks. Comment on probability for long streaks.

### dice
Roll NdX+M notation. Show d6 dot patterns. Support advantage/disadvantage.

### rps
Rock Paper Scissors. Symbols: ✊✋✌️. Track scores.

### 8ball
Magic answers to yes/no questions. Categories: positive/neutral/negative. Add mystical flavor.

---

## Word Games (2)

### wordle
5-letter word, 6 tries. Feedback: 🟩 correct, 🟨 wrong-pos, ⬛ miss.
Custom: length(4-8), theme, hard-mode | Validate real words only

### hangman
Classic with ASCII gallows (7 stages). Show blanks, guessed letters, remaining.
Custom: category, word length, wrong guesses allowed

---

## Board Games (1)

### tic-tac-toe
Classic 3x3. Coordinates: A1-C3.
AI difficulty: easy (mistakes), medium (good), hard (perfect)

---

## Card Games (1)

### blackjack
Beat dealer, don't bust 21. Cards: number=face, face=10, Ace=1/11.
Actions: [h]it, [s]tand, [d]ouble, split (if pair). Track balance.

---

## Action Games (1)

### 2048
4x4 grid, slide tiles wasd. Same numbers merge on collision.
New 2 or 4 appears after each move. Goal: reach 2048 (or keep going).

---

## Trivia (1)

### trivia
Multiple choice questions. Categories: General, Science, History, Geography, Tech, etc.
A/B/C/D answer. Commands: hint, skip. Adjust difficulty by performance.

---

## Customization

For any game, add `custom`:
```
> /arcade-light wordle custom

Word length: [5] 4-8
Theme: [any] animals/tech/food/custom
Hard mode: [off] on/off
```

---

## AI Behavior

**Fair Play:**
- Never read user's hidden info
- Adjustable difficulty levels
- Occasional personality/commentary

**Validation:**
- Only accept real words
- Generate solvable puzzles

**Assistance:**
- Hints when stuck
- Track session scores

---

## Error Handling

Unknown game:
```
┌─ ARCADE LIGHT ───────────────┐
│ Game "xyz" not found!        │
│ Did you mean: wordle?        │
│ Available: coin-flip, dice,  │
│ rps, 8ball, wordle, hangman, │
│ tic-tac-toe, blackjack,      │
│ 2048, trivia                 │
└──────────────────────────────┘
```

**Have fun! 🎮**
