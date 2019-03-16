module.exports = {
  createTablesQueries: `
  CREATE TABLE pokemons (
    id SERIAL PRIMARY KEY,
    name varchar(100),
    default_img varchar(100)
  );

  CREATE TABLE pokemonData (
    id SERIAL PRIMARY KEY,
    gif_img varchar(100),
    type text[],
    description varchar(1000),
    evolutions text[]
  );
  `
}

// COPY pokemons(name, default_img) FROM '/Users/trangdo/Desktop/Gen1_pokedex/csvFiles/allPokemons.csv' DELIMITER ',';
// COPY pokemonData(gif_img, type, description, evolutions) FROM '/Users/trangdo/Desktop/Gen1_pokedex/csvFiles/pokemonData.csv' DELIMITER '|';