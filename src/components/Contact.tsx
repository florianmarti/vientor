import './Contact.css';

import {
  FaChurch,
  FaHandsHelping,
  FaPrayingHands
} from 'react-icons/fa';
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
  FiYoutube
} from 'react-icons/fi';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  prayerRequest: boolean;
  contactMethod: 'email' | 'phone' | 'whatsapp';
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    prayerRequest: false,
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);
  const [botField, setBotField] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleRadioChange = (method: 'email' | 'phone' | 'whatsapp'): void => {
    setFormData(prev => ({
      ...prev,
      contactMethod: method
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Envío real con Netlify Forms. Los campos deben coincidir con public/__forms.html.
    const body = new URLSearchParams({
      'form-name': 'contacto',
      'bot-field': botField,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      contactMethod: formData.contactMethod,
      prayerRequest: formData.prayerRequest ? 'Sí, urgente' : 'No',
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        prayerRequest: false,
        contactMethod: 'email'
      });
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch {
      // No mostramos "enviado" si no se envió: el mensaje sigue en el formulario.
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickActions = [
    {
      icon: <FaPrayingHands />,
      title: 'Petición de Oración',
      description: 'Envía tu petición para nuestra cadena de oración 24/7',
      color: '#e53e3e',
      action: () => setFormData(prev => ({ ...prev, subject: 'Petición de Oración', prayerRequest: true }))
    },
    {
      icon: <FaChurch />,
      title: 'Visita Pastoral',
      description: 'Solicita una visita pastoral o consejería espiritual',
      color: '#3182ce',
      action: () => setFormData(prev => ({ ...prev, subject: 'Visita Pastoral' }))
    },
    {
      icon: <FaHandsHelping />,
      title: 'Voluntariado',
      description: 'Únete a nuestro equipo de voluntarios y ministerios',
      color: '#38a169',
      action: () => setFormData(prev => ({ ...prev, subject: 'Voluntariado' }))
    }
  ];

  return (
    <section className="contact-section" id="contacto">
      {/* Header con título elegante */}
      <div className="contact-header">
        <span className="contact-subtitle">Estamos para Servirte</span>
        <h2 className="contact-main-title">Contacto & Ubicación</h2>
        <p className="contact-intro">
          <span className="highlight-contact">Tu familia espiritual te espera</span> para acompañarte, 
          <span className="highlight-contact"> orar contigo</span> y 
          <span className="highlight-contact"> caminar juntos</span> en la fe
        </p>
      </div>

      <div className="contact-container">
        {/* Columna izquierda - Información */}
        <div className="contact-info-column">
          <div className="info-card">
            <div className="info-card-header">
              <FiMessageSquare className="info-header-icon" />
              <h3>Conéctate con Nosotros</h3>
            </div>
            
            <div className="contact-details-grid">
              <div className="contact-detail-card">
                <div className="detail-icon-wrapper" style={{ backgroundColor: '#e53e3e15' }}>
                  <FiMapPin style={{ color: '#e53e3e' }} />
                </div>
                <div>
                  <h4>Visítanos</h4>
                  <p className="detail-title">Nuestra Casa de Oración</p>
                  <p className="detail-content">
                    Calle Rupias 37, Col. Simón Bolívar<br />
                    Alcaldía Venustiano Carranza<br />
                    Ciudad de México
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=19.4509452%2C-99.0945326"
                    className="map-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps <FiArrowRight />
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon-wrapper" style={{ backgroundColor: '#3182ce15' }}>
                  <FiPhone style={{ color: '#3182ce' }} />
                </div>
                <div>
                  <h4>Llámanos</h4>
                  <p className="detail-title">Estamos para Escucharte</p>
                  <div className="phone-numbers">
                    <div className="phone-item">
                      <span className="phone-label">Oficina:</span>
                      <span className="phone-number">(123) 456-7890</span>
                    </div>
                    <div className="phone-item">
                      <span className="phone-label">Emergencias:</span>
                      <span className="phone-number emergency">(123) 555-7890</span>
                    </div>
                    <div className="phone-item">
                      <span className="phone-label">WhatsApp:</span>
                      <span className="phone-number">+52 1 234 567 8900</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon-wrapper" style={{ backgroundColor: '#38a16915' }}>
                  <FiMail style={{ color: '#38a169' }} />
                </div>
                <div>
                  <h4>Escríbenos</h4>
                  <p className="detail-title">Correos Electrónicos</p>
                  <div className="email-list">
                    <a href="mailto:info@vientorecio.com" className="email-link">
                      info@vientorecio.com
                    </a>
                    <a href="mailto:oraciones@vientorecio.com" className="email-link">
                      oraciones@vientorecio.com
                    </a>
                    <a href="mailto:pastoral@vientorecio.com" className="email-link">
                      pastoral@vientorecio.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios de servicio */}
            <div className="service-hours-card">
              <div className="hours-header">
                <FiClock />
                <h4>Horarios de Servicio</h4>
              </div>
              <div className="hours-grid">
                <div className="hour-item">
                  <span className="day">Domingo</span>
                  <span className="time">8:00 AM - 1:00 PM</span>
                  <span className="service-type">Servicio Principal</span>
                </div>
                <div className="hour-item">
                  <span className="day">Miércoles</span>
                  <span className="time">7:00 PM - 9:00 PM</span>
                  <span className="service-type">Estudio Bíblico</span>
                </div>
                <div className="hour-item">
                  <span className="day">Viernes</span>
                  <span className="time">8:00 PM - 10:00 PM</span>
                  <span className="service-type">Jóvenes</span>
                </div>
                <div className="hour-item">
                  <span className="day">Sábado</span>
                  <span className="time">10:00 AM - 12:00 PM</span>
                  <span className="service-type">Escuela Dominical</span>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="social-contact-card">
              <h4>Síguenos</h4>
              <div className="social-buttons">
                <a href="#" className="social-btn facebook">
                  <FiFacebook /> Facebook
                </a>
                <a href="https://www.instagram.com/iglesia.vientor" className="social-btn instagram">
                  <FiInstagram /> Instagram
                </a>
                <a href="#" className="social-btn youtube">
                  <FiYoutube /> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="contact-form-column">
          <div className="form-card">
            <div className="form-card-header">
              <FiSend className="form-header-icon" />
              <div>
                <h3>Envíanos un Mensaje</h3>
                <p className="form-subtitle">Te responderemos en menos de 24 horas</p>
              </div>
            </div>

            {/* Acciones rápidas */}
            <div className="quick-actions">
              <p className="quick-actions-title">¿En qué podemos ayudarte?</p>
              <div className="actions-grid">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="quick-action-btn"
                    onClick={action.action}
                    style={{ '--action-color': action.color } as React.CSSProperties}
                  >
                    <div className="action-icon">{action.icon}</div>
                    <span className="action-title">{action.title}</span>
                    <span className="action-desc">{action.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <form
              ref={formRef}
              name="contacto"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="contact-form-premium"
            >
              <input type="hidden" name="form-name" value="contacto" />
              {/* Campo trampa contra spam: las personas no lo ven */}
              <p hidden>
                <label>
                  No llenar: <input name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} />
                </label>
              </p>

              {submitSuccess && (
                <div className="success-message" role="status">
                  <FiCheckCircle />
                  <div>
                    <strong>¡Mensaje Enviado!</strong>
                    <p>Te contactaremos pronto. Dios te bendiga.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="success-message error-message" role="alert">
                  <FiMessageSquare />
                  <div>
                    <strong>No se pudo enviar el mensaje</strong>
                    <p>Revisa tu conexión e inténtalo de nuevo. Tu mensaje sigue escrito abajo.</p>
                  </div>
                </div>
              )}

              <div className="form-grid">
                <div className="form-group-animated">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="animated-input"
                    placeholder=" "
                  />
                  <label>Nombre Completo *</label>
                </div>

                <div className="form-group-animated">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="animated-input"
                    placeholder=" "
                  />
                  <label>Correo Electrónico *</label>
                </div>

                <div className="form-group-animated">
                  <FiPhone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="animated-input"
                    placeholder=" "
                  />
                  <label>Teléfono (Opcional)</label>
                </div>

                <div className="form-group-animated">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="animated-select"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Información General">Información General</option>
                    <option value="Petición de Oración">Petición de Oración</option>
                    <option value="Visita Pastoral">Visita Pastoral</option>
                    <option value="Voluntariado">Voluntariado</option>
                    <option value="Donaciones">Donaciones</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <label>Asunto *</label>
                </div>
              </div>

              <div className="form-group-animated textarea-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  className="animated-textarea"
                  placeholder=" "
                  rows={4}
                />
                <label>Tu Mensaje *</label>
                <span className="textarea-counter">
                  {formData.message.length}/500
                </span>
              </div>

              {/* Preferencia de contacto */}
              <div className="contact-method-section">
                <p className="method-title">¿Cómo prefieres que te contactemos?</p>
                <div className="method-options">
                  <label className={`method-option ${formData.contactMethod === 'email' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={formData.contactMethod === 'email'}
                      onChange={() => handleRadioChange('email')}
                    />
                    <FiMail />
                    <span>Correo Electrónico</span>
                  </label>
                  
                  <label className={`method-option ${formData.contactMethod === 'phone' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={formData.contactMethod === 'phone'}
                      onChange={() => handleRadioChange('phone')}
                    />
                    <FiPhone />
                    <span>Llamada Telefónica</span>
                  </label>
                  
                  <label className={`method-option ${formData.contactMethod === 'whatsapp' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={() => handleRadioChange('whatsapp')}
                    />
                    <FaHandsHelping />
                    <span>WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Checkbox de oración */}
              <div className="prayer-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="prayerRequest"
                    checked={formData.prayerRequest}
                    onChange={handleChange}
                    className="custom-checkbox"
                  />
                  <span className="checkmark"></span>
                  <span className="checkbox-text">
                    <FaPrayingHands className="prayer-icon" />
                    Es una petición de oración urgente
                    <span className="checkbox-note">(Nuestro equipo de intercesión orará por ti)</span>
                  </span>
                </label>
              </div>

              {/* Botón de enviar */}
              <button 
                type="submit" 
                className="submit-btn-premium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Enviar Mensaje
                    <span className="btn-subtext">Dios te bendiga</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;