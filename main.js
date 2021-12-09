// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(res => res.json())
// .then(data => {
//     const pokeWeight = document.querySelector('.poke-weight');
//     const pokeHeight = document.querySelector('.poke-height');
//     const pokeName = document.querySelectorAll('.poke-name');
//     const pokeTypeOne = document.querySelector ('.poke-type-one');
//     const pokeTypeTwo = document.querySelector('.poke-type-two');
//     const pokeImage = document.querySelectorAll('.poke-front-image');
//     console.log(data['sprites']['front_default']);
//     pokeWeight.textContent = data['weight'];
//     pokeHeight.textContent = data['height'];
//     pokeName.textContent = data['name'];
//     document.getElementById("poke-front-image").src = data['sprites']['front_default'];
//     const pokeType = data['types'];
//     const pokeFirstType = pokeType[0];
//     const pokeSecondType = pokeType[1];

//     pokeTypeOne.textContent = pokeFirstType['type']['name'];

//     if(pokeSecondType){
//         pokeTypeTwo.textContent = pokeSecondType['type']['name'];
//     } else {
//         pokeTypeTwo.classList.add('hide');
//         pokeSecondType.textContent = '';
//     };

// });

// This grabs the pokemon name with URL
async function grabPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await res.json();
    const pokemonArray = [];
    for (let index of data.results) {
      pokemonArray.push(index.url);
      return pokemonArray;
    }
  }
  
  async function grabSinglePokeURL(url) {
    const res = await fetch(url);
    const pokemons = await res.json();
    return pokemons;
  }
  async function inputPokeName(pokemonArray) {
    const pokeName = pokemonArray["name"];
    await console.log(pokeName);
  }
  
  async function main() {
    await console.log(grabPokemon());
  }
  main();
  
