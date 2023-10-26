import axios from 'axios';
import { useEffect, useState } from 'react';
import PokeCard from './pokeCard/pokeCard';

export default function PokeGrid({}) {
  const [pokemon, setPokemon] = useState();
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((res) => {
        setPokemon(res.data);
        setIsFetched(true);
        console.log('Pokemon data:', res.data); // Add this for debugging
      })
      .catch((error) => {
        console.error('Error fetching Pokemon:', error);
      });
  }, []);

  return <div>{isFetched ? <PokeCard pokemon={pokemon} /> : null}</div>;
}
