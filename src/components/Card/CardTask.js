import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import { Droppable, Draggable } from 'react-beautiful-dnd';

import { Button } from '../Button';

export const CardTask = ({ title, tasks }) => {
  const addTask = () => {
    alert('TODO');
  };

  return (
    <Wrapper>
      <CardHeader>
        <h4>{title}</h4>
      </CardHeader>
      <CardBody>
        {/* bind data */}
        <Item>Project page</Item>
        <Item>Profile to complete</Item>
        <Item>Redux firebase data</Item>
      </CardBody>
      <Button light={false} onClick={addTask} className="transparent">
        <i className="fas fa-plus-circle fa-2x"></i>
      </Button>
    </Wrapper>
  );
};

const CardHeader = styled.div`
  min-height: 3rem;
  background-color: #01b075;
  text-align: center;
`;

const Item = styled.div`
  background-color: whitesmoke;
  margin-bottom: 1rem;
  text-align: center;
  color: black;
  padding: 0.7rem 1rem;
  max-height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const CardBody = styled.div`
  padding: 2rem;
`;

const Wrapper = styled.div`
  background-color: #27262b;
  border: 2px solid transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 20rem;
  transition: all 0.3s;
  overflow: hidden;
  & > p {
    max-height: 15rem;
    overflow-y: auto;
    color: #9b9b9b;
  }
`;
