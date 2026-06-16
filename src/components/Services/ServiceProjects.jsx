"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../../i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../../data/homeData';
import { useTranslations, useLocale } from 'next-intl';

const ServiceProjects = ({ service, theme = 'light' }) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  
  // Filter case studies that match this service's slug or category
  const relatedProjects = caseStudies.filter(project => 
    project.category.toLowerCase().includes(service.title.toLowerCase()) ||
    (project.services && project.services.includes(service.slug))
  ).slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden bg-white`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-32 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-accent/60" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                {t('serviceDetail.projects.subtitle', 'Proof of Concept')}
              </span>
            </div>
            <h2 className={`text-3xl lg:text-5xl font-bold font-display tracking-tight leading-tight text-gray-900`}>
              {t('serviceDetail.projects.titlePart1', 'Featured')} <br />
              <span className="text-accent italic font-light">{t('serviceDetail.projects.titleHighlight', 'Case Studies')}</span>
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:gap-4 transition-all">
            {t('serviceDetail.projects.cta', 'Explore All Work')} <ArrowUpRight size={14} className={isRTL ? 'rotate-[-90deg]' : ''} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {relatedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} t={t} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, idx, t, isRTL }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 bg-gray-100 shadow-lg shadow-gray-200/50">
        <img 
          src={project.image?.src || project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className={`absolute top-8 end-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ${isRTL ? '-translate-x-4 group-hover:translate-x-0' : 'translate-x-4 group-hover:translate-x-0'}`}>
          <ArrowUpRight size={20} className={isRTL ? 'rotate-[-90deg]' : ''} />
        </div>

        <div className="absolute bottom-8 start-8 end-8">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">
            {t(`caseStudies.items.${project.id}.category`, project.category)}
          </div>
          <h3 className="text-2xl font-bold font-display text-white leading-tight">
            {t(`caseStudies.items.${project.id}.title`, project.title)}
          </h3>
        </div>
      </div>
      
      <p className={`text-sm font-medium leading-relaxed mb-6 line-clamp-2 text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t(`caseStudies.items.${project.id}.description`, project.description)}
      </p>
      
      <Link href={`/case-studies/${project.slug}`}
        className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-gray-900 hover:text-accent`}
      >
        {t('serviceDetail.projects.viewDetails', 'View Details')} <ChevronRight size={12} className={isRTL ? 'rotate-180' : ''} />
      </Link>
    </motion.div>
  );
};

const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default ServiceProjects;
