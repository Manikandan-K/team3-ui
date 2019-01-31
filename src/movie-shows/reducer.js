import {
  FETCH_MOVIE_SHOW_PROGRESS,
  FETCH_MOVIE_SHOW_FAILURE,
  FETCH_MOVIE_SHOW_SUCCESS,
  UPDATE_MOVIE_SHOW_DATE
} from './actions';
import { defaultState } from '../constants.js';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SHOW_PROGRESS:
      return { ...state, fetching: true };
    case FETCH_MOVIE_SHOW_SUCCESS:
      return { ...state, fetching: false, movieShows: action.payload };
    case FETCH_MOVIE_SHOW_FAILURE:
      return { ...state, fetching: false, error: true };
    case UPDATE_MOVIE_SHOW_DATE:
      return { ...state, fetching: false, movieShowDate: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
