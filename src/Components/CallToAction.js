import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './CallToAction.css'; // CSS dosyası

const CallToAction = () => {
  return (
    <div className="cta-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h3 className="cta-subtitle text-warning">Sonraki Adım</h3> {/* H3 kullanarak başlık hiyerarşisini düzenledik */}
            <h2 className="cta-title">Bizimle İletişime Geçin</h2>
            <p>İstanbul merkezli avukatlık hizmetleri, ticaret hukuku, iş hukuku ve arabuluculuk için hemen bizi arayın!</p> {/* Yerel SEO için içerik ekledik */}
          </Col>
          <Col md={4} className="text-md-right">
            <Button variant="warning" className="cta-button">
              <a href="tel:05396867694" style={{ textDecoration: 'none', color: 'white' }}>
                 Danışmanlık İçin Bizi Arayın
              </a>
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Schema.org yapılandırması */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "telephone": "+90-539-686-7694",
          "contactType": "Müşteri Hizmetleri",
          "availableLanguage": ["Türkçe", "İngilizce"],
          "areaServed": "TR",
          "url": "https://avseymanurtasdemir.com"
        })}
      </script>
    </div>
  );
};

export default CallToAction;
