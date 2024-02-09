import { useLocation, Link } from "react-router-dom";
import pokeDetailsCSS from "./pokeDetails.module.css";
import pokemonWeakness from "./pokemonWeakness";

export default function PokeDetail({ setIsGridVisible }) {
  const location = useLocation();

  const locationState = location.state || {};
  const pokemon = {
    ...(locationState.pokemon || {}),
    ...(locationState.searchedPokemon || {}),
  };
  console.log(pokemon);
  if (!pokemon) {
    return <div>Loading...</div>;
  }
  console.log("I triggered");

  const pokemonImage =
    pokemon["sprites"]["other"]["official-artwork"]["front_default"];

  if (!pokemon) {
    return <div>Loading</div>;
  }
  function getPreferences(type) {
    return pokemonWeakness[type];
  }

  return (
    <div className={pokeDetailsCSS.container}>
      <header className={pokeDetailsCSS.banner}>
        <h1 className={pokeDetailsCSS.pokemon}>{pokemon.name}</h1>
        <div className={pokeDetailsCSS.id}>{pokemon.id}</div>
      </header>
      <section className={pokeDetailsCSS.description}>
        <article className={pokeDetailsCSS.background}>
          <h1 className={pokeDetailsCSS["detail-header"]}></h1>
          <img
            className={pokeDetailsCSS["poke-detailmon"]}
            src={pokemonImage}
          ></img>
        </article>
        <article className={pokeDetailsCSS.background2}>geee</article>
      </section>
    </div>
  );
}
