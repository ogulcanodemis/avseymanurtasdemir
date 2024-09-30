import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import './PracticeAreas.css'; // CSS dosyası

const PracticeAreas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // 768px altındaki ekranlarda slider aktif olacak
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const areas = [
    {
      icon: "🚗", // Örnek ikon
      category: "Traffic Law",
      title: "Auto Accidents",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "💼",
      category: "Transactions",
      title: "Finance Law",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "🏠",
      category: "Business",
      title: "Real Estate",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "💰",
      category: "Business",
      title: "Tax Disputes",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "👪",
      category: "Legal",
      title: "Family Law",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "🩺",
      category: "Legal",
      title: "Health Care",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "⚖️",
      category: "Justice",
      title: "Labor Law",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: "🏢",
      category: "Business",
      title: "Insurance",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h6 className="text-uppercase text-warning">Professional Services</h6>
          <h2 className="practice-title">Practice Areas</h2>
        </Col>
        <Col className="text-right">
          <a href="#" className="btn btn-warning">View All</a>
        </Col>
      </Row>

      {/* Masaüstü İçin Grid Yapısı */}
      <div className="d-none d-md-block">
        <Row>
          {areas.map((area, index) => (
            <Col md={3} key={index} className="mb-4">
              <div className="practice-card">
                <div className="practice-icon">{area.icon}</div>
                <h6 className="practice-category text-warning">{area.category}</h6>
                <h5 className="practice-title">{area.title}</h5>
                <p>{area.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Mobil İçin Slider Yapısı */}
      <div className="d-md-none">
        <Slider {...settings}>
          {areas.map((area, index) => (
            <div key={index}>
              <div className="practice-card">
                <div className="practice-icon">{area.icon}</div>
                <h6 className="practice-category text-warning">{area.category}</h6>
                <h5 className="practice-title">{area.title}</h5>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default PracticeAreas;
