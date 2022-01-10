import { createPokeCard } from "./PokeCard/pokeTypes.js";
const container = document.querySelector(".container");
const cardDesc = document.createElement("p");
cardDesc.className = "cardDesc";
let a = 0;
let offset = `offset=${a}&`;
const pokeWindow = (offset) =>
  `https://pokeapi.co/api/v2/pokemon?${offset}limit=10`;
async function grabPokemon() {
  const res = await fetch(pokeWindow());
  const data = await res.json();
  const pokeArray = [];
  for (const pokemon of data.results) {
    pokeArray.push(await getSinglePokeUrl(pokemon.url));
  }

  return pokeArray;
}

async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function main() {
  const pokemonArray = await grabPokemon();
  const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
  for (const pokemon of pokemonArray) {
    pokeCardWrapper.appendChild(createPokeCard(pokemon));
  }
}
main();
