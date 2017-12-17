import React from 'react';
import MovieCard from '../MovieCard';
import './styles.css';
import card from '../MovieCard/card';

class MovieList extends React.Component {
    render() {
    const cards = card.map(crd => <MovieCard key={crd.id} {...crd} />);
        return (
            <div className="MovieList">
                {cards}
            </div>
        )
    }
}
export default MovieList;
