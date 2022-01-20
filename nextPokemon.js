import { grabPokemon } from "./main.js"
import { getSinglePokeUrl } from "./main.js"
    let a = 0;

export function nextPokemon () {
    a += 10;
    console.log(a)
    let b = 20;
    const pokemon = grabPokemon(b, a)
    console.log(getSinglePokeUrl(pokemon))
}
