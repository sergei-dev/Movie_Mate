import React from 'react';
import './styles.css';

const CareerInfo = ({head, children}) => {
    return (
        <table className="CareerInfo">
            <caption>{head}</caption>
            <tbody>
            {children}
            </tbody>
        </table>
    )
}

export default CareerInfo;
