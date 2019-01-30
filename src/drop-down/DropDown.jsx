import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

class DropDown extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let options = this.props.listItems.map((item) => {
            return (<option value={item.value} selected={item === this.props.selectedItem}>
                {item.key}
            </option>);
        });
        return (<div className="form-group clearfix">
            <select className="form-control float-right" onChange={this.props.onChange}>
                {options}
            </select>
        </div>);
    }
}

DropDown.propTypes = {
    listItems: PropTypes.array.isRequired,
    selectedItem: PropTypes.any,
    onChange: PropTypes.func.isRequired
};

export default DropDown;