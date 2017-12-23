import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

    
    const MovieCard = ({ title,descr, onClick, rating, genres }) => {

        return (
            <div className="MovieCard">
              <div className="MoveInfo">
              <button className="MovieInfo__remove" onClick={onClick}>Delete</button>
               <h2 className="MovieInfo__title">{title}</h2>
               <p className="MovieInfo__description">{descr}</p>
               <p className="MovieInfo__rating">Rating:{rating}/10</p>
               </div>
                <ul className="ChipList">
                {genres.map(genre => <li className="ChipList__item" key={genre}>{genre}</li>)}
                </ul>
            </div>
        )
    }
    
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    rating: PropTypes.string.isRequired
}
export default MovieCard;
