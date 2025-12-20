import { Truck, Search, Wrench, Hammer, AlertTriangle, Droplets } from 'lucide-react';
import { ServiceInfo, BlogPost, Testimonial } from './types';

export const COMPANY_PHONE = "541-510-4530";
export const COMPANY_EMAIL = "office@oregonseptic.co";
export const COMPANY_ADDRESS = "P.O. Box 36, Junction City, OR 97448";
export const LOGO_URL = "/logo.png";

export const servicesData: ServiceInfo[] = [
  {
    id: 'pumping',
    slug: 'septic-pumping',
    title: 'Septic Pumping',
    icon: Truck,
    shortDescription: 'Comprehensive pumping and cleaning services to keep your system healthy and prevent backups.',
    seoTitle: 'Septic Pumping Eugene OR | Best Tank Cleaning Service',
    seoDescription: 'Professional septic pumping in Eugene & Springfield. Prevent costly repairs with our routine tank cleaning. Schedule your service today!',
    fullDescription: 'Routine septic pumping is the single most important maintenance task for your home’s waste management system. Neglecting your tank leads to sludge buildup, drain field failure, and expensive backups. At Oregon Septic, we provide thorough pumping, cleaning, and waste removal services.',
    benefits: [
      'Prevents solid sludge from entering the drain field',
      'Extends the lifespan of your septic system',
      'Identifies potential issues before they become disasters',
      'Compliance with Lane County health regulations'
    ],
    processSteps: [
      { title: 'Locate & Uncover', description: 'We quickly locate your tank lids, minimizing disruption to your landscape.' },
      { title: 'Agitate & Pump', description: 'We use high-powered vacuum trucks to remove all liquids and solids.' },
      { title: 'Filter Cleaning', description: 'We clean the effluent filter to ensure smooth flow to the drain field.' },
      { title: 'Visual Inspection', description: 'While empty, we check the tank structure for cracks or leaks.' }
    ]
  },
  {
    id: 'inspections',
    slug: 'septic-inspections',
    title: 'Septic Tank Inspections',
    icon: Search,
    shortDescription: 'Official DEQ-certified inspections for real estate transactions and routine maintenance checks.',
    seoTitle: 'Septic Inspections Eugene | DEQ Certified Real Estate Testing',
    seoDescription: 'Need a septic inspection for buying or selling a home in Eugene? Our certified inspectors provide detailed reports and stress testing.',
    fullDescription: 'Whether you are buying a new home in Eugene or selling your property in Springfield, a comprehensive septic inspection is crucial. We offer DEQ-certified inspections that satisfy real estate requirements and give you peace of mind.',
    benefits: [
      'Required for most real estate transactions in Oregon',
      'Detects hidden structural damage or root intrusion',
      'Verifies proper drain field absorption',
      'Provides official documentation for county records'
    ],
    processSteps: [
      { title: 'Hydraulic Load Test', description: 'We introduce water to test the system’s ability to absorb liquid.' },
      { title: 'Tank Integrity Check', description: 'We inspect the tank for corrosion, cracks, and baffle condition.' },
      { title: 'Drain Field Analysis', description: 'We probe the leach field to check for saturation or biomat buildup.' },
      { title: 'Detailed Report', description: 'You receive a comprehensive digital report with photos and findings.' }
    ]
  },
  {
    id: 'installation',
    slug: 'septic-installation',
    title: 'Septic System Installation',
    icon: Hammer,
    shortDescription: 'Design and installation of new standard and advanced treatment septic systems.',
    seoTitle: 'Septic Installation Eugene Oregon | New System Design',
    seoDescription: 'Expert septic system installation in Lane County. From site evaluation to final excavation, we handle your new septic project.',
    fullDescription: 'Building a new home or replacing a failed system? Oregon Septic specializes in the design and installation of both gravity-fed and complex alternative septic systems. We navigate the permitting process with Lane County so you don’t have to.',
    benefits: [
      'Custom designs tailored to your soil type and topography',
      'Full permitting and compliance management',
      'Expert excavation with minimal site impact',
      'Warranty on all new installations'
    ],
    processSteps: [
      { title: 'Site Evaluation', description: 'Soil analysis and test pits to determine the best system type.' },
      { title: 'Design & Permitting', description: 'We create engineering plans and submit them to the county.' },
      { title: 'Excavation', description: 'Precision digging for the tank and drain field lines.' },
      { title: 'Final Grading', description: 'We cover the system and grade the land for proper drainage.' }
    ]
  },
  {
    id: 'repairs',
    slug: 'septic-repairs',
    title: 'Septic System Repairs',
    icon: Wrench,
    shortDescription: 'Fixing broken baffles, risers, distribution boxes, and pipe leaks efficiently.',
    seoTitle: 'Septic Repair Services Eugene | Fix Broken Pipes & Tanks',
    seoDescription: 'Affordable septic repairs in Eugene, OR. We fix broken baffles, crushed pipes, and distribution boxes. Fast, reliable service.',
    fullDescription: 'Small septic issues can turn into major headaches if ignored. From broken outlet baffles to crushed pipes, our team has the parts and expertise to repair your system quickly, restoring function and preventing environmental contamination.',
    benefits: [
      'Cost-effective alternatives to full system replacement',
      'Repairs for risers, lids, and distribution boxes',
      'Correction of negative grade issues',
      'Hydro-jetting for clogged lines'
    ],
    processSteps: [
      { title: 'Diagnosis', description: 'Camera inspection to locate the exact break or blockage.' },
      { title: 'Repair Strategy', description: 'We propose the most durable and cost-effective fix.' },
      { title: 'Execution', description: 'Swift repair work using high-schedule PVC and quality components.' },
      { title: 'Flow Test', description: 'Verifying the repair holds under normal water usage.' }
    ]
  },
  {
    id: 'drainfield',
    slug: 'drain-field-repair',
    title: 'Drain Field Repair',
    icon: Droplets,
    shortDescription: 'Revitalize failing leach fields with terralifting and biomat remediation.',
    seoTitle: 'Drain Field Repair Eugene | Leach Field Restoration',
    seoDescription: 'Failing drain field? Don’t replace it yet. Our Eugene drain field repair services can restore soil absorption and save you thousands.',
    fullDescription: 'The drain field is the most expensive part of your septic system. If you notice soggy grass or sewage odors in your yard, your field may be failing. We offer remediation techniques that can restore soil porosity and extend the life of your field.',
    benefits: [
      'Saves thousands compared to full replacement',
      'Resolves "wet spots" in the yard',
      'Improves soil aeration and absorption',
      'Eco-friendly biological treatments available'
    ],
    processSteps: [
      { title: 'Assessment', description: 'Determining if the field is saturated or physically blocked.' },
      { title: 'Jetting', description: 'High-pressure cleaning of lateral lines to remove sludge.' },
      { title: 'Aeration', description: 'Fracturing the soil to allow oxygen to return and break down biomat.' },
      { title: 'Monitoring', description: 'Ensuring the field dries out and resumes normal function.' }
    ]
  },
  {
    id: 'emergency',
    slug: 'emergency-services',
    title: 'Emergency Septic Services',
    icon: AlertTriangle,
    shortDescription: '24/7 rapid response for backups, alarms, and overflow emergencies.',
    seoTitle: 'Emergency Septic Service Eugene | 24/7 Repair & Pumping',
    seoDescription: 'Septic emergency in Eugene? We offer 24/7 rapid response for backups and alarms. Call Oregon Septic immediately!',
    fullDescription: 'Septic disasters don’t wait for business hours. When sewage is backing up into your home or your alarm starts screaming at 2 AM, Oregon Septic is ready. We prioritize emergency calls to protect your family’s health and property.',
    benefits: [
      'Available 24 hours a day, 7 days a week',
      'Priority dispatch for active backups',
      'Temporary holding tank solutions if repairs must wait',
      'Peace of mind when you need it most'
    ],
    processSteps: [
      { title: 'Rapid Dispatch', description: 'Our on-call technician heads to your location immediately.' },
      { title: 'Containment', description: 'Stopping the overflow to prevent further damage.' },
      { title: 'Emergency Pump', description: 'Removing waste to relieve system pressure.' },
      { title: 'Resolution', description: 'Fixing the immediate cause or stabilizing until major repairs can be done.' }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "South Eugene",
    text: "Oregon Septic saved us on a Sunday night when our system backed up. The technician was professional, calm, and fixed the issue quickly. Highly recommend!",
    stars: 5
  },
  {
    id: 2,
    name: "Mike Kowalski",
    location: "Springfield",
    text: "Best pricing in town for pumping, but the service was premium. They even educated me on how to maintain my filter. True professionals.",
    stars: 5
  },
  {
    id: 3,
    name: "The Thompson Family",
    location: "Veneta",
    text: "We used them for a DEQ inspection on a house we were buying. Their detailed report actually saved us $5,000 in negotiations. Thorough and honest.",
    stars: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'signs-of-failing-septic',
    title: "5 Warning Signs Your Septic System is Failing",
    date: "October 15, 2023",
    category: "Maintenance",
    imageUrl: "https://images.unsplash.com/photo-1558904541-acf175384fce?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "Learn to spot the early indicators of septic failure before it becomes a costly emergency.",
    content: `
      <p class="mb-6 leading-relaxed">Your septic system is an underground wastewater treatment structure that is easy to forget about—until something goes wrong. Catching issues early can save you tens of thousands of dollars in replacement costs. Here are the top 5 signs your system needs immediate attention.</p>
      
      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">1. Slow Drains and Gurgling Pipes</h3>
      <p class="mb-6 leading-relaxed">If your kitchen sink is draining slowly or you hear a "glug-glug" sound when you flush the toilet, your tank might be full, or a pipe could be blocked. Do not use chemical drain cleaners! These kill the good bacteria in your tank that are essential for breaking down waste.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">2. Foul Odors Outside</h3>
      <p class="mb-6 leading-relaxed">If you smell sewage near your drain field or tank lids, it’s a clear sign of a leak or overflow. This isn't just a nuisance; it's a health hazard. The gases escaping your tank include methane and hydrogen sulfide, which can be dangerous in high concentrations.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">3. Lush Green Grass</h3>
      <p class="mb-6 leading-relaxed">Is there a patch of grass in your yard that is greener and taller than the rest? While it might look nice, it usually means your drain field is leaking nutrient-rich wastewater near the surface. This indicates your system is struggling to process the waste and failing to filter it correctly before it reaches the soil.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">4. Water Backing Up</h3>
      <p class="mb-6 leading-relaxed">The worst-case scenario is sewage backing up into your bathtub or basement floor drain. This is an absolute emergency. Stop water usage immediately and call Oregon Septic. This usually means the tank is overfilled or the line to the house is completely obstructed.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">5. High Nitrate Levels in Well Water</h3>
      <p class="mb-6 leading-relaxed">If you rely on well water, test it regularly. Leaking septic systems can contaminate groundwater with nitrates and bacteria. If your water tests reveal contamination, your septic system is a prime suspect.</p>

      <div class="bg-gray-100 p-6 border-l-4 border-brand-brown rounded-r-lg mt-8">
        <p class="font-bold text-gray-800">Don't wait for a disaster. If you notice any of these signs, schedule an inspection today to assess the health of your system.</p>
      </div>
    `
  },
  {
    id: '4',
    slug: 'oregon-winter-septic-prep',
    title: "Preparing Your Septic System for Oregon’s Rainy Winter",
    date: "November 14, 2023",
    category: "Seasonal",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb75bb44?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "The Willamette Valley winter can be brutal on septic systems. Learn how to manage heavy runoff and prevent flooding.",
    content: `
      <p class="mb-6 leading-relaxed">As the autumn leaves fall and the famous Oregon rain returns, homeowners in Eugene and Springfield need to start thinking about their septic health. Heavy rainfall can saturate the soil around your drain field, making it difficult for the system to process wastewater.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Divert Surface Water</h3>
      <p class="mb-6 leading-relaxed">The biggest threat during a wet Oregon winter is surface water runoff. Ensure that gutters, downspouts, and landscape drainage are directed AWAY from your septic tank and drain field. If your drain field becomes flooded with rainwater, it cannot absorb your household's sewage.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Don't Compact the Soil</h3>
      <p class="mb-6 leading-relaxed">When the ground is wet, it's much easier to compact the soil. Never drive over your drain field, especially during the rainy season. Compaction crushes the aerobic pathways in the soil, effectively killing your leach field's ability to "breathe" and process waste.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Spread Out Your Water Usage</h3>
      <p class="mb-6 leading-relaxed">If the ground is already saturated from rain, try to avoid "laundry days" where you run 5 loads in a row. This "hydraulic loading" can push solids out of the tank and into the drain field because the water has nowhere else to go quickly.</p>
    `
  },
  {
    id: '7',
    slug: 'septic-systems-and-the-environment',
    title: "Environmental Stewardship: How Your Septic System Protects Oregon’s Water",
    date: "December 20, 2023",
    category: "Eco-Friendly",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "Your septic system is a miniature water treatment plant. Discover how it helps preserve our local ecosystems.",
    content: `
      <p class="mb-6 leading-relaxed">Oregonians are proud of our pristine rivers and lush landscapes. If you live in a rural or semi-rural part of Lane County, your septic system plays a frontline role in keeping our groundwater clean. It's not just a disposal method; it's a sophisticated biological treatment plant.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Natural Filtration at Work</h3>
      <p class="mb-6 leading-relaxed">A well-maintained septic system mimics the natural water cycle. The soil in your drain field acts as a biological filter, removing harmful bacteria, viruses, and excessive nutrients before the water rejoins the groundwater table. When you maintain your system, you are directly protecting the Willamette River and its tributaries.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">The Danger of Nitrogen</h3>
      <p class="mb-6 leading-relaxed">Traditional wastewater treatment can struggle with nitrates. In a healthy septic system, the anaerobic bacteria in the tank and aerobic bacteria in the soil work together to break down nitrogen compounds. Excessive nitrogen in groundwater can lead to algae blooms in our local ponds and lakes, which harm fish and wildlife.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">How You Can Help</h3>
      <p class="mb-6 leading-relaxed">Use phosphorus-free detergents and avoid excessive use of antibacterial soaps. These products disrupt the delicate balance of microorganisms that are doing the hard work of cleaning your water. By being a mindful homeowner, you're an environmental hero.</p>
    `
  },
  {
    id: '2',
    slug: 'how-often-to-pump',
    title: "How Often Should You Really Pump Your Tank in Oregon?",
    date: "January 2, 2024",
    category: "Advice",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "Rainfall and household size matter. Here is the definitive guide for Eugene homeowners.",
    content: `
      <p class="mb-6 leading-relaxed">A common question we get is, "Do I really need to pump my tank every 3 years?" The answer depends on several factors, including your household size, tank size, and usage habits. However, in Oregon's rainy climate, regular maintenance is even more critical due to ground saturation levels.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">The General Rule of Thumb</h3>
      <p class="mb-6 leading-relaxed">For the average 3-bedroom home with a 1,000-gallon tank and a family of four, we recommend pumping every <strong>3 to 5 years</strong>. This ensures that the solid sludge layer at the bottom of the tank never rises high enough to block the outlet baffle or flow into the drain field.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Factors That Increase Frequency</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Garbage Disposal Usage:</strong> Using a disposal increases the amount of solid waste entering the tank by up to 50%. If you use one heavily, you should pump every 2-3 years.</li>
        <li><strong>Large Families:</strong> More people equals more water usage and more waste. If you have 5 or more people in a standard home, frequency increases.</li>
        <li><strong>Older Systems:</strong> Systems installed before 1990 may have smaller tanks or less efficient drain fields that require more frequent monitoring.</li>
      </ul>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">The Importance of Effluent Filters</h3>
      <p class="mb-6 leading-relaxed">Modern tanks have an effluent filter on the outlet baffle. This filter acts as a last line of defense, preventing solids from leaving the tank and clogging your drain field. This filter needs to be cleaned every time you pump the tank—and sometimes in between pumps if you have high usage. A clogged filter can cause a backup even if the tank isn't full of sludge.</p>
    `
  },
  {
    id: '8',
    slug: 'understanding-att-systems-oregon',
    title: "Understanding Advanced Treatment Technologies (ATT) in Lane County",
    date: "January 15, 2024",
    category: "Technical",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "What is an ATT system and why does the DEQ require them for certain properties?",
    content: `
      <p class="mb-6 leading-relaxed">If you're building on a lot with poor soil or limited space, standard gravity systems might not be an option. Enter Advanced Treatment Technologies (ATT). These systems are becoming more common in Lane County as developers push into more challenging terrain.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">What is an ATT?</h3>
      <p class="mb-6 leading-relaxed">Unlike a standard tank that relies mostly on settling, an ATT system actively treats wastewater to a much higher standard before it even reaches the drain field. This is often done through aeration or specific media filters (like sand or textile). The resulting effluent is significantly cleaner, which is why the DEQ allows smaller drain fields for these systems.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Annual Maintenance Requirements</h3>
      <p class="mb-6 leading-relaxed">One critical thing Oregon homeowners should know: ATT systems <strong>require</strong> an annual maintenance contract by law. Because these systems have mechanical parts and electrical components, they must be inspected by a certified professional once a year to ensure they are meeting discharge standards.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Is it worth it?</h3>
      <p class="mb-6 leading-relaxed">While more expensive to install and maintain, an ATT system can make a "non-buildable" lot buildable. It also offers the highest level of protection for sensitive environments. If you're looking at property in the Coast Fork or McKenzie River areas, you'll likely encounter these advanced systems.</p>
    `
  },
  {
    id: '5',
    slug: 'landscaping-septic-drain-field',
    title: "Landscaping Your Drain Field: The Do’s and Don’ts",
    date: "January 25, 2024",
    category: "Home Improvement",
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "Planning a garden? Be careful where you plant. Deep roots are the #1 enemy of septic pipes.",
    content: `
      <p class="mb-6 leading-relaxed">You have a big open space over your drain field, and it’s tempting to put it to use. But before you plant those trees or build that garden shed, you need to understand the structural requirements of your leach field.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">DO: Plant Grass and Shallow-Rooted Plants</h3>
      <p class="mb-6 leading-relaxed">The best cover for a drain field is lawn grass. It prevents erosion and helps remove excess moisture through evapotranspiration. Shallow-rooted perennials and flowers are also generally safe.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">DON'T: Plant Trees or Large Shrubs Nearby</h3>
      <p class="mb-6 leading-relaxed">Tree roots are designed to seek out moisture and nutrients—and your septic pipes are full of both. We recommend keeping trees at least as many feet away from the field as the tree will be tall at maturity. Willow, poplar, and elm trees are particularly aggressive and should be avoided entirely near septic systems.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">DON'T: Build Structures or Pave Over the Field</h3>
      <p class="mb-6 leading-relaxed">Your drain field needs oxygen to process waste efficiently. Covering it with a shed, a patio, or a driveway cuts off the oxygen supply and compacts the soil. Additionally, if the system ever needs repair, you will have to tear up whatever you built over it.</p>
    `
  },
  {
    id: '3',
    slug: 'septic-safe-products',
    title: "The Ultimate List of Septic-Safe Household Products",
    date: "February 2, 2024",
    category: "Guides",
    imageUrl: "https://images.unsplash.com/photo-1584622024886-a23f7f0805ba?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "Stop killing your tank's good bacteria. See which cleaners are safe to use.",
    content: `
      <p class="mb-6 leading-relaxed">Your septic tank is not just a holding container; it is a living ecosystem. Bacteria work 24/7 to break down solids into sludge and scum. When you pour harsh chemicals down the drain, you kill these bacteria, causing solids to build up rapidly and flow into your drain field. Here is what to avoid.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">The "Never Flush" List</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Bleach:</strong> Small amounts (like in a load of whites) are okay, but never pour straight bleach down the sink. It sterilizes the tank.</li>
        <li><strong>Drain Cleaners:</strong> Use a physical snake or auger for clogs instead.</li>
        <li><strong>"Flushable" Wipes:</strong> They are NOT flushable. They do not break down like toilet paper and will form a mat that clogs your baffles.</li>
      </ul>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Septic-Safe Alternatives</h3>
      <p class="mb-6 leading-relaxed">Look for the "Septic Safe" label on products. Natural cleaners like vinegar and baking soda are your tank's best friends!</p>
    `
  },
  {
    id: '6',
    slug: 'home-buyer-septic-guide',
    title: "Buying a Home with a Septic System? Read This First.",
    date: "February 12, 2024",
    category: "Real Estate",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format,compress&fm=webp&q=80&w=1200&fit=crop",
    excerpt: "A septic system is a major asset (or liability). Here is your Lane County home buyer’s checklist.",
    content: `
      <p class="mb-6 leading-relaxed">Buying a home in the country often means dealing with a septic system for the first time. Unlike city sewer, YOU are responsible for your own waste treatment. Here is how to ensure you aren't buying a $20,000 problem.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Demand an Existing System Evaluation</h3>
      <p class="mb-6 leading-relaxed">In Oregon, real estate septic inspections (ESE) are highly standardized. Make sure the seller provides a recent DEQ-certified inspection report. This report will tell you the size of the tank, the type of system, and its current operating condition.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Look at the Permitted vs. Actual Use</h3>
      <p class="mb-6 leading-relaxed">Check the county records. If a house is permitted for a 2-bedroom septic system but has 4 bedrooms, the system is chronically overloaded. This is a common issue with unpermitted additions and can lead to premature system failure.</p>

      <h3 class="text-2xl font-bold text-brand-black mt-8 mb-4 font-heading">Ask for Maintenance Records</h3>
      <p class="mb-6 leading-relaxed">A responsible homeowner will have receipts from their last pump-out. If they can't tell you the last time it was pumped, assume it's overdue and factor a pump and inspection into your closing costs.</p>
    `
  }
];