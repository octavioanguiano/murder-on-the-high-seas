# murder-on-the-high-seas
# 🚢 Murder on the High Seas

A mobile-friendly mystery game — part Clue, part Among Us — built in React.

---

## What This Game Is

You're a passenger on a Carnival-style cruise ship. Someone on board is a murderer.
You have to figure out who it is **before the ship reaches port** — without getting killed yourself.

- Choose your character (male, female, or non-binary) — each has a unique superpower
- Collect clues each round — some are real, some are fake (the Yorkie-poo will let you know)
- Survive 5 ships across 5 destinations
- Beat all 5 ships → unlock the ability to create your own ship, murderer, and player

---

## How to Get This Running

### Step 1 — Put the code on GitHub

1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Click **New Repository** → name it `murder-on-the-high-seas`
3. Make it **Public**
4. Upload `gameData.js` to the repo

### Step 2 — Open Lovable

1. Go to [lovable.dev](https://lovable.dev) and sign in
2. Click **New Project**
3. Connect your GitHub repo
4. Paste this prompt into Lovable's chat:

---

**Lovable Prompt (copy and paste this):**

> Build a mobile-first React game called "Murder on the High Seas." Import all game data from `gameData.js` already in the repo. The game should:
>
> 1. Show a title screen with a Carnival cruise ship aesthetic — dark ocean, warm lights, dramatic font
> 2. Let the player choose their gender (male / female / non-binary), then pick a character from the list — show their name and superpower
> 3. Pick a difficulty: Easy, Medium, or Hard
> 4. Randomly assign a murderer from the SUSPECTS list (hidden from player)
> 5. Each round, show 10 clues drawn from `buildClueRound()` — real clues show a shape icon in the corner, fake clues trigger a Yorkie-poo animation with a fart sound and the dog wagging both hands twice
> 6. Player can accuse a suspect at any time using `checkAccusation()`
> 7. Each round, run `checkKillRisk()` — if triggered, show a dramatic "You've been killed!" screen and restart from Ship 1
> 8. Include a visible Pause button at all times
> 9. After completing all 5 ships, unlock a "Create Your Own" screen where the player can build a new ship, murderer, and character
> 10. 2D art style, realistic but family-friendly, no gore, Carnival cruise ship visual theme — looks different each ship

---

### Step 3 — Preview and Test

Lovable will generate the full app. You can preview it live in the browser, then deploy it as a mobile web app directly from Lovable.

---

## File Overview

| File | What it does |
|------|-------------|
| `gameData.js` | All characters, ships, clues, suspects, logic helpers |
| `README.md` | This file — setup instructions |

---

## Game Rules Summary

| Rule | Detail |
|------|--------|
| Goal | Identify the murderer before reaching port |
| Ships | 5 ships, each to a different destination |
| Clues | 10 per round — mix of real and fake |
| Real clues | Marked with a shape (⭐ ⬤ ■ ⬡ ▲) in the corner, given by an Agent |
| Fake clues | Trigger the Yorkie-poo dog animation |
| Getting killed | Restart from Ship 1 |
| Difficulty | Easy / Medium / Hard — affects fake clue ratio and kill chance |
| Winning | Complete all 5 ships without being killed |
| Unlocks | Beat all 5 ships → create new ship, murderer, and player |
| Top 3 finishers | Can create a new level; ships can be added to one level or all |

---

## Characters & Superpowers

### Male
| Name | Superpower |
|------|-----------|
| Octavio | Shadow Step — peek at one hidden clue per round |
| Victor | Steel Mind — immune to one fake clue per game |
| Mateo | Street Sense — detect if a suspect is lying once per ship |
| RJ | Quick Hands — draws an extra clue each round |
| Enzo | Silver Tongue — ask any suspect one bonus question |
| Elias | Eagle Eye — fake clues shimmer subtly |
| Noah | Calm Under Pressure — survives one kill per game |

### Female
| Name | Superpower |
|------|-----------|
| Olivia | Sixth Sense — sense if the murderer is watching |
| Kelly | Photographic Memory — real clues stay in her log |
| Addie | Charm — one free clue from a suspect per ship |
| Anni | Hacker — scan one passenger's background per round |

### Non-Binary
| Name | Superpower |
|------|-----------|
| Rose | Empath — sense a suspect's emotional state |
| Spidey | Web Sense — warned one round before a kill attempt |

---

## Ships

| # | Ship Name | Destination |
|---|-----------|------------|
| 1 | Carnival Horizon | Mexico |
| 2 | Carnival Splendor | Australia |
| 3 | Carnival Magic | France |
| 4 | Carnival Spirit | Alaska |
| 5 | Carnival Valor | New Orleans |

---

Built with React · Deployable via Lovable · Data in GitHub
