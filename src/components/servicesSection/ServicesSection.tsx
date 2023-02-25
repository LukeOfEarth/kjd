import React from 'react';
import { SubHeading, HeadingDark } from '../common';

import "./services-section.scss";
import { ServicesCard } from './ServicesCard';

const SERVICES = [
    {
        heading: 'Web development',
        subheading:'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
    },
    {
        heading: 'User experience & design',
        subheading:'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
    },
    {
        heading: 'Mobile app development',
        subheading:'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
    },
    {
        heading: 'Blockchain solutions',
        subheading:'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
    }
];

export const ServicesSection : React.FC = () => {
    return (
        <section className='services-sec'>
            <HeadingDark text='What we do' />
            <SubHeading text='We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces' />
            <ul className='services-con'>
                {
                    SERVICES.map((el, i) => <ServicesCard heading={el.heading} subheading={el.subheading} key={i} />)
                }
            </ul>
        </section>
    );
}