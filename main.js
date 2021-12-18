// This grabs the pokemon name to DOM
// Global Variables
const container = document.querySelector(".container");
const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
// Card Body
const card = document.createElement("div");
card.className = "pokeCard";
pokeCardWrapper.appendChild(card);
// Card Title
const cardTitle = document.createElement("h1");
cardTitle.className = "cardTitle";
cardTitle.innerHTML = grabPokemon();
card.appendChild(cardTitle);
// Card Desc
const cardDesc = document.createElement("p");
cardDesc.className = "cardDesc";

//Grabs pokemon name
async function grabPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  const pokeNamesArray = [];

  for (const index of data.results) {
    const pokeNames = index.name;
    pokeNamesArray.push(pokeNames);
  }
  console.log(pokeNamesArray);
  return pokeNamesArray;
}
async function grabPokemonInfo() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  const basePokeInfo = data.results;
  const array = [];

  for (const pokemon of basePokeInfo) {
    array.push(await getSinglePokeUrl(pokemon.url));
  }
  for (const singlePokemon of array) {
    console.log(singlePokemon.types["0"]["type"]["name"]);
    const pokemonType = singlePokemon.types;
    const pokeTypeDom = document.createElement("p");
    // Two type pokemon checker
    if (pokemonType.length === 2) {
      pokeTypeDom.textContent = `${pokemonType["0"]["type"]["name"]} / ${pokemonType["1"]["type"]["name"]} `;
      const cardDesc = document.createElement("p");
      cardDesc.className = "cardDesc";
      card.appendChild(cardDesc);
    } else {
      pokeTypeDom.textContent = pokemonType["0"]["type"]["name"];
      const cardDesc = document.createElement("p");
      cardDesc.className = "cardDesc";
      card.appendChild(cardDesc);
    }
    return singlePokemon;
  }
  return array;
}

async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
async function createCard() {
  const res = await fetch(pokeNamesArray);
  const data = await res.json();
}

async function main() {
  console.log(grabPokemon());
  createCard();
}
main();
