import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutSection.css';
import terazi from '../assets/banners/terazi.png';

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center"> {/* Dikeyde ortalama için align-items-center */}
        {/* Sol taraf: Yazılar */}
        <Col md={6} className="about-text">
          <h1 className="text-uppercase text-warning">Hakkımızda</h1> {/* H1 başlık olarak düzenlendi */}
          <h2 className="about-title">Biz Kimiz?</h2> {/* H2 olarak bırakıldı */}
          <p>
            Ofisimiz, müvekkillerine en yüksek standartlarda hukuki danışmanlık ve dava takibi hizmeti sağlamaktadır.
            Müvekkillerimizin karşılaştığı hukuki sorunlara yönelik etkili stratejiler geliştirip, dava süreçlerini titizlikle yönetiyoruz.
            İstanbul merkezli olarak, yerel ve uluslararası birçok projeye de imza atmış bir ekip olarak, birçok farklı sektörde tanınmış yerli ve yabancı şirketlere hukuki danışmanlık sunuyoruz.
          </p>
          <p>
            Dernekler, vakıflar ve sivil toplum kuruluşlarına da hukuki hizmetler sunarak, bu yapıların hukuki süreçlerini destekliyoruz.
            Ayrıca, arabuluculuk hizmetlerimizle çözüm odaklı müzakereler yürütmekteyiz. Amacımız, müvekkillerimizin hukuki süreçlerini en kısa sürede ve en az maliyetle sonuçlandırmaktır.
          </p>

          <Row>
            {/* Sol sütunda History */}
            <Col md={6}>
              <h3 className="history-title">Tarihçemiz</h3> {/* H3 başlık olarak düzenlendi */}
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
            src={terazi} // Resmin URL'si
            alt="Terazi simgesi ile hukuk temsili" 
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Schema.org yapılandırması */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Avukat Şeyma Nur Taşdemir Hukuk Bürosu",
          "description": "Avukat Şeyma Nur Taşdemir, İstanbul merkezli olarak ticaret hukuku, iş hukuku, aile hukuku ve arabuluculuk hizmetleri sunmaktadır.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4",
            "addressLocality": "İstanbul",
            "addressRegion": "TR",
            "postalCode": "34000",
            "addressCountry": "Türkiye"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-539-686-7694",
            "contactType": "Müşteri Hizmetleri",
            "availableLanguage": ["Türkçe", "İngilizce"]
          }
        })}
      </script>
    </Container>
  );
};

export default AboutSection;
