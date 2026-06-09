import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../data/homeData';

const Services = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa] overflow-hidden relative">
      {/* Subtle Corporate Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10">
        
        {/* ═══ Elegant Section Header ═══ */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#8A1538]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A1538]">Our Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
              <span className="font-light">Comprehensive</span><br />
              <span className="font-bold">Digital Solutions</span>
            </h2>
          </div>
          <div>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-900 px-8 py-4 font-semibold text-xs uppercase tracking-widest transition-all hover:bg-[#8A1538] hover:text-white hover:border-[#8A1538] shadow-sm"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>

        {/* ═══ Sleek Corporate Grid ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              service={service} 
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Elegant Service Card Component ─── */
const slugMap = {
  'Web Development': 'web-development',
  'Mobile App Development': 'mobile-apps',
  'Custom Software': 'custom-software',
  'Cloud Solutions': 'cloud-devops',
  'AI Workflow Automations': 'ai-automation',
  'Digital Marketing': 'digital-marketing',
  'UI/UX Design': 'ui-ux-design',
  'Search Engine Optimization': 'seo',
};

const ServiceCard = ({ service, idx }) => {
  const slug = slugMap[service.title] || 'web-development';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group"
    >
      <Link to={`/services/${slug}`} className="block h-full relative">
        {/* Subtle hover accent line at the top */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#8A1538] transition-colors duration-300 z-10" />
        
        <div className="bg-white p-8 lg:p-10 h-full transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col relative z-0">
          
          <div className="flex items-start justify-between mb-10">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-50 text-[#8A1538] transition-all duration-500 group-hover:bg-[#8A1538] group-hover:text-white border border-gray-100 group-hover:border-transparent">
              <service.icon size={26} strokeWidth={1.5} />
            </div>
            <ArrowRight size={22} className="text-gray-300 -rotate-45 group-hover:rotate-0 group-hover:text-[#8A1538] transition-all duration-300" />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 transition-colors leading-tight">
            {service.title}
          </h3>
          
          <p className="text-gray-500 leading-relaxed text-sm font-light flex-grow">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Services;
