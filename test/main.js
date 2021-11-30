const pokeName = document.querySelector('.poke-name');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');

fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
.then(res => res.json())
.then(data => {
    
});