import React from 'react';

import { ContainerLayout, ContainerMain } from '../Container';
import { ParticlesBackground } from '../particles';
import { Headbar } from './Headbar';
import { SideBar } from './SideBar';

export const Layout = ({ children }) => {
 
  return (
    <ContainerLayout>
      <SideBar />
      <ContainerMain>
        <ParticlesBackground />
        <Headbar />
        {children}
      </ContainerMain>
    </ContainerLayout>
  );
};
