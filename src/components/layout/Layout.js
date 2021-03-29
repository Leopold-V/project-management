import React from 'react';
import { useLocation } from 'react-router';

import { ContainerLayout, ContainerMain } from '../Container';
import { ParticlesBackground } from '../Particles';
import { Headbar } from './Headbar';
import { SideBar } from './SideBar';

export const Layout = ({ children }) => {
  let location = useLocation();

  const paths = ['/', '/dashboard', '/profile']

  if (paths.indexOf(location.pathname) === -1 && !location.pathname.match(/^\/project/))  {
    return (
        <>
        {console.log(location)}
          {children}
        </>
      );
  }
 
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
