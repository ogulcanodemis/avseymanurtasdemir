import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KVKK from './Pages/kvkk';
import SorumlulukReddi from './Pages/SorumlulukReddi';
import CerezPolitikasi from './Pages/CerezPolitikasi';
import SingleBlog from './Pages/SingleBlog';
import About from './Pages/About';
import ServicesPage from './Pages/Services';
import Contact from './Pages/Contact';
import { ContactProvider, useContact } from './context/ContactContext';

const WhatsAppButton = () => {
  const { contactInfo } = useContact();
  
  if (!contactInfo.whatsapp) return null;

  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

function App() {
  return (
    <ContactProvider>
      <Router>
        <div className="App">
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/sorumluluk-reddi" element={<SorumlulukReddi />} />
            <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
          </Routes>
        </div>
      </Router>
    </ContactProvider>
  );
}

export default App;
