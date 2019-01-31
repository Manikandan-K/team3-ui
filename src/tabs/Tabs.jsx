import React from 'react';
import Location from '../locations/Location';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Tab = ({ url, onToggle, children, isActive }) => {
  return (
    <li className="nav-item" onClick={onToggle}>
      <Link className={`nav-link ${isActive ? 'active' : ''}`} to={url}>
        {children}
      </Link>
    </li>
  );
};

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      isNowShowing: true
    };
  }

  toggleNowShowing = (e, url) => {
    e.preventDefault();
    this.props.setListingType(url);
  };

  render() {
    const { isNowShowing } = this.state;
    return (
      <div className="d-flex justify-content-between mb-2">
        <ul className="nav nav-tabs" style={{ flex: 1 }}>
          <Tab
            onToggle={this.toggleNowShowing}
            url="/now-showing"
            isActive={isNowShowing}>
            Now Showing
          </Tab>
          <Tab
            onToggle={this.toggleNowShowing}
            url="/upcoming"
            isActive={!isNowShowing}>
            Upcoming
          </Tab>
        </ul>

        <div style={{ flexBasis: '150px' }}>
          <Location />
        </div>
      </div>
    );
  }
}

const setListingType = data => ({
  type: 'LISTING_TYPE',
  payload: data
});

const mapStateToProps = state => {
  return {
    listingType: state.listTypeReducer.listingType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setListingType: lt => dispatch(setListingType(lt))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
