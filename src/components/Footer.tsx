import "./Footer.css";

import {
  FiFacebook,
  FiHeart,
  FiHome,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>
            <FiHome className="footer-icon" /> Iglesia Pentecostal
          </h3>
          <p className="footer-motto">
            "Y de repente vino del cielo un estruendo como de un viento recio
            que soplaba, el cual llenó toda la casa donde estaban sentados;”
            <br />- Hechos 2:2
          </p>
          <div className="footer-contact">
            <div className="contact-item">
              <FiMapPin />
              <span>
                Calle Rupias 37, Col. Simón Bolívar, Venustiano Carranza,
                Ciudad de México
              </span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>(123) 456-7890</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>info@vientorecio.com</span>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="social-link">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FiInstagram />
            </a>
            <a
              href="https://www.youtube.com/@ventorecio"
              aria-label="YouTube"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#eventos">Eventos</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ministerios</h4>
          <ul className="footer-links">
            <li>
              <a href="#mujeres">Ministerio de Mujeres</a>
            </li>
            <li>
              <a href="#hombres">Ministerio de Hombres</a>
            </li>
            <li>
              <a href="#jovenes">Juventud Pentecostal</a>
            </li>
            <li>
              <a href="#ninos">Escuela Dominical</a>
            </li>
            <li>
              <a href="#alabanza">Ministerio de Alabanza</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Recursos</h4>
          <ul className="footer-links">
            <li>
              <a href="#sermones">Sermones en Línea</a>
            </li>
            <li>
              <a href="#devocional">Devocional Diario</a>
            </li>
            <li>
              <a href="#biblioteca">Biblioteca Digital</a>
            </li>
            <li>
              <a href="#donaciones">Donaciones en Línea</a>
            </li>
            <li>
              <a href="#voluntariado">Voluntariado</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <FiHeart className="heart-icon" /> Hecho con amor para la gloria de
          Dios © {currentYear} Iglesia Viento Recio Todos los derechos
          reservados.
        </p>
        <p className="footer-disclaimer">
          Esta es una comunidad cristiana. Respetamos todas las creencias
          religiosas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
