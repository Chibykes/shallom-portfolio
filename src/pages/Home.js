import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import logo from '../static/logo-yellow.png';
import Homeimg from '../static/Home.png';

function Home() {

    const [portfolio, setPortfolio] = useState({
        posts: [
            {
                image: '',
                title: 'SAFE SPACE',
                subtitle: 'A mental health wellness support app.',
                summary: 'SafeSpace is a mobile application which help individuals take care of their mental help. Users has access to meet spcialists for free, an inbuilt diary, and a Ventspace where they are free to vent their thoughts.'
            },
            {
                image: '',
                title: 'SAFE SPACE',
                subtitle: 'A mental health wellness support app.',
                summary: 'SafeSpace is a mobile application which help individuals take care of their mental help. Users has access to meet spcialists for free, an inbuilt diary, and a Ventspace where they are free to vent their thoughts.'
            },
            {
                image: '',
                title: 'SAFE SPACE',
                subtitle: 'A mental health wellness support app.',
                summary: 'SafeSpace is a mobile application which help individuals take care of their mental help. Users has access to meet spcialists for free, an inbuilt diary, and a Ventspace where they are free to vent their thoughts.'
            },
        ]
    });

    const fadeIn = {
        initial: { translateY: 200, opacity: 0 },
        whileInView: { translateY: 0, opacity: 1 },
        transition: { duration: 1 },
        viewport: { once: true }
    }

    const stroking = {
        initial: { pathLength: 0, fill: "#0C0B0E00" },
        animate: { pathLength: 1, fill: ["#0C0B0E00", "#0C0B0E00", "#0C0B0EFF"] },
        transition: { duration: 3 }
    }

    // useEffect(() => {
        
    //     fetch('https://api.jsonstorage.net/v1/json/be8c8540-c99e-4d11-abf6-a9e8d066cf60/c13b593d-c253-4bee-b480-e0def98c691b?apiKey=a0f5ad7b-42de-4302-b126-5635583165ea', {
    //         method: 'get',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setPortfolio(data);
    //     });

    //     return;

    // // eslint-disable-next-line
    // }, []);
    

    document.title = "Shallom Isaiah || Let's Create Something Amazing 💻😎";

  return (
    <main className="">

        {/* Hero Section */}
        <section className="lg:min-h-[120vh] min-h-screen bg-main-black relative grid lg:place-content-center place-content-end">

            
            <Header type="dark"/>


            {/* Into Text */}
            <div className="lg:px-5 lg:py-12 p-10 pb-12">
                <svg className="w-14 h-14 mb-5 lg:hidden" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                    <g id="Group_4" data-name="Group 4" transform="translate(-658 -367)">
                        <rect id="Rectangle_1" data-name="Rectangle 1" width="512" height="512" rx="40" transform="translate(658 367)" fill="#ffcb00" />
                        <motion.path {...stroking} id="Subtraction_1" data-name="Subtraction 1" d="M499,616.5H437a2.5,2.5,0,0,1-2.5-2.5V429a2.5,2.5,0,0,1,2.5-2.5h62a2.5,2.5,0,0,1,2.5,2.5V614A2.5,2.5,0,0,1,499,616.5ZM292.5,534.288a146.591,146.591,0,0,1-28.462-2.877,169.747,169.747,0,0,1-28.05-8.117,163.444,163.444,0,0,1-25.483-12.433,108.781,108.781,0,0,1-20.755-16.029l20.55-32.469a20.666,20.666,0,0,1,6.473-5.856,16.963,16.963,0,0,1,8.734-2.363,23.5,23.5,0,0,1,12.433,3.9c4.185,2.607,8.956,5.511,14.179,8.631a115.9,115.9,0,0,0,18.186,8.631c6.82,2.591,14.978,3.905,24.25,3.905,12.545,0,22.431-2.8,29.386-8.323s10.48-14.407,10.48-26.407c0-6.954-1.936-12.693-5.754-17.056a44.646,44.646,0,0,0-15.1-10.892,139.717,139.717,0,0,0-21.269-7.6c-7.906-2.181-16.134-4.636-24.455-7.3a179.888,179.888,0,0,1-24.454-9.864,77.2,77.2,0,0,1-21.27-15.413,65.443,65.443,0,0,1-8.451-10.738,81.248,81.248,0,0,1-6.653-13.1,75.285,75.285,0,0,1-4.316-15.952,120.609,120.609,0,0,1-1.439-19.291,82.575,82.575,0,0,1,1.7-16.645,86.8,86.8,0,0,1,5.086-16.234,83.159,83.159,0,0,1,8.374-15.156,88.828,88.828,0,0,1,11.56-13.409,90.238,90.238,0,0,1,14.641-11.276A108.832,108.832,0,0,1,260.24,235.8a104.571,104.571,0,0,1,20.5-5.625,138.425,138.425,0,0,1,23.273-1.875,164.959,164.959,0,0,1,26.818,2.157,141.659,141.659,0,0,1,24.763,6.37,136.627,136.627,0,0,1,21.885,10.07,101.377,101.377,0,0,1,18.187,13.254L378.4,292.415a26.223,26.223,0,0,1-6.474,7.4,14.554,14.554,0,0,1-8.734,2.466,21.468,21.468,0,0,1-10.173-2.98c-3.587-1.964-7.62-4.149-12.33-6.679a102.734,102.734,0,0,0-15.72-6.679,63.2,63.2,0,0,0-20.139-2.98c-12.954,0-22.737,2.8-29.078,8.323s-9.555,13.093-9.555,22.5a20.821,20.821,0,0,0,5.754,15,49.827,49.827,0,0,0,15.1,10.274,162.691,162.691,0,0,0,21.372,7.912c7.981,2.388,16.243,5.084,24.557,8.014a220.564,220.564,0,0,1,24.557,10.378,82.26,82.26,0,0,1,21.371,15.207,66.757,66.757,0,0,1,8.452,10.249,77.135,77.135,0,0,1,6.653,12.253,66.264,66.264,0,0,1,4.315,14.616,98.434,98.434,0,0,1,1.438,17.339,110.637,110.637,0,0,1-1.8,20.087,100.262,100.262,0,0,1-5.394,18.752,93.163,93.163,0,0,1-8.811,16.928,91.069,91.069,0,0,1-12.048,14.616,89.847,89.847,0,0,1-15.258,12.022,106.85,106.85,0,0,1-18.444,9.144,111.634,111.634,0,0,1-21.4,5.78A145.135,145.135,0,0,1,292.5,534.288ZM448.5,392.5a13.181,13.181,0,0,1-9.192-3.661,12.163,12.163,0,0,1,0-17.678,13.37,13.37,0,0,1,18.384,0,12.163,12.163,0,0,1,0,17.678A13.181,13.181,0,0,1,448.5,392.5Zm39-1a12,12,0,1,1,8.486-3.515A11.921,11.921,0,0,1,487.5,391.5Zm-39-38a13,13,0,1,1,9.192-3.808A12.914,12.914,0,0,1,448.5,353.5Zm39-1a11.685,11.685,0,0,1-8.485-3.661,12.871,12.871,0,0,1,0-17.677,11.664,11.664,0,0,1,16.971,0,12.87,12.87,0,0,1,0,17.677A11.686,11.686,0,0,1,487.5,352.5Z" transform="translate(566 203)" fill="#0c0b0e" stroke="#0c0b0e" strokeWidth="5"/>
                    </g>
                </svg>

                <p className="lg:w-5/6 mx-auto font-[Lato] lg:font-semibold lg:text-6xl text-2xl text-white lg:text-center lg:leading-tight py-5">
                    <span className="text-main-yellow">Hi there!</span> I’m Shallom, a user-centric Product designer who is passionate about creating meaningful and inclusive digital experiences that <span className="text-main-yellow">spark Joy.</span>
                </p>
                <p className="lg:w-5/6 mx-auto font-[Montserrat] font-light text-zinc-300 lg:text-center lg:text-xl text-sm py-5">Welcome to my portfolio!</p>
            </div>
            {/* End */}

            <svg className="absolute bottom-8 right-10 lg:scale-100 scale-50" width="8" height="181" viewBox="0 0 8 181" fill="none" xmlns="http://www.w3.org/2000/svg" > <motion.path d="M3.64645 180.354C3.84172 180.549 4.1583 180.549 4.35356 180.354L7.53554 177.172C7.7308 176.976 7.7308 176.66 7.53554 176.464C7.34028 176.269 7.0237 176.269 6.82843 176.464L4.00001 179.293L1.17158 176.464C0.976318 176.269 0.659736 176.269 0.464474 176.464C0.269212 176.66 0.269212 176.976 0.464474 177.172L3.64645 180.354ZM3.5 2.18557e-08L3.50001 180L4.50001 180L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="white"         
                stroke="#fff"
                strokeWidth="0.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                initial={{pathLength: 0, fill: "rgba(255, 255, 255, 0)"}} 
                animate={{pathLength: 1, fill: "rgba(255, 255, 255, 1)" }} 
                transition={{duration: 5}}
                viewpoint={{once: true}}
            />
            </svg>

        </section>


        {/* Projects Section */}
        <section className="lg:p-20 lg:pt-[100px] p-8" id="projects">
            <p className="font-[Montserrat] font-bold uppercase text-md">Featured Projects</p>

            <div className="py-10 lg:pt-[100px] lg:space-y-[200px] space-y-12">


                {portfolio?.posts?.map(({ image, title, subtitle, summary }, index) => {
                    if((parseInt(index) + 1) % 2 !== 0){
                        return (
                            <motion.div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24 lg:gap-y-0 gap-y-5 items-stretch relative" {...fadeIn}>

                                <div className="col-span-1 grid grid-cols-1 rounded-lg">
                                    <div className="inline-flex lg:justify-center justify-start items-center gap-x-5 lg:absolute lg:top-1/2 lg:-left-32 lg:-rotate-90">
                                        <div className="h-[1px] w-[60px] bg-zinc-400"></div>
                                        <p className="font-[Montserrat] font-[500] text-xs text-zinc-400 inline">
                                            Case Study {(parseInt(index)+1).toString().padStart(3,'0')}
                                        </p>
                                    </div>

                                    <div className="col-span-1 grid place-content-end overflow-hidden rounded-lg min-h-[280px] self-stretch lg:mt-0 mt-4 group bg-zinc-300">
                                        <img src={image} className="h-full w-auto max-w-none group-hover:scale-125 transition-transform ease-in-out duration-500" />
                                    </div>
                                </div>
                                
                                <div className="col-span-1 lg:space-y-12 space-y-5 py-5">
                                    <p className="font-[Montserrat] font-bold uppercase lg:text-lg">{title}</p>
                                    <p className="font-[Montserrat] font-[500] lg:text-4xl text-2xl">{subtitle}</p>
                                    <p className="font-[Montserrat] font-[500] lg:text-lg text-zinc-400">
                                        {summary}
                                    </p>
                                    <div className="lg:px-10 lg:py-5 px-8 py-4 inline-flex justify-center items-center gap-x-5 rounded-lg bg-main-black text-white">
                                        <p className="font-semibold">View Case Study</p>
                                        <svg className="scale-75" width="51" height="16" viewBox="0 0 51 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z" fill="white"/>
                                        </svg>

                                    </div>
                                </div>
                            </motion.div>
                        );
                    }

                    return (
                        <motion.div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24 lg:gap-y-0 gap-y-5 items-stretch relative" {...fadeIn}>

                            <div className="col-span-1 grid grid-cols-1 rounded-lg lg:order-last">
                                <div className="inline-flex lg:justify-center justify-end items-center gap-x-5 lg:absolute lg:top-1/2 lg:-right-32 lg:-rotate-90">
                                    <div className="h-[1px] w-[60px] bg-zinc-400"></div>
                                    <p className="font-[Montserrat] font-[500] text-xs text-zinc-600 inline">
                                        Case Study {(parseInt(index)+1).toString().padStart(3,'0')}
                                    </p>
                                </div>

                                <div className="col-span-1 grid place-content-end overflow-hidden rounded-lg min-h-[280px] self-stretch lg:mt-0 mt-4 group bg-zinc-300">
                                    <img src={image} className="h-full w-auto max-w-none group-hover:scale-125 transition-transform ease-in-out duration-500" />
                                </div>
                            </div>
                            
                            <div className="col-span-1 lg:space-y-12 space-y-5 py-5">
                                <p className="font-[Montserrat] font-bold uppercase lg:text-lg">{title}</p>
                                <p className="font-[Montserrat] font-[500] lg:text-4xl text-2xl">{subtitle}</p>
                                <p className="font-[Montserrat] font-[500] lg:text-lg text-zinc-600">
                                    {summary}
                                </p>
                                <div className="lg:px-10 lg:py-5 px-8 py-4 inline-flex justify-center items-center gap-x-5 rounded-lg bg-main-black text-white">
                                    <p className="font-semibold">View Case Study</p>
                                    <svg className="scale-75" width="51" height="16" viewBox="0 0 51 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z" fill="white"/>
                                    </svg>

                                </div>
                            </div>
                        </motion.div>
                    )
                })}
                

            </div>


        </section>
        {/* end */}

        <hr className="bg-zinc-300 mx-20"/>

        {/* Visual Design Section */}
        <section className="lg:p-20 lg:pt-[50px] p-8" id="visual-designs">
            <p className="font-[Montserrat] font-bold uppercase text-md">Visual Design</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 pt-[50px]">

                <motion.div className="col-span-1 overflow-hidden rounded-lg" {...fadeIn}>
                    <div className="w-full lg:min-h-[400px] min-h-[280px] bg-zinc-300"></div>
                    <div className="bg-main-black px-10 py-7 text-white lg:text-xl text-lg font-[500]">
                        Safespace - Mental health and website design
                    </div>
                </motion.div>

                <motion.div className="col-span-1 overflow-hidden rounded-lg" {...fadeIn}>
                    <div className="w-full lg:min-h-[400px] min-h-[280px] bg-zinc-300"></div>
                    <div className="bg-main-black px-10 py-7 text-white lg:text-xl text-lg font-[500]">
                        Safespace - Mental health and website design
                    </div>
                </motion.div>

                <motion.div className="col-span-1 overflow-hidden rounded-lg" {...fadeIn}>
                    <div className="w-full lg:min-h-[400px] min-h-[280px] bg-zinc-300"></div>
                    <div className="bg-main-black px-10 py-7 text-white lg:text-xl text-lg font-[500]">
                        Safespace - Mental health and website design
                    </div>
                </motion.div>

                <motion.div className="col-span-1 overflow-hidden rounded-lg" {...fadeIn}>
                    <div className="w-full lg:min-h-[400px] min-h-[280px] bg-zinc-300"></div>
                    <div className="bg-main-black px-10 py-7 text-white lg:text-xl text-lg font-[500]">
                        Safespace - Mental health and website design
                    </div>
                </motion.div>
            </div>
        </section>
        {/* End */}


        {/* Footer */}
        <Footer />
        {/* End */}


    </main>
  )
}

export default Home;