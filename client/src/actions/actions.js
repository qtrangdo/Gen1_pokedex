import {
  REQUEST_ALLMONS_PENDING,
  REQUEST_ALLMONS_SUCCESS,
  REQUEST_ALLMONS_FAILED,
  REQUEST_ONEMON_PENDING,
  REQUEST_ONEMON_SUCCESS,
  REQUEST_ONEMON_FAILED,
  CLOSE_MODAL,
  SET_SEARCH_FIELD
} from './actionTypes';

export const requestAllMons = () => (dispatch) => {
  dispatch({ type: REQUEST_ALLMONS_PENDING });
  fetch('/api/pokemons')
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ALLMONS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ALLMONS_FAILED, payload: error }));
}

export const requestOneMon = (id) => (dispatch) => {
  dispatch({ type: REQUEST_ONEMON_PENDING });
  fetch(`/api/pokemons/${id}`)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ONEMON_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ONEMON_FAILED, payload: error }));
}

export const closeModal = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
}

export const setSearchField = (str) => (dispatch) => {
  dispatch({ type: SET_SEARCH_FIELD, payload: str })
}
