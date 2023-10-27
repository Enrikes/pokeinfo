import pokeDescCSS from './pokeDesc.module.css';
import PokeType from './pokeType';

export default function PokeDesc({ pokemon }) {
  const pokeTypeOne = pokemon.types[0].type.name;
  const pokeTypeTwo = pokemon.types[1]?.type?.name;
  console.log(pokeTypeTwo);

  return (
    <section className={pokeDescCSS['poke-desc']}>
      <h1>{pokemon.name}</h1>
      <PokeType typeOne={pokeTypeOne} typeTwo={pokeTypeTwo} />
      <h3>Height: {pokemon.height}</h3>
      <h3>Weight: {pokemon.weight}</h3>
    </section>
  );
}
