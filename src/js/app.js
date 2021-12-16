import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function toJSON(response) {
    return response.json();
  }



  const fetchPokemon = () => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(checkStatus)
      .then(toJSON)
      .then((data) => {
        console.log(data);
        const pokemon = {};
        pokemon['name'] = data.name;
        console.log(pokemon);
      })
  }

  fetchPokemon();
});
