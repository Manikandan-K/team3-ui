import { tabTypes } from '../constants';


const listTypeReducer = (state = { listingType: tabTypes[0].key }, action) => {
  if (action.type === "MOVIE_TAB_CLICKED"){
    return { ...state, listingType: action.payload }; 
  } else if (action.type === 'LISTING_TYPE')
    return { ...state, listingType: action.payload };
  else return { ...state };
};

export default listTypeReducer;
