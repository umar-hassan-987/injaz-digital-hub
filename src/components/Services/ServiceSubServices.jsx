import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ServiceSubServices = ({ service, theme = 'light' }) => {
  const isLight = theme === 'light';
  const subServices = service.subServices || [];

  if (subServices.length === 0) return null;

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden bg-white`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-accent/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Specializations</span>
          </div>
          <h2 className={`text-3xl lg:text-5xl font-bold font-display tracking-tight leading-tight text-gray-900`}>
            Granular <br />
            <span className="text-accent italic font-light">Expertise Areas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {subServices.map((sub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 lg:p-10 rounded-[40px] border transition-all duration-500 bg-gray-50 border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-2xl shadow-gray-200/50`}
            >
              <h3 className={`text-2xl font-bold font-display mb-6 text-gray-900`}>
                {sub.title}
              </h3>
              <p className={`text-base font-medium leading-relaxed mb-8 text-gray-600`}>
                {sub.description}
              </p>
              
              <ul className="space-y-4">
                {sub.points?.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-accent">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className={`text-sm font-bold tracking-tight text-gray-700`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSubServices;
