import React from 'react'
import CarouselHero from '../components/homepageComp/CarouselHero'
import Welcome from '../components/homepageComp/Welcome'
import Gallery from '../components/homepageComp/Gallery'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <CarouselHero />
        <Welcome />
        <Gallery />
    </div>
  )
}

export default Home