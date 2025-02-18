import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // Özelleştirilmiş CSS dosyası
import Hero1 from '../assets/banners/mainbanner.png'; // İlk banner görseli
import { useContact } from '../context/ContactContext';

const CarouselComponent = () => {
  const contactInfo = useContact();

  return (
    <div className="hero-section">
      <Carousel controls={false} indicators={false} pause={false}>
        <Carousel.Item interval={5000}>
          <div className="carousel-overlay"></div>
          <img
            className="d-block w-100"
            src={Hero1}
            alt="Hukukun Güvencesiyle Yanınızdayız - Av. Şeyma Nur Taşdemir"
          />
          <Carousel.Caption>
            <Container>
              <div className="carousel-content">
                <span className="welcome-text animate-welcome">Hoş Geldiniz</span>
                <h1 className="main-title animate-title">
                  Hukukun Güvencesiyle
                  <span className="highlight">Yanınızdayız</span>
                </h1>
                <p className="subtitle animate-subtitle">
                  Av. Şeyma Nur Taşdemir ile profesyonel ve güvenilir hukuki danışmanlık
                </p>
                <div className="button-group animate-buttons">
                  <Button
                    variant="primary"
                    href={`tel:${contactInfo.phone?.replace(/\s+/g, '')}`}
                    className="contact-btn"
                  >
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    Hemen Arayın
                  </Button>
                  <Button
                    variant="outline-light"
                    href="/about"
                    className="about-btn"
                  >
                    Daha Fazla Bilgi
                    <FontAwesomeIcon icon={faArrowRight} className="icon" />
                  </Button>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Dekoratif Elementler */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Schema.org yapılandırması */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Avukat Şeyma Nur Taşdemir",
          "description": "Avukat Şeyma Nur Taşdemir, İstanbul'da ticaret hukuku, iş hukuku ve arabuluculuk hizmetleri sunmaktadır.",
          "image": "https://yourwebsite.com/assets/banners/mainbanner.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": contactInfo.address,
            "addressLocality": "Kağıthane",
            "addressRegion": "İstanbul",
            "postalCode": "34406",
            "addressCountry": "Türkiye"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": contactInfo.phone,
            "contactType": "Müşteri Hizmetleri",
            "availableLanguage": ["Türkçe", "İngilizce"]
          }
        })}
      </script>
    </div>
  );
};

export default CarouselComponent;
