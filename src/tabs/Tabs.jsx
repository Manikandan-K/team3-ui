import React from "react";
import Location from "../locations/Location";
import { tabTypes } from "../constants";
import { connect } from "react-redux";
import TabItem from "./tab-item"
import {setListingType} from "./actions"

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
  }

  toggleMovieType = (tabIndex, listingTab) => {
    this.setState({
      activeTabIndex: tabIndex
    })
    this.props.setListingType(listingTab)
  };

  render() {
    return (
      <div className="d-flex justify-content-between mb-2">
        <ul className="nav nav-tabs" style={{ flex: 1 }}>
          {
            tabTypes.map((tabType, index) => {
              let isActiveTab = false;
              if(index === this.state.activeTabIndex){
                isActiveTab = true
              }
              return <TabItem
                key = {tabType.key}
                onToggle= {this.toggleMovieType}
                data = {tabType}
                tabIndex = {index}
                isActive = {isActiveTab}
              />
            })
          }
        </ul>

        <div style={{ flexBasis: '150px' }}>
          <Location />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listingType: state.listTypeReducer.listingType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setListingType: (listingType) => dispatch(setListingType(listingType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
