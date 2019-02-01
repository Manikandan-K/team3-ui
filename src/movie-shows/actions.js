import axios from 'axios';
import { baseUrl } from '../helper';

export const FETCH_MOVIE_SHOW_PROGRESS = 'FETCH_MOVIE_SHOW_PROGRESS';
export const FETCH_MOVIE_SHOW_SUCCESS = 'FETCH_MOVIE_SHOW_SUCCESS';
export const FETCH_MOVIE_SHOW_FAILURE = 'FETCH_MOVIE_SHOW_FAILURE';
export const UPDATE_MOVIE_SHOW_DATE = 'UPDATE_MOVIE_SHOW_DATE';

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

const movieShowDateChanged = date => ({
  type: UPDATE_MOVIE_SHOW_DATE,
  payload: date
});

export const fetchMovieShows = id => {
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

export const fetchMovieShowsByDate = (id,date) => {
  return async dispatch => {
    dispatch(fetchMovieShowInProgress);
    try {
      const response = await axios.get(`${baseUrl()}/movies/${id}/shows?showDate=${date}`);
      const movieShows = response.data;
      dispatch(movieShowDataFetched(movieShows));
    } catch (error) {
      dispatch(movieShowDataFetchFailure);
    }
  };
};

export const updateMovieShowDate=(date)=>{
  return dispatch=>{
    dispatch(movieShowDateChanged(date));
  }
}

// export default fetchMovieShows;
