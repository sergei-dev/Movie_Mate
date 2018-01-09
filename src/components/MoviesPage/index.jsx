import React from 'react';
import './styles.css';

const MoviesPage = ({children}) => {
    return (
        <div className="MoviesPage">
            {children}
        </div>
    )
}

export default MoviesPage;
