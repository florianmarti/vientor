import './Hero.css';

import { FaBible, FaChurch, FaDove, FaPray } from 'react-icons/fa';
import { FiArrowRight, FiCalendar, FiClock, FiHeart, FiMapPin, FiPlayCircle, FiUsers } from 'react-icons/fi';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      {/* Background overlay elegante */}
      <div className="background-overlay">
        <div className="background-container">
          {/* Gradiente sobrio */}
          <div className="sober-gradient"></div>
          
          {/* Patrón de fondo sutil */}
          <div className="background-pattern"></div>
        </div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          {/* Badge de bienvenida - Palabras actualizadas */}
          <div className="welcome-badge">
            <FaDove className="dove-icon" />
            <span>Comunidad · Restauración · Propósito</span>
          </div>

          {/* Título principal con efecto sutil */}
          <div className="title-container">
            <h1 className="hero-title">
              <span className="title-line">Encuentra Paz</span>
              <span className="title-line highlight">y Propósito</span>
              <span className="title-line">en Cristo</span>
            </h1>
            <div className="title-underline">
              <div className="underline-bar"></div>
              <FaBible className="bible-icon" />
              <div className="underline-bar"></div>
            </div>
          </div>

          {/* Subtítulo mejorado */}
          <p className="hero-subtitle">
            Una <span className="highlight-text">comunidad cristiana</span> donde el amor de Dios 
            transforma vidas, restaura familias y 
            <span className="highlight-text"> da propósito eterno</span>.
          </p>

          {/* Botones con colores sobrios */}
          <div className="hero-actions">
            <div className="action-buttons">
              <a href="#servicios" className="btn btn-primary">
                <FaChurch />
                <span>Nuestros Servicios</span>
                <FiArrowRight className="arrow-icon" />
              </a>
              <a href="#eventos" className="btn btn-secondary">
                <FiCalendar />
                <span>Próximos Eventos</span>
              </a>
              <a href="#transmision" className="btn btn-tertiary">
                <FiPlayCircle />
                <span>Ver Transmisión</span>
              </a>
            </div>

            {/* Estadísticas de impacto */}
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-icon"><FiHeart /></div>
                <div className="stat-number">+500</div>
                <div className="stat-label">Vidas Transformadas</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><FiUsers /></div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Comunidad Activa</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><FaPray /></div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Compromiso Cristiano</div>
              </div>
            </div>
          </div>

          {/* Horarios de servicio - Versión elegante */}
          <div className="service-times-elegant">
            <div className="section-header">
              <FaChurch className="section-icon" />
              <h2 className="section-title">Nuestros Encuentros Semanales</h2>
              <p className="section-subtitle">Espacios diseñados para tu crecimiento espiritual</p>
            </div>
            
            <div className="service-cards">
              <div className="service-card-elegant">
                <div className="card-header">
                  <div className="card-icon">
                    <FiCalendar />
                  </div>
                  <div className="card-badge">
                    Encuentro Principal
                  </div>
                </div>
                <h3 className="card-title">Adoración Dominical</h3>
                <p className="card-time">
                  <FiClock /> Domingos 10:00 AM
                </p>
                <p className="card-description">
                  Un tiempo de adoración, enseñanza bíblica y comunión familiar
                </p>
                <a href="#dominical" className="card-link">
                  Unirme <FiArrowRight />
                </a>
              </div>

              <div className="service-card-elegant">
                <div className="card-header">
                  <div className="card-icon">
                    <FiClock />
                  </div>
                  <div className="card-badge">
                    Crecimiento
                  </div>
                </div>
                <h3 className="card-title">Estudio Bíblico</h3>
                <p className="card-time">
                  <FiClock /> Miércoles 7:00 PM
                </p>
                <p className="card-description">
                  Estudio profundo de las Escrituras para aplicación práctica
                </p>
                <a href="#estudio" className="card-link">
                  Participar <FiArrowRight />
                </a>
              </div>

              <div className="service-card-elegant">
                <div className="card-header">
                  <div className="card-icon">
                    <FiMapPin />
                  </div>
                  <div className="card-badge">
                    Juventud
                  </div>
                </div>
                <h3 className="card-title">Generación de Fe</h3>
                <p className="card-time">
                  <FiClock /> Viernes 8:00 PM
                </p>
                <p className="card-description">
                  Jóvenes comprometidos con Cristo y su propósito
                </p>
                <a href="#jovenes" className="card-link">
                  Conectar <FiArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Llamado a la acción */}
          <div className="call-to-action-elegant">
            <div className="cta-content">
              <FaPray className="cta-icon" />
              <div className="cta-text-content">
                <h3 className="cta-title">¿Buscas una Comunidad?</h3>
                <p className="cta-text">Ven y descubre un lugar donde pertenecer y crecer en fe</p>
              </div>
              <a href="#visitanos" className="btn btn-cta">
                Visítanos <FiArrowRight />
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span className="scroll-text">Explora Más</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;