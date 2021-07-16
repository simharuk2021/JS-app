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

//loads the list of pokemon as JSON and loops through each item - the results of which are stored under name and detailsURL
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

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    showModal(item);
  });
}

function showModal(item) {
    // Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  // creates a button which is displayed as a x and links an event listener to a click and routes to the hide modal function
   let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'x';
closeButtonElement.addEventListener('click', hideModal);

//creates a title element to access the pokemon name
  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

//creates a p element to display and access the pokemon height
  let contentElement = document.createElement('p');
  contentElement.innerText = 'Height: ' + pokemon.height;

//creates a function which accesses and loops through the various types for each pokemon and then displayes these as a string
let pokemonTypes = ''
pokemon.types.forEach(element=>{
  pokemonTypes = pokemonTypes + ' ' + element.type.name
})

//creates a p element which shows the types for each pokemon
  let contentElementTypes = document.createElement('p');
  contentElementTypes.innerText = 'Types: ' + pokemonTypes;
console.log(pokemon);

//creates an image element to access the images for the pokemon
let pokemonImageElement = document.createElement('img');
pokemonImageElement.src = pokemon.imageUrl

//appends the content to the modal for display
  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(pokemonImageElement);
  modal.appendChild(contentElement);
  modal.appendChild(contentElementTypes);
  modalContainer.appendChild(modal);

//ensures the class for modal visibility is activated within the show modal function
  modalContainer.classList.add('is-visible');
}

//crates a hide modal function which listens for events such as keydown, click and close
let modalContainer = document.querySelector('#modal-container');
function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

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
