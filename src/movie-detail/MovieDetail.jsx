import React from 'react';
import './MovieDetail.css';

const movieUrl = (name, size) => {
    return `https://img.spicinemas.in/resources/images/movies/${name}/${size}.jpg`;
}

const Item = ({ title, content }) => {
    return (
        <h5>{title}
            <span className="item-content">
                {content}
            </span>
        </h5>
    );
};

const FootingImages = props => {
    return (
        <img className="col-md-2" src={movieUrl('kabali', '150x207')} alt="" />
    );
};

const MovieDetail = props => {
    const images = [];
    for (let i = 0; i < 6; i++) {
        images.push(<FootingImages />);
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <h1 className="text-uppercase">Kabali</h1>
                <span className="movie-certificate">U</span>
                <strong>Tamil</strong>
            </div>
            <img className="movie-banner" src={movieUrl('kabali', '1000x320')}></img>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <h4 className="movie-subheading">synopsis</h4>
                <button className="btn-book">Book seat</button>
            </div>
            <p className="item-content">
                A crime film
            </p>
            <Item title="Genre: " content="Crime" />
            <Item title="Crew: " content="Crime" />
            <Item title="Cast: " content="Crime" />
            <Item title="Runtime: " content={"Crime" + " Minutes"} />

            <h4 className="movie-subheading">Images</h4>
            <div className="row">
                {images}
            </div>

        </div>
    );
};

export default MovieDetail;