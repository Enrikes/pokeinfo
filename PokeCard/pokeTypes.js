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
  const pokeId = pokemon.id;
  const pokeIdDom = document.createElement("p");
  const pokeHeight = pokemon.height;
  pokeIdDom.classList.add("poke-id");
  pokeIdDom.innerHTML = `#${pokeId}`;
  pokeImageContainer.appendChild(pokeIdDom);
  pokeImageContainer.classList.add("pokeImageContainer");
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
  } else if (pokeTypeOneDom === "flying") {
    pokeImageContainer.classList.add("pokemon-flying");
  } else if (pokeTypeOneDom === "normal") {
    pokeImageContainer.classList.add("pokemon-normal");
  } else if (pokeTypeOneDom === "poison") {
    pokeImageContainer.classList.add("pokemon-poison");
  } else if (pokeTypeOneDom === "electric") {
    pokeImageContainer.classList.add("pokemon-electric");
  } else if (pokeTypeOneDom === "ground") {
    pokeImageContainer.classList.add("pokemon-ground");
  } else if (pokeTypeOneDom === "fairy") {
    pokeImageContainer.classList.add("pokemon-fairy");
  } else if (pokeTypeOneDom === "fighting") {
    pokeImageContainer.classList.add("pokemon-fighting");
  } else if (pokeTypeOneDom === "psychic") {
    pokeImageContainer.classList.add("pokemon-psychic");
  } else if (pokeTypeOneDom === "rock") {
    pokeImageContainer.classList.add("pokemon-rock");
  } else if (pokeTypeOneDom === "ghost") {
    pokeImageContainer.classList.add("pokemon-ghost");
  } else if (pokeTypeOneDom === "ice") {
    pokeImageContainer.classList.add("pokemon-ice");
  } else if (pokeTypeOneDom === "dragon") {
    pokeImageContainer.classList.add("pokemon-dragon");
  } else if (pokeTypeOneDom === "bug") {
    pokeImageContainer.classList.add("pokemon-bug");
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
      case "normal":
        pokeTypeContainer.classList.add("pokemon-type-normal");
        pokeTypeContainer.innerHTML += "Normal";
        card.appendChild(pokeTypeContainer);
        break;
      case "electric":
        pokeTypeContainer.classList.add("pokemon-type-electric");
        pokeTypeContainer.innerHTML += "Electric";
        card.appendChild(pokeTypeContainer);
        break;
      case "ground":
        pokeTypeContainer.classList.add("pokemon-type-ground");
        pokeTypeContainer.innerHTML += "Ground";
        card.appendChild(pokeTypeContainer);
        break;
      case "fairy":
        pokeTypeContainer.classList.add("pokemon-type-fairy");
        pokeTypeContainer.innerHTML += "Fairy";
        card.appendChild(pokeTypeContainer);
        break;
      case "fighting":
        pokeTypeContainer.classList.add("pokemon-type-fighting");
        pokeTypeContainer.innerHTML += "Fighting";
        card.appendChild(pokeTypeContainer);
        break;
      case "psychic":
        pokeTypeContainer.classList.add("pokemon-type-psychic");
        pokeTypeContainer.innerHTML += "Psychic";
        card.appendChild(pokeTypeContainer);
        break;
      case "rock":
        pokeTypeContainer.classList.add("pokemon-type-rock");
        pokeTypeContainer.innerHTML += "Rock";
        card.appendChild(pokeTypeContainer);
        break;
      case "ghost":
        pokeTypeContainer.classList.add("pokemon-type-ghost");
        pokeTypeContainer.innerHTML += "Ghost";
        card.appendChild(pokeTypeContainer);
        break;
      case "ice":
        pokeTypeContainer.classList.add("pokemon-type-ice");
        pokeTypeContainer.innerHTML += "Ice";
        card.appendChild(pokeTypeContainer);
        break;
      case "dragon":
        pokeTypeContainer.classList.add("pokemon-type-dragon");
        pokeTypeContainer.innerHTML += "Dragon";
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
      case "normal":
        pokeTypeTwoContainer.classList.add("pokemon-type-normal");
        pokeTypeTwoContainer.innerHTML += "Normal";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "electric":
        pokeTypeTwoContainer.classList.add("pokemon-type-electric");
        pokeTypeTwoContainer.innerHTML += "Electric";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "ground":
        pokeTypeTwoContainer.classList.add("pokemon-type-ground");
        pokeTypeTwoContainer.innerHTML += "Ground";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "fairy":
        pokeTypeTwoContainer.classList.add("pokemon-type-fairy");
        pokeTypeTwoContainer.innerHTML += "Fairy";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "fighting":
        pokeTypeTwoContainer.classList.add("pokemon-type-fighting");
        pokeTypeTwoContainer.innerHTML += "Fighting";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "psychic":
        pokeTypeTwoContainer.classList.add("pokemon-type-psychic");
        pokeTypeTwoContainer.innerHTML += "Psychic";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "rock":
        pokeTypeTwoContainer.classList.add("pokemon-type-rock");
        pokeTypeTwoContainer.innerHTML += "Rock";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "ghost":
        pokeTypeTwoContainer.classList.add("pokemon-type-ghost");
        pokeTypeTwoContainer.innerHTML += "Ghost";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "ice":
        pokeTypeTwoContainer.classList.add("pokemon-type-ice");
        pokeTypeTwoContainer.innerHTML += "Ice";
        card.appendChild(pokeTypeTwoContainer);
        break;
      case "dragon":
        pokeTypeTwoContainer.classList.add("pokemon-type-dragon");
        pokeTypeTwoContainer.innerHTML += "Dragon";
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
      case "normal":
        pokeTypeContainer.classList.add("pokemon-type-normal");
        pokeTypeContainer.innerHTML += "Normal";
        card.appendChild(pokeTypeContainer);
        break;
      case "electric":
        pokeTypeContainer.classList.add("pokemon-type-electric");
        pokeTypeContainer.innerHTML += "Electric";
        card.appendChild(pokeTypeContainer);
        break;
      case "ground":
        pokeTypeContainer.classList.add("pokemon-type-ground");
        pokeTypeContainer.innerHTML += "Ground";
        card.appendChild(pokeTypeContainer);
        break;
      case "fairy":
        pokeTypeContainer.classList.add("pokemon-type-fairy");
        pokeTypeContainer.innerHTML += "Fairy";
        card.appendChild(pokeTypeContainer);
        break;
      case "fighting":
        pokeTypeContainer.classList.add("pokemon-type-fighting");
        pokeTypeContainer.innerHTML += "Fighting";
        card.appendChild(pokeTypeContainer);
        break;
      case "psychic":
        pokeTypeContainer.classList.add("pokemon-type-psychic");
        pokeTypeContainer.innerHTML += "Psychic";
        card.appendChild(pokeTypeContainer);
        break;
      case "rock":
        pokeTypeContainer.classList.add("pokemon-type-rock");
        pokeTypeContainer.innerHTML += "Rock";
        card.appendChild(pokeTypeContainer);
        break;
      case "ghost":
        pokeTypeContainer.classList.add("pokemon-type-ghost");
        pokeTypeContainer.innerHTML += "Ghost";
        card.appendChild(pokeTypeContainer);
        break;
      case "ice":
        pokeTypeContainer.classList.add("pokemon-type-ice");
        pokeTypeContainer.innerHTML += "Ice";
        card.appendChild(pokeTypeContainer);
        break;
      case "dragon":
        pokeTypeContainer.classList.add("pokemon-type-dragon");
        pokeTypeContainer.innerHTML += "Dragon";
        card.appendChild(pokeTypeContainer);
        break;
      case "bug":
        pokeTypeContainer.classList.add("pokemon-type-bug");
        pokeTypeContainer.innerHTML += "Bug";
        card.appendChild(pokeTypeContainer);
        break;
    }
  }
  //Pokemon Height
  const pokeHeightTitle = document.createElement("h3");
  pokeHeightTitle.innerHTML = `Height: ${pokeHeight}`;
  card.appendChild(pokeHeightTitle);

  //Pokemon card Description
  const pokeDesc = document.createElement("div");

  pokeDesc.classList.add("poke-desc");
  card.appendChild(pokeDesc);
  return card;
}
