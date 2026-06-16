import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/numbers';

import heroVideo from '../../assets/videos/hero-bg.webm';

const Hero = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    // 1. Trigger text animations after browser has settled to avoid 'jumping'
    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 300);

    return () => {
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      
      {/* ═══ Full Screen Video Background ═══ */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
      </div>

      {/* ═══ Elegant Qatari Corporate Overlay ═══ */}
      {/* Clean gradient provides perfect text readability while letting the video shine */}
      <div className="absolute inset-0 z-10 bg-[#0F5F6A]/30 mix-blend-multiply" />
      <div className={`absolute inset-0 z-10 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#062A30]/95 via-[#0F5F6A]/60 to-transparent`} />
      <div className="absolute inset-0 z-10 bg-black/10" />
      
      {/* ═══ Content Container ═══ */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 w-full pt-32 pb-24 flex flex-col justify-center h-full">
        
        <div className="max-w-4xl mt-12">
          <m.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 30 : -30 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Elegant Decorative Line */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-px bg-white/60"></div>
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
                {t('hero.subtitle1', 'Pioneering the Future')}
              </span>
            </div>
            
            {/* Refined Typography (Mixing Weights for elegance) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] text-white leading-[1.1] tracking-tight mb-8">
              <span className="font-bold">{t('hero.title1', 'Empowering')}</span><br />
              <span className="text-[var(--color-gold)] italic font-light pe-2">{t('hero.title2', 'Global Enterprises')}</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-[20px] text-white/90 mb-12 leading-relaxed font-light max-w-2xl border-s-2 border-white/20 ps-6 py-2">
              {t('hero.description')}
            </p>
            
            {/* Sophisticated Corporate CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-white text-[#0F5F6A] px-10 py-4 font-bold text-sm uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.consultBtn', 'Consult With Us')} <ArrowUpRight size={18} strokeWidth={2.5} className={isRTL ? 'transform -scale-x-100' : ''} />
                </span>
              </Link>
              
              <Link 
                to="/services" 
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-transparent text-white border border-white/40 px-10 py-4 font-semibold text-sm uppercase tracking-widest transition-all hover:bg-white hover:text-[#0F5F6A]"
              >
                <span className="flex items-center gap-2">
                  {t('hero.exploreBtn', 'Explore Services')}
                </span>
              </Link>
            </div>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 end-6 sm:end-10 lg:end-16 xl:end-24 flex gap-12 hidden md:flex text-end"
        >
          <div>
            <p className="text-3xl font-bold text-white mb-1">{formatNumber('100', i18n.language)}<span className="font-light text-white/70">+</span></p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{t('hero.clients')}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">{formatNumber('24/7', i18n.language)}</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{t('hero.support')}</p>
          </div>
        </m.div>

      </div>
    </section>
  );
};

export default Hero;