import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import PropTypes from "prop-types";

import Home from "./Home";
import MovieDetail from "../movie-detail/MovieDetail";

class Routes extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route component={Home} path="/now-showing" />
          <Route component={Home} path="/upcoming" />

          <Route component={MovieDetail} path="/movie/:id" />
          <Route exact path="/" render={() => <Redirect to="/now-showing" />} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
