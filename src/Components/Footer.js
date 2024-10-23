import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'; // CSS dosyası

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Hakkımızda */}
          <Col md={4}>
            <h5 className="footer-title">Hakkımızda</h5>
            <p>
              Müvekkillerimize sunduğumuz profesyonellik ve adanmışlık ile hukuki başarılarına katkıda bulunmaktan gurur duyuyoruz.
            </p>
            <p><i className="fas fa-map-marker-alt"></i> Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4, İstanbul</p>
            <p><i className="fas fa-phone"></i> <a href="tel:05396867694" className="text-light" style={{ textDecoration: 'none' }}>0539 686 76 94</a></p>
          </Col>

          {/* Hızlı Linkler */}
          <Col md={4}>
            <h5 className="footer-title">Hızlı Linkler</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Anasayfa</a></li>
              <li><a href="#services" className="footer-link">Çalışma Alanları</a></li>
              <li><a href="#about" className="footer-link">Hakkımızda</a></li>
              <li><a href="#contact" className="footer-link">İletişim</a></li>
            </ul>
          </Col>

          {/* Hukuki Linkler (Çerez Politikası, KVKK, Sorumluluk Reddi) */}
          <Col md={4}>
            <h5 className="footer-title">Hukuki</h5>
            <ul className="list-unstyled">
              <li><a href="/cerez-politikasi" className="footer-link">Çerez Politikası</a></li>
              <li><a href="/kvkk" className="footer-link">KVKK</a></li>
              <li><a href="/sorumluluk-reddi" className="footer-link">Sorumluluk Reddi</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; 2024 Tüm Hakları Saklıdır. Tasarım: <a href="https://etki360.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' , color: 'white' }}>Etki360.com</a></p> 
          </Col>
        </Row>
      </Container>

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
          "url": "https://avseymanurtasdemir.com",
          "sameAs": [
            "https://www.instagram.com/av.seymanurtasdemir",
            "https://x.com/avseymatasdemir"
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;
