import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FreeConsultation.css'; // CSS dosyası
import axios from 'axios';

const FreeConsultation = () => {
  // Form state'leri
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation - Tüm alanlar doldurulmuş mu kontrolü
    if (!name || !email || !phone || !message) {
      setFeedback("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      // Backend'e POST isteği gönderme
      await axios.post('https://www.avseymanurtasdemir.com/send-mail', {
        to: 'info@avseymanurtasdemir.com', // Alıcı e-posta adresi
        subject: `Yeni Danışma Talebi: ${name} - ${phone}`,
        text: `Ad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nMesaj: ${message}`,
      });

      // Başarılı olursa
      setFeedback('Mesajınız başarıyla gönderildi.');
      // Form alanlarını temizle
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Mail gönderilirken bir hata oluştu:', error);
      setFeedback('Mesaj gönderilirken bir hata oluştu.');
    }
  };

  return (
    <Container className="free-consultation-section my-5">
      <h5 className="consultation-subtitle text-uppercase text-warning">Contact</h5>
      <Row>
        {/* Sol Sütun - İletişim Bilgileri */}
        <Col md={6} className="mb-4 mt-5">
          <Row>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaPhoneAlt className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Hemen Arayın</h6>
                    <a href="tel:0539-686-7694" className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>0539-686-7694</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaEnvelope className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Mail Gönderin</h6>
                    <a href="mailto:info@avseymanurtasdemir.com" className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>info@avseymanurtasdemir.com</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaMapMarkerAlt className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Ziyaretimize Gelin</h6>
                    <p className="mb-0">Çağlayan, Mari Emek Ofisi, Ekim Sokağı No:7 K:2 D:4, Kâğıthane</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="consultation-card mb-3">
                <Card.Body className="d-flex align-items-center">
                  <FaClock className="consultation-icon text-warning" />
                  <div className="ml-3">
                    <h6 className="mb-1">Açık Günlerimiz</h6>
                    <p className="mb-0">Pazartesi-Cuma: 09-17</p>
                    <p className="mb-0">H.sonu: Kapalı</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Sağ Sütun - Form */}
        <Col md={6} className="mb-4 mt-5 form-section-footer">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName" className="text-start">
                  <Form.Label>İsim - Soyisim</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="İsminizi Giriniz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail" className="text-start">
                  <Form.Label>E-posta</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="E-postanızı Giriniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formPhone" className="text-start">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefon Numaranızı Giriniz"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="text-start">
              <Form.Label>Dosyanız Hakkında Açıklamanız</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Mesajınızı Giriniz"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="warning" type="submit" className="send-message-button">
              Gönder
            </Button>
            {feedback && <p className="mt-3">{feedback}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FreeConsultation;
