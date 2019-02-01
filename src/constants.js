
export const getDate = (date) => {
  return date.toISOString().split('T')[0];
};

export const baseUrl = () => {
  return process.env.REACT_APP_API_URL || "http://localhost:9090";
};

export const defaultState = () => {
  return {
    fetching: false,
    items: [],
    locationId: 1,
    movieShows: [],
    movieShowDate: getDate(new Date())
  }};
export const tabTypes = [{
  label: "Now Showing",
  key: "now_showing",
  isActive: true
}, {
  label: "Upcoming",
  key: "upcoming",
  isActive: false
}];
