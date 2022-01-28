import { createPokeCard } from "./PokeCard/pokeTypes.js";
import { pokeSearch } from "./PokeSearch.js";
import { replacePokeCard } from "./PokeCard/pokeCardReplace.js";

const cardDesc = document.createElement("p");
cardDesc.className = "cardDesc";
let a = 0;

async function nextPokemon(pokeCard) {
  pokeCard = document.querySelectorAll("pokeCard");
  pokeCard.innerHTML = "kek";
  a += 20;
  console.log(a);
  let b = 20;
  let pokemon = await grabPokemon(a, b);
  let pokemonArrayDom = [];

  function removePokemonCards() {
    pokeCard.innerHTML = "";
  }
  removePokemonCards();
  for (const nextPokemonDom of pokemon) {
    pokeCardWrapper.appendChild(await replacePokeCard(nextPokemonDom));
  }
  return pokemon;
}
document.getElementById("nextPokemon").addEventListener("click", nextPokemon);

console.log(replacePokeCard());

export async function grabPokemon(offset, limit) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
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

async function main() {
  const pokemonArray = await grabPokemon();
  pokeSearch();
  poop();
  const pokeCardWrapper = document.querySelector(".pokeCardWrapper");

  for (const pokemon of pokemonArray) {
    pokeCardWrapper.appendChild(createPokeCard(pokemon));
  }
}
main();
