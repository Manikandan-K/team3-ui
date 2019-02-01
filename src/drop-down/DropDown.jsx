import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';
import { connect } from "react-redux";

class DropDown extends React.Component {
  
  render() {
    
    let options = this.props.listItems.map((item, index) => {
      return (
        <option
          key={index}
          value={item.value}
          selected={item.value === this.props.locationId}>
          {item.key}
        </option>
      );
    });
    return (
      <div className="form-group clearfix">
        <select
          className="form-control float-right"
          onChange={this.props.onChange}>
          {options}
        </select>
      </div>
    );
  }
}

DropDown.propTypes = {
  listItems: PropTypes.array.isRequired,
  selectedItem: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    locationId: state.locations.locationId
  };
};

export default connect(
  mapStateToProps
)(DropDown);
