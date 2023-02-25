import React from 'react';
import { HeadingDark } from '../common';

import "./case-studies-section.scss";

const DATA = [
    {
        // imageUrl: "https://kj-code-challenge.s3.eu-west-1.amazonaws.com/olympian.jpeg",
        description: "The only athlete in the world to do her Olympic routine in 2020",
        title: "The Olympian"
    },
    {
        // imageUrl: "https://kj-code-challenge.s3.eu-west-1.amazonaws.com/dragon.jpeg",
        description: "Grow your savings treasure and grow your dragon.",
        title: "The Savings Jar"
    },
    {
        // imageUrl: "https://kj-code-challenge.s3.eu-west-1.amazonaws.com/skhokho.jpeg",
        description: "Helping South Africans become #CashCleva with Skhokho and TymeBank",
        title: "Skhokho seMali"
    }
]

export const CaseStudiesSection : React.FC = () => {
    return (
        <section className='case-studies-sec'>
            <HeadingDark text='Case studies' />
        </section>
    );
}