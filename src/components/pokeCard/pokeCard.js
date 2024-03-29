import PokeDesc from './pokeDesc';
import PokeHeader from './pokeHeader';

export default function PokeCard({ pokemon }) {
  const sprite = pokemon['sprites']['front_default'];
  const pokeTypeOne = pokemon.types[0].type.name;

  return (
    <article className='pokeCard'>
      <PokeHeader
        type={pokeTypeOne}
        sprite={sprite}
        name={pokemon.name}
        id={pokemon.id}
      />
      <PokeDesc pokemon={pokemon} />
    </article>
  );
}
