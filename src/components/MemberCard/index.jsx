import React from 'react';
import './styles.css';

const MemberCard = ({ avatar, name, position }) => {
    return (
        <div className="TeamList__card">
            <div className="MemberCard">
                <img src={avatar} alt={name} className="MemberCard__img"/>
                <div className="MemberCard__info">
                    <h2 className="MemberCard__name">
                        {name}
                    </h2>
                    <p className="MemberCard__pos">
                        {position}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;
