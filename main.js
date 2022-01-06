// This grabs the pokemon name to DOM
// Global Variables
const container = document.querySelector(".container");
// Card Body

// Card Title
// const cardTitle = document.createElement("h1");
// cardTitle.className = "cardTitle";
// cardTitle.innerHTML = grabPokemon();
// card.appendChild(cardTitle);
// Card Desc
const cardDesc = document.createElement("p");
cardDesc.className = "cardDesc";
//Grabs pokemon name

async function grabPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  const pokeArray = [];
  for (const pokemon of data.results) {
    pokeArray.push(await getSinglePokeUrl(pokemon.url));
  }
  return pokeArray;
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
function createPokeCard(pokemon) {
  const card = document.createElement("div");
  const pokemonName = pokemon.name;
  const pokeType = pokemon["types"];

  console.log(pokemon["types"]);
  card.innerHTML += `
  <h1>${pokemonName}</h1>
  `;
  if (pokeType.length === 2) {
    const pokeTypeOneDom = pokeType["0"]["type"]["name"];
    const pokeTypeTwoDom = pokeType["1"]["type"]["name"];
    card.innerHTML += `<p>${pokeTypeOneDom}/${pokeTypeTwoDom}</p>`;
  } else {
    const pokeTypeDom = document.createElement("p");
    const pokeTypeOneDom = pokeType["0"]["type"]["name"];
    pokeTypeDom.innerHTML = pokeTypeOneDom;
    card.appendChild(pokeTypeDom);
  }
  return card;
}

async function main() {
  // console.log(await createCard());
  const pokemonArray = await grabPokemon();
  const pokeCardWrapper = document.querySelector("#pokeCardWrapper");
  for (const pokemon of pokemonArray) {
    pokeCardWrapper.appendChild(createPokeCard(pokemon));
  }
}
main();
