let pokemonList = [
  {name:"Bulbasaur", height:2.04, types:["grass", "poison"]},
  {name:"Venusaur", height:6.07, types:["seed", "overgrown"]},
{name:"Charmander", height:2.00, types:["fire"]}
];
// This code searches for the Pokemon's within the Array and loops through them all.
for (let i = 0; i < pokemonList.length; i++) {
  //The if statement looks for the pokemon which has a height over 6.00
  if (pokemonList[i].height>=6.00) {
    /* The document.write statement then lists the Pokemon name and height whilst providing some spacing
    between text fields and the arrays being returned  */
  document.write (pokemonList[i].name + ' (height: ' +pokemonList[i].height +') (type: ' +pokemonList[i].types +') -The biggest Pokemon! ' + '<br>');
  //The statement returns the information in the arrays for all the other pokemon, regardless of their height//
} else{document.write (pokemonList[i].name + ' (height: ' +pokemonList[i].height +') (type: ' +pokemonList[i].types +') ' + '<br>');}
}
