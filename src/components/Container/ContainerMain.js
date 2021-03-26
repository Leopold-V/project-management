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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
  padding: 1.3rem 2rem;
`;
