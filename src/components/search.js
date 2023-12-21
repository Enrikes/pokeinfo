import { useState } from "react";
import searchCSS from "./search.module.css";
import axios from "axios";
export default function SearchBar({ pokemonNames }) {
  const [input, setInput] = useState("");
  console.log(input);
  function searchPokemon(query) {
    return pokemonNames.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }
  function renderDropdownItems() {
    console.log("i ran");
    let dropdownItems = searchPokemon(input).map((element) => {
      return <div className={searchCSS["dropdown-item"]}>{element}</div>;
    });
    return dropdownItems;
  }
  const fetchData = (value) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter;
      });
  };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
    console.log(searchPokemon(value));
  };

  return (
    <div className={searchCSS.wrapper}>
      <label>Search Pokemon</label>
      <input
        className={searchCSS.input}
        aria-label="Search for Pokemon"
        title="Search for a Pokemon by name"
        placeholder="Type a pokemon..."
        value={input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></input>
      <div className={searchCSS.dropdown}>
        {input.length > 0 ? renderDropdownItems() : null}
      </div>
      {/* {pokemonNames.map((item) => (
        <div className="test">{item}</div>
      ))} */}
    </div>
  );
}
