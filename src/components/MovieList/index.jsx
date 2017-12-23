import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
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

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };

  

export default MovieList;
