// ============================================================
// MURDER ON THE HIGH SEAS — Game Data & Logic
// Built for Lovable (React) + GitHub
// ============================================================

// ─────────────────────────────────────────
// PLAYERS
// ─────────────────────────────────────────
export const PLAYERS = {
  male: [
    { name: "Octavio", superpower: "Shadow Step — can peek at one hidden clue per round" },
    { name: "Victor",  superpower: "Steel Mind — immune to one fake clue per game" },
    { name: "Mateo",   superpower: "Street Sense — can tell if a suspect is lying once per ship" },
    { name: "RJ",      superpower: "Quick Hands — draws an extra clue each round" },
    { name: "Enzo",    superpower: "Silver Tongue — can ask any suspect one bonus question" },
    { name: "Elias",   superpower: "Eagle Eye — fake clues are flagged with a subtle shimmer" },
    { name: "Noah",    superpower: "Calm Under Pressure — can un-pause and keep progress if killed once" },
  ],
  female: [
    { name: "Olivia", superpower: "Sixth Sense — once per ship, senses if she is being watched by murderer" },
    { name: "Kelly",  superpower: "Photographic Memory — all real clues stay visible in her log" },
    { name: "Addie",  superpower: "Charm — one suspect per ship will give a clue for free" },
    { name: "Anni",   superpower: "Hacker — can scan one passenger's background per round" },
  ],
  nonbinary: [
    { name: "Rose",   superpower: "Empath — can sense the emotional state of any suspect" },
    { name: "Spidey", superpower: "Web Sense — gets a warning buzz one round before a kill attempt" },
  ],
};

// ─────────────────────────────────────────
// SUSPECTS
// ─────────────────────────────────────────
export const SUSPECTS = [
  { name: "Jim",       role: "Worker",    description: "Works the lower decks. Knows every corridor." },
  { name: "Jeff",      role: "Cook",      description: "Has access to the kitchen and all passenger meals." },
  { name: "Bob",       role: "Passenger", description: "Friendly retiree. Always asking questions." },
  { name: "Jeffrey",   role: "Passenger", description: "Nervous traveler. Avoids eye contact." },
  { name: "Little Bob",role: "Passenger", description: "Bob's nephew. Quieter than he looks." },
  { name: "Jim Bob",   role: "Passenger", description: "From the South. Very friendly, maybe too friendly." },
  { name: "Fred",      role: "Passenger", description: "Reads mystery novels all day. Convenient." },
];

// ─────────────────────────────────────────
// SHIPS (Carnival-style)
// ─────────────────────────────────────────
export const SHIPS = [
  {
    id: 1,
    name: "Carnival Horizon",
    destination: "Mexico",
    description: "Warm breezes and mariachi music drift through the corridors. Someone isn't celebrating.",
    theme: "tropical",
    bgColor: "#1a472a",
    accentColor: "#f4a800",
  },
  {
    id: 2,
    name: "Carnival Splendor",
    destination: "Australia",
    description: "Southern stars overhead, but something dark is happening below deck.",
    theme: "oceanic",
    bgColor: "#0a3d62",
    accentColor: "#00cec9",
  },
  {
    id: 3,
    name: "Carnival Magic",
    destination: "France",
    description: "Croissants at breakfast. A body by dinner. Très dramatique.",
    theme: "european",
    bgColor: "#2d3436",
    accentColor: "#e17055",
  },
  {
    id: 4,
    name: "Carnival Spirit",
    destination: "Alaska",
    description: "Glaciers loom outside. Inside, suspicion is even colder.",
    theme: "arctic",
    bgColor: "#2c3e50",
    accentColor: "#74b9ff",
  },
  {
    id: 5,
    name: "Carnival Valor",
    destination: "New Orleans",
    description: "Jazz plays on the Lido deck. Somewhere in the crowd, the murderer dances.",
    theme: "bayou",
    bgColor: "#4a0e0e",
    accentColor: "#fdcb6e",
  },
];

// ─────────────────────────────────────────
// CLUE SHAPES (real clue markers)
// ─────────────────────────────────────────
export const CLUE_SHAPES = ["⭐ Star", "⬤ Circle", "■ Square", "⬡ Octagon", "▲ Triangle"];

// ─────────────────────────────────────────
// CLUES
// ─────────────────────────────────────────
export const REAL_CLUES = [
  "A fork with initials carved into it was found near the scene.",
  "Security footage shows someone in a yellow raincoat near Deck 4.",
  "The victim's watch was stopped at 11:47 PM.",
  "A torn piece of fabric matches the uniform of a crew member.",
  "Footprints in the engine room lead to a dead end.",
  "A half-eaten meal was found in the suspect's cabin.",
  "The victim made a phone call 20 minutes before their death.",
  "A hidden compartment in the lifeboat contained a glove.",
  "A passenger reported hearing a loud argument near the bar.",
  "The ship's manifest shows one passenger boarded under a false name.",
  "A strange smell was reported from the kitchen at midnight.",
  "Scratches on the railing suggest a struggle.",
  "The victim had a note in their pocket: 'I know what you did.'",
  "A staff member saw someone leaving the restricted zone.",
  "An anonymous tip was left at the front desk.",
];

export const FAKE_CLUES = [
  "A seagull was acting suspicious near the bow.",
  "Someone left a half-eaten granola bar on the shuffleboard court.",
  "The pool thermometer reads 1 degree warmer than usual.",
  "A passenger complained the buffet ran out of shrimp.",
  "Someone's towel animal was a snake instead of an elephant.",
  "The bingo caller mispronounced B-7.",
  "A deck chair was slightly out of alignment.",
  "The captain sneezed twice during the morning announcement.",
  "Someone was caught hoarding extra pillows.",
  "The elevator button for Deck 3 is a little sticky.",
];

// ─────────────────────────────────────────
// AGENTS (real clue givers — randomized each game)
// ─────────────────────────────────────────
export const AGENTS = [
  "Agent Marina", "Agent Cole", "Agent Priya", "Agent Sven",
  "Agent Lena", "Agent Torres", "Agent Yuki", "Agent Brennan",
];

// ─────────────────────────────────────────
// DIFFICULTY
// ─────────────────────────────────────────
export const DIFFICULTY = {
  easy:   { fakeCluePct: 0.2, cluesPerRound: 10, killChance: 0.05 },
  medium: { fakeCluePct: 0.4, cluesPerRound: 10, killChance: 0.12 },
  hard:   { fakeCluePct: 0.6, cluesPerRound: 10, killChance: 0.20 },
};

// ─────────────────────────────────────────
// FAKE CLUE DOG ANIMATION EVENT
// ─────────────────────────────────────────
export const FAKE_CLUE_EVENT = {
  dogBreed: "Yorkie-poo",
  animation: [
    "Dog walks up slowly",
    "Makes a loud farting noise 💨",
    "Wags both hands up and down — twice",
    "Trots away proudly",
  ],
  message: "Whoops! That was a fake clue. The Yorkie-poo knows.",
};

// ─────────────────────────────────────────
// GAME LOGIC HELPERS
// ─────────────────────────────────────────

/**
 * Pick a random murderer from the suspects list
 */
export function pickMurderer() {
  return SUSPECTS[Math.floor(Math.random() * SUSPECTS.length)];
}

/**
 * Pick a random agent for this game
 */
export function pickAgent() {
  return AGENTS[Math.floor(Math.random() * AGENTS.length)];
}

/**
 * Build a round of 10 clues based on difficulty
 * Some are fake, rest are real — shuffled and randomized
 */
export function buildClueRound(difficulty = "medium", murderer) {
  const settings = DIFFICULTY[difficulty];
  const fakeCount = Math.round(settings.cluesPerRound * settings.fakeCluePct);
  const realCount = settings.cluesPerRound - fakeCount;

  const shuffledReal = [...REAL_CLUES].sort(() => Math.random() - 0.5).slice(0, realCount);
  const shuffledFake = [...FAKE_CLUES].sort(() => Math.random() - 0.5).slice(0, fakeCount);

  const realWithShape = shuffledReal.map(clue => ({
    text: clue,
    isReal: true,
    shape: CLUE_SHAPES[Math.floor(Math.random() * CLUE_SHAPES.length)],
    givenBy: pickAgent(),
  }));

  const fakeWithTag = shuffledFake.map(clue => ({
    text: clue,
    isReal: false,
    shape: null,
    givenBy: "Unknown",
  }));

  return [...realWithShape, ...fakeWithTag].sort(() => Math.random() - 0.5);
}

/**
 * Check if player gets killed this round
 */
export function checkKillRisk(difficulty = "medium") {
  const chance = DIFFICULTY[difficulty].killChance;
  return Math.random() < chance;
}

/**
 * Check if the player's accusation is correct
 */
export function checkAccusation(guessedName, murderer) {
  return guessedName.toLowerCase() === murderer.name.toLowerCase();
}

// ─────────────────────────────────────────
// USER-CREATED CONTENT (unlocked after beating all 5 ships)
// ─────────────────────────────────────────
export const UNLOCK_CONDITIONS = {
  newShipUnlock: "Beat all 5 ships",
  newLevelUnlock: "First 3 players to finish get to create a new level",
  shipScope: "New ships can be added to one specific level or all levels",
};

export function createCustomShip({ name, destination, createdBy }) {
  return {
    id: `custom_${Date.now()}`,
    name,
    destination,
    description: `A new voyage to ${destination}, created by ${createdBy}.`,
    theme: "custom",
    bgColor: "#1e1e2e",
    accentColor: "#a29bfe",
    isCustom: true,
    createdBy,
  };
}

export function createCustomPlayer({ name, gender, superpower, createdBy }) {
  return {
    name,
    gender,
    superpower,
    isCustom: true,
    createdBy,
  };
}

export function createCustomMurderer({ name, role, description, createdBy }) {
  return {
    name,
    role,
    description,
    isCustom: true,
    createdBy,
  };
}
