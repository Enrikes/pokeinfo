const pokemonWeakness = {
  normal: { effective: [], weakness: ["fighting"] },
  fire: {
    effective: ["grass", "ice", "bug", "steel"],
    weakness: ["ground", "water", "rock"],
  },
  grass: {
    effective: ["water", "ground", "rock"],
    weakness: ["bug", "flying", "poison", "ice", "fire"],
  },
  water: {
    effective: ["fire", "rock", "ground"],
    weakness: ["grass", "electric"],
  },
  fighting: {
    effective: ["normal", "ice", "rock", "steel", "dark"],
    weakness: ["fairy", "flying", "psychic"],
  },
  electric: { effective: ["water", "flying"], weakness: ["ground"] },
  bug: {
    effective: ["grass", "psychic", "dark"],
    weakness: ["rock", "flying", "fire"],
  },
  rock: {
    effective: ["fire", "ice", "flying", "bug"],
    weakness: ["steel", "ground", "fighting", "grass", "water"],
  },
  ice: {
    effective: ["grass", "ground", "flying", "dragon"],
    weakness: ["steel", "rock", "fighting", "fire"],
  },
  steel: {
    effective: ["ice", "rock", "fairy"],
    weakness: ["ground", "fighting", "fire"],
  },
  psychic: {
    effective: ["fighting", "poison"],
    weakness: ["ghost", "dark", "bug"],
  },
  ghost: { effective: ["psychic", "ghost"], weakness: ["ghost", "dark"] },
  flying: {
    effective: ["grass", "fighting", "bug"],
    weakness: ["rock", "ice", "electric"],
  },
  ground: {
    effective: ["fire", "electric", "poison", "rock", "steel"],
    weakness: ["ice", "grass", "water"],
  },
  fairy: {
    effective: ["dark", "dragon", "fighting"],
    weakness: ["steel", "poison"],
  },
  dragon: { effective: ["dragon"], weakness: ["fairy", "dragon", "ice"] },
  poison: { effective: ["grass", "fairy"], weakness: ["psychic", "ground"] },
  dark: {
    effective: ["psychic", "ghost"],
    weakness: ["fairy", "bug", "fighting"],
  },
};
export default pokemonWeakness;
