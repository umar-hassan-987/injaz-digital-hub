import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceProcess = ({ service, theme = 'dark' }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const processSteps = service.process || [];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="methodology" className={`py-24 lg:py-40 relative overflow-hidden bg-gray-50`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-accent/10`} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Header Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-accent/60" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                {t('serviceDetail.process.subtitle', 'Our Methodology')}
              </span>
            </div>
            <h2 className={`text-3xl lg:text-4xl font-bold font-display tracking-tight leading-[1.1] mb-8 text-gray-900`}>
              {t('serviceDetail.process.titlePart1', 'The Lifecycle')} <br />
              <span className="text-accent italic font-light">{t('serviceDetail.process.titleHighlight', 'of Excellence')}</span>
            </h2>
            <p className={`text-base lg:text-lg font-medium leading-relaxed max-w-md mb-10 text-gray-600`}>
              {t('serviceDetail.process.description', 'Our structured approach ensures precision at every stage, from initial concept validation to large-scale production deployment.')}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {service.techStack?.map((tech, i) => (
                <span key={i} className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest border transition-all duration-500 bg-white border-gray-100 text-gray-500 hover:border-accent/30 hover:text-accent`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Accordion Steps */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`group rounded-[28px] border transition-all duration-500 overflow-hidden ${
                    activeIndex === idx 
                      ? 'bg-white border-accent/40 shadow-2xl shadow-accent/5'
                      : 'bg-white/50 border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full flex items-center justify-between p-6 lg:p-8 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-2xl font-bold font-display ${
                        activeIndex === idx 
                          ? 'text-accent' 
                          : 'text-black/10'
                      }`}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className={`text-xl lg:text-2xl font-bold font-display tracking-tight transition-colors duration-500 ${
                        activeIndex === idx 
                          ? 'text-gray-900' 
                          : 'text-gray-400'
                      }`}>
                        {t(`servicesDetail.${service.slug}.process.${idx}.title`, step.title)}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      activeIndex === idx 
                        ? 'bg-accent border-accent text-white ' + (isRTL ? 'rotate-270' : 'rotate-90')
                        : 'border-black text-black opacity-20 ' + (isRTL ? 'rotate-180' : '')
                    }`}>
                      <ChevronRight size={16} strokeWidth={3} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className={`px-6 lg:px-8 pb-8 lg:pb-10 ${isRTL ? 'lg:pr-20 lg:pl-6' : 'lg:pl-20'}`}>
                          <p className={`text-base font-medium leading-relaxed max-w-xl text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {t(`servicesDetail.${service.slug}.process.${idx}.description`, step.description)}
                          </p>
                          {idx < processSteps.length - 1 && (
                            <button 
                              onClick={() => setActiveIndex(idx + 1)}
                              className={`mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:gap-4 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
                            >
                              <span>{t('serviceDetail.process.nextStage', 'Next Stage')}</span>
                              <ChevronRight size={12} strokeWidth={3} className={isRTL ? 'rotate-180' : ''} />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;