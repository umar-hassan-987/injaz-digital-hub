import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/navData';

import logo from '../../assets/img/enjaz-logo.svg';

const Navbar = () => {
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const megaTimeout = useRef(null);
  const hideTimeout = useRef(null);
  const location = useLocation();
  const isTransparentHeroPage = location.pathname === '/' || location.pathname.startsWith('/services') || location.pathname.startsWith('/company');

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;

      // 1. Sticky/Scrolled Style
      if (currentScrollY > 20) {
        setIsScrolled(true);
        header.classList.add('nav-scrolled');
      } else {
        setIsScrolled(false);
        header.classList.remove('nav-scrolled');
      }

      // 2. Visibility (Hide on scroll down, show on scroll up)
      if (currentScrollY < 50) {
        header.classList.remove('nav-hidden');
        clearTimeout(hideTimeout.current);
      } else if (!isScrollingUp) {
        header.classList.add('nav-hidden');
        clearTimeout(hideTimeout.current);
      } else {
        header.classList.remove('nav-hidden');
        clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
          if (!mobileMenuOpen && window.scrollY >= 50) {
            header.classList.add('nav-hidden');
          }
        }, 1500);
      }

      // Close mega menu on scroll
      if (activeMega) {
        setActiveMega(null);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimeout.current);
    };
  }, [mobileMenuOpen, activeMega]);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMegaEnter = (name) => {
    clearTimeout(megaTimeout.current);
    setActiveMega(name);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => {
      setActiveMega(null);
    }, 150);
  };

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={() => clearTimeout(hideTimeout.current)}
        onMouseLeave={() => {
          if (window.scrollY >= 50 && !mobileMenuOpen) {
            hideTimeout.current = setTimeout(() => {
              if (headerRef.current) headerRef.current.classList.add('nav-hidden');
            }, 1500);
          }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 py-4 ${
          activeMega 
            ? 'bg-white py-2 duration-0 is-mega-open' 
            : !isScrolled
              ? `bg-transparent border-transparent ${isTransparentHeroPage ? 'nav-transparent' : ''}`
              : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 max-w-[140px] sm:max-w-[180px] lg:max-w-none">
              <img
                src={logo}
                alt="INJAZ Digital Hub"
                width="200"
                height="65"
                className="h-[45px] sm:h-[55px] lg:h-[65px] w-auto max-w-full object-contain transition-all duration-500 nav-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.hasMega && handleMegaEnter(link.name)}
                    onMouseLeave={() => link.hasMega && handleMegaLeave()}
                  >
                    <Link
                      to={link.path}
                      className={`relative flex items-center gap-1 px-4 py-2 text-[19px] font-bold transition-all rounded-lg nav-link ${isActive ? 'text-accent is-active' : ''} ${activeMega === link.name ? 'text-accent' : ''}`}
                    >
                      {link.name}
                      {link.hasMega && <ChevronDown size={14} className={`transition-transform ${activeMega === link.name ? 'rotate-180' : ''}`} />}

                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/contact"
                className="px-7 py-3 text-base font-bold transition-all duration-300 transform hover:scale-105 shadow-lg nav-cta"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg transition-colors nav-mobile-toggle"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* ─── Mega Menu Dropdown (Anchored to Header for Full-Width) ─── */}
        {activeMega && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-t border-gray-100 z-50 overflow-hidden"
            onMouseEnter={() => handleMegaEnter(activeMega)}
            onMouseLeave={handleMegaLeave}
            style={{ animation: 'fadeInDown 0.4s cubic-bezier(0.2, 0, 0, 1) forwards' }}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-16">
              {(() => {
                const link = navLinks.find(l => l.name === activeMega);
                if (!link) return null;
                return (
                  <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-24">
                    {/* ─── Left Section: Intro & Tech ─── */}
                    <div className="lg:w-[260px] xl:w-[320px] shrink-0">
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-[2px] bg-accent" />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Expertise</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
                          {link.name}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[280px]">
                          Strategic digital solutions engineered for the modern era.
                        </p>
                      </div>
                    </div>

                    {/* ─── Right Section: Grid of Links ─── */}
                    <div className="flex-grow">
                      <div className={`grid gap-10 lg:gap-y-16 lg:gap-x-8 xl:gap-x-12 ${
                        link.megaColumns.length >= 4 ? 'grid-cols-2 xl:grid-cols-4' :
                        link.megaColumns.length === 3 ? 'grid-cols-2 xl:grid-cols-3' : 
                        'grid-cols-2 max-w-2xl'
                        }`}>
                        {link.megaColumns?.map((col) => (
                          <div key={col.title} className="flex flex-col">
                            <h4 className="text-sm font-bold text-black mb-6 uppercase tracking-wider">
                              {col.title}
                            </h4>
                            <ul className="space-y-4">
                              {col.links.map((subLink) => (
                                <li key={subLink.name}>
                                  <Link
                                    to={subLink.path}
                                    onClick={() => setActiveMega(null)}
                                    className="group flex items-center justify-between text-[14px] font-medium text-slate-500 hover:text-black transition-all"
                                  >
                                    <span className="whitespace-nowrap">{subLink.name}</span>
                                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.2, 0, 0, 1) ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } overflow-y-auto`}
        >
          <div className="p-8">
            {/* Close */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="INJAZ Digital Hub" 
                  width="140"
                  height="40"
                  className="h-10 w-auto object-contain brightness-0" 
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-gray-100 text-black hover:bg-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <MobileNavItem
                  key={link.name}
                  link={link}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-black text-white font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

/* ─── Mobile Nav Item with Expandable Sub-links ─── */
const MobileNavItem = ({ link, onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);

  if (!link.hasMega) {
    return (
      <Link
        to={link.path}
        onClick={onClose}
        className={`block px-4 py-4 text-xl font-black rounded-2xl transition-colors ${isActive ? 'text-accent' : 'text-black hover:bg-gray-50'}`}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div>
      <div className={`flex items-center justify-between w-full rounded-2xl transition-colors ${isActive ? 'bg-accent/5' : 'hover:bg-gray-50'}`}>
        <Link
          to={link.path}
          onClick={onClose}
          className={`flex-grow px-4 py-4 text-xl font-black transition-colors ${isActive ? 'text-accent' : 'text-black'}`}
        >
          {link.name}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`px-6 py-4 border-l border-gray-100 transition-colors ${isActive ? 'text-accent' : 'text-black opacity-40 hover:opacity-100'}`}
          aria-label={`Toggle ${link.name} menu`}
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {expanded && (
        <div className="pl-6 pb-4 mt-2 space-y-6">
          {link.megaColumns?.map((col) => (
            <div key={col.title} className="space-y-3">
              <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                {col.title}
              </p>
              <div className="space-y-1">
                {col.links.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.path}
                    onClick={onClose}
                    className={`block px-4 py-2 text-base font-bold transition-colors ${location.pathname === subLink.path ? 'text-accent' : 'text-gray-600 hover:text-accent'}`}
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
