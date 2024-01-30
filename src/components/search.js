import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchCSS from "./search.module.css";
import axios from "axios";
export default function SearchBar({ pokemonNames, setSearchedPokemon }) {
  const [input, setInput] = useState("");
  const [renderPokemon, setRenderPokemon] = useState([]);
  const inputField = useRef(null);
  const navigate = useNavigate();

  function isEmpty(input) {
    if (input.length === 0) {
      return true;
    }
  }

  useEffect(() => {
    if (inputField.current) {
      const inputText = inputField.current.value;
      if (isEmpty(inputText)) {
        setRenderPokemon([]);
        setSearchedPokemon([]);
        return;
      }
    }
    const pokemonResults = searchPokemon(input);

    setRenderPokemon(pokemonResults);
  }, [input]);

  function searchPokemon(query) {
    return pokemonNames.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }

  function dropdownSelection(name) {
    const input = document.querySelector(`.${searchCSS.input}`);
    input.value = name;
  }

  function renderDropdownItems() {
    let dropdownItems = renderPokemon.map((element) => {
      return (
        <div
          className={searchCSS["dropdown-item"]}
          onClick={(e) => {
            dropdownSelection(element);
          }}
        >
          {element}
        </div>
      );
    });
    return dropdownItems;
  }
  const fetchData = (value) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((res) => {
        setSearchedPokemon((prevPokemon) => [...prevPokemon, res.data]);
      });
  };
  const handleChange = (value) => {
    setInput(value);
  };
  async function handleSubmit() {
    if (input === "") return;
    setSearchedPokemon([]);
    const promises = renderPokemon.map((pokemon) => fetchData(pokemon));
    await Promise.all(promises);

    // await Promise.all(
    //   renderPokemon.forEach((pokemon) => {
    //     console.log("i ran");
    //     fetchData(pokemon);
    //   })
    // );
    navigate(`/search?query=${encodeURIComponent(input)}`);
  }

  return (
    <div className={searchCSS.wrapper}>
      <label>Search Pokemon</label>
      <input
        className={searchCSS.input}
        aria-label="Search for Pokemon"
        title="Search for a Pokemon by name"
        placeholder="Type a pokemon..."
        value={input}
        ref={inputField}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></input>
      <div className={searchCSS.dropdown}>
        {input.length > 0 ? renderDropdownItems() : null}
      </div>
    </div>
  );
}
