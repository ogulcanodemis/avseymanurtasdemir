import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KVKK from './Pages/kvkk';
import SorumlulukReddi from './Pages/SorumlulukReddi';
import CerezPolitikasi from './Pages/CerezPolitikasi';

function App() {
  return (
    <Router>
      <div className="App">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/905396867694"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kvkk" element={<KVKK />} />
          <Route path="/sorumluluk-reddi" element={<SorumlulukReddi />} />
          <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
