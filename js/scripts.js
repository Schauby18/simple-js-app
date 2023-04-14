let pokemonRepository = (function () {
  let pokemonList = [{name:'Squirtle', height:'0.5', type:'Water'},
                   {name:'Wartortle', height:'1', type:'Water'},
                   {name:'Blastoise', height:'1.6', type:'Water'},
                   {name:'Pidgey', height:'0.3', type:['Flying', 'Normal']},
                   {name:'Pidgeotto', height:'1.1', type:['Flying', 'Normal']},
                   {name:'Pidgeot', height:'1.5', type:['Flying', 'Normal']}];


  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

  function showDetails (pokemon) {
    console.log(pokemon.name)
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemonList.name);
    button.classList.add('pokemonbutton');
    listItem.appendChild(button);
    pokemonList.appendChild(pokemonList);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
     }

  console.log(pokemonRepository.getAll())

  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  }); 
