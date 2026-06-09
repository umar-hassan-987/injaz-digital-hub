import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ContactForm from '../common/ContactForm';

const ServiceCTA = ({ variant = 'banner', theme = 'light' }) => {
  const isLight = theme === 'light';

  if (variant === 'form') {
    return (
      <section className={`py-24 lg:py-32 relative overflow-hidden bg-white`}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-accent/60" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Collaboration</span>
              </div>
              <h2 className={`text-4xl lg:text-6xl font-bold font-display tracking-tight leading-tight mb-8 text-gray-900`}>
                Ready to Start Your <br />
                <span className="text-accent italic font-light">Digital Journey?</span>
              </h2>
              <p className={`text-lg font-medium leading-relaxed max-w-lg mb-12 text-gray-600`}>
                Our technical strategists are ready to help you architect and deploy your next major innovation. Let's discuss your requirements.
              </p>
              
              <div className="space-y-6">
                {['Scalable Architecture', 'AI Integration', 'Cloud Native Support'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <ArrowRight size={14} />
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase opacity-80 text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 lg:p-12 rounded-[40px] border flex flex-col justify-center bg-gray-50 border-gray-100 shadow-xl`}>
              <h3 className={`text-2xl font-bold font-display tracking-tight mb-4 text-gray-900`}>
                Let's Build Something Extraordinary
              </h3>
              <p className={`text-base leading-relaxed mb-8 text-gray-600`}>
                Our technical strategists review every request personally. Tell us about your project, and we'll get back to you within 24 hours with a realistic plan.
              </p>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-accent text-white font-bold text-[11px] uppercase tracking-[0.25em] transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(139,26,74,0.2)] hover:shadow-[0_0_60px_rgba(139,26,74,0.4)] w-full sm:w-auto"
              >
                Start Your Project
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background neural visuals */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      </section>
    );
  }

  // Default 'banner' variant
  return (
    <section className="relative bg-[#8A1538] py-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A1538] via-[#6a0f29] to-[#4a0b1e] opacity-90" />
        
        {/* Animated Grid lines */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-6 py-2 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8 sm:mb-12">
            Global Partnership
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tighter text-white uppercase leading-[0.9] mb-8 sm:mb-12">
            Transforming <br />
            <span className="italic font-light">Ideas into Impact</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-16">
            <Link to="/contact" className="group relative px-8 sm:px-12 py-4 sm:py-6 rounded-full bg-white text-[#8A1538] font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:scale-105 shadow-xl w-full sm:w-auto">
              Contact Our Experts
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;