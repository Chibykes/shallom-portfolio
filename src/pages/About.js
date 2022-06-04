import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import shallom from '../static/shallom.png';
import tools from '../static/tools.png';
import toolsDesktop from '../static/toolsDesktop.png';

function Home() {
    
    document.title = "About Me - Shallom Isaiah";

  return (
    <main className="">

        {/* Hero Section */}
        <section className="lg:pb-20 pb-10 lg:px-16 px-8 relative">

            <Header />

            <div className="pt-40">
                <p className="font-bold lg:text-4xl text-2xl">About Me</p>

                <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-10 lg:gap-16 gap-5">
                    <div className="col-span-1 min-h-fit overflow-hidden rounded-lg">
                        <img src={shallom} className="w-full h-auto" />
                    </div>
                    <div className="col-span-1 overflow-hidden py-5 space-y-5">
                        <p className="font-[800] lg:text-4xl text-2xl leading-[1.5]">
                            I’m a design enthusiastic who loves building digital products and experiences that solves complex problems.
                        </p>
                        <p className="font-[400] lg:text-base text-[15px]">
                            My name is Shallom Isaiah, I'm a visual and product designer currently based in Lagos, Nigeria. I'm a computer science major and google certified UX Designer who is user-obsessed and passionate about building seamless digital experiences that makes the user happy. This I achieve using user centered approach, which includes making extensive user researches, making sure I understand how the user feels about the product, specifying the users need and designing solutions to solve the users problems. My design process are data-driven and in a minimalist way, I design great digital products from scratch and create a better world. 
                            <br /><br />
                            To effectively develop products from concept to launch, I collaborate cross-functionally with the product team, technical engineers, and business stakeholders. 
                            <br /><br />
                            I believe that creative collaboration between design and technology is the magic that transforms good experiences into excellent ones. I'm Inquisitive, continuously changing and evolving, and always keen to learn new things. When I'm not designing, I enjoy playing board games, writing articles ,doing physical exercises and listening to music or maybe read a book.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <hr className="border-zinc-700 w-11/12 mx-auto"/>

        <section className="py-20 lg:px-16 px-8">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-12">
                <div className="colspan-1">
                    <p className="font-bold text-2xl">Skillset</p>
                </div>

                <div className="colspan-1 space-y-12">
                    <div className="space-y-5">
                        <p className="font-bold text-xl">UX Research</p>
                        <p className="text-sm">
                            Understanding user behaviors, needs, and motivations. Running research projects, including scoping, planning, executing, analyzing, and sharing the research insights.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <p className="font-bold text-xl">Visual Design</p>
                        <p className="text-sm">
                            Creating digital designs for various platforms including websites, moilbe applications,, video games, movies and more. Combining various colors, shapes and typography fonts to improve user experience.
                        </p>
                    </div>
                </div>

                <div className="colspan-1 space-y-12">
                    <div className="space-y-5">
                        <p className="font-bold text-xl">UX Design</p>
                        <p className="text-sm">
                            Interpret data and qualitative feedback. Creating user stories, personas, storyboard, and sitemap. Crafting prototypes and wireframes. Conduct usability testing.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <p className="font-bold text-xl">Information Architecture</p>
                        <p className="text-sm">
                            Building the structure of a website or application, and the relationship between all the areas. Creating and manipulate content and information in order to enhance impact, understanding, and readability.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <hr className="border-zinc-700 w-11/12 mx-auto"/>

        <section className="py-20 lg:px-16 px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-16 gap-8">
                <div className="colspan-1">
                    <p className="font-bold text-2xl">Tools I Use</p>
                </div>

                <div className="colspan-1 space-y-12">
                    <img src={ matchMedia('(max-width: 600px)').matches ? tools : toolsDesktop } className="" />
                </div>

            </div>
        </section>

        <Footer />

    </main>
  )
}

export default Home;