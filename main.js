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

// This grabs the pokemon name to DOM
const container = document.querySelector('.container');

async function grabPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await res.json();

    for (let index of data.results) {
      const pokemonNames = index['name']
      const pokeName = document.createElement('h4');
      pokeName.innerHTML = pokemonNames;
      container.appendChild(pokeName);
    }
  }
async function grabPokemonInfo(){
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();
  const basePokeInfo = data.results;
  const array = [];
  
  for (const pokemon of basePokeInfo) {
    array.push(await getSinglePokeUrl(pokemon.url));
  }
  for (const singlePokemon of array) {
    console.log(singlePokemon.types['0']['type']['name']);
    const pokemonType = singlePokemon.types
    const pokeTypeDom = document.createElement('p');
    // Two type pokemon checker
    if (pokemonType.length === 2) {
      pokeTypeDom.textContent = `${pokemonType['0']['type']['name']} / ${pokemonType['1']['type']['name']} `;
      container.appendChild(pokeTypeDom);

    } else {
      pokeTypeDom.textContent = pokemonType['0']['type']['name']
      container.appendChild(pokeTypeDom);

    }
  }
  return array
}

async function getSinglePokeUrl(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
  
}

  async function main() {
    grabPokemon();
    await console.log(grabPokemonInfo(1));
    
  }
  main();
  
