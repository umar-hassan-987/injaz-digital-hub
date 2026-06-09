import React from 'react';

const SkeletonBase = ({ height, className = "" }) => (
  <div 
    style={{ height }} 
    className={`w-full bg-[#0a0a0a] relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
  </div>
);

export const CaseStudiesSkeleton = () => <SkeletonBase height="900px" />;
export const ServicesSkeleton = () => <SkeletonBase height="800px" />;
export const ProcessSkeleton = () => <SkeletonBase height="660vh" />; // 6 stages * 110vh
export const TechStackSkeleton = () => <SkeletonBase height="700px" />;
export const TestimonialsSkeleton = () => <SkeletonBase height="600px" />;
export const CTASkeleton = () => <SkeletonBase height="400px" />;

// Add shimmer keyframe to index.css if not present
// @keyframes shimmer {
//   100% { transform: translateX(100%); }
// }
