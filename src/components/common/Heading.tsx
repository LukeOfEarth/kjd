import React from 'react';
import { IHeading } from '../../types';

import "./subheading.scss";

export const HeadingLight : React.FC<IHeading> = ({text}) => {
    return (
        <div className='sub-h-con'>
            <div className='decorator' />
            <h2 className='sub-h'>{text}</h2>
        </div>
    );
}

export const HeadingDark : React.FC<IHeading> = ({text}) => {
    return (
        <div className='sub-h-con'>
            <div className='decorator' />
            <h2 className='sub-h dark'>{text}</h2>
        </div>
    );
}