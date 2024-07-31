import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>About</div>
  )
}

export default About