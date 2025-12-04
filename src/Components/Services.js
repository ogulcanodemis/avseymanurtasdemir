import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // CSS dosyası
import foto1 from '../assets/banners/hukuksalçözümler.jpg';
import foto2 from '../assets/banners/arabuluculuk.jpg';
import foto3 from '../assets/banners/hukukidanışmanlık.jpg';

const Services = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* İlk Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img 
              variant="top" 
              src={foto1} 
              alt="Hukuksal Çözümler - Müvekkillerimize etkili hukuki çözümler" 
            />
            <Card.Body>
              <Card.Title as="h3">Hukuksal Çözümler</Card.Title>
              <Card.Text>
                Müvekkillerimize, ihtiyaçlarına en uygun hukuki çözümler sunarak, haklarını en etkin şekilde korumayı hedefliyoruz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* İkinci Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img 
              variant="top" 
              src={foto2} 
              alt="Arabuluculuk Hizmeti - Hızlı ve dostane uzlaşma" 
            />
            <Card.Body>
              <Card.Title as="h3">Arabuluculuk Hizmeti</Card.Title>
              <Card.Text>
                Uzlaşmazlıkların hızlı, ekonomik ve dostane bir şekilde çözüme kavuşması için arabuluculuk hizmeti sunmaktayız.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Üçüncü Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img 
              variant="top" 
              src={foto3} 
              alt="Hukuki Danışmanlık - Şirketler ve bireyler için stratejik danışmanlık" 
            />
            <Card.Body>
              <Card.Title as="h3">Hukuki Danışmanlık</Card.Title>
              <Card.Text>
                Sektörel bilgi birikimimiz ve deneyimimizle şirketler ve bireyler için stratejik hukuki danışmanlık hizmetleri sunuyoruz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Schema.org yapılandırması */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Hukuki Danışmanlık, Arabuluculuk Hizmeti, Hukuksal Çözümler",
          "provider": {
            "@type": "Organization",
            "name": "Avukat Şeyma Nur Taşdemir",
            "url": "https://seymanurtasdemir.av.tr",
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
              "contactType": "Hukuki Danışmanlık"
            }
          }
        })}
      </script>
    </Container>
  );
};

export default Services;
