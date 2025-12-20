
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import SchedulingWizard from '../components/SchedulingWizard';
import ServiceAreaMap from '../components/ServiceAreaMap';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../data';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Oregon Septic | Schedule Service" 
        description="Schedule your septic service online. Fast, easy appointment booking for pumping, inspections, and repairs in Oregon." 
        canonicalUrl="/contact"
      />

      <div className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-stencil text-brand-black mb-6 uppercase tracking-tight">Schedule Your Service</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                    Use our smart scheduling tool below to set up an appointment. For <span className="text-brand-black font-black underline decoration-brand-brown decoration-4">emergencies</span>, please call us immediately for priority dispatch.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20">
                
                {/* Contact Info Sidebar */}
                <div className="xl:col-span-1 order-2 xl:order-1 h-fit">
                    <div className="bg-brand-black text-white p-8 rounded-lg shadow-2xl sticky top-24 border-t-8 border-brand-brown overflow-hidden">
                        {/* Decorative Background Texture */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
                        
                        <h2 className="text-2xl font-stencil text-brand-brown mb-8 tracking-wide relative z-10">Contact Info</h2>
                        
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4 group">
                                <div className="bg-gray-800 p-3 rounded shrink-0 group-hover:bg-brand-brown group-hover:text-brand-black transition-colors border border-gray-700">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg uppercase tracking-wide">Emergency Line</h3>
                                    <p className="text-gray-400 mb-1 text-sm font-mono">24/7 Priority Support</p>
                                    <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="text-2xl font-black text-brand-brown hover:text-white transition drop-shadow-md">{COMPANY_PHONE}</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="bg-gray-800 p-3 rounded shrink-0 group-hover:bg-brand-brown group-hover:text-brand-black transition-colors border border-gray-700">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg uppercase tracking-wide">Email Us</h3>
                                    <p className="text-gray-400 mb-1 text-sm font-mono">Quotes & Compliance</p>
                                    <a href={`mailto:${COMPANY_EMAIL}`} className="text-lg hover:text-brand-brown transition break-all font-bold">{COMPANY_EMAIL}</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="bg-gray-800 p-3 rounded shrink-0 group-hover:bg-brand-brown group-hover:text-brand-black transition-colors border border-gray-700">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg uppercase tracking-wide">Mailing Address</h3>
                                    <p className="text-gray-400 text-sm font-medium leading-relaxed">{COMPANY_ADDRESS}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="bg-gray-800 p-3 rounded shrink-0 group-hover:bg-brand-brown group-hover:text-brand-black transition-colors border border-gray-700">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg uppercase tracking-wide">Business Hours</h3>
                                    <p className="text-gray-400 text-sm font-mono">Mon-Sun: 24/7</p>
                                    <p className="text-brand-brown font-black text-sm mt-1 uppercase bg-white/5 py-1 px-3 rounded inline-block">Always Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scheduling Wizard */}
                <div className="xl:col-span-2 order-1 xl:order-2">
                    <SchedulingWizard />
                </div>
            </div>

            {/* Interactive Service Area Map Section */}
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-stencil text-brand-black mb-4">Our Service Reach</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Western Oregon Coverage</p>
                </div>
                <ServiceAreaMap />
            </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 border-t-8 border-brand-black shadow-2xl overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-brown z-10"></div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184469.7554909895!2d-123.36449179093375!3d44.18439404285741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c0e39545464019%3A0xe542617f6946059d!2sJunction%20City%2C%20OR%2097448!5e0!3m2!1sen!2sus!4v1709240000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Oregon Septic Headquarters Location"
            className="filter contrast-125 saturate-50"
        ></iframe>
        <div className="absolute bottom-6 left-6 bg-brand-black text-white p-6 rounded shadow-2xl border-l-4 border-brand-brown hidden md:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <h4 className="font-stencil text-xl text-brand-brown mb-2 uppercase">Base of Operations</h4>
            <p className="text-sm text-gray-400 font-bold">{COMPANY_ADDRESS}</p>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Rapid response to Lane & Linn Counties</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
