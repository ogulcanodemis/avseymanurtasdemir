import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';
import logo from '../assets/logos/logo.png';
const CustomNavbar = () => {
  return (
    <div>
      {/* Üst Bilgi */}
      <div className="bg-dark text-light py-2 top-bar">
        <Container>
          <Row className="align-items-center">
            <Col className="d-flex top-bar-number justify-content-start align-items-center">
              <FaMapMarkerAlt className="mr-2" /> &nbsp; Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4 &nbsp;&nbsp;&nbsp;&nbsp;
              <FaPhoneAlt className="ml-4 mr-2" /> &nbsp; 05396867694
            </Col>
            <Col className="d-flex justify-content-end">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className="mx-2" /> </a> {/* FaXTwitter yerine FaTwitter */}
              <a href="https://www.instagram.com/av.seymanurtasdemir?igsh=dTl5dWd1bXE5dXE5" target="_blank" rel="noopener noreferrer"><FaInstagram className="mx-2" /> </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Ana Menü */}
      <div className="menu-spacing"></div> {/* Menü ile üst bilgi arasına boşluk ekleyen div */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#home">Anasayfa</Nav.Link>
              <Nav.Link href="#about">Hakkımızda</Nav.Link>
              <Nav.Link href="#services">Hizmetlerimiz</Nav.Link>
              <Nav.Link href="#contact">İletişim</Nav.Link>
            </Nav>
            <Button variant="warning" className="ml-3 call-btn">
              Ara: 0539 686 76 94
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
