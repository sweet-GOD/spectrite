import React from 'react'
import { FaEnvelope, FaFacebook, FaInbox, FaInstagram, FaLinkedin, FaPhone, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaLocationPin, FaMessage, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

<footer className="footer border-t bg-base-100 text-base-content text-lg p-10">
  <aside>
   <img src={require("../asset/logo.jpg")} className='w-72 opacity-50' alt='' />
   
  </aside>
  <nav>
    <a className="link link-hover flex items-center gap-4"><FaLocationDot className='text-green-900' /> 7031 Mt Holly Way, Elkridge, MD 21075</a>
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
        <nav className="grid grid-flow-col gap-4 lg:gap-10 text-lg">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact Us</a>
        </nav>

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