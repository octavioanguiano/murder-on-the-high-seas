# 🚢 Murder on the High Seas

A 2D mobile exploration game — part Clue, part Among Us.
Walk around a Carnival cruise ship, talk to characters, collect clues, and figure out who the murderer is before the ship docks.

---

## How to Launch in Lovable

### Step 1
Go to [lovable.dev](https://lovable.dev) and create a free account. Start a new project.

### Step 2
Paste the prompt below as your first message. Then paste the full contents of `gameData.js` right after it.

---

## ✂️ LOVABLE PROMPT — Paste This First

```
Build a mobile-first 2D exploration game called "Murder on the High Seas."
Use the gameData.js file I'm pasting below for all characters, ships, rooms, clues, and logic.

The game works like this:

CORE MECHANIC — WALKING & TALKING:
- The player walks around a 2D top-down or side-scrolling view of a cruise ship
- The ship is divided into rooms (Lido Deck, Kitchen, Bar, Cabin Hallway, Deck 4, etc.)
- Characters (suspects and agents) stand or walk around in their rooms
- When the player walks up to a character and taps them, a voice bubble appears above the character's head with a clue
- Real clues show a small shape icon (⭐ ⬤ ■ ⬡ ▲) in the corner of the voice bubble
- Fake clues trigger the Yorkie-poo animation (a small dog named Biscuit trots in, makes a fart noise, waves both paws twice, trots away — bubble says "Woof. That one was fake.")
- Player collects 10 clues per ship by walking around and talking to people
- All real clues are saved in a running journal the player can open anytime

SCREENS TO BUILD:

1. TITLE SCREEN
   - Dark ocean at night, cruise ship lit up, dramatic serif font
   - Buttons: New Game, Continue, Settings

2. CHARACTER SELECT
   - Choose gender: Male / Female / Non-Binary
   - Show character cards with name and superpower
   - Tap to select

3. DIFFICULTY SELECT
   - Easy / Medium / Hard
   - Show what each means (more fake clues, higher kill risk)

4. SHIP EXPLORATION (main gameplay screen)
   - 2D view of the ship with rooms the player can tap to walk into
   - Characters visible in rooms as 2D sprites
   - Tap a character → voice bubble appears with their clue
   - Real clues: shape icon in bubble corner, saved to journal
   - Fake clues: Yorkie-poo animation plays, clue is marked fake
   - Each room entry rolls kill risk (based on difficulty)
   - HUD shows: current ship, destination, clue count, journal button, pause button
   - Each of the 5 ships looks visually different (tropical, oceanic, European, arctic, bayou themes)

5. JOURNAL SCREEN
   - Shows all real clues collected so far this ship
   - Player can review and cross-reference

6. ACCUSATION SCREEN
   - Player can accuse a suspect at any time
   - Shows list of suspects with names and roles
   - Correct = win this ship and move to the next
   - Wrong = lose a life (or restart ship on hard)

7. KILLED SCREEN
   - Dramatic but family-friendly "You've been killed!" screen
   - No gore — think shadow, gasp, blackout
   - Restart from Ship 1

8. WIN SCREEN (per ship)
   - Celebration, ship docks, move to next ship

9. FULL WIN SCREEN (beat all 5 ships)
   - Unlock: Create Your Own Ship, Murderer, and Player
   - Form to enter name, destination, role, superpower
   - First 3 players to finish get to create a new level
   - New ships can be added to one level or all levels

STYLE:
- 2D but realistic-looking, family-friendly, no gore
- Carnival cruise ship aesthetic — warm lights, ocean, wood floors, bright colors
- Each ship has its own color theme and ambient feel
- Voice bubbles are rounded, expressive, animated in smoothly
- Yorkie-poo dog is cute and animated

ALWAYS VISIBLE:
- Pause button (top corner, every screen)
- Journal button during exploration
```

---

## Game Rules

| Rule | Detail |
|------|--------|
| Goal | Identify the murderer before the ship docks |
| How clues work | Walk up to characters, tap them, hear their voice bubble |
| Real clues | Shape icon (⭐ ⬤ ■ ⬡ ▲) in bubble corner — given by Agents |
| Fake clues | Yorkie-poo named Biscuit runs in, farts, waves, runs away |
| Getting killed | Restart from Ship 1 |
| Ships | 5 ships, each to a different destination |
| Difficulty | Easy / Medium / Hard — affects fake clue ratio and kill chance |
| Winning | Correctly accuse the murderer on all 5 ships |
| Unlocks | Beat all 5 → create new ship, murderer, player |

---

## Characters

### Male
| Name | Superpower |
|------|-----------|
| Octavio | Shadow Step — peek into one locked room per ship |
| Victor | Steel Mind — instantly knows if a voice bubble is fake |
| Mateo | Street Sense — detects if a suspect is nervous |
| RJ | Quick Hands — characters come to him |
| Enzo | Silver Tongue — ask a follow-up question |
| Elias | Eagle Eye — fake bubbles shimmer |
| Noah | Calm Under Pressure — survives one kill |

### Female
| Name | Superpower |
|------|-----------|
| Olivia | Sixth Sense — screen pulses near the murderer |
| Kelly | Photographic Memory — clues auto-save |
| Addie | Charm — one free clue per ship |
| Anni | Hacker — scan any suspect's background |

### Non-Binary
| Name | Superpower |
|------|-----------|
| Rose | Empath — nervous characters' bubbles shake |
| Spidey | Web Sense — warned before a kill attempt |

---

## Ships

| # | Ship | Destination |
|---|------|------------|
| 1 | Carnival Horizon | Mexico |
| 2 | Carnival Splendor | Australia |
| 3 | Carnival Magic | France |
| 4 | Carnival Spirit | Alaska |
| 5 | Carnival Valor | New Orleans |
