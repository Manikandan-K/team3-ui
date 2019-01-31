import {
  FETCH_MOVIE_SHOW_PROGRESS,
  FETCH_MOVIE_SHOW_FAILURE,
  FETCH_MOVIE_SHOW_SUCCESS
} from './actions';

const reducer = (state = { fetching: false, movieShows: [] }, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SHOW_PROGRESS:
      return { ...state, fetching: true };
    case FETCH_MOVIE_SHOW_SUCCESS:
      return { ...state, fetching: false, movieShows: action.payload };
    case FETCH_MOVIE_SHOW_FAILURE:
      return { ...state, fetching: false, error: true };
    default:
      return { ...state };
  }
};

export default reducer;
