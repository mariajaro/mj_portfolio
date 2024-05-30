import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Maria Jaroszewska. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="https://twitter.com/yourusername" className="text-white ml-2">
              <span className="social-icon">T</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-white ml-2">
              <span className="social-icon">L</span>
            </a>
            <a href="https://github.com/yourusername" className="text-white ml-2">
              <span className="social-icon">G</span>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;