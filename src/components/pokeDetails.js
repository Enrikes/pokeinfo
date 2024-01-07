import { useLocation, Link } from "react-router-dom";
import pokeDetailsCSS from "./pokeDetails.module.css";
import axios from "axios";
import { useEffect } from "react";

export default function PokeDetail({ setIsGridVisible }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { pokemon } = location.state || {};
  useEffect(() => {
    return () => {
      setIsGridVisible(true);
    };
  }, [setIsGridVisible]);
  // if (pokemon === undefined) {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon${currentPath}`)
  //     .then((response) => {
  //       pokemon = response.data;
  //     });
  // }
  const pokemonImage =
    pokemon["sprites"]["other"]["official-artwork"]["front_default"];

  if (!pokemon) {
    return <div>Loading</div>;
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
