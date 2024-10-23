import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // Özelleştirilmiş CSS dosyası
import Hero1 from '../assets/banners/mainbanner.png'; // İlk banner görseli

const CarouselComponent = () => {
  return (
    <div>
      <Carousel controls={false}> {/* Yan okları gizlemek için controls={false} */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Hero1} // Görselin URL'sini buraya ekleyin
            alt="Hukukun Güvencesiyle Yanınızdayız - Av. Şeyma Nur Taşdemir" // SEO için alt etiketi eklendi
          />
          <Carousel.Caption className="carousel-caption">
            <Container className="carousel-content">
              <h2>Hukukun Güvencesiyle Yanınızdayız</h2> {/* H2 başlık kullanıldı */}
              <p>
                Av. Şeyma Nur Taşdemir ile hızlı ve güvenilir bir ilerleme
              </p>
              <Button
                variant="warning"
                href="tel:+18001112222"
                className="consultation-btn"
              >
                Hemen Bize Ulaşın
              </Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Schema.org yapılandırması */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Avukat Şeyma Nur Taşdemir",
          "description": "Avukat Şeyma Nur Taşdemir, İstanbul'da ticaret hukuku, iş hukuku ve arabuluculuk hizmetleri sunmaktadır.",
          "image": "https://yourwebsite.com/assets/banners/mainbanner.png", // Görselin tam URL'sini ekleyin
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4",
            "addressLocality": "İstanbul",
            "addressRegion": "TR",
            "postalCode": "34000",
            "addressCountry": "Türkiye"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-539-686-7694",
            "contactType": "Müşteri Hizmetleri",
            "availableLanguage": ["Türkçe", "İngilizce"]
          }
        })}
      </script>
    </div>
  );
};

export default CarouselComponent;
