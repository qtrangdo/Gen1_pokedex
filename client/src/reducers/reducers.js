import {
  REQUEST_ALLMONS_PENDING,
  REQUEST_ALLMONS_SUCCESS,
  REQUEST_ALLMONS_FAILED,
  REQUEST_ONEMON_PENDING,
  REQUEST_ONEMON_SUCCESS,
  REQUEST_ONEMON_FAILED,
  CLOSE_MODAL,
  SET_SEARCH_FIELD
} from '../actions/actionTypes';

const allMonsState = {
  pending: false,
  allMons: [],
  error: '',
  searchField: '',
};

export const requestAllMons = (state = allMonsState, action) => {
  switch (action.type) {
    case REQUEST_ALLMONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case REQUEST_ALLMONS_SUCCESS:
      return {
        ...state,
        allMons: action.payload,
        pending: false,
      };
    case REQUEST_ALLMONS_FAILED:
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    case SET_SEARCH_FIELD: 
      return {
        ...state,
        searchField: action.payload,
      }
    default:
      return state;
  }
};

const oneMonState = {
  pending: false,
  oneMon: [],
  error: '',
  modalOn: false,
};

export const requestOneMon = (state = oneMonState, action) => {
  switch (action.type) {
    case REQUEST_ONEMON_PENDING:
      return {
        ...state,
        pending: true,
      };
    case REQUEST_ONEMON_SUCCESS:
      return {
        ...state,
        oneMon: action.payload,
        pending: false,
        modalOn: true,
      };
    case REQUEST_ONEMON_FAILED:
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        pending: false,
        oneMon: [],
        error: '',
        modalOn: false,
      }
    default:
      return state;
  }
};