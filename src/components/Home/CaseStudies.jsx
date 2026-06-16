import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { caseStudies, stats } from '../../data/homeData';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/numbers';

// Import case study images
import automationImg from '../../assets/img/cases/Automation.webp';
import healthcareImg from '../../assets/img/cases/healthcare.png';
import logisticsImg from '../../assets/img/cases/logistics.png';
import fintechImg from '../../assets/img/cases/fintech.png';

const imageMap = {
  automation: automationImg,
  healthcare: healthcareImg,
  logistics: logisticsImg,
  fintech: fintechImg,
};

// ─── Animated Counter Component ───
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { i18n } = useTranslation();
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easedProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentCount = Math.floor(easedProgress * numericTarget);
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count.toLocaleString(), i18n.language)}{formatNumber(suffix, i18n.language)}
    </span>
  );
};

const CaseStudies = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10">
        
        {/* ═══ Elegant Header ═══ */}
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#0F5F6A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F5F6A]">{t('caseStudies.signatureWork', 'Signature Work')}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight">
              <span className="font-bold">{t('caseStudies.featured', 'Featured')}</span><br /> 
              <span className="font-light">{t('caseStudies.innovations', 'Innovations')}</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-lg leading-relaxed font-light border-s border-gray-200 ps-6">
              {t('caseStudies.description', 'We partner with ambitious brands to design and engineer digital products that define industries and accelerate growth.')}
            </p>
          </div>
        </div>

        {/* ═══ Clean Grid Gallery ═══ */}
        <div className="space-y-24 lg:space-y-32">
          {caseStudies.map((study, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <div key={idx} className="relative">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="aspect-[4/3] overflow-hidden bg-gray-50 group"
                    >
                      <img 
                        src={imageMap[study.image]} 
                        alt={t(`caseStudies.items.${study.id}.title`, study.title)} 
                        width="800"
                        height="600"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-md mx-auto lg:mx-0"
                    >
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F5F6A]">
                          {t(`caseStudies.items.${study.id}.category`, study.category)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
                          {t(`caseStudies.items.${study.id}.client`, study.client)}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                        {t(`caseStudies.items.${study.id}.title`, study.title)}
                      </h3>

                      <p className="text-gray-500 text-base leading-relaxed mb-10 font-light">
                        {t(`caseStudies.items.${study.id}.description`, study.description)}
                      </p>

                      <div>
                         <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">{t('caseStudies.impact', 'Impact')}</p>
                         <p className="text-lg font-bold text-gray-900">
                           {t(`caseStudies.items.${study.id}.impact`, study.impact)}
                         </p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ═══ Stats Section (Elegant Corporate Style) ═══ */}
        <div className="mt-32 lg:mt-40 pt-24 border-t border-gray-200">
           <div className="flex flex-col md:flex-row gap-12 mb-20">
              <div className="md:w-1/2">
                 <h3 className="text-3xl lg:text-4xl text-gray-900 tracking-tight leading-tight">
                   <span className="font-bold">{t('caseStudies.engineeringImpact', 'Engineering Impact')}</span><br />
                   <span className="font-light">{t('caseStudies.atScale', 'at Scale.')}</span>
                 </h3>
              </div>
              <div className="md:w-1/2">
                 <p className="text-gray-500 text-lg leading-relaxed font-light">
                   {t('caseStudies.statsDescription', 'We design, build, and scale digital products that enable businesses to run more efficiently, securely, and with greater impact.')}
                 </p>
              </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col ${idx !== 0 ? 'md:border-s md:border-gray-200 md:ps-10' : ''}`}
                >
                   <p className="text-4xl lg:text-5xl font-bold text-[#C9A453] mb-4 tracking-tighter">
                     <AnimatedCounter target={stat.number} suffix={stat.number.replace(/[0-9,]/g, '')} />
                   </p>
                   <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                     {t(`caseStudies.stats.${stat.id}.label`, stat.label)}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
