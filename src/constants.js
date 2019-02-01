export const baseUrl = () => {
  return process.env.REACT_APP_API_URL || "http://localhost:9090";
};

let defaultLocation = 1;
// localStorage.getItem("selectedLocationId");
if(defaultLocation == null) {
  defaultLocation = 1;
}

export const defaultState = {
  fetching: false,
  items: [],
  locationId: defaultLocation
};
export const tabTypes = ["now-showing", "upcoming"];
