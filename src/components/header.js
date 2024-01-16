import headerCSS from "./header.module.css";
export default function Header({}) {
  return (
    <header className={headerCSS.header}>
      <nav>
        <h1 className={headerCSS.name}>PokeInfo</h1>
      </nav>
    </header>
  );
}
