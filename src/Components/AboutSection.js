import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center"> {/* Dikeyde ortalama için align-items-center */}
        {/* Sol taraf: Yazılar */}
        <Col md={6} className="about-text">
          <h6 className="text-uppercase text-warning">Hakkımızda</h6>
          <h2 className="about-title">Biz Kimiz?</h2>
          <p>
            Ofisimiz, müvekkillerine en yüksek standartlarda hukuki danışmanlık ve dava takibi hizmeti sağlamaktadır.
            Müvekkillerimizin karşılaştığı hukuki sorunlara yönelik etkili stratejiler geliştirip, dava süreçlerini titizlikle yönetiyoruz.
            Yerel ve uluslararası birçok projeye de imza atmış bir ekip olarak, birçok farklı sektörde tanınmış yerli ve yabancı şirketlere hukuki danışmanlık sunuyoruz.
          </p>
          <p>
            Dernekler, vakıflar ve sivil toplum kuruluşlarına da hukuki hizmetler sunarak, bu yapıların hukuki süreçlerini destekliyoruz.
            Ayrıca, arabuluculuk hizmetlerimizle çözüm odaklı müzakereler yürütmekteyiz.
            Amacımız, müvekkillerimizin hukuki süreçlerini en kısa sürede ve en az maliyetle sonuçlandırmaktır.
          </p>

          <Row>
            {/* Sol sütunda History */}
            <Col md={6} >
              <h3 className="history-title">Tarihçemiz</h3>
              <p>
                Hukuk büromuz, kurulduğu günden bu yana birçok hukuki başarıya imza atmış, yerli ve yabancı şirketler, dernekler ve bireyler için kapsamlı hukuki hizmetler sunmuştur.
                Uzman ekibimiz, her geçen gün genişleyerek ve gelişerek müvekkillerine en iyi hizmeti sunmayı ilke edinmiştir.
              </p>
            </Col>
            {/* Sağ sütunda Awards */}
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <div className="awards">
                <h3>Aldığımız Ödüller</h3>
                <ul className="list-unstyled">
                  <li>• Hukuk Uyuşmazlıklarında Arabuluculuk Eğitimi</li>
                  <li>• Sanık Müdafiiliği, Mağdur, Şikayetçi ve Katılan Vekilliği Sertifikası</li>
                  <li>• Kadın Hakları ve Aile İçi Şiddet Sertifikası</li>
                  <li>• Çocuk Hukuku Eğitim Sertifikası</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Sağ taraf: Resim */}
        <Col md={6} className="about-right">
          <img
            src="https://via.placeholder.com/500x700" // Resmin URL'si
            alt="About us"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
