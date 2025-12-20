import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crosshair, Phone, Star, Target } from 'lucide-react';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import EditableImage from '../components/EditableImage';
import { servicesData, testimonials, COMPANY_PHONE } from '../data';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Septic Services Eugene OR | Pumping, Repair & Inspection" 
        description="Ranked #1 for Septic Services in Eugene & Springfield. Oregon Septic offers expert pumping, DEQ inspections, and 24/7 emergency repairs. Call us today!" 
        canonicalUrl="/"
      />

      {/* HERO SECTION */}
      <section className="relative h-[600px] md:h-[800px] bg-brand-black flex items-center overflow-hidden">
        {/* Background Image Overlay - Optimized for LCP */}
        <div className="absolute inset-0 z-0 opacity-50">
            <EditableImage 
                storageKey="home_hero_bg"
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format,compress&fm=webp&q=75&w=1600&fit=crop" 
                alt="Oregon Septic Truck" 
                fetchPriority="high"
                className="w-full h-full object-cover grayscale"
                wrapperClassName="w-full h-full"
            />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/90 to-black/60 pointer-events-none"></div>

        {/* Watermark Logo - Giant and Stenciled */}
        <div className="absolute -right-20 md:-right-0 top-1/2 transform -translate-y-1/2 z-0 pointer-events-none opacity-20">
           <BrandLogo 
             className="h-[600px] md:h-[1000px] w-auto" 
           />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="bg-brand-brown text-brand-black px-3 py-1 text-xs font-black uppercase tracking-widest rounded mb-4 inline-block shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              Eugene & Springfield's #1 Rated
            </span>
            <h1 className="text-6xl md:text-8xl font-stencil text-white leading-none mb-6 drop-shadow-2xl tracking-tight">
              OREGON <span className="text-brand-brown">SEPTIC</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-8">
              Reliable Services You Can <span className="text-brand-brown border-b-4 border-brand-brown">Trust.</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed drop-shadow-md font-light">
              Protecting your home and health with expert septic pumping, inspections, and repairs. Local, licensed, and ready to serve Lane County 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-brand-brown hover:bg-brand-brownHover text-brand-black text-center font-black text-lg py-4 px-8 rounded transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-2 shadow-[0px_0px_20px_rgba(214,181,134,0.4)]">
                Schedule Service <ArrowRight size={24} strokeWidth={3} />
              </Link>
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="bg-white hover:bg-gray-100 text-brand-black text-center font-black text-lg py-4 px-8 rounded transition-all flex items-center justify-center gap-2 border-4 border-transparent hover:border-brand-brown shadow-lg">
                <Phone size={24} className="text-brand-brown" /> Emergency Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-brand-dark py-8 border-b border-gray-800">
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 items-center text-gray-400 text-sm font-bold uppercase tracking-wider">
          <span className="flex items-center gap-2"><Target size={18} className="text-brand-brown" /> DEQ Certified</span>
          <span className="flex items-center gap-2"><Target size={18} className="text-brand-brown" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Target size={18} className="text-brand-brown" /> 5-Star Rated</span>
          <span className="flex items-center gap-2"><Target size={18} className="text-brand-brown" /> Local Family Owned</span>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-brand-brown font-black tracking-widest uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-5xl font-stencil text-brand-black mb-4">Complete Septic Care</h3>
            <p className="text-gray-600 text-lg">
              From routine maintenance to complex installations, our technicians have the equipment and experience to handle any septic challenge in Oregon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="group bg-gray-50 border-2 border-gray-100 p-8 rounded-lg hover:shadow-2xl hover:border-brand-brown transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-brown/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                
                <div className="w-16 h-16 bg-brand-black text-brand-brown rounded flex items-center justify-center mb-6 group-hover:bg-brand-brown group-hover:text-brand-black transition-colors border-2 border-brand-brown">
                  <service.icon size={32} strokeWidth={2} />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-3 text-brand-black">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link to={`/services/${service.slug}`} className="text-brand-black font-bold flex items-center gap-2 hover:text-brand-brown transition-all group-hover:translate-x-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-4 border-brand-black text-brand-black hover:bg-brand-black hover:text-white font-black py-3 px-10 rounded transition-all text-lg tracking-wide uppercase">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Contrast Section) */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden">
        {/* Subtle watermark */}
        <div className="absolute left-0 top-0 opacity-10 pointer-events-none">
            <BrandLogo className="h-[500px] w-auto" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-brown font-black tracking-widest uppercase text-sm mb-2">Why Oregon Septic</h2>
              <h3 className="text-4xl md:text-5xl font-stencil mb-6">We Do The Dirty Work So You Don't Have To.</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Septic problems can be messy, expensive, and stressful. We aim to make the process as smooth as possible with transparent pricing, timely communication, and rugged professionalism.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced equipment that protects your landscape",
                  "Thorough reports and education for homeowners",
                  "No hidden fees or surprise charges",
                  "Compliance with all local Oregon environmental regulations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                    <Crosshair className="text-brand-brown shrink-0 mt-1" size={20} />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-brown rounded-lg opacity-100 rotate-2"></div>
              <div className="relative rounded-lg shadow-2xl border-4 border-brand-black bg-gray-900 overflow-hidden min-h-[400px] -rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center min-h-[400px] p-4">
                    {/* Custom Line Art Septic Truck SVG */}
                    <svg viewBox="0 0 600 350" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line art illustration of a septic truck">
                        {/* Truck Body Group */}
                        <g stroke="#D6B586" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            {/* Rear Wheels */}
                            <circle cx="380" cy="270" r="35" fill="#111" />
                            <circle cx="470" cy="270" r="35" fill="#111" />
                            <circle cx="380" cy="270" r="15" />
                            <circle cx="470" cy="270" r="15" />
                            
                            {/* Front Wheel */}
                            <circle cx="140" cy="270" r="35" fill="#111" />
                            <circle cx="140" cy="270" r="15" />
                            
                            {/* Chassis Line */}
                            <path d="M100 270 L520 270" strokeWidth="8" />

                            {/* Cab */}
                            <path d="M60 270 L60 150 L160 150 L180 190 L180 270 Z" />
                            <path d="M160 150 L180 190" />
                            <rect x="80" y="170" width="60" height="40" rx="5" /> {/* Window */}
                            <line x1="60" y1="240" x2="180" y2="240" strokeWidth="2" opacity="0.5" /> {/* Door detail */}
                            
                            {/* Tank */}
                            <path d="M210 250 L210 130 Q210 100 240 100 L480 100 Q510 100 510 130 L510 250 Q510 280 480 280 L240 280 Q210 280 210 250 Z" fill="#1a1a1a"/>
                            <path d="M210 170 L510 170" strokeWidth="2" opacity="0.3" /> {/* Detail line */}
                            
                            {/* Hoses / Equipment */}
                            <path d="M240 100 L240 70 L480 70 L480 100" /> {/* Top rail */}
                            <path d="M480 150 C 600 150, 550 350, 400 350" strokeDasharray="12,8" /> {/* Suction Hose */}
                            
                            {/* Ground */}
                            <line x1="20" y1="310" x2="580" y2="310" strokeWidth="2" opacity="0.3" />
                        </g>
                    </svg>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-brown font-black tracking-widest uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-4xl font-stencil text-brand-black">What Your Neighbors Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-lg shadow-lg border-t-8 border-brand-brown relative">
                <div className="absolute -top-4 left-8 bg-brand-brown text-brand-black p-2 rounded-full shadow">
                    <Star size={20} fill="black" />
                </div>
                <div className="flex text-brand-brown mb-4 mt-2">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="#D6B586" />)}
                </div>
                <p className="text-gray-600 italic mb-6 font-medium text-lg">"{t.text}"</p>
                <div>
                  <p className="font-black text-brand-black uppercase tracking-wide">{t.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-bold">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-24 bg-brand-brown relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-stencil text-brand-black mb-6">Ready for Reliable Service?</h2>
          <p className="text-brand-black/80 font-bold text-xl mb-10 max-w-2xl mx-auto">
            Don't wait for an emergency. Schedule your routine pumping or inspection today and keep your system running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-black text-brand-brown hover:bg-gray-900 font-black py-5 px-12 rounded shadow-2xl transition-all text-lg tracking-wide uppercase border-2 border-brand-black">
              Book Appointment
            </Link>
            <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="bg-white text-brand-black hover:bg-gray-100 font-black py-5 px-12 rounded shadow-2xl transition-all text-lg tracking-wide uppercase border-2 border-brand-black">
              Call {COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;