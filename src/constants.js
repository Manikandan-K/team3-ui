export const baseUrl = () => {
  return process.env.REACT_APP_API_URL || "http://localhost:9090";
};

export const defaultState = {
  fetching: false,
  items: [],
  locationId: 1
};
export const tabTypes = [{
  label: "Now Showing",
  key: "now_showing",
  isActive: true
}, {
  label: "Upcoming",
  key: "upcoming",
  isActive: false
}];
