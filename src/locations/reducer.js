import { FETCH_LOCATION_PROGRESS, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE } from './action'

const reducer = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_LOCATION_PROGRESS: return {...state, fetching: true };
    case FETCH_LOCATION_SUCCESS: return {...state, fetching: false, items: action.payload };
    case FETCH_LOCATION_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default reducer;