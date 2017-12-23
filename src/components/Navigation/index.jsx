import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Navigation = ({ items }) => {
    return (
        <nav className="Navigation">
            <ul className="Navigation__list">
                {items.map(item => <li key={item}><a className="Navigation__link" href="/">{item}</a></li>)}
            </ul>
        </nav>
     )
}
Navigation.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
}
    

export default Navigation;
