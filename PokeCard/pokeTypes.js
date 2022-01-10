export function createPokeCard(pokemon) {
  const card = document.createElement("div");
  card.className = "pokeCard";
  card.id = "pokeCardId";
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
    const pokeTypeContainer = document.createElement("div");
    const pokeTypeTwoContainer = document.createElement("div");

    switch (pokeTypeOneDom) {
      case "grass":
        pokeTypeContainer.classList.add("pokemon-type-grass");
        pokeTypeContainer.innerHTML += "grass";
        card.appendChild(pokeTypeContainer);
        break;
      case "poison":
        pokeTypeContainer.classList.add("pokemon-type-poison");
        pokeTypeContainer.innerHTML += "Poison";
        card.appendChild(pokeTypeContainer);
        break;
      case "fire":
        pokeTypeContainer.classList.add("pokemon-type-fire");
        pokeTypeContainer.innerHTML += "Fire";
        card.appendChild(pokeTypeContainer);
        break;
      case "flying":
        pokeTypeContainer.classList.add("pokemon-type-flying");
        pokeTypeContainer.innerHTML += "Flying";
        card.appendChild(pokeTypeContainer);
        break;
      case "water":
        pokeTypeContainer.classList.add("pokemon-type-water");
        pokeTypeContainer.innerHTML += "Water";
        card.appendChild(pokeTypeContainer);
        break;
      case "bug":
        pokeTypeContainer.classList.add("pokemon-type-bug");
        pokeTypeContainer.innerHTML += "Bug";
        card.appendChild(pokeTypeContainer);
        break;
    }
    switch (pokeTypeTwoDom) {
      case "grass":
        pokeTypeTwoContainer.classList.add("pokemon-type-grass");
        pokeTypeTwoContainer.innerHTML += "grass";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "poison":
        pokeTypeTwoContainer.classList.add("pokemon-type-poison");
        pokeTypeTwoContainer.innerHTML += "Poison";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "fire":
        pokeTypeTwoContainer.classList.add("pokemon-type-fire");
        pokeTypeTwoContainer.innerHTML += "Fire";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "flying":
        pokeTypeTwoContainer.classList.add("pokemon-type-flying");
        pokeTypeTwoContainer.innerHTML += "Flying";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "water":
        pokeTypeTwoContainer.classList.add("pokemon-type-water");
        pokeTypeTwoContainer.innerHTML += "Water";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "bug":
        pokeTypeTwoContainer.classList.add("pokemon-type-bug");
        pokeTypeTwoContainer.innerHTML += "Bug";
        card.appendChild(pokeTypeTwoContainer);
        break;
    }
    // card.innerHTML += `<p>${pokeTypeOneDom}/${pokeTypeTwoDom}</p>`;
  } else {
    const pokeTypeContainer = document.createElement("div");

    switch (pokeTypeOneDom) {
      case "grass":
        pokeTypeContainer.classList.add("pokemon-type-grass");
        pokeTypeContainer.innerHTML += "grass";
        card.appendChild(pokeTypeContainer);
        break;
      case "poison":
        pokeTypeContainer.classList.add("pokemon-type-poison");
        pokeTypeContainer.innerHTML += "Poison";
        card.appendChild(pokeTypeContainer);
        break;
      case "fire":
        pokeTypeContainer.classList.add("pokemon-type-fire");
        pokeTypeContainer.innerHTML += "Fire";
        card.appendChild(pokeTypeContainer);
        break;
      case "flying":
        pokeTypeContainer.classList.add("pokemon-type-flying");
        pokeTypeContainer.innerHTML += "Flying";
        card.appendChild(pokeTypeContainer);
        break;
      case "water":
        pokeTypeContainer.classList.add("pokemon-type-water");
        pokeTypeContainer.innerHTML += "Water";
        card.appendChild(pokeTypeContainer);
        break;
      case "bug":
        pokeTypeContainer.classList.add("pokemon-type-bug");
        pokeTypeContainer.innerHTML += "Bug";
        card.appendChild(pokeTypeContainer);
        break;
    }
  }
  //Pokemon card Description
  const pokeDesc = document.createElement("div");
  console.log(pokemon);

  pokeDesc.classList.add("poke-desc");
  card.appendChild(pokeDesc);
  return card;
}
