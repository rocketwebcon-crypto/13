
import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';

const serviceCounties = [
  "Lane", "Linn", "Benton", "Lincoln", "Douglas", 
  "Clackamas", "Marion", "Polk", "Yamhill"
];

const ServiceAreaMap: React.FC = () => {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);

  return (
    <div className="bg-white p-8 rounded-xl shadow-inner border-2 border-gray-100">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Map Illustration */}
        <div className="flex-1 w-full max-w-lg relative">
          <div className="absolute -top-6 -left-6 bg-brand-brown text-brand-black px-4 py-2 rounded font-black text-xs uppercase tracking-widest shadow-lg z-10 border-2 border-brand-black">
            Coverage Area
          </div>
          
          <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#000" strokeWidth="2" strokeLinejoin="round">
              {/* Outer Shadow/Backing for Oregon Focus */}
              <path 
                d="M120 40 L280 40 L320 180 L300 380 L180 420 L60 380 L40 180 Z" 
                fill="#D6B586" 
                fillOpacity="0.05"
              />
              
              {/* Interactive Core Area */}
              <path 
                d="M140 60 L250 60 L270 150 L260 340 L100 340 L80 150 Z" 
                fill="#D6B586" 
                className="transition-all duration-500 hover:fill-brand-brownHover cursor-help"
                onMouseEnter={() => setHoveredCounty("Western Oregon Hub")}
                onMouseLeave={() => setHoveredCounty(null)}
              />

              {/* Major Points */}
              <g className="group/pin">
                <circle cx="160" cy="220" r="6" fill="#000" />
                <text x="175" y="225" fontSize="16" fontWeight="900" fontFamily="sans-serif" className="tracking-tight">EUGENE</text>
                <circle cx="160" cy="220" r="12" fill="none" stroke="#D6B586" strokeWidth="2" className="animate-ping" />
              </g>
              
              <g className="group/pin">
                <circle cx="180" cy="180" r="5" fill="#000" />
                <text x="195" y="185" fontSize="12" fontWeight="700" fontFamily="sans-serif">SPRINGFIELD</text>
              </g>

              <g className="group/pin">
                <circle cx="150" cy="120" r="5" fill="#000" />
                <text x="165" y="125" fontSize="12" fontWeight="700" fontFamily="sans-serif">SALEM</text>
              </g>

              <g className="group/pin">
                <circle cx="70" cy="180" r="5" fill="#000" />
                <text x="30" y="205" fontSize="11" fontWeight="700" fontFamily="sans-serif">NEWPORT</text>
              </g>
              
              {/* Abstracted Willamette River line */}
              <path d="M145 40 Q175 180 165 460" fill="none" stroke="#A5C9CA" strokeWidth="4" opacity="0.4" />
            </g>
          </svg>
          
          <div className="mt-4 flex items-center gap-2 text-gray-400 text-xs italic bg-gray-50 p-2 rounded">
            <Info size={14} className="text-brand-brown" /> Our trucks are centrally dispatched from Junction City for maximum efficiency.
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl font-stencil text-brand-black mb-6">Service Area Breakdown</h3>
          <p className="text-gray-600 mb-8 leading-relaxed font-medium">
            Oregon Septic operates a fleet of specialized pumping and inspection trucks positioned to serve the following counties:
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {serviceCounties.map(county => (
              <div 
                key={county} 
                className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all group ${
                    hoveredCounty ? 'border-brand-brown bg-brand-brown/5 shadow-md' : 'border-gray-50 bg-gray-50 hover:border-brand-brown/30'
                }`}
              >
                <MapPin size={18} className="text-brand-brown group-hover:scale-110 transition-transform" />
                <span className="font-bold text-brand-black text-sm uppercase tracking-tight">{county} County</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-brand-black text-white rounded-lg border-l-8 border-brand-brown shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <p className="text-sm font-black uppercase tracking-widest text-brand-brown mb-1">Commercial & Special Projects</p>
                <p className="text-xs text-gray-400 leading-relaxed">For large-scale installations or decommissions, we occasionally travel to neighboring counties. Inquire today for a custom evaluation.</p>
             </div>
             <MapPin size={60} className="absolute -right-4 -bottom-4 opacity-5 text-white transition-transform group-hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
