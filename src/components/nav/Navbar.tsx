import React from 'react';
import { BtnPrimary } from '../common';

import "./nav.scss";

import logo from "../../assets/img/logo.svg";

export const Navbar : React.FC = () => {

    return (
        <nav>
            <div className='nav-inner'>
                <img src={logo} />
                <ul>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Industries</a></li>
                    <li><a href='#'>Cases</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='btn-con'>
                    <BtnPrimary text={`Let's Talk`} onClick={() => {}}/>
                </div>
            </div>
        </nav>
    );
}