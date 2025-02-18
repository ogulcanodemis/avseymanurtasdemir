import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faBalanceScale,
  faHandshake,
  faGavel,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import terazi from '../assets/banners/terazi.png';
import './About.css';

const About = () => {
  const values = [
    {
      icon: faBalanceScale,
      title: "Profesyonellik",
      description: "Her davada profesyonel ve etik değerlere bağlı kalarak hizmet veriyoruz."
    },
    {
      icon: faHandshake,
      title: "Güvenilirlik",
      description: "Müvekkillerimizin haklarını korumak için güvenilir hukuki danışmanlık sunuyoruz."
    },
    {
      icon: faGavel,
      title: "Uzmanlık",
      description: "Geniş hukuki tecrübemizle her alanda uzman çözümler üretiyoruz."
    },
    {
      icon: faUserTie,
      title: "Müvekkil Odaklılık",
      description: "Müvekkillerimizin ihtiyaçlarını önceliklendirerek kişiselleştirilmiş hizmet sunuyoruz."
    }
  ];

  return (
    <div className="page-wrapper">
      <CustomNavbar />
      
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content text-center">
            <h1 className="hero-title">Hakkımızda</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">Profesyonel ve Güvenilir Hukuki Danışmanlık</p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <section className="about-main-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="about-content">
                <div className="section-header">
                  <h2 className="section-title">Biz Kimiz?</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="content-box">
                  <p>
                    Ofisimiz, müvekkillerine en yüksek standartlarda hukuki danışmanlık ve dava takibi hizmeti sağlamaktadır.
                    Müvekkillerimizin karşılaştığı hukuki sorunlara yönelik etkili stratejiler geliştirip, dava süreçlerini titizlikle yönetiyoruz.
                  </p>
                  <p>
                    İstanbul merkezli olarak, yerel ve uluslararası birçok projeye imza atmış bir ekip olarak, birçok farklı sektörde tanınmış yerli ve yabancı şirketlere hukuki danışmanlık sunuyoruz.
                  </p>
                  <p>
                    Dernekler, vakıflar ve sivil toplum kuruluşlarına da hukuki hizmetler sunarak, bu yapıların hukuki süreçlerini destekliyoruz.
                    Ayrıca, arabuluculuk hizmetlerimizle çözüm odaklı müzakereler yürütmekteyiz.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-image-wrapper">
                <div className="image-decoration"></div>
                <img src={terazi} alt="Adalet terazisi" className="about-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">Değerlerimiz</h2>
            <div className="section-divider center"></div>
          </div>
          <Row>
            {values.map((value, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="value-card">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon icon={value.icon} className="value-icon" />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* History Section */}
      <section className="history-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">Tarihçemiz</h2>
            <div className="section-divider center"></div>
          </div>
          <div className="history-content text-center">
            <p>
              Hukuk büromuz, kurulduğu günden bu yana birçok hukuki başarıya imza atmış, yerli ve yabancı şirketler, dernekler ve bireyler için kapsamlı hukuki hizmetler sunmuştur.
              Uzman ekibimiz, her geçen gün genişleyerek ve gelişerek müvekkillerine en iyi hizmeti sunmayı ilke edinmiştir.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <div className="section-header text-center">
            <h2 className="section-title">İletişim Bilgilerimiz</h2>
            <div className="section-divider center"></div>
          </div>
          <Row className="justify-content-center">
            <Col md={6} lg={3}>
              <div className="contact-info-card">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                <h3>Adres</h3>
                <p>Hürriyet mah yurt sokak no:12 k:1 d:3 minas iş merkezi Kağıthane/İstanbul</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="contact-info-card">
                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                <h3>Telefon</h3>
                <p><a href="tel:05396867694">0539 686 76 94</a></p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="contact-info-card">
                <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                <h3>E-posta</h3>
                <p><a href="mailto:info@avseymanurtasdemir.com">info@avseymanurtasdemir.com</a></p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="contact-info-card">
                <FontAwesomeIcon icon={faClock} className="info-icon" />
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi-Cuma: 09:00 - 17:00<br />Hafta Sonu: Kapalı</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default About; 