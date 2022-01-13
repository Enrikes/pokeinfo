import { createPokeCard } from "./PokeCard/pokeTypes.js";
import { pokeSearch } from "./PokeSearch.js";
const container = document.querySelector(".container");
const cardDesc = document.createElement("p");

cardDesc.className = "cardDesc";
export async function grabPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await res.json();
  const pokeArray = [];
  for (const pokemon of data.results) {
    pokeArray.push(await getSinglePokeUrl(pokemon.url));
  }

  return pokeArray;
}

export async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function main() {
  const pokemonArray = await grabPokemon();
  const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
  pokeSearch();
  for (const pokemon of pokemonArray) {
    pokeCardWrapper.appendChild(createPokeCard(pokemon));
  }
}
main();
