// Wilderness and dungeon encounter tables, verified against OSE Classic Monsters.

export interface Terrain { label: string; rows: string[] } // rows: "<subKey>-<category>", indexed by d8 - 1

export const WILD_D8: Record<string, Terrain> = {
  "barren": {
    "label": "Barren, Hills, Mountains",
    "rows": [
      "B-Animal",
      "1-Dragon",
      "1-Dragon",
      "B-Flyer",
      "B-Human",
      "B-Humanoid",
      "B-Humanoid",
      "2-Unusual"
    ]
  },
  "forest": {
    "label": "Forest",
    "rows": [
      "F-Animal",
      "F-Animal",
      "1-Dragon",
      "1-Flyer",
      "F-Human",
      "F-Humanoid",
      "1-Insect",
      "2-Unusual"
    ]
  },
  "grasslands": {
    "label": "Clear, Grasslands",
    "rows": [
      "G-Animal",
      "G-Animal",
      "1-Dragon",
      "1-Flyer",
      "G-Human",
      "G-Humanoid",
      "1-Insect",
      "2-Unusual"
    ]
  }
};

export const WILD_NOT_LOADED: string[] = [
  "City",
  "Desert",
  "Jungle",
  "Lake, River",
  "Ocean, Sea",
  "Settled",
  "Swamp"
];

// Sub-table key -> category -> 12 entries (d12)
export const SUBTABLES: Record<string, Record<string, string[]>> = {
  "1": {
    "Dragon": [
      "Chimera",
      "Dragon, Black",
      "Dragon, Blue",
      "Dragon, Gold",
      "Dragon, Green",
      "Dragon, Red",
      "Dragon, White",
      "Hydra",
      "Hydra",
      "Wyvern",
      "Basilisk",
      "Salamander"
    ],
    "Flyer": [
      "Cockatrice",
      "Gargoyle",
      "Griffon",
      "Hawk, Giant",
      "Hippogriff",
      "Killer Bee",
      "Pegasus",
      "Pixie",
      "Robber Fly",
      "Roc, Small",
      "Sprite",
      "Stirge"
    ],
    "Insect": [
      "Beetle, Fire",
      "Beetle, Oil",
      "Beetle, Tiger",
      "Driver Ant",
      "Driver Ant",
      "Killer Bee",
      "Rhagodessa",
      "Robber Fly",
      "Scorpion, Giant",
      "Spider, Black Widow",
      "Spider, Crab",
      "Spider, Tarantella"
    ]
  },
  "2": {
    "Prehistoric Animal": [
      "Bear, Cave",
      "Cat, Sabre-Toothed",
      "Crocodile, Giant",
      "Mastodon",
      "Pterosaur, Pteranodon",
      "Rhino, Woolly",
      "Snake, Pit Viper",
      "Stegosaurus",
      "Titanothere",
      "Triceratops",
      "Tyrannosaurus Rex",
      "Wolf, Dire"
    ],
    "Undead": [
      "Ghoul",
      "Ghoul",
      "Ghoul",
      "Mummy",
      "Skeleton",
      "Skeleton",
      "Spectre",
      "Wight",
      "Wraith",
      "Vampire",
      "Zombie",
      "Zombie"
    ],
    "Unusual": [
      "Basilisk",
      "Blink Dog",
      "Centaur",
      "Gorgon",
      "Lycanthrope, Werebear",
      "Lycanthrope, Wereboar",
      "Lycanthrope, Wererat",
      "Lycanthrope, Weretiger",
      "Lycanthrope, Werewolf",
      "Medusa",
      "Treant",
      "Warp Beast"
    ]
  },
  "B": {
    "Animal": [
      "Ape, White",
      "Ape, White",
      "Bear, Cave",
      "Cat, Mountain Lion",
      "Hawk",
      "Herd Animal",
      "Mule",
      "Rock Baboon",
      "Snake, Pit Viper",
      "Snake, Rattler",
      "Wolf",
      "Wolf, Dire"
    ],
    "Flyer": [
      "Gargoyle",
      "Griffon",
      "Harpy",
      "Hawk",
      "Hawk, Giant",
      "Hippogriff",
      "Manticore",
      "Manticore",
      "Pegasus",
      "Roc, Small",
      "Roc, Large",
      "Roc, Giant"
    ],
    "Human": [
      "Bandit",
      "Berserker",
      "Berserker",
      "Brigand",
      "Brigand",
      "Expert Adventurers",
      "High-Level Cleric",
      "High-Level Fighter",
      "High-Level Magic-User",
      "Merchant",
      "Neanderthal",
      "Neanderthal"
    ],
    "Humanoid": [
      "Dwarf",
      "Giant, Cloud",
      "Giant, Frost",
      "Giant, Hill",
      "Giant, Stone",
      "Giant, Storm",
      "Gnome",
      "Goblin",
      "Kobold",
      "Orc",
      "Troglodyte",
      "Troll"
    ]
  },
  "F": {
    "Animal": [
      "Boar",
      "Cat, Panther",
      "Cat, Tiger",
      "Hawk",
      "Herd Animal",
      "Lizard, Gecko",
      "Lizard, Tuatara",
      "Snake, Pit Viper",
      "Spider, Crab",
      "Unicorn",
      "Wolf",
      "Wolf, Dire"
    ],
    "Human": [
      "Basic Adventurers",
      "Bandit",
      "Bandit",
      "Berserker",
      "Brigand",
      "Brigand",
      "Brigand",
      "Expert Adventurers",
      "High-Level Cleric",
      "High-Level Fighter",
      "High-Level Magic-User",
      "Merchant"
    ],
    "Humanoid": [
      "Bugbear",
      "Cyclops",
      "Dryad",
      "Elf",
      "Giant, Hill",
      "Gnoll",
      "Goblin",
      "Hobgoblin",
      "Ogre",
      "Orc",
      "Thoul",
      "Troll"
    ]
  },
  "G": {
    "Animal": [
      "Boar",
      "Cat, Lion",
      "Elephant",
      "Ferret, Giant",
      "Hawk, Giant",
      "Herd Animal",
      "Horse, Wild",
      "Mule",
      "Rock Baboon",
      "Snake, Pit Viper",
      "Snake, Rattler",
      "Weasel, Giant"
    ],
    "Human": [
      "Bandit",
      "Bandit",
      "Berserker",
      "Brigand",
      "Expert Adventurers",
      "High-Level Cleric",
      "High-Level Fighter",
      "High-Level Magic-User",
      "Merchant",
      "Merchant",
      "Noble",
      "Nomad"
    ],
    "Humanoid": [
      "Bugbear",
      "Elf",
      "Giant, Hill",
      "Gnoll",
      "Goblin",
      "Halfling",
      "Hobgoblin",
      "Ogre",
      "Orc",
      "Pixie",
      "Thoul",
      "Troll"
    ]
  }
};

export interface DungeonEntry { name: string; na: string }

export const DUNGEON_LEVEL_1: DungeonEntry[] = [
  {
    "name": "Acolyte",
    "na": "1d8"
  },
  {
    "name": "Bandit",
    "na": "1d8"
  },
  {
    "name": "Beetle, Fire",
    "na": "1d8"
  },
  {
    "name": "Dwarf",
    "na": "1d6"
  },
  {
    "name": "Gnome",
    "na": "1d6"
  },
  {
    "name": "Goblin",
    "na": "2d4"
  },
  {
    "name": "Green Slime",
    "na": "1d4"
  },
  {
    "name": "Halfling",
    "na": "3d6"
  },
  {
    "name": "Killer Bee",
    "na": "1d10"
  },
  {
    "name": "Kobold",
    "na": "4d4"
  },
  {
    "name": "Lizard, Gecko",
    "na": "1d3"
  },
  {
    "name": "Orc",
    "na": "2d4"
  },
  {
    "name": "Shrew, Giant",
    "na": "1d10"
  },
  {
    "name": "Skeleton",
    "na": "3d4"
  },
  {
    "name": "Snake, Cobra",
    "na": "1d6"
  },
  {
    "name": "Spider, Crab",
    "na": "1d4"
  },
  {
    "name": "Sprite",
    "na": "3d6"
  },
  {
    "name": "Stirge",
    "na": "1d10"
  },
  {
    "name": "Trader",
    "na": "1d8"
  },
  {
    "name": "Wolf",
    "na": "2d6"
  }
];

export const DUNGEON_NOT_LOADED: string[] = [
  "Level 2",
  "Level 3"
];
