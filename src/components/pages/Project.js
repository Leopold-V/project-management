import React from 'react';
import { useSelector } from 'react-redux';

import { ContainerSection, ContainerCard } from '../Container';
import { CardTask } from '../Card';
//import { DragDropContext } from 'react-beautiful-dnd';

export const Project = (props) => {
  const id = props.match.params.id;

  const projects = useSelector(state => state.projects.projects.filter((ele) => ele.id === id));
  const tasksTodo = useSelector( state => state.tasks.tasks.filter((ele) => ele.projectId === id && ele.progression === 'todo'));
  const tasksInProgress = useSelector( state => state.tasks.tasks.filter((ele) => ele.projectId === id && ele.progression === 'in progress'));
  const tasksTodoCompleted = useSelector( state => state.tasks.tasks.filter((ele) => ele.projectId === id && ele.progression === 'completed'));

  return (
    <ContainerSection>
      <h2>Project page {projects[0] && projects[0].name}</h2>
      <p>{projects[0] && projects[0].resume}</p>
      <ContainerCard>
        <CardTask title="Todo" tasks={tasksTodo} />
        <CardTask title="In progress" tasks={tasksInProgress} />
        <CardTask title="Comleted" tasks={tasksTodoCompleted} />
      </ContainerCard>
    </ContainerSection>
  );
};
