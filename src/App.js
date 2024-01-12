import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import PokeGrid from "./components/pokeGrid";
import PokeDetail from "./components/pokeDetails";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isGridVisible, setIsGridVisible] = useState(true);
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
      <Header />
      <PokeGrid
        scrollPOS={scrollPOS}
        setIsGridVisible={setIsGridVisible}
        isGridVisible={isGridVisible}
      />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/:pokemonName"
          element={<PokeDetail setIsGridVisible={setIsGridVisible} />}
        />
      </Routes>
    </div>
  );
}

export default App;
