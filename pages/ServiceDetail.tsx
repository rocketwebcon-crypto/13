import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, Phone, Crosshair } from 'lucide-react';
import SEO from '../components/SEO';
import { ServiceInfo } from '../types';
import { COMPANY_PHONE } from '../data';

interface Props {
  service: ServiceInfo;
}

const ServiceDetail: React.FC<Props> = ({ service }) => {
  const counties = ['Lane', 'Linn', 'Benton', 'Lincoln', 'Douglas', 'Clackamas', 'Marion', 'Polk', 'Yamhill'];

  return (
    <>
      <SEO 
        title={service.seoTitle} 
        description={service.seoDescription}
        canonicalUrl={`/services/${service.slug}`}
      />
      
      {/* Header */}
      <div className="bg-brand-black py-24 text-white border-b-4 border-brand-brown relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
            <Link to="/services" className="text-brand-brown hover:text-white mb-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors">
                <ArrowLeft size={16} /> Back to Services
            </Link>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="bg-brand-brown p-5 rounded-lg inline-block border-4 border-white/10 shadow-xl">
                    <service.icon size={56} className="text-brand-black" strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl md:text-6xl font-stencil tracking-wide">{service.title}</h1>
            </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 min-h-screen">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Main Content - Enhanced Visuals */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden relative group">
                    {/* Top Accent Line */}
                    <div className="h-2 w-full bg-brand-brown"></div>
                    
                    {/* Subtle Industrial Texture Background */}
                    <div 
                        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                    ></div>

                    <div className="p-8 md:p-12 relative z-10">
                        <h2 className="text-3xl font-heading font-bold text-brand-black mb-6 flex items-center gap-3">
                            Service Overview
                            <span className="h-1 flex-grow bg-brand-brown/20 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed border-l-4 border-brand-black pl-6 py-2">
                            {service.fullDescription}
                        </p>

                        <h3 className="text-2xl font-heading font-bold text-brand-black mb-6">Why This Matters</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-brand-brown transition-all duration-300 hover:shadow-md group-hover:bg-white">
                                    <Crosshair className="text-brand-brown shrink-0 mt-1" size={20} strokeWidth={2} />
                                    <span className="text-brand-black font-bold">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-heading font-bold text-brand-black mb-8">Our Process</h3>
                        <div className="space-y-10 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-1 before:bg-gray-100">
                            {service.processSteps.map((step, index) => (
                                <div key={index} className="relative pl-16">
                                    <div className="absolute left-0 top-0 w-12 h-12 bg-brand-black text-brand-brown rounded-full flex items-center justify-center font-black text-xl z-10 border-4 border-white shadow-lg ring-1 ring-gray-100">
                                        {index + 1}
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <h4 className="text-xl font-bold text-brand-black mb-2 uppercase tracking-wide font-stencil">{step.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-brand-black p-8 rounded-lg border-4 border-brand-brown sticky top-24 shadow-2xl text-white">
                        <h3 className="text-2xl font-stencil text-white mb-3">Need {service.title}?</h3>
                        <p className="text-gray-400 mb-8 font-medium">We are available 24/7 for scheduled maintenance and emergency repairs.</p>
                        
                        <div className="space-y-4">
                            <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 w-full bg-brand-brown hover:bg-brand-brownHover text-brand-black font-black uppercase tracking-wide py-4 rounded transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-2px]">
                                <Phone size={20} /> Call {COMPANY_PHONE}
                            </a>
                            <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-brand-black font-black uppercase tracking-wide py-4 rounded transition-all shadow-[4px_4px_0px_rgba(214,181,134,0.4)] hover:translate-y-[-2px]">
                                Request Quote Online
                            </Link>
                        </div>

                        <hr className="my-8 border-gray-800" />

                        <h4 className="font-black text-brand-brown mb-4 uppercase text-xs tracking-widest">Service Areas</h4>
                        <div className="flex flex-wrap gap-2">
                            {counties.map(county => (
                                <span key={county} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
                                    {county} County
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-brand-brown py-16 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h3 className="text-3xl font-stencil text-brand-black mb-4">Not sure if you need {service.title}?</h3>
            <p className="text-brand-black/80 text-lg font-bold mb-8">Our team offers free phone consultations to help you diagnose the issue.</p>
            <Link to="/contact" className="inline-block border-4 border-brand-black bg-brand-black text-white hover:bg-transparent hover:text-brand-black font-black py-3 px-10 rounded transition-colors text-lg uppercase shadow-xl">
                Contact Us
            </Link>
         </div>
      </div>
    </>
  );
};

export default ServiceDetail;