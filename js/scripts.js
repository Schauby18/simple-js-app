let pokemonList = [{name:'Squirtle', height:'0.5', type:'Water'},
                   {name:'Wartortle', height:'1', type:'Water'},
                   {name:'Blastoise', height:'1.6', type:'Water'},
                   {name:'Pidgey', height:'0.3', type:['Flying', 'Normal']},
                   {name:'Pidgeotto', height:'1.1', type:['Flying', 'Normal']},
                   {name:'Pidgeot', height:'1.5', type:['Flying', 'Normal']}];

let pokemonBig = ' - wow, that is big!';

for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.5) {
        document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')' + (pokemonBig) + ' <br>');}
    else {
        document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')<br>');
    }    
    }                   