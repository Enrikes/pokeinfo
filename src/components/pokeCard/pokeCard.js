import PokeHeader from './pokeHeader';
import PokeType from './pokeType';

export default function PokeCard({ pokemon }) {
  const pokeTypeOne = pokemon.types[0].type.name;
  const pokeTypeTwo = pokemon[types][1][type][name];
  const sprite = pokemon['sprites']['front_default'];
  return (
    <div>
      <PokeHeader type={pokeTypeOne} image={sprite} />
      <div class='poke-desc'>
        <h1>{pokenon.name}</h1>
        <PokeType typeOne={pokeTypeOne} typeTwo={pokeTypeTwo} />
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
      </div>
    </div>
  );
}
