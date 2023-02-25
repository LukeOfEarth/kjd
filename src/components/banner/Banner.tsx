import React from 'react';

import "./banner.scss";

import bannerImg from "../../assets/img/confidence.jpeg";
import { BtnSecondary } from '../common';

export const Banner : React.FC = () => {
    return (
        <section className='hero-con'>
            <img src={bannerImg} />
            <div className='banner-text-con'>
                <h1>Live with Confidence</h1>
                <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                <div className='hero-btn-con'>
                    <BtnSecondary text='View Project' onClick={() => {}} />
                </div>
            </div>
        </section>
    );
}