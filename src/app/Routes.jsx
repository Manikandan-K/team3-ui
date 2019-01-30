import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import PropTypes from "prop-types";

import MovieDetail from "../movie-detail/MovieDetail";
import MovieGrid from "../movies/MovieGrid";
import Tabs from "./Tabs";

class Routes extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <React.Fragment>
          <Tabs />
          <Switch>
            <Route component={MovieGrid} path="/now-showing" />
            <Route component={MovieGrid} path="/upcoming" />
            <Route component={MovieDetail} path="/movie/:id" />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/now-showing" />}
            />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
