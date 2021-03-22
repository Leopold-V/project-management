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
        {tasks.map((ele) => (
          <Item key={ele.id}>{ele.name}</Item>
        ))}
      </CardBody>
      <WrapperButton >
        <Button onClick={addTask} className="transparent">
          <i className="fas fa-plus-circle fa-2x"></i>
        </Button>
      </WrapperButton>
    </Wrapper>
  );
};

CardTask.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
}

const CardHeader = styled.div`
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
  padding: 1rem;
`;

const WrapperButton = styled.div`
  margin: 1rem auto;
`

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
