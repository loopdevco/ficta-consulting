import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex between center-v">
        <h1 className="logo">Ficta<span style={{ color: '#4a90e2' }}>Consulting</span></h1>
        
        <nav className="nav-menu">
          <ul className="flex">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#team">Equipo</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none' }}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;