import React, { useEffect } from 'react'

const ItService = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>ItService</div>
  )
}

export default ItService