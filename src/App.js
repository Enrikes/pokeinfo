import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import PokeGrid from "./components/pokeGrid";
import PokeDetail from "./components/pokeDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PokeGrid />} />
        <Route path="/:pokemonName" element={<PokeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
