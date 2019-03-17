import {
  REQUEST_ALLMONS_PENDING,
  REQUEST_ALLMONS_SUCCESS,
  REQUEST_ALLMONS_FAILED,
  REQUEST_ONEMON_PENDING,
  REQUEST_ONEMON_SUCCESS,
  REQUEST_ONEMON_FAILED,
} from '../actions/actionTypes';

const allMonsState = {
  pending: false,
  allMons: [],
  error: '',
};

const oneMonState = {
  pending: false,
  oneMon: [],
  error: '',
};

export const requestAllMons = (state = allMonsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const requestOneMon = (state = oneMonState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};