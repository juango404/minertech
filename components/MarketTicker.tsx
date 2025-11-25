import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { marketTickerData } from '../data';

export const MarketTicker: React.FC = () => {
  return (
    <div className="bg-black border-b border-gray-800 py-2 overflow-hidden flex items-center h-10">
      <div className="flex items-center animate-scroll whitespace-nowrap min-w-full">
        {/* Double the list for seamless infinite scroll effect */}
        {[...marketTickerData, ...marketTickerData, ...marketTickerData].map((item, index) => (
          <div key={index} className="flex items-center mx-6 space-x-2 text-xs font-mono">
            <span className="text-gray-400 font-bold">{item.name}</span>
            <span className="text-white">${item.price}</span>
            <span className={`flex items-center ${
              item.trend === 'up' ? 'text-green-500' : 
              item.trend === 'down' ? 'text-red-500' : 'text-gray-500'
            }`}>
              {item.change}
              {item.trend === 'up' && <TrendingUp size={12} className="ml-1" />}
              {item.trend === 'down' && <TrendingDown size={12} className="ml-1" />}
              {item.trend === 'neutral' && <Minus size={12} className="ml-1" />}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};