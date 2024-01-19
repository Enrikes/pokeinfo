import { useLocation, Link } from "react-router-dom";
import pokeDetailsCSS from "./pokeDetails.module.css";
import pokemonWeakness from "./pokemonWeakness";
import axios from "axios";
import { useEffect } from "react";

export default function PokeDetail({ setIsGridVisible }) {
  const location = useLocation();
  const { pokemon } = location.state || {};

  const pokemonImage =
    pokemon["sprites"]["other"]["official-artwork"]["front_default"];

  if (!pokemon) {
    return <div>Loading</div>;
  }
  // console.log(pokemon);
  function getPreferences(type) {
    return pokemonWeakness[type];
  }
  // console.log(pokemon?.types[0].type.name);
  // console.log(getPreferences(pokemon?.types[0].type.name));

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
