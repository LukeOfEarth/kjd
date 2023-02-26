import React from 'react';
import { HeadingLight } from '../common';

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
                    <h3 className='footer-sub-h'>Have a project in mind? Let's make it happen</h3>
                    <ul className='footer-link-con'>
                        {
                            LINKS.map((el, i) => <li key={i}><a className='footer-link' href={el.href}>{el.title}</a></li>)
                        }
                    </ul>
                </div>
                <div className='footer-sub-con'>
                    <div className='address'>
                        <p>22 Lawley Road, Woodstock, 7925,</p>
                        <p>Cape Town, South Africa</p>
                        <p>+27 21 469 1500</p>
                        <p>enquirie@kingjames.co.za</p>
                    </div>
                    <div className='tail'>
                        <a className='footer-link' href='#'>Explore open jobs</a>
                        <p className='c'>©2000—2022 King James Digital</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}