import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin, Facebook, Instagram, Linkedin, Clock, Lock } from 'lucide-react';
import BrandLogo from './BrandLogo';
import Chatbot from './Chatbot';
import { COMPANY_PHONE } from '../data';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black font-sans">
      {/* Top Bar - SEO Heavy for NAP */}
      <div className="bg-brand-dark text-gray-400 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-brown" /> Serving Lane, Linn, Benton, Lincoln & Surrounding Counties</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-brand-brown" /> 24/7 Emergency Service Available</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-default">CCB# 257230 | DEQ# 39848</span>
            <span>|</span>
            <a href="#" className="hover:text-brand-brown transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-brand-brown transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-brand-brown transition-colors"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <BrandLogo className="h-16 w-auto drop-shadow-md" />
            <div className="hidden flex-col">
              <span className="font-stencil text-2xl leading-none text-brand-black tracking-wider">
                OREGON
              </span>
              <span className="font-stencil text-2xl leading-none text-brand-brown tracking-wider">
                SEPTIC
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-bold uppercase tracking-wide hover:text-brand-brown transition-colors ${isActive(link.path) ? 'text-brand-brown' : 'text-brand-black'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} 
              className="bg-brand-brown hover:bg-brand-brownHover text-brand-black font-black py-3 px-6 rounded flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
            >
              <Phone size={18} strokeWidth={3} />
              <span>{COMPANY_PHONE}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-black hover:text-brand-brown transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-brand-black text-white absolute top-20 left-0 w-full border-t border-gray-800 shadow-2xl">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`text-lg font-bold py-2 border-b border-gray-800 hover:text-brand-brown hover:pl-2 transition-all ${isActive(link.path) ? 'text-brand-brown pl-2' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} 
                className="bg-brand-brown text-brand-black text-center py-4 rounded font-black mt-4 flex justify-center items-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Content Wrapper */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-20 pb-10 border-t-4 border-brand-brown">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                 <BrandLogo className="h-20 w-auto" inverted={true} />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Oregon's trusted septic service provider. Specialized in pumping, inspections, and advanced system installations. CCB# 257230 | DEQ# 39848
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-brown hover:text-brand-black transition-colors"><Facebook size={18} /></a>
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-brown hover:text-brand-black transition-colors"><Instagram size={18} /></a>
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-brown hover:text-brand-black transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-stencil text-xl mb-6 border-l-4 border-brand-brown pl-3 text-brand-brown tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white hover:underline transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-stencil text-xl mb-6 border-l-4 border-brand-brown pl-3 text-brand-brown tracking-wide">Our Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services/septic-pumping" className="text-gray-400 hover:text-white hover:underline transition-colors">Septic Pumping</Link></li>
                <li><Link to="/services/septic-inspections" className="text-gray-400 hover:text-white hover:underline transition-colors">Real Estate Inspections</Link></li>
                <li><Link to="/services/septic-repairs" className="text-gray-400 hover:text-white hover:underline transition-colors">System Repairs</Link></li>
                <li><Link to="/services/septic-installation" className="text-gray-400 hover:text-white hover:underline transition-colors">New Installation</Link></li>
                <li><Link to="/services/emergency-services" className="text-brand-brown font-bold hover:text-white transition-colors">Emergency Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-stencil text-xl mb-6 border-l-4 border-brand-brown pl-3 text-brand-brown tracking-wide">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="shrink-0 text-brand-brown" size={20} />
                  <span>P.O. Box 36<br />Junction City, OR 97448</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="shrink-0 text-brand-brown" size={20} />
                  <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="hover:text-white transition-colors">{COMPANY_PHONE}</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Clock className="shrink-0 text-brand-brown" size={20} />
                  <span>24/7 Service<br /><span className="text-xs text-brand-brown uppercase font-bold">Emergency Available</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Oregon Septic LLC. All rights reserved. CCB# 257230 | DEQ# 39848
            </p>
            <div className="flex items-center gap-4 text-sm font-bold">
              {/* Floating Owner Button - Bottom Left */}
              <Link 
                to="/admin" 
                className="fixed bottom-6 left-6 z-40 bg-gray-900 text-gray-500 p-3 rounded-full shadow-lg hover:bg-brand-brown hover:text-brand-black transition-all border-2 border-gray-700 hover:border-black opacity-80 hover:opacity-100"
                title="Owner Dashboard"
              >
                 <Lock size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;