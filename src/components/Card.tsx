import React from 'react';
import {CardProps} from "./types";
import './card.scss';

const Card = ({title, firstParagraph, secondParagraph, image}: CardProps) => {
    return(
        <div className="card-container">
            <h1>{title}</h1>
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>
            <img src={image} alt="something nice"/>
        </div>
    );
};

export default Card;