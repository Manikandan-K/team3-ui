import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Routes";

class TabbedMain extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

TabbedMain.propTypes = {
  history: PropTypes.object.isRequired
};

export default TabbedMain;
