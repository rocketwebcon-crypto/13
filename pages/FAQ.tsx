import React from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO 
        title="Septic FAQ | Common Questions for Oregon Homeowners" 
        description="Answers to your top septic questions. How often to pump? What can I flush? Learn more from Oregon Septic." 
        canonicalUrl="/faq"
      />

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-heading font-black text-brand-black mb-10 text-center">Frequently Asked Questions</h1>
            
            <div className="space-y-4">
                {[
                    {
                        q: "How often should I pump my septic tank in Eugene?",
                        a: "For the average 3-bedroom home with a 1000-gallon tank, we recommend pumping every 3 to 5 years. However, if you have a garbage disposal or a large family, you may need it every 2-3 years."
                    },
                    {
                        q: "What are the signs that my septic system is full?",
                        a: "Slow drains, gurgling sounds in the plumbing, foul odors in the yard, or lush green patches of grass over the drain field are all common signs."
                    },
                    {
                        q: "Is Oregon Septic licensed for DEQ inspections?",
                        a: "Yes, we are fully certified to perform Existing System Evaluations (ESE) required for real estate transactions in Oregon."
                    },
                    {
                        q: "Can I use bleach in my septic system?",
                        a: "Small amounts are okay, but large quantities of bleach or harsh chemicals can kill the beneficial bacteria in your tank that break down solids. We recommend septic-safe cleaners."
                    }
                ].map((item, i) => (
                    <details key={i} className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 cursor-pointer open:ring-2 open:ring-brand-brown/20">
                        <summary className="flex justify-between items-center font-bold text-brand-black list-none">
                            {item.q}
                            <ChevronDown className="transform group-open:rotate-180 transition-transform text-brand-brown" />
                        </summary>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            {item.a}
                        </p>
                    </details>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;