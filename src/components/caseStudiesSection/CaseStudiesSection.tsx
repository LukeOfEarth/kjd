import React from 'react';
import { HeadingDark } from '../common';

import "./case-studies-section.scss";
import { CaseStudiesCard } from './CaseStudiesCard';

const DATA = [
    {
        // imageUrl: "https://kj-code-challenge.s3.eu-west-1.amazonaws.com/olympian.jpeg",
        subheading: "The only athlete in the world to do her Olympic routine in 2020",
        heading: "The Olympian"
    },
    {
        // imageUrl: "https://kj-code-challenge.s3.eu-west-1.amazonaws.com/dragon.jpeg",
        subheading: "Grow your savings treasure and grow your dragon.",
        heading: "The Savings Jar"
    },
    {
        // imageUrl: "https://kj-code-challenge.s3.eu-west-1.amazonaws.com/skhokho.jpeg",
        subheading: "Helping South Africans become #CashCleva with Skhokho and TymeBank",
        heading: "Skhokho seMali"
    }
]

export const CaseStudiesSection : React.FC = () => {
    return (
        <section className='case-studies-sec'>
            <HeadingDark text='Case studies' />
            <ul className='case-studies-con'>
                {
                    DATA.map((el,i) => <CaseStudiesCard heading={el.heading} subheading={el.subheading} key={i} />)
                }
            </ul>
        </section>
    );
}