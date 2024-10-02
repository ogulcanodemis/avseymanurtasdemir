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
            <p><i className="fas fa-map-marker-alt"></i> Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4</p>
            <p><i className="fas fa-phone"></i> 0539 686 76 94</p>
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
            <p className="mb-0">&copy; 2024 Tüm Hakları Saklıdır. Tasarım: <a href="https://etki360.com" target="_blank" rel="noopener noreferrer">Etki360.com</a></p> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
