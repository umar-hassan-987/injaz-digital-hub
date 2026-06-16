import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/homeData';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const { t, i18n } = useTranslation();

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  const currentItem = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_70%)] pointer-events-none opacity-80" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{t('testimonialsSection.subtitle')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-display tracking-tightest leading-tight">
            {t('testimonialsSection.title')}
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Main Slider Area */}
          <div className="relative h-[380px] sm:h-[340px] lg:h-[320px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="relative p-7 sm:p-10 lg:p-12 rounded-4xl bg-white border border-gray-200 shadow-xl backdrop-blur-sm overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`${i < currentItem.rating ? 'text-accent fill-accent' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>

                    <p className="text-gray-900 text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold mb-10 tracking-tightest">
                      {t(`testimonialsSection.items.${currentItem.id}.quote`, currentItem.quote)}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center font-black text-black text-base shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-gray-100"
                        >
                          {currentItem.image ? (
                            <img 
                              src={currentItem.image} 
                              alt={currentItem.author} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div 
                              className="w-full h-full flex items-center justify-center"
                              style={{ backgroundColor: currentItem.color }}
                            >
                              {currentItem.initials}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-black text-sm mb-0.5">{currentItem.author}</h4>
                          <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest leading-none">
                            {t(`testimonialsSection.items.${currentItem.id}.role`, currentItem.role)}
                          </p>
                        </div>
                      </div>

                      {currentItem.company && (
                        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 self-start sm:self-center group/logo transition-all duration-300 hover:bg-gray-100">
                          <img 
                            src={`https://cdn.simpleicons.org/${currentItem.companySlug}/${currentItem.color.replace('#', '')}`}
                            alt={currentItem.company}
                            className="w-4 h-4 object-contain opacity-80 group-hover/logo:opacity-100 transition-opacity"
                          />
                          <span className="text-gray-400 font-bold text-[10px] tracking-widest uppercase">{currentItem.company}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={`mt-14 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[calc(100%+120px)] ${i18n.dir() === 'rtl' ? 'lg:right-[-60px]' : 'lg:left-[-60px]'} flex items-center justify-between gap-4 pointer-events-none`}>
            <button 
              onClick={i18n.dir() === 'rtl' ? handleNext : handlePrev}
              className="pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 bg-white hover:bg-accent hover:border-accent hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 backdrop-blur-md group shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${i18n.dir() === 'rtl' ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`} />
            </button>

            <div className="flex items-center gap-2.5 lg:hidden">
               {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    currentIndex === i ? 'w-6 bg-accent' : 'w-1.5 bg-gray-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={i18n.dir() === 'rtl' ? handlePrev : handleNext}
              className="pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 bg-white hover:bg-accent hover:border-accent hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300 backdrop-blur-md group shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className={`w-5 h-5 transition-transform ${i18n.dir() === 'rtl' ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
            </button>
          </div>

          {/* Desktop Dots */}
          <div className="hidden lg:flex items-center justify-center gap-2.5 mt-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-1 transition-all duration-500 rounded-full ${
                  currentIndex === i ? 'w-8 bg-accent' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
