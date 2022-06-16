import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Header({ type }) {
    const [popup, setPopup] = useState(false);

     const popanimation = {
        initial: { top: '-100%', opacity: 0 },
        animate: { top: popup ? '0' : '-100%', opacity: popup ? 1 : 0 },
        transition: { duration: .5 }
    }

    const handlePopup = () => {
        setPopup(!popup);
        // if(!popup){
        //     document.body.style.position = "fixed";
        //     return document.body.style.top = `-${window.scrollY}px`;
        // }
        
        // const scrollY = document.body.style.top;
        // document.body.style.position = "";
        // document.body.style.top = "";
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    const className = { 
        className: `capitalize ${type === "dark" ? 'hover:text-white' : 'hover:text-main-black'} text-zinc-600 text-2xl font-extrabold`
    };


  return (
    <>
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center lg:px-10 px-8 py-8 z-[2]">
            <Link className={`font-['Helvetica_Neue','Lato',sans-serif] font-bold text-uppercase ${type === "dark" ? 'text-white' : 'text-main-black'} lg:text-lg text-xs`} to="/">SHALLOM ISAIAH</Link>

            <div className={`lg:flex hidden justify-between items-center gap-x-10 ${type === "dark" ? 'text-white' : 'text-main-black'}`}>
                <a className="capitalize" href="/#projects">Projects</a>
                <Link className="capitalize" to="/about">Get to Know Me</Link>
                <a className="capitalize" href="/resume.pdf">My Resume</a>
            </div>

            <div className="lg:hidden w-10 h-10 grid place-content-center bg-zinc-700 rounded-full" onClick={handlePopup}>
                {!popup ? 
                    <HiMenuAlt1 className="text-white text-xl" />
                    :
                    <IoClose className="text-white text-xl" />
                }
            </div>
        </nav>
        {/* End */}


        {/* Popup Memu */}
        <motion.div className={`lg:hidden ${type === "dark" ? 'bg-main-black' : 'bg-white'} fixed top-0 z-[1] w-full h-full flex items-center`} {...popanimation}>

            <div className="font-[Montserrat] flex flex-col justify-between items-start px-12 w-100 gap-y-10">
                <Link onClick={handlePopup} {...className} to="/" >Home</Link>
                <Link onClick={handlePopup} {...className} to="/about" >About</Link>
                <a onClick={handlePopup} {...className} href="/#projects" >Projects</a>
                <a onClick={handlePopup} {...className} href="/#visual-designs" >Visual Design</a>
                <a onClick={handlePopup} {...className} href="/resume.pdf" >Resume</a>
            </div>
        </motion.div>
        {/* Ends */}
    </>
  )
}

export default Header