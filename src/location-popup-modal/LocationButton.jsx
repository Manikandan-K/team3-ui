import React, { Component } from 'react';
import './LocationPopupModal.css';

class LocationButton extends Component {
	constructor(props) {
		super(props);
	}
	
	onClickHandler = (e) =>{
		e.preventDefault();
		return this.props.onClickHandler(this.props.locationId)
	}

	render() {
		let props = this.props
		return (
			<span>
				<button><img src={require(`./../assets/${props.locationImg}.png`)} alt={props.locationName} className="btn-city" onClick={this.onClickHandler.bind(this)} /></button>
			</span>
		);
	}
}
	
export default LocationButton