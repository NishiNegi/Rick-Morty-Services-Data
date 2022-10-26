const axios = require("axios");

const rickAndMortyApi = "https://rickandmortyapi.com/api";

function getCharacters() {
  axios
    .get(`${rickAndMortyApi}/character`)
    .then(function (response) {
      const charArray = response.data.results;
      charArray.map(function (item) {
        console.log(item.name);
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function getEpisodes() {
  axios
    .get(`${rickAndMortyApi}/episode`)
    .then(function (response) {
      const epArray = response.data.results;
      epArray.map(function (item) {
        console.log(item.name);
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function getCharactersById(id) {
  axios
    .get(`${rickAndMortyApi}/character/${id}`)
    .then(function (response) {
      const charData = response.data;
      const name = charData.name;
      console.log(name);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function getEpisodesById(id) {
  axios
    .get(`${rickAndMortyApi}/episode/${id}`)
    .then(function (response) {
      const epData = response.data;
      const name = epData.name;
      const ep = epData.episode;
      console.log(`${ep}: ${name}`);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

module.exports = {
  getCharacters,
  getEpisodes,
  getCharactersById,
  getEpisodesById,
};
