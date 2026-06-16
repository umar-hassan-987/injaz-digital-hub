"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../../i18n/routing';
import { Shield, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const ServiceHero = ({ service, theme = 'dark', bgImage, bgImageDesktop, bgImageMobile }) => {
  const isLight = theme === 'light';
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  

  const desktopImg = bgImageDesktop || bgImage;
  const mobileImg = bgImageMobile || bgImage;

  const translatedTitle = t(`servicesDetail.${service.slug}.title`, service.title);

  return (
    <section className={`relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-white`}>
      {/* ═══ Background Layer ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {(desktopImg || mobileImg) && (
          <>
            {desktopImg && (
              <img 
                src={desktopImg?.src || desktopImg} 
                alt="" 
                className={`w-full h-full object-cover ${mobileImg ? 'hidden md:block' : ''}`}
              />
            )}
            {mobileImg && (
              <img 
                src={mobileImg?.src || mobileImg} 
                alt="" 
                className={`w-full h-full object-cover ${desktopImg ? 'block md:hidden' : ''}`}
              />
            )}
            {/* ═══ Elegant Logo Colored Overlay (Teal & Gold) ═══ */}
            <div className="absolute inset-0 z-10 bg-[#0F5F6A]/30 mix-blend-multiply" />
            <div className={`absolute inset-0 z-10 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#062A30]/95 via-[#0F5F6A]/60 to-[var(--color-gold)]/15`} />
            <div className="absolute inset-0 z-10 bg-black/10" />
          </>
        )}
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#0F5F6A 1px, transparent 1px), linear-gradient(90deg, #0F5F6A 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
             
        {/* Neural Elements (Teal Glow) */}
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-accent/10`} />

        {/* Gold Glow from logo */}
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 bg-[var(--color-gold)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 max-w-2xl relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-4xl sm:text-5xl md:text-6xl xl:text-[68px] leading-[1.1] tracking-tight mb-8 text-white`}
            >
              {translatedTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? 'font-light block' : 'font-bold'}>
                  {word}{i === 0 ? '' : ' '}
                </span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-10 text-white/90 border-s-2 border-white/20 ps-6 py-2`}
            >
              {t(`servicesDetail.${service.slug}.headline`, service.headline || service.description)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="px-8 py-4 rounded-full bg-accent text-white font-black text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 shadow-xl shadow-accent/20">
                {t('serviceDetail.hero.cta', 'Start a Project')}
              </Link>
              <button 
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 rounded-full border font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 border-white/40 text-white hover:bg-white hover:text-accent`}
              >
                {t('serviceDetail.hero.cta2', 'View Method')}
              </button>
            </motion.div>
          </div>

          {/* Stats Bar / Visual Accent */}
          <motion.div 
            initial={{ opacity: 1, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="lg:col-span-4 lg:col-start-9 relative mt-12 lg:mt-0 z-20"
          >
            <div className={`p-6 lg:p-8 rounded-[32px] border relative z-10 bg-white/5 backdrop-blur-md border-white/10 shadow-2xl`}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--color-gold)]">
                    {t('serviceDetail.hero.statsTitleHighlight', 'Proven Impact')}
                  </span>
                </div>
                <h3 className={`text-xl font-bold font-display tracking-tight text-white`}>
                  {t('serviceDetail.hero.statsTitle', 'Measurable Success')}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {service.stats?.map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex items-center gap-5">
                      <div className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-gold)] group-hover:scale-110 transition-transform duration-500">
                        {t(`servicesDetail.${service.slug}.stats.${idx}.number`, stat.number)}
                      </div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 text-white`}>
                          {t(`servicesDetail.${service.slug}.stats.${idx}.label`, stat.label)}
                        </div>
                        <div className={`text-[8px] font-bold uppercase tracking-wider opacity-60 text-white/60`}>
                          {t('serviceDetail.hero.verifiedResult', 'Verified Result')}
                        </div>
                      </div>
                    </div>
                    {idx < service.stats.length - 1 && (
                      <div className={`mt-6 h-[1px] w-full bg-white/10`} />
                    )}
                  </div>
                )) || (
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-gold)]">99%</div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 text-white`}>
                          {t('serviceDetail.hero.fallbackStat1Label', 'Success Rate')}
                        </div>
                        <div className="text-[8px] font-bold uppercase tracking-wider opacity-60 text-white/60">
                          {t('serviceDetail.hero.fallbackStat1Desc', 'Client Satisfaction')}
                        </div>
                      </div>
                    </div>
                    <div className={`h-[1px] w-full bg-white/10`} />
                    <div className="flex items-center gap-5">
                      <div className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-gold)]">100+</div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 text-white`}>
                          {t('serviceDetail.hero.fallbackStat2Label', 'Projects')}
                        </div>
                        <div className="text-[8px] font-bold uppercase tracking-wider opacity-60 text-white/60">
                          {t('serviceDetail.hero.fallbackStat2Desc', 'Delivered Globally')}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badge */}
              <div className={`mt-8 pt-8 border-t flex items-center gap-4 border-white/10`}>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] shadow-lg shadow-[var(--color-gold)]/5">
                  <Shield size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest text-white`}>
                    {t('serviceDetail.hero.trustBadgeTitle', 'Verified Expertise')}
                  </div>
                  <div className="text-[8px] font-bold text-white/60 uppercase tracking-wider mt-1">
                    {t('serviceDetail.hero.trustBadgeDesc', 'Industry Standard Certified Partner')}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated background rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-48 h-48 lg:w-64 lg:h-64 border border-accent/10 rounded-full pointer-events-none" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 lg:w-48 lg:h-48 border border-purple-500/10 rounded-full pointer-events-none" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
