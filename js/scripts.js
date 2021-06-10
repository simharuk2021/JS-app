/*The below code creates a repository within a function which is already executed. Within the Repository is the array of Pokemon*/

let pokemonRepository = (function () {
  let pokemonList = [{name:"Bulbasaur", height:2.04, types:["grass", "poison"]},
  {name:"Venusaur", height:6.07, types:["seed", "overgrown"]},
{name:"Charmander", height:2.00, types:["fire"]}];

/* The below code creates a function called add, which allows for the addition of a new pokemon using .push*/
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

/*The below code creates a getAll function which returns pokemonList*/
  function getAll() {
    return pokemonList;
  }

/* the below code returns the add and getAll functions */
  return {
    add: add,
    getAll: getAll
  };
})();
pokemonRepository.add({name:'Metapod'});
console.log(pokemonRepository.getAll());
