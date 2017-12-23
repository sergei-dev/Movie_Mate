import React from 'react';
import './styles.css';

const Logo = ({ Logo__text }) => {
        return (
            <div className="Logo">
               <h1 className="Logo__text">{Logo__text}</h1> 
            </div>
        )
}

export default Logo;
