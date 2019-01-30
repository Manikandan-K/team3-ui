import axios from 'axios';
import slug from 'slug';
import changeCase from 'change-case';
import {baseUrl} from '../constants';

export const FETCH_LANGUAGE_PROGRESS = 'FETCH_LANGUAGE_PROGRESS';
export const FETCH_LANGUAGE_SUCCESS = 'FETCH_LANGUAGE_SUCCESS';
export const FETCH_LANGUAGE_FAILURE = 'FETCH_LANGUAGE_FAILURE';


const fetchLocationsInProgress = {
    type: FETCH_LANGUAGE_PROGRESS
  }


const locationDataFetched = (data) => ({
    type: FETCH_LANGUAGE_SUCCESS, 
    payload: data,
  });
  
  const locationDataFetchFailure = {
    type: FETCH_LANGUAGE_FAILURE,
  };

const fetchLocations = () => {
    return async (dispatch) => {
      dispatch(fetchLocationsInProgress);
      try {
        const locations = await axios.get(`${baseUrl()}/locations`);
        const locationsData = locations.data.map(location => {
          const sluggedData = slug(changeCase.sentenceCase(location.name), { lower: true });
          return {...location, slug: sluggedData}
        });  
        dispatch(locationDataFetched(locationsData))
      } catch(error) {
        dispatch(locationDataFetchFailure)
      }
    }
  };
  
  export default fetchLocations;