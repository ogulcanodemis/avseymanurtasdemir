import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // CSS dosyası
import { useContact } from '../context/ContactContext';

const Footer = () => {
  const { contactInfo } = useContact();

  return (
    <footer className="footer-section bg-dark text-light py-5">
      <Container>
        <Row>
          {/* İletişim Bilgileri */}
          <Col md={4}>
            <h5>İletişim Bilgileri</h5>
            <ul className="list-unstyled">
              {contactInfo.address && (
                <li className="mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  {contactInfo.address}
                </li>
              )}
              {contactInfo.phone && (
                <li className="mb-2">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <a href={`tel:${contactInfo.phone}`} className="text-light text-decoration-none">
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.email && (
                <li className="mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <a href={`mailto:${contactInfo.email}`} className="text-light text-decoration-none">
                    {contactInfo.email}
                  </a>
                </li>
              )}
            </ul>
          </Col>

          {/* Hızlı Linkler */}
          <Col md={4}>
            <h5>Hızlı Linkler</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Ana Sayfa</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">Hakkımızda</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-light text-decoration-none">Hizmetlerimiz</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none">İletişim</Link>
              </li>
            </ul>
          </Col>

          {/* Yasal Linkler (Çerez Politikası, KVKK, Sorumluluk Reddi) */}
          <Col md={4}>
            <h5>Yasal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/kvkk" className="text-light text-decoration-none">KVKK</Link>
              </li>
              <li className="mb-2">
                <Link to="/sorumluluk-reddi" className="text-light text-decoration-none">Sorumluluk Reddi</Link>
              </li>
              <li className="mb-2">
                <Link to="/cerez-politikasi" className="text-light text-decoration-none">Çerez Politikası</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; 2024 Av. Şeyma Nur Taşdemir. Tüm hakları saklıdır.</p> 
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
            "streetAddress": contactInfo.address,
            "addressLocality": "Kağıthane",
            "addressRegion": "İstanbul",
            "postalCode": "34406",
            "addressCountry": "Türkiye"
          },
          "telephone": contactInfo.phone,
          "url": "https://seymanurtasdemir.av.tr",
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
