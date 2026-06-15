import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../../data/commonData';

import logo from '../../assets/img/footer-logo.svg';


const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--color-gold)]">{title}</h4>
    <ul className="flex flex-col gap-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link to={link.path} className="text-[15px] font-medium text-gray-300 hover:text-[var(--color-gold)] transition-colors flex items-center group gap-2 w-max">
            {link.name}
            <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-[var(--color-gold)]" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent pt-24 pb-8 border-t border-accent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">

          {/* Brand Info */}
          <div className="lg:col-span-4 max-w-sm">
            <Link to="/" className="inline-block mb-8">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-lg inline-flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="INJAZ Digital Hub" 
                  width="240"
                  height="80"
                  className="h-[50px] sm:h-[60px] w-auto object-contain" 
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-[14px] leading-relaxed font-medium mb-10">
              Qatar's premier digital engineering and AI-driven solutions for enterprise scaling across the GCC.
            </p>
            <div className="flex items-center gap-4">
              <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-gray-300 hover:bg-[var(--color-gold)] hover:text-accent hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-gray-300 hover:bg-[var(--color-gold)] hover:text-accent hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-gray-300 hover:bg-[var(--color-gold)] hover:text-accent hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12 sm:gap-16 lg:px-8">
            <FooterLinkColumn
              title="Solutions"
              links={[
                { name: 'Mobile App Dev', path: '/services/mobile-apps' },
                { name: 'Web App Dev', path: '/services/web-development' },
                { name: 'AI Automation', path: '/services/ai-automation' },
                { name: 'Cloud & DevOps', path: '/services/cloud-devops' }
              ]}
            />
            <FooterLinkColumn
              title="Resources"
              links={[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/company' },
                { name: 'Contact', path: '/contact' }
              ]}
            />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6">Headquarters</h4>
            <div className="space-y-6">
              <a href="https://maps.google.com/?q=Office+No+3+First+Floor+Islamabad+Arcade,+G-11+Markaz+Islamabad" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-[var(--color-gold)] shrink-0 group-hover:bg-[var(--color-gold)] group-hover:text-accent transition-colors">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <p className="text-[15px] font-medium text-gray-300 leading-relaxed group-hover:text-[var(--color-gold)] transition-colors">{companyInfo.address}</p>
                </div>
              </a>
              <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-[var(--color-gold)] shrink-0 group-hover:bg-[var(--color-gold)] group-hover:text-accent transition-colors">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <p className="text-[15px] font-medium text-gray-300 group-hover:text-[var(--color-gold)] transition-colors">{companyInfo.phone}</p>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-[var(--color-gold)] shrink-0 group-hover:bg-[var(--color-gold)] group-hover:text-accent transition-colors">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <p className="text-[15px] font-medium text-gray-300 group-hover:text-[var(--color-gold)] transition-colors">{companyInfo.email}</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-400 tracking-wider">
            &copy; {currentYear} INJAZ DIGITAL HUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="text-xs font-bold text-gray-400 hover:text-[var(--color-gold)] tracking-wider transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms-of-service" className="text-xs font-bold text-gray-400 hover:text-[var(--color-gold)] tracking-wider transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;