export async function replacePokeCard(pokemon) {
  console.log(pokemon.name);
  const cardReplace = document.querySelectorAll("pokeCardWrapper");
  cardReplace.innerHTML = `<div>hi</div>`;
  const newCard = document.createElement("div");
  newCard.classList.add("pokeCard");
  const pokemonName = pokemon.name;
  const pokeType = pokemon["types"];
  const pokeImage = pokemon["sprites"]["front_default"];
  const pokeTypeOneDom = pokeType["0"]["type"]["name"];
  const pokemonNameDom = document.createElement("h1");
  pokemonNameDom.innerHTML = pokemonName;
  const pokeHeight = pokemon.height;

  if (pokeType.length === 2) {
    const pokeTypeTwoDom = pokeType["1"]["type"]["name"];
    newCard.innerHTML = `
  <div class="pokeImageContainer pokemon-${pokeTypeOneDom}">
  <img src="${pokeImage}" id="poke-Image">
  </div>
  <div class="poke-desc">
    <h1>${pokemonName}</h1>
  <div class="pokemon-type-${pokeTypeOneDom}">${pokeTypeOneDom}</div>
  <div class="pokemon-type-${pokeTypeTwoDom}">${pokeTypeTwoDom}</div>
  <h3>Height: ${pokeHeight}</h3>
  </div>
  `;
  } else {
    newCard.innerHTML = `
  <div class="pokeImageContainer pokemon-${pokeTypeOneDom}">
  <img src="${pokeImage}" id="poke-Image">
  </div>
  <div class="poke-desc">
  <h1>${pokemonName}</h1>
  <div class="pokemon-type-${pokeTypeOneDom}">${pokeTypeOneDom}</div>
  <h3>Height: ${pokeHeight}</h3>
  </div>
  `;
  }
  return newCard;
}
