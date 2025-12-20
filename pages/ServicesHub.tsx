import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { servicesData } from '../data';

const ServicesHub: React.FC = () => {
  return (
    <>
      <SEO 
        title="Septic Services Eugene OR | Full Service List" 
        description="Explore our complete range of septic services in Eugene, Oregon. From pumping and inspections to drain field repairs and new installations." 
        canonicalUrl="/services"
      />

      <div className="bg-brand-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-black text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive septic solutions for homeowners and businesses in Lane County.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-6 bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-brand-brown/30 group">
                <div className="shrink-0">
                    <div className="w-16 h-16 bg-brand-black text-white rounded flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-brown group-hover:text-brand-black border-2 border-brand-black">
                        <service.icon size={32} />
                    </div>
                </div>
                <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-brown transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <Link 
                            to={`/contact?service=${service.id}`} 
                            className="bg-brand-brown hover:bg-brand-brownHover text-brand-black font-black py-3 px-6 rounded inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wide text-sm"
                        >
                            Book Now <CalendarCheck size={16} strokeWidth={3} />
                        </Link>
                        <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-brand-black transition-colors text-sm uppercase tracking-wide">
                            Details <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesHub;