import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import movieDetail from './../movie-detail/reducer';
import movieShows from './../movie-shows/reducer';
import locations from '../locations/reducer';
import listTypeReducer from '../tabs/reducer';

const rootReducer = combineReducers({
  movies,
  movieDetail,
  movieShows,
  routing: routerReducer,
  locations,
  listTypeReducer
});

export default rootReducer;
