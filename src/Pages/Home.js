import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS dosyasını ekleyin
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

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animasyon süresi
      once: false, // Scroll yaptıkça sadece bir kez animasyon tetiklensin
    });
  }, []);

  return (
    <div>
      <CustomNavbar />

      <div id="home" data-aos="fade-down">
        <CarouselComponent />
      </div>

      <div id="about" data-aos="fade-right">
        <AboutSection />
      </div>

      <div id="services" data-aos="fade-left">
        <Services />
        <CallToAction />
        <PracticeAreas />
      </div>

      <div id="contact" data-aos="fade-in">
        <FreeConsultation />
        <GoogleMapComponent />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
