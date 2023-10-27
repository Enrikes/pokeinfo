import typeCSS from './pokeType.module.css';
export default function PokeType({ typeOne, typeTwo }) {
  return (
    <>
      <span className={typeCSS[typeOne]}>{typeOne}</span>
      {PokeType ? <span className={typeCSS[typeTwo]}>{typeTwo}</span> : null}
    </>
  );
}
