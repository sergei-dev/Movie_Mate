import React from 'react';
import Header from '../Header';
import Logo from '../Logo';
import Navigation from '../Navigation';
import MovieList from '../MovieList';
import MovieForm from '../MovieForm';
import card from '../MovieCard/card';
import './styles.css';

class App extends React.Component {
    state = {
        movies: card
    }

    onAddMovie = (mov) => {
        this.setState({
            movies: [...this.state.movies, mov]
        });
    };

    onDeleteMovie = id => {

        this.setState({
            movies: this.state.movies.filter(mov => mov.id !== id)
        });
    };
    render() {
        const { movies } = this.state;
        return (
            <div id="App">
                <Header>
                   <Logo Logo__text="Movie Mate"/>
                   <Navigation items={['About','Browse','Login']}/>
                </Header>
                <div className="app_body">
                    <MovieList movies={movies} onMovieClick={this.onDeleteMovie}/> 
                    <MovieForm onFormSubmit={this.onAddMovie}/>
                </div>
            </div>
        )
    }
}
export default App;