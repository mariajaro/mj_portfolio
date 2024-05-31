import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar className="custom-navbar" expand="lg" sticky="top">
      <div className="navbar-title">MARIA JAROSZEWSKA</div>
    </Navbar>
  );
}

export default Header;

