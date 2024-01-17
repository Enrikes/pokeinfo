import headerCSS from "./header.module.css";
export default function Header({ setIsGridVisible }) {
  function handleClick() {
    setIsGridVisible(true);
  }
  return (
    <header className={headerCSS.header}>
      <nav>
        <h1 className={headerCSS.name} onClick={handleClick}>
          PokeInfo
        </h1>
      </nav>
    </header>
  );
}
