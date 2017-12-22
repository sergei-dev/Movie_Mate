import React from 'react';
import './styles.css';

class Navigation extends React.Component {
    render() {
        return (
           <nav className="Navigation">
               <ul className="Navigation__list">
                   {this.props.items.map(item => <li key={item}><a className="Navigation__link" href="#">{item}</a></li>)}
               </ul>
           </nav>
        )
    }
}
export default Navigation;
