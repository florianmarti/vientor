// Tipos para eventos
export interface ChurchEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

// Tipos para servicios
export interface Service {
  id: number;
  title: string;
  description: string;
  time: string;
  features: string[];
}

// Tipos para publicaciones del blog
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

// Tipos para redes sociales
export interface SocialPlatform {
  platform: string;
  handle: string;
  followers: string;
  link: string;
  description: string;
}

// Tipos para el formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  prayerRequest: boolean;
}