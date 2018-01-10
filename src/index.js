import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import registerServicesWorker from './registerServiceWorker';

const root = document.querySelector('#root');
ReactDOM.render(
    <BrowserRouter basename="/Movie_Mate/build/">
        <App />
    </BrowserRouter>,    
    root
);
registerServicesWorker();
