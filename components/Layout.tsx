import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, Hammer, Mountain, BookOpen, Phone } from 'lucide-react';
import { MarketTicker } from './MarketTicker';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', view: ViewState.HOME, icon: <Mountain className="w-4 h-4" /> },
    { label: 'Servicios', view: ViewState.SERVICES, icon: <Hammer className="w-4 h-4" /> },
    { label: 'Blog Minero', view: ViewState.BLOG, icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Contacto', view: ViewState.CONTACT, icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-mining-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-mining-900/95 backdrop-blur-sm border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => onNavigate(ViewState.HOME)}
            >
              <div className="w-10 h-10 bg-mining-gold rounded flex items-center justify-center text-mining-900 transition-transform group-hover:rotate-45 duration-300">
                <Mountain size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">GEOMINERA</h1>
                <p className="text-xs text-mining-gold font-semibold tracking-widest group-hover:text-yellow-200 transition-colors">SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.view)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                    currentView === item.view ? 'text-mining-gold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-mining-800 border-b border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentView === item.view
                      ? 'bg-mining-900 text-mining-gold'
                      : 'text-gray-300 hover:bg-mining-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Market Ticker inserted directly into the header structure for visibility */}
        <MarketTicker />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-mining-900 border-t border-gray-800 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                 <div className="w-8 h-8 bg-mining-gold rounded flex items-center justify-center text-mining-900">
                  <Mountain size={18} strokeWidth={2.5} />
                </div>
                <span className="text-lg font-bold text-white">GEOMINERA</span>
              </div>
              <p className="text-gray-500 text-sm">
                Líderes en soluciones integrales para la industria minera moderna. Extracción responsable, tecnología de punta y seguridad garantizada.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Exploración Geológica</li>
                <li>Gestión de Residuos</li>
                <li>Consultoría Ambiental</li>
                <li>Ingeniería de Minas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@geominera.com</li>
                <li>+56 2 2345 6789</li>
                <li>Av. del Cobre 1234, Antofagasta, Chile</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} GeoMinera Solutions. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};