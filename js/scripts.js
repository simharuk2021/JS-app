let pokemonList = [
  {name:"Bulbasaur", height:2.04, types:["grass", "poison"]},
  {name:"Venusaur", height:6.07, types:["seed", "overgrown"]},
{name:"Charmander", height:2.00, types:["fire"]}
];
/* This code creates a function which cycles through each pokemon within the array and then writes (and formats) the values within the array into the document*/
pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' feet high and is '+ 'of type ' + pokemon.types + '<br>');
});
