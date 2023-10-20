import typeCSS from './pokeType.module.css';
export default function PokeType({ typeOne, typeTwo }) {
  return (
    <div className='poke-type-wrapper'>
      <div className={typeCSS`[${typeOne}]`}>{typeOne}</div>
      {PokeType ? <div className={typeCSS`[${typeTwo}]`}>{typeTwo}</div> : null}
    </div>
  );
}
