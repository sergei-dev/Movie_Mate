import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

    
    const MovieCard = ({ rating,poster,title,descr,release, click }) => {

        return (
        <div className="MovieList__item">
            <div className="MovieCard">
              <span className="MovieCard__rating">{rating}</span>
              <img className="MovieCard__poster" src={poster} alt="Poster"/>
              <div className="MovieInfo__info">
                 <h2 className="MovieInfo__title">{title}</h2>
                 <p className="MovieInfo__descr">{descr}</p>
                 <p className="MovieInfo__release">Release date: {release}</p>
              </div>
              <button onClick={click} className="MovieCard__btn">+</button>
            </div>
        </div>
        )
    }
    
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    rating: PropTypes.number.isRequired,
    release: PropTypes.string.isRequired
}
export default MovieCard;
