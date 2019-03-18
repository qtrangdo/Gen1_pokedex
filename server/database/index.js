const { Client } = require('pg');

const { database } = require('./config');

const client = new Client(database);
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to db', err.stack);
  } else {
    console.log('connected to DB');
  }
});

const getAll = (cb) => {
  client.query('SELECT * FROM pokemons;')
    .then(res => cb(null, res.rows))
    .catch(err => cb(err))
};

const getOne = (id, cb) => {
  client.query(`SELECT * FROM pokemons, pokemondata where pokemons.id = ${id} and pokemondata.id = ${id};`)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err))
};

module.exports = {
  getAll,
  getOne
}