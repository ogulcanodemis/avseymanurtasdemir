import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutSection.css'; // CSS dosyası

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center"> {/* Dikeyde ortalama için align-items-center */}
        {/* Sol taraf: Yazılar */}
        <Col md={6} className="about-text">
          <h6 className="text-uppercase text-warning">Since 1995</h6>
          <h2 className="about-title">We are Atis</h2>
          <p>
            Molestiae sea vis habemus civibus in, probo illud everti te sea, est ut diceret
            maiestatis. Autem postulant theophrastus quo id, probo nostro eloquentiam eum ne, vide sale primis sea ex.
            Mazim assentior eum.
          </p>

          <Row>
            {/* Sol sütunda History */}
            <Col md={6}>
              <h3 className="history-title">History</h3>
              <p>
                Vix in erat erant ubique, cum et dicant soluta, postulant mediocrem at mel.
                Appetere inciderint eloquentiam ne sed. In veri illud erroribus vel, vel ad graeci theophrastus,
                libris timeam sapientem ex mel.
              </p>
            </Col>

            {/* Sağ sütunda Awards */}
            <Col md={6}>
              <div className="awards">
                <h4>Awards</h4>
                <ul className="list-unstyled">
                  <li>• Law Awards 2020</li>
                  <li>• Super Lawyers 2019</li>
                  <li>• Pro Bono Award 2019</li>
                  <li>• Rising Star 2018</li>
                  <li>• Lawyer of the Year 2018</li>
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
