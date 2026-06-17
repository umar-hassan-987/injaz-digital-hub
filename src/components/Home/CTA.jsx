"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../../i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

const CTA = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden relative z-10 rounded-b-[3rem] shadow-2xl">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-full pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-48 text-center relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50"
        >
          <span className="text-gray-400 font-medium tracking-tight text-sm italic">{t('ctaSection.subtitle')}</span>
        </motion.div>

        {/* Main Heading */}
        <div className="mb-14 overflow-hidden pb-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            {t('ctaSection.title')}
          </motion.h2>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <Link href="/contact"
            className="group relative bg-accent text-white px-8 py-4 rounded-full font-bold text-base overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20 inline-block"
          >
            {/* Hover Slide Effect */}
            <div className="absolute inset-0 bg-[#157F8E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <span className="relative z-10 flex items-center gap-3">
              {t('ctaSection.button')} <ArrowUpRight size={18} className={`transition-transform duration-500 ${isRTL ? '-scale-x-100 group-hover:-rotate-45' : 'group-hover:rotate-45'}`} />
            </span>
          </Link>
          
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            {t('ctaSection.estimatedResponse')} <span className="text-gray-900">{t('ctaSection.responseDuration')}</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
