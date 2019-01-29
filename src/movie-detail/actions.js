import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import {baseUrl} from "../helper";

export const FETCH_MOVIE_PROGRESS = 'FETCH_MOVIE_PROGRESS';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

const fetchMovieInProgress = {
  type: FETCH_MOVIE_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_MOVIE_SUCCESS, 
  payload: data,
});

const movieDataFetchFailure = {
  type: FETCH_MOVIE_FAILURE,
};

const fetchMovie = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieInProgress);
    try {
      const response = await axios.get(`${baseUrl()}/movies/${id}`);
      const movie = response.data;
      movie.slug = slug(changeCase.sentenceCase(movie.name), { lower: true });
      dispatch(movieDataFetched(movie))
    } catch(error) {
      ;
      dispatch(movieDataFetchFailure)
    }
  }
};

export default fetchMovie;
