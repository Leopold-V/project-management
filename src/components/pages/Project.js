import React from 'react';
import { useSelector } from 'react-redux';

import { ContainerSection, ContainerCard } from '../Container';
import { CardTask } from '../Card';
import { projectsSelector } from '../../slices/sliceProjects';
import { tasksSelector } from '../../slices/sliceTasks';
//import { DragDropContext } from 'react-beautiful-dnd';

export const Project = (props) => {
  const id = props.match.params.id;

  const projects = useSelector((state) => projectsSelector(state).filter((ele) => ele.id === id));
  const tasksTodo = useSelector((state) =>
    tasksSelector(state).filter((ele) => ele.projectId === id && ele.progression === 'todo')
  );
  const tasksInProgress = useSelector((state) =>
    tasksSelector(state).filter((ele) => ele.projectId === id && ele.progression === 'in progress')
  );
  const tasksTodoCompleted = useSelector((state) =>
    tasksSelector(state).filter((ele) => ele.projectId === id && ele.progression === 'completed')
  );

  return (
    <ContainerSection>
      <h2 style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>Project page {projects[0] && projects[0].name}</h2>
      <p style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0] && projects[0].resume}</p>
      <ContainerCard>
        <CardTask title="Todo" tasks={tasksTodo} pid={id} />
        <CardTask title="In progress" tasks={tasksInProgress} pid={id} />
        <CardTask title="Completed" tasks={tasksTodoCompleted} pid={id} />
      </ContainerCard>
    </ContainerSection>
  );
};
