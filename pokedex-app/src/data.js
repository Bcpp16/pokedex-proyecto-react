
let pokemones = [
  {
    id: 1,
    name: "Bulbasaur",
    image: "assets/bulbasaur.png",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    element: {
      type1: "Grass",
      type2: "Poison",
    },
    weight: "6,9 kg",
    height: "0.7 m",
    moves: "Chlorophyll Overgrow",
    color: '#74cb48',
    // bgColor: 'linear-gradient(135deg, #74cb48 0%, #55a32e 100%)',
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    baseStats: {
      HP: "045",
      ATK: "049",
      DEF: "049",
      SATK: "065",
      SDEF: "065",
      SPD: "045",
    },
  },

  {
    id: 4,
    name: "Charmander",
    image: "./assets/charmander.png",
    img: "https://img.imgur.com/sRtUahD.png",
    element: {
      type1: "Fire",
    },
    weight: "8,5 kg",
    height: "0,6 m",
    moves: "Mega-Punch  Fire-Punch",
    color: "#f57d31",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    baseStats: {
      HP: "039",
      ATK: "052",
      DEF: "043",
      SATK: "060",
      SDEF: "050",
      SPD: "065",
    },
  },

  {
    id: 7,
    name: "Squirtle",
    image: "./assets/squirtle.png",
    img: "https://img.imgur.com/5HApPLW.png",
    element: {
      type1: "Water",
    },
    weight: "9 kg",
    height: "0,5 m",
    moves: "Torrent Rain-Dish",
    color: "#6493eb",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    baseStats: {
      HP: "044",
      ATK: "048",
      DEF: "065",
      SATK: "050",
      SDEF: "064",
      SPD: "043",
    },
  },

  {
    id: 12,
    name: "Butterfree",
    image: "./assets/butterfree.png",
    img: "https://img.imgur.com/tIMv25O.png",
    element: {
      type1: "Bug",
      type2: "Flying",
    },
    weight: "32,0 kg",
    height: "1,1 m",
    moves: "Compound-Eyes Tinted-Lens",
    color: "#a7b723",
    description:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    baseStats: {
      HP: "060",
      ATK: "045",
      DEF: "050",
      SATK: "090",
      SDEF: "080",
      SPD: "070",
    },
  },
  {
    id: 25,
    name: "Pikachu",
    image: "./assets/pikachu.png",
    img: "https://img.imgur.com/p8XtXd9.png",
    element: {
      type1: "Electric",
    },
    weight: "6,0 kg",
    height: "0,4 m",
    moves: "Mega-Punch  Pay-Day",
    color: "#f9cf30",
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    baseStats: {
      HP: "035",
      ATK: "055",
      DEF: "040",
      SATK: "050",
      SDEF: "050",
      SPD: "090",
    },
  },
  {
    id: 92,
    name: "Gastly",
    image: "./assets/gastly.png",
    img: "https://img.imgur.com/bBXfgmq.png",
    element: {
      type1: "Ghost",
      type2: "Type",
    },
    weight: "0,1 kg",
    height: "1,3 m",
    moves: "Levitate",
    color: "#70559b",
    description:
      "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
    baseStats: {
      HP: "030",
      ATK: "035",
      DEF: "030",
      SATK: "100",
      SDEF: "035",
      SPD: "080",
    },
  },
  {
    id: 132,
    name: "Ditto",
    image: "./assets/ditto.png",
    img: "https://img.imgur.com/04drFjY.png",
    element: {
      type1: "Normal",
    },
    weight: "0,1 kg",
    height: "1,3 m",
    moves: "Limber Imposter",
    color: "#aaa67f",
    description:
      "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
    baseStats: {
      HP: "048",
      ATK: "048",
      DEF: "048",
      SATK: "048",
      SDEF: "048",
      SPD: "048",
    },
  },
  {
    id: 152,
    name: "Mew",
    image: "./assets/mew.png",
    img: "https://img.imgur.com/HnAlPuB.png",
    element: {
      type1: "Psychic",
    },
    weight: "4,0 kg",
    height: "0,4 m",
    moves: "Synchronize",
    color: "#fb5584",
    description:
      "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
    baseStats: {
      HP: "100",
      ATK: "100",
      DEF: "100",
      SATK: "100",
      SDEF: "100",
      SPD: "100",
    },
  },

  {
    id: 304,
    name: "Aron",
    image: "./assets/aron.png",
    img: "https://img.imgur.com/LYLG8Ou.png",
    element: {
      type1: "Steel",
      type2: "Rock",
    },
    weight: "0,1 kg",
    height: "1,3 m",
    moves: "Sturdy Rock-Head",
    color: "#b7b9d0",
    description:
      "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
    baseStats: {
      HP: "050",
      ATK: "070",
      DEF: "100",
      SATK: "040",
      SDEF: "040",
      SPD: "030",
    },
  },
];

export default pokemones;
