import { grabPokemon } from "./main.js"
import { getSinglePokeUrl } from "./main.js"
import { createPokeCard } from "./PokeCard/pokeTypes.js"
    let a = 0;

export async function nextPokemon () {
    a += 10;
    console.log(a)
    let b = 20;
    const pokemon = grabPokemon(b, a);
    const nextPokemonArray = [];
    nextPokemonArray.push(pokemon)
    console.log(nextPokemonArray);
    for (const nextPokemonDom of nextPokemonArray) {
        console.log(nextPokemonDom)
    }
      return nextPokemonArray

    console.log(pokemon)
    console.log(getSinglePokeUrl(pokemon))
}
