import { useState } from "react";
import PokeCard from "./pokeCard/pokeCard";
import pokeGridCSS from "./pokeGrid.module.css";
import { Link } from "react-router-dom";

export default function SearchGrid({
  setIsGridVisible,
  isGridVisible,
  scrollPOS,
  searchedPokemon,
  setSearchedPokemon,
}) {
  const [loadingStatus, setLoadingStatus] = useState("idle");
  // if(isGridVisible){

  // }
  function handleClick() {
    scrollPOS.current = window.scrollY;
    setIsGridVisible(false);
  }
  return (
    <div className={pokeGridCSS.grid}>
      {searchedPokemon.map((pokemons, index) => (
        <Link
          to={`/${pokemons.name}`}
          className={`${pokeGridCSS["link-no-underline"]} ${
            pokeGridCSS["poke-anchor"]
          } ${isGridVisible ? "hidden" : ""}`}
          state={{ searchedPokemon: pokemons }}
          key={pokemons.id}
          onClick={handleClick}
        >
          <PokeCard pokemon={pokemons} className="pokeCard" />
        </Link>
      ))}
      {loadingStatus === "loading" && <p>Loading...</p>}
    </div>
  );
}
