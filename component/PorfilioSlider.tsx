'use client'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import porfolio from './../public/porfolio.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function PorfilioSlider() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        autoplay: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    };
    return (
        <div className='md:w-1/2 w-[85vw]'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={porfolio.src} role="presentation" />
                    </div>
                    <div>
                        <img src={porfolio.src} role="presentation" />
                    </div>
                    <div>
                        <img src={porfolio.src} role="presentation" />
                    </div>

                </Slider>
            </div>
        </div>

    );
}

export default PorfilioSlider;
