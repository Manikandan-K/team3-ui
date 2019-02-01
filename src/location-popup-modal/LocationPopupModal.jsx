import React, { Component } from 'react';
import MyModal from '../modal/Modal';
import './LocationPopupModal.css';
import LocationButton from './LocationButton';
import { updateLocation } from '../locations/action';
import { connect } from "react-redux";

class LocationPopupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isOpen: true });
        }, 1000);
    }
    onClose = () => {
        this.setState({ isOpen: false });
    }

    onCityClicked = locationID => {
        this.props.updateLocation(locationID);
        // localStorage.setItem("selectedLocationId",locationID);
        this.setState({ isOpen: false });
    }

    render() {
        let locations = this.props.locations.map((location, index) => {
            return (<LocationButton locationImg={location.key} locationName={location.key} locationId={location.value} onClickHandler={this.onCityClicked} />);
        });
        console.log(locations);
        return (
            <span>
                <MyModal show={this.state.isOpen}>
                    <h2>Choose Location</h2>
                    {locations}
                </MyModal>
            </span>
        );
    }
}

export default connect(
    (state) => ({
        locationPopup: state.locationSelectedReducer
    }),
    dispatch => ({
        updateLocation: (locId) => dispatch(updateLocation(locId))
    })
)(LocationPopupModal);