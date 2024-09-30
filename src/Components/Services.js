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
              <Card.Title>Free Consultancy</Card.Title>
              <Card.Text>
                Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.
              </Card.Text>
              <Button variant="link" className="read-more">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* İkinci Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Strategy Models</Card.Title>
              <Card.Text>
                Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.
              </Card.Text>
              <Button variant="link" className="read-more">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Üçüncü Kart */}
        <Col md={4} className="mb-4">
          <Card className="custom-card h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Case Solutions</Card.Title>
              <Card.Text>
                Dicit nobis latine qui an, per duis summo impetus an, eam ne perfecto intellegat persequeris.
              </Card.Text>
              <Button variant="link" className="read-more">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
