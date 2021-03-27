import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ContainerLayout, ContainerMain } from '../Container';
import { ParticlesBackground } from '../particles';
import { Headbar } from './Headbar';
import { SideBar } from './SideBar';
import { useLocation } from 'react-router';

export const Layout = ({ children }) => {
  let location = useLocation();
 
  return (
    <ContainerLayout>
      <SideBar />
      <ContainerMain>
        <ParticlesBackground />
        <Headbar />
        <AnimatePresence exitBeforeEnter>
            <motion.div
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key={location.pathname}
            >
              {children}
            </motion.div>
        </AnimatePresence>
      </ContainerMain>
    </ContainerLayout>
  );
};
