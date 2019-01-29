import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ name, slug, id }) => {
  const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
  return (
    <div>
      <img alt={name} src={imageUrl} />
      <h5>
        <a href={`http://localhost:3000/movies/${id}`}>{name}</a>
      </h5>
    </div>
  )
}


MovieItem.defaultProps = {};

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
