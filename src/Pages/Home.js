import React from 'react'
import CustomNavbar from '../Components/CustomNavbar'
import CarouselComponent from '../Components/CarouselComponent'
import Services from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import PracticeAreas from '../Components/PracticeAreas'
const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <CarouselComponent />
      <Services />
      <AboutSection />
      <PracticeAreas />
    </div>
  )
}

export default Home