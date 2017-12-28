import React from 'react';
import './styles.css';

const WatchlistCard = ({ poster,title,release,rating, btnDelete }) => {
    return (
        <div className="WatchlistCard">
            <img src={poster} alt="watch poster" className="WatchlistCard__img"/>
            <div className="WatchlistCard__body">
                <h3 className="WatchlistCard__title">{title}</h3>
                <p className="WatchlistCard__release">Released: {release}</p>
                <p className="WatchlistCard__rating">Rating: {rating}</p>
                <button onClick={btnDelete} className="WatchlistCard__btn">-</button>
            </div>
        </div>
    )
}

export default WatchlistCard;
