'use client'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Image from "next/image";
import Head from 'next/head';
import Footer from '../component/Footer'
import Header from '../component/Header'
import Slider from "react-slick";

// import Slider from '@madzadev/image-slider'
// import "image-slider/dist/index.css"
import headerImg from './../public/header_img.png';

import layer1 from './../public/Layer_1.png';
import layer2 from './../public/Layer_2.png';
import layer3 from './../public/Layer_3.png';
import layer4 from './../public/Layer_4.png';
import layer5 from './../public/Layer_5.png';



import zoom from './../public/zoom.png';
import zoomtext from './../public/zoomtext.png';



import feature from './../public/feature.svg';

import featureMobile from './../public/feature_mobile.svg';
import menu from './../public/menu.svg';
import mobileNavLogo from './../public/mobile-nav-logo.svg';
import closebtn from './../public/close-btn.svg';

import CertificateSlider from "@/component/CertificateSlider";
import PorfilioSlider from "@/component/PorfilioSlider";
import React from 'react';
import { SpecializationSlider } from '@/component/specializationSlider';
import { TestimonialnSlider } from '@/component/testimonialSlider';


const images = [
  { url: 'https://picsum.photos/seed/a/1600/900' },
  { url: 'https://picsum.photos/seed/b/1920/1080' },
  { url: 'https://picsum.photos/seed/c/1366/768' }
]

const buttonText = [
  "make.com",
  "Zapier",
  "n8n",
  "Paragon",
  "Quickbooks",
  "Web Scraping",
  "GoHighLevel",
  "Airtable",
  "ChatGPT  API",
  "OpenAI API",
  "GPT-4",
  "GPT-4o",
  "Gemini",
  "Llama-3",
  "Claude AI",
  "Mixtral of Experts",
  "HobSpot",
  "Google Sheets",
  "Google Suite",
  "BrightLocal",
  "Wrike",
  "Trello",
  "Instagram",
  "Telegram",
  "Twitter/X",
  "Facebook",
  "TikTok",
  "Virtuagym",
  "much more!",
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};



export default function Home() {

  // const [screenSize, setScreenSize] = useState({
  //   width: typeof window !== 'undefined' ? window.innerWidth : 0,
  //   height: typeof window !== 'undefined' ? window.innerHeight : 0,
  // });


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="bg-logoColor min-h-screen text-white">
      <div className="bg-div" style={{ backgroundImage: 'url(/bg-top.png)', backgroundRepeat: 'no-repeat' }}>

        {/* <Head>
          <title>Think Bot Agency</title>
          <meta name="description" content="Integration & Automation Expert" />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}


        {/* <Header /> */}

        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#1A112F] opacity-95 text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className='flex flex-row gap-2 mt-2 items-center'>
            <button
              onClick={toggleMenu}
              className="text-white p-4 focus:outline-none w-1/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className='w-2/4'>

              <Image width={180} height={180} src={mobileNavLogo} alt="Logo" />
            </div>
            <div className='w-1/4'></div>
          </div>



          <div className='flex flex-col gap-3 p-8 pl-12'>
            <div className="my-4"><a href="#feature" className="text-2xl">Features</a></div>
            <div className="my-4"><a href="#" className="text-2xl">Pricing</a></div>
            <div className="my-4"><a href="/blogs" className="text-2xl">Blog</a></div>
            <div className="my-4"><a href="#about-us" className="text-2xl">About Us</a></div>
            <div className="my-4"><a href="#" className="text-2xl">Contact</a></div>
          </div>
          <hr style={{ backgroundColor: '#56525F !important' }} />
          <div className='w-full flex'>
            <button className="mt-8 bg-button-gradient text-white text-xs py-4 w-3/4 mx-auto text-center rounded-full">
              Contact
            </button>
          </div>

        </div>


        <div className=" mx-auto p-6 flex flex-row justify-between items-center">

          {/* Mobile */}
          <div onClick={toggleMenu} className='block md:hidden' >
            <Image src={menu} alt="menu" width={22} height={22} />
          </div>

          {/* Web */}
          <div className="flex items-center space-x-2">
            <Image src={headerImg} alt="Logo" className='h-[25px] md:h-[40px] w-[25px] md:w-[40px]' />
            <div className="text-[10px] md:text-1xl font-bold">Think Bot Agency</div>
          </div>



          <nav className="space-x-6 hidden md:block ">
            <a href="#feature" className="hover:text-purple-300">Features</a>
            <a href="#" className="hover:text-purple-300">Pricing</a>
            <a href="/blogs" className="hover:text-purple-300">Blog</a>
            <a href="#about-us" className="hover:text-purple-300">About Us</a>
            <a href="#" className="hover:text-purple-300">Contact</a>
          </nav>
          <button className="bg-button-gradient hover:bg-purple-700 text-white font-bold text-[8px] md:text-base py-1 md:py-2 px-3 md:px-6 rounded-full ">
            Get Started
          </button>
        </div>


        {/* <div className="text-center py-1 md:py-16 px-4">

          <h1 className="text-1xl md:text-4xl font-bold mb-2 md:mb-4">Integration & Automation <span className="text-purple-300">Expert</span></h1>
          <p className="text-[10px] md:text-1xl px-8 mb-5 md:mb-8">Let's redefine efficiency with smart, automated systems that give you back the most valuable resource—time.</p>
          <button className="bg-button-gradient hover:bg-purple-700 text-white font-bold text-[11px] md:text-base py-3 md:py-4 px-6 rounded-full">
            Start Free Trial
          </button>
        </div> */}


        <motion.div
          className="text-center py-1 md:py-12 px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-1xl md:text-[44px] font-bold mb-2 md:mb-4" variants={textVariants}>
            Integration & Automation <span className="text-purple-500">Expert</span>
          </motion.h1>
          <motion.p className="md:text-xl text-base  px-8 mb-5 md:mb-8 text-gray-300" variants={textVariants}>
            Let's redefine efficiency with smart, automated systems that give <br /> you back the most valuable resource—time.
          </motion.p>
          <motion.button
            className="bg-button-gradient hover:bg-purple-700 text-white font-bold text-[11px] md:text-base py-3 md:py-4 px-6 rounded-full"
            variants={buttonVariants}
          >
            Contact
          </motion.button>
        </motion.div>


        <motion.div
          className="flex flex-col md:flex-row justify-center gap-0 md:gap-8 mt-0 md:mt-0 px-12 md:px-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex items-center gap-4 mt-5 md:mt-0 justify-center" variants={itemVariants}>
            <svg className="h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.707 11.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-lg text-gray-300"><span className="font-bold text-white"> TOP 10% </span> All Upwork</span>
          </motion.div>
          <motion.div className="flex items-center gap-4 mt-5 md:mt-0 justify-center" variants={itemVariants}>
            <svg className="h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.707 11.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-lg text-gray-300"><span className="font-bold text-white"> TOP 5%  </span>CRM Integration</span>
          </motion.div>
          <motion.div className="flex items-center gap-4 mt-5 md:mt-0 justify-center" variants={itemVariants}>
            <svg className="h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.707 11.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-lg text-gray-300"><span className="font-bold text-white">TOP 1%  </span> Script & Automation</span>
          </motion.div>

        </motion.div>


        <div id="feature"></div>

        <div className="flex py-5 md:py-20 mx-4 md:mx-20 items-center justify-center">

          <Image src={feature} alt="Logo" className="h-[80px]  md:h-[350px] hidden md:block  w-[100%] md:w-[1227px]" />
          <Image src={featureMobile} alt="Logo" className=" block md:hidden  w-[100%]" />

        </div>
      </div>

      {/* <main className="text-center py-16 px-4"> */}


      {/* Web */}

      <div className='hidden md:block'>

        <div className="flex flex-wrap justify-center mx-0 md:mx-20 md:space-x-20 py-5 border-t border-b border-customGray">
          <div className="flex items-center ">
            <Image src={layer1} alt="Logo" className='h-[40px] w-[150px]' />
          </div>
          <div className="flex items-center">
            <Image src={layer2} alt="Logo" className='h-[40px] w-[150px]' />
          </div>
          <div className="flex items-center">
            <Image src={layer3} alt="Logo" className='h-[40px] w-[150px]' />
          </div>
          <div className="flex items-center">
            <Image src={layer4} alt="Logo" className='h-[40px] w-[150px]' />
          </div>
          <div className="flex items-center">
            <Image src={layer5} alt="Logo" className='h-[50px] w-[130px]' />
          </div>
        </div>
      </div>


      {/* Mobile */}

      <div className="block md:hidden justify-center mx-0 md:mx-20 md:space-x-20 py-5 border-t border-b border-customGray">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center">
            <Image src={layer1} alt="Logo" className='h-[25px] w-[90px] mr-3' />
          </div>
          <div className="flex items-center">
            <Image src={layer2} alt="Logo" className='h-[25px] w-[90px] ml-3' />
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-5">
          <div className="flex items-center">
            <Image src={layer3} alt="Logo" className='h-[26px] w-[70px] mr-5' />
          </div>
          <div className="flex items-center">
            <Image src={layer4} alt="Logo" className='h-[26px] w-[80px]' />
          </div>
          <div className="flex items-center">
            <Image src={layer5} alt="Logo" className='h-[26px] w-[65px] ml-5' />
          </div>
        </div>


      </div >

      <div style={{ backgroundImage: 'url(/bg-bottom.png)' }} className="pt-10">

        <AnimatedFadeIn className="flex items-center justify-center">

          {/* <div className="flex items-center justify-center"> */}
          <div className="w-full md:w-1/2 px-10 md:px-0 text-center">
            <h1 className="text-[20px] md:text-[44px] leading-tight font-bold mb-4 text-toolsText">Specialized in Advanced <br />Automation Platforms</h1>
          </div>
          {/* </div> */}

        </AnimatedFadeIn>
        <div className='w-full md:flex md:flex-row md:justify-center md:items-center px-8 md:px-2 mt-2'>

          <SpecializationSlider />
        </div>

        <AnimatedFadeIn className="w-full flex mt-10 items-center justify-center">

          <div className="w-full md:w-1/2 text-center">
            <div className="text-[20px] md:text-[44px] font-bold text-toolsText">My Tools of Expertise</div>
            <div className="text-[10px] md:text-xl md:leading-tight px-10 md:px-20 mt-5 text-toolsText">With a proven track record in delivering custom automation tools & integrations, We can confidently say that your business process automation is in capable hands</div>
          </div>

        </AnimatedFadeIn>

        <div className="mx-5 md:mx-40 my-5 md:my-14 flex flex-wrap items-center justify-center">
          {
            buttonText.map((text, index) => (
              <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                <button key={index} className="bg-buttongrp-gradient m-1 md:m-2 text-[10px] md:text-xl text-black font-bold py-1.5 md:py-2 px-3 md:px-4 rounded-md">
                  {text}
                </button>
              </a>
            ))
          }
        </div>

        <div id='about-us'></div>

        <AnimatedFadeInLeftToRight className="">
          <div className="w-full flex flex-col md:flex-row mt-10 md:my-24 items-center justify-center px-8 md:px-40 ">
            {/* Web */}
            <div className="hidden md:block">
              <Image src={zoom} alt="zoom" className='w-[72rem]' />
            </div>
            {/* Mobile */}
            <div className="block md:hidden  w-full">
              <Image src={zoom} alt="zoom" className='w-full h-[220px] object-contain' />
            </div>
            <div className="px-0 md:px-10 md:ml-10 md:items-start mt-10 md:mt-0">

              <div className="text-1xl md:text-[42px] md:leading-tight text-center md:text-start font-bold text-toolsText">Let's automate a future where every minute counts, and every action drives growth.</div>

              <div className="mt-6 md:mt-10 flex items-center  justify-center md:justify-start">
                <Image className='md:block hidden' src={zoomtext} alt="zoom" width={80} height={80} />
                <Image className='md:hiddne block' src={zoomtext} alt="zoom" width={60} height={60} />
                <div className="text-toolsText flex ml-2 text-[12px] md:text-[24px] md:text-base">
                  <div className="font-bold ml-1">$25</div>
                  <div className="ml-1 text-gray-300">per</div>
                  <div className="font-bold ml-1 ">30 min</div>
                  <div className="ml-1 text-gray-300">Zoom meeting</div>


                </div>
              </div>

              <div className="mt-10 flex items-center justify-center md:justify-start">
                <button className="bg-button-gradient hover:bg-purple-700 text-white md:w-56 w-full py-4 md:py-3 px-6 rounded-full">
                  Book a consultation
                </button>
              </div>



            </div>

          </div>
        </AnimatedFadeInLeftToRight>


        <div className="w-full flex flex-col mt-10  justify-center">

          <AnimatedFadeIn className="">
            <div className="md:text-4xl text-xl  text-center font-bold text-toolsText">Portfolio</div>
          </AnimatedFadeIn>
          <div className="flex items-center justify-center mt-5  w-full portfolio-div">

            <PorfilioSlider />

          </div>


        </div>


        <div className="w-full flex flex-col mt-10  justify-center overflow-hidden">

          <AnimatedFadeIn className="">

            <div className="md:text-4xl text-xl text-center font-bold text-toolsText mb-4">Certifications</div>

          </AnimatedFadeIn>

          <div className="mt-5 md:px-20 py-5 border-t border-b border-customGray flex snap-center w-full overflow-hidden">

            <CertificateSlider />

          </div>


        </div>





        <AnimatedFadeIn className="">
          <div className="flex items-center justify-center mt-16">
            <div className="text-center">
              <h1 className="md:text-[44px] text-xl font-bold text-toolsText">Testimonials</h1>
            </div>
          </div>

        </AnimatedFadeIn>



        {/* <div className='w-full md:flex md:flex-row md:justify-center md:items-center px-8 md:px-0 mt-2'> */}
        <div className='px-8 md:px-0 md:w-full md:flex md:felx-row md:justify-center pb-20 mt-12' >

          <TestimonialnSlider />

        </div>

      </div >



      <Footer />



      {/* </main > */}
    </div >
  );
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

export const StaggeredFadeIn = ({ children, className }: any) => {
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
