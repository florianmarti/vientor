import './Events.css';

import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import React, { useState } from 'react';

import { ChurchEvent } from '../types/index';

const Events: React.FC = () => {
  const [events] = useState<ChurchEvent[]>([
    {
      id: 1,
      title: 'Retiro de Mujeres "Virtuosas"',
      date: '2026-01-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Centro de Conferencias Monte de los Olivos',
      description: 'Un día completo de ministerio especial para mujeres con talleres, alabanza y oración.',
      category: 'Mujeres'
    },
    {
      id: 2,
      title: 'Conferencia de Avivamiento',
      date: '2026-01-20',
      time: '7:00 PM',
      location: 'Auditorio Principal',
      description: 'Noche especial de avivamiento con el Pastor invitado Juan Pérez.',
      category: 'Conferencia'
    },
    {
      id: 3,
      title: 'Bautismo en Aguas',
      date: '2026-01-25',
      time: '3:00 PM',
      location: 'Piscina Bautismal',
      description: 'Ceremonia especial de bautismo para nuevos creyentes.',
      category: 'Sacramento'
    }
  ]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="events" id="eventos">
      <h2>Próximos Eventos</h2>
      <p className="section-intro">
        Participa en nuestras actividades y crece en comunidad
      </p>
      
      <div className="events-container">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-date">
              <FiCalendar />
              <div>
                <strong>{formatDate(event.date)}</strong>
                <span className="event-category">{event.category}</span>
              </div>
            </div>
            
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              
              <div className="event-details">
                <div className="detail">
                  <FiClock />
                  <span>{event.time}</span>
                </div>
                <div className="detail">
                  <FiMapPin />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <button 
                className="btn" 
                onClick={() => console.log(`Registrando para evento: ${event.title}`)}
              >
                Registrarse
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;