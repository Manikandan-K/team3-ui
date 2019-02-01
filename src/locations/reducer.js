import { FETCH_LOCATION_PROGRESS, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE, USER_LOCATION_UPDATED } from './action'
import { defaultState } from '../constants';

const reducer = (state = defaultState(), action) => {
  switch (action.type) {
    case FETCH_LOCATION_PROGRESS: return { ...state, fetching: true };
    case FETCH_LOCATION_SUCCESS: return { ...state, fetching: false, items: action.payload };
    case FETCH_LOCATION_FAILURE: return { ...state, fetching: false, error: true };
    case USER_LOCATION_UPDATED: return { ...state, fetching: false, locationId: action.payload };
    default: return { ...state }
  }
}

export default reducer;