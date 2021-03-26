import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const ContainerMain = ({ children }) => {
  const theme = useSelector((state) => state.switch);

  return <ContainerMainStyled theme={theme}>{children}</ContainerMainStyled>;
};

const ContainerMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  color: white;
`;
