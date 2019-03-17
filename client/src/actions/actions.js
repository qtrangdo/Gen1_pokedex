import {
  REQUEST_ALLMONS_PENDING,
  REQUEST_ALLMONS_SUCCESS,
  REQUEST_ALLMONS_FAILED,
  REQUEST_ONEMON_PENDING,
  REQUEST_ONEMON_SUCCESS,
  REQUEST_ONEMON_FAILED,
} from './actionTypes';

const requestAllMons = () => (dispatch) => {
  dispatch({ type: REQUEST_ALLMONS_PENDING });
  fetch('/api/pokemons')
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ALLMONS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ALLMONS_FAILED, payload: error }));
}

export default requestAllMons;