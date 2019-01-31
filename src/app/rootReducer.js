import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import movieDetail from './../movie-detail/reducer';
import locations from '../locations/reducer';
import listTypeReducer from '../tabs/reducer'

const rootReducer = combineReducers({
  movies,
  movieDetail,
  routing: routerReducer,
  locations,
  listTypeReducer
});

export default rootReducer;
