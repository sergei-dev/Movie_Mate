import React from 'react';
import PropTypes from 'prop-types';
import card from './card';
import './styles.css';

class MovieCard extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        onMovieClick: PropTypes.func.isRequired
    }
    render() {
        const { title,descr, onClick, rating, genres } = this.props;
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
}
MovieCard.propTypes = {
    title: PropTypes.string.isRequired
}
export default MovieCard;
