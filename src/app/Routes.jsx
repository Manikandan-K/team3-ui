import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import MovieDetail from '../movie-detail/MovieDetail';
import MovieGrid from '../movies/MovieGrid';
import MovieShows from '../movie-shows/MovieShows';
import Tabs from './../tabs/Tabs';

class Routes extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <React.Fragment>
          <Tabs />
          <Switch>
            <Route exact component={MovieGrid} path="/movies" />
            <Route exact component={MovieDetail} path="/movies/:id" />
            <Route component={MovieShows} path="/movies/:id/shows" />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/movies" />}
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
