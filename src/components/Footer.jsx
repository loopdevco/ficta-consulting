import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Ficta Consulting S.A.S. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>
        <p> Elaborado por LoopDev | Jose Fermin Espinosa</p>
      </div>
    </footer>
  );
};

export default Footer;