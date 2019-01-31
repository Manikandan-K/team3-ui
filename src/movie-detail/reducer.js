import {
  FETCH_MOVIE_PROGRESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from './actions';

const reducer = (state = { fetching: false, movie: null }, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PROGRESS:
      return { ...state, fetching: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, fetching: false, movie: action.payload };
    case FETCH_MOVIE_FAILURE:
      return { ...state, fetching: false, error: true };
    default:
      return { ...state };
  }
};

export default reducer;
