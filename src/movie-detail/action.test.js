import fetchMovie, {
  FETCH_MOVIE_PROGRESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from "./actions";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from "axios";

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);
let store;
const apiData = {
  "id": 1,
  "name": "Kabali",
  "certification": "U",
  "language": "Tamil",
  "synopsis":
    "Returning from prison, aged gangster Kabali confronts those who had destroyed his life. While doing so, he learns about what had happened to his family when he was gone.",
  "genre": "Crime",
  "crew": "Pa. Ranjith (Director), Santhosh Narayanan (Music Director)",
  "movieCast": "Radhika Apte, Rajnikanth",
  "runtime": 150,
  "slug": "kabali",
  "experiences": "RDX, Dolby Atmos, SUB",
  "listingType": "NOW_SHOWING"
};

describe("movies/actions", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  it("should fetch movies from server which are now-showing and return FETCH_MOVIES_SUCCESS", async () => {
    mock.onGet("http://localhost:9090/movies/1").reply(200, apiData);

    let expectedActions = [];

    store.dispatch(fetchMovie(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIE_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_MOVIE_SUCCESS,
        payload: apiData
      });
    });
  });

  it("should return FETCH_MOVIES_FAILURE if http 500", async () => {
    mock.onGet("http://localhost:9090/movies/1").reply(500, {});
    let expectedActions = [];
    store.dispatch(fetchMovie(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIE_PROGRESS });
      expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIE_FAILURE });
    });
  });
});
