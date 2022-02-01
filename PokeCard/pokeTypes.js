export function createPokeCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokeCard");
  const pokemonName = pokemon.name;
  const pokeType = pokemon["types"];
  const pokeImage = pokemon["sprites"]["front_default"];
  const pokeTypeOneDom = pokeType["0"]["type"]["name"];
  const pokemonNameDom = document.createElement("h1");
  pokemonNameDom.innerHTML = pokemonName;
  const pokeHeight = pokemon.height;
  const pokeWeight = pokemon.weight;
  async function pokeEvolutions() {
    const res = await fetch("https://pokeapi.co/api/v2/evolution-chain/");
    const data = await res.json();
    console.log(data);
  }
  pokeEvolutions();

  if (pokeType.length === 2) {
    const pokeTypeTwoDom = pokeType["1"]["type"]["name"];
    card.innerHTML = `
  <div class="pokeImageContainer pokemon-${pokeTypeOneDom}">
  <img src="${pokeImage}" id="poke-Image">
  </div>
  <div class="poke-desc">
    <h1>${pokemonName}</h1>
  <div class="pokemon-type-${pokeTypeOneDom}">${pokeTypeOneDom}</div>
  <div class="pokemon-type-${pokeTypeTwoDom}">${pokeTypeTwoDom}</div>
  <h3>Height: ${pokeHeight}</h3>
    <h3>Weight: ${pokeWeight}</h3>
  <h3>

  </div>
  `;
  } else {
    card.innerHTML = `
  <div class="pokeImageContainer pokemon-${pokeTypeOneDom}">
  <img src="${pokeImage}" id="poke-Image">
  </div>
  <div class="poke-desc">
  <h1>${pokemonName}</h1>
  <div class="pokemon-type-${pokeTypeOneDom}">${pokeTypeOneDom}</div>
  <h3>Height: ${pokeHeight}</h3>
    <h3>Weight: ${pokeWeight}</h3>

  </div>
  `;
  }
  return card;
}
