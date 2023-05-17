let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      var $row = $(".row");

      var $card = $('<div class="card" style="width:400px"></div>');
      var $image = $(
        '<img class="card-img-top" alt="Card image" style="width:40%" />'
      );
      $image.attr("src", pokemon.imageUrlFront);
      var $cardBody = $('<div class="card-body"></div>');
      var $cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
      var $seeProfile = $(
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-container">See Profile</button>'
      );

      $row.append($card);
      //Append the image to each card
      $card.append($image);
      $card.append($cardBody);
      $cardBody.append($cardTitle);
      $cardBody.append($seeProfile);

      $seeProfile.on("click", function (event) {
        showDetails(pokemon);
      });
    });
  }
     
    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
        console.log(pokemon);
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
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
    }
  
    function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
        pokemon.types = [];
        for (var i = 0; i < details.types.length; i++) {
          pokemon.types.push(details.types[i].type.name);
        }
        pokemon.weight = details.weight;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showModal (pokemon) {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');
      let modalHeader = $('.modal-header');
      //let $modalContainer = $('#modal-container');
      //clear existing content of the modal
      //modalHeader.empty();
      modalTitle.empty();
      modalBody.empty();

      //creating element for name in modal content
      let nameElement = $("<h1>" + pokemon.name + "</h1>");
      // creating img in modal content
      let imageElementFront = $('<img class="modal-img" style="width:50%">');
      imageElementFront.attr("src", pokemon.imageUrlFront);
      let imageElementBack = $('<img class="modal-img" style="width:50%">');
      imageElementBack.attr("src", pokemon.imageUrlBack);
      //creating element for height in the modal content
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
      //creating element for weight in the modal content
      let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
      //creating element for type in the modal content
      let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");

      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(imageElementBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
    }

    function searchPokemon() {
      let searchInput = document.getElementById("search-input");
      let searchText = searchInput.value.toLowerCase();
      let allPokemon = document.querySelectorAll(".card");
  
      allPokemon.forEach(function (pokemon) {
        let pokemonText = pokemon.querySelector(".card-body")
        .innerText
        .toLowerCase();
        let searchList = document.querySelector(".pokemon-list");
  
        if (pokemonText.includes(searchText)) {
          searchList.classList.add("search-list");
          pokemon.style.display = "inline-block";
        } else {
          pokemon.style.display = "none";
        }
  
        if (!searchInput.value) {
          searchList.classList.remove("search-list");
        }
      });
    }
  
    let searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function () {
      searchPokemon();
    });    

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal
    };
})();
  
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    })
  });
  