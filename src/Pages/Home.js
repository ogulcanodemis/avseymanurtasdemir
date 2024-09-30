import React from 'react'
import CustomNavbar from '../Components/CustomNavbar'
import CarouselComponent from '../Components/CarouselComponent'
import Services from '../Components/Services'
import AboutSection from '../Components/AboutSection'
import PracticeAreas from '../Components/PracticeAreas'
import ValuesAndTestimonials from '../Components/ValuesAndTestimonials'
import CallToAction from '../Components/CallToAction'
import FreeConsultation from '../Components/FreeConsultation'
const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <CarouselComponent />
      <Services />
      <AboutSection />
      <PracticeAreas />
      <ValuesAndTestimonials />
      <CallToAction />
      <FreeConsultation />
    </div>
  )
}

export default Home