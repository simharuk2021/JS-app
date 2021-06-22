//This code creates a repository for holding all of the pokemon
let pokemonRepository = (function () {
  let pokemonList = [{name:"Bulbasaur", height:2.04, types:["grass", "poison"]},
  {name:"Venusaur", height:6.07, types:["seed", "overgrown"]},
{name:"Charmander", height:2.00, types:["fire"]}];

/* The below code creates a function called add, which allows for the addition of a new pokemon using .push*/
  function add(pokemon) {
    if (typeof pokemon === "object"){
      pokemonList.push(pokemon);
    }
  }

/*The below code creates a getAll function which returns pokemonList*/
  function getAll() {
    return pokemonList;
  }
/*this function recreates the list of Pokemon (including the added pokemon) as buttons.
These buttons are then added to the list of pokemon */
function addListItem (pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement ("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}

/* the below code returns the add and getAll functions */
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
//This code adds a new pokemon to the list with the details listed as below
console.log(pokemonRepository.getAll());
pokemonRepository.add({name:'Lapras', height:"8.02", types:["Water Absorb", "Shell Armor"]});
//This code cycles through the list of all pokemon held within the repository
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
