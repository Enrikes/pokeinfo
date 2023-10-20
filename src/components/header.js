import headerCSS from './header.module.css';
export default function Header({}) {
  return (
    <header className={headerCSS.header}>
      <nav>
        <div className={headerCSS.search}>
          <input id={headerCSS['poke-search']} type='text' />
        </div>
      </nav>
    </header>
  );
}
