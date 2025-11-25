import { Service, BlogPost } from './types';
import { Pickaxe, Truck, HardHat, TrendingUp, ShieldCheck, Microscope, Trophy, Clock, Users, Globe } from 'lucide-react';
import React from 'react';

// --- CONFIGURACIÓN DEL BLOG ---
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'El Futuro de la Minería Automatizada',
    excerpt: 'Cómo los vehículos autónomos y los drones están revolucionando la seguridad y eficiencia en las minas a tajo abierto.',
    content: `La minería automatizada no es solo el futuro, es el presente. Las grandes operaciones mineras en Chile y Australia ya están implementando flotas completas de camiones autónomos que operan 24/7 con una precisión milimétrica. 
    
### Beneficios Clave
1. **Seguridad:** Elimina el riesgo humano en las zonas más peligrosas de la mina.
2. **Eficiencia:** Operación continua sin cambios de turno ni fatiga.
3. **Mantenimiento:** Sensores predictivos reducen el tiempo de inactividad.

La integración de redes 5G privadas está permitiendo una latencia casi nula, lo que facilita el control remoto de maquinaria pesada desde centros de operaciones urbanos a cientos de kilómetros de distancia.`,
    author: 'Dr. Roberto M.',
    date: '2023-10-15',
    imageUrl: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=800&auto=format&fit=crop',
    tags: ['Automatización', 'Tecnología', 'Seguridad']
  },
  {
    id: '2',
    title: 'Sostenibilidad en la Extracción de Litio',
    excerpt: 'Nuevos métodos de extracción directa prometen reducir el uso de agua en un 50% comparado con la evaporación tradicional.',
    content: `La demanda de baterías para vehículos eléctricos ha disparado la necesidad de litio. Sin embargo, los métodos tradicionales de piscinas de evaporación consumen enormes cantidades de agua en zonas áridas.
    
La **Extracción Directa de Litio (DLE)** surge como una alternativa tecnológica que permite reinyectar la salmuera al salar después de extraer el mineral. Esto mantiene el equilibrio hidrológico de la cuenca y respeta a las comunidades locales.

### Comparativa
- **Método Tradicional:** 12-18 meses de proceso, 40% de recuperación.
- **DLE:** Horas de proceso, hasta 90% de recuperación.`,
    author: 'Ana S. Ingeniera Ambiental',
    date: '2023-11-02',
    imageUrl: 'https://images.unsplash.com/photo-1619369345733-40a27cb46114?q=80&w=800&auto=format&fit=crop',
    tags: ['Litio', 'Medio Ambiente', 'Innovación']
  }
];

// --- CONFIGURACIÓN DE SERVICIOS ---
// Nota: Los iconos se importan, pero puedes cambiar títulos y descripciones libremente.
export const servicesData = [
  {
    id: '1',
    title: 'Exploración Geológica',
    description: 'Análisis detallado de suelos y yacimientos utilizando tecnología satelital y muestreo avanzado para determinar la viabilidad del proyecto.',
    iconName: 'Microscope' 
  },
  {
    id: '2',
    title: 'Extracción a Tajo Abierto',
    description: 'Operaciones de extracción masiva con maquinaria pesada de última generación, optimizando la relación estéril-mineral.',
    iconName: 'Truck'
  },
  {
    id: '3',
    title: 'Ingeniería Subterránea',
    description: 'Diseño y construcción de túneles y galerías seguras para la extracción de minerales en profundidad.',
    iconName: 'Pickaxe'
  },
  {
    id: '4',
    title: 'Consultoría de Seguridad',
    description: 'Auditorías de seguridad industrial y planes de prevención de riesgos para cumplir con normativas internacionales.',
    iconName: 'HardHat'
  },
  {
    id: '5',
    title: 'Gestión Ambiental',
    description: 'Estrategias de sostenibilidad para minimizar el impacto ecológico, gestión de aguas y planes de cierre de minas.',
    iconName: 'ShieldCheck'
  },
  {
    id: '6',
    title: 'Optimización de Procesos',
    description: 'Análisis de datos e implementación de IA para mejorar la eficiencia operativa y reducir costos de producción.',
    iconName: 'TrendingUp'
  }
];

// --- CONFIGURACIÓN DE ESTADÍSTICAS ---
export const statsData = [
  {
    id: 1,
    label: 'Proyectos Completados',
    value: '+150',
    iconName: 'Trophy',
    desc: 'En 3 continentes'
  },
  {
    id: 2,
    label: 'Días Sin Accidentes',
    value: '1,240',
    iconName: 'Clock',
    desc: 'Cultura de seguridad total'
  },
  {
    id: 3,
    label: 'Ingenieros Expertos',
    value: '300+',
    iconName: 'Users',
    desc: 'Equipo multidisciplinario'
  },
  {
    id: 4,
    label: 'Toneladas Gestionadas',
    value: '50M',
    iconName: 'Globe',
    desc: 'Capacidad operativa anual'
  }
];

// --- CONFIGURACIÓN DE MERCADO (TICKER) ---
export const marketTickerData = [
  { name: 'ORO (oz)', price: '2,034.50', change: '+0.45%', trend: 'up' },
  { name: 'COBRE (lb)', price: '3.82', change: '-0.12%', trend: 'down' },
  { name: 'PLATA (oz)', price: '22.90', change: '+1.20%', trend: 'up' },
  { name: 'LITIO (kg)', price: '13.50', change: '0.00%', trend: 'neutral' },
  { name: 'MOLIBDENO (lb)', price: '20.15', change: '-2.30%', trend: 'down' },
  { name: 'HIERRO (ton)', price: '128.50', change: '+0.85%', trend: 'up' },
];

// --- INFORMACIÓN DE CONTACTO ---
export const contactInfo = {
    phone: '+56 2 2345 6789',
    email: 'proyectos@geominera.com',
    addressLine1: 'Av. del Cobre 1234, Piso 5',
    addressLine2: 'Antofagasta, Chile',
    schedule: 'Lun-Vie, 9am - 6pm'
};
