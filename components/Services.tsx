import React from 'react';
import { Pickaxe, Truck, HardHat, TrendingUp, ShieldCheck, Microscope } from 'lucide-react';
import { ViewState } from '../types';
import { servicesData } from '../data';

interface ServicesProps {
    onNavigate: (view: ViewState) => void;
}

// Helper to map string names to components
const getIcon = (name: string) => {
    switch(name) {
        case 'Microscope': return <Microscope className="w-10 h-10 text-mining-gold" />;
        case 'Truck': return <Truck className="w-10 h-10 text-mining-gold" />;
        case 'Pickaxe': return <Pickaxe className="w-10 h-10 text-mining-gold" />;
        case 'HardHat': return <HardHat className="w-10 h-10 text-mining-gold" />;
        case 'ShieldCheck': return <ShieldCheck className="w-10 h-10 text-mining-gold" />;
        case 'TrendingUp': return <TrendingUp className="w-10 h-10 text-mining-gold" />;
        default: return <Pickaxe className="w-10 h-10 text-mining-gold" />;
    }
};

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 bg-mining-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mining-gold font-bold tracking-wide uppercase text-sm mb-2">Qué Hacemos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluciones Integrales para Minería</h3>
          <p className="text-gray-400">
            Combinamos décadas de experiencia en terreno con las últimas tecnologías para ofrecer servicios que maximizan el valor de sus activos mineros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-mining-900 border border-gray-800 p-8 rounded-lg hover:border-mining-gold transition-colors duration-300 group"
            >
              <div className="mb-6 p-4 bg-mining-800 rounded-lg inline-block group-hover:bg-mining-gold/20 transition-colors">
                {getIcon(service.iconName)}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-mining-900 rounded-lg border border-mining-gold/20">
                <h4 className="text-2xl font-bold text-white mb-2">¿Necesita un proyecto a medida?</h4>
                <p className="text-gray-400 mb-6">Nuestros ingenieros están listos para evaluar sus requerimientos específicos.</p>
                <button 
                    onClick={() => onNavigate(ViewState.CONTACT)}
                    className="px-8 py-3 bg-white text-mining-900 hover:bg-gray-100 font-bold rounded transition-colors"
                >
                    Contáctenos Hoy
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};