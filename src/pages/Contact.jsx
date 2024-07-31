import React, { useEffect, useRef } from 'react'
import Top from '../components/ContactPage/Top';
import BreadCrumb from '../components/ContactPage/BreadCrumb';
import Details from '../components/ContactPage/Details';

const Contact = () => {
    const ref = useRef(null);
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

export default Contact