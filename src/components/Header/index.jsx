import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import './styles.css';

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                {this.props.children}
            </header>
        )
    }
}
export default Header;
