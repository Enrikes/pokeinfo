// This grabs the pokemon name to DOM
// Global Variables
const container = document.querySelector(".container");
const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
// Card Body
const card = document.createElement("div");
card.className = "pokeCard";
pokeCardWrapper.appendChild(card);
// Card Title
// const cardTitle = document.createElement("h1");
// cardTitle.className = "cardTitle";
// cardTitle.innerHTML = grabPokemon();
// card.appendChild(cardTitle);
// Card Desc
const cardDesc = document.createElement("p");
cardDesc.className = "cardDesc";
const pokeArray = [];

//Grabs pokemon name
async function grabPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  for (const pokemon of data.results) {
    pokeArray.push(await getSinglePokeUrl(pokemon.url));
  }
  return pokeArray;
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
  for (pokeCardInfo of pokeArray) {
    console.log(pokeCardInfo["name"]);
    return pokeCardInfo;
  }
}

async function main() {
  await console.log(createCard());
  await console.log(grabPokemon());
}
main();
