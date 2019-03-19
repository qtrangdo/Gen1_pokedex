import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import DisplayPokemons from './DisplayPokemons';
import PokemonModal from './PokemonModal';
import SearchBar from './SearchBar';

const App = () => (
  <Provider store={store}>
    <div>
      <h1 className="text-center text-danger p-3 my-3">KANTO POKÉDEX</h1>
      <hr/>
      <SearchBar/>
      <DisplayPokemons />
      <PokemonModal />
    </div>
  </Provider>
);


export default App;