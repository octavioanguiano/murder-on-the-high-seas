// ============================================================
// MURDER ON THE HIGH SEAS — Game Data & Logic
// Exploration-based: player walks the ship, gets clues via voice bubbles
// Built for Lovable (React) + GitHub
// ============================================================

// ─────────────────────────────────────────
// PLAYERS
// ─────────────────────────────────────────
export const PLAYERS = {
  male: [
    { name: "Octavio", superpower: "Shadow Step — can peek into one locked room per ship" },
    { name: "Victor",  superpower: "Steel Mind — instantly knows if a voice bubble clue is fake" },
    { name: "Mateo",   superpower: "Street Sense — can tell if a character is nervous when they speak" },
    { name: "RJ",      superpower: "Quick Hands — characters approach him instead of waiting to be found" },
    { name: "Enzo",    superpower: "Silver Tongue — can ask any character a follow-up question" },
    { name: "Elias",   superpower: "Eagle Eye — fake clue voice bubbles have a subtle shimmer" },
    { name: "Noah",    superpower: "Calm Under Pressure — survives one kill attempt per game" },
  ],
  female: [
    { name: "Olivia", superpower: "Sixth Sense — screen pulses if the murderer is in the same room" },
    { name: "Kelly",  superpower: "Photographic Memory — real clues are auto-saved to her journal" },
    { name: "Addie",  superpower: "Charm — one character per ship volunteers a clue unprompted" },
    { name: "Anni",   superpower: "Hacker — tap any character to scan their background" },
  ],
  nonbinary: [
    { name: "Rose",   superpower: "Empath — voice bubbles from nervous characters shake slightly" },
    { name: "Spidey", superpower: "Web Sense — screen buzzes one room before a kill attempt" },
  ],
};

// ─────────────────────────────────────────
// SHIP ROOMS — areas the player walks through
// ─────────────────────────────────────────
export const SHIP_ROOMS = [
  { id: "lido_deck",       name: "Lido Deck",        description: "Open air. Pool. Lounge chairs. People watching everything.", icon: "🏊" },
  { id: "dining_room",     name: "Main Dining Room",  description: "White tablecloths. Waiters moving fast. Conversations everywhere.", icon: "🍽️" },
  { id: "kitchen",         name: "Kitchen",           description: "Hot. Loud. Crew only — unless you sneak in.", icon: "👨‍🍳" },
  { id: "lower_deck",      name: "Lower Deck",        description: "Engine hum. Dark corridors. Not many passengers come here.", icon: "⚙️" },
  { id: "bar",             name: "The Bar",           description: "Passengers loosen up here. So do their secrets.", icon: "🍹" },
  { id: "cabin_hallway",   name: "Cabin Hallway",     description: "Long and quiet. Doors slightly ajar.", icon: "🚪" },
  { id: "deck_4",          name: "Deck 4",            description: "Security footage caught something here. Worth a look.", icon: "📹" },
  { id: "lifeboats",       name: "Lifeboat Bay",      description: "Isolated. Out of sight. A good hiding spot.", icon: "🛶" },
  { id: "front_desk",      name: "Front Desk",        description: "Someone left an anonymous tip here earlier.", icon: "🗂️" },
  { id: "observation_deck",name: "Observation Deck",  description: "Top of the ship. Wind. Stars. One very quiet suspect.", icon: "🌟" },
];

// ─────────────────────────────────────────
// SUSPECTS — where they hang out on the ship
// Player walks up to them to hear their voice bubble
// ─────────────────────────────────────────
export const SUSPECTS = [
  { name: "Jim",       role: "Worker",    hangout: ["lower_deck", "deck_4", "cabin_hallway"],        description: "Works the lower decks. Knows every corridor.",          sprite: "worker_jim" },
  { name: "Jeff",      role: "Cook",      hangout: ["kitchen", "dining_room", "bar"],                description: "Has access to the kitchen and all passenger meals.",     sprite: "cook_jeff" },
  { name: "Bob",       role: "Passenger", hangout: ["lido_deck", "bar", "front_desk"],               description: "Friendly retiree. Always asking questions.",              sprite: "passenger_bob" },
  { name: "Jeffrey",   role: "Passenger", hangout: ["cabin_hallway", "observation_deck", "lifeboats"],description: "Nervous traveler. Avoids eye contact.",                  sprite: "passenger_jeffrey" },
  { name: "Little Bob",role: "Passenger", hangout: ["lido_deck", "dining_room", "deck_4"],           description: "Bob's nephew. Quieter than he looks.",                   sprite: "passenger_littlebob" },
  { name: "Jim Bob",   role: "Passenger", hangout: ["bar", "dining_room", "lido_deck"],              description: "Very friendly. Maybe too friendly.",                     sprite: "passenger_jimbob" },
  { name: "Fred",      role: "Passenger", hangout: ["observation_deck", "cabin_hallway", "front_desk"],description: "Reads mystery novels all day. Convenient.",             sprite: "passenger_fred" },
];

// ─────────────────────────────────────────
// AGENTS — disguised, roam the ship, give real clues only
// ─────────────────────────────────────────
export const AGENTS = [
  { name: "Agent Marina", disguise: "Passenger in sunglasses" },
  { name: "Agent Cole",   disguise: "Bartender with a notepad" },
  { name: "Agent Priya",  disguise: "Photographer on the deck" },
  { name: "Agent Sven",   disguise: "Jogger on the upper deck" },
  { name: "Agent Lena",   disguise: "Woman reading at the pool" },
  { name: "Agent Torres", disguise: "Waiter in the dining room" },
  { name: "Agent Yuki",   disguise: "Crew member in a white coat" },
  { name: "Agent Brennan",disguise: "Man playing cards at the bar" },
];

// ─────────────────────────────────────────
// VOICE BUBBLE CLUES
// Real clues: show a shape icon in the corner of the speech bubble
// Fake clues: trigger the Yorkie-poo animation
// ─────────────────────────────────────────
export const CLUE_SHAPES = ["⭐", "⬤", "■", "⬡", "▲"];

export const REAL_CLUES = [
  "I saw someone in a yellow raincoat near Deck 4 last night.",
  "The victim's watch was stopped at 11:47 PM.",
  "A torn piece of fabric was found near the engine room.",
  "Someone made a phone call 20 minutes before it happened.",
  "There's a hidden compartment in the lifeboat bay. I saw someone check it.",
  "Two passengers were heard arguing loudly near the bar around midnight.",
  "One person on this ship boarded under a false name.",
  "A strange smell came from the kitchen around midnight.",
  "There are scratches on the railing on Deck 4. Looks like a struggle.",
  "The victim had a note in their pocket: 'I know what you did.'",
  "A staff member saw someone leaving the restricted zone after hours.",
  "An anonymous tip was left at the front desk this morning.",
  "Someone was in the kitchen who had no business being there.",
  "I found a glove behind the lifeboat. It wasn't mine.",
  "The security camera on Deck 4 was turned off between 11 PM and 1 AM.",
];

export const FAKE_CLUES = [
  "A seagull was acting suspicious near the bow.",
  "Someone left a half-eaten granola bar on the shuffleboard court.",
  "The pool thermometer reads one degree warmer than usual.",
  "A passenger complained the buffet ran out of shrimp.",
  "Someone's towel animal was a snake instead of an elephant.",
  "The bingo caller mispronounced B-7.",
  "A deck chair was slightly out of alignment.",
  "The captain sneezed twice during the morning announcement.",
  "Someone was caught hoarding extra pillows.",
  "The elevator button for Deck 3 is a little sticky.",
];

// ─────────────────────────────────────────
// FAKE CLUE DOG EVENT
// Plays when player receives a fake clue from a character
// ─────────────────────────────────────────
export const FAKE_CLUE_EVENT = {
  dogBreed: "Yorkie-poo",
  dogName: "Biscuit",
  sequence: [
    "A tiny Yorkie-poo trots in from off-screen 🐾",
    "PFFFFT 💨",
    "Waves both little paws up and down — once, twice",
    "Trots away with zero regret",
  ],
  voiceBubble: "Woof. That one was fake.",
};

// ─────────────────────────────────────────
// SHIPS — each looks and feels different
// ─────────────────────────────────────────
export const SHIPS = [
  { id: 1, name: "Carnival Horizon",  destination: "Mexico",      theme: "tropical",  bgColor: "#1a472a", accentColor: "#f4a800", ambientSound: "mariachi_faint" },
  { id: 2, name: "Carnival Splendor", destination: "Australia",   theme: "oceanic",   bgColor: "#0a3d62", accentColor: "#00cec9", ambientSound: "ocean_wind" },
  { id: 3, name: "Carnival Magic",    destination: "France",      theme: "european",  bgColor: "#2d3436", accentColor: "#e17055", ambientSound: "french_cafe" },
  { id: 4, name: "Carnival Spirit",   destination: "Alaska",      theme: "arctic",    bgColor: "#2c3e50", accentColor: "#74b9ff", ambientSound: "cold_wind" },
  { id: 5, name: "Carnival Valor",    destination: "New Orleans", theme: "bayou",     bgColor: "#4a0e0e", accentColor: "#fdcb6e", ambientSound: "jazz_distant" },
];

// ─────────────────────────────────────────
// DIFFICULTY
// ─────────────────────────────────────────
export const DIFFICULTY = {
  easy:   { fakeCluePct: 0.2, cluesPerRound: 10, killChance: 0.05, suspectMoveSpeed: "slow" },
  medium: { fakeCluePct: 0.4, cluesPerRound: 10, killChance: 0.12, suspectMoveSpeed: "medium" },
  hard:   { fakeCluePct: 0.6, cluesPerRound: 10, killChance: 0.20, suspectMoveSpeed: "fast" },
};

// ─────────────────────────────────────────
// LOGIC HELPERS
// ─────────────────────────────────────────

/** Pick a random murderer at game start */
export function pickMurderer() {
  return SUSPECTS[Math.floor(Math.random() * SUSPECTS.length)];
}

/** Pick a random agent for this game */
export function pickAgent() {
  return AGENTS[Math.floor(Math.random() * AGENTS.length)];
}

/**
 * Called when player walks up to a character and taps them.
 * Returns a voice bubble — real clue with shape, or fake clue with dog trigger.
 */
export function generateVoiceBubble(character, difficulty = "medium") {
  const settings = DIFFICULTY[difficulty];
  const isFake = Math.random() < settings.fakeCluePct;

  if (isFake) {
    return {
      speaker: character.name,
      text: FAKE_CLUES[Math.floor(Math.random() * FAKE_CLUES.length)],
      isReal: false,
      shape: null,
      triggersDogEvent: true,
    };
  } else {
    return {
      speaker: character.name,
      text: REAL_CLUES[Math.floor(Math.random() * REAL_CLUES.length)],
      isReal: true,
      shape: CLUE_SHAPES[Math.floor(Math.random() * CLUE_SHAPES.length)],
      triggersDogEvent: false,
    };
  }
}

/** Returns which suspects are currently in a given room */
export function getSuspectsInRoom(roomId) {
  return SUSPECTS.filter(s => s.hangout.includes(roomId));
}

/** Roll kill risk when player enters a room */
export function checkKillRisk(difficulty = "medium") {
  return Math.random() < DIFFICULTY[difficulty].killChance;
}

/** Check if the player accused the right person */
export function checkAccusation(guessedName, murderer) {
  return guessedName.toLowerCase() === murderer.name.toLowerCase();
}

// ─────────────────────────────────────────
// UNLOCKS — after beating all 5 ships
// ─────────────────────────────────────────
export function createCustomShip({ name, destination, createdBy }) {
  return { id: `custom_${Date.now()}`, name, destination, theme: "custom", bgColor: "#1e1e2e", accentColor: "#a29bfe", isCustom: true, createdBy };
}
export function createCustomPlayer({ name, gender, superpower, createdBy }) {
  return { name, gender, superpower, isCustom: true, createdBy };
}
export function createCustomMurderer({ name, role, description, createdBy }) {
  return { name, role, description, isCustom: true, createdBy };
}
