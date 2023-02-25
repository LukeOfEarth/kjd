import React from 'react';
import { HeadingDark, SubHeadingDark } from '../common';

import "./clients-section.scss";

import bbc from "../../assets/img/clients/bbc-logo.svg";
import distell from "../../assets/img/clients/distell-logo.svg";
import engen from "../../assets/img/clients/engen-logo.svg";
import liquid from "../../assets/img/clients/liquid-logo.svg";
import microsoft from "../../assets/img/clients/microsoft-logo.svg";
import multichoice from "../../assets/img/clients/multichoice-logo.svg";
import nike from "../../assets/img/clients/nike-logo.svg";
import picknpay from "../../assets/img/clients/picknpay-logo.svg";
import sanlam from "../../assets/img/clients/sanlam-logo.svg";
import santam from "../../assets/img/clients/santam-logo.svg";
import spotify from "../../assets/img/clients/spotify-logo.svg";
import tfg from "../../assets/img/clients/tfg-logo.svg";
import tyme from "../../assets/img/clients/tyme-logo.svg";
import visa from "../../assets/img/clients/visa-logo.svg";
import wesgro from "../../assets/img/clients/wesgro-logo.svg";

const CLIENTS = [
    visa, 
    tyme, 
    distell, 
    spotify, 
    microsoft, 
    engen, 
    nike, 
    wesgro, 
    multichoice, 
    picknpay,
    liquid,
    tfg,
    sanlam,
    santam,
    bbc,
];

export const ClientsSections : React.FC = () => {
    return (
        <section className='clients-sec'>
            <HeadingDark text='You’ll be in good company' />
            <SubHeadingDark text='Trusted by leading brands' />
            <ul className='clients-con'>
                {
                    CLIENTS.map((el, i) => <li><img className='client-img' src={el} key={i} /></li>)
                }
            </ul>
        </section>
    );
}