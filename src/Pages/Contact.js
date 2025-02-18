import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { useContact } from '../context/ContactContext';
import './Contact.css';

const Contact = () => {
  const { contactInfo } = useContact();

  return (
    <div className="page-wrapper">
      <CustomNavbar />
      
      {/* Hero Section */}
      <section className="contact-hero mt-5">
        <div className="hero-content">
          <h1 className="hero-title">İLETİŞİM</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Hukuki danışmanlık için bizimle iletişime geçin</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <Container>
          <Row>
            {/* Telefon */}
            <Col lg={3} md={6} className="mb-4">
              <div className="contact-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                </div>
                <h3>Telefon</h3>
                <p>
                  <a href={`tel:${contactInfo.phone?.replace(/\s+/g, '')}`}>
                    {contactInfo.phone}
                  </a>
                </p>
                <div className="card-decoration"></div>
              </div>
            </Col>

            {/* E-posta */}
            <Col lg={3} md={6} className="mb-4">
              <div className="contact-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                </div>
                <h3>E-posta</h3>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </p>
                <div className="card-decoration"></div>
              </div>
            </Col>

            {/* Adres */}
            <Col lg={3} md={6} className="mb-4">
              <div className="contact-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                </div>
                <h3>Adres</h3>
                <p>{contactInfo.address}</p>
                <div className="card-decoration"></div>
              </div>
            </Col>

            {/* Çalışma Saatleri */}
            <Col lg={3} md={6} className="mb-4">
              <div className="contact-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faClock} className="contact-icon" />
                </div>
                <h3>Çalışma Saatleri</h3>
                <p>{contactInfo.working_hours}</p>
                <div className="card-decoration"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <Container fluid className="px-0">
          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.827087892307!2d28.97341937679145!3d41.06670097134307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71b1a74d9c5%3A0x46e537b2b0f0c0d9!2zS8SxbMSxw6cgQWxpIFBhxZ9hLCBIw7xycml5ZXQgTWFoLiwgWXVydCBTay4gTm86MTIsIDM0NDE2IEvDpcSfxLF0aGFuZS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1690214537279!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      {/* Schema.org için Yapısal Veri */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Avukat Şeyma Nur Taşdemir",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": contactInfo.address,
            "addressLocality": "İstanbul",
            "addressRegion": "TR",
            "postalCode": "34000",
            "addressCountry": "Türkiye"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": contactInfo.phone,
            "contactType": "Müşteri Hizmetleri",
            "availableLanguage": ["Türkçe", "İngilizce"],
            "contactOption": "TollFree"
          }
        })}
      </script>

      <Footer />
    </div>
  );
};

export default Contact; 