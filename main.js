import { createPokeCard } from "./PokeCard/pokeTypes.js";
import { pokeSearch } from "./PokeSearch.js";
import { nextPokemon } from "./nextPokemon.js";

const cardDesc = document.createElement("p");
cardDesc.className = "cardDesc";

export async function grabPokemon(limit, offset) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  console.log(res);
  const data = await res.json();
  const pokeArray = [];
  for (const pokemon of data.results) {
    pokeArray.push(await getSinglePokeUrl(pokemon.url));
  }

  return pokeArray;
}
function poop() {
  return grabPokemon(10, 20);
}
export async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
document.getElementById("nextPokemon").addEventListener("click", nextPokemon)

async function main() {
  const pokemonArray = await grabPokemon();
  const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
  pokeSearch();
  poop();
  for (const pokemon of pokemonArray) {
    pokeCardWrapper.appendChild(createPokeCard(pokemon));
  }
}
main();
