import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faUsers, faFileContract, faGavel, faHandshake, faUserShield, faExclamationTriangle, faLandmark, faMedkit, faUserTie, faShieldAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import foto1 from '../assets/banners/hukuksalçözümler.jpg';
import foto2 from '../assets/banners/arabuluculuk.jpg';
import foto3 from '../assets/banners/hukukidanışmanlık.jpg';
import './Services.css';

const ServicesPage = () => {
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

  const practiceAreas = [
    {
      icon: faBalanceScale,
      title: "Ticaret ve Şirketler Hukuku",
      description: "Şirketlerin kuruluşu, birleşmeleri, devir, hisse satışları ve ticari sözleşmeler gibi ticaret hukuku alanlarında hizmet veriyoruz."
    },
    {
      icon: faUsers,
      title: "Dernek ve Vakıflar",
      description: "Dernek ve vakıfların kuruluşu ve hukuki süreçleri ile ilgili danışmanlık hizmetleri sunuyoruz."
    },
    {
      icon: faGavel,
      title: "İcra ve İflas Hukuku",
      description: "Alacak tahsili ve iflas süreçlerini yöneterek stratejik çözümler sunuyoruz."
    },
    {
      icon: faUserShield,
      title: "KVKK/GDPR",
      description: "Şirketlerin KVKK ve GDPR uyumluluğunu sağlamak adına danışmanlık hizmetleri sunuyoruz."
    },
    {
      icon: faExclamationTriangle,
      title: "Ceza Hukuku",
      description: "Mali suçlar, dolandırıcılık ve zimmet davalarında hukuki savunma ve danışmanlık hizmetleri sunuyoruz."
    },
    {
      icon: faLandmark,
      title: "İş Hukuku",
      description: "İşverenler ve çalışanlar için iş sözleşmeleri, işçi hakları ve tazminat süreçlerinde hukuki danışmanlık sağlıyoruz."
    },
    {
      icon: faMedkit,
      title: "Bilişim Hukuku",
      description: "Dijital dünyada müvekkillerimizin dijital haklarını ve veri güvenliğini korumak için bilişim hukuku hizmetleri sunuyoruz."
    },
    {
      icon: faUserTie,
      title: "Miras Hukuku",
      description: "Miras süreçlerinin yönetimi, vasiyetname hazırlanması ve miras paylaşımı konusunda danışmanlık sağlıyoruz."
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
          <Row>
            {practiceAreas.map((area, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="practice-card">
                  <FontAwesomeIcon icon={area.icon} className="practice-icon" />
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage; 