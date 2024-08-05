import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getLinkStyle = (path) => {
        return location.pathname === path ? 'text-[#0276b6] btn bg-transparent hover:bg-transparent shadow-none border-none text-start flex items-start justify-start text-lg lg:items-center' : 'text-black hover:text-[#0276b6] hover:bg-transparent btn bg-transparent shadow-none border-none text-start flex items-start justify-start text-lg lg:items-center ';
    };

    return (
        <div className='border-b top-0 left-0 z-50 w-full bg-[#fff]'>
            <div className='w-full flex flex-col md:flex-row md:justify-center md:items-center bg-[#0276b6] text-sm p-2 md:gap-10 text-white text-justify'>
                <h1 className="flex items-center my-1 gap-2 font-medium">
                    <FaPhoneAlt />
                    +1 240 801 6139, +234 814 194 6580
                </h1>
                <h1 className="flex items-center my-1 gap-2 font-medium text-justify">
                    <FaEnvelope />
                    info@spectriteltd.com
                </h1>
            </div>

            <div className={`${isScrolled ? 'fixed top-0 left-0 z-50 w-full bg-[#fff] shadow-lg transition-all duration-300 ' : 'relative bg-transparent lg:w-11/12 lg:mx-auto'} navbar `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 p-2 shadow w-[95vw]">
                            <li><Link className={`text-xl  ${getLinkStyle("/")}`} to="/">Home</Link></li>
                            <li><Link className={`text-xl  ${getLinkStyle("/about")}`} to="/about">About</Link></li>
                            <li className='ps-3 text-xl text-gray-400'>Services</li>
                            <li>
                                <ul className="p-2 z-50">
                                    <li><Link className={`text-xl ${getLinkStyle("/agro")}`} to="/agro">Agro Allied Services</Link></li>
                                    <li><Link className={`text-xl ${getLinkStyle("/import-and-export")}`} to="/import-and-export">Import and Export</Link></li>
                                    <li><Link className={`text-xl ${getLinkStyle("/it-service")}`} to="/it-service">IT Service Solution Provider</Link></li>
                                    <li><Link className={`text-xl ${getLinkStyle("/general-contractor")}`} to="/general-contractor">General Contractors</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost hover:bg-transparent text-xl p-0">
                        <img src={require("../asset/logo.jpg")} className='h-full border-r-2 pe-4' alt="spectrite-logo" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu menu-horizontal gap-10 text-lg px-10 font-bold">
                        <li><Link className={getLinkStyle("/")} to="/">Home</Link></li>
                        <li><Link className={getLinkStyle("/about")} to="/about">About</Link></li>
                        <li>
                            <details>
                                <summary className='btn bg-transparent shadow-none border-none text-start flex items-start justify-start text-lg lg:items-center hover:bg-transparent'>Service</summary>
                                <ul className="p-2 w-80 z-50  right-0 rounded-none">
                                    <li><Link className={getLinkStyle("/agro")} to="/agro">Agro Allied Services</Link></li>
                                    <li><Link className={getLinkStyle("/import-and-export")} to="/import-and-export">Import and Export</Link></li>
                                    <li><Link className={getLinkStyle("/it-service")} to="/it-service">IT Service Solution Provider</Link></li>
                                    <li><Link className={getLinkStyle("/general-contractor")} to="/general-contractor">General Contractors</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                    <div className="">
                        <Link to="/contact" className="btn rounded-none btn-outline border-2 border-[#0276b6] text-[#0276b6] hover:bg-[#0276b6] transition ease-in-out duration-500 hover:border-[#0276b6] text-lg">Contact Us</Link>
                    </div>
                </div>
                <div className="lg:hidden navbar-end">
                    <Link to="/contact" className="btn btn-outline border-2 border-[#0276b6] text-[#0276b6] hover:bg-[#0276b6] transition ease-in-out duration-500 hover:border-[#0276b6] text-lg">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
