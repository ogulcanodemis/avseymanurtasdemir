import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faUsers, faFileContract, faGavel, faHandshake, faUserShield, faExclamationTriangle, faLandmark, faMedkit, faUserTie, faShieldAlt, faFolder, faSpinner } from '@fortawesome/free-solid-svg-icons';
import foto1 from '../assets/banners/hukuksalçözümler.jpg';
import foto2 from '../assets/banners/arabuluculuk.jpg';
import foto3 from '../assets/banners/hukukidanışmanlık.jpg';
import axios from 'axios';
import './Services.css';

const ServicesPage = () => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Çalışma alanlarını backend'den çek
    const fetchPracticeAreas = async () => {
      try {
        const response = await axios.get('https://avseymanurtasdemir.com/backend/api/get_practice_areas_final.php');
        if (response.data.status === 'success') {
          setPracticeAreas(response.data.data);
        } else {
          console.error('Çalışma alanları çekilirken hata oluştu:', response.data.message);
        }
      } catch (error) {
        console.error('API isteği sırasında hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPracticeAreas();
  }, []);

  // Icon adını FontAwesome ikonuna çevirme fonksiyonu
  const getIconByName = (iconName) => {
    const iconMap = {
      'faBalanceScale': faBalanceScale,
      'faUsers': faUsers,
      'faFileContract': faFileContract,
      'faGavel': faGavel,
      'faHandshake': faHandshake,
      'faUserShield': faUserShield,
      'faExclamationTriangle': faExclamationTriangle,
      'faLandmark': faLandmark,
      'faMedkit': faMedkit,
      'faUserTie': faUserTie,
      'faShieldAlt': faShieldAlt,
      'faFolder': faFolder
    };
    
    return iconMap[iconName] || faBalanceScale; // Varsayılan ikon
  };

  const mainServices = [
    {
      image: foto1,
      title: "Hukuksal Çözümler",
      description: "Müvekkillerimize, ihtiyaçlarına en uygun hukuki çözümler sunarak, haklarını en etkin şekilde korumayı hedefliyoruz.",
      icon: faBalanceScale
    },
    {
      image: foto2,
      title: "Arabuluculuk Hizmeti",
      description: "Uzlaşmazlıkların hızlı, ekonomik ve dostane bir şekilde çözüme kavuşması için arabuluculuk hizmeti sunmaktayız.",
      icon: faHandshake
    },
    {
      image: foto3,
      title: "Hukuki Danışmanlık",
      description: "Sektörel bilgi birikimimiz ve deneyimimizle şirketler ve bireyler için stratejik hukuki danışmanlık hizmetleri sunuyoruz.",
      icon: faFileContract
    }
  ];

  return (
    <div className="page-wrapper">
      <CustomNavbar />
      
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Hizmetlerimiz</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">Profesyonel Hukuki Çözümler</p>
          </div>
        </Container>
      </div>

      {/* Ana Hizmetler */}
      <section className="main-services">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">Ana Hizmetlerimiz</h2>
            <div className="section-divider center"></div>
          </div>
          <Row>
            {mainServices.map((service, index) => (
              <Col md={4} key={index}>
                <div className="service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-overlay">
                      <FontAwesomeIcon icon={service.icon} className="service-icon" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Çalışma Alanları */}
      <section className="practice-areas">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">Çalışma Alanlarımız</h2>
            <div className="section-divider center"></div>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-primary mb-3" />
              <p>Çalışma alanları yükleniyor...</p>
            </div>
          ) : (
            <Row>
              {practiceAreas.map((area) => (
                <Col md={6} lg={3} key={area.id}>
                  <div className="practice-card">
                    <FontAwesomeIcon icon={getIconByName(area.icon)} className="practice-icon" />
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage; 