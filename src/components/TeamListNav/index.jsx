import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const TeamListNav = ({teamList, currentPath}) => {
    return (
      <ul className="TeamList__members">
        {teamList.map(item => (
          <li key={item.path}>
            <NavLink
            className="TeamList__members__link"
            activeClassName="TeamList__members__link--active"
            to={`${currentPath}${item.path}`}
            >
            {item.text}
            </NavLink>
          </li>
        ))}
    </ul>
    )
}

TeamListNav.propTypes = {
    teamList: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    currentPath: PropTypes.string
  };
  
  TeamListNav.defaultProps = {
    currentPath: ''
  };
  

export default TeamListNav;
