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
async function grabPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await res.json();

    for (let index of data.results) {
      const pokemonNames = index['name']
      const container = document.querySelector('.container');
      const pokeName = document.createElement('h4');
      pokeName.innerHTML = pokemonNames;
      container.appendChild(pokeName);
    }
  }


  async function main() {
    grabPokemon();
  }
  main();
  
