// Encounter tables from OSE Classic Monsters (pp. 68-74), transcribed from the book's text.
// Table entries keep the book's wording; TABLE_ALIASES maps them to monster entries.

/** d8 column per terrain: "<sub-table key>-<category>", indexed by d8 - 1. */
export const WILD_TERRAINS: Record<string, string[]> = {
 "Barren, Hills, Mountains": [
  "B-Animal",
  "1-Dragon",
  "1-Dragon",
  "B-Flyer",
  "B-Human",
  "B-Humanoid",
  "B-Humanoid",
  "2-Unusual"
 ],
 "City": [
  "C-Human, City",
  "C-Human, City",
  "C-Human, City",
  "C-Human, City",
  "C-Human, City",
  "C-Human, City",
  "C-Humanoid",
  "2-Undead"
 ],
 "Clear, Grasslands": [
  "G-Animal",
  "G-Animal",
  "1-Dragon",
  "1-Flyer",
  "G-Human",
  "G-Humanoid",
  "1-Insect",
  "2-Unusual"
 ],
 "Desert": [
  "D-Animal",
  "D-Animal",
  "1-Dragon",
  "D-Flyer",
  "D-Human",
  "D-Human",
  "D-Humanoid",
  "2-Undead"
 ],
 "Forest": [
  "F-Animal",
  "F-Animal",
  "1-Dragon",
  "1-Flyer",
  "F-Human",
  "F-Humanoid",
  "1-Insect",
  "2-Unusual"
 ],
 "Jungle": [
  "J-Animal",
  "J-Animal",
  "1-Dragon",
  "1-Flyer",
  "J-Human",
  "J-Humanoid",
  "1-Insect",
  "1-Insect"
 ],
 "Lake, River": [
  "L-Animal",
  "1-Dragon",
  "1-Flyer",
  "L-Human",
  "L-Humanoid",
  "1-Insect",
  "L-Swimmer",
  "L-Swimmer"
 ],
 "Ocean, Sea": [
  "1-Dragon",
  "1-Flyer",
  "O-Human",
  "O-Swimmer",
  "O-Swimmer",
  "O-Swimmer",
  "O-Swimmer",
  "O-Swimmer"
 ],
 "Settled": [
  "C-Animal",
  "1-Dragon",
  "1-Flyer",
  "C-Human, Settled",
  "C-Human, Settled",
  "C-Human, Settled",
  "C-Humanoid",
  "1-Insect"
 ],
 "Swamp": [
  "1-Dragon",
  "1-Flyer",
  "S-Human",
  "S-Humanoid",
  "1-Insect",
  "S-Swimmer",
  "2-Undead",
  "2-Undead"
 ]
};

/** Sub-table key -> category -> 12 entries (d12). */
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
   "Hydra (or Sea Hydra)",
   "Hydra (or Sea Hydra)",
   "Wyvern",
   "Basilisk*",
   "Salamander*"
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
   "Pterodactyl, Pteranodon",
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
   "Antelope",
   "Ape, White",
   "Ape, White",
   "Bear, Cave",
   "Cat, Mntn. Lion",
   "Hawk",
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
   "Exp. Adventurers",
   "High-Level Cleric",
   "High-Level Fighter",
   "High-Level MU",
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
 "C": {
  "Animal": [
   "Antelope",
   "Antelope",
   "Boar",
   "Cat, Tiger",
   "Ferret, Giant",
   "Hawk",
   "Rat, Giant",
   "Shrew, Giant",
   "Snake, Pit Viper",
   "Spider, Tarantella",
   "Weasel, Giant",
   "Wolf"
  ],
  "Human, City": [
   "Acolyte",
   "Basic Adventurers",
   "Bandit",
   "Bandit",
   "Exp. Adventurers",
   "High-Level Fighter",
   "Merchant",
   "Noble",
   "Trader",
   "Trader",
   "Trader",
   "Veteran"
  ],
  "Human, Settled": [
   "Acolyte",
   "Basic Adventurers",
   "Bandit",
   "Bandit",
   "Exp. Adventurers",
   "High-Level Cleric",
   "High-Level Fighter",
   "High-Level MU",
   "Merchant",
   "Noble",
   "Trader",
   "Veteran"
  ],
  "Humanoid": [
   "Dwarf",
   "Elf",
   "Giant, Hill",
   "Gnome",
   "Gnoll",
   "Goblin",
   "Halfling",
   "Hobgoblin",
   "Ogre",
   "Orc",
   "Pixie",
   "Sprite"
  ]
 },
 "D": {
  "Animal": [
   "Antelope",
   "Antelope",
   "Camel",
   "Camel",
   "Cat, Lion",
   "Cat, Lion",
   "Hawk",
   "Lizard, Gecko",
   "Lizard, Tuatara",
   "Snake, Pit Viper",
   "Snake, Rattler",
   "Spider, Tarantella"
  ],
  "Flyer": [
   "Gargoyle",
   "Gargoyle",
   "Griffon",
   "Hawk",
   "Hawk, Giant",
   "Hawk, Giant",
   "Manticore",
   "Manticore",
   "Manticore",
   "Roc, Small",
   "Roc, Large",
   "Roc, Giant"
  ],
  "Human": [
   "Exp. Adventurers",
   "High-Level Cleric",
   "Dervish",
   "Dervish",
   "High-Level Fighter",
   "High-Level MU",
   "Merchant",
   "Noble",
   "Nomad",
   "Nomad",
   "Nomad",
   "Nomad"
  ],
  "Humanoid": [
   "Giant, Fire",
   "Goblin",
   "Hobgoblin",
   "Hobgoblin",
   "Ogre",
   "Ogre",
   "Ogre",
   "Orc",
   "Orc",
   "Pixie",
   "Sprite",
   "Thoul"
  ]
 },
 "F": {
  "Animal": [
   "Antelope",
   "Boar",
   "Cat, Panther",
   "Cat, Tiger",
   "Hawk",
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
   "Antelope",
   "Boar",
   "Cat, Lion",
   "Elephant",
   "Ferret, Giant",
   "Hawk, Giant",
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
 },
 "J": {
  "Animal": [
   "Antelope",
   "Boar",
   "Cat, Panther",
   "Lizard, Draco",
   "Lizard, Gecko",
   "Lzd., Horned Chameleon",
   "Rat, Giant",
   "Shrew, Giant",
   "Snake, Pit Viper",
   "Snake, Rock Python",
   "Snake, Spitting Cobra",
   "Spider, Crab"
  ],
  "Human": [
   "Bandit",
   "Berserker",
   "Brigand",
   "Brigand",
   "Brigand",
   "Expert Adventurers",
   "Expert Adventurers",
   "High-Level Cleric",
   "High-Level Fighter",
   "High-Level Magic-User",
   "Merchant",
   "Neanderthal"
  ],
  "Humanoid": [
   "Bugbear",
   "Cyclops",
   "Elf",
   "Giant, Fire",
   "Giant, Hill",
   "Gnoll",
   "Goblin",
   "Lizard Man",
   "Ogre",
   "Orc",
   "Troglodyte",
   "Troll"
  ]
 },
 "L": {
  "Animal": [
   "Antelope",
   "Boar",
   "Cat, Panther",
   "Cat, Tiger",
   "Crab, Giant",
   "Crocodile",
   "Crocodile, Large",
   "Piranha, Giant",
   "Leech, Giant",
   "Rat, Giant",
   "Shrew, Giant",
   "Toad, Giant"
  ],
  "Human": [
   "Basic Adventurers",
   "Bandit",
   "Brigand",
   "Buccaneer",
   "Buccaneer",
   "Buccaneer",
   "Exp. Adventurers",
   "High-Level Cleric",
   "High-Level Fighter",
   "High-Level MU",
   "Merchant",
   "Merchant"
  ],
  "Humanoid": [
   "Bugbear",
   "Elf",
   "Gnoll",
   "Hobgoblin",
   "Lizard Man",
   "Lizard Man",
   "Nixie",
   "Ogre",
   "Orc",
   "Sprite",
   "Thoul",
   "Troll"
  ],
  "Swimmer": [
   "Crab, Giant",
   "Crocodile",
   "Crocodile",
   "Crocodile, Large",
   "Fish, Catfish",
   "Fish, Piranha",
   "Fish, Sturgeon",
   "Leech, Giant",
   "Lizard Man",
   "Merman",
   "Nixie",
   "Termite, Water"
  ]
 },
 "O": {
  "Human": [
   "Buccaneer",
   "Buccaneer",
   "Exp. Adventurers",
   "Merchant",
   "Merchant",
   "Merchant",
   "Merchant",
   "Merchant",
   "Pirate",
   "Pirate",
   "Pirate",
   "Pirate"
  ],
  "Swimmer": [
   "Dragon Turtle",
   "Hydra, Sea",
   "Merman",
   "Octopus, Giant",
   "Sea Dragon",
   "Sea Serpent",
   "Shark",
   "Shark",
   "Snake, Sea",
   "Squid, Giant",
   "Termite, Water",
   "Whale"
  ]
 },
 "S": {
  "Human": [
   "Basic Adventurers",
   "Bandit",
   "Bandit",
   "Berserker",
   "Brigand",
   "Expert Adventurers",
   "Expert Adventurers",
   "High-Level Cleric",
   "High-Level Fighter",
   "High-Level Magic-User",
   "Merchant",
   "Trader"
  ],
  "Humanoid": [
   "Gnoll",
   "Goblin",
   "Hobgoblin",
   "Lizard Man",
   "Lizard Man",
   "Lizard Man",
   "Nixie",
   "Ogre",
   "Orc",
   "Troglodyte",
   "Troll",
   "Troll"
  ],
  "Swimmer": [
   "Crab, Giant",
   "Crocodile",
   "Crocodile, Large",
   "Crocodile, Giant",
   "Fish, Catfish",
   "Insect Swarm",
   "Insect Swarm",
   "Leech, Giant",
   "Leech, Giant",
   "Lizard Man",
   "Lizard Man",
   "Termite, Water"
  ]
 }
};

export interface DungeonEntry { name: string; na: string }

/** Dungeon level -> 20 entries (d20), each with the table's own Number Appearing. */
export const DUNGEON_LEVELS: Record<string, DungeonEntry[]> = {
 "Level 1": [
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
 ],
 "Level 2": [
  {
   "name": "Beetle, Oil",
   "na": "1d8"
  },
  {
   "name": "Berserker",
   "na": "1d6"
  },
  {
   "name": "Cat, Mntn. Lion",
   "na": "1d4"
  },
  {
   "name": "Elf",
   "na": "1d4"
  },
  {
   "name": "Ghoul",
   "na": "1d6"
  },
  {
   "name": "Gnoll",
   "na": "1d6"
  },
  {
   "name": "Grey Ooze",
   "na": "1"
  },
  {
   "name": "Hobgoblin",
   "na": "1d6"
  },
  {
   "name": "Lizard, Draco",
   "na": "1d4"
  },
  {
   "name": "Lizard Man",
   "na": "2d4"
  },
  {
   "name": "Neanderthal",
   "na": "1d10"
  },
  {
   "name": "Noble",
   "na": "2d6"
  },
  {
   "name": "Pixie",
   "na": "2d4"
  },
  {
   "name": "Robber Fly",
   "na": "1d6"
  },
  {
   "name": "Rock Baboon",
   "na": "2d6"
  },
  {
   "name": "Snake, Pit Viper",
   "na": "1d8"
  },
  {
   "name": "Spider, Bl. Widow",
   "na": "1d3"
  },
  {
   "name": "Troglodyte",
   "na": "1d8"
  },
  {
   "name": "Veteran",
   "na": "2d4"
  },
  {
   "name": "Zombie",
   "na": "2d4"
  }
 ],
 "Level 3": [
  {
   "name": "Ape, White",
   "na": "1d6"
  },
  {
   "name": "Basic Adv.",
   "na": "1d4+4"
  },
  {
   "name": "Beetle, Tiger",
   "na": "1d6"
  },
  {
   "name": "Bugbear",
   "na": "2d4"
  },
  {
   "name": "Carcass Crawler",
   "na": "1d3"
  },
  {
   "name": "Doppelgänger",
   "na": "1d6"
  },
  {
   "name": "Driver Ant",
   "na": "2d4"
  },
  {
   "name": "Gargoyle",
   "na": "1d6"
  },
  {
   "name": "Gelatinous Cube",
   "na": "1"
  },
  {
   "name": "Harpy",
   "na": "1d6"
  },
  {
   "name": "Lvng. Stat., Crystal",
   "na": "1d6"
  },
  {
   "name": "Lycan., Wererat",
   "na": "1d8"
  },
  {
   "name": "Medium",
   "na": "1d4"
  },
  {
   "name": "Medusa",
   "na": "1d3"
  },
  {
   "name": "Ochre Jelly",
   "na": "1"
  },
  {
   "name": "Ogre",
   "na": "1d6"
  },
  {
   "name": "Shadow",
   "na": "1d8"
  },
  {
   "name": "Spider, Tarantella",
   "na": "1d3"
  },
  {
   "name": "Thoul",
   "na": "1d6"
  },
  {
   "name": "Wight",
   "na": "1d6"
  }
 ],
 "Level 4-5": [
  {
   "name": "Bear, Cave",
   "na": "1d2"
  },
  {
   "name": "Blink Dog",
   "na": "1d6"
  },
  {
   "name": "Caecilia",
   "na": "1d3"
  },
  {
   "name": "Cockatrice",
   "na": "1d4"
  },
  {
   "name": "Doppelgänger",
   "na": "1d6"
  },
  {
   "name": "Exp. Adv.",
   "na": "1d6+3"
  },
  {
   "name": "Grey Ooze",
   "na": "1"
  },
  {
   "name": "Hellhound",
   "na": "2d4"
  },
  {
   "name": "Lizard, Tuatara",
   "na": "1d2"
  },
  {
   "name": "Lycan., Wereboar",
   "na": "1d4"
  },
  {
   "name": "Lycan., Werewolf",
   "na": "1d6"
  },
  {
   "name": "Minotaur",
   "na": "1d6"
  },
  {
   "name": "Ochre Jelly",
   "na": "1"
  },
  {
   "name": "Owl Bear",
   "na": "1d4"
  },
  {
   "name": "Rhagodessa",
   "na": "1d4"
  },
  {
   "name": "Rust Monster",
   "na": "1d4"
  },
  {
   "name": "Spectre",
   "na": "1d4"
  },
  {
   "name": "Troll",
   "na": "1d8"
  },
  {
   "name": "Weasel, Giant",
   "na": "1d4"
  },
  {
   "name": "Wraith",
   "na": "1d4"
  }
 ],
 "Level 6-7": [
  {
   "name": "Basilisk",
   "na": "1d6"
  },
  {
   "name": "Bear, Cave",
   "na": "1d2"
  },
  {
   "name": "Black Pudding",
   "na": "1"
  },
  {
   "name": "Caecilia",
   "na": "1d3"
  },
  {
   "name": "Dragon, White",
   "na": "1d4"
  },
  {
   "name": "Exp. Adve.",
   "na": "1d6+3"
  },
  {
   "name": "Gorgon",
   "na": "1d2"
  },
  {
   "name": "Hellhound",
   "na": "2d4"
  },
  {
   "name": "Hydra, 1d4+4HD",
   "na": "1"
  },
  {
   "name": "Lycan., Weretiger",
   "na": "1d4"
  },
  {
   "name": "Minotaur",
   "na": "1d6"
  },
  {
   "name": "Mummy",
   "na": "1d4"
  },
  {
   "name": "Ochre Jelly",
   "na": "1"
  },
  {
   "name": "Owl Bear",
   "na": "1d4"
  },
  {
   "name": "Rust Monster",
   "na": "1d4"
  },
  {
   "name": "Salam., Flame",
   "na": "1d4+1"
  },
  {
   "name": "Scorpion, Giant",
   "na": "1d6"
  },
  {
   "name": "Spectre",
   "na": "1d4"
  },
  {
   "name": "Troll",
   "na": "1d8"
  },
  {
   "name": "Warp Beast",
   "na": "1d4"
  }
 ],
 "Level 8+": [
  {
   "name": "Black Pudding",
   "na": "1"
  },
  {
   "name": "Chimera",
   "na": "1d2"
  },
  {
   "name": "Dragon, Black",
   "na": "1d4"
  },
  {
   "name": "Dragon, Blue",
   "na": "1d4"
  },
  {
   "name": "Dragon, Gold",
   "na": "1d4"
  },
  {
   "name": "Dragon, Green",
   "na": "1d4"
  },
  {
   "name": "Dragon, Red",
   "na": "1d4"
  },
  {
   "name": "Exp. Adv.",
   "na": "1d6+3"
  },
  {
   "name": "Giant, Hill",
   "na": "1d4"
  },
  {
   "name": "Giant, Stone",
   "na": "1d2"
  },
  {
   "name": "Golem, Amber",
   "na": "1"
  },
  {
   "name": "Golem, Bone",
   "na": "1"
  },
  {
   "name": "Hydra, 1d4+8HD",
   "na": "1"
  },
  {
   "name": "Lycan., Devil Swine",
   "na": "1d3"
  },
  {
   "name": "Lycan., Werebear",
   "na": "1d4"
  },
  {
   "name": "Manticore",
   "na": "1d2"
  },
  {
   "name": "Purple Worm",
   "na": "1d2"
  },
  {
   "name": "Salam., Flame",
   "na": "1d4+1"
  },
  {
   "name": "Salamander, Frost",
   "na": "1d3"
  },
  {
   "name": "Vampire",
   "na": "1d4"
  }
 ]
};

/**
 * Table wording -> monster entries. One name = direct link. Several names = the DM picks
 * (e.g. Shark), unless `dice` is given, which picks by roll: names[total - min] (hydra heads).
 */
export interface TableAlias { names: string[]; dice?: string; min?: number }
export const TABLE_ALIASES: Record<string, TableAlias> = {
 "Antelope": {
  "names": [
   "Small Herd Animal (1HD)",
   "Small Herd Animal (2HD)"
  ]
 },
 "Basilisk*": {
  "names": [
   "Basilisk"
  ]
 },
 "Bear, Cave": {
  "names": [
   "Cave Bear"
  ]
 },
 "Beetle, Fire": {
  "names": [
   "Fire Beetle"
  ]
 },
 "Beetle, Oil": {
  "names": [
   "Oil Beetle"
  ]
 },
 "Beetle, Tiger": {
  "names": [
   "Tiger Beetle"
  ]
 },
 "Cat, Lion": {
  "names": [
   "Lion"
  ]
 },
 "Cat, Mntn. Lion": {
  "names": [
   "Mountain Lion"
  ]
 },
 "Cat, Panther": {
  "names": [
   "Panther"
  ]
 },
 "Cat, Sabre-Toothed": {
  "names": [
   "Sabre-Toothed Tiger"
  ]
 },
 "Cat, Tiger": {
  "names": [
   "Tiger"
  ]
 },
 "Crocodile": {
  "names": [
   "Normal Crocodile"
  ]
 },
 "Crocodile, Giant": {
  "names": [
   "Giant Crocodile"
  ]
 },
 "Crocodile, Large": {
  "names": [
   "Large Crocodile"
  ]
 },
 "Dragon, Black": {
  "names": [
   "Black Dragon"
  ]
 },
 "Dragon, Blue": {
  "names": [
   "Blue Dragon"
  ]
 },
 "Dragon, Gold": {
  "names": [
   "Gold Dragon"
  ]
 },
 "Dragon, Green": {
  "names": [
   "Green Dragon"
  ]
 },
 "Dragon, Red": {
  "names": [
   "Red Dragon"
  ]
 },
 "Dragon, White": {
  "names": [
   "White Dragon"
  ]
 },
 "Fish, Catfish": {
  "names": [
   "Giant Catfish"
  ]
 },
 "Fish, Piranha": {
  "names": [
   "Giant Piranha"
  ]
 },
 "Fish, Sturgeon": {
  "names": [
   "Giant Sturgeon"
  ]
 },
 "Giant, Cloud": {
  "names": [
   "Cloud Giant"
  ]
 },
 "Giant, Fire": {
  "names": [
   "Fire Giant"
  ]
 },
 "Giant, Frost": {
  "names": [
   "Frost Giant"
  ]
 },
 "Giant, Hill": {
  "names": [
   "Hill Giant"
  ]
 },
 "Giant, Stone": {
  "names": [
   "Stone Giant"
  ]
 },
 "Giant, Storm": {
  "names": [
   "Storm Giant"
  ]
 },
 "Golem, Amber": {
  "names": [
   "Amber Golem"
  ]
 },
 "Golem, Bone": {
  "names": [
   "Bone Golem"
  ]
 },
 "Hawk": {
  "names": [
   "Normal Hawk"
  ]
 },
 "Hawk, Giant": {
  "names": [
   "Giant Hawk"
  ]
 },
 "Hellhound": {
  "names": [
   "Hellhound (3HD)",
   "Hellhound (4HD)",
   "Hellhound (5HD)",
   "Hellhound (6HD)",
   "Hellhound (7HD)"
  ]
 },
 "Horse, Wild": {
  "names": [
   "Wild Horse"
  ]
 },
 "Hydra (or Sea Hydra)": {
  "names": [
   "Hydra (5HD)",
   "Hydra (6HD)",
   "Hydra (7HD)",
   "Hydra (8HD)",
   "Hydra (9HD)",
   "Hydra (10HD)",
   "Hydra (11HD)",
   "Hydra (12HD)"
  ],
  "dice": "1d8+4",
  "min": 5
 },
 "Hydra, 1d4+4HD": {
  "names": [
   "Hydra (5HD)",
   "Hydra (6HD)",
   "Hydra (7HD)",
   "Hydra (8HD)",
   "Hydra (9HD)",
   "Hydra (10HD)",
   "Hydra (11HD)",
   "Hydra (12HD)"
  ],
  "dice": "1d4+4",
  "min": 5
 },
 "Hydra, 1d4+8HD": {
  "names": [
   "Hydra (5HD)",
   "Hydra (6HD)",
   "Hydra (7HD)",
   "Hydra (8HD)",
   "Hydra (9HD)",
   "Hydra (10HD)",
   "Hydra (11HD)",
   "Hydra (12HD)"
  ],
  "dice": "1d4+8",
  "min": 5
 },
 "Hydra, Sea": {
  "names": [
   "Hydra (5HD)",
   "Hydra (6HD)",
   "Hydra (7HD)",
   "Hydra (8HD)",
   "Hydra (9HD)",
   "Hydra (10HD)",
   "Hydra (11HD)",
   "Hydra (12HD)"
  ],
  "dice": "1d8+4",
  "min": 5
 },
 "Insect Swarm": {
  "names": [
   "Insect Swarm (2HD)",
   "Insect Swarm (3HD)",
   "Insect Swarm (4HD)"
  ]
 },
 "Lizard, Draco": {
  "names": [
   "Draco"
  ]
 },
 "Lizard, Gecko": {
  "names": [
   "Gecko"
  ]
 },
 "Lizard, Tuatara": {
  "names": [
   "Tuatara"
  ]
 },
 "Lvng. Stat., Crystal": {
  "names": [
   "Crystal Living Statue"
  ]
 },
 "Lycan., Devil Swine": {
  "names": [
   "Devil Swine"
  ]
 },
 "Lycan., Werebear": {
  "names": [
   "Werebear"
  ]
 },
 "Lycan., Wereboar": {
  "names": [
   "Wereboar"
  ]
 },
 "Lycan., Wererat": {
  "names": [
   "Wererat"
  ]
 },
 "Lycan., Weretiger": {
  "names": [
   "Weretiger"
  ]
 },
 "Lycan., Werewolf": {
  "names": [
   "Werewolf"
  ]
 },
 "Lycanthrope, Werebear": {
  "names": [
   "Werebear"
  ]
 },
 "Lycanthrope, Wereboar": {
  "names": [
   "Wereboar"
  ]
 },
 "Lycanthrope, Wererat": {
  "names": [
   "Wererat"
  ]
 },
 "Lycanthrope, Weretiger": {
  "names": [
   "Weretiger"
  ]
 },
 "Lycanthrope, Werewolf": {
  "names": [
   "Werewolf"
  ]
 },
 "Lzd., Horned Chameleon": {
  "names": [
   "Horned Chameleon"
  ]
 },
 "Neanderthal": {
  "names": [
   "Neanderthal (Caveman)"
  ]
 },
 "Piranha, Giant": {
  "names": [
   "Giant Piranha"
  ]
 },
 "Pterodactyl, Pteranodon": {
  "names": [
   "Pterodactyl",
   "Pteranodon"
  ]
 },
 "Rat, Giant": {
  "names": [
   "Giant Rat"
  ]
 },
 "Rhino, Woolly": {
  "names": [
   "Woolly Rhinoceros"
  ]
 },
 "Roc, Giant": {
  "names": [
   "Giant Roc"
  ]
 },
 "Roc, Large": {
  "names": [
   "Large Roc"
  ]
 },
 "Roc, Small": {
  "names": [
   "Small Roc"
  ]
 },
 "Salam., Flame": {
  "names": [
   "Flame Salamander"
  ]
 },
 "Salamander*": {
  "names": [
   "Flame Salamander",
   "Frost Salamander"
  ]
 },
 "Salamander, Frost": {
  "names": [
   "Frost Salamander"
  ]
 },
 "Sea Serpent": {
  "names": [
   "Sea Serpent (Lesser)"
  ]
 },
 "Shark": {
  "names": [
   "Bull Shark",
   "Great White Shark",
   "Mako Shark"
  ]
 },
 "Snake, Cobra": {
  "names": [
   "Spitting Cobra"
  ]
 },
 "Snake, Pit Viper": {
  "names": [
   "Pit Viper"
  ]
 },
 "Snake, Rattler": {
  "names": [
   "Giant Rattler"
  ]
 },
 "Snake, Rock Python": {
  "names": [
   "Rock Python"
  ]
 },
 "Snake, Sea": {
  "names": [
   "Sea Snake"
  ]
 },
 "Snake, Spitting Cobra": {
  "names": [
   "Spitting Cobra"
  ]
 },
 "Spider, Bl. Widow": {
  "names": [
   "Black Widow"
  ]
 },
 "Spider, Black Widow": {
  "names": [
   "Black Widow"
  ]
 },
 "Spider, Crab": {
  "names": [
   "Crab Spider"
  ]
 },
 "Spider, Tarantella": {
  "names": [
   "Tarantella"
  ]
 },
 "Termite, Water": {
  "names": [
   "Freshwater Termite",
   "Saltwater Termite",
   "Swamp Termite"
  ]
 },
 "Vampire": {
  "names": [
   "Vampire (7HD)",
   "Vampire (8HD)",
   "Vampire (9HD)"
  ]
 },
 "Veteran": {
  "names": [
   "Veteran (Level 1)",
   "Veteran (Level 2)",
   "Veteran (Level 3)"
  ]
 },
 "Whale": {
  "names": [
   "Killer Whale",
   "Narwhal",
   "Sperm Whale"
  ]
 },
 "Wolf": {
  "names": [
   "Normal Wolf"
  ]
 },
 "Wolf, Dire": {
  "names": [
   "Dire Wolf"
  ]
 }
};

/** NPC adventuring parties: generated from the Adventuring Parties rules, no fixed stat block. */
export const NPC_LABELS: string[] = [
 "Basic Adv.",
 "Basic Adventurers",
 "Exp. Adv.",
 "Exp. Adve.",
 "Exp. Adventurers",
 "Expert Adventurers",
 "High-Level Cleric",
 "High-Level Fighter",
 "High-Level MU",
 "High-Level Magic-User"
];
