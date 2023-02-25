import React from 'react';
import { ICard } from '../../types/card';

import "./services-card.scss";

export const ServicesCard : React.FC<ICard> = ({heading, subheading, image}) => {
    return (
        <li className='service-card'>
            <img src={image} className='service-icon' />
            <h4 className='service-h'>{heading}</h4>
            <p className='service-p'>{subheading}</p>
        </li>
    );
}