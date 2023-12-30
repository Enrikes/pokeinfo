import pokeDescCSS from "./pokeDesc.module.css";
import PokeType from "./pokeType";

export default function PokeDesc({ pokemon }) {
  const pokeTypeOne = pokemon.types[0].type.name;
  const pokeTypeTwo = pokemon.types[1]?.type?.name;

  return (
    <section className={pokeDescCSS["poke-desc"]}>
      <PokeType typeOne={pokeTypeOne} typeTwo={pokeTypeTwo} />
    </section>
  );
}
