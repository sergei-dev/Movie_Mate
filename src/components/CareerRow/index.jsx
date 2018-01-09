import React from 'react';

const CareerRow = ({title,listCareer}) => {
    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                <ul>
                    {listCareer.map(item => (
                        <li key={item}>-{item}</li>
                    ))}
                </ul>
            </td>
        </tr>
    )
}

export default CareerRow;
