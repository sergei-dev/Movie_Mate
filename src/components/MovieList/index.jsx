import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import card from '../MovieCard/card';
import MovieCard from '../MovieCard';

class MovieList extends React.Component {
    static propTypes = {
        movies: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                descr: PropTypes.string.isRequired,
                rating: PropTypes.string.isRequired,
            }) .isRequired
        ).isRequired,
        onMovieClick: PropTypes.func.isRequired
    };

    render() {
        const { movies, onMovieClick } = this.props;
        return (
            <div className="MovieList">
               {movies.map(mov => (
                   <MovieCard
                   key={mov.id}
                   title={mov.title}
                   descr={mov.descr}
                   rating={mov.rating}
                   genres={mov.genres}
                   onClick={() => {
                       onMovieClick(mov.id);
                   }}
                   
                   />
               ))}
            </div>
        )
    }
}
export default MovieList;
