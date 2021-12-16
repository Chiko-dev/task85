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

  let pokeAPI = `https://pokeapi.co/api/v2/ability`;

  fetch(pokeAPI, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Name: "
    })
  })
    
    .then(toJSON)
    .then((data) => {
      console.log(data);
    })
});
