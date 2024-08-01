import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot,  FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import 'animate.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

<div
      className={`fixed bottom-4 right-2 bg-green-600 shadow py-3 px-6 rounded-3xl transition-opacity duration-300 ease-in-out z-30 ${
        isVisible ? 'opacity-100 animate__animated animate__bounce animate__infinite animate__slower' : 'opacity-0'
      }`}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <a href="https://wa.me/2348141946580"  target="_blank" rel="noreferrer" className='flex items-center justify-center gap-2 text-white text-lg'>
        <FaWhatsapp size={26} /> Chat with me
      </a>
    </div>


      <footer className="footer border-t bg-base-100 text-base-content text-lg p-10">
        <aside>
          <img src={require("../asset/logo.jpg")} className='w-72 opacity-40 hover:opacity-75 transition ease-out duration-500' alt='' />

        </aside>
        <nav>
          
          <a href='https://maps.app.goo.gl/GTvXHV5t2QQhe2wB9' className="link link-hover flex items-center gap-4"><FaLocationDot className='text-green-900' /> 7031 Mt Holly Way, Elkridge, MD 21075</a>
          <a href='mailto:info@spectriteltd.com' className="link link-hover flex items-center gap-4"><FaEnvelope className='text-green-900' /> info@spectriteltd.com</a>
        </nav>
        <nav>
          <a href="tel:+13015325652" className="link link-hover flex items-center gap-4"><FaPhoneAlt className='text-green-900' /> +1 301 532 5652</a>
          <a href="tel:+2348141946580" className="link link-hover flex items-center gap-4"><FaPhoneAlt className='text-green-900' /> +234 814 194 6580</a>
          <a href="tel:+2348134020574" className="link link-hover flex items-center gap-4"><FaPhoneAlt className='text-green-900' /> +234 813 402 0574</a>
        </nav>

      </footer>

      <footer className="footer footer-center bg-green-900 text-white rounded-none p-10">
        
        <ul className="grid lg:grid-cols-4 lg:px-14 grid-cols-2 gap-4 lg:gap-10 lg:text-lg w-full">
        <nav>
          <div className="grid grid-flow-col gap-4">
            
            <Link to={"#"}>
              <FaInstagram size={32} /></Link>
            
            <Link to={"#"}>
              <FaXTwitter size={32} /></Link>
          </div>
        </nav>

          <li><Link className="link link-hover" to={"/"}>Home</Link></li>
          <li><Link className="link link-hover" to={"/about"}>About</Link></li>
          <li><Link className="link link-hover" to={"/agro"}>Agro Allied Services</Link></li>

          <li><Link className="link link-hover" to={"/import-and-export"}>Import and Export</Link></li>
          <li><Link className="link link-hover" to={"/it-service"}>IT Service Solution Provider</Link></li>
          <li><Link className="link link-hover" to={"/general-contractor"}>General Contractors</Link></li>
          <li><Link className="link link-hover" to={"/contact"}>Contact Us</Link></li>

         
        </ul>

      </footer>

      <footer className="footer  w-10/12 mx-auto items-center justify-center lg:p-4 p-2">
        <aside className="grid-flow-col items-center text-center text-green-900">

          <p>Copyright © {new Date().getFullYear()} - Spectrite Internertional Limited , All right reserved.</p>
        </aside>
        <nav className="grid-flow-col hidden gap-4 md:place-self-center md:justify-self-end ">
          <p>Website Designed By <span className='font-extrabold '>Onas</span></p>
        </nav>
      </footer>
    </div>
  )
}

export default Footer