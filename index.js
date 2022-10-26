const services = require("./services");
const getCharacters = services.getCharacters;
const getEpisodes = services.getEpisodes;
const getCharactersById = services.getCharactersById;
const getEpisodesById = services.getEpisodesById;

const search = process.argv[2];
const id = process.argv[3];

if (search === "personajes" && id === undefined) {
  getCharacters();
} else if (search === "episodios" && id === undefined) {
  getEpisodes();
} else if (search === "personajes" && id !== undefined) {
  getCharactersById(id);
} else if (search === "episodios" && id !== undefined) {
  getEpisodesById(id);
}
