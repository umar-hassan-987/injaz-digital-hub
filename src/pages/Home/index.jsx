import React from 'react';
import Hero from '../../components/Home/Hero';
import LazySection from '../../components/common/LazySection';
import { 
  CaseStudiesSkeleton, 
  ServicesSkeleton, 
  ProcessSkeleton, 
  TechStackSkeleton, 
  TestimonialsSkeleton, 
  CTASkeleton 
} from '../../components/Home/HomeSkeletons';

const Home = () => {
  return (
    <>
      <Hero />
      
      <LazySection 
        importFunc={() => import('../../components/Home/CaseStudies')} 
        fallback={<CaseStudiesSkeleton />} 
      />
      
      <LazySection 
        importFunc={() => import('../../components/Home/Services')} 
        fallback={<ServicesSkeleton />} 
      />
      
      <LazySection 
        importFunc={() => import('../../components/Home/Process')} 
        fallback={<ProcessSkeleton />} 
      />
      
      <LazySection 
        importFunc={() => import('../../components/Home/TechStack')} 
        fallback={<TechStackSkeleton />} 
      />
      

      
      <LazySection 
        importFunc={() => import('../../components/Home/Testimonials')} 
        fallback={<TestimonialsSkeleton />} 
      />
      
      <LazySection 
        importFunc={() => import('../../components/Home/CTA')} 
        fallback={<CTASkeleton />} 
      />
    </>
  );
};

export default Home;
