import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FreeConsultation.css'; // CSS dosyası

const FreeConsultation = () => {
  return (
    <Container className="free-consultation-section my-5">
      <h5 className="consultation-subtitle text-uppercase text-warning">Contact</h5>
      <h1 className="consultation-title">Free Consultation</h1>
      <Row>
        {/* Sol Sütun - İletişim Bilgileri */}
        <Col md={6} className="mb-4 mt-5">
          <Row>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaPhoneAlt className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Call Us Today</h6>
                    <p className="mb-0">1-800-111-2222</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaEnvelope className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Send Message</h6>
                    <p className="mb-0">contact@example.com</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaMapMarkerAlt className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Visit Us</h6>
                    <p className="mb-0">40 Park Ave, Brooklyn, New York</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaClock className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Open Hours</h6>
                    <p className="mb-0">Mon-Fri: 9AM-5PM</p>
                    <p className="mb-0">Sat-Sun: Closed</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Sağ Sütun - Form */}
        <Col md={6} className="mb-4 mt-5 form-section-footer">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName" className="text-start">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail" className="text-start">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formPhone" className="text-start">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="text-start">
              <Form.Label>Briefly tell us about your case</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
            <Button variant="warning" className="send-message-button ">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FreeConsultation;
