import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../data';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <div className="py-20 bg-mining-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-mining-gold font-bold uppercase tracking-wide text-sm mb-2">Hablemos</h2>
                        <h3 className="text-4xl font-bold text-white mb-6">Contáctenos para su próximo proyecto</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Nuestros expertos están disponibles para asesorarlo en exploración, extracción o cualquier desafío técnico. Complete el formulario y nos pondremos en contacto a la brevedad.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-mining-900 rounded border border-gray-700 text-mining-gold">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Teléfono</h4>
                                    <p className="text-gray-400">{contactInfo.phone}</p>
                                    <p className="text-gray-500 text-sm">{contactInfo.schedule}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-mining-900 rounded border border-gray-700 text-mining-gold">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email</h4>
                                    <p className="text-gray-400">{contactInfo.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-mining-900 rounded border border-gray-700 text-mining-gold">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Oficina Central</h4>
                                    <p className="text-gray-400">{contactInfo.addressLine1}</p>
                                    <p className="text-gray-400">{contactInfo.addressLine2}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-mining-900 p-8 rounded-xl shadow-2xl border border-gray-800">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/30 text-green-500 rounded-full mb-4">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                                <p className="text-gray-400">Nos pondremos en contacto contigo pronto.</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-mining-gold hover:text-white underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Nombre</label>
                                        <input type="text" required className="w-full bg-mining-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-mining-gold" placeholder="Juan Pérez" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Empresa</label>
                                        <input type="text" className="w-full bg-mining-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-mining-gold" placeholder="Minera Ltda." />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Email</label>
                                    <input type="email" required className="w-full bg-mining-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-mining-gold" placeholder="juan@empresa.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Servicio de Interés</label>
                                    <select className="w-full bg-mining-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-mining-gold">
                                        <option>Exploración</option>
                                        <option>Extracción</option>
                                        <option>Consultoría Ambiental</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Mensaje</label>
                                    <textarea required rows={4} className="w-full bg-mining-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-mining-gold" placeholder="Detalles del proyecto..."></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={status === 'sending'}
                                    className="w-full bg-mining-gold hover:bg-yellow-500 text-mining-900 font-bold py-4 rounded transition-colors flex items-center justify-center"
                                >
                                    {status === 'sending' ? 'Enviando...' : 'Solicitar Información'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};