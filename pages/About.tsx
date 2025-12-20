import React from 'react';
import { Shield, Users, Award } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Oregon Septic | Local Eugene Experts" 
        description="Learn about Oregon Septic, the trusted local team for septic services in Lane County. Dedicated to quality, honesty, and environmental stewardship." 
        canonicalUrl="/about"
      />

      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-heading font-black text-brand-black mb-8">Built on Hard Work & Integrity.</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    Oregon Septic isn't just a business; it's a commitment to the health and safety of our community. Based in Eugene, we saw a need for a septic service provider that combined modern technology with old-school customer service values.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 border border-gray-100 rounded-lg bg-gray-50">
                        <Shield className="mx-auto text-brand-brown mb-4" size={40} />
                        <h3 className="text-lg font-bold mb-2">Licensed & Bonded</h3>
                        <p className="text-sm text-gray-500">Fully compliant with Oregon DEQ and Lane County regulations.</p>
                    </div>
                    <div className="text-center p-6 border border-gray-100 rounded-lg bg-gray-50">
                        <Users className="mx-auto text-brand-brown mb-4" size={40} />
                        <h3 className="text-lg font-bold mb-2">Local Team</h3>
                        <p className="text-sm text-gray-500">We live here, we work here. We treat your property like our own.</p>
                    </div>
                    <div className="text-center p-6 border border-gray-100 rounded-lg bg-gray-50">
                        <Award className="mx-auto text-brand-brown mb-4" size={40} />
                        <h3 className="text-lg font-bold mb-2">Quality Guarantee</h3>
                        <p className="text-sm text-gray-500">We stand behind our repairs and installations 100%.</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-brand-black mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Our mission is to outperform the competition not just by having better trucks, but by having better answers. We believe in educating homeowners. When you understand how your septic system works, you can make better decisions that save you money in the long run.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Unlike "Best Septic" or other competitors who might rush a job, we take the time to inspect the details—checking filters, baffles, and drain field capability during every routine pump. This attention to detail is why we are becoming Eugene's preferred provider.
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;