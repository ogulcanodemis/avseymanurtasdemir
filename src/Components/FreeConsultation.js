import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FreeConsultation.css'; // CSS dosyası
import { useContact } from '../context/ContactContext';

const FreeConsultation = () => {
  const { contactInfo } = useContact();

  return (
    <Container className="free-consultation-section my-5">
      <h2 className="consultation-subtitle text-uppercase text-warning">İLETİŞİM</h2>
      <Row className="mb-4 mt-5">
        <Col md={6}>
          <Card className="consultation-card mb-3">
            <Card.Body className="d-flex align-items-center">
              <FaPhoneAlt className="consultation-icon text-warning" />
              <div className="ml-3">
                <h3 className="mb-1">Hemen Arayın</h3>
                <a href={`tel:${contactInfo.phone?.replace(/\s+/g, '')}`} className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                  {contactInfo.phone}
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="consultation-card mb-3">
            <Card.Body className="d-flex align-items-center">
              <FaEnvelope className="consultation-icon text-warning" />
              <div className="ml-3">
                <h3 className="mb-1">Mail Gönderin</h3>
                <a href={`mailto:${contactInfo.email}`} className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                  {contactInfo.email}
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="consultation-card mb-3">
            <Card.Body className="d-flex align-items-center">
              <FaMapMarkerAlt className="consultation-icon text-warning" />
              <div className="ml-3">
                <h3 className="mb-1">Ziyaretimize Gelin</h3>
                <p className="mb-0">{contactInfo.address}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="consultation-card mb-3">
            <Card.Body className="d-flex align-items-center">
              <FaClock className="consultation-icon text-warning" />
              <div className="ml-3">
                <h3 className="mb-1">Çalışma Saatlerimiz</h3>
                <p className="mb-0">{contactInfo.working_hours}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Schema.org yapılandırması */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Avukat Şeyma Nur Taşdemir",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": contactInfo.address,
            "addressLocality": "İstanbul",
            "addressRegion": "TR",
            "postalCode": "34000",
            "addressCountry": "Türkiye"
          },
          "telephone": contactInfo.phone,
          "email": contactInfo.email,
          "openingHours": contactInfo.working_hours,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Müşteri Hizmetleri",
            "telephone": contactInfo.phone,
            "availableLanguage": ["Türkçe", "İngilizce"]
          }
        })}
      </script>
    </Container>
  );
};

export default FreeConsultation;
