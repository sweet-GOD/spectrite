import React, { useEffect, useRef } from 'react'
import Top from '../components/AgroPage/Top'
import BreadCrumb from '../components/AgroPage/BreadCrumb'
import Details from '../components/AgroPage/Details';

const Agro = () => {
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

export default Agro