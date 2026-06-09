import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/subservice/subServiceV.webp';

const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);


export default function CompanyHero() {
  return (
    <section className="relative min-h-[100dvh] lg:h-screen flex items-center overflow-hidden bg-gray-50 py-0">
      {/* Background Image & glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img 
          src={heroImg} 
          alt="Company Hero Background" 
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50" />
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-accent/5 blur-[80px] md:blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-accent/5 blur-[60px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-32 w-full pt-32 sm:pt-40 lg:pt-16 pb-20 lg:pb-0">
        <div className="grid lg:grid-cols-[70%_30%] gap-12 lg:gap-16 items-center">

          {/* ── Left — Text block ── */}
          <div className="text-center lg:text-left">
            <FadeUp delay={0.3}>
              <span className="hidden sm:inline-flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-accent mb-6 md:mb-8">
                <span className="w-8 md:w-10 h-px bg-accent" />
                About INJAZ
              </span>
            </FadeUp>

            <FadeUp delay={0.5}>
              <h1
                className="font-display font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(28px, 7vw, 64px)' }}
              >
                We Build Digital<br />
                Products That<br />
                <span className="text-accent italic font-light pr-2">Shape Tomorrow</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.7}>
              <p className="text-[15px] md:text-[17px] text-gray-600 max-w-[600px] leading-relaxed mb-10 mx-auto lg:mx-0 font-light border-l-2 border-accent/20 pl-6 py-2">
                INJAZ is a leading digital solutions firm building scalable, elegant digital products that drive real-world impact for enterprises across Qatar and the GCC.
              </p>
            </FadeUp>

            <FadeUp delay={0.9}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold text-sm rounded-xl hover:bg-black transition-colors duration-300 shadow-lg shadow-accent/20 uppercase tracking-widest text-[11px]"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* ── Right — Animated visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
            className="relative h-auto lg:h-[420px] flex items-center justify-center lg:block mt-8 lg:mt-0"
          >
            {/* Accent blob */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[200px] md:w-[320px] h-[200px] md:h-[320px] rounded-full bg-accent/10 blur-[60px] md:blur-[90px]" />
            </div>

            {/* Main overview card */}
            <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 w-full max-w-[340px] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[28px] p-6 md:p-8 z-20">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-5">Company Overview</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Founded',       value: '2014' },
                  { label: 'Team Members',  value: '50+'  },
                  { label: 'Projects',      value: '500+' },
                  { label: 'Countries',     value: '30+'  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-2xl p-4 border border-gray-100"
                  >
                    <div className="text-xl md:text-2xl font-bold font-display text-gray-900 mb-1">{item.value}</div>
                    <div className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
