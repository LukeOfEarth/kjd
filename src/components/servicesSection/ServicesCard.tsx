import React from 'react';
import { ICard } from '../../types/card';

import "./services-card.scss";

export const ServicesCard : React.FC<ICard> = ({title, description, imageUrl}) => {
    return (
        <li className='service-card'>
            <img src={imageUrl} className='service-icon' />
            <h4 className='service-h'>{title}</h4>
            <p className='service-p'>{description}</p>
        </li>
    );
}