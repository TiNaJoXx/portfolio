import React, {useState, useEffect, useCallback} from 'react'
import {
  Navbar,
  IconButton,
  Collapse
} from "@material-tailwind/react";
import { iconComponents } from '../assets/icons/Icons';
 
const Header = ({ scrollToSection, profileRef, infoRef, projectsRef, contactRef }) => {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);
 
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = useCallback(() => {
        if (window.scrollY > window.innerHeight) { // Cambia '100' al valor de píxeles que deseas
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    }, []);
 
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 list-none lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className={`p-1 cursor-pointer ${scrolled ? 'text-black hover:text-white' : 'text-black hover:text-[#00B191]'}`} onClick={() => scrollToSection(profileRef)}>
                <a className="flex items-center font-KleeOne">
                    Inicio
                </a>
            </li>
            <li className={`p-1 cursor-pointer ${scrolled ? 'text-black hover:text-white' : 'text-black hover:text-[#00B191]'}`} onClick={() => scrollToSection(infoRef)}>
                <a className="flex items-center font-KleeOne">
                    Sobre mí
                </a>
            </li>
            <li className={`p-1 cursor-pointer ${scrolled ? 'text-black hover:text-white' : 'text-black hover:text-[#00B191]'}`} onClick={() => scrollToSection(projectsRef)}>
                <a className="flex items-center font-KleeOne">
                    Proyectos
                </a>
            </li>
            <li className={`p-1 cursor-pointer ${scrolled ? 'text-black hover:text-white' : 'text-black hover:text-[#00B191]'}`} onClick={() => scrollToSection(contactRef)}>
                <a className="flex items-center font-KleeOne">
                    Contáctame
                </a>
            </li>
        </ul>
    );
 
  return (
    <div className="max-h-[768px] w-[calc(100%)] fixed z-10">
      <Navbar className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 lg:px-28 py-6 border-none shadow-none transition-colors duration-300 ${scrolled ? 'bg-[#00B191]/60' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between text-blue-gray-900">
            <a href="" className="flex items-center gap-2 mr-4 cursor-pointer py-1.5 font-KleeOne">
                <div className='w-8'>
                    { iconComponents["app"] }
                </div>
                Javier Tinajo
            </a>
            <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                >
                {openNav ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                )}
                </IconButton>
            </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header