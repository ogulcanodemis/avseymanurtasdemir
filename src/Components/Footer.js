import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'; // CSS dosyası

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <Container>
        <Row>
          {/* About Us */}
          <Col md={3}>
            <h5 className="footer-title">About Us</h5>
            <p>
              We are extremely proud nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit t porro veritus vis.
            </p>
            <p><i className="fas fa-map-marker-alt"></i> 40 Park Ave, Brooklyn, New York</p>
            <p><i className="fas fa-phone"></i> 1-800-111-2222</p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#practice-areas" className="footer-link">Practice Areas</a></li>
              <li><a href="#case-studies" className="footer-link">Case Studies</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Practice Areas */}
          <Col md={3}>
            <h5 className="footer-title">Practice Areas</h5>
            <ul className="list-unstyled">
              <li><a href="#auto-accidents" className="footer-link">Auto Accidents</a></li>
              <li><a href="#personal-injury" className="footer-link">Personal Injury</a></li>
              <li><a href="#finance-law" className="footer-link">Finance Law</a></li>
              <li><a href="#real-estate" className="footer-link">Real Estate</a></li>
              <li><a href="#tax-disputes" className="footer-link">Tax Disputes</a></li>
            </ul>
          </Col>

          {/* Latest News */}
          <Col md={3}>
            <h5 className="footer-title">Latest News</h5>
            <ul className="list-unstyled latest-news">
              <li className="mb-3 d-flex">
                <img src="https://via.placeholder.com/60x60" alt="news1" className="footer-news-img rounded mr-3" />
                <div>
                  <p className="news-date">January 16, 2024</p>
                  <a href="#news1" className="footer-link">
                    What to Ask a Personal Injury Lawyer
                  </a>
                </div>
              </li>
              <li className="mb-3 d-flex">
                <img src="https://via.placeholder.com/60x60" alt="news2" className="footer-news-img rounded mr-3" />
                <div>
                  <p className="news-date">January 15, 2024</p>
                  <a href="#news2" className="footer-link">
                    Expert Legal Tips for Real Estate
                  </a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; 2024 Atis. Designed by MatchThemes.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
