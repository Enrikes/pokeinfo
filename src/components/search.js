import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchCSS from "./search.module.css";
import axios from "axios";
export default function SearchBar({
  pokemonNames,
  setSearchedPokemon,
  setIsGridVisible,
}) {
  const [input, setInput] = useState("");
  const [renderPokemon, setRenderPokemon] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef(null);
  const inputField = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  function isEmpty(input) {
    if (input.length === 0) {
      return true;
    }
  }
  console.log(isOpen);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        console.log(event);
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  useEffect(() => {
    if (inputField.current) {
      const inputText = inputField.current.value;
      if (isEmpty(inputText)) {
        setRenderPokemon([]);
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
    setIsOpen(true);
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
  async function handleSubmit(input) {
    console.log(input);
    input.preventDefault();

    if (input === "") return;
    setSearchedPokemon([]);
    console.log("im running");
    const promises = renderPokemon.map((pokemon) => fetchData(pokemon));
    await Promise.all(promises);
    setIsGridVisible(false);
    navigate(`/search?query=${encodeURIComponent(input)}`);
  }
  function handleBack() {
    console.log("chacho 🗣️🗣️");
    setIsGridVisible(true);
    setSearchedPokemon([]);
    navigate("/");
  }
  function handleSpacer() {
    if (currentPath === "/search" || currentPath === "/pokemonName") {
      return true;
    }
    return false;
  }
  function handleDropdownActive() {
    if (input.length > 0) {
      return true;
    }
    if (currentPath === "/search") {
      console.log("search !!!");
      return false;
    }
    return false;
  }

  return (
    <div className={searchCSS.wrapper}>
      {handleSpacer() ? (
        <button
          className={searchCSS.backArrow}
          aria-label="Go back"
          onClick={handleBack}
        ></button>
      ) : (
        <div className={searchCSS.spacer}>spacer</div>
      )}

      <form
        ref={dropdown}
        className={searchCSS["form-wrapper"]}
        // onSubmit={(e) => {
        //   console.log(e);
        //   handleSubmit(e.target.value);
        // }}
      >
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
              handleSubmit(e);
            }
          }}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        ></input>
        {isOpen ? (
          <div className={searchCSS.dropdown}>
            {handleDropdownActive() ? renderDropdownItems() : null}
          </div>
        ) : null}
      </form>
      <div>Filter</div>
    </div>
  );
}
