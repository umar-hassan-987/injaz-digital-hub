import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { companyInfo } from '../../data/commonData';

export default function CareersPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-gray-50 pt-32 pb-16 border-b border-gray-100">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#8B1A4A 1px, transparent 1px), linear-gradient(90deg, #8B1A4A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-accent/10" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 w-full relative z-10">
          <Link to="/company" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-accent transition-colors duration-300 mb-8">
            <ArrowLeft size={14} /> Back to Company
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] leading-[1.1] tracking-tight mb-6 text-gray-900"
          >
            <span className="font-light block">Join</span>
            <span className="font-bold">Our Team</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl font-light border-l-2 border-accent/20 pl-6 py-2"
          >
            We are always looking for exceptional talent to join our mission of building world-class digital products.
          </motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white min-h-[40vh]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-12 lg:p-16 shadow-xl shadow-gray-200/50"
          >
            <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Mail className="w-8 h-8 text-accent opacity-80" />
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold font-display text-gray-900 mb-4">
              No Current Openings
            </h2>
            
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto mb-8">
              We don't have any open positions at this exact moment. However, we are always on the lookout for brilliant engineers, designers, and strategists.
            </p>
            
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Feel free to send your resume and portfolio to <a href={`mailto:${companyInfo.email}`} className="text-accent font-semibold hover:underline">{companyInfo.email}</a>. We'll keep your profile on file and reach out when a matching role opens up!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
