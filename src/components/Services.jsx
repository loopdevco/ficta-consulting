import React, { useEffect, useRef } from 'react';
import '../styles/Services.css';

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Estrategia Empresarial",
      desc: "Diseñamos planes de crecimiento sostenibles basados en análisis de mercado y benchmarking competitivo.",
      icon: "🎯"
    },
    {
      title: "Transformación Digital",
      desc: "Digitalizamos procesos, implementamos ERP, CRM y automatización para aumentar tu eficiencia operativa.",
      icon: "💻"
    },
    {
      title: "Gestión Financiera",
      desc: "Optimizamos tus flujos de caja, estructuras de costos y modelos de ingresos para maximizar rentabilidad.",
      icon: "📊"
    },
    {
      title: "Liderazgo & Cultura",
      desc: "Desarrollamos equipos de alto rendimiento con programas de coaching, liderazgo y alineación cultural.",
      icon: "👥"
    }
  ];

  return (
    <section id="services" className="services section">
      <h2 className="section-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => (serviceRefs.current[index] = el)}
            className="service-card fade-in"
          >
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;