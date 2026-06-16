import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, CheckCircle2, TrendingUp, BarChart3, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceWhyUs = ({ service, theme = 'dark' }) => {
  const { t } = useTranslation();
  const whyUs = service.whyUs || [];

  if (whyUs.length === 0) return null;

  // Mapping icons based on title keywords or index
  const getIcon = (idx, title) => {
    const tVal = title.toLowerCase();
    if (tVal.includes('security') || tVal.includes('shield') || tVal.includes('protection') || tVal.includes('hardened') || tVal.includes('ip')) return <Shield size={28} strokeWidth={1.5} />;
    if (tVal.includes('growth') || tVal.includes('roi') || tVal.includes('scaling') || tVal.includes('mentality')) return <TrendingUp size={28} strokeWidth={1.5} />;
    if (tVal.includes('transparency') || tVal.includes('dashboard') || tVal.includes('data') || tVal.includes('measurable')) return <BarChart3 size={28} strokeWidth={1.5} />;
    if (tVal.includes('global') || tVal.includes('edge') || tVal.includes('omni') || tVal.includes('market')) return <Globe size={28} strokeWidth={1.5} />;
    if (tVal.includes('user') || tVal.includes('audience') || tVal.includes('community') || tVal.includes('customer')) return <Users size={28} strokeWidth={1.5} />;
    if (tVal.includes('success') || tVal.includes('verified') || tVal.includes('quality') || tVal.includes('excellence')) return <CheckCircle2 size={28} strokeWidth={1.5} />;
    
    // Fallback based on index
    const fallbacks = [
      <Shield size={28} strokeWidth={1.5} />,
      <Zap size={28} strokeWidth={1.5} />,
      <Target size={28} strokeWidth={1.5} />,
      <Users size={28} strokeWidth={1.5} />
    ];
    return fallbacks[idx % 4];
  };

  return (
    <section className={`py-24 lg:py-40 relative overflow-hidden bg-gray-50`}>
       {/* Decorative Details */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
       
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-accent/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">
              {t('serviceDetail.whyUs.subtitle', 'Strategic Advantage')}
            </span>
            <div className="w-10 h-px bg-accent/30" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl lg:text-5xl font-bold font-display tracking-tight leading-[1.1] text-gray-900`}
          >
            {t('serviceDetail.whyUs.titlePart1', 'Why Partner with')} <br />
            <span className="text-accent italic font-light">{t('serviceDetail.whyUs.titleHighlight', 'INJAZ Digital Hub?')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {whyUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-10 rounded-[40px] border transition-all duration-700 h-full flex flex-col bg-white border-gray-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5`}
            >
              {/* Corner Accent */}
              <div className="absolute top-6 end-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg shadow-accent/5">
                {getIcon(idx, item.title)}
              </div>
              
              <h3 className={`text-xl font-bold font-display tracking-tight mb-4 text-gray-900`}>
                {t(`servicesDetail.${service.slug}.whyUs.${idx}.title`, item.title)}
              </h3>
              <p className={`text-sm font-medium leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors duration-500`}>
                {t(`servicesDetail.${service.slug}.whyUs.${idx}.description`, item.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyUs;
