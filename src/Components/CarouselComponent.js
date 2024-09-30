import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // Özelleştirilmiş CSS dosyası

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500" // Görselin URL'sini buraya ekleyin
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <Container className="carousel-content">
            <h1>Professional Legal Expertise</h1>
            <p>
              Pri ex nullam mollis nonumes. Eum libris iuvaret forensibus ex, sit ei assum iusto.
            </p>
            <Button
              variant="warning"
              href="tel:+18001112222"
              className="consultation-btn"
            >
              Schedule a Free Consultation
            </Button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x500" // İkinci görselin URL'sini buraya ekleyin
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <Container className="carousel-content">
            <h1>Expert Legal Solutions</h1>
            <p>
              Your trusted partner in all legal matters. Providing expert advice and solutions tailored to your needs.
            </p>
            <Button
              variant="warning"
              href="tel:+18001112222"
              className="consultation-btn"
            >
              Schedule a Free Consultation
            </Button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
