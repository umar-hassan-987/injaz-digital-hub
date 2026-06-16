"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { servicesDetail } from '../../../data/servicesData';
import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceFeatures from '../../../components/Services/ServiceFeatures';
import ServiceProcess from '../../../components/Services/ServiceProcess';
import ServiceProjects from '../../../components/Services/ServiceProjects';
import ServiceCTA from '../../../components/Services/ServiceCTA';
import ServiceSubServices from '../../../components/Services/ServiceSubServices';
import ServiceWhyUs from '../../../components/Services/ServiceWhyUs';
import ServiceFAQs from '../../../components/Services/ServiceFAQs';

import subServiceH from '../../../assets/img/subservice/subServiceH.webp';
import subServiceV from '../../../assets/img/subservice/subServiceV.webp';

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;

  const service = slug ? servicesDetail[slug] : null;

  const { push } = useRouter();

  React.useEffect(() => {
    if (slug && !service) {
      push('/services');
    }
  }, [slug, service, push]);

  if (!service) {
    return null;
  }

  return (
    <div className="bg-white overflow-hidden min-h-screen">
      {/* 1. Hero Section (Full Height, Light) */}
      <ServiceHero 
        service={service} 
        theme="light" 
        bgImageDesktop={subServiceH} 
        bgImageMobile={subServiceV} 
      />
      
      {/* 2. Core Capabilities (Light) */}
      <ServiceFeatures service={service} theme="light" />
      
      {/* 3. Specializations/Sub Services (Light) */}
      <ServiceSubServices service={service} theme="light" />
      
      {/* 4. Methodology/Process (Light) */}
      <ServiceProcess service={service} theme="light" />
      
      {/* 5. Why Partner With Us (Light) */}
      <ServiceWhyUs service={service} theme="light" />
      
      {/* 6. Case Studies / Projects (Light) */}
      <ServiceProjects service={service} theme="light" />
      
      {/* 7. FAQs (Light) */}
      <ServiceFAQs service={service} theme="light" />
      
      {/* 8. CTA */}
      <ServiceCTA variant="banner" theme="light" />
    </div>
  );
};

export default ServiceDetailPage;
