const services = require('./services');
const getCharacters = services.getCharacters

const search = process.argv[2];
const id = process.argv[3];

if (search === "personajes" && id === undefined) {
  //start getCharacters function
} else if (search === "episodios" && id === undefined) {
  //start getEpisodes function
} else if (search === "personajes" && id !== undefined) {
  //start getCharactersById function
} else if (search === "episodios" && id !== undefined) {
  //start getEpisodesById function
}
