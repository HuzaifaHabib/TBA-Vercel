import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import { StaggeredFadeIn } from "@/app/page";
import Image from "next/image";
import star from './../public/start.png';




export const TestimonialnSlider = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        // centerMode: false,
        // classNames: 'md:flex md:flex-row md:justify-stretch',
        // infinite: false,
        // slidesToShow: isMobile ? 1 : 3,
        // slidesToScroll: isMobile ? 1 : 3,
        // speed: 1000,
        // autoplaySpeed: 5000,
        // arrows: true,
        // dots: false,
        // autoplay: true,

        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: isMobile ? 1 : 3,
        arrows: true,


        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    };


    return (
        // <div className="flex flex-row md:justify-center px-5 gap-2 md:gap-12 md:pt-10 py-5 overflow-x-scroll  md:w-[60vw]" style={{ scrollbarWidth: "none" }}>
        // <div className='w-[80vw] mx-auto'>
        <div className="slider-container md:w-[90vw] ">
            <Slider  {...settings}>
                <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                    <div className="mx-auto cursor-pointer flex flex-col flex-1  md:w-[350px]  rounded-[40px] bg-testimoCard min-w-[70vw] md:min-w-[unset]">
                        <StaggeredFadeIn className="p-8 mx-auto">
                            <div className="font-bold md:text-xl">Additional Variations of HubSpot Workflow</div>
                            <div className="flex mt-5 items-center">

                                <div className="flex">
                                    <Image src={star} alt="Logo" className="h-4 w-4" />
                                    <Image src={star} alt="Logo" className="h-4 w-4 ml-2" />
                                    <Image src={star} alt="Logo" className="h-4 w-4 ml-2" />
                                    <Image src={star} alt="Logo" className="h-4 w-4 ml-2" />
                                    <Image src={star} alt="Logo" className="h-4 w-4 ml-2" />
                                </div>

                                <div className="text-sm ml-5">
                                    5.00
                                </div>
                            </div>

                            <div className="text-testimocardText text-[10px] mt-2">
                                May 15, 2024 - May 23, 2024
                            </div>
                            <div className="text-testimocardText text-lg mt-2">
                                "We've worked with Justin twice now and he has been excellent both times. An integration and workflow master!"
                            </div>

                        </StaggeredFadeIn>
                    </div>
                </a>
                <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">

                    <div className="mx-auto cursor-pointer flex flex-col flex-1 md:w-[350px]  rounded-[40px] bg-testimoCard min-w-[80vw] md:min-w-[unset]">
                        <StaggeredFadeIn className="p-8 mx-auto">
                            <div className="font-bold text-xl">HubSpot Integration Build</div>

                            <div className="flex mt-5 items-center">

                                <div className="flex">
                                    <Image src={star} alt="Logo" className="h-5 w-5" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                </div>

                                <div className="text-sm ml-5">
                                    5.00
                                </div>
                            </div>

                            <div className="text-testimocardText text-[10px] mt-2">
                                May 15, 2024 - May 23, 2024
                            </div>
                            <div className="text-testimocardText text-lg mt-5">
                                "Justin is a pleasure to work with and, more importantly, excellent at his work. We had him come in to build a custom HubSpot workflow for a new iPaaS. The…
                            </div>
                        </StaggeredFadeIn>
                    </div>
                </a>
                <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                    <div className="mx-auto cursor-pointer flex flex-col flex-1 md:w-[350px]  rounded-[40px] bg-testimoCard min-w-[80vw] md:min-w-[unset]">
                        <StaggeredFadeIn className="p-8 mx-auto">
                            <div className="font-bold text-xl">Write Ghidra Java script</div>

                            <div className="flex mt-5 items-center">

                                <div className="flex">
                                    <Image src={star} alt="Logo" className="h-5 w-5" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                    <Image src={star} alt="Logo" className="h-5 w-5 ml-2" />
                                </div>

                                <div className="text-sm ml-5">
                                    5.00
                                </div>
                            </div>

                            <div className="text-testimocardText text-[10px] mt-2">
                                May 15, 2024 - May 23, 2024
                            </div>
                            <div className="text-testimocardText text-lg mt-5">
                                "Highly recommended, punctual despite differing time zones, ability to learn entirely new tool sets in a quick time with little to no guidance. High…
                            </div>
                        </StaggeredFadeIn>

                    </div>
                </a>


            </Slider>
        </div>
        // </div>
        // </div>
    )
}