import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ValuesAndTestimonials.css'; // CSS dosyası

const ValuesAndTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonials = [
    {
      name: "Jerry Griffin",
      company: "Griff Co.",
      quote: "Working with Atis sit amet orci eget eros faucibus tincidunt. Duis leo. Sed ringilla mauris sit amet nibh. Donec sodales sagittis magna.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      name: "Lisa Brown",
      company: "Brown Consulting",
      quote: "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc vitae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      name: "Michael Davis",
      company: "Davis & Co.",
      quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <Container className="values-and-testimonials my-5">
      {/* İlk bölüm: Our Core Values */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h6 className="values-section-subtitle text-uppercase text-warning">Legal Help</h6>
          <h2 className="values-section-title">Our Core Values</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">🛠️</div>
                <h5 className="values-section-card-title">Always Listen</h5>
                <p>Sed ut nisi urna, get convallis purus pretium facilisis. Interdum et malesuada.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">🔒</div>
                <h5 className="values-section-card-title">Confidentiality</h5>
                <p>Sed ut nisi urna, get convallis purus pretium facilisis. Interdum et malesuada.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">👤</div>
                <h5 className="values-section-card-title">Right Person</h5>
                <p>Sed ut nisi urna, get convallis purus pretium facilisis. Interdum et malesuada.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">📝</div>
                <h5 className="values-section-card-title">Expertly Guide</h5>
                <p>Sed ut nisi urna, get convallis purus pretium facilisis. Interdum et malesuada.</p>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Sağda resim */}
        <Col md={6}>
          <img src="https://via.placeholder.com/600x400" alt="Core Values" className="img-fluid values-section-image rounded shadow" />
        </Col>
      </Row>

      {/* Testimonials bölümü: Slider */}
      <Row className="testimonials-section align-items-center">
        <Col md={12}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <Row>
                  <Col md={6}>
                    <img src={testimonial.image} alt={testimonial.name} className="img-fluid testimonials-section-image rounded shadow" />
                  </Col>
                  <Col md={6} className="d-flex flex-column justify-content-center">
                    <h6 className="testimonials-section-subtitle text-uppercase text-warning">Testimonials</h6>
                    <h2 className="testimonials-section-title">What Our Clients Say</h2>
                    <p className="testimonials-section-quote">
                      <span className="testimonials-section-quote-icon">“</span>
                      {testimonial.quote}
                    </p>
                    <p><strong>{testimonial.name}</strong><br/>{testimonial.company}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default ValuesAndTestimonials;
