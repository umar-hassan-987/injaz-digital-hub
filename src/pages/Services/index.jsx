import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services } from '../../data/homeData';
import { servicesDetail } from '../../data/servicesData';
import ServiceCTA from '../../components/Services/ServiceCTA';

import servicesImg from '../../assets/img/services.webp';

const ServicesPage = () => {
  // Group services by category from servicesDetail
  const allServices = Object.values(servicesDetail);
  const appDevServices = allServices.filter(s => s.category === 'Application Development');
  const advTechServices = allServices.filter(s => s.category === 'Advanced Tech');
  const designGrowthServices = allServices.filter(s => s.category === 'Design & Growth');

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-accent/20 selection:text-accent">
      {/* ═══ Hero Section (Premium Light) ═══ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-gray-50">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Re-added Image Background with light overlay */}
          <img 
            src={servicesImg} 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          {/* ═══ Elegant Qatari Corporate Overlay ═══ */}
          <div className="absolute inset-0 z-10 bg-[#0F5F6A]/30 mix-blend-multiply" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#062A30]/95 via-[#0F5F6A]/60 to-transparent" />
          <div className="absolute inset-0 z-10 bg-black/10" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#0F5F6A 1px, transparent 1px), linear-gradient(90deg, #0F5F6A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -mr-32 -mt-32" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
          <div className="max-w-5xl flex flex-col items-center sm:items-start text-center sm:text-left relative z-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-16 h-px bg-white/60"></div>
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
                Strategic Technical Partner
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: [0.2, 0, 0, 1] }} 
              className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] text-white leading-[1.1] tracking-tight mb-8"
            >
              <span className="font-light">We Engineer</span><br />
              <span className="font-bold">The Future</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: [0.2, 0, 0, 1] }} 
              className="flex flex-col sm:flex-row items-center sm:items-center gap-8 sm:gap-12"
            >
              <p className="text-base sm:text-lg md:text-[20px] text-white/90 leading-relaxed max-w-2xl font-light border-l-2 border-white/20 pl-6 py-2">
                From high-performance software to AI-driven ecosystems, we provide the engineering excellence required to scale global enterprises.
              </p>
              
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="hidden sm:block w-[1px] h-12 bg-white/20" />
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-white font-bold text-3xl sm:text-4xl leading-none">100+</span>
                  <span className="text-white/60 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-2 sm:mt-3">Solutions Deployed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Section 1: Application Development ═══ */}
      <section className="relative min-h-[70vh] flex flex-col justify-center py-20 lg:py-24 overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0F5F6A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-[1px] bg-accent/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">01. Core Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display tracking-tight">
              Application <br />
              <span className="text-accent italic font-light">Development</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {appDevServices.map((service, idx) => (
              <ServiceGridCard key={idx} service={service} idx={idx} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section 2: Advanced Tech ═══ */}
      <section className="relative min-h-[70vh] flex flex-col justify-center py-20 lg:py-24 overflow-hidden bg-gray-50 border-y border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
          <div className="mb-10 sm:mb-14 text-left">
            <div className="flex items-center justify-start gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-[1px] bg-accent/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">02. Next-Gen Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display tracking-tight">
              Advanced <br />
              <span className="text-accent italic font-light">Tech Systems</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {advTechServices.map((service, idx) => (
              <ServiceGridCard key={idx} service={service} idx={idx} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section 3: Design & Growth ═══ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#0F5F6A 1px, transparent 1px), linear-gradient(90deg, #0F5F6A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-[1px] bg-accent/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">03. Scalable Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-display tracking-tight">
              Design & <br />
              <span className="text-accent italic font-light">Strategic Growth</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {designGrowthServices.map((service, idx) => (
              <ServiceGridCard key={idx} service={service} idx={idx} theme="light" />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA variant="banner" theme="light" />
    </div>
  );
};

const ServiceGridCard = ({ service, idx, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className={`group relative p-6 sm:p-8 lg:p-10 rounded-[40px] transition-all duration-700 border ${
        isLight
          ? 'bg-gray-50 border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-xl'
          : 'bg-white/5 border-white/5 hover:border-accent/40 hover:bg-white/10'
      }`}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 shadow-xl bg-accent/10 text-accent">
        <service.icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold font-display tracking-tight mb-4 leading-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
        {service.title}
      </h3>
      <p className={`text-[14px] leading-relaxed mb-8 font-medium transition-colors ${isLight ? 'text-gray-500 group-hover:text-gray-600' : 'text-gray-400 group-hover:text-gray-300'}`}>
        {service.description}
      </p>
      <Link 
        to={`/services/${service.slug}`} 
        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent group-hover:gap-4 transition-all duration-500"
      >
        View Detail <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
};

const ServiceWideCard = ({ service, idx, theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group flex flex-col sm:flex-row items-center sm:items-start gap-8 p-6 sm:p-8 lg:p-12 rounded-[40px] border transition-all duration-700 ${
        isLight
          ? 'bg-gray-50 border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-xl'
          : 'bg-black border-white/5 hover:border-accent/30 hover:bg-white/5'
      }`}
    >
      <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-accent/10 text-accent shadow-xl transition-transform duration-700 group-hover:scale-110">
        <service.icon size={32} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight mb-4 uppercase leading-none ${isLight ? 'text-gray-900' : 'text-white'}`}>
          {service.title}
        </h3>
        <p className={`text-base leading-relaxed mb-8 font-medium transition-colors ${isLight ? 'text-gray-500 group-hover:text-gray-600' : 'text-gray-400 group-hover:text-gray-300'}`}>
          {service.description}
        </p>
        <Link to={`/services/${service.slug}`} className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-accent transition-all duration-500 shadow-xl shadow-accent/10 w-fit">
          Explore Solution <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
