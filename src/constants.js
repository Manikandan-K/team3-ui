export const baseUrl = () => {
    return process.env.REACT_APP_API_URL || "http://localhost:9090"
  };

  export const defaultState={
    fetching: false, 
    items: [], 
    locationId: 1
  }