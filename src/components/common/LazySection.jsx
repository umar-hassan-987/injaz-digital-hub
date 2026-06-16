"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';

/**
 * LazySection component wraps a component in an IntersectionObserver.
 * It only triggers the dynamic import and mounting when the section is near the viewport.
 */
const LazySection = ({ 
  importFunc, 
  fallback, 
  rootMargin = "600px 0px", 
  threshold = 0.01 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);
  const [LazyComponent, setLazyComponent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const loadComponent = async () => {
        try {
          const module = await importFunc();
          setLazyComponent(() => module.default);
          setIsLoaded(true);
        } catch (error) {
          console.error("Failed to lazy load component:", error);
        }
      };
      loadComponent();
    }
  }, [isInView, isLoaded, importFunc]);

  return (
    <div ref={observerRef} className="w-full">
      {LazyComponent ? (
        <Suspense fallback={fallback}>
          <LazyComponent />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
