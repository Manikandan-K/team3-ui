import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from '../movies/reducer';
import movieDetail from './../movie-detail/reducer';

const rootReducer = combineReducers({
  movies,
  movieDetail,
  routing: routerReducer,
});

export default rootReducer;