import React from 'react';
import { IButton } from '../../types';

import "./button.scss";

export const BtnPrimary : React.FC<IButton> = ({text, onClick}) => {
    return (
        <button title={text} className={'primary'} onClick={onClick}>{text}</button>
    );
}

export const BtnSecondary : React.FC<IButton> = ({text, onClick}) => {
    return (
        <button title={text} className={'secondary'} onClick={onClick}>{text}</button>
    );
}