import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Logo from '../Logo';
import Navigation from '../Navigation';
import MovieList from '../MovieList';
import HomePage from '../HomePage';
import MoviesPage from '../MoviesPage';
import AboutPage from '../AboutPage';
import AppSidebar from '../AppSidebar';
import SearchCategories from "../SearchCategories";
import SearchForm from "../SearchForm";
import WatchList from '../WatchList';
import  { fetchData } from 'Fetch';
import HomeIcon from '../HomePage/assets/clapperboard.2e065d52.svg';
import './styles.css';

const navLinks = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/movies',
        text: 'Movies'
    },
    {
        path: '/about',
        text: 'About'
    }
]
class App extends React.Component {
    state = {
        moviesCard: [],
        watchList: []
    }


    setSettings = (key, value) => {
		if ('localStorage' in window && window['localStorage'] !== null) {
			try {
				localStorage.setItem(key, JSON.stringify(value));
			} catch (e) {
				// if (e == QUOTA_EXCEEDED_ERR) {
				//     alert('Переполнение хранилища!');
				// }
			}
		} else {
			alert('Данные не сохранятся, ваш браузер не поддерживает Localstorage');
		}
	};
	getSettings = (key) => {
		if ('localStorage' in window && window['localStorage'] !== null) {
			return JSON.parse(localStorage.getItem(key));
		} else {
			alert('Данные не восстановлены! Вваш браузер не поддерживает Localstorage');
			return null;
		}
	} 


    fetchMoviesByCategory = category => {
        let query = '';
        switch(category) {
            case 'popular':
                query = 'https://api.themoviedb.org/3/movie/popular?';
            break;
            case 'top rated':
                query = 'https://api.themoviedb.org/3/movie/top_rated?';
            break;
            case 'upcoming':
                query = 'https://api.themoviedb.org/3/movie/upcoming?'

        }
        fetchData(query).then(data => {
            this.setState({
                moviesCard: data
            });
        });
    }

    componentWillMount() {
        fetchData().then(data => {
            this.setState({
                moviesCard: data
            });
        });
        const watchListData = this.getSettings('movie');
        if(watchListData) {
            this.setState({
                watchList: watchListData
           });
        }
    }

    handleFormSubmit = searchQuery => {
        fetchData('https://api.themoviedb.org/3/search/movie?', searchQuery).then(data => {
            this.setState({
                moviesCard: data
            });
        });
    }

    addToWatchlist = id => {
    const movie = this.state.moviesCard.find(card => card.id === id);
    const isInWatchlist = this.state.watchList.find(watchItem => watchItem.id === movie.id);
       if(!isInWatchlist) {
        this.setState(prevState => ({
            watchList: [...prevState.watchList, movie]
       }),
    () => {
        this.setSettings('movie', this.state.watchList);
    });
       }
    }

    deleteToWatchlist = id => {
        this.setState({
            watchList: this.state.watchList.filter(watchCard => watchCard.id !== id)
        });
    }

    render() {
        const { moviesCard, watchList } = this.state;
        return (
            <div id="App">
                <Header>
                   <Logo Logo__text="Movie Mate"/>
                   <Navigation links={navLinks}/>
                </Header>
                <Switch>
                  <Route exact path="/" render={(props) => (
                      <HomePage
                      homeIcon={HomeIcon}
                      title="Welcome to Movie Mate"
                      oneText="This is a single page application that lets you manage all kinds of movies."
                      twoText="If you wish to learn more about Movie Mate visit. "
                      threeText="Or start browsing right now in " 
                      {...props}/>
                  )
                 }/>
                 <Route path="/movies" component={() => (
                      <MoviesPage>
                      <AppSidebar>
                          <SearchForm getMovies={this.handleFormSubmit}/>
                          <SearchCategories onClickCategories={this.fetchMoviesByCategory}/>
                          <WatchList onClickWatchlist={watchList} onDeleteWatch={this.deleteToWatchlist}/>
                      </AppSidebar>
                      <MovieList addWatch={this.addToWatchlist} movies={moviesCard}/> 
                  </MoviesPage>
                 )}/>
                 <Route path="/about" component={AboutPage}/>
                 <Redirect to="/"/>
               </Switch>
            </div>
        )   
    }
}
export default App;