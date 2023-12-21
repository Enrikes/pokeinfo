import { useState } from "react";
import searchCSS from "./search.modules.css";
import axios from "axios";
export default function SearchBar({}) {
  const [input, setInput] = useState("");
  console.log(input);
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
    fetchData(value);
  };

  return (
    <div className={searchCSS.wrapper}>
      <label>Search Pokemon</label>
      <input
        placeholder="Type a pokemon..."
        value={input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></input>
    </div>
  );
}
