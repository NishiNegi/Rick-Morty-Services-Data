const services = require("./services");
const getCharacters = services.getCharacters;
const getEpisodes = services.getEpisodes;

const search = process.argv[2];
const id = process.argv[3];

if (search === "personajes" && id === undefined) {
  getCharacters();
} else if (search === "episodios" && id === undefined) {
  getEpisodes();
} else if (search === "personajes" && id !== undefined) {
  //start getCharactersById function
} else if (search === "episodios" && id !== undefined) {
  //start getEpisodesById function
}
