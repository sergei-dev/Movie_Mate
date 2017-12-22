import React from 'react';
import Header from '../Header';
import v4 from 'uuid/v4';
import Logo from '../Logo';
import Navigation from '../Navigation';
import MovieList from '../MovieList';
import MovieForm from '../MovieForm';
import card from '../MovieCard/card';
import MovieCard from '../MovieCard';
import './styles.css';

class App extends React.Component {
    state = {
        movies: [...card]
    }

    onAddMovie = (refs) => {
        this.setState({
            movies: [...this.state.movies, refs]
        });
    };

    onDeleteMovie = id => {

        this.setState({
            movies: this.state.movies.filter(mov => mov.id !== id)
        });
    };
    render() {
        const { movies } = this.state;
        const cards = card.map(crd => <MovieCard key={crd.id} {...crd} />);
        return (
            <div id="App">
                <Header>
                   <Logo logo__text="Movie Mate"/>
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