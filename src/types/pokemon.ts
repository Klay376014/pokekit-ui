export const PokemonTypes = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic',
  'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
] as const

export const PokemonStats = [
  'hp', 'attack', 'defense', 'spacialAttack', 'spacielDefense', 'speed'
] as const

export type PokemonType = typeof PokemonTypes[number]
export type PokemonStat = typeof PokemonStats[number]