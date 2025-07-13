import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faScaleBalanced, 
  faUsers, 
  faFileContract, 
  faGavel, 
  faHandshake, 
  faShieldHalved,
  faBuilding,
  faHandcuffs,
  faLandmark,
  faBriefcase,
  faCode,
  faScroll
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // İkon mapping objesi - Güncellenmiş ikonlar
  const iconMapping = {
    'fas fa-balance-scale': faScaleBalanced,
    'fas fa-users': faUsers,
    'fas fa-file-contract': faFileContract,
    'fas fa-gavel': faGavel,
    'fas fa-handshake': faHandshake,
    'fas fa-shield-alt': faShieldHalved,
    'fas fa-building': faBuilding,
    'fas fa-handcuffs': faHandcuffs,
    'fas fa-landmark': faLandmark,
    'fas fa-briefcase': faBriefcase,
    'fas fa-code': faCode,
    'fas fa-scroll': faScroll
  };

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get('https://avseymanurtasdemir.com/backend/api/get_practice_areas_final.php');
        if (response.data.status === 'success') {
          setAreas(response.data.data);
        }
      } catch (error) {
        console.error('Çalışma alanları yüklenirken hata oluştu:', error);
        setError('Çalışma alanları yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  // Varsayılan ikon belirleme fonksiyonu
  const getIcon = (iconName) => {
    return iconMapping[iconName] || faScaleBalanced; // Eğer ikon bulunamazsa varsayılan olarak terazi ikonunu göster
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <Container className="my-5">
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <div className="text-center text-danger">
          <p>{error}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="text-uppercase text-warning">Çalışma Alanlarımız</h2>
        </Col>
      </Row>
      {/* Masaüstü İçin Grid Yapısı */}
      <div className="d-none d-md-block">
        <Row>
          {areas.map((area) => (
            <Col md={3} key={area.id} className="mb-4">
              <div className="practice-card">
                <div className="practice-icon">
                  <FontAwesomeIcon icon={getIcon(area.icon)} size="2x" className="text-warning" />
                </div>
                <h6 className="practice-category text-warning">{area.title}</h6>
                <p>{area.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Mobil İçin Slider Yapısı */}
      <div className="d-md-none">
        <Slider {...settings}>
          {areas.map((area) => (
            <div key={area.id}>
              <div className="practice-card">
                <div className="practice-icon">
                  <FontAwesomeIcon icon={getIcon(area.icon)} size="2x" className="text-warning" />
                </div>
                <h6 className="practice-category text-warning">{area.title}</h6>
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
