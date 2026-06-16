"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

const PrivacyPolicy = () => {
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
                {t('privacyPolicy.documentType', 'Legal Documentation')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-6">
              <span className="font-bold">{t('privacyPolicy.titlePart1', 'Privacy')}</span>{' '}
              <span className="font-light">{t('privacyPolicy.titlePart2', 'Policy')}</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              {t('privacyPolicy.intro', 'Last updated: June 2026. This Privacy Policy explains how INJAZ Digital Hub collects, uses, and discloses information about you.')}
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
          <h2>{t('privacyPolicy.section1.title', '1. Information We Collect')}</h2>
          <p>
            {t('privacyPolicy.section1.content', 'We collect information you provide directly to us when you request our services, contact customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.')}
          </p>

          <h2>{t('privacyPolicy.section2.title', '2. How We Use Your Information')}</h2>
          <p>{t('privacyPolicy.section2.content', 'We use the information we collect to:')}</p>
          <ul>
            <li>{t('privacyPolicy.section2.list1', 'Provide, maintain, and improve our digital services and products.')}</li>
            <li>{t('privacyPolicy.section2.list2', 'Process transactions and send related information.')}</li>
            <li>{t('privacyPolicy.section2.list3', 'Send technical notices, updates, security alerts, and support messages.')}</li>
            <li>{t('privacyPolicy.section2.list4', 'Provide, maintain, and improve our services;')}</li>
            <li>{t('privacyPolicy.section2.list5', 'Communicate with you about products, services, offers, and events offered by INJAZ Digital Hub.')}</li>
          </ul>

          <h2>{t('privacyPolicy.section3.title', '3. Sharing of Information')}</h2>
          <p>
            {t('privacyPolicy.section3.content', 'We may share information about you as follows or as otherwise described in this Privacy Policy:')}
          </p>
          <ul>
            <li>{t('privacyPolicy.section3.list1', 'With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.')}</li>
            <li>{t('privacyPolicy.section3.list2', 'In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.')}</li>
            <li>{t('privacyPolicy.section3.list3', 'With your consent or at your direction.')}</li>
          </ul>

          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('privacyPolicy.securityInfo', 'INJAZ Digital Hub takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.')}
          </p>

          <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mt-12 mb-6">
            {t('privacyPolicy.contactTitle', 'Contact Us')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            {t('privacyPolicy.contactContent', 'If you have any questions about this Privacy Policy, please contact us at:')}{' '}
            <a href="mailto:info@injazdigitalhub.com" className="text-accent hover:underline">info@injazdigitalhub.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
