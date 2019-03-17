import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import DisplayPokemons from './DisplayPokemons';

const App = () => (
  <Provider store={store}>
    <div>
      <h1 className="text-center text-danger p-3 my-3">KANTO POKÉDEX</h1>
      <hr/>
      <DisplayPokemons />
    </div>
  </Provider>
);


export default App;