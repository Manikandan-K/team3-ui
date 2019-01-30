import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchLocations, updateLocation } from "./action";
import DropDown from "../drop-down/DropDown";

class Location extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    if (this.props.locations.fetching) {
      return this.showProgress();
    }

    let locations = this.props.locations.items.map(location => {
      return { key: location.name, value: location.id };
    });
    return <DropDown listItems={locations} onChange={this.onChange} />;
  }

  onChange = event => this.props.updateLocation(event.target.value);

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
