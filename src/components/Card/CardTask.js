import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import { FormAddTask } from '../Form';
import { ItemTask } from './ItemTask';

export const CardTask = ({ title, tasks, addState, updateState, deleteTask, pid }) => {

  const theme = useSelector((state) => state.switch);

  return (
    <CardTaskStyled theme={theme}>
      <CardHeader theme={theme}>
        <h4>{title}</h4>
      </CardHeader>
      <Droppable droppableId={title} type="task">
        {provided => (
          <CardBody ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((ele, i) => (
              <ItemTask key={ele.id} task={ele} updateState={updateState} deleteTask={deleteTask} index={i} />
            ))}
            {provided.placeholder}
          </CardBody>
        )}
      </Droppable>
      <FormAddTask pid={pid} title={title} addState={addState} />
    </CardTaskStyled>
  );
};

CardTask.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  pid: PropTypes.string.isRequired,
  addState: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const CardHeader = styled.div`
  text-align: center;
`;

const CardBody = styled.div`
  padding: 1rem;
  min-height: 2rem;
`;

const CardTaskStyled = styled.div`
  background-color: ${(props) => props.theme.card};
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
  border: 2px solid transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 1rem;
  margin-bottom: 2rem;
  width: 20rem;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    border: 2px solid ${(props) => (props.theme.value ? '#01b075' : 'transparent')};
    box-shadow: ${(props) =>
      props.theme.value ? '0rem 0rem 0.5rem rgba(70, 207, 122)' : '0rem .3rem .4rem rgba(0, 0, 0, .3)'};
  }
  & > p {
    max-height: 15rem;
    overflow-y: auto;
    color: #727171;
  }
`;
