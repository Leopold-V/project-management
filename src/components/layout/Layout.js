import React from 'react';
import { useLocation } from 'react-router-dom';

import { ContainerLayout, ContainerMain } from '../Container';
import { Headbar } from './Headbar';
import { SideBar } from './SideBar';

export const Layout = ({ children }) => {
  let location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return <>{children}</>;
  }
  return (
    <ContainerLayout>
      <SideBar />
      <ContainerMain>
        <Headbar />
        {children}
      </ContainerMain>
    </ContainerLayout>
  );
};
