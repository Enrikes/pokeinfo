import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import PokeGrid from "./components/pokeGrid";
import PokeDetail from "./components/pokeDetails";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isDetailView = location.pathname.includes("/pokemonName");

  return (
    <div className="App">
      <Header />
      {isDetailView ? <PokeDetail /> : <PokeGrid />}{" "}
      <Routes>
        {/* <Route path="/" element={<PokeGrid />} /> */}
        <Route path="/:pokemonName" element={<PokeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
