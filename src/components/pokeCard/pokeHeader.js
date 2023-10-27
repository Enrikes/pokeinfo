import pokeImageCSS from './pokeHeader.module.css';
import pokeHeaderCSS from './pokeType.module.css';
export default function PokeHeader({ type, sprite, children }) {
  const pokeHeader = pokeHeaderCSS[`pokemon-${type}`];
  return (
    <header className={`${pokeImageCSS.pokeImageContainer} ${pokeHeader}`}>
      <img src={sprite} id={pokeImageCSS['poke-image']}></img>
    </header>
  );
}
