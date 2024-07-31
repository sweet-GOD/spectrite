import React, { useEffect } from 'react'
import CarouselHero from '../components/homepageComp/CarouselHero'
import Welcome from '../components/homepageComp/Welcome'
import Gallery from '../components/homepageComp/Gallery'

const Home = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='min-h-screen'>
        <CarouselHero />
        <Welcome />
        <Gallery />
    </div>
  )
}

export default Home