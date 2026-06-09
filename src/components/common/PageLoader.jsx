import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-accent absolute animate-ping opacity-75"></div>
        <div className="w-3 h-3 rounded-full bg-accent"></div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
