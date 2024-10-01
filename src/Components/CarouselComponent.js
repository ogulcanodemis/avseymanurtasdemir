import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // Özelleştirilmiş CSS dosyası
import Hero1 from '../assets/banners/mainbanner.png'; // İlk banner görseli

const CarouselComponent = () => {
  return (
    <Carousel controls={false}> {/* Yan okları gizlemek için controls={false} */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Hero1} // Görselin URL'sini buraya ekleyin
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <Container className="carousel-content">
            <h1>Hukukun Güvencesiyle Yanınızdayız</h1>
            <p>
              Av. Şeyma Nur Taşdemir ile hızlı ve güvenilir bir ilerleme
            </p>
            <Button
              variant="warning"
              href="tel:+18001112222"
              className="consultation-btn"
            >
              Bize Hızlıca Ulaşın
            </Button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
