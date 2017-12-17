import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServicesWorker from './registerServiceWorker';

const root = document.querySelector('#root');
ReactDOM.render(
    <App />,
    root
);
registerServicesWorker();
