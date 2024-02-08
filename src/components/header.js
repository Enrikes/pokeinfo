import headerCSS from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header({ setIsGridVisible, setSearchedPokemon }) {
  function handleClick() {
    setIsGridVisible(true);
    setSearchedPokemon([]);
  }
  return (
    <header className={headerCSS.header}>
      <nav>
        <Link className="remove-text-decoration" to={"/"}>
          <h1 className={headerCSS.name} onClick={handleClick}>
            PokeInfo
          </h1>
        </Link>
      </nav>
    </header>
  );
}
