import pokeHeaderCSS from './pokeHeader.module.css';
export default function PokeHeader({ type, sprite }) {
  return (
    <div className={`${pokeHeaderCSS.pokeImageContainer} pokemon-${type}`}>
      <img src={sprite} id={pokeHeaderCSS['poke-image']}></img>
    </div>
  );
}
