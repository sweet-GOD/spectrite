import React, { useEffect } from 'react'

const GeneralContractor = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>GeneralContractor</div>
  )
}

export default GeneralContractor