import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

export const WrapperTransition = ({ children }) => {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={location.pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
