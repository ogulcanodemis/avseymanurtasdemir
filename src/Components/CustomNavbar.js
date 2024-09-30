import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css'; // CSS dosyasını ekledik

const CustomNavbar = () => {
  return (
    <div>
      {/* Üst Bilgi */}
      <div className="bg-dark text-light py-2 top-bar">
        <Container>
          <Row className="align-items-center">
            <Col className="d-flex top-bar-number justify-content-start align-items-center">
              <FaMapMarkerAlt className="mr-2" /> &nbsp; 40 Park Ave, Brooklyn, New York &nbsp;&nbsp;&nbsp;&nbsp;
              <FaPhoneAlt className="ml-4 mr-2" /> &nbsp; 1-800-111-2222
            </Col>
            <Col className="d-flex justify-content-end">
              <FaFacebookF className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaLinkedinIn className="mx-2" />
              <FaEnvelope className="mx-2" />
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
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Atis logo"
            />{" "}
            Atis
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
              Call: 1-800-111-2222
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
