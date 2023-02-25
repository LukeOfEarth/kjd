import React from 'react';
import { HeadingLight, SubHeadingLight } from '../common';

import "./footer.scss";

const LINKS = [
    {
        title: "Terms of service",
        href: "#"
    },
    {
        title: "Privacy Policy",
        href: "#"
    },
    {
        title: "Impressum",
        href: "#"
    },
    {
        title: "Facebook",
        href: "#"
    },
    {
        title: "Instagram",
        href: "#"
    },
    {
        title: "Twitter",
        href: "#"
    },
    {
        title: "Github",
        href: "#"
    },
    {
        title: "LinkedIn",
        href: "#"
    },
    {
        title: "Teams",
        href: "#"
    },
    {
        title: "Youtube",
        href: "#"
    },
    {
        title: "Behance",
        href: "#"
    },
    {
        title: "Dribbble",
        href: "#"
    },
];

export const Footer : React.FC = () => {
    return (
        <footer>
            <HeadingLight text='Contact us' />
            <div className='footer-con'>
                <div className='footer-sub-con'>
                    <SubHeadingLight text={`Have a project in mind? Let's make it happen`} />
                    <ul className='footer-link-con'>
                        {
                            LINKS.map((el, i) => <li><a className='footer-link' href={el.href} key={i}>{el.title}</a></li>)
                        }
                    </ul>
                </div>
                <div className='footer-sub-con'>
                    <p>22 Lawley Road, Woodstock, 7925,</p>
                    <p>Cape Town, South Africa</p>
                    <p>+27 21 469 1500</p>
                    <p>enquirie@kingjames.co.za</p>
                    <a className='footer-link' href='#'>Explore open jobs</a>
                    <span className='c'>©2000—2022 King James Digital</span>
                </div>
            </div>
        </footer>
    );
}