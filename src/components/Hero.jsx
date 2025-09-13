import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container flex between center-v">
        <div className="hero-text">
          <h2>Transformamos tu negocio con estrategia y excelencia</h2>
          <p>Ficta Consulting S.A.S. es una firma líder en consultoría estratégica, operativa y digital, diseñada para empresas que buscan crecer con inteligencia.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">Agenda una Consulta</a>
            <a href="#services" className="btn btn-outline">Nuestros Servicios</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Consultores en reunión" />
        </div>
      </div>
    </section>
  );
};

export default Hero;