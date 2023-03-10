import React from 'react';
import { IHeading } from '../../types';

import "./subheading.scss";

export const SubHeadingLight : React.FC<IHeading> = ({text}) => {
    return (
        <h3 className='body-sub-h'>{text}</h3>
    );
} 

export const SubHeadingDark : React.FC<IHeading> = ({text}) => {
    return (
        <h3 className='body-sub-h dark'>{text}</h3>
    );
} 