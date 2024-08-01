import React, { useEffect, useRef } from 'react'
import Top from '../components/GeneralContractorPage/Top';
import BreadCrumb from '../components/GeneralContractorPage/BreadCrumb';
import Details from '../components/GeneralContractorPage/Details';

const GeneralContractor = () => {
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

export default GeneralContractor