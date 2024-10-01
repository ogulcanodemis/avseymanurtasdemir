import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './CallToAction.css'; // CSS dosyası

const CallToAction = () => {
  return (
    <div className="cta-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h6 className="cta-subtitle text-warning">Sonraki Adım</h6>
            <h2 className="cta-title">Bizimle İletişime Geçin</h2>
          </Col>
          <Col md={4} className="text-md-right">
            <Button variant="warning" className="cta-button">Bizi Arayın</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
