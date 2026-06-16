import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import { processSteps } from '../../data/homeData';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/numbers';

// Import images for the process steps
import discoveryImg from '../../assets/img/process/discovery.png';
import planImg from '../../assets/img/process/plan.png';
import devImg from '../../assets/img/process/development.png';
import testImg from '../../assets/img/process/testing.png';
import launchImg from '../../assets/img/process/launch.png';
import supportImg from '../../assets/img/process/support.png';

const processImages = [discoveryImg, planImg, devImg, testImg, launchImg, supportImg];

const Process = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const stageRef = useRef(-1);
  const [activeIndex, setActiveIndex] = useState(-1); // Desktop active index
  const [mobileIndex, setMobileIndex] = useState(0);    // Mobile active index
  const [direction, setDirection] = useState(1);       // 1 for right, -1 for left
  const [isPaused, setIsPaused] = useState(false);     // Mobile autoplay state

  // ─── Pinned Scroll Logic (Desktop Only) ───
  const totalStages = processSteps.length + 1;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 50,
    mass: 1,
    restDelta: 0.01,
    restSpeed: 0.01
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const rawStage = Math.floor(latest * totalStages);
    const stage = rawStage - 1; 
    const clampedStage = Math.min(Math.max(stage, -1), processSteps.length - 1);
    
    if (clampedStage !== stageRef.current) {
      stageRef.current = clampedStage;
      setActiveIndex(clampedStage);
    }
  });

  const progressBarHeight = useTransform(smoothProgress, [1/totalStages, 1], ["0%", "100%"]);
  const headerMoveY = useTransform(smoothProgress, [0, 1/totalStages], [0, -35]); // vh units
  const headerScale = useTransform(smoothProgress, [0, 1/totalStages], [1.2, 1]);
  const headerOpacity = useTransform(smoothProgress, [0, 1/totalStages, 1/totalStages + 0.05], [1, 1, 0.7]);
  const headerTransform = useTransform(headerMoveY, (y) => `translate3d(0, ${y}vh, 0)`);

  // ─── Auto-Advance Logic (Mobile Only) ───
  useEffect(() => {
    if (isPaused || mobileIndex >= processSteps.length - 1) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setMobileIndex(prev => prev + 1);
    }, 2000); // 2 seconds pause per slide
    
    return () => clearInterval(timer);
  }, [isPaused, mobileIndex, processSteps.length]);

  const handleNext = () => {
    setDirection(1);
    setMobileIndex((prev) => (prev + 1) % processSteps.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    setDirection(-1);
    setMobileIndex((prev) => (prev - 1 + processSteps.length) % processSteps.length);
    setIsPaused(true);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-white relative border-y border-gray-100 overflow-x-clip"
    >
      {/* ═══ Desktop View (Pinned Scroll) ═══ */}
      <div className="hidden lg:block relative" style={{ height: `${totalStages * 110}vh` }}>
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-10 lg:px-24 xl:px-32 w-full flex flex-col h-full relative">
            
            {/* Header */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-50 pointer-events-none">
              <motion.div 
                style={{ 
                  transform: headerTransform,
                  scale: headerScale,
                  opacity: headerOpacity,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                  WebkitFontSmoothing: "antialiased"
                }}
                className="w-full text-center will-change-transform"
              >
                <div className="flex items-center justify-center gap-4 mb-4 lg:mb-6">
                  <div className="w-8 sm:w-16 h-px bg-accent/60" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">{t('processSection.subtitle')}</span>
                  <div className="w-8 sm:w-16 h-px bg-accent/60" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] font-display tracking-tightest">
                  {t('processSection.title')}
                </h2>
              </motion.div>
            </div>

            {/* Steps (Desktop) */}
            <div className="flex-1 flex items-center relative gap-20 pt-24">
              <AnimatePresence>
                {activeIndex >= 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex w-full items-center gap-20"
                  >
                    <div className="absolute start-0 h-[40vh] w-6 flex flex-col justify-between items-center pointer-events-none">
                      <div className="absolute top-0 bottom-0 start-1/2 -translate-x-1/2 w-[2px] bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="w-full bg-accent rounded-full origin-top"
                          style={{ height: progressBarHeight }}
                        />
                      </div>
                      {processSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full relative z-10 transition-all duration-500 ${
                            activeIndex >= i ? 'bg-accent scale-125' : 'bg-gray-200 scale-100'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="w-1/2 ps-16">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="max-w-md"
                        >
                          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 mb-6">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                              {t('common.step')} {formatNumber(activeIndex + 1, i18n.language)}
                            </span>
                          </div>
                          <h3 className="text-2xl xl:text-3xl font-black font-display tracking-tight text-gray-900 mb-6">
                            {t(`processSection.items.${processSteps[activeIndex]?.id}.title`, processSteps[activeIndex]?.title)}
                          </h3>
                          <p className="text-base text-gray-500 leading-relaxed">
                            {t(`processSection.items.${processSteps[activeIndex]?.id}.description`, processSteps[activeIndex]?.description)}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="w-1/2 flex justify-center xl:justify-end">
                      <div className="w-full max-w-[280px] xl:max-w-[340px] aspect-10/13 rounded-[160px] overflow-hidden relative shadow-[0_10px_40px_rgba(15,95,106,0.12)] border border-gray-200 bg-white">
                        <AnimatePresence initial={false} mode="popLayout">
                          <motion.img
                            key={activeIndex}
                            src={processImages[activeIndex]}
                            alt={`Process Step ${activeIndex + 1}`}
                            initial={{ y: '100%', opacity: 0.5 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-100%', opacity: 0.5 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-30" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Mobile/Tablet View (Flowbite-Style Carousel) ═══ */}
      <div className="lg:hidden py-24 relative overflow-hidden flex flex-col items-center">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#0F5F6A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0F5F6A]">
              {t('processSection.subtitle')}
            </span>
            <div className="w-12 h-px bg-[#0F5F6A]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {t('processSection.title')}
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-sm mx-auto h-[580px]"
          onTouchStart={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={mobileIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.6, ease: "easeOut" },
                opacity: { duration: 0.4 }
              }}
              style={{ 
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transformStyle: "preserve-3d"
              }}
              className="absolute inset-0 w-full h-full px-6 flex items-center justify-center will-change-transform"
            >
              <div className="w-full h-full flex flex-col relative bg-transparent px-2">
                
                {/* Large Pill-Shaped Image */}
                <div className="w-full h-[340px] rounded-[100px] overflow-hidden mb-10 relative border border-gray-200 shadow-[0_10px_40px_rgba(15,95,106,0.1)]">
                  <img 
                    src={processImages[mobileIndex]} 
                    alt={processSteps[mobileIndex].title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40" />
                </div>
                
                {/* Content Area */}
                <div className="px-4">
                  <div className="text-[120px] font-black leading-none text-gray-100 select-none">
                    {formatNumber(mobileIndex + 1, i18n.language)}
                  </div>
                  <h3 className="text-4xl font-black text-accent font-display mb-6 tracking-tight">
                    {t(`processSection.items.${processSteps[mobileIndex].id}.title`, processSteps[mobileIndex].title)}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed font-medium">
                    {t(`processSection.items.${processSteps[mobileIndex].id}.description`, processSteps[mobileIndex].description)}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button 
            onClick={i18n.dir() === 'rtl' ? handleNext : handlePrev}
            className="absolute start-1 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-md transition-colors shadow-sm"
            aria-label="Previous step"
          >
            <svg className={`w-4 h-4 text-gray-600 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={i18n.dir() === 'rtl' ? handlePrev : handleNext}
            className="absolute end-1 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-md transition-colors shadow-sm"
            aria-label="Next step"
          >
            <svg className={`w-4 h-4 text-gray-600 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 z-30 relative">
          {processSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > mobileIndex ? 1 : -1);
                setMobileIndex(i);
                setIsPaused(true);
              }}
              aria-label={`Go to step ${i + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                mobileIndex === i ? 'w-8 bg-accent' : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;