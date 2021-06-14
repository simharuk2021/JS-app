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
//This code adds a new pokemon to the list with the details listed as below
pokemonRepository.add({name:'Lapras', height:"8.02"});

//listing all the pokemons and their height
pokemonRepository.getAll().forEach(function(item) {
  //if the pokemon is higher then 7 than write: This is the biggest pokemon
  if (item.height > 5) {
    document.write(item.name + ' is ' + item.height +' feet high!' + ' - This is the biggest pokemon!' + '<br>');
  } else {
    document.write(item.name + ' is ' + item.height +' feet high!' + '<br>');
  }
})
