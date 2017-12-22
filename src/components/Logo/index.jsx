import React from 'react';
import './styles.css';

class Logo extends React.Component {
    render() {
        const { logo__text } = this.props;
        return (
            <div className="Logo">
               <h1 className="Logo__text">{logo__text}</h1> 
            </div>
        )
    }
}
export default Logo;
