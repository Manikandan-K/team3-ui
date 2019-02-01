import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLocations, updateLocation } from "./action";
import DropDown from "../drop-down/DropDown";
import LocationPopupModal from "../location-popup-modal/LocationPopupModal";

class Location extends React.Component {

  constructor(props){
    super(props);
    this.state = {shouldShowPopup: false};
  }



  componentWillMount() {
    this.props.fetchLocations();
    let defaultLocation = window.localStorage.getItem("selectedLocationId");
    if (defaultLocation == null) {
      this.setState({shouldShowPopup : true});
      defaultLocation = 1;
    }
    
    this.props.updateLocation(defaultLocation);
  }

  render() {
    if (this.props.locations.fetching) {
      return this.showProgress();
    }

    let locations = this.props.locations.items.map(location => {
      return { key: location.name, value: location.id };
    });
    let popup = <div />;  
    if (this.state.shouldShowPopup) {
      popup = <LocationPopupModal locations={locations} />;
    }
    return (
      <div>
        <DropDown listItems={locations} onChange={this.onChange} />
        {popup}
      </div>
    );
  }

  onChange = event => {
    this.props.updateLocation(event.target.value);
    window.localStorage.setItem("selectedLocationId",event.target.value);

  }

  showProgress() {
    return <div>Loading...</div>;
  }
}

Location.propTypes = {
  locations: PropTypes.shape({
    items: PropTypes.array
  })
};

export default connect(
  state => ({
    locations: state.locations
  }),
  dispatch => ({
    fetchLocations: () => dispatch(fetchLocations()),
    updateLocation: (locId) => dispatch(updateLocation(locId))
  })
)(Location);
