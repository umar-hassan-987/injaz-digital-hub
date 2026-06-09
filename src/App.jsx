import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domMax } from 'framer-motion';

import Navbar from './components/layout/Navbar';
const Footer = lazy(() => import('./components/layout/Footer'));
import PageLoader from './components/common/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ServiceDetailPage = lazy(() => import('./pages/Services/ServiceDetail'));
const ContactPage = lazy(() => import('./pages/Contact'));
const CompanyPage = lazy(() => import('./pages/Company'));
const CareersPage = lazy(() => import('./pages/Careers'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));


import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [isPending, startTransition] = React.useTransition();

  return (
    <LazyMotion features={domMax}>
      <Router>
        <ScrollToTop />
        {isPending && (
          <div className="fixed top-0 left-0 right-0 h-1 z-[9999] overflow-hidden">
            <div className="h-full bg-accent animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>
        )}
        <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-accent/20 selection:text-accent">
          <Navbar />
          <main className="relative">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />

              </Routes>
            </Suspense>
          </main>
          <Suspense fallback={<div className="h-[400px] bg-gray-50" />}>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </LazyMotion>
  );
}

export default App;
