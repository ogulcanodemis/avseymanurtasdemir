import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBalanceScale, faHandshake, faUsers, faFileContract, faGavel, faKey, faMedkit, faFolder, faHome, faUserShield, faUserTie, faLandmark, faShieldAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
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
      icon: faBalanceScale,
      category: "Ticaret ve Şirketler Hukuku",
      title: "Ticaret ve Şirketler Hukuku",
      description:
        "Şirketlerin kuruluşu, birleşmeleri, devir, hisse satışları ve ticari sözleşmeler gibi ticaret hukuku alanlarında hizmet veriyoruz.",
    },
    {
      icon: faUsers,
      category: "Dernek ve Vakıflar",
      title: "Dernek ve Vakıflara Yönelik Hukuki Danışmanlık",
      description:
        "Dernek ve vakıfların kuruluşu ve hukuki süreçleri ile ilgili danışmanlık hizmetleri sunuyoruz.",
    },
    {
      icon: faFileContract,
      category: "Sözleşmeler Hukuku",
      title: "Sözleşmeler Hukuku",
      description:
        "İşbirliklerini güvence altına almak için ticari ve bireysel sözleşmelerin hazırlanması, gözden geçirilmesi ve müzakeresi hizmetlerini sunuyoruz.",
    },
    {
      icon: faGavel,
      category: "İcra ve İflas Hukuku",
      title: "İcra ve İflas Hukuku",
      description:
        "Alacak tahsili ve iflas süreçlerini yöneterek stratejik çözümler sunuyoruz.",
    },
    {
      icon: faHandshake,
      category: "Arabuluculuk",
      title: "Arabuluculuk Hizmetleri",
      description:
        "Hukuki uyuşmazlıkların hızlı ve dostane bir şekilde çözülmesi için arabuluculuk hizmeti sunuyoruz.",
    },
    {
      icon: faUserShield,
      category: "KVKK/GDPR",
      title: "Kişisel Verilerin Korunması",
      description:
        "Şirketlerin KVKK ve GDPR uyumluluğunu sağlamak adına danışmanlık hizmetleri sunuyoruz.",
    },
    {
      icon: faExclamationTriangle,
      category: "Ceza Hukuku",
      title: "Ceza Hukuku",
      description:
        "Mali suçlar, dolandırıcılık ve zimmet davalarında hukuki savunma ve danışmanlık hizmetleri sunuyoruz.",
    },
    {
      icon: faLandmark,
      category: "İş Hukuku",
      title: "İş Hukuku",
      description:
        "İşverenler ve çalışanlar için iş sözleşmeleri, işçi hakları ve tazminat süreçlerinde hukuki danışmanlık sağlıyoruz.",
    },
    {
      icon: faMedkit,
      category: "Bilişim Hukuku",
      title: "Bilişim Hukuku",
      description:
        "Dijital dünyada müvekkillerimizin dijital haklarını ve veri güvenliğini korumak için bilişim hukuku hizmetleri sunuyoruz.",
    },
    {
      icon: faHome,
      category: "Emlak Hukuku",
      title: "Emlak Hukuku",
      description:
        "Gayrimenkul alım-satım, kira sözleşmeleri ve tapu işlemleri konularında hukuki danışmanlık sağlıyoruz.",
    },
    {
      icon: faUserTie,
      category: "Miras Hukuku",
      title: "Miras Hukuku",
      description:
        "Miras süreçlerinin yönetimi, vasiyetname hazırlanması ve miras paylaşımı konusunda danışmanlık sağlıyoruz.",
    },
    {
      icon: faShieldAlt,
      category: "Sigorta Hukuku",
      title: "Sigorta Hukuku",
      description:
        "Sigorta sözleşmeleri, tazminat talepleri ve sigorta davalarında hukuki destek sunuyoruz.",
    },
    {
      icon: faFolder,
      category: "Borçlar Hukuku",
      title: "Borçlar Hukuku",
      description:
        "Borç yapılandırma, borç tahsili ve icra takibi gibi süreçlerde danışmanlık hizmetleri sunuyoruz.",
    },
    {
      icon: faBuilding,
      category: "Tüketici Hukuku",
      title: "Tüketici Hukuku",
      description:
        "Tüketici sözleşmeleri, cayma hakkı, ayıplı mal ve garanti süreçlerinde hukuki destek sunuyoruz.",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="mb-4 text-center">
        <Col>
          <h6 className="text-uppercase text-warning">Çalışma Alanlarımız</h6>
          <h2 className="practice-title">Çalışma Alanlarımız</h2>
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
