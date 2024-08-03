import Slider from 'react-slick';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import card1 from './../public/card_1.png';
import card2 from './../public/card_2.png';
import card3 from './../public/card_3.png';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import React from 'react';



export const SpecializationSlider = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        // centerMode: false,
        // classNames: '',
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
        <div className="slider-container md:w-[90vw]">
            <Slider {...settings}>
                <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                    <div className="cursor-pointer flex flex-col px-5 items-center h-[300px] w-[300px] md:w-[390px] md:h-[350px] rounded-[50px] min-w-[80vw] md:min-w-[unset] m-auto"
                        style={{ backgroundImage: "linear-gradient(300deg, #181820, #2A2C2E)" }}>
                        <StaggeredFadeIn className="">

                            <div className="flex w-full p-1 mt-5 items-center justify-start">

                                <div className="bg-card1 w-12 md:w-16 md:h-16 h-12 rounded-full">
                                    <Image src={card1} alt="Logo" className='mx-auto mt-2 w-6 md:w-9' />
                                </div>
                                <div className="md:mx-5 mx-4 md:text-xl font-bold text-left">Task Automation <br />and Workflows</div>
                            </div>

                            <div className="text-card4 md:px-4 mt-2 pb-4  text-left font-['Inter'] text-[14px] md:text-[16.5px]">
                                Utilize platforms like  <span className="text-white ml-2 font-bold">make.com</span>, <span className="text-white ml-2 font-bold">Zapier</span>, and<span className="text-white mx-2 font-bold">n8n</span>
                                to automate complex workflows across your applications and services. From enhancing communication between your CRM and email marketing software to synchronizing data <span className='text-purple-400'>more</span>
                            </div>
                        </StaggeredFadeIn>
                    </div>
                </a>
                <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                    <div className="cursor-pointer flex flex-col px-5 items-center h-[300px] w-[300px]  md:w-[390px] md:h-[350px] rounded-[50px] min-w-[80vw] md:min-w-[unset] m-auto"
                        style={{ backgroundImage: "linear-gradient(300deg, #25305b, #534185)" }} >
                        <StaggeredFadeIn className="">
                            <div className="flex w-full mt-5 items-center justify-start">

                                <div className="bg-card1 md:w-16 md:h-16 w-12 h-12  rounded-full">
                                    <Image height={40} width={40} src={card2} alt="Logo" className='mx-auto mt-2 w-6 md:w-9' />
                                </div>
                                <div className="mx-5 md:text-xl font-bold text-left">AI Integrations</div>
                            </div>

                            <div className="text-card2 md:px-4 mt-2 text-left font-['Inter'] text-[14px] md:text-[16.5px]" >
                                Bring your operations into the age of AI with advanced AI solutions like
                                <span className="text-white mx-2 font-bold">ChatGPT</span>
                                that enhance customer service, process data, and provide insights that drive your business forward. Use AI algorithms that learn and adapt to better serve your business objectives.            </div>
                        </StaggeredFadeIn>
                    </div>
                </a>
                <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                    <div className="cursor-pointer flex flex-col px-5 items-center h-[300px] w-[300px] md:w-[390px] md:h-[350px]  rounded-[50px] min-w-[80vw] md:min-w-[unset] m-auto"
                        style={{ backgroundImage: "linear-gradient(300deg, #181820, #2A2C2E)" }}>
                        <StaggeredFadeIn className="">
                            <div className="flex w-full p-1 mt-5 items-center justify-start">

                                <div className="bg-card3 py-4 px-4 rounded-full">
                                    <Image src={card3} alt="Logo" width={50} height={50} />
                                </div>
                                <div className="mx-5 md:text-xl font-bold text-left">API Development & Integrations</div>
                            </div>

                            <div className="text-card4 md:px-4 mt-2 text-left font-['Inter'] text-[14px] md:text-[16.5px]">
                                Harness the power of APIs to create seamless integration, promote robust data exchange between systems and applications, and foster a robust technology framework that can adapt to modern demands.
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


const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const AnimatedFadeIn = ({ children, className }: any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const fadeInLeftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const AnimatedFadeInLeftToRight = ({ children, className }: any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInLeftToRightVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};


const containerVariants2 = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants2 = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const StaggeredFadeIn = ({ children, className }: any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants2}
            className={className}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={itemVariants2}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};
