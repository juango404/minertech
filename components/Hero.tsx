import React from 'react';
import { ViewState } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-mining-900 h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579547621113-e4bb2a193af3?q=80&w=2574&auto=format&fit=crop"
          alt="Heavy Mining Excavator"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mining-900 via-mining-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-mining-gold/10 border border-mining-gold/30 rounded-full text-mining-gold text-sm font-semibold mb-6">
            Innovación en Minería
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ingeniería que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mining-gold to-yellow-200">
              Transforma la Tierra
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Ofrecemos servicios de exploración, extracción y consultoría sostenible para la industria minera global. Eficiencia operativa con los más altos estándares de seguridad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(ViewState.SERVICES)}
              className="px-8 py-4 bg-mining-gold hover:bg-yellow-500 text-mining-900 font-bold rounded flex items-center justify-center transition-colors"
            >
              Nuestros Servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate(ViewState.BLOG)}
              className="px-8 py-4 bg-transparent border border-gray-600 hover:border-mining-gold hover:text-mining-gold text-white font-semibold rounded transition-all"
            >
              Leer Blog
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-10 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};