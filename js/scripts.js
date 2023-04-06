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
    getAll: getAll
  };
})();
                   
  let pokemonBig = ' - wow, that is big!';

  function myLoopFunction(list) {
      if (list.height > 1.5) {
          document.write(list.name + ' (height: ' + (list.height) + ')' + (pokemonBig) + ' <br>');}
     else   {
          document.write(list.name + ' (height: ' + (list.height) + ')<br>');
       }    
     }                   
  pokemonRepository.getAll().forEach(myLoopFunction); 
