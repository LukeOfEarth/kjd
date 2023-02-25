import React from 'react';
import { IHeading } from '../../types';

import "./heading.scss";

export const HeadingLight : React.FC<IHeading> = ({text}) => {
    return (
        <div className='h-con'>
            <div className='decorator' />
            <h2 className='h'>{text}</h2>
        </div>
    );
}

export const HeadingDark : React.FC<IHeading> = ({text}) => {
    return (
        <div className='h-con'>
            <div className='decorator' />
            <h2 className='h dark'>{text}</h2>
        </div>
    );
}