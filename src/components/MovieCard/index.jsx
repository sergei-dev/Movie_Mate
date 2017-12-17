import React from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';
import card from './card';
import './styles.css';

class MovieCard extends React.Component {
    render() {
        const { title,description, rating, chip } = this.props;
        return (
            <div className="MovieCard">
              <div className="MoveInfo">
              <button className="MovieInfo__remove">Delete</button>
               <h2 className="MovieInfo__title">{title}</h2>
               <p className="MovieInfo__description">{description}</p>
               <p className="MovieInfo__rating">Rating:{rating}</p>
               </div>
                <ul className="ChipList">
                    {chip.map(itm => <li key={v4()} className="ChipList__item">{itm}</li>)}
                </ul>
            </div>
        )
    }
}
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
}
export default MovieCard;
