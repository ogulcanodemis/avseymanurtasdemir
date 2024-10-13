import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FreeConsultation.css'; // CSS dosyası

const FreeConsultation = () => {
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
                <a href="tel:0539-686-7694" className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                  0539-686-7694
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
                <a href="mailto:info@avseymanurtasdemir.com" className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                  info@avseymanurtasdemir.com
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
                <p className="mb-0">Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4, Kâğıthane, İstanbul</p>
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
                <p className="mb-0">Pazartesi-Cuma: 09:00 - 17:00</p>
                <p className="mb-0">Hafta Sonu: Kapalı</p>
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
            "streetAddress": "Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4",
            "addressLocality": "İstanbul",
            "addressRegion": "TR",
            "postalCode": "34000",
            "addressCountry": "Türkiye"
          },
          "telephone": "+90-539-686-7694",
          "email": "info@avseymanurtasdemir.com",
          "openingHours": "Mo-Fr 09:00-17:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Müşteri Hizmetleri",
            "telephone": "+90-539-686-7694",
            "availableLanguage": ["Türkçe", "İngilizce"]
          }
        })}
      </script>
    </Container>
  );
};

export default FreeConsultation;
