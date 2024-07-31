import React, { useEffect, useRef } from 'react'
import Top from '../components/ImportandExportPage/Top';
import BreadCrumb from '../components/ImportandExportPage/BreadCrumb';
import Details from '../components/ImportandExportPage/Details';

const ImportandExport = () => {
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

export default ImportandExport