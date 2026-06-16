"use client";

import { useEffect } from 'react';
import { usePathname } from '@/i18n/routing';

const ScrollToTop = () => {
  const { pathname } = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    // Fallback for some browsers
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
