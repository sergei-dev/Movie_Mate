import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const Navigation = ({ links }) => {
    return (
        <nav className="Navigation">
                {links.map(link => (         
                    link.path === '/' ? <NavLink 
                    exact
                    key={link.text}
                     className="Navigation__link" 
                     activeClassName="Navigation__link--active"
                     to={link.path}>{link.text}
                    </NavLink>  
                    : <NavLink 
                    key={link.text}
                     className="Navigation__link" 
                     activeClassName="Navigation__link--active"
                     to={link.path}>{link.text}
                    </NavLink>  
                ))}
        </nav>
     )
}
Navigation.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,            
        })
    ).isRequired
}
    

export default Navigation;
