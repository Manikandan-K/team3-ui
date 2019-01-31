import { tabTypes } from '../constants';

const listTypeReducer = (state = { listingType: tabTypes[0] }, action) => {
  if (action.type === 'LISTING_TYPE')
    return { ...state, listingType: action.payload };
  else return { ...state };
};

export default listTypeReducer;
