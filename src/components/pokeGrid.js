import axios from "axios";
import { useEffect, useState, useRef } from "react";
import PokeCard from "./pokeCard/pokeCard";
import pokeGridCSS from "./pokeGrid.module.css";
import SearchBar from "./search";
import { Link } from "react-router-dom";

export default function PokeGrid({ setIsGridVisible, isGridVisible }) {
  const [pokemon, setPokemon] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("idle");
  const [lastPokemonId, setLastPokemonId] = useState(1);
  const [pokemonNames, setPokemonNames] = useState([]);
  const fetchCalled = useRef(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && loadingStatus === "idle") {
          fetchAllPokemons();
        }
      },
      { rootMargin: "100px" }
    );

    return () => observer.current && observer.current.disconnect();
  }, [loadingStatus]);

  useEffect(() => {
    const lastElement = document.querySelector("a:last-child");
    if (lastElement) {
      observer.current.observe(lastElement);
    }

    return () => lastElement && observer.current.unobserve(lastElement);
  }, [pokemon]);

  const fetchAllNames = async () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => {
        setPokemonNames(response.data.results.map((pokemon) => pokemon.name));
      });
  };
  const fetchAllPokemons = async () => {
    if (fetchCalled.current) {
      return;
    }
    fetchCalled.current = true;
    setLoadingStatus("loading");

    try {
      const requests = Array.from({ length: 20 }, (_, i) => {
        return axios.get(
          `https://pokeapi.co/api/v2/pokemon/${lastPokemonId + i}`
        );
      });

      const responses = await Promise.all(requests);
      const newPokemon = responses.map((response) => response.data);

      setPokemon((prev) => [...prev, ...newPokemon]);
      setLastPokemonId((prevId) => prevId + 20);
    } catch (error) {
      console.error("Failed to fetch Pokémon data:", error);
    } finally {
      setLoadingStatus("idle");
      fetchCalled.current = false;
    }
  };

  useEffect(() => {
    fetchAllNames();
    fetchAllPokemons();
  }, []);

  function handleClick() {
    setIsGridVisible(false);
    console.log("yo we out here");
  }

  return (
    <div>
      {!isGridVisible ? null : <SearchBar pokemonNames={pokemonNames} />}
      <div className={pokeGridCSS.grid}>
        {pokemon.map((pokemons, index) => (
          <Link
            to={`/${pokemons.name}`}
            className={`${pokeGridCSS["link-no-underline"]} ${
              isGridVisible ? "" : "hidden"
            }`}
            state={{ pokemon: pokemons }}
            key={pokemons.id}
            onClick={handleClick}
          >
            <PokeCard pokemon={pokemons} className="pokeCard" />
          </Link>
        ))}
        {loadingStatus === "loading" && <p>Loading...</p>}
      </div>
    </div>
  );
}
