import React from 'react';
import { HeadingDark, SubHeading } from '../common';

import "./clients-section.scss";

import bbc from "../../assets/img/clients/bbc-logo.svg"

const CLIENTS = [
    bbc,
];

export const ClientsSections : React.FC = () => {
    return (
        <section className='clients-sec'>
            <HeadingDark text='You’ll be in good company' />
            <SubHeading text='Trusted by leading brands' />
            <ul className='clients-con'>
                {
                    CLIENTS.map((el, i) => <img  src={el} key={i} />)
                }
            </ul>
        </section>
    );
}