import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              <div className="w-12 h-[2px] bg-[#8B1A4A]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B1A4A]">Legal Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-6">
              <span className="font-bold">Privacy</span> <span className="font-light">Policy</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
            Last updated: June 2026. This Privacy Policy explains how INJAZ Digital Hub collects, uses, and discloses information about you.
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
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#8B1A4A] prose-a:no-underline hover:prose-a:underline"
        >
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you request our services, contact customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our digital services and products.</li>
            <li>Process transactions and send related information.</li>
            <li>Send technical notices, updates, security alerts, and support messages.</li>
            <li>Provide, maintain, and improve our services;</li>
            <li>Communicate with you about products, services, offers, and events offered by INJAZ Digital Hub.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We may share information about you as follows or as otherwise described in this Privacy Policy:
          </p>
          <ul>
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
            <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.</li>
            <li>With your consent or at your direction.</li>
          </ul>

          <p className="text-gray-600 leading-relaxed mb-6">
            INJAZ Digital Hub takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>

          <h2 className="text-xl md:text-2xl font-bold font-display text-gray-900 mt-12 mb-6">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@injazdigitalhub.com" className="text-accent hover:underline">info@injazdigitalhub.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
