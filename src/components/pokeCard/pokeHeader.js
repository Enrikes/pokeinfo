import pokeImageCSS from "./pokeHeader.module.css";
import pokeHeaderCSS from "./pokeType.module.css";
export default function PokeHeader({ type, sprite, name, id }) {
  const pokeHeader = pokeHeaderCSS[`pokemon-${type}`];
  return (
    <header
      className={`${pokeImageCSS.pokeImageContainer} ${pokeHeaderCSS.rounded} ${pokeHeaderCSS[type]}`}
    >
      <h1>{name}</h1>
      <img src={sprite} id={pokeImageCSS["poke-image"]}></img>
      <p className={pokeImageCSS.id}>#{id}</p>
    </header>
  );
}
