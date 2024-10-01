import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBriefcase, faHome, faMoneyBill, faUsers, faStethoscope, faGavel, faBuilding } from '@fortawesome/free-solid-svg-icons';
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
      icon: faCar, // FontAwesome icon
      category: "Traffic Law",
      title: "Auto Accidents",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faBriefcase,
      category: "Transactions",
      title: "Finance Law",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faHome,
      category: "Business",
      title: "Real Estate",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faMoneyBill,
      category: "Business",
      title: "Tax Disputes",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faUsers,
      category: "Legal",
      title: "Family Law",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faStethoscope,
      category: "Legal",
      title: "Health Care",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faGavel,
      category: "Justice",
      title: "Labor Law",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
    {
      icon: faBuilding,
      category: "Business",
      title: "Insurance",
      description:
        "Mei eu unum utinam, choro dissentiet accommodare te est, no probo facete commodo vim.",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="mb-4 text-center"> {/* Başlığı ortaladık */}
        <Col>
          <h6 className="text-uppercase text-warning">Professional Services</h6>
          <h2 className="practice-title">Practice Areas</h2>
        </Col>
      </Row>

      {/* Masaüstü İçin Grid Yapısı */}
      <div className="d-none d-md-block">
        <Row>
          {areas.map((area, index) => (
            <Col md={3} key={index} className="mb-4">
              <div className="practice-card">
                <div className="practice-icon">
                  <FontAwesomeIcon icon={area.icon} size="2x" />
                </div>
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
                <div className="practice-icon">
                  <FontAwesomeIcon icon={area.icon} size="2x" />
                </div>
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
