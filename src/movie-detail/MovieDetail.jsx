import React from "react";
import "./MovieDetail.css";
import { connect } from "react-redux";
import fetchMovie from "./actions";
import PropTypes from "prop-types";

const movieUrl = (slug, size) => {
  return `https://img.spicinemas.in/resources/images/movies/${slug}/${size}.jpg`;
};

const Item = ({ title, content }) => {
  return (
    <h5>
      {title}
      <span className="item-content">{content}</span>
    </h5>
  );
};
Item.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

const FootingImages = ({ slug }) => {
  return (
    <img
      className="col-md-2"
      src={movieUrl(slug, "150x207")}
      alt="movie footing images"
    />
  );
};
FootingImages.propTypes = {
  slug: PropTypes.string.isRequired
};

class MovieDetail extends React.Component {
  componentWillMount() {
    const { match } = this.props;
    this.props.fetchMovie(match.params.id);
  }

  showProgress() {
    return <div>Loading...</div>;
  }

  showError() {
    return <div>Error...</div>;
  }

  showMovie() {
    const {
      name,
      certification,
      crew,
      genre,
      language,
      movieCast,
      runtime,
      slug,
      synopsis
    } = this.props.movie;

    let images = Array(6)
      .fill(null)
      .map((_, index) => <FootingImages key={index} slug={slug} />);

    return (
      <div className="movie-detail-wrapper">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h1 className="text-uppercase">{name}</h1>
            <span className="movie-certificate">{certification}</span>
            <strong>{language}</strong>
          </div>
          <button
            type="button"
            class="btn btn-outline-info mb-2"
            onClick={this.props.history.goBack}
          >
            Back
          </button>
        </div>
        <img
          className="movie-banner"
          src={movieUrl(slug, "1000x320")}
          alt={name + " movie banner"}
        />
        <div className="d-flex align-items-center justify-content-between mt-3">
          <h4 className="movie-subheading">synopsis</h4>
          <button className="btn-book">Book seat</button>
        </div>
        <p className="item-content">{synopsis}</p>
        <Item title="Genre: " content={genre} />
        <Item title="Crew: " content={crew} />
        <Item title="Cast: " content={movieCast} />
        <Item title="Runtime: " content={runtime + " Minutes"} />

        <h4 className="movie-subheading">Images</h4>
        <div className="row">{images}</div>
      </div>
    );
  }

  render() {
    if (this.props.fetching || !this.props.movie) return this.showProgress();
    if (!this.props.fetching) return this.showMovie();
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.object,
  fetching: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

MovieDetail.defaultProps = {
  movie: {},
  fetching: true
};

const mapStateToProps = state => {
  return {
    movie: state.movieDetail.movie,
    fetching: state.movieDetail.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: name => dispatch(fetchMovie(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
