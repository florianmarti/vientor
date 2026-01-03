import './BlogPreview.css';

import { FiArrowRight, FiBookOpen, FiCalendar, FiHeart, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  categoryColor: string;
}

const BlogPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'El Poder Transformador del Espíritu Santo en la Vida Cotidiana',
      excerpt: 'Descubre cómo la presencia constante del Espíritu Santo puede renovar tu mente, restaurar tu corazón y empoderarte para vivir una vida con propósito divino cada día.',
      author: 'Pastor Marcos Martinez',
      date: '2026-01-15',
      category: 'Enseñanza Bíblica',
      readTime: '7 min',
      featured: true,
      categoryColor: '#e53e3e'
    },
    {
      id: 2,
      title: 'Testimonio Milagroso: Sanidad Completa en Nuestra Congregación',
      excerpt: 'La historia inspiradora de la hermana María, quien experimentó una sanidad sobrenatural durante nuestro servicio de avivamiento. Un relato que fortalecerá tu fe.',
      author: 'Hermana Lupita Limon',
      date: '2026-01-10',
      category: 'Testimonios',
      readTime: '5 min',
      featured: false,
      categoryColor: '#38a169'
    },
    {
      id: 3,
      title: 'La Oración que Mueve Montañas: Claves para un Avivamiento Personal',
      excerpt: 'Explora principios bíblicos prácticos que transformarán tu vida de oración y te prepararán para experimentar un genuino avivamiento en tu caminar con Dios.',
      author: 'Pastora Mara Contreras',
      date: '2026-01-05',
      category: 'Oración y Avivamiento',
      readTime: '9 min',
      featured: true,
      categoryColor: '#3182ce'
    },
    {
      id: 4,
      title: 'Familias que Honran a Dios: Principios para un Hogar Pentecostal',
      excerpt: 'Cómo establecer fundamentos bíblicos en tu familia para criar hijos en el camino del Señor y mantener un hogar lleno del Espíritu Santo.',
      author: 'Pastora Elena Santos',
      date: '2025-12-28',
      category: 'Familia',
      readTime: '8 min',
      featured: false,
      categoryColor: '#d69e2e'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los Artículos', count: 12, icon: <FiBookOpen /> },
    { id: 'ensenanza', name: 'Enseñanza Bíblica', count: 5, icon: <FiBookOpen /> },
    { id: 'testimonios', name: 'Testimonios', count: 3, icon: <FiHeart /> },
    { id: 'oracion', name: 'Oración', count: 2, icon: <FiMessageSquare /> },
    { id: 'tendencia', name: 'En Tendencia', count: 4, icon: <FiTrendingUp /> }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Enseñanza Bíblica': return <FiBookOpen />;
      case 'Testimonios': return <FiHeart />;
      case 'Oración y Avivamiento': return <FiMessageSquare />;
      default: return <FiBookOpen />;
    }
  };

  const filteredPosts = activeCategory === 'todos' 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="blog-preview" id="blog">
      <div className="blog-header">
        <div className="blog-title-container">
          <span className="blog-subtitle">Recursos Espirituales</span>
          <h2 className="blog-main-title">Blog & Reflexiones</h2>
          <p className="blog-intro">
            <span className="highlight-text">Reflexiones bíblicas profundas</span>, 
            <span className="highlight-text"> testimonios transformadores</span> y 
            <span className="highlight-text"> enseñanzas prácticas</span> para tu crecimiento espiritual continuo
          </p>
        </div>
        
        <a href="#blog-completo" className="btn-explore-all">
          Explorar Biblioteca <FiArrowRight className="arrow-icon" />
        </a>
      </div>

      {/* Filtro de categorías */}
      <div className="categories-filter">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
            <span className="category-count">{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Grid de artículos */}
      <div className="blog-grid">
        {filteredPosts.map(post => (
          <article 
            className={`blog-card ${post.featured ? 'featured' : ''}`} 
            key={post.id}
          >
            <div className="card-header">
              <div 
                className="category-badge"
                style={{ backgroundColor: `${post.categoryColor}20`, color: post.categoryColor }}
              >
                <span className="category-icon-small">{getCategoryIcon(post.category)}</span>
                {post.category}
              </div>
              {post.featured && (
                <div className="featured-badge">
                  <FiTrendingUp /> Destacado
                </div>
              )}
            </div>

            <div className="card-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              
              <div className="post-meta">
                <div className="author-info">
                  <div className="author-avatar">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="author-name">{post.author}</span>
                    <div className="meta-details">
                      <span className="meta-item">
                        <FiCalendar />
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="meta-item">
                        <FiBookOpen />
                        {post.readTime} lectura
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <a href={`#blog-post-${post.id}`} className="read-more-btn">
                Leer Artículo Completo
                <span className="arrow-hover">
                  <FiArrowRight />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter mejorado */}
      <div className="newsletter-premium">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <span className="newsletter-badge">
              <FiBookOpen /> Boletín Exclusivo
            </span>
            <h3 className="newsletter-title">Recibe Contenido Exclusivo</h3>
            <p className="newsletter-description">
              Suscríbete a nuestro boletín premium y recibe reflexiones profundas, 
              estudios bíblicos exclusivos y primeros accesos a nuestros recursos.
            </p>
          </div>
          
          <form className="newsletter-form-premium">
            <div className="input-group">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                required 
                className="premium-input"
              />
              <button type="submit" className="premium-submit-btn">
                Suscribirse Gratis
                <FiArrowRight />
              </button>
            </div>
            <p className="newsletter-note">
              <FiHeart /> Sin spam. Solo contenido de valor. Puedes cancelar cuando quieras.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;