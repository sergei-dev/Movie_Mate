import React from 'react';
import './styles.css';

const HomePage = ({ homeIcon,title,oneText,twoText,threeText }) => {
    return (
        <div className="HomePage">
            <img className="HomePage__icon" src={homeIcon} alt="Home"/>
            <h1 className="HomePage__title">{title}</h1>
            <p className="HomePage__text">
               {oneText}
            </p>
            <p className="HomePage__text">
              {twoText}
              <a className="HomePage__link" href="/about">About Page</a>
            </p>
            <p className="HomePage__text">
              {threeText}
              <a className="HomePage__link" href="/movies">Movie Gallery</a>
            </p>

        </div>
    )
}

export default HomePage;
