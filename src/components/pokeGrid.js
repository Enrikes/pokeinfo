import axios from "axios";
import { useEffect, useState, useRef } from "react";
import PokeCard from "./pokeCard/pokeCard";
import pokeGridCSS from "./pokeGrid.module.css";

export default function PokeGrid({}) {
  const [pokemon, setPokemon] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("idle");
  const [lastPokemonId, setLastPokemonId] = useState(1);
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
    const lastElement = document.querySelector(".pokeCard:last-child");
    if (lastElement) {
      observer.current.observe(lastElement);
    }

    return () => lastElement && observer.current.unobserve(lastElement);
  }, [pokemon]);

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
    fetchAllPokemons();
  }, []);

  return (
    <div className={pokeGridCSS.grid}>
      {pokemon.map((pokemons, index) => (
        <PokeCard pokemon={pokemons} key={pokemons.id} className="pokeCard" />
      ))}
      {loadingStatus === "loading" && <p>Loading...</p>}
    </div>
  );
}
