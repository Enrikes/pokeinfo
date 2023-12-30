import typeCSS from "./pokeType.module.css";
export default function PokeType({ typeOne, typeTwo }) {
  return (
    <>
      <span className={`${typeCSS[typeOne]} ${typeCSS.type}`}>{typeOne}</span>
      {PokeType ? (
        <span className={`${typeCSS[typeTwo]} ${typeCSS.type}`}>{typeTwo}</span>
      ) : null}
    </>
  );
}
