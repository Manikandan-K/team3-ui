import axios from 'axios';
import slug from 'slug';
import changeCase from 'change-case';
import { baseUrl } from '../constants';

export const FETCH_LOCATION_PROGRESS = 'FETCH_LOCATION_PROGRESS';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE';
export const USER_LOCATION_UPDATED = 'USER_LOCATION_UPDATED';


const fetchLocationsInProgress = {
  type: FETCH_LOCATION_PROGRESS
}


const locationDataFetched = (data) => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: data,
});

const locationDataFetchFailure = {
  type: FETCH_LOCATION_FAILURE,
};

const userLocationUpdated = (updatedLocationId) => ({
  type: USER_LOCATION_UPDATED,
  payload: updatedLocationId
});

export const fetchLocations = () => {
  return async (dispatch) => {
    dispatch(fetchLocationsInProgress);
    try {
      const locations = await axios.get(`${baseUrl()}/locations`);
      const locationsData = locations.data.map(location => {
        const sluggedData = slug(changeCase.sentenceCase(location.name), { lower: true });
        return { ...location, slug: sluggedData }
      });
      dispatch(locationDataFetched(locationsData))
    } catch (error) {
      dispatch(locationDataFetchFailure)
    }
  }
};

export const updateLocation=(updatedLocationId)=>{
  return async (dispatch)=>{
    dispatch(userLocationUpdated(updatedLocationId));
  };
}
