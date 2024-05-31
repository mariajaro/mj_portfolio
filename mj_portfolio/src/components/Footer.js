import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2024 Maria Jaroszewska</p>
            <p>All rights reserved</p>
            <p><a href="https://github.com/mariajaro" className="footer-link">GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;