import React from 'react'

const StackList = ({stackItems}) => {
    return (
        <ul className="StackList">
            {stackItems.map(item => (
                <li className="StackList__item" key={item}>
                   <img src={item.icon} alt={item.alt}/>
                </li>
            ))}
        </ul>
    )
}

export default StackList;
