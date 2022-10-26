const axios = require("axios");

const rickAndMortyApi = "https://rickandmortyapi.com/api";

function getCharacters() {
    axios
      .get(`${rickAndMortyApi}/character`)
      .then(function (response) {
        const charArray = response.data.results;
        charArray.map(function (item) {
          console.log(item.name) ;
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
module.exports = {
    getCharacters,
}