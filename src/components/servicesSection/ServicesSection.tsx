import React from 'react';
import { SubHeadingDark, HeadingDark } from '../common';

import "./services-section.scss";
import { ServicesCard } from './ServicesCard';

import appDev from "../../assets/img/service-app-dev-icon.svg";
import blockchain from "../../assets/img/service-blockchain-icon.svg";
import ux from "../../assets/img/service-ux-icon.svg";
import webDev from "../../assets/img/service-web-dev-icon.svg";
import { ICard } from '../../types/card';

const SERVICES : Array<ICard> = [
    {
        imageUrl: webDev,
        title: 'Web development',
        description:'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
    },
    {
        imageUrl: ux,
        title: 'User experience & design',
        description:'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
    },
    {
        imageUrl: appDev,
        title: 'Mobile app development',
        description:'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
    },
    {
        imageUrl: blockchain,
        title: 'Blockchain solutions',
        description:'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
    }
];

export const ServicesSection : React.FC = () => {
    return (
        <section className='services-sec'>
            <HeadingDark text='What we do' />
            <SubHeadingDark text='We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces' />
            <ul className='services-con'>
                {
                    SERVICES.map((el, i) => <ServicesCard title={el.title} description={el.description} imageUrl={el.imageUrl} key={i} />)
                }
            </ul>
        </section>
    );
}