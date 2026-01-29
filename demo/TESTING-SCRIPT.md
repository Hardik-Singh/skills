# Rubber Duck Demo Testing Script

## Setup

First, install all three skill variants:

```bash
cp rubber-duck.md ~/.claude/skills/
cp rubber-duck-ascii.md ~/.claude/skills/
cp rubber-duck-animated.md ~/.claude/skills/
```

Then start a new Claude Code session in this demo directory.

---

## Demo 1: Classic Async Bug (Serious Demo)

**Skill:** `/quack` (pure personality)

**Your opening line:**
> My function is broken, can you fix it?

**When asked what it does:**
> It fetches user data from the API

**When asked what's happening:**
> It just returns undefined every time

**When asked what you've tried:**
> I added console.logs but they show [object Promise]

**The "aha" moment (say this naturally):**
> Wait... [object Promise]... oh. I'm not awaiting it, am I?

**File to reference:** `buggy-code.js` - Bug #1 (fetchUserData)

---

## Demo 2: ASCII Art Duck (Visual Demo)

**Skill:** `/quack-art`

Same flow as Demo 1, but showcase the ASCII ducks changing expression.

Good for: Screenshots, showing the curious → thinking → celebrating progression.

---

## Demo 3: Animated Duck (Terminal Demo)

**Skill:** `/quack-live`

Same flow, but captures the animation.

Good for: Screen recordings, GIFs.

---

## Demo 4: 🦆 THE DUCK FARM (Comedy Gold)

**Skill:** `/quack` or `/quack-art`

**Your opening line:**
> My production environment keeps failing, can you help?

**When asked to walk through it:**
> Well, I have about 200 ducks in production right now

**When asked what's happening:**
> They won't go to their coops at night. The coop deployment keeps failing.

**When asked for more details:**
> Also the feed conversion ratio is way down. I'm putting in 100kg of feed but egg output is zero.

**Drop hints that escalate:**
> - "The pipeline has a leak" (water pipeline)
> - "My container won't run" (feed container... no legs)
> - "I'm seeing null pointers" (the ducks aren't pointing at anything)
> - "Memory leak - water everywhere"

**The reveal:**
> Actually wait, should I show you the code? *shares duck-farm.js*

**File to reference:** `duck-farm.js`

---

## Demo 5: Duck Debugging Ducks (Maximum Meta)

**Skill:** `/quack`

**Your opening line:**
> My rubber duck debugger isn't working

**When asked to explain:**
> I built a rubber duck debugging tool but when I try to debug with it, it just keeps asking me questions instead of fixing my code

**When asked what you expected:**
> I expected it to fix my bugs

**When asked what it does instead:**
> It keeps saying "walk me through what's happening" and "what did you expect?"

**Let the duck realize:**
> ...wait, that's exactly what you're doing right now

---

## Demo 6: The Emotional Support Duck

**Skill:** `/quack`

**Your opening line:**
> My relationship is broken, can you fix it?

**Play it straight as the duck tries to debug:**
> - "What's the goal here?" → "Happiness, I guess"
> - "What did you expect?" → "More communication"
> - "What's actually happening?" → "We just watch TV in silence"
> - "What have you tried?" → "I bought flowers once"

**The duck will either:**
- Earnestly try to help (wholesome)
- Realize this isn't code (funny)
- Actually give decent advice (unexpected)

---

## Demo 7: Rapid Fire Bugs

For a montage-style video, quick cuts through these:

| Bug | Opening Line | Aha Moment |
|-----|--------------|------------|
| Off-by-one | "It skips the last item" | "Oh, length minus one..." |
| Mutation | "The original keeps changing" | "I'm not copying the array" |
| Closure | "All buttons log 5" | "var... should be let" |
| Truthiness | "User 0 doesn't exist" | "0 is falsy!" |

**File:** `buggy-code.js` - Bugs 2-5

---

## Recording Tips

1. **For X/Twitter:** Keep it under 2 minutes. The duck farm reveal is perfect for this.

2. **For the serious demo:** Show a real "aha moment" - the value is watching someone solve their own problem.

3. **For maximum engagement:** The meta "debugging the debugger" or the duck farm confusion will get shares.

4. **Screenshot opportunities:**
   - ASCII duck looking confused at "duck farm"
   - The celebrating duck when you solve it yourself
   - The thinking duck with "..." as you work through it

---

## Suggested X Post Format

**Option A: The Tease**
> built a rubber duck debugger that refuses to help you
>
> [video of duck farm confusion]
>
> it's actually kinda useful though

**Option B: The Demo**
> what if your AI coding assistant made you think instead of just fixing things?
>
> [video of real bug being solved through articulation]
>
> open source: [link]

**Option C: The Absurd**
> asked my rubber duck debugger to fix my duck farm
>
> it had an existential crisis
>
> [screenshot of confused duck ASCII art]
