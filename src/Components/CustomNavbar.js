import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';
import { Link as ScrollLink } from 'react-scroll'; // react-scroll'den Link kullanımı
import logo from '../assets/logos/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

const CustomNavbar = () => {
  // Navbar scroll state için useState kullanıyoruz
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { contactInfo } = useContact();

  // Scroll olayını dinlemek için useEffect kullanıyoruz
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div>
      {/* Schema.org için Yapısal Veri */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Avukat Şeyma Nur Taşdemir",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hürriyet mah yurt sokak no:12 k:1 d:3 minas iş merkezi Kağıthane/İstanbul",
            "addressLocality": "İstanbul",
            "addressRegion": "TR",
            "postalCode": "34000",
            "addressCountry": "Türkiye"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-539-686-7694",
            "contactType": "Müşteri Hizmetleri",
            "availableLanguage": ["Türkçe", "İngilizce"],
            "contactOption": "TollFree"
          }
        })}
      </script>

      {/* Ana Menü */}
      <Navbar 
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        bg="dark"
        variant="dark"
        expand="lg" 
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}  
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="Placeholder logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={isActive('/')}
              >
                Anasayfa
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className={isActive('/about')}
              >
                Hakkımızda
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/services" 
                className={isActive('/services')}
              >
                Hizmetlerimiz
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={isActive('/contact')}
              >
                İletişim
              </Nav.Link>
            </Nav>
            <Button variant="warning" className="ml-3 call-btn">
              <a 
                href={`tel:${contactInfo.phone?.replace(/\s+/g, '')}`} 
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <FaPhoneAlt className="me-2" />
                {contactInfo.phone}
              </a>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
