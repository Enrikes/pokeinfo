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
let a = 0;
let offset = `offset=${a}&`;
const pokeWindow = (offset) =>
  `https://pokeapi.co/api/v2/pokemon?${offset}limit=10`;
// console.log(pokeWindow());
// function nextPoke() {
//   a += 10;
//   let pokeApi = pokeWindow(a);
//   console.log(pokeApi);
//   return pokeApi;
// }
async function grabPokemon() {
  const res = await fetch(pokeWindow());
  console.log(res);
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
  card.id = "pokeCardId";
  // card.className += " col-md";
  const pokemonName = pokemon.name;
  const pokeType = pokemon["types"];
  const pokeImage = pokemon["sprites"]["front_default"];
  const pokeTypeOneDom = pokeType["0"]["type"]["name"];
  const pokemonNameDom = document.createElement("h1");
  pokemonNameDom.innerHTML = pokemonName;

  const pokeImageDom = document.createElement("img");
  const pokeImageContainer = document.createElement("div");
  card.appendChild(pokeImageContainer);
  pokeImageDom.src = pokeImage;
  pokeImageDom.id = "poke-Image";
  pokeImageContainer.appendChild(pokeImageDom);
  card.appendChild(pokemonNameDom);

  // card.innerHTML += `
  // <div id='pokeImageContainer'><img id="pokeImage" src="${pokeImage}"> </div>
  // <h1>${pokemonName}</h1>
  // `;
  if (pokeTypeOneDom === "grass") {
    pokeImageContainer.classList.add("pokemon-grass");
  } else if (pokeTypeOneDom === "fire") {
    pokeImageContainer.classList.add("pokemon-fire");
  } else if (pokeTypeOneDom === "water") {
    pokeImageContainer.classList.add("pokemon-water");
  }
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
  const pokeCardWrapper = document.querySelector(".pokeCardWrapper");
  for (const pokemon of pokemonArray) {
    pokeCardWrapper.appendChild(createPokeCard(pokemon));
  }
}
main();
