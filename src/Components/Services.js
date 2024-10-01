import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // CSS dosyası

const Services = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* İlk Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Hukuksal Çözümler</Card.Title>
              <Card.Text>
              Müvekkillerimize, ihtiyaçlarına en uygun hukuki çözümler sunarak, haklarını en etkin şekilde korumayı hedefliyoruz.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        {/* İkinci Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Arabulucuk Hizmeti</Card.Title>
              <Card.Text>
              Uzlaşmazlıkların hızlı, ekonomik ve dostane bir şekilde çözüme kavuşması için arabuluculuk hizmeti sunmaktayız.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        {/* Üçüncü Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Hukuki Danışmanlık</Card.Title>
              <Card.Text>
              Sektörel bilgi birikimimiz ve deneyimimizle şirketler ve bireyler için stratejik hukuki danışmanlık hizmetleri sunuyoruz.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
