import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

const MovieList = ({ movies, onMovieClick, addWatch }) => {
    return (
        <div className="MovieList">
           {movies.map(mov => (
               <MovieCard
               click={() => {
                 addWatch(mov.id);
               }}
               key={mov.id}
               {...mov}
               />
           ))}
           </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        release: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  

export default MovieList;
