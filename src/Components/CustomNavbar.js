import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';
import { Link as ScrollLink } from 'react-scroll'; // react-scroll'den Link kullanımı
import logo from '../assets/logos/logo.png';

const CustomNavbar = () => {
  // Navbar scroll state için useState kullanıyoruz
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll olayını dinlemek için useEffect kullanıyoruz
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        "streetAddress": "Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4",
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

  {/* Üst Bilgi */}
  <div className="bg-dark text-light py-2 top-bar">
    <Container>
      <Row className="align-items-center">
        <Col className="d-flex top-bar-number justify-content-start align-items-center">
          <FaMapMarkerAlt className="mr-2" /> &nbsp; Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4 &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="tel:05396867694" style={{ textDecoration: 'none' , color: 'white'}}> <FaPhoneAlt className="ml-4 mr-2" /> &nbsp; 05396867694 </a>
        </Col>
        <Col className="d-flex justify-content-end">
          <a href="https://x.com/avseymatasdemir" target="_blank" rel="noopener noreferrer"><FaTwitter className="mx-2" /> </a>
          <a href="https://www.instagram.com/av.seymanurtasdemir?igsh=dTl5dWd1bXE5dXE5" target="_blank" rel="noopener noreferrer"><FaInstagram className="mx-2" /> </a>
        </Col>
      </Row>
    </Container>
  </div>

  {/* Ana Menü */}
  <Navbar
    className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
    bg="dark"
    variant="dark"
    expand="lg"
  >
    <Container>
      <Navbar.Brand href="/">
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
          <Nav.Link as={ScrollLink} to="home" smooth={true} duration={500}>Anasayfa</Nav.Link>
          <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500}>Hakkımızda</Nav.Link>
          <Nav.Link as={ScrollLink} to="services" smooth={true} duration={500}>Hizmetlerimiz</Nav.Link>
          <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500}>İletişim</Nav.Link>
        </Nav>
        <Button variant="warning" className="ml-3 call-btn">
          <a href="tel:05396867694" style={{ textDecoration: 'none' , color: 'white'}}>  Ara: 0539 686 76 94 </a>
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  );
};

export default CustomNavbar;
