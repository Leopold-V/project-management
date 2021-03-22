import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button';

export const CardProject = ({ name, resume, tech }) => {
  return (
    <Wrapper>
      <h4>{name}</h4>
      <p>{resume}</p>
      <Button className="transparent">Open</Button>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  background-color: #27262b;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 20rem;
  transition: all 0.3s;
  &:hover {
    border: 2px solid #01b075;
    box-shadow: 0rem 0rem 0.5rem rgba(70, 207, 122);
  }
  & > p {
    max-height: 15rem;
    overflow-y: auto;
    color: #9b9b9b;
  }
`;
