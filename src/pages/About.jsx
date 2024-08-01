import React, { useEffect, useRef } from 'react'
import Top from '../components/AboutPage/Top';
import BreadCrumb from '../components/AboutPage/BreadCrumb';
import Details from '../components/AboutPage/Details';

const About = () => {
    const ref = useRef(null)
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div ref={ref}>
        <Top />
        <BreadCrumb />
        <Details />
    </div>
  )
}

export default About