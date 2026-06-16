"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

const ServiceFeatures = ({ service, theme = 'light' }) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const features = service.features || [];

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden bg-white`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-accent/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
              {t('serviceDetail.features.subtitle', 'Capabilities')}
            </span>
          </div>
          <h2 className={`text-3xl lg:text-5xl font-bold font-display tracking-tight leading-tight text-gray-900`}>
            {t('serviceDetail.features.titlePart1', 'Comprehensive')} <br />
            <span className="text-accent italic font-light">{t('serviceDetail.features.titleHighlight', 'Core Features')}</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${
          features.length === 4 
            ? 'lg:grid-cols-2 max-w-5xl mx-auto' 
            : 'lg:grid-cols-3'
        } gap-6 lg:gap-8`}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} slug={service.slug} t={t} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, idx, slug, t, isRTL }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className={`group relative p-8 rounded-[32px] border transition-all duration-500 bg-white border-gray-100 shadow-xl shadow-gray-200/40 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg bg-accent/5 text-accent`}>
        {Icon ? <Icon size={24} strokeWidth={1.5} /> : <div className="w-6 h-6 rounded-full border-2 border-accent" />}
      </div>
      
      <h3 className={`text-xl font-bold font-display tracking-tight mb-4 text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t(`servicesDetail.${slug}.features.${idx}.title`, feature.title)}
      </h3>
      
      <p className={`text-sm leading-relaxed font-medium text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t(`servicesDetail.${slug}.features.${idx}.description`, feature.description)}
      </p>

      {/* Decorative corner element */}
      <div className={`absolute top-0 end-0 w-16 h-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none`}>
        <div className="absolute top-8 end-8 w-1 h-1 rounded-full bg-accent animate-ping" />
      </div>
    </motion.div>
  );
};

export default ServiceFeatures;
