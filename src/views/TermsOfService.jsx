"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

const TermsOfService = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-100 mb-16">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#0F5F6A]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0F5F6A]">
                {t('termsOfService.documentType', 'Legal Documentation')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-6">
              <span className="font-bold">{t('termsOfService.titlePart1', 'Terms of')}</span>{' '}
              <span className="font-light">{t('termsOfService.titlePart2', 'Service')}</span>
            </h1>
            <p className="text-gray-500 text-lg font-light max-w-2xl leading-relaxed">
              {t('termsOfService.intro', 'Last updated: June 2026. Please read these Terms of Service carefully before using our digital platforms and services.')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#0F5F6A] prose-a:no-underline hover:prose-a:underline"
        >
          <h2>{t('termsOfService.section1.title', '1. Agreement to Terms')}</h2>
          <p>
            {t('termsOfService.section1.content', 'By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.')}
          </p>

          <h2>{t('termsOfService.section2.title', '2. Intellectual Property')}</h2>
          <p>
            {t('termsOfService.section2.content', 'The Service and its original content, features, and functionality are and will remain the exclusive property of INJAZ Digital Hub and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of INJAZ Digital Hub.')}
          </p>

          <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mt-12 mb-6">
            {t('termsOfService.section3.title', 'Links To Other Web Sites')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('termsOfService.section3.content1', 'Our Service may contain links to third-party web sites or services that are not owned or controlled by INJAZ Digital Hub.')}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('termsOfService.section3.content2', 'INJAZ Digital Hub has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that INJAZ Digital Hub shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.')}
          </p>

          <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mt-12 mb-6">
            {t('termsOfService.section4.title', 'Limitation Of Liability')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('termsOfService.section4.content', 'In no event shall INJAZ Digital Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.')}
          </p>

          <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mt-12 mb-6">
            {t('termsOfService.section5.title', 'Disclaimer')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('termsOfService.section5.content', 'Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.')}
          </p>

          <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mt-12 mb-6">
            {t('termsOfService.contactTitle', 'Contact Us')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('termsOfService.contactContent', 'If you have any questions about these Terms, please contact us at:')}{' '}
            <a href="mailto:info@injazdigitalhub.com" className="text-accent hover:underline">info@injazdigitalhub.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
