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

async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
function createPokeCard(pokemon) {
  const card = document.createElement("div");
  card.className = "pokeCard";
  const pokemonName = pokemon.name;
  const pokeType = pokemon["types"];
  const pokeImage = pokemon["sprites"]["front_default"];

  card.innerHTML += `
  <img src="${pokeImage}">
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
