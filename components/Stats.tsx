import React from 'react';
import { Trophy, Users, Globe, Clock } from 'lucide-react';
import { statsData } from '../data';

// Helper for dynamic icons
const getIcon = (name: string) => {
    switch(name) {
        case 'Trophy': return <Trophy className="w-6 h-6 text-mining-gold" />;
        case 'Clock': return <Clock className="w-6 h-6 text-mining-gold" />;
        case 'Users': return <Users className="w-6 h-6 text-mining-gold" />;
        case 'Globe': return <Globe className="w-6 h-6 text-mining-gold" />;
        default: return <Trophy className="w-6 h-6 text-mining-gold" />;
    }
};

export const Stats: React.FC = () => {
  return (
    <div className="bg-mining-900 border-y border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="text-center p-4 hover:bg-mining-800/50 rounded-lg transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-mining-800 rounded-full border border-gray-700 shadow-lg shadow-black/50">
                  {getIcon(stat.iconName)}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-mining-gold uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};