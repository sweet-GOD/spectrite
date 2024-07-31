import React, { useEffect, useRef } from 'react'
import Top from '../components/ItServicePage/Top';
import Details from '../components/ItServicePage/Details';
import BreadCrumb from '../components/ItServicePage/BreadCrumb';

const ItService = () => {
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

export default ItService