import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '../../data/commonData';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Globe, Layers, Database, Cloud as CloudIcon, 
  Cpu, Shield, Code, Zap, CheckCircle2, Brain 
} from 'lucide-react';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(techStack[0].id);

  // Icon mapping for tabs
  const tabIcons = {
    'ai': Brain,
    'mobile': Smartphone,
    'web': Globe,
    'database': Database,
    'cloud': CloudIcon,
  };

  const activeTechData = techStack.find((item) => item.id === activeTab);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="tech-stack">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Technical Ecosystem</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.1] font-display tracking-tight mb-6"
          >
            Building the Future with <br /> 
            <span className="text-gray-400">Industry-Leading Technologies.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium"
          >
            Our specialized teams leverage a <span className="text-gray-900 font-bold underline decoration-accent/30 decoration-4 underline-offset-4">future-ready stack</span> to scale your vision from prototype to global enterprise.
          </motion.p>
        </div>

        {/* Main Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Sidebar Menu - Fixed/Sticky Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-2">
              <div className="mb-8 ml-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Categories</span>
              </div>
              
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 scrollbar-premium">
                {techStack.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tabIcons[tab.id] || Code;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-500 relative group whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink ${
                        isActive 
                        ? 'text-gray-900' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Icon size={18} strokeWidth={2.5} />
                      </div>
                      
                      <span className="relative z-10 tracking-tight">{tab.title}</span>
                      
                      {/* Active Indicator Background */}
                      {isActive && (
                        <motion.div 
                          layoutId="active-nav-bg"
                          className="absolute inset-0 bg-[#fdf0f4] border border-accent/10 rounded-2xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Area - Technology Map (Pills) */}
          <div className="lg:col-span-9 min-h-[500px] border-t lg:border-t-0 lg:border-l border-gray-100 pt-10 lg:pt-0 lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-16"
              >
                {activeTechData.categories.map((category, idx) => (
                  <div key={idx} className="relative">
                    {/* Category Title */}
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-xl font-bold text-gray-900 font-display">
                        {category.subtitle}
                      </h3>
                      <div className="h-px grow bg-gray-100" />
                    </div>
                    
                    {/* Tech Grid - 3 Columns Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.techs.map((tech, techIdx) => (
                        <motion.div 
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIdx * 0.04, duration: 0.4 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="group flex items-center gap-4 px-5 py-4 bg-gray-50 border border-gray-100/50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-accent/30"
                        >
                          {/* Icon Container */}
                          <div className="w-10 h-10 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-110">
                            <img 
                              src={tech.iconUrl} 
                              alt={tech.name}
                              className="w-full h-full object-contain transition-all duration-500 opacity-100"
                              onError={(e) => {
                                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>`;
                              }}
                            />
                          </div>
                          
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-gray-900 font-bold text-sm lg:text-[15px] tracking-tight truncate">
                              {tech.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TechStack;
