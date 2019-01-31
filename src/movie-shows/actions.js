import axios from 'axios';
import { baseUrl } from '../helper';

export const FETCH_MOVIE_SHOW_PROGRESS = 'FETCH_MOVIE_SHOW_PROGRESS';
export const FETCH_MOVIE_SHOW_SUCCESS = 'FETCH_MOVIE_SHOW_SUCCESS';
export const FETCH_MOVIE_SHOW_FAILURE = 'FETCH_MOVIE_SHOW_FAILURE';

const fetchMovieShowInProgress = {
  type: FETCH_MOVIE_SHOW_PROGRESS
};

const movieShowDataFetched = data => ({
  type: FETCH_MOVIE_SHOW_SUCCESS,
  payload: data
});

const movieShowDataFetchFailure = {
  type: FETCH_MOVIE_SHOW_FAILURE
};

const fetchMovieShows = id => {
  return async dispatch => {
    dispatch(fetchMovieShowInProgress);
    try {
      const response = await axios.get(`${baseUrl()}/movies/${id}/shows`);
      const movieShows = response.data;
      dispatch(movieShowDataFetched(movieShows));
    } catch (error) {
      dispatch(movieShowDataFetchFailure);
    }
  };
};

export default fetchMovieShows;
