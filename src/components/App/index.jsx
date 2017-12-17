import React from 'react';
import Header from '../Header';
import Logo from '../Logo';
import Navigation from '../Navigation';
import MovieList from '../MovieList';
import MovieForm from '../MovieForm';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Header>
                   <Logo />
                   <Navigation items={['About','Browse','Login']}/>
                </Header>
                <div className="app_body">
                    <MovieList />
                    <MovieForm />
                </div>
            </div>
        )
    }
}
export default App;