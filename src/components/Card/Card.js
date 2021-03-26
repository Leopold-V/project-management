import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Card = ({ children }) => {
  const theme = useSelector((state) => state.switch);

  return <CardStyled theme={theme}>{children}</CardStyled>;
};

export const CardStyled = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 1rem 1rem;
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
  box-shadow: ${(props) => props.theme.value ? 'none' : '0rem 0rem 1rem rgba(255, 255, 255, .7)'};
  transition: all 0.3s;
  &:hover {
    border: 2px solid ${(props) => (props.theme.value ? '#01b075' : 'transparent')};
    box-shadow: ${(props) =>
      props.theme.value ? '0rem 0rem 0.5rem rgba(70, 207, 122)' : '0rem .3rem .4rem rgba(0, 0, 0, .3)'};
  }
  & > p,
  div {
    color: #9b9b9b;
  }
  & > a,
  a:link,
  a:visited {
    color: #9b9b9b;
    font-weight: 600;
    &:hover {
      color: #01b075;
    }
  }
`;
