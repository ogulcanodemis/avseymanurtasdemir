import React from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import CarouselComponent from '../Components/CarouselComponent';
import Services from '../Components/Services';
import AboutSection from '../Components/AboutSection';
import PracticeAreas from '../Components/PracticeAreas';
import ValuesAndTestimonials from '../Components/ValuesAndTestimonials';
import CallToAction from '../Components/CallToAction';
import FreeConsultation from '../Components/FreeConsultation';
import GoogleMapComponent from '../Components/GoogleMapComponent';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <CarouselComponent />
      <Services />
      <AboutSection />
      <CallToAction />
      <PracticeAreas />
      <ValuesAndTestimonials />
      <FreeConsultation />
      <GoogleMapComponent />
      <Footer />
      
    </div>
  )
}

export default Home