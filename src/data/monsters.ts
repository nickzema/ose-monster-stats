// Verified OSE Classic Monsters starter roster. Every stat transcribed from the book;
// do not add monsters here without checking them against the source.
import type { Monster } from "../types";

export const BASE_MONSTERS: Monster[] = [
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
    "att": "1 x beak (1d6 + petrification)",
    "dmg": "1d6",
    "thac0": 15,
    "thac0Bonus": "+4",
    "mv": "90' (30') / 180' (60') flying",
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
    "flavor": "Small, magical, bird/reptile hybrids with long serpent tails and the head, legs, and wings of a cockerel. Live in all environments.",
    "abilities": [
      {
        "name": "Petrification",
        "text": "Anyone touched is turned to stone (save versus petrify)."
      }
    ],
    "spells": []
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
    "att": "1 x weapon (1d6 or by weapon)",
    "dmg": "1d6",
    "thac0": 19,
    "thac0Bonus": "0",
    "mv": "120' (40')",
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
    "naWild": "1d6x10",
    "tt": "D",
    "flavor": "Ugly, bad-tempered, animalistic humanoids who live underground and are active at night.",
    "abilities": [
      {
        "name": "Hate the sun",
        "text": "-1 to-hit in full daylight."
      }
    ],
    "spells": []
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
    "att": "2 x claw (1d8), 1 x bite (1d8)",
    "dmg": "1d8",
    "thac0": 15,
    "thac0Bonus": "+4",
    "mv": "120' (40')",
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
    "flavor": "Huge (8' tall, 1,500 pounds), ill-tempered, carnivorous bear-like creature with the face of an owl.",
    "abilities": [
      {
        "name": "Bear hug",
        "text": "If a victim is hit by both paws in the same round, the owl bear hugs for an extra 2d8 automatic damage."
      }
    ],
    "spells": []
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
    "att": "1 x weapon (1d6 or by weapon)",
    "dmg": "1d6",
    "thac0": 19,
    "thac0Bonus": "0",
    "mv": "60' (20')",
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
    "flavor": "Skeletal remains of humanoids, reanimated as guardians by powerful magic-users or clerics.",
    "abilities": [
      {
        "name": "Undead",
        "text": "Make no noise until they attack. Immune to effects that affect living creatures, and to mind-affecting or mind-reading spells."
      }
    ],
    "spells": []
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
    "att": "2 x talon (1d6), 1 x bite (1d10)",
    "dmg": "1d6",
    "thac0": 13,
    "thac0Bonus": "+6",
    "mv": "120' (40')",
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
    "flavor": "Intelligent, wicked, 8' tall humanoids with emaciated, rubbery bodies. Consume the flesh of other humanoids.",
    "abilities": [
      {
        "name": "Regeneration",
        "text": "3 rounds after being damaged, starts regaining 3hp per round. Severed limbs reattach. Cannot regenerate fire or acid damage."
      }
    ],
    "spells": []
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
    "att": "1 x club (1d10)",
    "dmg": "1d10",
    "thac0": 15,
    "thac0Bonus": "+4",
    "mv": "90' (30')",
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
    "flavor": "Frightful humanoids, 8-10' tall, dressed in animal hides. Often dwell in caves.",
    "abilities": [
      {
        "name": "Hate neanderthals",
        "text": "Attack on sight."
      }
    ],
    "spells": []
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
    "att": "1 x weapon (1d6 or by weapon)",
    "dmg": "1d6",
    "thac0": 19,
    "thac0Bonus": "0",
    "mv": "60' (20')",
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
        "name": "Hate the sun",
        "text": "-1 to-hit in full daylight."
      }
    ],
    "spells": []
  },
  {
    "name": "Kobold",
    "hd": "1/2",
    "hpDice": {
      "special": "1d4"
    },
    "avgHp": 2,
    "ac": 7,
    "acAsc": 12,
    "att": "1 x weapon (1d4 or by weapon - 1)",
    "dmg": "1d4",
    "thac0": 19,
    "thac0Bonus": "0",
    "mv": "60' (20')",
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
      }
    ],
    "spells": []
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
    "att": "1 x weapon (1d8 or by weapon)",
    "dmg": "1d8",
    "thac0": 18,
    "thac0Bonus": "+1",
    "mv": "60' (20')",
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
        "name": "Undead",
        "text": "Always attack on sight, and always lose initiative. Immune to effects that affect living creatures."
      }
    ],
    "spells": []
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
    "att": "1 x weapon (1d8 or by weapon)",
    "dmg": "1d8",
    "thac0": 18,
    "thac0Bonus": "+1",
    "mv": "90' (30')",
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
    "abilities": [],
    "spells": []
  },
  {
    "name": "Killer Bee",
    "hd": "1/2*",
    "hpDice": {
      "special": "1d4"
    },
    "avgHp": 2,
    "ac": 7,
    "acAsc": 12,
    "att": "1 x sting (1d3 + poison + lodged stinger)",
    "dmg": "1d3",
    "thac0": 19,
    "thac0Bonus": "0",
    "mv": "150' (50') flying",
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
    "naDungeon": "1d10",
    "naWild": "5d6",
    "tt": "Honey",
    "flavor": "Giant (1' long) bees of aggressive temperament. Build hives underground.",
    "abilities": [
      {
        "name": "Poison",
        "text": "Sting causes death (save vs poison). The bee dies after a successful sting."
      }
    ],
    "spells": []
  },
  {
    "name": "Wolf",
    "hd": "2+2",
    "hpDice": {
      "n": 2,
      "mod": 2
    },
    "avgHp": 11,
    "ac": 7,
    "acAsc": 12,
    "att": "1 x bite (1d6)",
    "dmg": "1d6",
    "thac0": 17,
    "thac0Bonus": "+2",
    "mv": "180' (60')",
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
    "flavor": "Carnivorous relatives of dogs that hunt in packs. Dwell primarily in wild lands.",
    "abilities": [
      {
        "name": "Strength in numbers",
        "text": "Packs of 4 or more wolves have morale 8, lost if reduced below half the pack's original size."
      }
    ],
    "spells": []
  }
];
