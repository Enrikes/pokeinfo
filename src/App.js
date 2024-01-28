import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import PokeGrid from "./components/pokeGrid";
import PokeDetail from "./components/pokeDetails";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SearchGrid from "./components/searchGrid";
import SearchBar from "./components/search";

function App() {
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  let scrollPOS = useRef(0);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setIsGridVisible(currentPath === "/");
  }, [location]);

  useEffect(() => {
    if (isGridVisible) {
      window.scrollTo(0, scrollPOS.current);
    }
  }, [isGridVisible]);

  const Home = () => null;
  return (
    <div className="App">
      <Header setIsGridVisible={setIsGridVisible} />
      {!isGridVisible ? null : (
        <SearchBar
          pokemonNames={pokemonNames}
          setSearchedPokemon={setSearchedPokemon}
        />
      )}
      {Object.keys(searchedPokemon).length > 0 ? (
        <SearchGrid
          scrollPOS={scrollPOS}
          setIsGridVisible={setIsGridVisible}
          isGridVisible={isGridVisible}
          searchedPokemon={searchedPokemon}
          setSearchedPokemon={setSearchedPokemon}
        />
      ) : (
        <PokeGrid
          scrollPOS={scrollPOS}
          setIsGridVisible={setIsGridVisible}
          isGridVisible={isGridVisible}
          setSearchedPokemon={setSearchedPokemon}
          setPokemonNames={setPokemonNames}
        />
      )}

      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/:pokemonName"
          element={<PokeDetail setIsGridVisible={setIsGridVisible} />}
        />
        <Route
          path="/search"
          element={
            <SearchGrid
              scrollPOS={scrollPOS}
              setIsGridVisible={setIsGridVisible}
              isGridVisible={isGridVisible}
              searchedPokemon={searchedPokemon}
              setSearchedPokemon={setSearchedPokemon}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
