//This code creates a repository for holding all of the pokemon
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

/* The below code creates a function called add, which allows for the addition of a new pokemon using .push*/
  function add(pokemon) {
    if (
      typeof pokemon === "object"
       )
      {pokemonList.push(pokemon);
      }
      else {
        console.log("pokemon is not correct");
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
  button.addEventListener('click', function(){
    showDetails(pokemon)
  });
}
/* this code creates a function which loads the list of items within each Pokemon within the URL */

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
  });
}

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

/* this code creates a function which loads the details for each item(pokemon) within the URL */
  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

/* the below code returns the add and getAll functions */
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails:showDetails
  };
})();
//This code adds a new pokemon to the list with the details listed as below
// console.log(pokemonRepository.getAll());
// pokemonRepository.add({name:'Lapras', height:"8.02", types:["Water Absorb", "Shell Armor"]});
//This code cycles through the list of all pokemon held within the repository



pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
