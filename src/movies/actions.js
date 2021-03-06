import axios from 'axios';
import changeCase from 'change-case';
import slug from 'slug';
import {baseUrl} from "./../helper";

export const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const fetchMoviesInProgress = {
  type: FETCH_MOVIES_PROGRESS
}

const movieDataFetched = (data) => ({
  type: FETCH_MOVIES_SUCCESS, 
  payload: data,
});

const movieDataFetchFailure = {
  type: FETCH_MOVIES_FAILURE,
};

const fetchMovies = (type, locationId) => {
  return async (dispatch) => {
    dispatch(fetchMoviesInProgress);
    try {
      const movies = await axios.get(`${baseUrl()}/movies?type=${type.toUpperCase()}&location=${locationId}`);
      const moviesData = movies.data.map(movie => {
        const sluggedData = slug(changeCase.sentenceCase(movie.name), { lower: true });
        return {...movie, slug: sluggedData}
      });  
      dispatch(movieDataFetched(moviesData))
    } catch(error) {
      console.log(error)
      dispatch(movieDataFetchFailure)
    }
  }
};

export default fetchMovies;
