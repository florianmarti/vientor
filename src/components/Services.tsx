import './Services.css';

import { FiClock, FiHeart, FiMusic, FiUsers } from 'react-icons/fi';
import { IconType } from 'react-icons';

import React from 'react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Adoración Pentecostal',
      description: 'Servicios llenos de la presencia del Espíritu Santo con alabanza y adoración ferviente.',
      time: 'Domingos 10:00 AM',
      features: ['Alabanza contemporánea', 'Oración por sanidad', 'Ministerio de liberación']
    },
    {
      id: 2,
      title: 'Estudios Bíblicos',
      description: 'Profundiza en la Palabra de Dios con estudios expositivos y grupos pequeños.',
      time: 'Miércoles 7:00 PM',
      features: ['Estudio por libros', 'Discipulado personal', 'Grupos de hogar']
    },
    {
      id: 3,
      title: 'Ministerio de Jóvenes',
      description: 'Un espacio dinámico para jóvenes buscando a Dios en medio de su generación.',
      time: 'Viernes 8:00 PM',
      features: ['Alabanza juvenil', 'Conferencias', 'Retiros espirituales']
    }
  ];

  const getIcon = (index: number): IconType => {
    const icons = [FiMusic, FiUsers, FiHeart, FiClock];
    return icons[index % icons.length];
  };

  return (
    <section className="services" id="servicios">
      <h2>Nuestros Servicios y Ministerios</h2>
      <p className="section-intro">
        Ofrecemos diversos ministerios para edificación espiritual y crecimiento en la fe pentecostal
      </p>
      
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = getIcon(index);
          return (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-time">
                <FiClock /> {service.time}
              </div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#contacto" className="btn btn-secondary">Más Información</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;