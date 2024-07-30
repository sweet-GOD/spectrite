import React from 'react'
import CarouselHero from '../components/homepageComp/CarouselHero'
import Welcome from '../components/homepageComp/Welcome'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <CarouselHero />
        <Welcome />
    </div>
  )
}

export default Home