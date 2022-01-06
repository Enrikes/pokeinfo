// This grabs the pokemon name to DOM
// Global Variables
const container = document.querySelector(".container");
const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
// Card Body

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

    // pokeCardWrapper.appendChild(card);
    console.log(pokemon);
  }
}
async function pokeTypeDom() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  while (data.results === 3) {
    console.log(data.results);
    const card = document.createElement("div");
    cardTitle.className = "pokeCard";
    cardTitle.innerHTML = pokemon.name;
    pokeCardWrapper.appendChild(card);

    data.results++;
  }
  for (pokemonTypeDom of data.results) {
    pokeArray.push(await getSinglePokeUrl(pokemonTypeDom.url));
    console.log(pokeArray);

    console.log(pokemonTypeDom["types"]["0"]["type"]["name"]);
    // Pokemon Type Checker
    if (pokemonTypeDom["types"].length === 2) {
      const typeOne = pokemonTypeDom["types"]["0"]["type"]["name"];
      const typeTwo = pokemonTypeDom["types"]["1"]["type"]["name"];
      const cardDesc = document.createElement("p");
      cardDesc.innerHTML = `${typeOne}/${typeTwo}`;
      card.appendChild(cardDesc);
      console.log("theres two types here");
    } else {
      const typeOne = pokemonTypeDom["types"]["0"]["type"]["name"];
      cardDesc.innerHTML = `${typeOne}`;
      console.log("there is one type here");
    }
  }
  return pokeArray;
}

async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
// async function createCard() {
//   for (const pokeCardInfo of pokeArray) {
//     console.log(pokeCardInfo["name"]);
//     return pokeCardInfo;
//   }
// }

async function main() {
  // console.log(await createCard());
  console.log(await grabPokemon());
  console.log(await pokeTypeDom());
}
main();
