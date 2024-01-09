import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import PokeGrid from "./components/pokeGrid";
import PokeDetail from "./components/pokeDetails";
import { Route, Routes, useLocation } from "react-router-dom";
import pokeGridCSS from "./components/pokeGrid.module.css";
import { useEffect, useState } from "react";

function App() {
  const [isGridVisible, setIsGridVisible] = useState(true);

  return (
    <div className="App">
      <Header />
      <PokeGrid
        setIsGridVisible={setIsGridVisible}
        isGridVisible={isGridVisible}
      />
      <Routes>
        <Route
          path="/:pokemonName"
          element={<PokeDetail setIsGridVisible={setIsGridVisible} />}
        />
      </Routes>
    </div>
  );
}

export default App;
