import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ name, slug, id }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div>
      <Link to={`movies/${id}`}>
        <img alt={name} src={imageUrl} />
        <h5>
          {name}
        </h5>
      </Link>
    </div>
  )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
