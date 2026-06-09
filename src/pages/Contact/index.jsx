import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from '../../components/common/ContactForm';
import { companyInfo } from '../../data/commonData';

const ContactPage = () => {
  return (
    <>
      {/* Contact Section - LIGHT THEME */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-40 bg-white relative">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/[0.04] to-transparent pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32">
          {/* Section Header - Full Width for better impact on all screens */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mb-16 lg:mb-24 max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Get in Touch</span>
            </div>
            <h2 className="text-[clamp(32px,6vw,64px)] font-bold text-gray-950 leading-[1.05] tracking-tight font-display mb-8">
              Let's build something <span className="text-accent italic font-normal">extraordinary.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Have a question or a project in mind? Our technical consultants are ready to help you navigate your next digital leap.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-24 items-start">
            
            {/* Form Container - Reordered to be first on Mobile (Order 1), Right on Desktop (Order 2) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 bg-white rounded-[40px] sm:rounded-[48px] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)] p-6 sm:p-12 lg:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-10 sm:mb-12">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-gray-950 mb-3">Inquiry Form</h3>
                  <p className="text-gray-500 text-base sm:text-lg">Tell us about your vision and we'll help you realize it.</p>
                </div>
                <ContactForm variant="full" theme="light" />
              </div>
            </motion.div>

            {/* Info & Support - Reordered to be second on Mobile (Order 2), Left on Desktop (Order 1) */}
            <div className="order-2 lg:order-1 space-y-16">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Mail, label: 'Email Us', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { icon: Phone, label: 'Call Us', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: MapPin, label: 'Visit Us', value: companyInfo.address, href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`, target: '_blank' },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target={item.target || '_self'}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                      <item.icon size={18} className="text-accent group-hover:text-black transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-sm sm:text-[17px] font-bold text-gray-900 leading-tight">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp Link under the left cards */}
              <motion.a
                href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group flex items-center justify-center gap-3 p-5 rounded-3xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-500 shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span className="font-bold text-[15px]">Chat with us on WhatsApp</span>
              </motion.a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
