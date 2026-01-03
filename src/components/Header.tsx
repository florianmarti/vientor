import './Header.css';

import { FaChurch, FaHands } from 'react-icons/fa';
import {
  FiBook,
  FiCalendar,
  FiChevronDown,
  FiHeart,
  FiHome,
  FiMenu,
  FiMessageCircle,
  FiSearch,
  FiUser,
  FiX
} from 'react-icons/fi';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    // Cerrar dropdowns al abrir/cerrar menú móvil
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown: string): void => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      label: 'Inicio',
      icon: <FiHome />,
      href: '#inicio'
    },
    {
      label: 'Servicios',
      icon: <FaChurch />,
      href: '#servicios',
      dropdown: [
        { label: 'Adoración Dominical', href: '#adoracion' },
        { label: 'Estudios Bíblicos', href: '#estudios' },
        { label: 'Oración y Avivamiento', href: '#oracion' },
        { label: 'Ministerio de Jóvenes', href: '#jovenes' }
      ]
    },
    {
      label: 'Eventos',
      icon: <FiCalendar />,
      href: '#eventos'
    },
    {
      label: 'Blog',
      icon: <FiBook />,
      href: '#blog'
    },
    {
      label: 'Ministerios',
      icon: <FaHands />,
      href: '#ministerios',
      dropdown: [
        { label: 'Mujeres en la Fe', href: '#mujeres' },
        { label: 'Hombres de Valor', href: '#hombres' },
        { label: 'Juventud Pentecostal', href: '#juventud' },
        { label: 'Niños para Cristo', href: '#ninos' },
        { label: 'Alabanza y Adoración', href: '#alabanza' }
      ]
    },
    {
      label: 'Contacto',
      icon: <FiMessageCircle />,
      href: '#contacto'
    }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          {/* Logo y nombre de la iglesia */}
          <div className="logo-container">
            <a href="#inicio" className="logo-link">
              <div className="logo-wrapper">
                <img 
                  src="/logo.png" 
                  alt="logo viento recio" 
                  className="logo-image"
                  onError={(e) => {
                    // Fallback si la imagen no existe
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                    if (fallback) fallback.classList.add('visible');
                  }}
                />
                <div className="logo-fallback">
                  <FaChurch className="fallback-icon" />
                </div>
              </div>
              <div className="logo-text">
                <h1 className="church-name">Viento Recio</h1>
                <p className="church-tagline">Hechos 2:2</p>
              </div>
            </a>
          </div>

          {/* Navegación principal - Desktop */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        toggleDropdown(item.label);
                      }
                    }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                    {item.dropdown && (
                      <FiChevronDown className={`dropdown-arrow ${activeDropdown === item.label ? 'active' : ''}`} />
                    )}
                  </a>
                  
                  {item.dropdown && (
                    <div className={`dropdown-menu ${activeDropdown === item.label ? 'active' : ''}`}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <a 
                          key={subIndex} 
                          href={subItem.href} 
                          className="dropdown-item"
                          onClick={closeMenu}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Acciones del header */}
          <div className="header-actions">
            <button className="search-btn" aria-label="Buscar">
              <FiSearch />
            </button>
            <a href="#donaciones" className="donate-btn">
              <FiHeart />
              <span>Ofrendar</span>
            </a>
            <a href="#miembros" className="member-btn">
              <FiUser />
              <span>Miembros</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navegación móvil */}
        <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <FaChurch />
              <span>Menú</span>
            </div>
            <button className="close-menu" onClick={closeMenu}>
              <FiX />
            </button>
          </div>
          
          <ul className="mobile-nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                {item.dropdown ? (
                  <>
                    <button 
                      className="mobile-dropdown-toggle"
                      onClick={() => toggleDropdown(`mobile-${item.label}`)}
                    >
                      <span className="mobile-nav-icon">{item.icon}</span>
                      {item.label}
                      <FiChevronDown className={`mobile-dropdown-arrow ${activeDropdown === `mobile-${item.label}` ? 'active' : ''}`} />
                    </button>
                    <div className={`mobile-dropdown ${activeDropdown === `mobile-${item.label}` ? 'active' : ''}`}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <a 
                          key={subIndex} 
                          href={subItem.href} 
                          className="mobile-dropdown-item"
                          onClick={closeMenu}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a 
                    href={item.href} 
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <a href="#donaciones" className="mobile-donate-btn">
              <FiHeart />
              Ofrendar en Línea
            </a>
            <div className="mobile-contact">
              <p>¿Necesitas ayuda?</p>
              <a href="tel:+1234567890" className="mobile-phone">
                <FiMessageCircle />
                (123) 456-7890
              </a>
            </div>
          </div>
        </nav>

        {/* Overlay para menú móvil */}
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu} />
        )}
      </header>

      {/* Espacio para compensar el header fijo */}
      <div className="header-spacer" />
    </>
  );
};

export default Header;