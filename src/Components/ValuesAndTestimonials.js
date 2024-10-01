import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faPencilAlt, faTools, faShieldAlt, faBalanceScale, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
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
      {/* İlk bölüm: Prensiplerimiz */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h6 className="values-section-subtitle text-uppercase text-warning">Avukatlık Prensiplerimiz</h6>
          <h2 className="values-section-title">Prensiplerimiz</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">
                  <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-warning" />
                </div>
                <h5 className="values-section-card-title">Güvenilirlik</h5>
                <p>Her sözümüzün arkasında durur, müvekkillerimizin haklarını titizlikle koruruz.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">
                  <FontAwesomeIcon icon={faLock} size="2x" className="text-warning" />
                </div>
                <h5 className="values-section-card-title">Gizlilik</h5>
                <p>Müvekkillerimizin bilgilerini en yüksek gizlilikle koruruz.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">
                  <FontAwesomeIcon icon={faTools} size="2x" className="text-warning" />
                </div>
                <h5 className="values-section-card-title">Sonuç Odaklılık</h5>
                <p>En kısa sürede etkili sonuçlar üretmek için çalışırız.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">
                  <FontAwesomeIcon icon={faBalanceScale} size="2x" className="text-warning" />
                </div>
                <h5 className="values-section-card-title">Şeffaflık</h5>
                <p>Müvekkillerimize her adımda açık ve net bilgilendirme sağlarız.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">
                  <FontAwesomeIcon icon={faUser} size="2x" className="text-warning" />
                </div>
                <h5 className="values-section-card-title">Profesyonellik</h5>
                <p>Her zaman en yüksek kalitede hizmet sunmayı hedefleriz.</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="values-section-card">
                <div className="values-section-icon">
                  <FontAwesomeIcon icon={faHandsHelping} size="2x" className="text-warning" />
                </div>
                <h5 className="values-section-card-title">Etik Değerler</h5>
                <p>Her davada etik değerlere bağlı kalarak adil sonuçlar elde ederiz.</p>
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
                  <Col md={6} className="d-flex justify-content-center align-items-center">
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
