import { FETCH_LANGUAGE_PROGRESS, FETCH_LANGUAGE_SUCCESS, FETCH_LANGUAGE_FAILURE } from './action'

const reducer = (state = { fetching: false, items: [] }, action) => {
  switch(action.type) {
    case FETCH_LANGUAGE_PROGRESS: return {...state, fetching: true };
    case FETCH_LANGUAGE_SUCCESS: return {...state, fetching: false, items: action.payload };
    case FETCH_LANGUAGE_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default reducer;