// Every monster in OSE Classic Monsters (book pp. 4-67), generated from the book's text and
// checked field-by-field (see tools notes in the changelog). Monsters whose Hit Dice vary
// (elementals, hellhound, hydra, insect swarm, small herd animal, vampire, veteran) are split
// into one entry per HD / power level, using the book's own values and its monster attack and
// saving throw tables where the entry says "By HD". Do not hand-edit numbers without the book.
import type { Monster } from "../types";

export const BASE_MONSTERS: Monster[] = [
 {
  "name": "Acolyte",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × mace (1d6)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 11,
   "W": 12,
   "P": 14,
   "B": 16,
   "S": 15
  },
  "ml": 7,
  "al": "Any",
  "xp": 10,
  "naDungeon": "1d8",
  "naWild": "1d20",
  "tt": "U",
  "flavor": "1st level clerics on a quest for their deity.",
  "abilities": [
   {
    "name": "Leader",
    "text": "Groups of 4+ are led by a higher level cleric (1d10: 1–4: 2nd level, 5–7: 3rd level, 8–9: 4th level, 10: 5th level). Choose or roll the leader’s spells."
   }
  ],
  "spells": [],
  "svNote": "C1"
 },
 {
  "name": "Ape, White",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d4) or 1 × thrown rock (1d6)",
  "dmg": "1d4",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "1d6",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "Albino, herbivorous, gorilla-like apes that live in caves and emerge at night to forage.",
  "abilities": [
   {
    "name": "Territorial",
    "text": "Defend their lair with threats and, if this is ignored, violence."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Bandit",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 13,
   "W": 14,
   "P": 13,
   "B": 16,
   "S": 15
  },
  "ml": 8,
  "al": "Neutral or Chaotic",
  "xp": 10,
  "naDungeon": "1d8",
  "naWild": "3d10",
  "tt": "U (A)",
  "flavor": "NPC thieves who live by robbery.",
  "abilities": [
   {
    "name": "Trickery",
    "text": "Use disguise or trickery to surprise victims."
   },
   {
    "name": "Leader",
    "text": "May have a leader of 2nd level or higher (any human class)."
   },
   {
    "name": "Hoard",
    "text": "Only have treasure type A when encountered in their wilderness lair."
   }
  ],
  "spells": [],
  "svNote": "T1"
 },
 {
  "name": "Basilisk",
  "hd": "6+1**",
  "hpDice": {
   "n": 6,
   "mod": 1
  },
  "avgHp": 28,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d10 + petrification), 1 × gaze (petrifi- cation)",
  "dmg": "1d10",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "60’ (20’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 950,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "F",
  "flavor": "10’ long, serpentine lizards. Unintelligent, but highly magical. Dwell in caverns and twisted brambles.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "Characters surprised by a basilisk meet its gaze."
   },
   {
    "name": "Petrifying touch",
    "text": "Anyone touched by a basilisk is turned to stone (save vs petrify)."
   },
   {
    "name": "Petrifying gaze",
    "text": "Anyone meeting a basilisk’s gaze is turned to stone (save versus petrify). Unless averting eyes or using a mirror, characters in melee are affected each round."
   },
   {
    "name": "Averting eyes",
    "text": "–4 penalty to-hit; the basilisk gains a +2 bonus to attack."
   },
   {
    "name": "Mirrors",
    "text": "The reflection of a basilisk is harmless. Fighting by looking in a mirror incurs a –1 penalty to attack. If a basilisk sees its own reflection (2-in-6 chance), it must save or be petrified."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Giant Bat",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d4)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "30’ (10’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "1d10",
  "naWild": "1d10",
  "tt": "None",
  "flavor": "Carnivorous bats that may attack adventurers, if hungry. 1-in-20 groups of giant bats are vampiric (see Giant Vampire Bat).",
  "abilities": [
   {
    "name": "Echolocation",
    "text": "Unaffected by effects that impair, modify, or rely on sight. Blinded by magical silence."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Giant Vampire Bat",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d4 + unconsciousness)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "30’ (10’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "1d10",
  "naWild": "1d10",
  "tt": "None",
  "flavor": "Nocturnal, flying mammals that roost in caves or ruins.",
  "abilities": [
   {
    "name": "Echolocation",
    "text": "Unaffected by effects that impair, modify, or rely on sight. Blinded by magical silence."
   },
   {
    "name": "Unconsciousness",
    "text": "For 1d10 rounds (save versus paralysis)."
   },
   {
    "name": "Blood drain",
    "text": "A vampire bat may drain blood from an unconscious victim: 1d4 hit points automatic damage per round. A victim killed by blood drain becomes undead (possibly a vampire) after 24 hours (save versus spells)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Normal Bat",
  "hd": "1hp",
  "hpDice": {
   "special": "1"
  },
  "avgHp": 1,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × swarm (confusion)",
  "dmg": "",
  "thac0": 20,
  "thac0Bonus": "-1",
  "mv": "9’ (3’) / 120’ (40’) flying",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 5,
  "naDungeon": "1d100",
  "naWild": "1d100",
  "tt": "None",
  "flavor": "Nocturnal, flying mammals that roost in caves or ruins.",
  "abilities": [
   {
    "name": "Echolocation",
    "text": "Unaffected by effects that impair, modify, or rely on sight. Blinded by magical silence."
   },
   {
    "name": "Swarm",
    "text": "10 bats can swarm around a target’s head, causing confusion: –2 to attack rolls and saves; unable to cast spells."
   },
   {
    "name": "Attacks",
    "text": "As normal human."
   },
   {
    "name": "Flighty",
    "text": "Unless magically summoned or controlled, normal bats check morale every round."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Black Bear",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d3), 1 × bite (1d6)",
  "dmg": "1d3",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "U",
  "flavor": "6’ tall; favour eating berries and roots.",
  "abilities": [
   {
    "name": "Bear hug",
    "text": "If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 automatic damage."
   },
   {
    "name": "Defensive",
    "text": "Adults will protect their young with their lives, but otherwise only attack if cornered."
   },
   {
    "name": "Camp raids",
    "text": "Sometimes raid camps, for food (especially fish and sweet treats)."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Cave Bear",
  "hd": "7",
  "hpDice": {
   "n": 7,
   "mod": 0
  },
  "avgHp": 31,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × claw (1d8), 1 × bite (2d6)",
  "dmg": "1d8",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 450,
  "naDungeon": "1d2",
  "naWild": "1d2",
  "tt": "V",
  "flavor": "Ferocious, 15’ tall grizzly bears found in caves and Lost World settings. Omnivorous, but prefer meat, including humans.",
  "abilities": [
   {
    "name": "Bear hug",
    "text": "If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 automatic damage."
   },
   {
    "name": "Sense of smell",
    "text": "Poor eyesight, but keen sense of smell. When hungry, will follow a track of blood by scent."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Grizzly Bear",
  "hd": "5",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d4), 1 × bite (1d8)",
  "dmg": "1d4",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 175,
  "naDungeon": "1",
  "naWild": "1d4",
  "tt": "U",
  "flavor": "Aggressive, 9’ tall. Silver-tipped fur, brown or reddish brown in colour. Live in forests and mountains. Favour eating meat.",
  "abilities": [
   {
    "name": "Bear hug",
    "text": "If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 automatic damage."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Polar Bear",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d6), 1 × bite (1d10)",
  "dmg": "1d6",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "1",
  "naWild": "1d2",
  "tt": "U",
  "flavor": "Aggressive, white-furred bears that stand 11’ tall and live in cold regions. Favour eating fish.",
  "abilities": [
   {
    "name": "Bear hug",
    "text": "If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 automatic damage."
   },
   {
    "name": "Swimming",
    "text": "Excellent swimmers."
   },
   {
    "name": "Snow walk",
    "text": "Wide paws allow running on the surface of snow without sinking."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Fire Beetle",
  "hd": "1+2",
  "hpDice": {
   "n": 1,
   "mod": 2
  },
  "avgHp": 6,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (2d4)",
  "dmg": "2d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 15,
  "naDungeon": "1d8",
  "naWild": "2d6",
  "tt": "None",
  "flavor": "2(’ long. Commonly found underground.",
  "abilities": [
   {
    "name": "Glowing nodules",
    "text": "Three glowing glands (two above the eyes, one on the abdomen) cast light in a 10’ radius. If removed, keep glowing for 1d6 days."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Oil Beetle",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d6), 1 × oil spray (blistering)",
  "dmg": "1d6",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1d8",
  "naWild": "2d6",
  "tt": "None",
  "flavor": "3’ long, burrowing beetles sometimes encountered below ground.",
  "abilities": [
   {
    "name": "Oil spray",
    "text": "Use when attacked. Targets one opponent within 5’. A hit causes painful blistering: –2 to attack rolls for 24 hours. Cure light wounds can be used to cure this, instead of restoring hit points."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Tiger Beetle",
  "hd": "3+1",
  "hpDice": {
   "n": 3,
   "mod": 1
  },
  "avgHp": 14,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × bite (2d6)",
  "dmg": "2d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "1d6",
  "naWild": "2d4",
  "tt": "U",
  "flavor": "Carnivorous, 4’ long, tiger-striped beetles with powerful, crushing mandibles. Hunt robber flies, but sometimes eat humans.",
  "abilities": [],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Berserker",
  "hd": "1+1*",
  "hpDice": {
   "n": 1,
   "mod": 1
  },
  "avgHp": 5,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 19,
  "naDungeon": "1d6",
  "naWild": "3d10",
  "tt": "P (B)",
  "flavor": "Fighters who enter a rage in battle. They never take prisoners.",
  "abilities": [
   {
    "name": "Battle rage",
    "text": "+2 to hit humans and similar humanoids (e.g. orcs, goblins). Rage sometimes makes them attack their allies."
   },
   {
    "name": "Hoard",
    "text": "Only have treasure type B when encountered in the wilderness."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Black Pudding",
  "hd": "10*",
  "hpDice": {
   "n": 10,
   "mod": 0
  },
  "avgHp": 45,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × touch (3d8)",
  "dmg": "3d8",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "60’ (20’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 1600,
  "naDungeon": "1",
  "naWild": "0",
  "tt": "None",
  "flavor": "Huge (5’–30’ across), mindless blobs of amorphous black jelly. Driven by ravenous hunger.",
  "abilities": [
   {
    "name": "Immunity",
    "text": "Only harmed by fire-based attacks."
   },
   {
    "name": "Division",
    "text": "Non-fire attacks (including spells) cause the pudding to divide. Each hit creates a 2HD pudding that does 1d8 damage."
   },
   {
    "name": "Erode wood and metal",
    "text": "Can dissolve wood or metal in one turn."
   },
   {
    "name": "Cling",
    "text": "Can move across walls and ceilings."
   },
   {
    "name": "Seep",
    "text": "Can squeeze through small holes and cracks."
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Blink Dog",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d6)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 6,
  "al": "Lawful",
  "xp": 125,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "C",
  "flavor": "Highly intelligent, dingo-like dogs that live in packs. Have the innate ability to blink in and out of existence.",
  "abilities": [
   {
    "name": "Blink",
    "text": "In combat, teleport close to an enemy, attack, then reappear 1d4 × 10’ away. If they have initiative, can blink away without the opponent being able to counter-attack."
   },
   {
    "name": "Disappear",
    "text": "If in serious danger, the pack can flee by entirely disappearing."
   },
   {
    "name": "Hate warp beasts",
    "text": "Always attack."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Boar",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × tusk (2d4)",
  "dmg": "2d4",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "None",
  "flavor": "Omnivorous wild boars that dwell primarily in forests. Can be irascible and dangerous, if disturbed.",
  "abilities": [],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Brigand",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "1d4 × 10",
  "tt": "A",
  "flavor": "Outlaws and mercenaries who make a living by raiding settlements and attacking travellers.",
  "abilities": [
   {
    "name": "Footmen",
    "text": "Half the group has: leather armour, shield, sword, shortbow."
   },
   {
    "name": "Cavalry",
    "text": "The other half is mounted on riding horses and has: chainmail, shield, sword."
   },
   {
    "name": "Leaders and commanders",
    "text": "For every 20 brigands, there is a leader (2nd level fighter). For every 40 brigands, there is a commander (4th level fighter). Leaders ride war horses (with barding) and have: plate mail, sword, lance."
   },
   {
    "name": "Fortified camps",
    "text": "Bands commonly combine and live in a camp of 5d6 × 10 brigands."
   },
   {
    "name": "Camp leaders",
    "text": "Combined camps are led by a 9th level fighter, plus a 5th level fighter for every 50 brigands. Also 50% chance of a magic-user (level 1d3 + 8); 30% chance of a cleric (8th level)."
   }
  ],
  "spells": [],
  "acText": "6 [13], 4 [15], or 3 [16]",
  "svNote": "1"
 },
 {
  "name": "Buccaneer",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "see below",
  "tt": "A",
  "flavor": "Sailors who make a living by raiding coastal settlements and robbing other ships. Typically ply rivers, lakes, and coastal waters; occasionally oceans.",
  "abilities": [
   {
    "name": "Ships and crew",
    "text": "Depends where encountered. Rivers or lakes: 1d8 river boats (1d2 × 10 buccaneers each); coastal waters: 1d6 small galleys (1d3+1 × 10 buccaneers each); any: 1d4 longships (1d3+2 × 10 buccaneers each); ocean: 1d3 small warships (1d5+3 × 10 buccaneers each). (See Classic Fantasy: Genre Rules for details on ships.)"
   },
   {
    "name": "Arms",
    "text": "60% of group have: leather armour, sword; 30% have: leather armour, sword, crossbow; 10% have: chainmail, sword, crossbow."
   },
   {
    "name": "Leaders and captains",
    "text": "For every 30 buccaneers, there is a 4th level fighter. Each ship has a captain (7th level fighter)."
   },
   {
    "name": "Fleet commander",
    "text": "9th level fighter. 30% chance of a magic-user (level 1d2 + 9); 25% chance of a cleric (8th level)."
   },
   {
    "name": "Treasure",
    "text": "Divided between vessels. Instead of carrying aboard, may have a map to where it is buried."
   },
   {
    "name": "Havens",
    "text": "Lawless, fortified, coastal towns may act as a haven for buccaneers and pirates."
   }
  ],
  "spells": [],
  "acText": "7 [12] or 5 [14]",
  "svNote": "1"
 },
 {
  "name": "Bugbear",
  "hd": "3+1",
  "hpDice": {
   "n": 3,
   "mod": 1
  },
  "avgHp": 14,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × weapon (2d4 or by weapon +1)",
  "dmg": "2d4",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 50,
  "naDungeon": "2d4",
  "naWild": "5d4",
  "tt": "B",
  "flavor": "Large, hairy goblins with an ungainly gait. Favour attacking by surprise.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "On a 1–3, due to stealth."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Caecilia",
  "hd": "6*",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 500,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "B",
  "flavor": "Gigantic (30’ long), grey, worm-like amphibians, with huge, toothed maws.",
  "abilities": [
   {
    "name": "Swallow whole",
    "text": "On an attack roll of 19 or more. Inside the monster’s belly: suffer 1d8 damage per round (until the caecilia is killed); may attack with a dagger at –4 to hit; body digested in 6 turns after death."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Camel",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1), 1 × hoof (1d4)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "Irascible animals that are adapted to life in dry climates. Often used for transportation in deserts.",
  "abilities": [
   {
    "name": "Ill-tempered",
    "text": "Bite or kick creatures in their way, including owners."
   },
   {
    "name": "Water",
    "text": "After drinking well, can survive 2 weeks without water."
   },
   {
    "name": "Desert travel",
    "text": "Move at full speed through broken lands and deserts."
   },
   {
    "name": "Beast of burden",
    "text": "Carry up to 3,000 coins unencumbered; up to 6,000 at half speed."
   },
   {
    "name": "Charge attacks",
    "text": "Are not possible, when mounted on a camel."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Carcass Crawler",
  "hd": "3+1*",
  "hpDice": {
   "n": 3,
   "mod": 1
  },
  "avgHp": 14,
  "ac": 7,
  "acAsc": 12,
  "att": "8 × tentacle (paralysis)",
  "dmg": "",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "B",
  "flavor": "9’ long, 3’ high, many-legged, segmented worms with a ring of 2’ long tentacles around their mouths.",
  "abilities": [
   {
    "name": "Paralysis",
    "text": "A hit by a tentacle causes paralysis for 2d4 turns (save versus paralysis). Paralysed victims will be devoured, if the crawler is le% in peace."
   },
   {
    "name": "Cling",
    "text": "Can walk on walls and ceilings."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Lion",
  "hd": "5",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d4+1), 1 × bite (1d10)",
  "dmg": "1d4+1",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 175,
  "naDungeon": "1d4",
  "naWild": "1d8",
  "tt": "U",
  "flavor": "Hunt in groups called “prides”. Live in hot regions, typically in savannah or scrublands close to deserts.",
  "abilities": [
   {
    "name": "Favoured prey",
    "text": "Often develop a taste for a certain type of meat (this may include humans!), hunting that creature with preference."
   },
   {
    "name": "Inquisitive",
    "text": "May follow PCs out of curiosity."
   },
   {
    "name": "Pursuit",
    "text": "Always pursue prey that flees."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Mountain Lion",
  "hd": "3+2",
  "hpDice": {
   "n": 3,
   "mod": 2
  },
  "avgHp": 15,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d3), 1 × bite (1d6)",
  "dmg": "1d3",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "U",
  "flavor": "Have yellow-brown fur and favour mountains, deserts, and forests. Will occasionally venture into dungeons.",
  "abilities": [
   {
    "name": "Favoured prey",
    "text": "Often develop a taste for a certain type of meat (this may include humans!), hunting that creature with preference."
   },
   {
    "name": "Inquisitive",
    "text": "May follow PCs out of curiosity."
   },
   {
    "name": "Pursuit",
    "text": "Always pursue prey that flees."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Panther",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × claw (1d4), 1 × bite (1d8)",
  "dmg": "1d4",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "210’ (70’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "1d2",
  "naWild": "1d6",
  "tt": "U",
  "flavor": "High-speed hunters that live in plains and forests.",
  "abilities": [
   {
    "name": "Favoured prey",
    "text": "Often develop a taste for a certain type of meat (this may include humans!), hunting that creature with preference."
   },
   {
    "name": "Inquisitive",
    "text": "May follow PCs out of curiosity."
   },
   {
    "name": "Pursuit",
    "text": "Always pursue prey that flees."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Sabre-Toothed Tiger",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d8), 1 × bite (2d8)",
  "dmg": "1d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "150’ (50’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "V",
  "flavor": "Huge, aggressive cats with foot-long fangs. Normally only found in Lost World regions.",
  "abilities": [
   {
    "name": "Favoured prey",
    "text": "Often develop a taste for a certain type of meat (this may include humans!), hunting that creature with preference."
   },
   {
    "name": "Inquisitive",
    "text": "May follow PCs out of curiosity."
   },
   {
    "name": "Pursuit",
    "text": "Always pursue prey that flees."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Tiger",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d6), 1 × bite (2d6)",
  "dmg": "1d6",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "1",
  "naWild": "1d3",
  "tt": "U",
  "flavor": "Large, solitary hunters with striped camouflage markings. Favour woodlands and cooler regions.",
  "abilities": [
   {
    "name": "Favoured prey",
    "text": "Often develop a taste for a certain type of meat (this may include humans!), hunting that creature with preference."
   },
   {
    "name": "Inquisitive",
    "text": "May follow PCs out of curiosity."
   },
   {
    "name": "Pursuit",
    "text": "Always pursue prey that flees."
   },
   {
    "name": "Surprise",
    "text": "On a 1–4, in woodland, due to camouflage."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Cave Locust",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d2) or 1 × jump (1d4) or 1 × spit (stench)",
  "dmg": "1d2",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "60’ (20’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 5,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "2d10",
  "naWild": "1d10",
  "tt": "None",
  "flavor": "2–3’ long, herbivorous, giant crickets that dwell in caverns.",
  "abilities": [
   {
    "name": "Blend in with stone",
    "text": "May be overlooked or mistaken for statues, due to their stony colouration."
   },
   {
    "name": "Shriek",
    "text": "If attacked or frightened, shriek to warn others. This may attract wandering monsters (20% chance per round)."
   },
   {
    "name": "Jump",
    "text": "Very skittish. If attacked, usually flee by jumping up to 60’ then flying away. 50% chance of jumping at a random opponent, in which case treat the jump as an attack."
   },
   {
    "name": "Spit",
    "text": "Used defensively. 10’ range. Target treated as AC 9 [10]. The affected character is covered in stinking spittle: unable to act for 1 turn (save versus poison). Until the goo is washed off, others who come within 5’ must also save versus poison or be violently sick."
   },
   {
    "name": "Poison immunity",
    "text": "Immune to yellow mould (p67) and most poisons, due to their habit of eating fungi."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Centaur",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × hoof (1d6), 1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "180’ (60’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "0",
  "naWild": "2d10",
  "tt": "A",
  "flavor": "Fantastic creatures with the legs and body of a horse, and the upper body and head of a human. Live in small family or tribal groups, in wild meadows and isolated forests.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Bows, clubs, lances."
   },
   {
    "name": "Lair",
    "text": "Hidden in dense woods, along twisting, guarded paths."
   },
   {
    "name": "Females and young",
    "text": "Normally remain in the lair. Flee if attacked. Young have 2HD and make 2 hoof attacks (1d2) and 1 weapon attack (1d4 or by weapon)."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Centipede, Giant",
  "hd": "½*",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 9,
  "acAsc": 10,
  "att": "1 × bite (poison)",
  "dmg": "",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 6,
  "naDungeon": "2d4",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "1’ long centipedes that dwell in dark, damp locations.",
  "abilities": [
   {
    "name": "Poison",
    "text": "Causes victims to become horribly sick for ten days (save versus poison): no physical activity possible except half speed movement."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Chimera",
  "hd": "9**",
  "hpDice": {
   "n": 9,
   "mod": 0
  },
  "avgHp": 40,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × claw (1d3), goat: 1 × gore (2d4), lion: 1 × bite (2d4), dragon: 1 × bite (3d4) or 1 × breath (3d6)",
  "dmg": "1d3",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’) / 180’ (60’) flying",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 2300,
  "naDungeon": "1d2",
  "naWild": "1d4",
  "tt": "F",
  "flavor": "Horrific, hybrid monstrosities with the forequarters of a lion, the hindquarters of a goat, the wings of a dragon, and three heads: goat, lion, and dragon. Dwell in wild, hilly areas, or sometimes in dungeons.",
  "abilities": [
   {
    "name": "Attack pattern",
    "text": "Dragon head: 50% chance of breath attack, otherwise bites."
   },
   {
    "name": "Breath weapon",
    "text": "Cone of fire: end 10’ wide, 50’ long. Can be used up to three times per day."
   }
  ],
  "spells": [],
  "svNote": "9"
 },
 {
  "name": "Cockatrice",
  "hd": "5**",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × beak (1d6 + petrification)",
  "dmg": "1d6",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "90’ (30’) / 180’ (60’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 425,
  "naDungeon": "1d4",
  "naWild": "1d8",
  "tt": "D",
  "flavor": "Small, magical, bird / reptile hybrids with long serpent tails and the head, legs, and wings of a cockerel. Live in all environments.",
  "abilities": [
   {
    "name": "Petrification",
    "text": "Anyone touched is turned to stone (save versus petrify)."
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Crab, Giant",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × pincer (2d6)",
  "dmg": "2d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "1d2",
  "naWild": "1d6",
  "tt": "None",
  "flavor": "Unintelligent crustaceans that lurk in coastal waters and creep along beaches. Cannot swim.",
  "abilities": [
   {
    "name": "Ravenous",
    "text": "Attack any moving creature."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Giant Crocodile",
  "hd": "15",
  "hpDice": {
   "n": 15,
   "mod": 0
  },
  "avgHp": 67,
  "ac": 1,
  "acAsc": 18,
  "att": "1 × bite (3d8)",
  "dmg": "3d8",
  "thac0": 9,
  "thac0Bonus": "+10",
  "mv": "90’ (30’) / 90’ (30’) swimming",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 1350,
  "naDungeon": "0",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "More than 50’ long. Usually encountered in Lost World regions. Will attack small ships.",
  "abilities": [
   {
    "name": "Feeding frenzy",
    "text": "Attracted to the scent of blood or violent movement in the water."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Large Crocodile",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × bite (2d8)",
  "dmg": "2d8",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "90’ (30’) / 90’ (30’) swimming",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "20’ or more long. May attack small watercra% (canoes, rafts).",
  "abilities": [
   {
    "name": "Feeding frenzy",
    "text": "Attracted to the scent of blood or violent movement in the water."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Normal Crocodile",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’) / 90’ (30’) swimming",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "Large reptiles that are ungainly on land and live primarily in water, lurking just beneath the surface of subtropical swamps and lazy rivers. If hungry, attack any creatures that venture into the water.",
  "abilities": [
   {
    "name": "Feeding frenzy",
    "text": "Attracted to the scent of blood or violent movement in the water."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Cyclops",
  "hd": "13*",
  "hpDice": {
   "n": 13,
   "mod": 0
  },
  "avgHp": 58,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × club (3d10) or 1 × rock (3d6)",
  "dmg": "3d10",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "90’ (30’)",
  "sv": {
   "D": 4,
   "W": 5,
   "P": 6,
   "B": 5,
   "S": 8
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 2300,
  "naDungeon": "1",
  "naWild": "1d4",
  "tt": "E + 5,000gp",
  "flavor": "20’ tall humanoids with a single, central eye. Dwell in caves, alone or in small groups. Cultivate grapes and raise sheep.",
  "abilities": [
   {
    "name": "Attack penalty",
    "text": ")2 penalty on all hit rolls, due to limited depth perception."
   },
   {
    "name": "Rock throwing",
    "text": "Up to 200’."
   },
   {
    "name": "Slow-witted",
    "text": "Can be tricked by clever PCs."
   },
   {
    "name": "Curse",
    "text": "1-in-20 cyclops can place a curse on a character once a week. Save versus spells or be a*icted by a curse of the referee’s choosing. (Maximum possible effects: –2 penalty to saves, –4 penalty to hit, an ability score reduced by 50%.)"
   }
  ],
  "spells": [],
  "svNote": "13"
 },
 {
  "name": "Dervish",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 10,
  "al": "Lawful",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "1d6+1 × 10",
  "tt": "A",
  "flavor": "Fanatically religious, nomadic people who wander steppes and desert regions, living in tents.",
  "abilities": [
   {
    "name": "Mounted",
    "text": "On warhorses."
   },
   {
    "name": "Arms",
    "text": "50% of group have: leather armour, shield, lance; 25% have: leather armour, shield, shortbow, sword; 25% have: chainmail, shield, lance."
   },
   {
    "name": "Camps",
    "text": "Groups commonly combine and live in a camp or tribe of up to 300 dervishes, plus women, children, and animals. 25% chance of a wood or brick enclosure."
   },
   {
    "name": "Camp leaders",
    "text": "Led by 10th level cleric."
   },
   {
    "name": "Intolerant",
    "text": "Of other religious views."
   },
   {
    "name": "Holy war",
    "text": "Occasionally wage war against other religious factions. Will slay people of different faith, or take them prisoner. Prisoners must convert; otherwise killed or used as slaves. Characters of Lawful alignment may be asked to join the holy war. Dervishes are highly suspicious of those who refuse (without good reason)."
   }
  ],
  "spells": [],
  "acText": "6 [13] or 4 [15]",
  "svNote": "1"
 },
 {
  "name": "Djinni (Lesser)",
  "hd": "7+1*",
  "hpDice": {
   "n": 7,
   "mod": 1
  },
  "avgHp": 32,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × fists (2d8), magic",
  "dmg": "2d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 4,
   "W": 5,
   "P": 6,
   "B": 5,
   "S": 8
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 850,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Highly magical, free-willed, intelligent beings from the elemental plane of air. Tall humanoids wreathed in clouds.",
  "abilities": [
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Magic powers",
    "text": "Each can be used three times per day: a. Whirlwind form: 5 rounds to transform (or change back). 70’ tall, 20’ wide at top, 10’ wide at base. Moves at 120’ (40’). 2d6 damage to all in path. Creatures with less than 2HD swept aside (save vs death). b. Gaseous form c. Invisibility d. Illusion: Visual and audial. No concentration required. Remains until touched or dispelled. e. Create food and drink: For 12 humans and mounts for one day. f. Conjure metallic objects: Up to 1,000 coins weight. Temporary: hardness determines duration (gold: 1 day; iron: 1 round). g. Conjure soft goods / wooden objects: Up to 1,000 coins weight. Permanent."
   },
   {
    "name": "Carrying capacity",
    "text": "6,000 coins without fatigue. Up to 12,000 coins for 3 turns walking / 1 turn flying. Must rest 1 turn afterwards."
   },
   {
    "name": "If killed",
    "text": "Returns to the plane of air."
   }
  ],
  "spells": [],
  "svNote": "14"
 },
 {
  "name": "Doppelgänger",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d12)",
  "dmg": "1d12",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "90’ (30’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 125,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "E",
  "flavor": "Intelligent, human-sized shape-shifters of wicked character and highly magical nature.",
  "abilities": [
   {
    "name": "Shape stealing",
    "text": "Can adopt the form of any human-like creature (7’ tall or less) observed. Then proceed to attack the person mimicked."
   },
   {
    "name": "Trickery",
    "text": "Will attempt to kill a PC, take on their role, then attack the party by surprise (e.g. during a battle)."
   },
   {
    "name": "Reversion",
    "text": "If killed, reverts to its original form."
   },
   {
    "name": "Spell immunity",
    "text": "Unaffected by sleep and charm spells."
   }
  ],
  "spells": [],
  "svNote": "10"
 },
 {
  "name": "Black Dragon",
  "hd": "7**",
  "hpDice": {
   "n": 7,
   "mod": 0
  },
  "avgHp": 31,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × claw (1d4 + 1), 1 × bite (2d10) or breath",
  "dmg": "1d4+1",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 1250,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "Dwell in swamps and marshes.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. 60’ long line of acid."
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 20%; 4 × 1st level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 40%."
   }
  ],
  "spells": [],
  "svNote": "7"
 },
 {
  "name": "Blue Dragon",
  "hd": "9**",
  "hpDice": {
   "n": 9,
   "mod": 0
  },
  "avgHp": 40,
  "ac": 0,
  "acAsc": 19,
  "att": "2 × claw (1d6 + 1), 1 × bite (3d10) or breath",
  "dmg": "1d6+1",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "Favour open plains and deserts.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. 100’ long line of lightning."
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 40%; 4 × 1st level, 4 × 2nd level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 20%."
   }
  ],
  "spells": [],
  "svNote": "9"
 },
 {
  "name": "Gold Dragon",
  "hd": "11**",
  "hpDice": {
   "n": 11,
   "mod": 0
  },
  "avgHp": 49,
  "ac": -2,
  "acAsc": 21,
  "att": "2 × claw (2d4), 1 × bite (6d6) or breath",
  "dmg": "2d4",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Lawful",
  "xp": 2700,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "May be encountered in any terrain, often in the guise of a person or animal.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. 90’ long cone of fire or cloud of chlorine gas."
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 100%; 4 × 1st level, 4 × 2nd level, 4 × 3rd level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 5%."
   },
   {
    "name": "Shape changing",
    "text": "May take on the form of a person or animal."
   }
  ],
  "spells": [],
  "svNote": "11"
 },
 {
  "name": "Green Dragon",
  "hd": "8**",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 1,
  "acAsc": 18,
  "att": "2 × claw (1d6), 1 × bite (3d8) or breath",
  "dmg": "1d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 1750,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "Lair in jungles and forests.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. Cloud of chlorine gas."
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 30%; 3 × 1st level, 3 × 2nd level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 30%."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Red Dragon",
  "hd": "10**",
  "hpDice": {
   "n": 10,
   "mod": 0
  },
  "avgHp": 45,
  "ac": -1,
  "acAsc": 20,
  "att": "2 × claw (1d8), 1 × bite (4d8) or breath",
  "dmg": "1d8",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 2300,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "Dwell in hills and mountains.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. 90’ long cone of fire."
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 50%; 3 × 1st level, 3 × 2nd level, 3 × 3rd level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 10%."
   }
  ],
  "spells": [],
  "svNote": "10"
 },
 {
  "name": "Sea Dragon",
  "hd": "8**",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 1,
  "acAsc": 18,
  "att": "1 × bite (3d8) or breath",
  "dmg": "3d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "180’ (60’) swimming / 180’ (60’) gliding",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 1750,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "Intelligent, aquatic dragons with green scales, fin-like wings, and a yellowish crest. Dwell in the depths of the ocean, inhabiting caverns or shipwrecks. Sometimes attack vessels to steal their treasure and eat the crew.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. Poison spittle, 100’ range, 20’ diameter. Save versus breath or die. (Poison is harmless after 1 round.)"
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 20%; 3 × 1st level, 3 × 2nd level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 30%."
   },
   {
    "name": "Gliding",
    "text": "Leap out of the water and glide for up to 6 rounds."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "White Dragon",
  "hd": "6**",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 3,
  "acAsc": 16,
  "att": "2 × claw (1d4), 1 × bite (2d8) or breath",
  "dmg": "1d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 725,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "H",
  "flavor": "Found in cold regions.",
  "abilities": [
   {
    "name": "Behaviour",
    "text": "Chaotic dragons usually try to eat humans, but may sometimes capture them. Neutral dragons may attack or ignore humans. Lawful dragons may aid parties worthy of the honour."
   },
   {
    "name": "Pride",
    "text": "Dragons are immensely proud creatures and will always listen to flattery."
   },
   {
    "name": "Attack pattern",
    "text": "A dragon always attacks first with its breath weapon, then either breathes again or makes melee attacks (equal chance of either)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by their own breath weapon or lesser versions thereof. Automatically save versus similar attack forms. (For example, a red dragon is immune to flaming oil and suffers half damage from fire ball spells.)"
   },
   {
    "name": "Subduing",
    "text": "Will surrender if reduced to 0hp by non-lethal attacks (see Subduing, under Other Combat Issues in Core Rules), admitting that it has been defeated. (Subdual damage does not reduce the damage done by the breath weapon.) A subdued dragon will attempt to escape or attack its captors, if the opportunity presents itself or if given a suicidal command. A subdued dragon may be sold for up to 1,000gp per hp."
   },
   {
    "name": "Age",
    "text": "The following stats describe dragons of average size. Younger dragons may have up to 3 HD less and ¼ or ½ as much treasure. Older dragons may have up to 3 HD more and twice as much treasure."
   },
   {
    "name": "Lairs",
    "text": "A dragon’s treasure is always kept in its well-hidden lair and is seldom unguarded."
   },
   {
    "name": "Breath weapon",
    "text": "Can be used up to three times per day. All caught in the area suffer damage equal to the dragon’s current hit points (save versus breath for half). Shapes of breath weapon: a. Cloud: 50’ long, 40’ wide, 20’ high. b. Cone: 2’ wide at the mouth, 30’ wide at far end. c. Line: 5’ wide along whole length. 80’ long cone of cold."
   },
   {
    "name": "Language and spells",
    "text": "Some dragons are able to speak (their own tongue plus Common). The chance is listed by subspecies. Those that can speak can also cast randomly selected magic-user spells (the listed number and level of spells). 10%; 3 × 1st level."
   },
   {
    "name": "Sleeping",
    "text": "The chance of a dragon being asleep when encountered on the ground is listed by subspecies. A sleeping dragon may be attacked for one round with a +2 bonus to hit. Dragons may sometimes pretend to be asleep! 50%."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Dragon Turtle",
  "hd": "30*",
  "hpDice": {
   "n": 30,
   "mod": 0
  },
  "avgHp": 135,
  "ac": -2,
  "acAsc": 21,
  "att": "2 × claw (1d8), 1 × bite (1d6 × 10) or breath",
  "dmg": "1d8",
  "thac0": 5,
  "thac0Bonus": "+14",
  "mv": "30’ (10’) / 90’ (30’) swimming",
  "sv": {
   "D": 4,
   "W": 5,
   "P": 6,
   "B": 5,
   "S": 8
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 9000,
  "naDungeon": "0",
  "naWild": "1",
  "tt": "H",
  "flavor": "Gargantuan sea monsters with the body and hard shell of a turtle and the head, tail, and legs of a dragon. Lurk in huge caves in the depths of the ocean, only rarely coming to the surface.",
  "abilities": [
   {
    "name": "Breath weapon",
    "text": "90’ long, 30’ wide cloud of steam. Can be used up to three times per day. All caught in the area suffer damage equal to the dragon turtle’s current hit points (save versus breath for half)."
   },
   {
    "name": "Mistaken for island",
    "text": "When floating, can be mistaken for a small island."
   },
   {
    "name": "Attack ships",
    "text": "Sometimes try to destroy ships and eat the crew by surfacing below."
   },
   {
    "name": "Treasure",
    "text": "From sunken ships."
   }
  ],
  "spells": [],
  "svNote": "15"
 },
 {
  "name": "Driver Ant",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × bite (2d6)",
  "dmg": "2d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "2d4",
  "naWild": "4d6",
  "tt": "U (see below)",
  "flavor": "Giant (6’ long), omnivorous, black ants.",
  "abilities": [
   {
    "name": "Rapacious",
    "text": "Consume everything in their path, when hungry."
   },
   {
    "name": "Morale",
    "text": "Attack relentlessly, once they are engaged in melee (morale 12). Will even pursue through flames."
   },
   {
    "name": "Lair treasure",
    "text": "30% chance of 1d10 × 1,000gp worth of gold nuggets, mined by the ants."
   }
  ],
  "spells": [],
  "mlText": "7 (12 in melee)",
  "svNote": "2"
 },
 {
  "name": "Dryad",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × magic (charm)",
  "dmg": "",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "0",
  "naWild": "1d6",
  "tt": "D",
  "flavor": "Shy, peaceful, yet wary tree spirits that can manifest as beautiful female humanoids. Live in deep forests.",
  "abilities": [
   {
    "name": "Bound with tree",
    "text": "Spiritually connected with a single tree. Dryad dies if the tree dies, or if separated by more than 240’."
   },
   {
    "name": "Meld with tree",
    "text": "Can disappear by joining with her tree."
   },
   {
    "name": "Defensive",
    "text": "Distrustful of strangers. Attempt to charm anyone who approaches or follows."
   },
   {
    "name": "Charm",
    "text": "Victim compelled to approach the tree, vanishes inside it (save versus spells with a –2 penalty). If not immediately rescued, the victim is lost forever."
   },
   {
    "name": "Treasure",
    "text": "Hidden in roots of the tree."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Dwarf",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 13,
   "S": 12
  },
  "ml": 8,
  "al": "Lawful or Neutral",
  "xp": 10,
  "naDungeon": "1d6",
  "naWild": "5d8",
  "tt": "G",
  "flavor": "Short, stocky, bearded demihumans who dwell in mountains and subterranean realms.",
  "abilities": [
   {
    "name": "Leader",
    "text": "A leader of level 1d6 + 2 is present for every 20 dwarves. The leader may have magic items: 5% chance per level for each magic item table (except"
   }
  ],
  "spells": [],
  "mlText": "8 (10 with leader)",
  "svNote": "D1"
 },
 {
  "name": "Efreeti (Lesser)",
  "hd": "10*",
  "hpDice": {
   "n": 10,
   "mod": 0
  },
  "avgHp": 45,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × fists (2d8), magic",
  "dmg": "2d8",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 4,
   "W": 5,
   "P": 6,
   "B": 5,
   "S": 8
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 1600,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Highly magical, free-willed, intelligent beings from the elemental plane of fire. Manifest as giant men with demonic faces and an aura of heat and smoke. Solidify out of billowing smoke clouds.",
  "abilities": [
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Magic powers",
    "text": "Each can be used three times per day: a. Pillar of flame: Transform into a column of fire for up to 3 rounds. Flammable items within 5’ are ignited. Attacks do additional 1d8 damage (3d8 total). b. Invisibility c. Illusion: Visual and audial. No concentration required. Remains until touched or dispelled. d. Create wall of fire e. Create food and drink: For 12 humans and mounts for one day. f. Conjure metallic objects: Up to 1,000 coins weight. Temporary: hardness determines duration (gold: 1 day; iron: 1 round). g. Conjure soft goods / wooden objects: Up to 1,000 coins weight. Permanent."
   },
   {
    "name": "Carrying capacity",
    "text": "Up to 10,000 coins (flying)."
   },
   {
    "name": "Hate djinn",
    "text": "Attack on sight."
   },
   {
    "name": "Bound servitor",
    "text": "Efreet summoning spells can be researched by high-level magic-users. Can be bound to servitude for 101 days. Efreet are treacherous and will follow commands to the letter while subverting the intent."
   }
  ],
  "spells": [],
  "svNote": "15"
 },
 {
  "name": "Elephant",
  "hd": "9",
  "hpDice": {
   "n": 9,
   "mod": 0
  },
  "avgHp": 40,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × tusk (2d4) or 1 × trample (4d8)",
  "dmg": "2d4",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 900,
  "naDungeon": "0",
  "naWild": "1d20",
  "tt": "Tusks",
  "flavor": "Massive, tusked animals that dwell near subtropical forests. Wandering individuals or whole herds may be encountered.",
  "abilities": [
   {
    "name": "Charge",
    "text": "In first round of combat, when not in melee. Requires clear run of at least 20 yards. Tusks inflict double damage."
   },
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   },
   {
    "name": "Ivory",
    "text": "Each tusk is worth 1d6 × 100gp."
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Elf",
  "hd": "1+1*",
  "hpDice": {
   "n": 1,
   "mod": 1
  },
  "avgHp": 5,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 13,
   "B": 15,
   "S": 15
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 19,
  "naDungeon": "1d4",
  "naWild": "2d12",
  "tt": "E",
  "flavor": "Slender, fey demihumans with pointed ears. Live in harmony with nature, in beautiful natural settings.",
  "abilities": [
   {
    "name": "Spells",
    "text": "Each individual has one random 1st level arcane spell."
   },
   {
    "name": "Leader",
    "text": "Groups of 15+ are led by an elf of level 1d6 + 1. The leader may have magical items: 5% chance per level for each magic item table (see Magic Items in Core Rules)."
   }
  ],
  "spells": [],
  "mlText": "8 (10 with leader)",
  "svNote": "E1"
 },
 {
  "name": "Ferret, Giant",
  "hd": "1+1",
  "hpDice": {
   "n": 1,
   "mod": 1
  },
  "avgHp": 5,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 15,
  "naDungeon": "1d8",
  "naWild": "1d12",
  "tt": "None",
  "flavor": "3’ long ferrets that hunt giant rats in their burrows. Sometimes kept by humans for this aptitude.",
  "abilities": [
   {
    "name": "Volatile",
    "text": "Unpredictable temper; may turn on trainers or other people."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Giant Bass",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d6)",
  "dmg": "1d6",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "Shy; only attack when seeing a bite-size (halfling-size or smaller) morsel close by.",
  "abilities": [],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Giant Catfish",
  "hd": "8+3",
  "hpDice": {
   "n": 8,
   "mod": 3
  },
  "avgHp": 39,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (2d8), 4 × feeler (1d4)",
  "dmg": "2d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "90’ (30’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "0",
  "naWild": "1d2",
  "tt": "None",
  "flavor": "15’ long, pale white. Four feelers beside the mouth. Lurk in the mud at the bottom of rivers and lakes. Will attack creatures on the bottom or swimming above.",
  "abilities": [],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Giant Piranha",
  "hd": "3+3",
  "hpDice": {
   "n": 3,
   "mod": 3
  },
  "avgHp": 16,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "0",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "5’ long piranhas with black and green scales. Live in rivers (occasionally lakes) and attack anything in the water.",
  "abilities": [
   {
    "name": "Surround opponents",
    "text": "A target can be attacked by up to 8 giant piranhas."
   },
   {
    "name": "Morale",
    "text": "When blood is in the water, do not check morale."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Giant Rockfish",
  "hd": "5+5*",
  "hpDice": {
   "n": 5,
   "mod": 5
  },
  "avgHp": 27,
  "ac": 7,
  "acAsc": 12,
  "att": "4 × spine (1d4 + poison)",
  "dmg": "1d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 400,
  "naDungeon": "0",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "Spiny fish with lumpy, rock-like skin. Live in saltwater shallows. Normally passive, but highly aggressive if disturbed.",
  "abilities": [
   {
    "name": "Camouflage",
    "text": "70% chance of being mistaken for a rock or coral formation."
   },
   {
    "name": "Grasping",
    "text": "If mistaken for a rock and grasped, all 4 spines automatically hit."
   },
   {
    "name": "Poison",
    "text": "Causes death (save vs poison)."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Giant Sturgeon",
  "hd": "10+2*",
  "hpDice": {
   "n": 10,
   "mod": 2
  },
  "avgHp": 47,
  "ac": 0,
  "acAsc": 19,
  "att": "1 × bite (2d10)",
  "dmg": "2d10",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "180’ (60’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 1600,
  "naDungeon": "0",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge (nearly 30’ long), aggressive fish with armour plating.",
  "abilities": [
   {
    "name": "Swallow whole",
    "text": "On an attack roll of 18 or more. Inside the fish’s belly: suffer 2d6 damage per round (until the fish dies); save versus death or be paralysed; may attack with sharp weapons at –4 to hit (inside belly has AC 7 [12]); body digested 6 turns after death."
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Gargoyle",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × claw (1d3), 1 × bite (1d6), 1 × horn (1d4)",
  "dmg": "1d3",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "90’ (30’) / 150’ (50’) flying",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 75,
  "naDungeon": "1d6",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Magical monsters that look like hideous, horned, winged statues. Semi-intelligent and possessed of a great cunning.",
  "abilities": [
   {
    "name": "Blend in with stone",
    "text": "May be overlooked or mistaken for inanimate statues."
   },
   {
    "name": "Guardians",
    "text": "Almost always attack when approached."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Spell immunity",
    "text": "Unaffected by sleep or charm spells."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Gelatinous Cube",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × touch (2d4 + paralysis)",
  "dmg": "2d4",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1",
  "naWild": "0",
  "tt": "V",
  "flavor": "10’ cubes of transparent jelly. Move through dungeons, absorbing debris and living creatures they come across.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "On a roll of 1–4, due to near-invisibility."
   },
   {
    "name": "Paralysis",
    "text": "For 2d4 turns (save versus paralysis)."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by cold or lightning."
   },
   {
    "name": "Embedded items",
    "text": "Indigestible items (e.g. gems, coins) are carried around inside the cube."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Ghoul",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d3 + paralysis), 1 × bite (1d3 + paralysis)",
  "dmg": "1d3",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 25,
  "naDungeon": "1d6",
  "naWild": "2d8",
  "tt": "B",
  "flavor": "Grotesque, animalistic, undead humans that crave the flesh of the living.",
  "abilities": [
   {
    "name": "Paralysis",
    "text": "For 2d4 turns (save versus paralysis). Elves and creatures larger than ogres are unaffected. After paralysing a target, ghouls will attack others."
   },
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Cloud Giant",
  "hd": "12+3",
  "hpDice": {
   "n": 12,
   "mod": 3
  },
  "avgHp": 57,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × weapon (6d6) or 1 × boulder (3d6)",
  "dmg": "6d6",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1100,
  "naDungeon": "1d2",
  "naWild": "1d3",
  "tt": "E + 5,000gp",
  "flavor": "Aggressive, 20’ tall humanoids with skin and hair ranging from grey to white. Dress in pale robes.",
  "abilities": [
   {
    "name": "Keen sight and smell",
    "text": "Only surprised on a 1."
   },
   {
    "name": "Boulder throwing",
    "text": "Up to 200’."
   },
   {
    "name": "Castle",
    "text": "Built into mountain-sides or floating on cloud banks."
   },
   {
    "name": "Guardians",
    "text": "3d6 giant hawks (p31) or (only in mountains) 6d6 dire wolves (p66)."
   },
   {
    "name": "Hate intruders",
    "text": "May block mountain passes to ensure isolation."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Fire Giant",
  "hd": "11+2",
  "hpDice": {
   "n": 11,
   "mod": 2
  },
  "avgHp": 51,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × weapon (5d6) or 1 × boulder (3d6)",
  "dmg": "5d6",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 1100,
  "naDungeon": "1d2",
  "naWild": "1d3",
  "tt": "E + 5,000gp",
  "flavor": "16’ tall humanoids with black hair and red skin. Dress in armour fashioned from golden metals (brass, bronze, copper). Dwell in places of extreme heat (e.g. near volcanoes).",
  "abilities": [
   {
    "name": "Boulder throwing",
    "text": "Up to 200’."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by fire."
   },
   {
    "name": "Castle",
    "text": "Black, low-walled. Made of baked mud and raw iron."
   },
   {
    "name": "Guardians",
    "text": "20% chance of 1d3 hydras (p34), 3d6 hellhounds (p31) otherwise."
   }
  ],
  "spells": [],
  "svNote": "11"
 },
 {
  "name": "Frost Giant",
  "hd": "10+1",
  "hpDice": {
   "n": 10,
   "mod": 1
  },
  "avgHp": 46,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × weapon (4d6) or 1 × boulder (3d6)",
  "dmg": "4d6",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 900,
  "naDungeon": "1d2",
  "naWild": "1d4",
  "tt": "E + 5,000gp",
  "flavor": "18’ tall humanoids with pale skin and pale hair (yellow or blue hued). Dress in furs or iron armour. Males have long beards.",
  "abilities": [
   {
    "name": "Boulder throwing",
    "text": "Up to 200’."
   },
   {
    "name": "Cold immunity",
    "text": "Unharmed by coldbased attacks."
   },
   {
    "name": "Castle",
    "text": "High upon snowy mountains."
   },
   {
    "name": "Guardians",
    "text": "20% chance of 3d6 polar bears (p6), 6d6 wolves (p66) otherwise."
   }
  ],
  "spells": [],
  "svNote": "10"
 },
 {
  "name": "Hill Giant",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × weapon (2d8)",
  "dmg": "2d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 650,
  "naDungeon": "1d4",
  "naWild": "2d4",
  "tt": "E + 5,000gp",
  "flavor": "Hairy, brutish, 12’ tall humanoids of low intelligence. Dwell in foothills. Known to attack human settlements to steal food.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Wield giant clubs and spears."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Stone Giant",
  "hd": "9",
  "hpDice": {
   "n": 9,
   "mod": 0
  },
  "avgHp": 40,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × weapon (3d6) or 1 × boulder (3d6)",
  "dmg": "3d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 900,
  "naDungeon": "1d2",
  "naWild": "1d6",
  "tt": "E + 5,000gp",
  "flavor": "14’ tall humanoids with stone-like, grey skin. Dwell in natural caverns or primitive huts built of stone.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Stone clubs made from huge stalactites."
   },
   {
    "name": "Boulder throwing",
    "text": "Up to 300’."
   },
   {
    "name": "Guardians",
    "text": "50% chance of 1d4 cave bears (p6)."
   }
  ],
  "spells": [],
  "svNote": "9"
 },
 {
  "name": "Storm Giant",
  "hd": "15",
  "hpDice": {
   "n": 15,
   "mod": 0
  },
  "avgHp": 67,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × weapon (8d6), 1 × lightning bolt",
  "dmg": "8d6",
  "thac0": 9,
  "thac0Bonus": "+10",
  "mv": "150’ (50’)",
  "sv": {
   "D": 4,
   "W": 5,
   "P": 6,
   "B": 5,
   "S": 8
  },
  "ml": 10,
  "al": "Lawful",
  "xp": 1350,
  "naDungeon": "1",
  "naWild": "1d3",
  "tt": "E + 5,000gp",
  "flavor": "22’ tall humanoids with bronze-hued skin and garish hair (red or yellow).",
  "abilities": [
   {
    "name": "Summon storm",
    "text": "Takes 1 turn."
   },
   {
    "name": "Lightning bolts",
    "text": "In a storm, may throw lightning once per 5 rounds: 60’ long, 5’ wide; inflicts damage equal to the giant’s current hit point total (save versus spells for half damage); will bounce off of hard surfaces in its path."
   },
   {
    "name": "Lightning immunity",
    "text": "Unharmed by lightning. Enjoy basking in storms."
   },
   {
    "name": "Castle",
    "text": "High among mountain peaks, atop banks of clouds, or in deep waters."
   },
   {
    "name": "Guardians",
    "text": "2d4 griffons (p30). Underwater: 3d6 giant crabs (p12)."
   }
  ],
  "spells": [],
  "svNote": "15"
 },
 {
  "name": "Gnoll",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × weapon (2d4 or by weapon + 1)",
  "dmg": "2d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 20,
  "naDungeon": "1d6",
  "naWild": "3d6",
  "tt": "D",
  "flavor": "Lazy, humanoid hyenas of low intelligence that live by intimidation and the%. Legends say that gnolls were magically created by a wizard who crossbred gnomes and trolls.",
  "abilities": [
   {
    "name": "Leader",
    "text": "Groups of 20+ are led by a gnoll with 3HD (16hp)."
   }
  ],
  "spells": [],
  "xpText": "20 (leader: 35)",
  "svNote": "2"
 },
 {
  "name": "Gnome",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 13,
   "S": 12
  },
  "ml": 8,
  "al": "Lawful or Neutral",
  "xp": 10,
  "naDungeon": "1d8",
  "naWild": "5d8",
  "tt": "C",
  "flavor": "Short demihumans with long noses and beards. Smaller cousins of dwarves, whom they get along with. Prefer to live in burrows in non-mountainous country.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Typically use warhammers and crossbows."
   },
   {
    "name": "Infravision",
    "text": "90’."
   },
   {
    "name": "Leader",
    "text": "A 2HD (11hp) leader is present for every 20 gnomes."
   },
   {
    "name": "Clan chieftain and bodyguards",
    "text": "A 4HD (18hp) chieftain and 1d6 3HD (1d4 + 9hp) bodyguards live in the gnome lair. The chieftain gains a +1 bonus to damage."
   },
   {
    "name": "Hate kobolds",
    "text": "Normally attack on sight."
   },
   {
    "name": "Mines and machines",
    "text": "Love machinery, mining, gold, and gems. May make foolish decisions to obtain precious items. War with goblins and kobolds over precious metals."
   }
  ],
  "spells": [],
  "mlText": "8 (10 in sight of leader or chieftain)",
  "xpText": "10, (leader: 20, bodyguard: 35, chieftain: 75)",
  "svNote": "D1"
 },
 {
  "name": "Goblin",
  "hd": "1-1",
  "hpDice": {
   "n": 1,
   "mod": -1
  },
  "avgHp": 3,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 7,
  "al": "Chaotic",
  "xp": 5,
  "naDungeon": "2d4",
  "naWild": "6d10",
  "tt": "R (C)",
  "flavor": "Small, grotesque humanoids with pallid, earth-coloured skin and glowing, red eyes. Dwell underground.",
  "abilities": [
   {
    "name": "Infravision",
    "text": "90’."
   },
   {
    "name": "Hate the sun",
    "text": "–1 to-hit in full daylight."
   },
   {
    "name": "Wolf riders",
    "text": "20% of goblin groups encountered have wolf riders: ¼ of the group mounted on dire wolves."
   },
   {
    "name": "Hate dwarves",
    "text": "Attack on sight."
   },
   {
    "name": "Goblin king and bodyguards",
    "text": "A 3HD (15hp) king and 2d6 2HD (2d6hp) bodyguards live in the goblin lair. They do not suffer attack penalties in daylight. The king gains a +1 bonus to damage."
   },
   {
    "name": "Hoard",
    "text": "Only have treasure type C when encountered in the wilderness or in their lair."
   }
  ],
  "spells": [],
  "mlText": "7 (9 with king)",
  "xpText": "5 (bodyguard: 20, king: 35)",
  "svNote": "NH"
 },
 {
  "name": "Amber Golem",
  "hd": "10**",
  "hpDice": {
   "n": 10,
   "mod": 0
  },
  "avgHp": 45,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (2d6), 1 × bite (2d10)",
  "dmg": "2d6",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "180’ (60’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Constructed in the form of giant cats (e.g. lions or tigers).",
  "abilities": [
   {
    "name": "Other materials",
    "text": "Golems formed of other materials are also possible."
   },
   {
    "name": "Constructing",
    "text": "A very complex, expensive, and time-consuming process."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Immunity",
    "text": "Unharmed by gas; unaffected by charm, hold, and sleep spells."
   },
   {
    "name": "Tracking",
    "text": "Without error."
   },
   {
    "name": "Detect invisible creatures",
    "text": "Within 60’."
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Bone Golem",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "2 or 4 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "6’ tall constructs of human bone, crafted into a humanoid shape. Have four arms, attached at different places on the torso.",
  "abilities": [
   {
    "name": "Other materials",
    "text": "Golems formed of other materials are also possible."
   },
   {
    "name": "Constructing",
    "text": "A very complex, expensive, and time-consuming process."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Immunity",
    "text": "Unharmed by gas; unaffected by charm, hold, and sleep spells."
   },
   {
    "name": "Weapons",
    "text": "4×1-handed or 2×2-handed."
   },
   {
    "name": "Attack multiple opponents",
    "text": "Up to 2 per round."
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by fire, cold, and electricity."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Bronze Golem",
  "hd": "20**",
  "hpDice": {
   "n": 20,
   "mod": 0
  },
  "avgHp": 90,
  "ac": 0,
  "acAsc": 19,
  "att": "1 × fist (3d10 + 1d10 heat)",
  "dmg": "3d10+1",
  "thac0": 6,
  "thac0Bonus": "+13",
  "mv": "240’ (80’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 4300,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Bronze constructs that resemble fire giants, possessing a great internal heat.",
  "abilities": [
   {
    "name": "Other materials",
    "text": "Golems formed of other materials are also possible."
   },
   {
    "name": "Constructing",
    "text": "A very complex, expensive, and time-consuming process."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Immunity",
    "text": "Unharmed by gas; unaffected by charm, hold, and sleep spells."
   },
   {
    "name": "Flaming blood",
    "text": "If damaged by an edged weapon, emits a spurt of liquid fire: attacker suffers 2d6 damage (save versus death to avoid)."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by fire."
   }
  ],
  "spells": [],
  "svNote": "10"
 },
 {
  "name": "Wood Golem",
  "hd": "2+2",
  "hpDice": {
   "n": 2,
   "mod": 2
  },
  "avgHp": 11,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × fist (1d8)",
  "dmg": "1d8",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "3’ tall, roughly constructed, humanoid figures of wood.",
  "abilities": [
   {
    "name": "Other materials",
    "text": "Golems formed of other materials are also possible."
   },
   {
    "name": "Constructing",
    "text": "A very complex, expensive, and time-consuming process."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Immunity",
    "text": "Unharmed by gas; unaffected by charm, hold, and sleep spells."
   },
   {
    "name": "Initiative",
    "text": "–1 penalty due to stiff movement."
   },
   {
    "name": "Flammable",
    "text": "–2 to saves against fire attacks; suffers one extra point of damage per die."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Gorgon",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × gore (2d6) or 1 × breath (petrify)",
  "dmg": "2d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 1200,
  "naDungeon": "1d2",
  "naWild": "1d4",
  "tt": "E",
  "flavor": "Magical monsters that resemble ironscaled bulls. Dwell in plains or foothills.",
  "abilities": [
   {
    "name": "Charge",
    "text": "When not in melee. Requires a clear run of at least 20 yards. Gore inflicts double damage."
   },
   {
    "name": "Petrifying breath",
    "text": "Cloud 60’ long, 10’ wide. All in the cloud are turned to stone (save versus petrify to avoid). Unharmed by own breath."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Grey Ooze",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × touch (2d8)",
  "dmg": "2d8",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "10’ (3’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Slimy horrors that lurk on stone surfaces or among boulders.",
  "abilities": [
   {
    "name": "Blend in with stone",
    "text": "Difficult to tell apart from wet stone."
   },
   {
    "name": "Acid",
    "text": "After a successful attack, sticks to the victim and exudes acid. The acid destroys normal armour immediately and inflicts 2d8 damage per round. (Magic armour is dissolved in one turn.)"
   },
   {
    "name": "Energy immunity",
    "text": "Unharmed by cold or fire."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Green Slime",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 9,
  "acAsc": 10,
  "att": "1 × touch (consume flesh)",
  "dmg": "",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "3’ (1’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1",
  "naWild": "0",
  "tt": "None",
  "flavor": "Dripping, green slime that clings to walls and ceilings.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "Drops down on surprised characters from above."
   },
   {
    "name": "Acid",
    "text": "When in contact with a victim, sticks on and exudes acid. The acid destroys wood or metal (including armour) in 6 rounds, but cannot affect stone."
   },
   {
    "name": "Consume flesh",
    "text": "Once in contact with flesh for 6 rounds, the victim is turned into green slime in a further 1d4 rounds."
   },
   {
    "name": "Removing",
    "text": "Once stuck on a victim, can only be removed by fire. This inflicts half damage to the victim and half to the slime."
   },
   {
    "name": "Immunity",
    "text": "Unharmed by all attacks except cold or fire."
   }
  ],
  "spells": [],
  "acText": "No hit roll required",
  "svNote": "1"
 },
 {
  "name": "Griffon",
  "hd": "7",
  "hpDice": {
   "n": 7,
   "mod": 0
  },
  "avgHp": 31,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × claw (1d4), 1 × bite (2d8)",
  "dmg": "1d4",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’) / 360’ (120’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 450,
  "naDungeon": "0",
  "naWild": "2d8",
  "tt": "E",
  "flavor": "Large, rapacious predators combining the features of an eagle (head, wings, front claws) and a lion. Prey on horses.",
  "abilities": [
   {
    "name": "Attack horses",
    "text": "Within 120’, unless a morale check is passed."
   },
   {
    "name": "Defend nest",
    "text": "Attack if it is approached."
   },
   {
    "name": "Taming",
    "text": "Captured young can be trained as loyal mounts. Their fierce nature cannot be trained out: they still instinctively attack horses."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Halfling",
  "hd": "1-1",
  "hpDice": {
   "n": 1,
   "mod": -1
  },
  "avgHp": 3,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "90’ (30’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 13,
   "S": 12
  },
  "ml": 7,
  "al": "Lawful",
  "xp": 5,
  "naDungeon": "3d6",
  "naWild": "5d8",
  "tt": "V (B)",
  "flavor": "Diminutive, furry-footed demihumans who dwell in small villages (30–300 inhabitants).",
  "abilities": [
   {
    "name": "Leader and militia",
    "text": "Villages are led by a halfling of level 1d6 + 1. A militia of 5d4 2HD guards is also present."
   },
   {
    "name": "Hoard",
    "text": "Only have treasure type B when encountered in the wilderness."
   }
  ],
  "spells": [],
  "xpText": "5 (guard: 20)",
  "svNote": "H1"
 },
 {
  "name": "Harpy",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "2 × claw (1d4), 1 × weapon (1d6 or by weapon), 1 × song (charm)",
  "dmg": "1d4",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "60’ (20’) / 150’ (50’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Chaotic",
  "xp": 50,
  "naDungeon": "1d6",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Hideous hags with the wings and lower bodies of giant eagles. Use their song to lure victims to their doom.",
  "abilities": [
   {
    "name": "Charm",
    "text": "Anyone who hears the song of a group of harpies must save versus spells or be charmed: move towards the harpies (resisting those who try to prevent it); defend the harpies; obey the harpies’ commands (if understood); unable to cast spells or use magic items; unable to harm the harpies. A character who saves is unaffected for the rest of the encounter. Killing the harpies breaks the charm."
   },
   {
    "name": "Magic resistance",
    "text": "+2 to all saving throws."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Giant Hawk",
  "hd": "3+3",
  "hpDice": {
   "n": 3,
   "mod": 3
  },
  "avgHp": 16,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × talons or beak (1d6)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "450’ (150’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "0",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "As big as a great dog. If hungry, may attack humans or similar-sized creatures.",
  "abilities": [
   {
    "name": "Trainable",
    "text": "Can be trained as guards or hunting animals."
   },
   {
    "name": "Swoop",
    "text": "Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size)."
   },
   {
    "name": "Carry prey",
    "text": "Up to halfling-sized."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Normal Hawk",
  "hd": "½",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × talons or beak (1d2)",
  "dmg": "1d2",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "480’ (160’) flying",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 5,
  "naDungeon": "0",
  "naWild": "1d6",
  "tt": "None",
  "flavor": "Small birds of prey. Will only attack humans if they appear defenceless.",
  "abilities": [
   {
    "name": "Trainable",
    "text": "Can be trained as guards or hunting animals."
   },
   {
    "name": "Swoop",
    "text": "Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size)."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Large Herd Animal",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × butt (1d8)",
  "dmg": "1d8",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 5,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "0",
  "naWild": "3d10",
  "tt": "None",
  "flavor": "For example: elk or moose.",
  "abilities": [
   {
    "name": "Males",
    "text": "In groups of 3 or more, only 1-in-4 are males. These have 1d4 extra hit points and protect the herd."
   },
   {
    "name": "Females and young",
    "text": "Flee from danger. Females do not have a butt attack. Young have half normal hit points."
   },
   {
    "name": "Stampede",
    "text": "Herds of 20 or more can trample those in their path. 3-in-4 chance each round. +4 to-hit human-sized or smaller creatures. 1d20 damage."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Medium Herd Animal",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × butt (1d6)",
  "dmg": "1d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 5,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "0",
  "naWild": "3d10",
  "tt": "None",
  "flavor": "For example: caribou or oxen.",
  "abilities": [
   {
    "name": "Males",
    "text": "In groups of 3 or more, only 1-in-4 are males. These have 1d4 extra hit points and protect the herd."
   },
   {
    "name": "Females and young",
    "text": "Flee from danger. Females do not have a butt attack. Young have half normal hit points."
   },
   {
    "name": "Stampede",
    "text": "Herds of 20 or more can trample those in their path. 3-in-4 chance each round. +4 to-hit human-sized or smaller creatures. 1d20 damage."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Hippogriff",
  "hd": "3+1",
  "hpDice": {
   "n": 3,
   "mod": 1
  },
  "avgHp": 14,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × claw (1d6), 1 × bite (1d10)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "180’ (60’) / 360’ (120’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "0",
  "naWild": "2d8",
  "tt": "None",
  "flavor": "Fantastic creatures combining the features of a giant eagle (head and forequarters) and a horse. Nest among craggy rocks.",
  "abilities": [
   {
    "name": "Hate pegasi",
    "text": "Will usually attack."
   },
   {
    "name": "Mount",
    "text": "Can carry a human-sized rider."
   },
   {
    "name": "Taming",
    "text": "Can be trained as mounts."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Hobgoblin",
  "hd": "1+1",
  "hpDice": {
   "n": 1,
   "mod": 1
  },
  "avgHp": 5,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 15,
  "naDungeon": "1d6",
  "naWild": "4d6",
  "tt": "D",
  "flavor": "Larger and nastier relatives of goblins. Dwell underground, but commonly seek prey above ground.",
  "abilities": [
   {
    "name": "Hobgoblin king and bodyguards",
    "text": "A 5HD (22hp) king and 1d4 4HD (3d6hp) bodyguards live in the hobgoblin lair. The king gains a +2 bonus to damage rolls. A thoul may sometimes be found among the king’s bodyguards."
   }
  ],
  "spells": [],
  "mlText": "8 (10 with king)",
  "xpText": "15 (bodyguard: 75, king: 175)",
  "svNote": "1"
 },
 {
  "name": "Draft Horse",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "None",
  "dmg": "",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "0",
  "naWild": "0",
  "tt": "None",
  "flavor": "Bred for great strength and endurance. Used to pull vehicles and ploughs, or as beasts of burden.",
  "abilities": [
   {
    "name": "Non-combatant",
    "text": "Will flee, if attacked."
   },
   {
    "name": "Domestic",
    "text": "Not encountered in the wild."
   },
   {
    "name": "Beast of burden",
    "text": "Carry up to 4,500 coins unencumbered; up to 9,000 at half speed."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Riding Horse",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "2 × hoof (1d4)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "0",
  "tt": "None",
  "flavor": "Lightly built horses adapted to run at high speed. Can survive purely on grass, wherever available.",
  "abilities": [
   {
    "name": "Domestic",
    "text": "Not encountered in the wild."
   },
   {
    "name": "Beast of burden",
    "text": "Carry up to 3,000 coins unencumbered; up to 6,000 at half speed."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "War Horse",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "2 × hoof (1d6)",
  "dmg": "1d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "0",
  "naWild": "0",
  "tt": "None",
  "flavor": "Bred for strength and courage in battle. Adapted to short bursts of speed; not suited to long-distance riding.",
  "abilities": [
   {
    "name": "Charge",
    "text": "When not in melee. Requires a clear run of at least 20 yards. Rider’s lance inflicts double damage. Horse cannot attack when charging."
   },
   {
    "name": "Melee",
    "text": "When in melee, both rider and horse can attack."
   },
   {
    "name": "Domestic",
    "text": "Not encountered in the wild."
   },
   {
    "name": "Beast of burden",
    "text": "Carry up to 4,000 coins unencumbered; up to 8,000 that at half speed."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Wild Horse",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "2 × hoof (1d4)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "1d10 × 10",
  "tt": "None",
  "flavor": "Lightly built horses adapted to run at high speed. Can survive purely on grass, wherever available.",
  "abilities": [
   {
    "name": "Stampede",
    "text": "Herds of 20 or more can trample those in their path. 3-in-4 chance each round. +4 to-hit human-sized or smaller creatures. 1d20 damage."
   },
   {
    "name": "Taming",
    "text": "Wild horses can be trained as mounts (riding horses)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Invisible Stalker",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × blow (4d4)",
  "dmg": "4d4",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 1200,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Highly intelligent, magical creatures summoned from another plane of existence to perform tasks for powerful magic-users.",
  "abilities": [
   {
    "name": "Tracking",
    "text": "Without fault."
   },
   {
    "name": "Surprise",
    "text": "On a 1–5, unless target can detect invisibility."
   },
   {
    "name": "If killed",
    "text": "Returns to plane of origin."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Killer Bee",
  "hd": "½*",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × sting (1d3 + poison + lodged stinger)",
  "dmg": "1d3",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "150’ (50’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 6,
  "naDungeon": "1d6",
  "naWild": "5d6",
  "tt": "Honey",
  "flavor": "Giant (1’ long) bees of aggressive temperament. Build hives underground.",
  "abilities": [
   {
    "name": "Aggressive",
    "text": "Usually attack on sight. Always attack intruders within 30’ of their hive."
   },
   {
    "name": "Die after attacking",
    "text": "On a successful sting attack, a killer bee dies."
   },
   {
    "name": "Poison",
    "text": "Causes death (save vs poison)."
   },
   {
    "name": "Lodged stinger",
    "text": "Inflicts 1 damage per round, as the stinger works its way in. A round can be spent to remove it."
   },
   {
    "name": "Queen",
    "text": "A 2HD queen lives in the hive. The queen does not die when she stings."
   },
   {
    "name": "Guards",
    "text": "At least 10 bees (4 or more of which have 1HD) remain in or near the hive to protect the queen."
   },
   {
    "name": "Honey",
    "text": "Magical honey (around 2 pints) may be found in the hive. It heals 1d4 hit points if eaten (in its entirety)."
   }
  ],
  "spells": [],
  "xpText": "6 (guard: 13, queen: 25)",
  "svNote": "1"
 },
 {
  "name": "Kobold",
  "hd": "½",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d4 or by weapon - 1)",
  "dmg": "1d4",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 6,
  "al": "Chaotic",
  "xp": 5,
  "naDungeon": "4d4",
  "naWild": "6d10",
  "tt": "P (J)",
  "flavor": "Small, wicked, hairless, canine humanoids with scaly, rust-coloured skin. Dwell underground.",
  "abilities": [
   {
    "name": "Ambush",
    "text": "Set up surprise attacks."
   },
   {
    "name": "Infravision",
    "text": "90’."
   },
   {
    "name": "Hate gnomes",
    "text": "Attack on sight."
   },
   {
    "name": "Chieftain and bodyguards",
    "text": "A 2HD (9hp) chieftain and 1d6 1+1HD (6hp) bodyguards live in the kobold lair."
   },
   {
    "name": "Hoard",
    "text": "Only have treasure type J when encountered in the wilderness or in their lair."
   }
  ],
  "spells": [],
  "mlText": "6 (8 with chieftain)",
  "xpText": "5 (bodyguard: 15, chieftain: 20)",
  "svNote": "NH"
 },
 {
  "name": "Leech, Giant",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d6 + blood drain)",
  "dmg": "1d6",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Horrid, 3–4’ long, slug-like creatures with sucker mouths. Lurk in swamps.",
  "abilities": [
   {
    "name": "Blood drain",
    "text": "Attaches to victim on a successful hit, doing 1d6 automatic damage per round."
   },
   {
    "name": "Detaching",
    "text": "Must be killed."
   },
   {
    "name": "If victim dies",
    "text": "Leech detaches and finds a hidden place to digest."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Crystal Living Statue",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × blow (1d6)",
  "dmg": "1d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 11,
  "al": "Lawful",
  "xp": 35,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "None",
  "flavor": "Formed of crystals. Often human in form.",
  "abilities": [
   {
    "name": "Magical origins",
    "text": "Created by powerful wizards."
   },
   {
    "name": "Immunity",
    "text": "Unaffected by sleep spells."
   },
   {
    "name": "Attacks",
    "text": "Depend on form of statue (humanoid statues may use weapons, animal statues use claws, etc.)."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Iron Living Statue",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × blow (1d8)",
  "dmg": "1d8",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "30’ (10’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 11,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Animated statues of any size and material (three types described below; others may be invented by the referee).",
  "abilities": [
   {
    "name": "Magical origins",
    "text": "Created by powerful wizards."
   },
   {
    "name": "Immunity",
    "text": "Unaffected by sleep spells."
   },
   {
    "name": "Absorb metals",
    "text": "Hits with non-magical, metal weapons cause damage, but the weapon may become stuck in the statue (save versus spells). Stuck weapons can be removed if the statue is killed."
   },
   {
    "name": "Attacks",
    "text": "Depend on form of statue (humanoid statues may use weapons, animal statues use claws, etc.)."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Rock Living Statue",
  "hd": "5**",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × magma jet (2d6)",
  "dmg": "2d6",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "60’ (20’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 425,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "Stony crust filled with magma which they shoot from their fingertips.",
  "abilities": [
   {
    "name": "Magical origins",
    "text": "Created by powerful wizards."
   },
   {
    "name": "Immunity",
    "text": "Unaffected by sleep spells. See main entry. CFM12: W 125mm H 83mm"
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Draco",
  "hd": "4+2",
  "hpDice": {
   "n": 4,
   "mod": 2
  },
  "avgHp": 20,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’) / 210’ (70’) gliding",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1d4",
  "naWild": "1d8",
  "tt": "U",
  "flavor": "6’ long, carnivorous lizards with skin flaps between legs that enable gliding. Usually dwell above ground, but sometimes shelter in caves. Sometimes attack humans.",
  "abilities": [],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Gecko",
  "hd": "3+1",
  "hpDice": {
   "n": 3,
   "mod": 1
  },
  "avgHp": 14,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "1d6",
  "naWild": "1d10",
  "tt": "U",
  "flavor": "5’ long, carnivorous, nocturnal lizards. Light blue scales with orange spots.",
  "abilities": [
   {
    "name": "Cling",
    "text": "Climb walls, trees, etc. and drop on victims."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Horned Chameleon",
  "hd": "5*",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × tongue/ bite (2d4), 1 × horn (1d6), 1 × tail (knock down)",
  "dmg": "2d4",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 300,
  "naDungeon": "1d3",
  "naWild": "1d6",
  "tt": "U",
  "flavor": "7’ long lizards whose scales change colour as camouflage.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "On a 1–5, due to camou- flage."
   },
   {
    "name": "Sticky tongue",
    "text": "Can attack targets up to 5’ away. If the attack succeeds, the victim is dragged to the mouth and bitten (2d4 damage)."
   },
   {
    "name": "Tail",
    "text": "Causes no damage, but knocks opponent down: cannot attack that round."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Tuatara",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × claw (1d4), 1 × bite (2d6)",
  "dmg": "1d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "90’ (30’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "1d2",
  "naWild": "1d4",
  "tt": "V",
  "flavor": "8’ long, iguana-like, carnivorous lizards with olive scales and a ridge of white spikes along the back. Have been known to attack humans.",
  "abilities": [
   {
    "name": "Infravision",
    "text": "90’. Granted by retractable eye membranes."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Lizard Man",
  "hd": "2+1",
  "hpDice": {
   "n": 2,
   "mod": 1
  },
  "avgHp": 10,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × weapon (1d6+1 or by weapon + 1)",
  "dmg": "1d6+1",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "60’ (20’) / 120’ (40’) in water",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "2d4",
  "naWild": "6d6",
  "tt": "D",
  "flavor": "Semi-intelligent, tribal, aquatic humanoids with reptilian heads and tails. Often encountered in swamps and dungeons, or along rivers and coastlines.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Favour spears or large clubs."
   },
   {
    "name": "Man-eaters",
    "text": "Kidnap humans and demihumans, whose flesh they regard as a delicacy."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Devil Swine",
  "hd": "9*",
  "hpDice": {
   "n": 9,
   "mod": 0
  },
  "avgHp": 40,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × gore (2d6) or 1 × weapon (1d6 or by weapon) or 1 × magic (charm)",
  "dmg": "2d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "180’ (60’) / 120’ (40’) in human form",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 1600,
  "naDungeon": "1d3",
  "naWild": "1d4",
  "tt": "C",
  "flavor": "Corpulent humans who can change into huge swine. Love to eat human flesh. Lurk in isolated human settlements close to forests or marshes.",
  "abilities": [
   {
    "name": "Human form",
    "text": "Have physical characteristics reminiscent of the associated animal type."
   },
   {
    "name": "Mundane damage immunity",
    "text": "In animal form, can only harmed by silver weapons or magic."
   },
   {
    "name": "Languages",
    "text": "In human form, can speak normally. In animal form, can only speak with animals of the associated type."
   },
   {
    "name": "Armour",
    "text": "Not used because it hinders shape-changing."
   },
   {
    "name": "Summon animals",
    "text": "Can summon 1–2 animals of the associated type from the surrounding area (wererats summon giant rats—see p49). These arrive in 1d4 rounds."
   },
   {
    "name": "Wolfsbane",
    "text": "If hit, must save versus poison or flee in terror."
   },
   {
    "name": "Reversion",
    "text": "If killed, a lycanthrope reverts to its human form."
   },
   {
    "name": "Scent",
    "text": "Horses and some other animals can smell lycanthropes and will become afraid."
   },
   {
    "name": "Infection",
    "text": "A character who loses more than half their hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."
   },
   {
    "name": "Shapechange",
    "text": "Only at night."
   },
   {
    "name": "Ambush",
    "text": "Prefer to attack by surprise."
   },
   {
    "name": "Charm person",
    "text": "3 times a day. Save versus spells at –2 or be charmed: move towards the devil swine (resisting those who try to prevent it); obey the devil swine’s commands (if understood); defend the devil swine; unable to cast spells or use magic items; unable to harm the devil swine. Killing the devil swine breaks the charm."
   },
   {
    "name": "Charmed victims",
    "text": "1d4–1 accompany a devil swine."
   }
  ],
  "spells": [],
  "acText": "3 [16] (9 [10] in human form)",
  "svNote": "9"
 },
 {
  "name": "Werebear",
  "hd": "6*",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × claw (2d4), 1 × bite (2d8)",
  "dmg": "2d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 500,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "C",
  "flavor": "Highly intelligent, also in bear form. Dwell alone or among normal bears.",
  "abilities": [
   {
    "name": "Human form",
    "text": "Have physical characteristics reminiscent of the associated animal type."
   },
   {
    "name": "Mundane damage immunity",
    "text": "In animal form, can only harmed by silver weapons or magic."
   },
   {
    "name": "Languages",
    "text": "In human form, can speak normally. In animal form, can only speak with animals of the associated type."
   },
   {
    "name": "Armour",
    "text": "Not used because it hinders shape-changing."
   },
   {
    "name": "Summon animals",
    "text": "Can summon 1–2 animals of the associated type from the surrounding area (wererats summon giant rats—see p49). These arrive in 1d4 rounds."
   },
   {
    "name": "Wolfsbane",
    "text": "If hit, must save versus poison or flee in terror."
   },
   {
    "name": "Reversion",
    "text": "If killed, a lycanthrope reverts to its human form."
   },
   {
    "name": "Scent",
    "text": "Horses and some other animals can smell lycanthropes and will become afraid."
   },
   {
    "name": "Infection",
    "text": "A character who loses more than half their hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."
   },
   {
    "name": "Amiable",
    "text": "May be friendly, if approached peacefully."
   },
   {
    "name": "Bear hug",
    "text": "If a victim is hit by both claws in the same round, the werebear can hug for an extra 2d8 automatic damage."
   }
  ],
  "spells": [],
  "acText": "2 [17] (8 [11] in human form)",
  "svNote": "6"
 },
 {
  "name": "Wereboar",
  "hd": "4+1*",
  "hpDice": {
   "n": 4,
   "mod": 1
  },
  "avgHp": 19,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × tusk/bite (2d6)",
  "dmg": "2d6",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "150’ (50’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 200,
  "naDungeon": "1d4",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Semi-intelligent and irascible. In human form, often appear like berserkers.",
  "abilities": [
   {
    "name": "Human form",
    "text": "Have physical characteristics reminiscent of the associated animal type."
   },
   {
    "name": "Mundane damage immunity",
    "text": "In animal form, can only harmed by silver weapons or magic."
   },
   {
    "name": "Languages",
    "text": "In human form, can speak normally. In animal form, can only speak with animals of the associated type."
   },
   {
    "name": "Armour",
    "text": "Not used because it hinders shape-changing."
   },
   {
    "name": "Summon animals",
    "text": "Can summon 1–2 animals of the associated type from the surrounding area (wererats summon giant rats—see p49). These arrive in 1d4 rounds."
   },
   {
    "name": "Wolfsbane",
    "text": "If hit, must save versus poison or flee in terror."
   },
   {
    "name": "Reversion",
    "text": "If killed, a lycanthrope reverts to its human form."
   },
   {
    "name": "Scent",
    "text": "Horses and some other animals can smell lycanthropes and will become afraid."
   },
   {
    "name": "Infection",
    "text": "A character who loses more than half their hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."
   },
   {
    "name": "Battle rage",
    "text": "In human form, may enter a berserk rage: +2 to hit; fight to the death. Rage sometimes causes them to attack their allies."
   }
  ],
  "spells": [],
  "acText": "4 [15] (9 [10] in human form)",
  "svNote": "4"
 },
 {
  "name": "Wererat",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d4) or 1 × weapon (1d6 or by weapon)",
  "dmg": "1d4",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 50,
  "naDungeon": "1d8",
  "naWild": "2d8",
  "tt": "C",
  "flavor": "Intelligent, humanoid rats who can change into normal humans.",
  "abilities": [
   {
    "name": "Human form",
    "text": "Have physical characteristics reminiscent of the associated animal type."
   },
   {
    "name": "Mundane damage immunity",
    "text": "In animal form, can only harmed by silver weapons or magic."
   },
   {
    "name": "Armour",
    "text": "Not used because it hinders shape-changing."
   },
   {
    "name": "Summon animals",
    "text": "Can summon 1–2 animals of the associated type from the surrounding area (wererats summon giant rats—see p49). These arrive in 1d4 rounds."
   },
   {
    "name": "Wolfsbane",
    "text": "If hit, must save versus poison or flee in terror."
   },
   {
    "name": "Reversion",
    "text": "If killed, a lycanthrope reverts to its human form."
   },
   {
    "name": "Scent",
    "text": "Horses and some other animals can smell lycanthropes and will become afraid."
   },
   {
    "name": "Infection",
    "text": "A character who loses more than half their hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."
   },
   {
    "name": "Surprise",
    "text": "On a 1–4; set ambushes."
   },
   {
    "name": "Languages",
    "text": "In human form, can speak normally. In animal form, can only speak with animals of the associated type. Can speak Common in both forms."
   },
   {
    "name": "Weapons",
    "text": "May also use weapons in animal form."
   }
  ],
  "spells": [],
  "acText": "7 [12] (9 [10] in human form)",
  "svNote": "3"
 },
 {
  "name": "Weretiger",
  "hd": "5*",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 3,
  "acAsc": 16,
  "att": "2 × claw (1d6), 1 × bite (2d6)",
  "dmg": "1d6",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "150’ (50’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 300,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "C",
  "flavor": "Exhibit feline behaviour: curious, but dangerous when cornered. Talented swimmers and trackers.",
  "abilities": [
   {
    "name": "Human form",
    "text": "Have physical characteristics reminiscent of the associated animal type."
   },
   {
    "name": "Mundane damage immunity",
    "text": "In animal form, can only harmed by silver weapons or magic."
   },
   {
    "name": "Languages",
    "text": "In human form, can speak normally. In animal form, can only speak with animals of the associated type."
   },
   {
    "name": "Armour",
    "text": "Not used because it hinders shape-changing."
   },
   {
    "name": "Summon animals",
    "text": "Can summon 1–2 animals of the associated type from the surrounding area (wererats summon giant rats—see p49). These arrive in 1d4 rounds."
   },
   {
    "name": "Wolfsbane",
    "text": "If hit, must save versus poison or flee in terror."
   },
   {
    "name": "Reversion",
    "text": "If killed, a lycanthrope reverts to its human form."
   },
   {
    "name": "Scent",
    "text": "Horses and some other animals can smell lycanthropes and will become afraid."
   },
   {
    "name": "Infection",
    "text": "A character who loses more than half their hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."
   },
   {
    "name": "Surprise",
    "text": "On a 1–4, due to stealth."
   }
  ],
  "spells": [],
  "acText": "3 [16] (9 [10] in human form)",
  "svNote": "5"
 },
 {
  "name": "Werewolf",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (2d4)",
  "dmg": "2d4",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "180’ (60’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 125,
  "naDungeon": "1d6",
  "naWild": "2d6",
  "tt": "C",
  "flavor": "Semi-intelligent pack hunters.",
  "abilities": [
   {
    "name": "Human form",
    "text": "Have physical characteristics reminiscent of the associated animal type."
   },
   {
    "name": "Mundane damage immunity",
    "text": "In animal form, can only harmed by silver weapons or magic."
   },
   {
    "name": "Languages",
    "text": "In human form, can speak normally. In animal form, can only speak with animals of the associated type."
   },
   {
    "name": "Armour",
    "text": "Not used because it hinders shape-changing."
   },
   {
    "name": "Summon animals",
    "text": "Can summon 1–2 animals of the associated type from the surrounding area (wererats summon giant rats—see p49). These arrive in 1d4 rounds."
   },
   {
    "name": "Wolfsbane",
    "text": "If hit, must save versus poison or flee in terror."
   },
   {
    "name": "Reversion",
    "text": "If killed, a lycanthrope reverts to its human form."
   },
   {
    "name": "Scent",
    "text": "Horses and some other animals can smell lycanthropes and will become afraid."
   },
   {
    "name": "Infection",
    "text": "A character who loses more than half their hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."
   },
   {
    "name": "Leader",
    "text": "Groups of 5+ are led by a werewolf with 5HD (30hp). The leader gains a +2 bonus to damage rolls."
   }
  ],
  "spells": [],
  "acText": "5 [14] (9 [10] in human form)",
  "xpText": "125 (leader: 300)",
  "svNote": "4"
 },
 {
  "name": "Manticore",
  "hd": "6+1",
  "hpDice": {
   "n": 6,
   "mod": 1
  },
  "avgHp": 28,
  "ac": 4,
  "acAsc": 15,
  "att": "[2 × claw (1d4), 1 × bite (2d4)] or 6 × tail spike (1d6)",
  "dmg": "1d4",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’) / 180’ (60’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 350,
  "naDungeon": "1d2",
  "naWild": "1d4",
  "tt": "D",
  "flavor": "Monstrosities with the face of a man, the body of a lion, bat-like wings, and a tail bristling with spikes. Love eating humans. Dwell in wild, mountainous regions.",
  "abilities": [
   {
    "name": "Tail spikes",
    "text": "180’ range. 24 in total; 2 regrow each day."
   },
   {
    "name": "Track and ambush",
    "text": "Follow humans and attack with tail spikes when they stop to rest."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Mastodon",
  "hd": "15",
  "hpDice": {
   "n": 15,
   "mod": 0
  },
  "avgHp": 67,
  "ac": 3,
  "acAsc": 16,
  "att": "2 × tusk (2d6) or 1 × trample (4d8)",
  "dmg": "2d6",
  "thac0": 9,
  "thac0Bonus": "+10",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 1350,
  "naDungeon": "0",
  "naWild": "2d8",
  "tt": "Tusks",
  "flavor": "Shaggy elephants with large tusks. Live in icy or Lost World regions.",
  "abilities": [
   {
    "name": "Charge",
    "text": "In first round of combat, when not in melee. Requires a clear run of at least 20 yards. Tusks inflict double damage."
   },
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   },
   {
    "name": "Ivory",
    "text": "2d4 × 100gp per tusk."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Medium",
  "hd": "1**",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 9,
  "acAsc": 10,
  "att": "1 × dagger (1d4) or 1 × spell",
  "dmg": "1d4",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 13,
   "W": 14,
   "P": 13,
   "B": 16,
   "S": 15
  },
  "ml": 7,
  "al": "Any",
  "xp": 16,
  "naDungeon": "1d4",
  "naWild": "1d12",
  "tt": "V",
  "flavor": "1st level NPC magic-users.",
  "abilities": [
   {
    "name": "Spells",
    "text": "Each individual has one 1st level arcane spell memorized. (Choose or select at random.)"
   },
   {
    "name": "Master",
    "text": "50% of groups are led by a magic-user of 3rd level. The master has two 1st level spells and one 2nd level spell. (Choose or select at random.)"
   }
  ],
  "spells": [],
  "svNote": "MU1"
 },
 {
  "name": "Medusa",
  "hd": "4**",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × snakebites (1d6 + poison)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "90’ (30’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Chaotic",
  "xp": 175,
  "naDungeon": "1d3",
  "naWild": "1d4",
  "tt": "F",
  "flavor": "Deadly creatures of a magical nature that look like women with writhing snakes in place of hair.",
  "abilities": [
   {
    "name": "Disguise",
    "text": "Use hooded cloaks to lure victims close before revealing their true form."
   },
   {
    "name": "Petrification",
    "text": "Anyone who looks at an undisguised medusa will be turned to stone (save versus petrify)."
   },
   {
    "name": "Averting eyes",
    "text": "–4 penalty to-hit; the medusa gains a +2 bonus to attack."
   },
   {
    "name": "Mirrors",
    "text": "The reflection of a medusa is harmless. If a medusa sees her own reflection, she must save or be petrified."
   },
   {
    "name": "Poison",
    "text": "The snakes’ bites are venomous: save versus poison or die in 1 turn."
   },
   {
    "name": "Magic resistance",
    "text": "+2 bonus to saves versus spells."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Merchant",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 0,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "1d20",
  "tt": "A",
  "flavor": "Organized traders who travel between settlements in well-armed caravans, buying and selling trade goods (e.g. gold, jewels, silk, spices, wine, etc.).",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Sword and dagger."
   },
   {
    "name": "Mounted",
    "text": "On horse, camel, or mule (by terrain)."
   },
   {
    "name": "Wagons",
    "text": "2 per merchant. Pulled by horses, mules, or camels (by terrain)."
   },
   {
    "name": "Caravan guards",
    "text": "For every merchant, 4 guards are present (1st level fighters). AC 4 [15], with crossbows, swords, daggers."
   },
   {
    "name": "Guard lieutenants",
    "text": "For every 5 merchants, 2 lieutenants are present (2nd– 3rd level fighters). AC 4 [15]. Equipped as guards."
   },
   {
    "name": "Guard captain",
    "text": "Guards are led by a 5th level fighter. AC 4 [15]. Equipped as guards."
   },
   {
    "name": "Pack animals",
    "text": "1d12 extra horses, mules, or camels."
   },
   {
    "name": "Treasure",
    "text": "Should be reduced, if less than 10 merchants are in the group."
   }
  ],
  "spells": [],
  "mlText": "Varies",
  "svNote": "1"
 },
 {
  "name": "Merman",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "1d20",
  "tt": "A",
  "flavor": "Aquatic humanoids with fish tails in place of legs. Live in coastal waters, farming seaweed and hunting fish.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Spears, tridents, or daggers."
   },
   {
    "name": "Leaders",
    "text": "For every 10 in a group, there is a 2HD leader. For every 50, there is a 4HD leader (saves: D10 W11 P12 B13 S14 (4))."
   },
   {
    "name": "Underwater villages",
    "text": "Home to 1d3 × 100 individuals."
   },
   {
    "name": "Guardians",
    "text": "Use trained sea creatures or monsters to guard their homes."
   }
  ],
  "spells": [],
  "xpText": "10 (leader: 20/75)",
  "svNote": "1"
 },
 {
  "name": "Minotaur",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 6,
  "acAsc": 13,
  "att": "[1 × gore (1d6), 1 × bite (1d6)] or 1 × weapon (1d6 + 2 or by weapon + 2)",
  "dmg": "1d6",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 275,
  "naDungeon": "1d6",
  "naWild": "1d8",
  "tt": "C",
  "flavor": "Large, brutish, bull-headed men with a craving for human flesh. Dwell in mazes and labyrinths.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Prefer axes, clubs, or spears."
   },
   {
    "name": "Aggressive",
    "text": "Attack same size or smaller creatures on sight. Pursue until the victims are out of sight."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Mule",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × kick (1d4) or 1 × bite (1d3)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "1d8",
  "naWild": "2d6",
  "tt": "None",
  "flavor": "Stubborn horse/donkey cross-breeds used as beasts of burden.",
  "abilities": [
   {
    "name": "Tenacious",
    "text": "Can be taken underground, if the referee allows it."
   },
   {
    "name": "Defensive",
    "text": "May attack if threatened, but cannot be trained to attack on command."
   },
   {
    "name": "Beast of burden",
    "text": "Carry up to 2,000 coins unencumbered; up to 4,000 at half speed."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Mummy",
  "hd": "5+1*",
  "hpDice": {
   "n": 5,
   "mod": 1
  },
  "avgHp": 23,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × touch (1d12 + disease)",
  "dmg": "1d12",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "60’ (20’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 400,
  "naDungeon": "1d4",
  "naWild": "1d12",
  "tt": "D",
  "flavor": "Undead humanoids wrapped in funerary bandages. Haunt ruins and tombs.",
  "abilities": [
   {
    "name": "Paralyse with terror",
    "text": "Anyone seeing a mummy must save versus paralysis or be paralysed with terror. Paralysis is broken if the mummy attacks or goes out of sight."
   },
   {
    "name": "Disease",
    "text": "Anyone hit contracts a horrible rotting disease. Magical healing is ineffective; natural healing is ten times slower. The disease can only be removed by magic."
   },
   {
    "name": "Damage immunity",
    "text": "Only harmed by fire or magic. All damage reduced by half."
   },
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   }
  ],
  "spells": [],
  "svNote": "5"
 },
 {
  "name": "Neanderthal (Caveman)",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × weapon (2d4 or by weapon + 1)",
  "dmg": "2d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Lawful",
  "xp": 20,
  "naDungeon": "1d10",
  "naWild": "1d4 × 10",
  "tt": "C",
  "flavor": "Squat, powerful, primitive demihumans with ape-like faces. Dwell in caverns and hunt cave bears. Shy of contact with humans (with whom they are related), but friendly with dwarves and gnomes.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Prefer stone axes, stone hammers, clubs, or spears."
   },
   {
    "name": "Leaders",
    "text": "Two 6HD leaders (one male, one female) live in the neanderthal lair. They are 10’ tall and of a related but distinct race."
   },
   {
    "name": "Racial animosity",
    "text": "Attack ogres on sight. Hate goblins and kobolds."
   },
   {
    "name": "Pets",
    "text": "Sometimes keep white apes as pets (see Ape, White, p4)."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Nixie",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d4) or 1 × group spell (charm)",
  "dmg": "1d4",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 13,
   "B": 15,
   "S": 15
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "2d20",
  "tt": "B",
  "flavor": "3’ tall sprites that appear as attractive women with blueish, greenish, or greyish skin. Lair in the deepest parts of rivers and lakes.",
  "abilities": [
   {
    "name": "Shy",
    "text": "Will try to charm intruders, rather than entering combat."
   },
   {
    "name": "Weapons",
    "text": "Daggers and small tridents (as spears)."
   },
   {
    "name": "Charm",
    "text": "10 nixies together can cast a charm to enchant a victim to serve them for one year. Save versus spells or be charmed: move towards the nixies (resisting those who try to prevent it); defend the nixies; obey the nixies’ commands (if understood); unable to cast spells or use magic items; unable to harm the nixies. Killing the nixies breaks the charm."
   },
   {
    "name": "Summon giant bass",
    "text": "Each nixie can summon one fish to aid in combat (see Giant Bass, p24)."
   },
   {
    "name": "Bestow water breathing",
    "text": "Can cast upon charmed slaves. Lasts for one day, then must be refreshed."
   }
  ],
  "spells": [],
  "svNote": "E1"
 },
 {
  "name": "Noble",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Any",
  "xp": 35,
  "naDungeon": "2d6",
  "naWild": "2d6",
  "tt": "V × 3",
  "flavor": "Powerful humans with noble titles (e.g. Count, Duke, Knight, etc.). Dwell in castles.",
  "abilities": [
   {
    "name": "Class",
    "text": "Usually treated as 3rd level fighters, but may be of any class and level."
   },
   {
    "name": "Squire and retainers",
    "text": "Accompanied by a 2nd level fighter (a squire) and up to ten 1st level fighters (retainers)."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Nomad",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Any",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "1d4 × 10",
  "tt": "A",
  "flavor": "Superstitious tribes who wander steppes and desert regions, living in tents or temporary huts. Demeanour depends on the tribe: some are warlike, others peaceful.",
  "abilities": [
   {
    "name": "Mounted",
    "text": "On riding horses or (in the desert) on camels."
   },
   {
    "name": "Arms (desert)",
    "text": "50% of group have: leather armour, shield, lance; 30% have: chainmail, shield, lance; 20% have: leather armour, shortbow."
   },
   {
    "name": "Arms (steppes)",
    "text": "50% of group have: leather armour, shortbow; 20% have: leather armour, shield, lance; 20% have: chainmail, shortbow; 10% have: chainmail, shield, lance, and may be mounted on a war horse."
   },
   {
    "name": "Leaders",
    "text": "For every 25 nomads, there is a 2nd level fighter. For every 40 nomads, there is a 4th level fighter."
   },
   {
    "name": "Camps",
    "text": "Hunting / foraging groups commonly combine and live in a tribe of up to 300 nomad warriors."
   },
   {
    "name": "Camp leaders",
    "text": "Tribal chief (8th level fighter), plus a 5th level fighter for every 100 nomads. 50% chance of a cleric (9th level); 25% chance of a magic-user (8th level)."
   },
   {
    "name": "Hoard",
    "text": "Only have treasure type A in the camp."
   },
   {
    "name": "Traders",
    "text": "Often carry trade route tales of faraway lands."
   }
  ],
  "spells": [],
  "acText": "7 [12] to 4",
  "svNote": "1"
 },
 {
  "name": "Normal Human",
  "hd": "½",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 9,
  "acAsc": 10,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 20,
  "thac0Bonus": "-1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 6,
  "al": "Any, usually Lawful",
  "xp": 5,
  "naDungeon": "1d4",
  "naWild": "1d20",
  "tt": "U",
  "flavor": "Non-adventuring humans without a character class. Artists, beggars, children, craftspeople, farmers, fishermen, housewives, scholars, slaves.",
  "abilities": [
   {
    "name": "Gaining XP",
    "text": "Must select a character class after gaining XP on an adventure."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Ochre Jelly",
  "hd": "5*",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × touch (2d6)",
  "dmg": "2d6",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "30’ (10’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 300,
  "naDungeon": "1",
  "naWild": "0",
  "tt": "None",
  "flavor": "Giant, ochre amoeboids.",
  "abilities": [
   {
    "name": "Immunity",
    "text": "Unharmed by all attacks except cold or fire."
   },
   {
    "name": "Division",
    "text": "Lightning or attacks with weapons cause the jelly to divide into 1d4+1 2HD jellies that do half damage."
   },
   {
    "name": "Acid",
    "text": "After a successful attack, sticks to the victim and exudes acid. The acid inflicts 2d6 damage per round to flesh and destroys cloth, leather, or wood in one round. (Stone and metal are unaffected.)"
   },
   {
    "name": "Seep",
    "text": "Can squeeze through small holes and cracks."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Octopus, Giant",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 7,
  "acAsc": 12,
  "att": "8 × tentacle (1d3 + constriction), 1 × bite (1d6)",
  "dmg": "1d3",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "90’ (30’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "0",
  "naWild": "1d2",
  "tt": "None",
  "flavor": "Giant, eight-armed cephalopods. Lurk in coastal waters, close to settlements.",
  "abilities": [
   {
    "name": "Constriction",
    "text": "Tentacles grab and constrict after a hit. Each constricting tentacle inflicts: 1d3 automatic damage per round, plus a –1 penalty to attacks."
   },
   {
    "name": "Severing tentacles",
    "text": "Requires a hit with a cutting weapon inflicting 6 or more damage."
   },
   {
    "name": "Ink cloud",
    "text": "When escaping, can emit a cloud of black ink (80’ diameter) and jet away at 3 times normal speed."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Ogre",
  "hd": "4+1",
  "hpDice": {
   "n": 4,
   "mod": 1
  },
  "avgHp": 19,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × club (1d10)",
  "dmg": "1d10",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "90’ (30’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 125,
  "naDungeon": "1d6",
  "naWild": "2d6",
  "tt": "C + 1,000gp",
  "flavor": "Frightful humanoids, 8–10’ tall, dressed in animal hides. Often dwell in caves.",
  "abilities": [
   {
    "name": "Sack",
    "text": "Outside of the lair, carry a sack containing 1d6 × 100gp."
   },
   {
    "name": "Hate neanderthals",
    "text": "Attack on sight."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Orc",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 6,
  "al": "Chaotic",
  "xp": 10,
  "naDungeon": "2d4",
  "naWild": "1d6 × 10",
  "tt": "D",
  "flavor": "Ugly, bad-tempered, animalistic humanoids who live underground and are active at night. Sadistic bullies who hate other living creatures and delight in killing.",
  "abilities": [
   {
    "name": "Hate the sun",
    "text": "–1 to-hit in full daylight."
   },
   {
    "name": "Weapons",
    "text": "Prefer axes, clubs, spears, or swords. Only leaders can use mechanical weapons (e.g. crossbows, catapults)."
   },
   {
    "name": "Craven",
    "text": "Afraid of larger or stronger-looking creatures, though leaders may force them to fight."
   },
   {
    "name": "Leader",
    "text": "Groups are led by an orc with 8 hit points. The leader gains a +1 bonus to damage rolls. Leaders have defeated other orcs in combat to gain their position."
   },
   {
    "name": "Orc chieftain",
    "text": "A 4HD (15hp) chieftain rules an orc tribe. The chieftain gains a +2 bonus to damage rolls."
   },
   {
    "name": "Giant companions",
    "text": "For every 20 orcs, there is a 1-in-6 chance of an ogre (p46) accompanying them. There is a 1-in-10 chance of a troll (p59) living in the lair."
   },
   {
    "name": "Tribal",
    "text": "Orcs of different tribes may fight among themselves, unless their leaders command them not to. Each tribe has its own lair and has as many females as males, and two whelps per two adults."
   },
   {
    "name": "Mercenaries",
    "text": "Orcs may be hired to fight in Chaotic armies. They delight in wanton killing and razing of settlements."
   }
  ],
  "spells": [],
  "mlText": "6 (8 with leader)",
  "xpText": "10 (leader: 10, chieftain: 75)",
  "svNote": "1"
 },
 {
  "name": "Owl Bear",
  "hd": "5",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × claw (1d8), 1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 175,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "C",
  "flavor": "Huge (8’ tall, 1,500 pounds), ill-tempered, carnivorous bear-like creature with the face of an owl. Owl bears are found in dense forests and underground.",
  "abilities": [
   {
    "name": "Bear hug",
    "text": "If a victim is hit by both paws in the same round, the owl bear hugs for an extra 2d8 automatic damage."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Pegasus",
  "hd": "2+2",
  "hpDice": {
   "n": 2,
   "mod": 2
  },
  "avgHp": 11,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × hoof (1d6)",
  "dmg": "1d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "240’ (80’) / 480’ (160’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Lawful",
  "xp": 25,
  "naDungeon": "0",
  "naWild": "1d12",
  "tt": "None",
  "flavor": "Semi-intelligent winged horses that are wilful and timid.",
  "abilities": [
   {
    "name": "Hate hippogriffs",
    "text": "Natural enemies."
   },
   {
    "name": "Mount",
    "text": "Can carry a human-sized rider."
   },
   {
    "name": "Training",
    "text": "If captured when young, will serve Lawful characters."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Pirate",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Chaotic",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "see below",
  "tt": "A",
  "flavor": "Sailors who make a living by raiding coastal settlements, robbing other ships, and illegal slaving. Typically ply the open seas. Renowned for their ruthless and evil ways.",
  "abilities": [
   {
    "name": "Ships and crew",
    "text": "Depends where encountered. Rivers or lakes: 1d8 river boats (1d2 × 10 pirates each); coastal waters: 1d6 small galleys (1d3+1 × 10 pirates each); any: 1d4 longships (1d3+2 × 10 pirates each); ocean: 1d3 small warships (1d5+3 × 10 pirates each). (See Classic Fantasy: Genre Rules for details on ships.)"
   },
   {
    "name": "Arms",
    "text": "50% of group have: leather armour, sword; 35% have: leather armour, sword, crossbow; 15% have: chainmail, sword."
   },
   {
    "name": "Leaders",
    "text": "For every 30 pirates, there is a 4th level fighter. For every 50 pirates, and for each ship, there is a 5th level fighter. For every 100 pirates, and per fleet, there is an 8th level fighter."
   },
   {
    "name": "Fleet commander",
    "text": "Fleets of 300 or more pirates are led by a pirate lord (11th level fighter). 75% chance of a magic-user (level 1d2+8)."
   },
   {
    "name": "Treacherous",
    "text": "Will attack other pirates, if they can profit from it."
   },
   {
    "name": "Prisoners",
    "text": "25% chance of 1d3 prisoners to be ransomed."
   },
   {
    "name": "Treasure",
    "text": "Divided between vessels. Instead of carrying with them, may have a map to where it is buried."
   },
   {
    "name": "Havens",
    "text": "Lawless, fortified, coastal towns may act as a haven for pirates."
   }
  ],
  "spells": [],
  "acText": "7 [12] or 5",
  "svNote": "1"
 },
 {
  "name": "Pixie",
  "hd": "1*",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × dagger (1d4)",
  "dmg": "1d4",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "90’ (30’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 13,
   "B": 15,
   "S": 15
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 13,
  "naDungeon": "2d4",
  "naWild": "1d4 × 10",
  "tt": "R + S",
  "flavor": "1–2’ tall humanoids with insectoid wings. Distant relatives of elves.",
  "abilities": [
   {
    "name": "Invisible",
    "text": "Naturally invisible, but may choose to reveal themselves. May remain invisible when attacking: cannot be attacked in the first round; in subsequent rounds, may be attacked at –2 to hit (locatable by faint shadows and air movement)."
   },
   {
    "name": "Surprise",
    "text": "Always surprise, if invisible."
   },
   {
    "name": "Limited flight",
    "text": "Small wings only allow 3 turns of flight. Must rest 1 turn after flying."
   }
  ],
  "spells": [],
  "svNote": "E1"
 },
 {
  "name": "Pteranodon",
  "hd": "5",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d12)",
  "dmg": "1d12",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "240’ (80’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 175,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "V",
  "flavor": "Wingspan of up to 50’. Highly aggressive; often prey on humanoids.",
  "abilities": [],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Pterodactyl",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d3)",
  "dmg": "1d3",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "8–10’ wingspan. Prey on small to medium animals, but will attack humanoids, if very hungry.",
  "abilities": [],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Purple Worm",
  "hd": "15*",
  "hpDice": {
   "n": 15,
   "mod": 0
  },
  "avgHp": 67,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (2d8), 1 × sting (1d8 + poison)",
  "dmg": "2d8",
  "thac0": 9,
  "thac0Bonus": "+10",
  "mv": "60’ (20’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1d2",
  "naWild": "1d4",
  "tt": "D",
  "flavor": "Gigantic, slimy worms with bodies 100’ long and 8–10’ thick. Bore tunnels through the earth and come to the surface to eat other creatures.",
  "abilities": [
   {
    "name": "Swallow whole",
    "text": "A bite attack roll of 20, or 4 or more than the target number required, indicates that a human-sized (or smaller) victim is swallowed. Inside the worm’s belly: suffer 3d6 damage per round (until the worm dies); may attack with sharp weapons at –4 to hit; body digested in 6 turns after death."
   },
   {
    "name": "Poison",
    "text": "Causes death (save vs poison)."
   },
   {
    "name": "In restricted spaces",
    "text": "May not always be able to bite and sting at once."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Giant Rat",
  "hd": "½",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d3 + disease)",
  "dmg": "1d3",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’) / 60’ (20’) swimming",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 5,
  "naDungeon": "3d6",
  "naWild": "3d10",
  "tt": "C",
  "flavor": "3’ long (or larger), with black or grey fur. Often live in dark, dungeon areas and close to undead monsters.",
  "abilities": [
   {
    "name": "Disease",
    "text": "Bite has a 1-in-20 chance of infecting the target (save versus poison). The disease has a 1-in-4 chance of being deadly (die in 1d6 days). Otherwise, the victim is sick and bedridden for one month."
   },
   {
    "name": "Afraid of fire",
    "text": "Will flee fire, unless forced to fight by summoner."
   },
   {
    "name": "Attacking in water",
    "text": "May attack without penalty; excellent swimmers."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Normal Rat",
  "hd": "1hp",
  "hpDice": {
   "special": "1"
  },
  "avgHp": 1,
  "ac": 9,
  "acAsc": 10,
  "att": "1 × bite per pack (1d6 + disease)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’) / 30’ (10’) swimming",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 5,
  "al": "Neutral",
  "xp": 5,
  "naDungeon": "5d10",
  "naWild": "2d10",
  "tt": "L",
  "flavor": "Swarming packs of 6” to 2’ long individuals, with brown or grey fur.",
  "abilities": [
   {
    "name": "Disease",
    "text": "Bite has a 1-in-20 chance of infecting the target (save versus poison). The disease has a 1-in-4 chance of being deadly (die in 1d6 days). Otherwise, the victim is sick and bedridden for one month."
   },
   {
    "name": "Afraid of fire",
    "text": "Will flee fire, unless forced to fight by summoner."
   },
   {
    "name": "Attacking in water",
    "text": "May attack without penalty; excellent swimmers."
   },
   {
    "name": "Pack",
    "text": "Each group of 5–10 rats attacks as a pack. Each pack makes a single attack roll against one creature."
   },
   {
    "name": "Engulf",
    "text": "The creature attacked must save versus death or fall prone, unable to attack until able to stand up again."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Rhagodessa",
  "hd": "4+2",
  "hpDice": {
   "n": 4,
   "mod": 2
  },
  "avgHp": 20,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × sucker (grab), 1 × bite (2d8)",
  "dmg": "2d8",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1d4",
  "naWild": "1d6",
  "tt": "U",
  "flavor": "Huge, hairy, nocturnal arachnid carnivores with large heads and mandibles and 10 legs. Yellow head and abdomen, dark brown thorax. Dwell in caves, hunt voraciously.",
  "abilities": [
   {
    "name": "Suckers",
    "text": "Front legs equipped with suckers for grabbing prey."
   },
   {
    "name": "Grab",
    "text": "When hit with a sucker, the victim is stuck and will be bitten automatically next round."
   },
   {
    "name": "Cling",
    "text": "Can walk on walls."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Normal Rhinoceros",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × horn (2d4) or 1 × trample (2d8)",
  "dmg": "2d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "1d12",
  "tt": "None",
  "flavor": "Dim, armoured, herbivorous mammals.",
  "abilities": [
   {
    "name": "Charge",
    "text": "If disturbed or threatened, will charge in a random direction. Requires a clear run of at least 20 yards. Make a horn attack on all in the path: inflicts double damage."
   },
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Woolly Rhinoceros",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × horn (2d6) or 1 × trample (2d12)",
  "dmg": "2d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "0",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "Giant rhinoceroses adapted for cold climates: their bodies covered with shaggy, white fur. Live in herds, in cold Lost World areas.",
  "abilities": [
   {
    "name": "Charge",
    "text": "If disturbed or threatened, will charge in a random direction. Requires a clear run of at least 20 yards. Make a horn attack on all in the path: inflicts double damage."
   },
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Robber Fly",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d8)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "1d6",
  "naWild": "2d6",
  "tt": "U",
  "flavor": "3’ long, carnivorous flies with yellow and black stripes. Look similar to killer bees, which they hunt. May attack humans.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "Hunt patiently. Surprise on a 1–4, when waiting in shadows for prey."
   },
   {
    "name": "Poison immunity",
    "text": "Unharmed by killer bees’ poison."
   },
   {
    "name": "Leap",
    "text": "Can leap up to 30’ and attack."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Giant Roc",
  "hd": "36",
  "hpDice": {
   "n": 36,
   "mod": 0
  },
  "avgHp": 162,
  "ac": 0,
  "acAsc": 19,
  "att": "2 × claw (3d6), 1 × bite (8d6)",
  "dmg": "3d6",
  "thac0": 5,
  "thac0Bonus": "+14",
  "mv": "60’ (20’) / 480’ (160’) flying",
  "sv": {
   "D": 2,
   "W": 3,
   "P": 4,
   "B": 3,
   "S": 6
  },
  "ml": 10,
  "al": "Lawful",
  "xp": 6250,
  "naDungeon": "0",
  "naWild": "1",
  "tt": "I",
  "flavor": "Gigantic birds of prey that nest in the highest peaks of isolated mountain ranges. Will attack intruders, if approached carelessly.",
  "abilities": [
   {
    "name": "Eggs",
    "text": "1d6 eggs or chicks in 50% of nests."
   },
   {
    "name": "Trainable",
    "text": "Can be trained, if captured when young."
   },
   {
    "name": "Alignment reaction",
    "text": "–1 to reaction rolls versus Neutral characters; –2 versus Chaotic characters."
   },
   {
    "name": "Swoop",
    "text": "Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size)."
   }
  ],
  "spells": [],
  "mlText": "10 (12 in lair)",
  "svNote": "18"
 },
 {
  "name": "Large Roc",
  "hd": "12",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × claw (1d8), 1 × bite (2d10)",
  "dmg": "1d8",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "60’ (20’) / 480’ (160’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Lawful",
  "xp": 1100,
  "naDungeon": "0",
  "naWild": "1d8",
  "tt": "I",
  "flavor": "Gigantic birds of prey that nest in the highest peaks of isolated mountain ranges. Will attack intruders, if approached carelessly.",
  "abilities": [
   {
    "name": "Eggs",
    "text": "1d6 eggs or chicks in 50% of nests."
   },
   {
    "name": "Trainable",
    "text": "Can be trained, if captured when young."
   },
   {
    "name": "Alignment reaction",
    "text": "–1 to reaction rolls versus Neutral characters; –2 versus Chaotic characters."
   },
   {
    "name": "Swoop",
    "text": "Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size)."
   }
  ],
  "spells": [],
  "mlText": "9 (12 in lair)",
  "svNote": "6"
 },
 {
  "name": "Small Roc",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × claw (1d4+1), 1 × bite (2d6)",
  "dmg": "1d4+1",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "60’ (20’) / 480’ (160’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Lawful",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "1d12",
  "tt": "I",
  "flavor": "Gigantic birds of prey that nest in the highest peaks of isolated mountain ranges. Will attack intruders, if approached carelessly.",
  "abilities": [
   {
    "name": "Eggs",
    "text": "1d6 eggs or chicks in 50% of nests."
   },
   {
    "name": "Trainable",
    "text": "Can be trained, if captured when young."
   },
   {
    "name": "Alignment reaction",
    "text": "–1 to reaction rolls versus Neutral characters; –2 versus Chaotic characters."
   },
   {
    "name": "Swoop",
    "text": "Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size)."
   }
  ],
  "spells": [],
  "mlText": "8 (12 in lair)",
  "svNote": "3"
 },
 {
  "name": "Rock Baboon",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × club (1d6), 1 × bite (1d3)",
  "dmg": "1d6",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "2d6",
  "naWild": "5d6",
  "tt": "U",
  "flavor": "Large, ferocious, semi-intelligent baboons that live in packs led by a powerful male. Communicate with screams. Omnivorous, but prefer flesh.",
  "abilities": [
   {
    "name": "Weapons",
    "text": "Wield bones or branches as clubs. (Do not use other tools.)"
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Rust Monster",
  "hd": "5",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × feeler (rusting)",
  "dmg": "",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 175,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Magical, armadillo-like creatures with long tails and two long, antennae-like feelers. Feed on rusted metal.",
  "abilities": [
   {
    "name": "Rusting",
    "text": "Metal that touches a rust monster (e.g. weapons that hit it, or armour struck by a feeler) crumbles instantly to rust. Magic items have a 10% chance per “plus”, to be unaffected on each successful hit. Each time a magic item is affected, it loses one “plus”."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Smell metal",
    "text": "Attracted by the scent."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Flame Salamander",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × claw (1d4), 1 × bite (1d8), 1 × heat aura (1d8)",
  "dmg": "1d4",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 1200,
  "naDungeon": "1d4+1",
  "naWild": "2d4",
  "tt": "F",
  "flavor": "12’–16’ long, intelligent serpents with lizard-like heads and legs. Bright orange/ yellow/red scales. Natives of the plane of elemental fire, but also live in volcanoes and scorching deserts.",
  "abilities": [
   {
    "name": "Heat aura",
    "text": "All creatures within 20’ suffer 1d8 damage per round."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by fire."
   },
   {
    "name": "Hate frost salamanders",
    "text": "Will attack on sight."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Frost Salamander",
  "hd": "12*",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 3,
  "acAsc": 16,
  "att": "4 × claw (1d6), 1 × bite (2d6), 1 × cold aura (1d8)",
  "dmg": "1d6",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 1900,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "E",
  "flavor": "Giant, 6-legged lizards with blue/white scales. Dwell in icy, wilderness regions.",
  "abilities": [
   {
    "name": "Cold aura",
    "text": "All creatures within 20’ suffer 1d8 damage per round."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Cold immunity",
    "text": "Unharmed by coldbased attacks."
   },
   {
    "name": "Hate flame salamanders",
    "text": "Will attack on sight."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Scorpion, Giant",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × claw (1d10), 1 × sting (1d4 + poison)",
  "dmg": "1d10",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 125,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "V",
  "flavor": "Huge arachnids, as big as a small horse, with pincers and deadly stingers. Dwell in caverns, ruins, and deserts.",
  "abilities": [
   {
    "name": "Aggressive",
    "text": "Normally attack on sight."
   },
   {
    "name": "Poison",
    "text": "Causes death (save vs poison)."
   },
   {
    "name": "Grab and sting",
    "text": "+2 bonus to sting attack, if a claw hits."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Sea Serpent (Lesser)",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (2d6) or 1 × squeeze (1d10 hull damage)",
  "dmg": "2d6",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "2d6",
  "tt": "None",
  "flavor": "20’–30’ long, serpent-like sea monsters with rows of many fins.",
  "abilities": [
   {
    "name": "Lunge",
    "text": "Up to 20’ out of water to use bite attack."
   },
   {
    "name": "Squeeze",
    "text": "Coil around and crush a vessel (of equal size or smaller)."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Shadow",
  "hd": "2+2*",
  "hpDice": {
   "n": 2,
   "mod": 2
  },
  "avgHp": 11,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × touch (1d4 + strength drain)",
  "dmg": "1d4",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 35,
  "naDungeon": "1d8",
  "naWild": "1d12",
  "tt": "F",
  "flavor": "Intelligent, incorporeal (but not undead) monsters that look like shadows. Able to slightly change their shape.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "On a 1–5."
   },
   {
    "name": "Strength drain",
    "text": "Victims lose 1 STR per hit. Recovers after 8 turns. If reduced to 0 STR, the victim becomes a shadow."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Spell immunity",
    "text": "Unaffected by charm and sleep spells."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Bull Shark",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (2d4) or 1 × ram (stun)",
  "dmg": "2d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "3d6",
  "tt": "None",
  "flavor": "8’ long; brown colouration. Attack by ramming, then biting the stunned prey.",
  "abilities": [
   {
    "name": "Blood scent",
    "text": "Can detect blood in water up to 300’ away."
   },
   {
    "name": "Feeding frenzy",
    "text": "Triggered by the scent of blood: always attack; no morale checks."
   },
   {
    "name": "Ram",
    "text": "Stunned for 3 rounds (save versus paralysis)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Great White Shark",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (2d10)",
  "dmg": "2d10",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "180’ (60’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "30’ long (or bigger!); grey colouration with white belly. Sometimes attack small boats.",
  "abilities": [
   {
    "name": "Blood scent",
    "text": "Can detect blood in water up to 300’ away."
   },
   {
    "name": "Feeding frenzy",
    "text": "Triggered by the scent of blood: always attack; no morale checks."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Mako Shark",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (2d6)",
  "dmg": "2d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "0",
  "naWild": "2d6",
  "tt": "None",
  "flavor": "15’ long; bluish-grey or tan colouration.",
  "abilities": [
   {
    "name": "Blood scent",
    "text": "Can detect blood in water up to 300’ away."
   },
   {
    "name": "Feeding frenzy",
    "text": "Triggered by the scent of blood: always attack; no morale checks."
   },
   {
    "name": "Unpredictable",
    "text": "May ignore other creatures, only to attack moments later."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Shrew, Giant",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × bite (1d6)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "1d4",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "Brown-furred, mole-like, insectivores with long snouts. Dwell underground; skilled burrowers.",
  "abilities": [
   {
    "name": "Initiative",
    "text": "Always win initiative in the round of their first attack. +1 to initiative in the round of their second attack."
   },
   {
    "name": "Ferocity",
    "text": "Attack targets’ heads. Targets with 3 HD or less must save versus death or flee."
   },
   {
    "name": "Climbing",
    "text": "Skilled climbers; can jump up to 5’."
   },
   {
    "name": "Territorial",
    "text": "Ferociously defend their hunting area from all intruders."
   },
   {
    "name": "Echolocation",
    "text": "Perceive their surroundings up to 60’. Unaffected by lack of light. If unable to hear (e.g. silence, 15’ radius): AC reduced to 8 [11], –4 penalty to attacks."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Shrieker",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "None",
  "dmg": "",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "9’ (3’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "1d8",
  "naWild": "0",
  "tt": "None",
  "flavor": "Giant, subterranean mushrooms that can creep around slowly.",
  "abilities": [
   {
    "name": "Shriek",
    "text": "Triggered by light (up to 60’ away) or movement (up to 30’ away). Shriek lasts for 1d3 rounds. Each round of the shriek, there is a 50% chance of a wandering monster being attracted (will arrive in 2d6 rounds)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Skeleton",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 10,
  "naDungeon": "3d4",
  "naWild": "3d10",
  "tt": "None",
  "flavor": "Skeletal remains of humanoids, reanimated as guardians by powerful magic-users or clerics. Often encountered in cemeteries, crypts, or other forlorn places.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Giant Rattler",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × bite (1d4 + poison)",
  "dmg": "1d4",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "U",
  "flavor": "10’ long snakes with brown and white diamond patterns on their scales, and a rattle of rasping scales on their tails.",
  "abilities": [
   {
    "name": "Rattle",
    "text": "Shaken to warn off creatures the snake does not wish to attack."
   },
   {
    "name": "Poison",
    "text": "Causes death in 1d6 turns (save versus poison)."
   },
   {
    "name": "Speed",
    "text": "Attack twice per round. Second attack at the end of each round."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Pit Viper",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d4 + poison)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1d8",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "5’ long snakes with grey/green scales.",
  "abilities": [
   {
    "name": "Infravision",
    "text": "60’. (Pits in the head allow heat sense.)"
   },
   {
    "name": "Initiative",
    "text": "Always gains initiative (no roll), due to special senses."
   },
   {
    "name": "Poison",
    "text": "Causes death (save vs poison)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Rock Python",
  "hd": "5*",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d4 + constriction)",
  "dmg": "1d4",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 300,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "U",
  "flavor": "20’ long snakes with spiralling brown and yellow patterns on their scales.",
  "abilities": [
   {
    "name": "Constriction",
    "text": "When a bite attack is successful, the python wraps around the victim and begins to squeeze, inflicting 2d4 automatic damage immediately and on each subsequent round."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Sea Snake",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1hp + poison)",
  "dmg": "",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "1d8",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "6’ long snakes that live underwater, coming up for breath only once per hour. Will prey on humans.",
  "abilities": [
   {
    "name": "Pinprick bite",
    "text": "50% chance of going unnoticed."
   },
   {
    "name": "Poison",
    "text": "Slow acting: effects felt after 1d4+2 turns. Save vs poison or die 1 turn later. At this point, the neutralize poison spell has a 25% chance of not working."
   },
   {
    "name": "Larger individuals",
    "text": "Sea snakes with more than 3 HD may be encountered. They are 6’ long for every 3 HD."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Spitting Cobra",
  "hd": "1*",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × spit (blindness) or 1 × bite (1d3 + poison)",
  "dmg": "1d3",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 13,
  "naDungeon": "1d6",
  "naWild": "1d6",
  "tt": "None",
  "flavor": "3’ long snakes with grey/white scales. Prefer to attack from a distance with spit.",
  "abilities": [
   {
    "name": "Blinding spit",
    "text": "Range: 6’. A hit causes permanent blindness (save vs poison)."
   },
   {
    "name": "Poison",
    "text": "Causes death in 1d10 turns (save versus poison)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Spectre",
  "hd": "6**",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × touch (1d8 + energy drain)",
  "dmg": "1d8",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "150’ (50’) / 300’ (100’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 725,
  "naDungeon": "1d4",
  "naWild": "1d8",
  "tt": "E",
  "flavor": "Incorporeal phantoms; one of the most powerful undead monsters.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Energy drain",
    "text": "A successfully hit target permanently loses two experience levels (or Hit Dice). This incurs a loss of two Hit Dice of hit points, as well as all other benefits due to the drained levels (e.g. spells, saving throws, etc.). A character’s XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a spectre next night, under the control of the spectre that killed them."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Black Widow",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (2d6 + poison)",
  "dmg": "2d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "60’ (20’) / 120’ (40’) in webs",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 50,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "U",
  "flavor": "6’ long, black spiders with a red hourglass pattern on their abdomens. Dwell in web-filled lairs and sometimes prey on humans.",
  "abilities": [
   {
    "name": "Poison",
    "text": "Causes death in 1 turn (save versus poison)."
   },
   {
    "name": "Webs",
    "text": "Creatures caught in webs become entangled and unable to move. Breaking free depends on Strength: 2d4 turns for strength in the normal human range; 4 rounds for strength above 18; 2 rounds for creatures with giant strength. The webs can be destroyed by fire in two rounds. All creatures in a flaming web suffer 1d6 points of damage."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Crab Spider",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d8 + poison)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "U",
  "flavor": "5’ long hunting spiders that can change their colour to match their surroundings.",
  "abilities": [
   {
    "name": "Ambush",
    "text": "Attack by dropping on victims from above."
   },
   {
    "name": "Surprise",
    "text": "On a 1–4, due to camou- flage."
   },
   {
    "name": "Cling",
    "text": "Can walk on walls and ceilings."
   },
   {
    "name": "Poison",
    "text": "Causes death in 1d4 turns (save versus poison with a +2 bonus)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Tarantella",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d8 + poison)",
  "dmg": "1d8",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1d3",
  "naWild": "1d3",
  "tt": "U",
  "flavor": "7’ long, hairy hunting spiders that resemble tarantulas. Magical in nature.",
  "abilities": [
   {
    "name": "Poison",
    "text": "Save vs poison or dance for 2d6 turns (suffering from painful, jerking spasms that resemble a macabre dance)."
   },
   {
    "name": "Onlookers",
    "text": "Viewers of one affected by the poison must save versus spells or begin dancing in the same fashion, for as long as the poisoned victim."
   },
   {
    "name": "Dancing",
    "text": "Those affected suffer a –4 penalty to attack rolls and AC. After 5 turns of dancing, they become exhausted: fall to the ground, helpless."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Sprite",
  "hd": "½*",
  "hpDice": {
   "special": "1d4"
  },
  "avgHp": 2,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × spell (curse)",
  "dmg": "",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 13,
   "B": 15,
   "S": 15
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 6,
  "naDungeon": "3d6",
  "naWild": "5d8",
  "tt": "S",
  "flavor": "1’ tall, winged humanoids, related to pixies and elves. They are shy, but driven by curiosity and their odd sense of humour.",
  "abilities": [
   {
    "name": "Curse",
    "text": "Five sprites can collectively curse a target (no attack roll; save versus spells). The effect is determined by the referee, but will always be used to comical effect (e.g. target trips, target’s nose grows)."
   },
   {
    "name": "Pranksters",
    "text": "Even if attacked, sprites have no interest in killing, merely in making practical jokes."
   }
  ],
  "spells": [],
  "svNote": "E1"
 },
 {
  "name": "Squid, Giant",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 7,
  "acAsc": 12,
  "att": "8 × small tentacle (1d4 + constriction), 2 × large tentacle (1d4 + constriction or 1d10 hull damage), 1 × beak (1d10 or 2 hull damage)",
  "dmg": "1d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "V",
  "flavor": "Giant, ten-armed cephalopods. Two of the ten arms are larger, and may be used to attack ships. Dwell in the depths of the sea, only surface to find prey.",
  "abilities": [
   {
    "name": "Crush boats",
    "text": "25% likely to wrap the 2 large tentacles around a boat, doing 1d10 hull damage per tentacle. When the large tentacles are grappling a boat, in subsequent rounds, the beak inflicts 2 points of hull damage automatically."
   },
   {
    "name": "Grab crew",
    "text": "75% likely to grab crew from the deck and drag them underwater to be eaten."
   },
   {
    "name": "Constriction",
    "text": "Tentacles grab and constrict after a hit. 1d4 automatic damage per round."
   },
   {
    "name": "Severing tentacles",
    "text": "Requires a hit that inflicts 6 or more damage (8 small tentacles) or 10 or more damage (2 large tentacles)."
   },
   {
    "name": "Ink cloud",
    "text": "When escaping, can emit a cloud of black ink (60’ diameter) and jet away at 3 times normal speed. Maximum twice a day."
   },
   {
    "name": "Gargantuan specimens",
    "text": "Two or three times larger can be encountered."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Stegosaurus",
  "hd": "11",
  "hpDice": {
   "n": 11,
   "mod": 0
  },
  "avgHp": 49,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × tail (2d8) or 1 × trample (2d8)",
  "dmg": "2d8",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "60’ (20’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 1100,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Stocky, herbivorous dinosaurs with a ridge of plates along their backs, and a tail studded with spikes (used to deter attackers). Dwell in sub-tropical Lost World environments.",
  "abilities": [
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Stirge",
  "hd": "1*",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × beak (1d3 + blood sucking)",
  "dmg": "1d3",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "30’ (10’) / 180’ (60’) flying",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 13,
  "naDungeon": "1d10",
  "naWild": "3d12",
  "tt": "L",
  "flavor": "Feathered, bird-like creatures with long, sharp beaks.",
  "abilities": [
   {
    "name": "Dive attack",
    "text": "First attack is at +2 to hit."
   },
   {
    "name": "Blood sucking",
    "text": "Upon a successful attack, attaches and drains victim’s blood: 1d3 automatic damage per round."
   },
   {
    "name": "Detach",
    "text": "If stirge or victim dies."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Thoul",
  "hd": "3**",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 6,
  "acAsc": 13,
  "att": "2 × claw (1d3 + paralysis) or 1 × weapon (1d6 or by weapon)",
  "dmg": "1d3",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 65,
  "naDungeon": "1d6",
  "naWild": "1d10",
  "tt": "C",
  "flavor": "Magical monstrosities that look like hobgoblins (except on close inspection), but combine the powers of ghouls and trolls. Sometimes live among hobgoblins.",
  "abilities": [
   {
    "name": "Paralysis",
    "text": "Successful attacks cause paralysis for 2d4 turns (save versus paralysis negates). Elves and creatures larger than ogres are unaffected. After paralysing a target, thouls will attack others."
   },
   {
    "name": "Regeneration",
    "text": "A damaged thoul gains 1 hit point at the start of each round, as long as it is alive."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Titanothere",
  "hd": "12",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × butt (2d6) or 1 × trample (3d8)",
  "dmg": "2d6",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 1100,
  "naDungeon": "0",
  "naWild": "1d6",
  "tt": "None",
  "flavor": "Giant (12’ at the shoulder), ancient relatives of the rhinoceros, with massive, blunt horns. Eat grass and tree leaves. Dwell in small herds in Lost World grasslands.",
  "abilities": [
   {
    "name": "Peaceful grazers",
    "text": "Will not attack if le% alone."
   },
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Toad, Giant",
  "hd": "2+2",
  "hpDice": {
   "n": 2,
   "mod": 2
  },
  "avgHp": 11,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d4+1)",
  "dmg": "1d4+1",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Warty amphibians with long, sticky tongues. As large as a great hound, weighing 150 to 250 pounds.",
  "abilities": [
   {
    "name": "Surprise",
    "text": "On a 1–3, in forests or dark dungeons, due to the ability to change colour to match their surrounding."
   },
   {
    "name": "Sticky tongue",
    "text": "Attack up to 15’ away. On a hit, prey (up to dwarf size) is dragged to the mouth and bitten."
   },
   {
    "name": "Swallow whole",
    "text": "An attack roll of 20 indicates a small victim is swallowed. Inside the toad’s belly: suffer 1d6 damage per round (until the toad dies); may attack with sharp weapons at –4 to hit; body digested in 6 turns after death."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Trader",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × weapon (1d6 or by weapon)",
  "dmg": "1d6",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 7,
  "al": "Any",
  "xp": 10,
  "naDungeon": "1d8",
  "naWild": "3d6",
  "tt": "U + V",
  "flavor": "1st level fighters who live by trading in borderland areas.",
  "abilities": [
   {
    "name": "Arms",
    "text": "Usually carry: hand-axe, sword, shield, furs (equivalent to leather armour)."
   },
   {
    "name": "Mules",
    "text": "In the wilderness, have 1d4 mules loaded with trade goods (e.g. carved wooden items, furs, spices)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Treant",
  "hd": "8",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × fist (2d6)",
  "dmg": "2d6",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "60’ (20’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Lawful",
  "xp": 650,
  "naDungeon": "0",
  "naWild": "1d8",
  "tt": "C",
  "flavor": "Giant (18’ tall) humanoids that look like trees. Dwell in forests. Are concerned only with protecting the plants of their home. Speak their own long-winded and circuitous language.",
  "abilities": [
   {
    "name": "Distrust fire",
    "text": "And those who wield it."
   },
   {
    "name": "Surprise",
    "text": "On a 1–3, in a forest, due to being mistaken for a tree. Encounter occurs at 30 yards or less."
   },
   {
    "name": "Animate trees",
    "text": "Each individual can animate 2 trees (within 60’; may switch trees at will). These fight as treants with movement rate 30’ (10’)."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Triceratops",
  "hd": "11",
  "hpDice": {
   "n": 11,
   "mod": 0
  },
  "avgHp": 49,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × gore (3d6) or 1 × trample (3d6)",
  "dmg": "3d6",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "90’ (30’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 1100,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Massive (12’ to the shoulder, almost 40’ long), aggressive, herbivorous dinosaurs with a protective crest behind the head, and three long horns. Dwell in Lost World grasslands.",
  "abilities": [
   {
    "name": "Aggressive",
    "text": "Normally attack on sight."
   },
   {
    "name": "Charge",
    "text": "In first round of combat, when not in melee. Requires a clear run of at least 20 yards. Horns inflict double damage."
   },
   {
    "name": "Trample",
    "text": "3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Troglodyte",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 5,
  "acAsc": 14,
  "att": "2 × claw (1d4), 1 × bite (1d4)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 25,
  "naDungeon": "1d8",
  "naWild": "5d8",
  "tt": "A",
  "flavor": "Intelligent, reptilian humanoids with agile hands, long legs, short tails, and spiky combs on their heads and arms.",
  "abilities": [
   {
    "name": "Hateful",
    "text": "Attempt to kill any creatures they encounter."
   },
   {
    "name": "Surprise",
    "text": "On a 1–4, due to the ability to change colour to match their surroundings. Lurk by rock walls and await victims."
   },
   {
    "name": "Nauseating stench",
    "text": "Oils on the skin have a smell that sickens humans and demihumans: save versus poison or suffer –2 to hit, while in melee with troglodytes."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Troll",
  "hd": "6+3*",
  "hpDice": {
   "n": 6,
   "mod": 3
  },
  "avgHp": 30,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × talon (1d6), 1 × bite (1d10)",
  "dmg": "1d6",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 10,
  "al": "Chaotic",
  "xp": 650,
  "naDungeon": "1d8",
  "naWild": "1d8",
  "tt": "D",
  "flavor": "Intelligent, wicked, 8’ tall humanoids with emaciated, rubbery bodies. Consume the flesh of other humanoids. Dwell underground, in barren wilderness, and in the ruined homes of former victims.",
  "abilities": [
   {
    "name": "Regeneration",
    "text": "3 rounds after being damaged, start regaining 3hp per round. Severed limbs reattach."
   },
   {
    "name": "Return from death",
    "text": "If killed (0hp), will regenerate and fight again in 2d6 rounds."
   },
   {
    "name": "Fire and acid",
    "text": "Cannot regenerate damage from these sources. The only way to permanently kill a troll."
   },
   {
    "name": "Fear of fire",
    "text": "Morale 8 when attacked with fire or acid."
   }
  ],
  "spells": [],
  "mlText": "10 (8 fear of fire)",
  "svNote": "6"
 },
 {
  "name": "Tyrannosaurus Rex",
  "hd": "20",
  "hpDice": {
   "n": 20,
   "mod": 0
  },
  "avgHp": 90,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × bite (6d6)",
  "dmg": "6d6",
  "thac0": 6,
  "thac0Bonus": "+13",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 11,
  "al": "Neutral",
  "xp": 2000,
  "naDungeon": "0",
  "naWild": "1",
  "tt": "V × 3",
  "flavor": "Great (over 20’ tall), two-legged, predatory dinosaurs with huge jaws. Hunt human-sized or larger prey. Dwell in Lost World regions.",
  "abilities": [
   {
    "name": "Large prey",
    "text": "Attack largest target first."
   }
  ],
  "spells": [],
  "svNote": "10"
 },
 {
  "name": "Unicorn",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 2,
  "acAsc": 17,
  "att": "2 × hoof (1d8), 1 × horn (1d8)",
  "dmg": "1d8",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "240’ (80’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 7,
  "al": "Lawful",
  "xp": 125,
  "naDungeon": "1d6",
  "naWild": "1d8",
  "tt": "None",
  "flavor": "Fantastic creatures that appear as elegant horses with a long horn. Unicorns are timid, but proud and wilful.",
  "abilities": [
   {
    "name": "Empathy with maidens",
    "text": "A pure-hearted maiden can communicate with and ride a unicorn."
   },
   {
    "name": "Teleport",
    "text": "Once per day, up to 360’ (including rider)."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Warp Beast",
  "hd": "6*",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 4,
  "acAsc": 15,
  "att": "2 × tentacle (2d4)",
  "dmg": "2d4",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "150’ (50’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 500,
  "naDungeon": "1d4",
  "naWild": "1d4",
  "tt": "D",
  "flavor": "Large, black, six-legged, semi-intelligent monsters. Look similar to panthers with a tentacle growing from each front shoulder. Tentacles ridged with razor-sharp edges.",
  "abilities": [
   {
    "name": "Displacement",
    "text": "Appear 3’ from actual location: attackers suffer –2 to hit."
   },
   {
    "name": "Save bonus",
    "text": "+2 to all saves."
   },
   {
    "name": "Hate blink dogs",
    "text": "Always attack them and their companions."
   }
  ],
  "spells": [],
  "svNote": "6"
 },
 {
  "name": "Freshwater Termite",
  "hd": "2+1",
  "hpDice": {
   "n": 2,
   "mod": 1
  },
  "avgHp": 10,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d4) or 1 × spray (stun)",
  "dmg": "1d4",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "0",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "Giant (1’–5’ long), wood-eating, aquatic insects with a sack to take in and jet out water. Prone to feeding on passing ships. Only attack creatures if cornered.",
  "abilities": [
   {
    "name": "Irritant spray",
    "text": "Above water; maximum once a turn. Can spray one target: save versus poison or stunned for 1 turn."
   },
   {
    "name": "Ink cloud",
    "text": "Underwater; maximum once a turn. When escaping, can emit a cloud of black ink to confuse attackers."
   },
   {
    "name": "Eat ships",
    "text": "Cling to bottom of vessel. Each individual inflicts 1d3 hull damage then drops off."
   },
   {
    "name": "Noticing ship damage",
    "text": "50% chance per round of spotting leaks."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Saltwater Termite",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × bite (1d6) or 1 × spray (stun)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 11,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "0",
  "naWild": "1d6+1",
  "tt": "None",
  "flavor": "Giant (1’–5’ long), wood-eating, aquatic insects with a sack to take in and jet out water. Prone to feeding on passing ships. Only attack creatures if cornered.",
  "abilities": [
   {
    "name": "Irritant spray",
    "text": "Above water; maximum once a turn. Can spray one target: save versus poison or stunned for 1 turn."
   },
   {
    "name": "Ink cloud",
    "text": "Underwater; maximum once a turn. When escaping, can emit a cloud of black ink to confuse attackers."
   },
   {
    "name": "Eat ships",
    "text": "Cling to bottom of vessel. Each individual inflicts 1d3 hull damage then drops off."
   },
   {
    "name": "Noticing ship damage",
    "text": "50% chance per round of spotting leaks."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Swamp Termite",
  "hd": "1+1",
  "hpDice": {
   "n": 1,
   "mod": 1
  },
  "avgHp": 5,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d3) or 1 × spray (stun)",
  "dmg": "1d3",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 15,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Giant (1’–5’ long), wood-eating, aquatic insects with a sack to take in and jet out water. Prone to feeding on passing ships. Only attack creatures if cornered.",
  "abilities": [
   {
    "name": "Irritant spray",
    "text": "Above water; maximum once a turn. Can spray one target: save versus poison or stunned for 1 turn."
   },
   {
    "name": "Ink cloud",
    "text": "Underwater; maximum once a turn. When escaping, can emit a cloud of black ink to confuse attackers."
   },
   {
    "name": "Eat ships",
    "text": "Cling to bottom of vessel. Each individual inflicts 1d3 hull damage then drops off."
   },
   {
    "name": "Noticing ship damage",
    "text": "50% chance per round of spotting leaks."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Weasel, Giant",
  "hd": "4+4",
  "hpDice": {
   "n": 4,
   "mod": 4
  },
  "avgHp": 22,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (2d4 + blood sucking)",
  "dmg": "2d4",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1d4",
  "naWild": "1d6",
  "tt": "V",
  "flavor": "8’ to 9’ long, vicious, predatory mammals with rich fur of brown, gold, or white. Dwell in subterranean tunnels, hunting alone or in small groups.",
  "abilities": [
   {
    "name": "Infravision",
    "text": "30’."
   },
   {
    "name": "Blood sucking",
    "text": "Upon a successful attack, locks onto the victim and drains its blood: 2d4 automatic damage per round."
   },
   {
    "name": "Detaching",
    "text": "If weasel or victim dies."
   },
   {
    "name": "Tracking",
    "text": "By scent, favouring wounded prey."
   },
   {
    "name": "Treasure",
    "text": "Found in lair on bodies of victims."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Killer Whale",
  "hd": "6",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (1d20)",
  "dmg": "1d20",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "0",
  "naWild": "1d6",
  "tt": "V",
  "flavor": "25’ long, carnivorous whales. Dwell in cold waters and hunt sea creatures (including other whales).",
  "abilities": [
   {
    "name": "Swallow whole",
    "text": "An attack roll of 20 indicates a halfling-sized (or smaller) victim is swallowed. Inside the whale’s belly: suffer 1d6 damage per round (until the whale dies); may attack with sharp weapons at –4 to hit; drown after 10 rounds; body digested in 6 turns after death."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Narwhal",
  "hd": "12",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d8), 1 × horn (2d6)",
  "dmg": "1d8",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "180’ (60’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 8,
  "al": "Lawful",
  "xp": 1100,
  "naDungeon": "0",
  "naWild": "1d4",
  "tt": "Horn",
  "flavor": "15’ long, intelligent, magical whales with grey to white skin and an 8’ long, spiralling horn on their nose. Live independent and secretive lives in arctic waters.",
  "abilities": [
   {
    "name": "Horn",
    "text": "Is worth 1d6 × 1,000gp. Rumours say a narwhal’s horn vibrates when evil is near."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Sperm Whale",
  "hd": "36",
  "hpDice": {
   "n": 36,
   "mod": 0
  },
  "avgHp": 162,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (3d20) or 1 × ram (6d6 hull damage)",
  "dmg": "3d20",
  "thac0": 5,
  "thac0Bonus": "+14",
  "mv": "180’ (60’)",
  "sv": {
   "D": 4,
   "W": 5,
   "P": 6,
   "B": 5,
   "S": 8
  },
  "ml": 7,
  "al": "Neutral",
  "xp": 6250,
  "naDungeon": "0",
  "naWild": "1d3",
  "tt": "V",
  "flavor": "Gargantuan whales up to 60’ long. Dwell in open oceans and hunt deep sea monsters (e.g. giant squids).",
  "abilities": [
   {
    "name": "Swallow whole",
    "text": "An attack roll of 4 or more than the target number required indicates a human-sized (or smaller) victim is swallowed. Inside the whale’s belly: suffer 3d6 damage per round (until the whale dies); may attack with sharp weapons at –4 to hit; body digested in 6 turns after death."
   },
   {
    "name": "Ram ships",
    "text": "10% likely to attack vessels."
   }
  ],
  "spells": [],
  "svNote": "15"
 },
 {
  "name": "Wight",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 5,
  "acAsc": 14,
  "att": "1 × touch (energy drain)",
  "dmg": "",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "90’ (30’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 50,
  "naDungeon": "1d6",
  "naWild": "1d8",
  "tt": "B",
  "flavor": "Corpses of humans or demihumans, possessed by malevolent spirits.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   },
   {
    "name": "Mundane weapon immunity",
    "text": "Only harmed by silver weapons or magic."
   },
   {
    "name": "Energy drain",
    "text": "A successfully hit target permanently loses one experience level (or Hit Die). This incurs a loss of one Hit Die of hit points, as well as all other benefits due to the drained level (e.g. spells, saving throws, etc.). A character’s XP is reduced to halfway between the former and new levels. A person drained of all levels becomes a wight in 1d4 days, under the control of the wight that killed them."
   }
  ],
  "spells": [],
  "svNote": "3"
 },
 {
  "name": "Dire Wolf",
  "hd": "4+1",
  "hpDice": {
   "n": 4,
   "mod": 1
  },
  "avgHp": 19,
  "ac": 6,
  "acAsc": 13,
  "att": "1 × bite (2d4)",
  "dmg": "2d4",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "150’ (50’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 8,
  "al": "Neutral",
  "xp": 125,
  "naDungeon": "1d4",
  "naWild": "2d4",
  "tt": "None",
  "flavor": "Large, savage, semi-intelligent wolves. Dwell in caves, mountains, and forests.",
  "abilities": [
   {
    "name": "Training",
    "text": "At the referee’s discretion, captured cubs may be trained like dogs. Dire wolves are ferocious and extremely difficult to train."
   },
   {
    "name": "Mounts",
    "text": "Sometimes trained as mounts by goblins."
   }
  ],
  "spells": [],
  "svNote": "2"
 },
 {
  "name": "Normal Wolf",
  "hd": "2+2",
  "hpDice": {
   "n": 2,
   "mod": 2
  },
  "avgHp": 11,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × bite (1d6)",
  "dmg": "1d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "180’ (60’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 6,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "2d6",
  "naWild": "3d6",
  "tt": "None",
  "flavor": "Dwell primarily in wild lands, but occasionally lair in caves.",
  "abilities": [
   {
    "name": "Training",
    "text": "At the referee’s discretion, captured cubs may be trained like dogs. Wolves are difficult to train."
   },
   {
    "name": "Strength in numbers",
    "text": "Packs of 4 or more wolves have morale 8. If the pack is reduced to less than 50% of its original size, this morale bonus is lost."
   }
  ],
  "spells": [],
  "mlText": "6 (8 in larger packs)",
  "svNote": "1"
 },
 {
  "name": "Wraith",
  "hd": "4**",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × touch (1d6 + energy drain)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’) / 240’ (80’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 175,
  "naDungeon": "1d4",
  "naWild": "1d6",
  "tt": "E",
  "flavor": "Incorporeal, undead monsters that appear as pale, human-like forms of coalescing mist. Dwell in deserted regions or in the homes of former victims.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   },
   {
    "name": "Mundane weapon immunity",
    "text": "Only harmed by silver weapons or magic."
   },
   {
    "name": "Damage reduction",
    "text": "Half damage from silver weapons."
   },
   {
    "name": "Energy drain",
    "text": "A successfully hit target permanently loses one experience level (or Hit Die). This incurs a loss of one Hit Die of hit points, as well as all other benefits due to the drained level (e.g. spells, saving throws, etc.). A character’s XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a wraith in one day, under the control of the wraith that killed them."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Wyvern",
  "hd": "7*",
  "hpDice": {
   "n": 7,
   "mod": 0
  },
  "avgHp": 31,
  "ac": 3,
  "acAsc": 16,
  "att": "1 × bite (2d8), 1 × sting (1d6 + poison)",
  "dmg": "2d8",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "90’ (30’) / 240’ (80’) flying",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 850,
  "naDungeon": "1d2",
  "naWild": "1d6",
  "tt": "E",
  "flavor": "Winged, two-legged, dragon-like monsters with a long tail tipped with a venomous stinger. Dwell in any terrain, but favour cliffs and forests.",
  "abilities": [
   {
    "name": "Poison",
    "text": "Causes death (save vs poison)."
   }
  ],
  "spells": [],
  "svNote": "4"
 },
 {
  "name": "Yellow Mould",
  "hd": "2*",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 9,
  "acAsc": 10,
  "att": "1 × spores (1d6 + choking)",
  "dmg": "1d6",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "0",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Neutral",
  "xp": 25,
  "naDungeon": "1d8",
  "naWild": "1d4",
  "tt": "None",
  "flavor": "Deadly fungus that covers walls, ceilings, and other surfaces.",
  "abilities": [
   {
    "name": "Area",
    "text": "Each 10 square feet (e.g. 2’ × 5’) covered in yellow mould is treated as one “individual”. (A 10’ × 10’ area would consist of 10 individual moulds.)"
   },
   {
    "name": "Immunity",
    "text": "Unharmed by all attacks but fire (a burning torch does 1d4 damage)."
   },
   {
    "name": "Spore cloud",
    "text": "50% chance of attacking if touched (or damaged): releases a cloud of spores affecting all within a 10’ cube area."
   },
   {
    "name": "Choking",
    "text": "Save versus death or die within 6 rounds."
   },
   {
    "name": "Erosion",
    "text": "Wood or leather in contact with the mould will be eaten away."
   }
  ],
  "spells": [],
  "acText": "No hit roll required",
  "svNote": "2"
 },
 {
  "name": "Zombie",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 8,
  "acAsc": 11,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 12,
  "al": "Chaotic",
  "xp": 20,
  "naDungeon": "2d4",
  "naWild": "4d6",
  "tt": "None",
  "flavor": "Listless, humanoid corpses, reanimated as guardians by powerful clerics or wizards.",
  "abilities": [
   {
    "name": "Guardians",
    "text": "Always attack on sight."
   },
   {
    "name": "Initiative",
    "text": "Always lose (no roll)."
   },
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Air Elemental (Lesser)",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × blow (1d8)",
  "dmg": "1d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "360’ (120’) flying",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1200,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge vortexes of whirling air.",
  "abilities": [
   {
    "name": "Size",
    "text": "16’ tall, 4’ across / 24’ tall, 6’ across / 32’ tall, 8’ across."
   },
   {
    "name": "Whirlwind",
    "text": "Creatures with less than 2HD swept aside (save versus death)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm flying creatures",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Air Elemental (Intermediate)",
  "hd": "12*",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 0,
  "acAsc": 19,
  "att": "1 × blow (2d8)",
  "dmg": "2d8",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "360’ (120’) flying",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1900,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge vortexes of whirling air.",
  "abilities": [
   {
    "name": "Size",
    "text": "16’ tall, 4’ across / 24’ tall, 6’ across / 32’ tall, 8’ across."
   },
   {
    "name": "Whirlwind",
    "text": "Creatures with less than 2HD swept aside (save versus death)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm flying creatures",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Air Elemental (Greater)",
  "hd": "16*",
  "hpDice": {
   "n": 16,
   "mod": 0
  },
  "avgHp": 72,
  "ac": -2,
  "acAsc": 21,
  "att": "1 × blow (3d8)",
  "dmg": "3d8",
  "thac0": 8,
  "thac0Bonus": "+11",
  "mv": "360’ (120’) flying",
  "sv": {
   "D": 2,
   "W": 3,
   "P": 4,
   "B": 3,
   "S": 6
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge vortexes of whirling air.",
  "abilities": [
   {
    "name": "Size",
    "text": "16’ tall, 4’ across / 24’ tall, 6’ across / 32’ tall, 8’ across."
   },
   {
    "name": "Whirlwind",
    "text": "Creatures with less than 2HD swept aside (save versus death)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm flying creatures",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "16"
 },
 {
  "name": "Earth Elemental (Lesser)",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × blow (1d8)",
  "dmg": "1d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "60’ (20’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1200,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge, humanoid figures of earth or stone.",
  "abilities": [
   {
    "name": "Size",
    "text": "8’ tall / 12’ tall / 16’ tall."
   },
   {
    "name": "Blocked by water",
    "text": "Cannot cross a channel wider than own height."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm creatures on the ground",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Earth Elemental (Intermediate)",
  "hd": "12*",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 0,
  "acAsc": 19,
  "att": "1 × blow (2d8)",
  "dmg": "2d8",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "60’ (20’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1900,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge, humanoid figures of earth or stone.",
  "abilities": [
   {
    "name": "Size",
    "text": "8’ tall / 12’ tall / 16’ tall."
   },
   {
    "name": "Blocked by water",
    "text": "Cannot cross a channel wider than own height."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm creatures on the ground",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Earth Elemental (Greater)",
  "hd": "16*",
  "hpDice": {
   "n": 16,
   "mod": 0
  },
  "avgHp": 72,
  "ac": -2,
  "acAsc": 21,
  "att": "1 × blow (3d8)",
  "dmg": "3d8",
  "thac0": 8,
  "thac0Bonus": "+11",
  "mv": "60’ (20’)",
  "sv": {
   "D": 2,
   "W": 3,
   "P": 4,
   "B": 3,
   "S": 6
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge, humanoid figures of earth or stone.",
  "abilities": [
   {
    "name": "Size",
    "text": "8’ tall / 12’ tall / 16’ tall."
   },
   {
    "name": "Blocked by water",
    "text": "Cannot cross a channel wider than own height."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm creatures on the ground",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "16"
 },
 {
  "name": "Fire Elemental (Lesser)",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × blow (1d8)",
  "dmg": "1d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1200,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Whirling columns of fire",
  "abilities": [
   {
    "name": "Size",
    "text": "8’ tall, 8’ across / 12’ tall, 12’ across / 16’ tall, 16’ across."
   },
   {
    "name": "Blocked by water",
    "text": "Cannot cross a channel wider than own diameter."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm cold-based creatures",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Fire Elemental (Intermediate)",
  "hd": "12*",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 0,
  "acAsc": 19,
  "att": "1 × blow (2d8)",
  "dmg": "2d8",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1900,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Whirling columns of fire",
  "abilities": [
   {
    "name": "Size",
    "text": "8’ tall, 8’ across / 12’ tall, 12’ across / 16’ tall, 16’ across."
   },
   {
    "name": "Blocked by water",
    "text": "Cannot cross a channel wider than own diameter."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm cold-based creatures",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Fire Elemental (Greater)",
  "hd": "16*",
  "hpDice": {
   "n": 16,
   "mod": 0
  },
  "avgHp": 72,
  "ac": -2,
  "acAsc": 21,
  "att": "1 × blow (3d8)",
  "dmg": "3d8",
  "thac0": 8,
  "thac0Bonus": "+11",
  "mv": "120’ (40’)",
  "sv": {
   "D": 2,
   "W": 3,
   "P": 4,
   "B": 3,
   "S": 6
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Whirling columns of fire",
  "abilities": [
   {
    "name": "Size",
    "text": "8’ tall, 8’ across / 12’ tall, 12’ across / 16’ tall, 16’ across."
   },
   {
    "name": "Blocked by water",
    "text": "Cannot cross a channel wider than own diameter."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm cold-based creatures",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "16"
 },
 {
  "name": "Water Elemental (Lesser)",
  "hd": "8*",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × blow (1d8)",
  "dmg": "1d8",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "60’ (20’) / 180’ (60’) swimming",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1200,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge waves of water.",
  "abilities": [
   {
    "name": "Size",
    "text": "4’ tall, 16’ across / 6’ tall, 24’ across / 8’ tall, 32’ across."
   },
   {
    "name": "Water-bound",
    "text": "Must remain within 60’ of water."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm creatures in water",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "8"
 },
 {
  "name": "Water Elemental (Intermediate)",
  "hd": "12*",
  "hpDice": {
   "n": 12,
   "mod": 0
  },
  "avgHp": 54,
  "ac": 0,
  "acAsc": 19,
  "att": "1 × blow (2d8)",
  "dmg": "2d8",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "60’ (20’) / 180’ (60’) swimming",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 1900,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge waves of water.",
  "abilities": [
   {
    "name": "Size",
    "text": "4’ tall, 16’ across / 6’ tall, 24’ across / 8’ tall, 32’ across."
   },
   {
    "name": "Water-bound",
    "text": "Must remain within 60’ of water."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm creatures in water",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "12"
 },
 {
  "name": "Water Elemental (Greater)",
  "hd": "16*",
  "hpDice": {
   "n": 16,
   "mod": 0
  },
  "avgHp": 72,
  "ac": -2,
  "acAsc": 21,
  "att": "1 × blow (3d8)",
  "dmg": "3d8",
  "thac0": 8,
  "thac0Bonus": "+11",
  "mv": "60’ (20’) / 180’ (60’) swimming",
  "sv": {
   "D": 2,
   "W": 3,
   "P": 4,
   "B": 3,
   "S": 6
  },
  "ml": 10,
  "al": "Neutral",
  "xp": 2300,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "None",
  "flavor": "Huge waves of water.",
  "abilities": [
   {
    "name": "Size",
    "text": "4’ tall, 16’ across / 6’ tall, 24’ across / 8’ tall, 32’ across."
   },
   {
    "name": "Water-bound",
    "text": "Must remain within 60’ of water."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Harm creatures in water",
    "text": "Inflict extra 1d8 damage."
   }
  ],
  "spells": [],
  "svNote": "16"
 },
 {
  "name": "Hellhound (3HD)",
  "hd": "3*",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d6) or 1 × breath (1d6 per HD)",
  "dmg": "1d6",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "120’ (40’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 50,
  "naDungeon": "2d4",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Monstrous, cunning, and very intelligent hounds, the size of a small pony. Breathe fire and love heat. Dwell in dungeons or near volcanoes.",
  "abilities": [
   {
    "name": "Fire breath",
    "text": "2-in-6 chance per round of breathing fire. One target. Save versus breath for half damage."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by non-magical fire."
   },
   {
    "name": "Detect invisible",
    "text": "75% chance per round. 60’ range."
   },
   {
    "name": "Pets",
    "text": "Sometimes found with other creatures with an affinity for fire."
   }
  ],
  "spells": []
 },
 {
  "name": "Hellhound (4HD)",
  "hd": "4*",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d6) or 1 × breath (1d6 per HD)",
  "dmg": "1d6",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 125,
  "naDungeon": "2d4",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Monstrous, cunning, and very intelligent hounds, the size of a small pony. Breathe fire and love heat. Dwell in dungeons or near volcanoes.",
  "abilities": [
   {
    "name": "Fire breath",
    "text": "2-in-6 chance per round of breathing fire. One target. Save versus breath for half damage."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by non-magical fire."
   },
   {
    "name": "Detect invisible",
    "text": "75% chance per round. 60’ range."
   },
   {
    "name": "Pets",
    "text": "Sometimes found with other creatures with an affinity for fire."
   }
  ],
  "spells": []
 },
 {
  "name": "Hellhound (5HD)",
  "hd": "5*",
  "hpDice": {
   "n": 5,
   "mod": 0
  },
  "avgHp": 22,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d6) or 1 × breath (1d6 per HD)",
  "dmg": "1d6",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 300,
  "naDungeon": "2d4",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Monstrous, cunning, and very intelligent hounds, the size of a small pony. Breathe fire and love heat. Dwell in dungeons or near volcanoes.",
  "abilities": [
   {
    "name": "Fire breath",
    "text": "2-in-6 chance per round of breathing fire. One target. Save versus breath for half damage."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by non-magical fire."
   },
   {
    "name": "Detect invisible",
    "text": "75% chance per round. 60’ range."
   },
   {
    "name": "Pets",
    "text": "Sometimes found with other creatures with an affinity for fire."
   }
  ],
  "spells": []
 },
 {
  "name": "Hellhound (6HD)",
  "hd": "6*",
  "hpDice": {
   "n": 6,
   "mod": 0
  },
  "avgHp": 27,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d6) or 1 × breath (1d6 per HD)",
  "dmg": "1d6",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 500,
  "naDungeon": "2d4",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Monstrous, cunning, and very intelligent hounds, the size of a small pony. Breathe fire and love heat. Dwell in dungeons or near volcanoes.",
  "abilities": [
   {
    "name": "Fire breath",
    "text": "2-in-6 chance per round of breathing fire. One target. Save versus breath for half damage."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by non-magical fire."
   },
   {
    "name": "Detect invisible",
    "text": "75% chance per round. 60’ range."
   },
   {
    "name": "Pets",
    "text": "Sometimes found with other creatures with an affinity for fire."
   }
  ],
  "spells": []
 },
 {
  "name": "Hellhound (7HD)",
  "hd": "7*",
  "hpDice": {
   "n": 7,
   "mod": 0
  },
  "avgHp": 31,
  "ac": 4,
  "acAsc": 15,
  "att": "1 × bite (1d6) or 1 × breath (1d6 per HD)",
  "dmg": "1d6",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Chaotic",
  "xp": 850,
  "naDungeon": "2d4",
  "naWild": "2d4",
  "tt": "C",
  "flavor": "Monstrous, cunning, and very intelligent hounds, the size of a small pony. Breathe fire and love heat. Dwell in dungeons or near volcanoes.",
  "abilities": [
   {
    "name": "Fire breath",
    "text": "2-in-6 chance per round of breathing fire. One target. Save versus breath for half damage."
   },
   {
    "name": "Fire immunity",
    "text": "Unharmed by non-magical fire."
   },
   {
    "name": "Detect invisible",
    "text": "75% chance per round. 60’ range."
   },
   {
    "name": "Pets",
    "text": "Sometimes found with other creatures with an affinity for fire."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (5HD)",
  "hd": "5",
  "hpDice": {
   "special": "40"
  },
  "avgHp": 40,
  "ac": 5,
  "acAsc": 14,
  "att": "5 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 15,
  "thac0Bonus": "+4",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 175,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (6HD)",
  "hd": "6",
  "hpDice": {
   "special": "48"
  },
  "avgHp": 48,
  "ac": 5,
  "acAsc": 14,
  "att": "6 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 14,
  "thac0Bonus": "+5",
  "mv": "120’ (40’)",
  "sv": {
   "D": 10,
   "W": 11,
   "P": 12,
   "B": 13,
   "S": 14
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 275,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (7HD)",
  "hd": "7",
  "hpDice": {
   "special": "56"
  },
  "avgHp": 56,
  "ac": 5,
  "acAsc": 14,
  "att": "7 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 450,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (8HD)",
  "hd": "8",
  "hpDice": {
   "special": "64"
  },
  "avgHp": 64,
  "ac": 5,
  "acAsc": 14,
  "att": "8 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 650,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (9HD)",
  "hd": "9",
  "hpDice": {
   "special": "72"
  },
  "avgHp": 72,
  "ac": 5,
  "acAsc": 14,
  "att": "9 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 900,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (10HD)",
  "hd": "10",
  "hpDice": {
   "special": "80"
  },
  "avgHp": 80,
  "ac": 5,
  "acAsc": 14,
  "att": "10 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 900,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (11HD)",
  "hd": "11",
  "hpDice": {
   "special": "88"
  },
  "avgHp": 88,
  "ac": 5,
  "acAsc": 14,
  "att": "11 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 11,
  "thac0Bonus": "+8",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 1100,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Hydra (12HD)",
  "hd": "12",
  "hpDice": {
   "special": "96"
  },
  "avgHp": 96,
  "ac": 5,
  "acAsc": 14,
  "att": "12 × bite (1d10)",
  "dmg": "1d10",
  "thac0": 10,
  "thac0Bonus": "+9",
  "mv": "120’ (40’)",
  "sv": {
   "D": 6,
   "W": 7,
   "P": 8,
   "B": 8,
   "S": 10
  },
  "ml": 9,
  "al": "Neutral",
  "xp": 1100,
  "naDungeon": "1",
  "naWild": "1",
  "tt": "B",
  "flavor": "Large, dragon-like creatures with multiple, serpentine heads. Sea hydras (adapted to water, with fins) also exist.",
  "abilities": [
   {
    "name": "Heads",
    "text": "1d8+4 heads; 1HD per head."
   },
   {
    "name": "Disabling heads",
    "text": "For every 8hp damage taken, one head is disabled (cannot attack)."
   },
   {
    "name": "Variants",
    "text": "Special hydras sometimes found with venom, fiery breath, etc."
   }
  ],
  "spells": []
 },
 {
  "name": "Insect Swarm (2HD)",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × swarm (2 or 4hp)",
  "dmg": "",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "30’ (10’) / 60’ (20’) flying",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 11,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "1",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "Swarms of many tiny insects that may be encountered protecting their nest. May also be drawn to light or unusual smells.",
  "abilities": [
   {
    "name": "Type and locomotion",
    "text": "A swarm may be composed of creepers (e.g. spiders, ants, centipedes) or flyers (e.g. bees, hornets). Some swarms are capable of both types of movement (e.g. beetles, locusts)."
   },
   {
    "name": "Size",
    "text": "10’ × 30’ area, typically."
   },
   {
    "name": "Immunity",
    "text": "Only harmed by fire, extreme cold, sleep spells (affect the whole swarm), smoke (drives off), or other attacks as the referee wishes."
   },
   {
    "name": "Swarm attack",
    "text": "Automatically damages characters within swarm area: 2hp if wearing armour, 4hp without."
   },
   {
    "name": "Warding ofi",
    "text": "Characters inside the swarm who defend themselves by brandishing a weapon (or similar) suffer half damage from the swarm. A brandished torch damages the swarm."
   },
   {
    "name": "Escaping",
    "text": "On exiting the swarm, characters continue to suffer half damage until 3 rounds are spent swatting the attached insects."
   },
   {
    "name": "Diving into water",
    "text": "Suffer damage for one round, then attached insects drown."
   },
   {
    "name": "Pursuit",
    "text": "An angry (i.e. damaged) swarm will pursue characters until they are out of sight or inaccessible."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Insect Swarm (3HD)",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × swarm (2 or 4hp)",
  "dmg": "",
  "thac0": 17,
  "thac0Bonus": "+2",
  "mv": "30’ (10’) / 60’ (20’) flying",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 11,
  "al": "Neutral",
  "xp": 35,
  "naDungeon": "1",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "Swarms of many tiny insects that may be encountered protecting their nest. May also be drawn to light or unusual smells.",
  "abilities": [
   {
    "name": "Type and locomotion",
    "text": "A swarm may be composed of creepers (e.g. spiders, ants, centipedes) or flyers (e.g. bees, hornets). Some swarms are capable of both types of movement (e.g. beetles, locusts)."
   },
   {
    "name": "Size",
    "text": "10’ × 30’ area, typically."
   },
   {
    "name": "Immunity",
    "text": "Only harmed by fire, extreme cold, sleep spells (affect the whole swarm), smoke (drives off), or other attacks as the referee wishes."
   },
   {
    "name": "Swarm attack",
    "text": "Automatically damages characters within swarm area: 2hp if wearing armour, 4hp without."
   },
   {
    "name": "Warding ofi",
    "text": "Characters inside the swarm who defend themselves by brandishing a weapon (or similar) suffer half damage from the swarm. A brandished torch damages the swarm."
   },
   {
    "name": "Escaping",
    "text": "On exiting the swarm, characters continue to suffer half damage until 3 rounds are spent swatting the attached insects."
   },
   {
    "name": "Diving into water",
    "text": "Suffer damage for one round, then attached insects drown."
   },
   {
    "name": "Pursuit",
    "text": "An angry (i.e. damaged) swarm will pursue characters until they are out of sight or inaccessible."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Insect Swarm (4HD)",
  "hd": "4",
  "hpDice": {
   "n": 4,
   "mod": 0
  },
  "avgHp": 18,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × swarm (2 or 4hp)",
  "dmg": "",
  "thac0": 16,
  "thac0Bonus": "+3",
  "mv": "30’ (10’) / 60’ (20’) flying",
  "sv": {
   "D": 14,
   "W": 15,
   "P": 16,
   "B": 17,
   "S": 18
  },
  "ml": 11,
  "al": "Neutral",
  "xp": 75,
  "naDungeon": "1",
  "naWild": "1d3",
  "tt": "None",
  "flavor": "Swarms of many tiny insects that may be encountered protecting their nest. May also be drawn to light or unusual smells.",
  "abilities": [
   {
    "name": "Type and locomotion",
    "text": "A swarm may be composed of creepers (e.g. spiders, ants, centipedes) or flyers (e.g. bees, hornets). Some swarms are capable of both types of movement (e.g. beetles, locusts)."
   },
   {
    "name": "Size",
    "text": "10’ × 30’ area, typically."
   },
   {
    "name": "Immunity",
    "text": "Only harmed by fire, extreme cold, sleep spells (affect the whole swarm), smoke (drives off), or other attacks as the referee wishes."
   },
   {
    "name": "Swarm attack",
    "text": "Automatically damages characters within swarm area: 2hp if wearing armour, 4hp without."
   },
   {
    "name": "Warding ofi",
    "text": "Characters inside the swarm who defend themselves by brandishing a weapon (or similar) suffer half damage from the swarm. A brandished torch damages the swarm."
   },
   {
    "name": "Escaping",
    "text": "On exiting the swarm, characters continue to suffer half damage until 3 rounds are spent swatting the attached insects."
   },
   {
    "name": "Diving into water",
    "text": "Suffer damage for one round, then attached insects drown."
   },
   {
    "name": "Pursuit",
    "text": "An angry (i.e. damaged) swarm will pursue characters until they are out of sight or inaccessible."
   }
  ],
  "spells": [],
  "svNote": "NH"
 },
 {
  "name": "Small Herd Animal (1HD)",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × butt (1d4)",
  "dmg": "1d4",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 5,
  "al": "Neutral",
  "xp": 10,
  "naDungeon": "0",
  "naWild": "3d10",
  "tt": "None",
  "flavor": "For example: antelope, deer, goats.",
  "abilities": [
   {
    "name": "Males",
    "text": "In groups of 3 or more, only 1-in-4 are males. These have 1d4 extra hit points and protect the herd."
   },
   {
    "name": "Females and young",
    "text": "Flee from danger. Females do not have a butt attack. Young have half normal hit points."
   },
   {
    "name": "Stampede",
    "text": "Herds of 20 or more can trample those in their path. 3-in-4 chance each round. +4 to-hit human-sized or smaller creatures. 1d20 damage."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Small Herd Animal (2HD)",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 7,
  "acAsc": 12,
  "att": "1 × butt (1d4)",
  "dmg": "1d4",
  "thac0": 18,
  "thac0Bonus": "+1",
  "mv": "240’ (80’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 5,
  "al": "Neutral",
  "xp": 20,
  "naDungeon": "0",
  "naWild": "3d10",
  "tt": "None",
  "flavor": "For example: antelope, deer, goats.",
  "abilities": [
   {
    "name": "Males",
    "text": "In groups of 3 or more, only 1-in-4 are males. These have 1d4 extra hit points and protect the herd."
   },
   {
    "name": "Females and young",
    "text": "Flee from danger. Females do not have a butt attack. Young have half normal hit points."
   },
   {
    "name": "Stampede",
    "text": "Herds of 20 or more can trample those in their path. 3-in-4 chance each round. +4 to-hit human-sized or smaller creatures. 1d20 damage."
   }
  ],
  "spells": [],
  "svNote": "1"
 },
 {
  "name": "Vampire (7HD)",
  "hd": "7**",
  "hpDice": {
   "n": 7,
   "mod": 0
  },
  "avgHp": 31,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × touch (1d10 + energy drain) or 1 × gaze (charm)",
  "dmg": "1d10",
  "thac0": 13,
  "thac0Bonus": "+6",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 1250,
  "naDungeon": "1d4",
  "naWild": "1d6",
  "tt": "F",
  "flavor": "Greatly feared undead monsters that live by drinking the blood of mortals. Dwell in ruins, tombs, and deserted locales.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Energy drain",
    "text": "A successfully touched target permanently loses two experience levels (or Hit Dice). This incurs a loss of two Hit Dice of hit points, as well as all other benefits due to the drained levels (e.g. spells, saving throws, etc.). A character’s XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a vampire in 3 days."
   },
   {
    "name": "Charming gaze",
    "text": "Save versus spells at –2 or be charmed: move towards the vampire (resisting those who try to prevent it); defend the vampire; obey the vampire’s commands (if understood); unable to cast spells or use magic items; unable to harm the vampire. Killing the vampire breaks the charm."
   },
   {
    "name": "Regeneration",
    "text": "A damaged vampire gains 3hp at the start of each round, as long as it is alive."
   },
   {
    "name": "At 0hp",
    "text": "Change into gaseous form; flee to coffin."
   },
   {
    "name": "Change form",
    "text": "At will; takes 1 round: a. Humanoid: Standard form. b. Dire wolf: Att 1 × bite (2d4), MV 150’ (50’). AC, HD, morale, saves as vampire. c. Giant bat: Att 1 × bite (1d4), MV 30’ (10’) / 180’ (60’) flying. AC, HD, morale, saves as vampire. d. Gaseous cloud: MV 180’ (60’) flying. Immune to all weapons. Cannot attack."
   },
   {
    "name": "Summon beasts",
    "text": "In human form only. Creatures from the surrounding area: 1d10 × 10 rats (p49), 5d4 giant rats (p49), 1d10 × 10 bats (p5), 3d6 giant bats (p5), 3d6 wolves (p66), or 2d4 dire wolves (p66)."
   },
   {
    "name": "Coftns",
    "text": "Must rest in a coffin during the day or lose 2d6hp (only regenerated by resting a full day). Cannot rest in a blessed coffin. Always keep multiple coffins in hidden locations."
   },
   {
    "name": "Vulnerabilities",
    "text": "a. Garlic: Odour repels: save vs poison or unable to attack this round. b. Holy symbols: If presented, will keep a vampire at bay (10’). May attack wielder from another direction. c. Running water: Cannot cross (in any form), except by a bridge or carried inside a coffin. d. Mirrors: Avoid; do not cast a reflection. e. Continual light: Partly blinded by the light from this spell (–4 to attacks)."
   },
   {
    "name": "Destroying",
    "text": "a. Sunlight: Save versus death each round or be disintegrated. b. Stake through the heart: Permanently kills. c. Immersion in water: For 1 turn permanently kills. d. Destroying coffins: Permanently killed if all hit points lost when unable to rest (see coffins)."
   }
  ],
  "spells": [],
  "svNote": "7 to 9"
 },
 {
  "name": "Vampire (8HD)",
  "hd": "8**",
  "hpDice": {
   "n": 8,
   "mod": 0
  },
  "avgHp": 36,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × touch (1d10 + energy drain) or 1 × gaze (charm)",
  "dmg": "1d10",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 1750,
  "naDungeon": "1d4",
  "naWild": "1d6",
  "tt": "F",
  "flavor": "Greatly feared undead monsters that live by drinking the blood of mortals. Dwell in ruins, tombs, and deserted locales.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Energy drain",
    "text": "A successfully touched target permanently loses two experience levels (or Hit Dice). This incurs a loss of two Hit Dice of hit points, as well as all other benefits due to the drained levels (e.g. spells, saving throws, etc.). A character’s XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a vampire in 3 days."
   },
   {
    "name": "Charming gaze",
    "text": "Save versus spells at –2 or be charmed: move towards the vampire (resisting those who try to prevent it); defend the vampire; obey the vampire’s commands (if understood); unable to cast spells or use magic items; unable to harm the vampire. Killing the vampire breaks the charm."
   },
   {
    "name": "Regeneration",
    "text": "A damaged vampire gains 3hp at the start of each round, as long as it is alive."
   },
   {
    "name": "At 0hp",
    "text": "Change into gaseous form; flee to coffin."
   },
   {
    "name": "Change form",
    "text": "At will; takes 1 round: a. Humanoid: Standard form. b. Dire wolf: Att 1 × bite (2d4), MV 150’ (50’). AC, HD, morale, saves as vampire. c. Giant bat: Att 1 × bite (1d4), MV 30’ (10’) / 180’ (60’) flying. AC, HD, morale, saves as vampire. d. Gaseous cloud: MV 180’ (60’) flying. Immune to all weapons. Cannot attack."
   },
   {
    "name": "Summon beasts",
    "text": "In human form only. Creatures from the surrounding area: 1d10 × 10 rats (p49), 5d4 giant rats (p49), 1d10 × 10 bats (p5), 3d6 giant bats (p5), 3d6 wolves (p66), or 2d4 dire wolves (p66)."
   },
   {
    "name": "Coftns",
    "text": "Must rest in a coffin during the day or lose 2d6hp (only regenerated by resting a full day). Cannot rest in a blessed coffin. Always keep multiple coffins in hidden locations."
   },
   {
    "name": "Vulnerabilities",
    "text": "a. Garlic: Odour repels: save vs poison or unable to attack this round. b. Holy symbols: If presented, will keep a vampire at bay (10’). May attack wielder from another direction. c. Running water: Cannot cross (in any form), except by a bridge or carried inside a coffin. d. Mirrors: Avoid; do not cast a reflection. e. Continual light: Partly blinded by the light from this spell (–4 to attacks)."
   },
   {
    "name": "Destroying",
    "text": "a. Sunlight: Save versus death each round or be disintegrated. b. Stake through the heart: Permanently kills. c. Immersion in water: For 1 turn permanently kills. d. Destroying coffins: Permanently killed if all hit points lost when unable to rest (see coffins)."
   }
  ],
  "spells": [],
  "svNote": "7 to 9"
 },
 {
  "name": "Vampire (9HD)",
  "hd": "9**",
  "hpDice": {
   "n": 9,
   "mod": 0
  },
  "avgHp": 40,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × touch (1d10 + energy drain) or 1 × gaze (charm)",
  "dmg": "1d10",
  "thac0": 12,
  "thac0Bonus": "+7",
  "mv": "120’ (40’)",
  "sv": {
   "D": 8,
   "W": 9,
   "P": 10,
   "B": 10,
   "S": 12
  },
  "ml": 11,
  "al": "Chaotic",
  "xp": 2300,
  "naDungeon": "1d4",
  "naWild": "1d6",
  "tt": "F",
  "flavor": "Greatly feared undead monsters that live by drinking the blood of mortals. Dwell in ruins, tombs, and deserted locales.",
  "abilities": [
   {
    "name": "Undead",
    "text": "Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."
   },
   {
    "name": "Mundane damage immunity",
    "text": "Can only be harmed by magical attacks."
   },
   {
    "name": "Energy drain",
    "text": "A successfully touched target permanently loses two experience levels (or Hit Dice). This incurs a loss of two Hit Dice of hit points, as well as all other benefits due to the drained levels (e.g. spells, saving throws, etc.). A character’s XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a vampire in 3 days."
   },
   {
    "name": "Charming gaze",
    "text": "Save versus spells at –2 or be charmed: move towards the vampire (resisting those who try to prevent it); defend the vampire; obey the vampire’s commands (if understood); unable to cast spells or use magic items; unable to harm the vampire. Killing the vampire breaks the charm."
   },
   {
    "name": "Regeneration",
    "text": "A damaged vampire gains 3hp at the start of each round, as long as it is alive."
   },
   {
    "name": "At 0hp",
    "text": "Change into gaseous form; flee to coffin."
   },
   {
    "name": "Change form",
    "text": "At will; takes 1 round: a. Humanoid: Standard form. b. Dire wolf: Att 1 × bite (2d4), MV 150’ (50’). AC, HD, morale, saves as vampire. c. Giant bat: Att 1 × bite (1d4), MV 30’ (10’) / 180’ (60’) flying. AC, HD, morale, saves as vampire. d. Gaseous cloud: MV 180’ (60’) flying. Immune to all weapons. Cannot attack."
   },
   {
    "name": "Summon beasts",
    "text": "In human form only. Creatures from the surrounding area: 1d10 × 10 rats (p49), 5d4 giant rats (p49), 1d10 × 10 bats (p5), 3d6 giant bats (p5), 3d6 wolves (p66), or 2d4 dire wolves (p66)."
   },
   {
    "name": "Coftns",
    "text": "Must rest in a coffin during the day or lose 2d6hp (only regenerated by resting a full day). Cannot rest in a blessed coffin. Always keep multiple coffins in hidden locations."
   },
   {
    "name": "Vulnerabilities",
    "text": "a. Garlic: Odour repels: save vs poison or unable to attack this round. b. Holy symbols: If presented, will keep a vampire at bay (10’). May attack wielder from another direction. c. Running water: Cannot cross (in any form), except by a bridge or carried inside a coffin. d. Mirrors: Avoid; do not cast a reflection. e. Continual light: Partly blinded by the light from this spell (–4 to attacks)."
   },
   {
    "name": "Destroying",
    "text": "a. Sunlight: Save versus death each round or be disintegrated. b. Stake through the heart: Permanently kills. c. Immersion in water: For 1 turn permanently kills. d. Destroying coffins: Permanently killed if all hit points lost when unable to rest (see coffins)."
   }
  ],
  "spells": [],
  "svNote": "7 to 9"
 },
 {
  "name": "Veteran (Level 1)",
  "hd": "1",
  "hpDice": {
   "n": 1,
   "mod": 0
  },
  "avgHp": 4,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Any",
  "xp": 10,
  "naDungeon": "2d4",
  "naWild": "2d6",
  "tt": "V",
  "flavor": "Low level fighters, often on their way to or from war.",
  "abilities": [
   {
    "name": "Level and alignment",
    "text": "A group may all be of the same level and alignment, or these may be determined randomly, per individual."
   }
  ],
  "spells": [],
  "svNote": "F1"
 },
 {
  "name": "Veteran (Level 2)",
  "hd": "2",
  "hpDice": {
   "n": 2,
   "mod": 0
  },
  "avgHp": 9,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Any",
  "xp": 20,
  "naDungeon": "2d4",
  "naWild": "2d6",
  "tt": "V",
  "flavor": "Low level fighters, often on their way to or from war.",
  "abilities": [
   {
    "name": "Level and alignment",
    "text": "A group may all be of the same level and alignment, or these may be determined randomly, per individual."
   }
  ],
  "spells": [],
  "svNote": "F2"
 },
 {
  "name": "Veteran (Level 3)",
  "hd": "3",
  "hpDice": {
   "n": 3,
   "mod": 0
  },
  "avgHp": 13,
  "ac": 2,
  "acAsc": 17,
  "att": "1 × weapon (1d8 or by weapon)",
  "dmg": "1d8",
  "thac0": 19,
  "thac0Bonus": "0",
  "mv": "60’ (20’)",
  "sv": {
   "D": 12,
   "W": 13,
   "P": 14,
   "B": 15,
   "S": 16
  },
  "ml": 9,
  "al": "Any",
  "xp": 35,
  "naDungeon": "2d4",
  "naWild": "2d6",
  "tt": "V",
  "flavor": "Low level fighters, often on their way to or from war.",
  "abilities": [
   {
    "name": "Level and alignment",
    "text": "A group may all be of the same level and alignment, or these may be determined randomly, per individual."
   }
  ],
  "spells": [],
  "svNote": "F3"
 }
];

/** Names used in earlier versions, mapped to their current entry. */
export const RENAMED: Record<string, string> = { Wolf: "Normal Wolf" };
