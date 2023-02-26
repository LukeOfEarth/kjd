import React, { useEffect, useState } from 'react';
import { HeadingDark } from '../common';
import { CaseStudiesCard } from './CaseStudiesCard';
import Slider, {Settings} from "react-slick";
import { getItems } from '../../services';

import "./case-studies-section.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ICard } from '../../types/card';

const settings : Settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",

    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    variableWidth: true,

    responsive: [
        {
            breakpoint: 540,
            settings: {
              centerPadding: "24px",
            }
        },
        {
            breakpoint: 420,
            settings: {
              centerPadding: "0px",
              slidesToShow: 3,
            }
        }
      ]
};

export const CaseStudiesSection : React.FC = () => {

    const [data, setData] = useState(Array<ICard>);

    useEffect(() => {
        const getCards = async () => {
            const cards = await getItems();
            setData(cards);
        }

        getCards();
    }, []);

    return (
        <section className='case-studies-sec'>
                <div className='case-studies-sub-h-con'>
                    <HeadingDark text='Case studies' />
                </div>
                <section className='case-studies-caro-con'>
                    <Slider {...settings}>
                        {
                            data.map((el,i) => <CaseStudiesCard title={el.title} description={el.description} imageUrl={el.imageUrl} key={i} />)
                        }
                    </Slider>
                </section>
        </section>
    );
}