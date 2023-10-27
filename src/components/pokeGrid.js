import axios from 'axios';
import { useEffect, useState } from 'react';
import PokeCard from './pokeCard/pokeCard';

export default function PokeGrid({}) {
  const [pokemon, setPokemon] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('idle');
  const [isFetched, setIsFetched] = useState(false);
  let pokemonID = 1;

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoadingStatus('loading');

        const requests = Array.from({ length: 20 }, (_, i) => {
          return axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
        });

        const responses = await Promise.all(requests);
        const allPokemons = responses.map((response) => response.data);
        setIsFetched(true);
        setLoadingStatus('loaded');
        setPokemon(allPokemons);
      } catch (error) {
        console.error('Failed to fetch Pokémon data:', error);
      }
    };

    fetchAllPokemons();
  }, []);
  console.log(pokemon);

  return (
    <div>
      {loadingStatus == 'loaded' &&
        pokemon.map((pokemons) => <PokeCard pokemon={pokemons} />)}
      {loadingStatus == 'loading' && <p>Loading...</p>}
    </div>
  );
}
