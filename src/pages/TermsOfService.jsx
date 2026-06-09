import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
              <span className="font-bold">Terms of</span> <span className="font-light">Service</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium max-w-2xl">
              Last updated: June 2026. Please read these Terms of Service carefully before using our digital platforms and services.
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
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of ENJAZ Digital Hub and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ENJAZ Digital Hub.
          </p>

          <h2>3. Service Provision</h2>
          <p>
            We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of the service is unavailable at any time or for any period.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            You are responsible for making all arrangements necessary for you to have access to our services and ensuring that all persons who access our services through your internet connection are aware of these Terms and comply with them.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall ENJAZ Digital Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Qatar, without regard to its conflict of law provisions.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:info@enjazdigitalhub.com">info@enjazdigitalhub.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
