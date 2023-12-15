import pokeImageCSS from "./pokeHeader.module.css";
import pokeHeaderCSS from "./pokeType.module.css";
export default function PokeHeader({ type, sprite, name }) {
  const pokeHeader = pokeHeaderCSS[`pokemon-${type}`];
  return (
    <header className={`${pokeImageCSS.pokeImageContainer} ${pokeHeader}`}>
      <h1>{name}</h1>
      <img src={sprite} id={pokeImageCSS["poke-image"]}></img>
    </header>
  );
}
