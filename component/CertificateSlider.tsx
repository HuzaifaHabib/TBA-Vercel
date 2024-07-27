'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';


import certifiImg1 from './../public/certifiImg1.png';
import certifiImg2 from './../public/certifiImg2.png';

export default function CertificateSlider() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: isMobile ? 1 : 3,
        arrows: true,

        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "50px",
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // speed: 1000,
        // autoplaySpeed: 5000,
        // arrows: true,
        // dots: false,
        // autoplay: true,

    };

    return (
        <div className="slider-container w-full p-8 md:p-6">
            <Slider {...settings}>



                <div>
                    <div className="flex md:w-[400px] w-[300px]">
                        <a className="md:block hidden" href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="cursor-pointer" src={certifiImg1} alt="Logo" width={100} height={100} />
                        </a>
                        <a className="md:hidden block" href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="cursor-pointer" src={certifiImg1} alt="Logo" width={60} height={60} />
                        </a>

                        <div className="md:pl-5 pl-2 flex flex-col items-start">
                            <div className="text-toolsText md:text-1xl text-base">Make Intermediate Certificate</div>
                            <div className="md:mt-3 mt-1 flex md:gap-2">
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    Automation
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    Data Structures
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    JSON
                                </button>

                            </div>

                            <div className="md:mt-3 mt-2 text-xs text-toolsText">Provider: Make . Issued: April 2024</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex md:w-[400px] w-[300px]">
                        <a className="md:block hidden" href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="cursor-pointer" src={certifiImg2} alt="Logo" width={100} height={100} />
                        </a>
                        <a className="md:hidden block" href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="cursor-pointer" src={certifiImg2} alt="Logo" width={60} height={60} />
                        </a>

                        <div className="md:pl-5 pl-2 flex flex-col items-start">
                            <div className="text-toolsText md:text-1xl text-base">Make Intermediate Certificate</div>
                            <div className="md:mt-3 mt-1 flex md:gap-2">
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    Automation
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    Data Structures
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    JSON
                                </button>

                            </div>

                            <div className="md:mt-3 mt-2 text-xs text-toolsText">Provider: Make . Issued: April 2024</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex md:w-[400px] w-[300px]">
                        <a className="md:block hidden" href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="cursor-pointer" src={certifiImg1} alt="Logo" width={100} height={100} />
                        </a>
                        <a className="md:hidden block" href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="cursor-pointer" src={certifiImg1} alt="Logo" width={60} height={60} />
                        </a>

                        <div className="md:pl-5 pl-2 flex flex-col items-start">
                            <div className="text-toolsText md:text-1xl text-base">Make Intermediate Certificate</div>
                            <div className="md:mt-3 mt-1 flex md:gap-2">
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    Automation
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    Data Structures
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] md:px-4 md:py-2 px-2 py-1">
                                    JSON
                                </button>

                            </div>

                            <div className="md:mt-3 mt-2 text-xs text-toolsText">Provider: Make . Issued: April 2024</div>
                        </div>

                    </div>

                </div>

            </Slider>
        </div>
    );
}