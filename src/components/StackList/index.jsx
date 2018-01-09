import React from 'react';
import './styles.css';

const StackList = ({stackItems}) => {
    return (
        <ul className="StackList">
            {stackItems.map(item => (
                <li className="StackList__item" key={item}>
                   <img className="StackList__icon" src={item.icon} alt={item.alt}/>
                </li>
            ))}
        </ul>
    )
}

export default StackList;
