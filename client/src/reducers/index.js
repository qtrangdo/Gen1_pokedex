import { combineReducers } from 'redux';
import {requestAllMons, requestOneMon} from './reducers';

export default combineReducers({
  pokemons: requestAllMons,
  pokemon: requestOneMon,
});