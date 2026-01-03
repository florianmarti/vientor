import './SocialMedia.css';

import { FiCalendar, FiFacebook, FiInstagram, FiMessageCircle, FiShare2, FiUsers, FiYoutube } from 'react-icons/fi';

import React from 'react';

interface SocialPlatform {
  platform: string;
  icon: React.ReactNode;
  handle: string;
  followers: string;
  link: string;
  description: string;
  color: string;
}

const SocialMedia: React.FC = () => {
  const socialPlatforms: SocialPlatform[] = [
    {
      platform: 'Facebook',
      icon: <FiFacebook />,
      handle: '@IglesiaVientoRecio',
      followers: '2.5K seguidores',
      link: '#',
      description: 'Transmisiones en vivo, devocionales diarios y noticias de la iglesia',
      color: '#1877F2'
    },
    {
      platform: 'Instagram',
      icon: <FiInstagram />,
      handle: '@iglesia.vientor',
      followers: '1.8K seguidores',
      link: '#',
      description: 'Historias diarias, testimonios y momentos especiales',
      color: '#E4405F'
    },
    {
      platform: 'YouTube',
      icon: <FiYoutube />,
      handle: 'Iglesia Viento Recio TV',
      followers: '3.2K suscriptores',
      link: '#',
      description: 'Sermones completos, alabanza en vivo y conferencias',
      color: '#FF0000'
    },
    {
      platform: 'WhatsApp',
      icon: <FiMessageCircle />,
      handle: 'Grupo de Oración',
      followers: '500 miembros',
      link: '#',
      description: 'Oración 24/7, apoyo espiritual y comunidad',
      color: '#25D366'
    }
  ];

  return (
    <section className="social-media" id="redes">
      <div className="social-header">
        <h2>Conéctate Con Nosotros</h2>
        <p className="section-intro">
          Síguenos en redes sociales y sé parte de nuestra comunidad digital
        </p>
      </div>
      
      <div className="social-grid">
        {socialPlatforms.map((social, index) => (
          <a 
            href={social.link} 
            className="social-card" 
            key={index}
            target="_blank" 
            rel="noopener noreferrer"
            style={{ '--social-color': social.color } as React.CSSProperties}
          >
            <div className="social-icon-wrapper" style={{ backgroundColor: `${social.color}15` }}>
              <div className="social-icon" style={{ color: social.color }}>
                {social.icon}
              </div>
            </div>
            
            <div className="social-content">
              <h3>{social.platform}</h3>
              <p className="social-handle">{social.handle}</p>
              <div className="social-stats">
                <FiUsers />
                <span>{social.followers}</span>
              </div>
              <p className="social-description">{social.description}</p>
            </div>
            
            <div className="social-action">
              <FiShare2 />
              <span>Seguir</span>
            </div>
          </a>
        ))}
      </div>
      
      <div className="live-stream">
        <div className="live-header">
          <div className="live-indicator">
            <span className="live-dot"></span>
            EN VIVO
          </div>
          <h3>Servicio Dominical en Vivo</h3>
        </div>
        
        <div className="stream-info">
          <div className="stream-details">
            <div className="stream-time">
              <FiCalendar />
              <span>Domingos 10:00 AM</span>
            </div>
            <p className="stream-description">
              Únete a nuestro servicio de adoración transmitido en vivo cada domingo.
              Participa desde cualquier lugar.
            </p>
          </div>
          
          <div className="stream-actions">
            <a href="#live" className="btn btn-live">
              <span className="live-dot"></span>
              Unirse Ahora
            </a>
            <a href="#schedule" className="btn btn-outline">
              Ver Programación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;