import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ServiceFAQs = ({ service, theme = 'light' }) => {
  const isLight = theme === 'light';
  const faqs = service.faqs || [];
  const [openIndex, setOpenIndex] = useState(null);

  if (faqs.length === 0) return null;

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden bg-white`}>
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 relative z-10 w-full">
        
        <div className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-accent/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Insights</span>
            <div className="w-8 h-[2px] bg-accent/60" />
          </div>
          <h2 className={`text-3xl lg:text-5xl font-bold font-display tracking-tight leading-tight text-gray-900`}>
            Frequently Asked <br />
            <span className="text-accent italic font-light">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`rounded-[32px] border transition-all duration-500 overflow-hidden ${
                openIndex === idx 
                  ? 'bg-white border-accent/30 shadow-xl'
                  : 'bg-gray-50 border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
              >
                <h3 className={`text-lg font-bold font-display tracking-tight pr-8 text-gray-900`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === idx ? 'bg-accent text-white rotate-180' : 'bg-accent/10 text-accent'
                }`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="px-6 lg:px-8 pb-8 lg:pb-10">
                      <div className={`h-[1px] w-full mb-8 bg-gray-100`} />
                      <p className={`text-base font-medium leading-relaxed text-gray-600`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceFAQs;
