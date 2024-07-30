import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='border-b fixed top-0 left-0 z-50 w-full bg-[#fff]'>
            <div className='w-full flex justify-center items-center bg-green-900 text-sm p-2 md:gap-10 text-white'>
                <h1 className="flex items-center my-1 gap-2 font-medium">
                    {" "}
                    <FaPhoneAlt />
                    +1 301-532 5652, +234 814 194 6580
                </h1>
                <h1 className="flex items-center my-1 gap-2 font-medium">
                    {" "}
                    <FaEnvelope />
                    info@spectriteltd.com
                </h1>
            </div>


            <div className="navbar  lg:w-11/12 lg:mx-auto">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li>
                                <a>Service</a>
                                <ul className="p-2">
                                    <li><a>Agro Allied Services</a></li>

                                    <li><a>Import and Export</a></li>
                                    <li><a>IT Service Solution Provider</a></li>
                                    <li><a>General Contractors</a></li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost  hover:bg-transparent text-xl p-0">
                        <img src={require("../asset/logo.jpg")} className='h-full border-r-2 pe-4' alt="spectrite-logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-10 text-lg px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li>
                            <details>
                                <summary>Service</summary>
                                <ul className="p-2 w-80">
                                    <li><a>Agro Allied Services</a></li>

                                    <li><a>Import and Export</a></li>
                                    <li><a>IT Service Solution Provider</a></li>
                                    <li><a>General Contractors</a></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline border-2  text-lg">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar