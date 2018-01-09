import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.css';

const AboutPageNav = ({items, currentPath}) => {
    return (
        <div className="AboutPage__nav">
            <nav className="AboutNav">
               {items.map(item => (
                 <NavLink 
                  className="AboutNav__link"
                  activeClassName="AboutNav__link--active"
                  to={`${currentPath}${item.path}`}>
                  {item.text}
                 </NavLink>
            ))}
            </nav>
        </div>
    )
}

AboutPageNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,            
        }).isRequired
    ).isRequired,
    currentPath: PropTypes.string
};

AboutPageNav.defaultProps = {
    currentPath: ''
};
export default AboutPageNav;
