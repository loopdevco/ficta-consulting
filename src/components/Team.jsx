import React, { useEffect, useRef } from 'react';
import '../styles/Team.css';

const Team = () => {
  const teamRefs = useRef([]);

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

    teamRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: "Laura Méndez", role: "Directora Estratégica", image: "../assets/1.webp" },
    { name: "Carlos Ruiz", role: "CEO & Fundador", image: "../assets/2.webp" },
    { name: "Andrés Vega", role: "Director Digital", image: "../assets/3.webp" },
    { name: "Sofía Díaz", role: "Consultora Financiera", image: "../assets/4.jpg" }
  ];

  return (
    <section id="team" className="team section">
      <h2 className="section-title">Nuestro Equipo</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={el => (teamRefs.current[index] = el)}
            className="team-member fade-in"
          >
            <img src={member.image  } alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;