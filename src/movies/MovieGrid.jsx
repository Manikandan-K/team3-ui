import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import fetchMovies from './actions';

class MovieGrid extends Component {

  componentDidMount() {
    this.props.fetchMovies('NOW_SHOWING', this.props.locationId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.locationId !== prevProps.locationId) {
      this.props.fetchMovies('NOW_SHOWING', this.props.locationId);
    }
  }

  render() {
    if (this.props.movies.fetching) {
      return this.showProgress()
    }

    return this.props.movies.error || false ? this.showError() : this.showMovies();
  }

  showMovies() {
    return (
      <div className="row">
        {this.props.movies.items.map(({ name, id, slug }) => (
          <div key={name} className="col-md-2">
            <MovieItem id={id} name={name} slug={slug} />
          </div>
        ))}
      </div>
    );
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  showError() {
    return (
      <div>Error...</div>
    );
  }
}

MovieGrid.defaultProps = {
  movies: {
    items: []
  },
};

MovieGrid.propTypes = {
  movies: PropTypes.shape({
    items: PropTypes.array,
  }),
  locationId: PropTypes.number
};

export default connect(
  (state) => ({
    movies: state.movies,
    locationId: state.locations.locationId
  }),
  (dispatch) => ({
    fetchMovies: (type, locationId) => dispatch(fetchMovies(type, locationId))
  }))(MovieGrid);
