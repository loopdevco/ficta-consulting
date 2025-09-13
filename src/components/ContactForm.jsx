import React, { useState } from 'react';
/* import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../emailjs-config.js'; */
/* import emailjs from 'emailjs-com'; */
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'Correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Correo inválido';
    if (!formData.company.trim()) newErrors.company = 'Empresa es requerida';
    if (!formData.message.trim()) newErrors.message = 'Mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setSubmitStatus('¡Gracias! Tu mensaje ha sido enviado.');
          setFormData({ name: '', email: '', company: '', message: '' });
          setTimeout(() => setSubmitStatus(''), 5000);
        },
        (error) => {
          setSubmitStatus('Lo sentimos, hubo un error al enviar tu mensaje. Por favor intenta de nuevo.');
          console.error('EmailJS Error:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Contáctanos</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>¿Listo para transformar tu empresa?</h3>
          <p>Completa el formulario y uno de nuestros consultores se pondrá en contacto contigo en menos de 24 horas.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> info@fictaconsultingprueba.com</p>
            <p><strong>Teléfono:</strong> +57 310 123 4567</p>
            <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Empresa *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
              className={errors.company ? 'error' : ''}
            />
            {errors.company && <span className="error-message">{errors.company}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos cómo podemos ayudarte..."
              rows="5"
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn">
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {submitStatus && (
            <div className={`status ${submitStatus.includes('Gracias') ? 'success' : 'error'}`}>
              {submitStatus}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;