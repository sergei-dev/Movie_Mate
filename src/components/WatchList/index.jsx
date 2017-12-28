import React from 'react';
import './styles.css';
import WatchlistCard from '../WatchlistCard';

const WatchList = ({ onClickWatchlist, onDeleteWatch }) => {
    return (
        <div className="WatchList">
            <h2 className="WatchList__title">WatchList</h2>
            <p className="WatchList__msg">
            Add movies to watchlist...
            </p>
              {onClickWatchlist.map(el => <WatchlistCard key={el.id} btnDelete={() => {
                  onDeleteWatch(el.id)
              }} {...el}/>)}
        </div>
    )
}

export default WatchList;
