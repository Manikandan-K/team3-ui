import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import { fetchLocations, FETCH_LOCATION_PROGRESS, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_FAILURE } from './action';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);
let store;
const apiData = [{id: 1, name: 'Chennai', slug: 'chennai'}, {id: 2, name: 'Trichy', slug: 'trichy'}, {id: 3, name: 'Madurai', slug: 'madurai'}];

describe("locations_actions", () => {
    beforeEach(() => {
        store = mockStore({});
    });

    it("should fetch locations from server eturn FETCH_LOCATION_SUCCESS", async () => {
        mock.onGet("http://localhost:9090/locations").reply(200, apiData);

        let expectedActions = [];

        store.dispatch(fetchLocations(1)).then(() => {
            expect(store.getActions()[0]).toEqual({ type: FETCH_LOCATION_PROGRESS });
            expect(store.getActions()[1]).toEqual({
                type: FETCH_LOCATION_SUCCESS,
                payload: apiData
            });
        });
    });


    it("should return FETCH_LOCATION_FAILURE if http 500", async () => {
        mock.onGet("http://localhost:9090/locations").reply(500, {});
        let expectedActions = [];
        store.dispatch(fetchLocations(1)).then(() => {
            expect(store.getActions()[0]).toEqual({ type: FETCH_LOCATION_PROGRESS });
            expect(store.getActions()[1]).toEqual({ type: FETCH_LOCATION_FAILURE });
        });
    });
});