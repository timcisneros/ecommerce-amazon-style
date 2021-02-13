import React from 'react';

const Card = ({ title, img }) => {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
            <img className="card__img" src={`/${img}`} alt="Promo Image" />
            <a className="card__link" href="#">
                Learn more
            </a>
        </div>
    );
};

export default Card;
