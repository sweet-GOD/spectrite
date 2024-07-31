import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLocationDot,  FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      <footer className="footer border-t bg-base-100 text-base-content text-lg p-10">
        <aside>
          <img src={require("../asset/logo.jpg")} className='w-72 opacity-40 hover:opacity-75 transition ease-out duration-500' alt='' />

        </aside>
        <nav>
          
          <a href='/#' className="link link-hover flex items-center gap-4"><FaLocationDot className='text-green-900' /> 7031 Mt Holly Way, Elkridge, MD 21075</a>
          <a href='mailto:info@spectriteltd.com' className="link link-hover flex items-center gap-4"><FaEnvelope className='text-green-900' /> info@spectriteltd.com</a>
        </nav>
        <nav>
          <a href="tel:+13015325652" className="link link-hover flex items-center gap-4"><FaPhoneAlt className='text-green-900' /> +1 301 532 5652</a>
          <a href="tel:+2348141946580" className="link link-hover flex items-center gap-4"><FaPhoneAlt className='text-green-900' /> +234 814 194 6580</a>
          <a href="tel:+2348134020574" className="link link-hover flex items-center gap-4"><FaPhoneAlt className='text-green-900' /> +234 813 402 0574</a>
        </nav>

      </footer>

      <footer className="footer footer-center bg-green-900 text-white rounded-none p-10">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to={"#"}>
              <FaFacebook size={24} /></Link>
            <Link to={"#"}>
              <FaInstagram size={24} /></Link>
            <Link to={"#"}>
              <FaYoutube size={24} /></Link>
            <Link to={"#"}>
              <FaLinkedin size={24} /></Link>
            <Link to={"#"}>
              <FaXTwitter size={24} /></Link>
          </div>
        </nav>
        <ul className="grid lg:grid-flow-col lg:px-14 grid-cols-1 gap-4 lg:gap-10 text-lg w-full">

          <li><Link className="link link-hover" to={"/"}>Home</Link></li>
          <li><Link className="link link-hover" to={"/about"}>About</Link></li>
          <li><Link className="link link-hover" to={"/agro"}>Agro Allied Services</Link></li>

          <li><Link className="link link-hover" to={"/import-and-export"}>Import and Export</Link></li>
          <li><Link className="link link-hover" to={"/it-service"}>IT Service Solution Provider</Link></li>
          <li><Link className="link link-hover" to={"/general-contractor"}>General Contractors</Link></li>
          <li><Link className="link link-hover" to={"/contact"}>Contact Us</Link></li>

         
        </ul>

      </footer>

      <footer className="footer  w-10/12 mx-auto items-center p-6">
        <aside className="grid-flow-col items-center">

          <p>Copyright © {new Date().getFullYear()} - Spectrite Internertional Limited , All right reserved.</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>Website Designed By <span className='font-extrabold'>Onas</span></p>
        </nav>
      </footer>
    </div>
  )
}

export default Footer