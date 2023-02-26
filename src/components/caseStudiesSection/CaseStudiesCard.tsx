import React from 'react';
import { ICard } from '../../types/card';

import "./case-studies-card.scss";

export const CaseStudiesCard : React.FC<ICard> = ({title, description, imageUrl}) => {
    return (
        <div className='case-studies-card'>
            <img className='case-studies-img' src={title} />
            <div className='case-studies-txt-con'>
                <div className='decorator' />
                <h4 className='case-studies-h'>{description}</h4>
                <p className='case-studies-p'>{imageUrl}</p>
            </div>
        </div>
    );
}