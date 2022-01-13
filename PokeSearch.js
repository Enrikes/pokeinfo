import { grabPokemon } from "./main.js";
import { createPokeSearchCard } from "./PokeSearchBar/PokeSearchCards.js";
export async function pokeSearch() {
  const pokemonSearch = await grabPokemon();

  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", (e) => {
    const filteredPokemonDom = document.querySelector(".poke-card-search");
    const searchString = e.target.value;
    const filteredPokemon = pokemonSearch.filter((pokemonSearch) => {
      return pokemonSearch.name.includes(searchString);
    });
    for (const pokemon of filteredPokemon) {
      if (searchString.length === 0) {
        filteredPokemonDom.innerHTML = "";
      } else {
        createPokeSearchCard(pokemon);
      }
    }
  });
}
