import React from 'react';
import { IHeading } from '../../types';

import "./subheading.scss";

export const SubHeading : React.FC<IHeading> = ({text}) => {
    return (
        <h3 className='body-h'>{text}</h3>
    );
} 