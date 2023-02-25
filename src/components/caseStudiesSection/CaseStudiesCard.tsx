import React from 'react';
import { ICard } from '../../types/card';

import "./case-studies-card.scss";

export const CaseStudiesCard : React.FC<ICard> = ({heading, subheading}) => {
    return (
        <li className='case-studies-card'>
            <img className='case-studies-img' />
            <div className='case-studies-txt-con'>
                <div className='decorator' />
                <h4 className='case-studies-h'>{heading}</h4>
                <p className='case-studies-p'>{subheading}</p>
            </div>
        </li>
    );
}