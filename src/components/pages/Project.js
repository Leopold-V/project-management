import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUpdateTask } from '../../actions/actionsTasks';

import { ContainerSection, ContainerCard } from '../Container';
import { CardTask } from '../Card';
import { projectsSelector } from '../../slices/sliceProjects';
import { tasksSelector } from '../../slices/sliceTasks';
import { DragDropContext } from 'react-beautiful-dnd';

export const Project = (props) => {

  const id = props.match.params.id;

  const projects = useSelector((state) => projectsSelector(state).filter((ele) => ele.id === id));

  return (
    <ContainerSection>
      <h2 style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>Project page {projects[0] && projects[0].name}</h2>
      <p style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0] && projects[0].resume}</p>
      <ContainerCard>
        <DragDropZone key={id} pid={id}/>
      </ContainerCard>
    </ContainerSection>
  );
};

const DragDropZone = ({pid}) => {

  const dispatch = useDispatch();
  
  const tasks = useSelector((state) => tasksSelector(state).filter((ele) => ele.projectId === pid));

  const [state, setState] = useState({
    'todo' : tasks.filter((ele) => ele.progression === 'todo'),
    'in progress' : tasks.filter((ele) => ele.progression === 'in progress'),
    'completed' : tasks.filter((ele) => ele.progression === 'completed')
  });

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    const task = state[source.droppableId.toLowerCase()].find((ele) => ele.id === draggableId);
    const newTask = {...task, progression: destination.droppableId.toLowerCase()};
    const sourceTasks = state[source.droppableId.toLowerCase()].filter((ele) => ele.id !== draggableId);
    const destinationTasks = state[destination.droppableId.toLowerCase()];
    destinationTasks.push(newTask);

    const newState = {
      ...state,
      [source.droppableId.toLowerCase()]: sourceTasks,
      [destination.droppableId.toLowerCase()]: destinationTasks
    };

    setState(newState);
    dispatch(fetchUpdateTask(newTask));
  };

  const updateState = (newTask) => {
    const changeTasks = state[newTask.progression].filter((ele) => ele.id !== newTask.id);
    changeTasks.push(newTask);
    setState({
      ...state,
      [newTask.progression]: changeTasks
    });
  }

  const deleteTask = (task) => {
    const changeTasks = state[task.progression].filter((ele) => ele.id !== task.id);
    setState({
      ...state,
      [task.progression]: changeTasks
    });
  }

  const addState = (newTask) => {
    const changeTasks = state[newTask.progression];
    changeTasks.push(newTask);
    setState({
      ...state,
      [newTask.progression]: changeTasks
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CardTask title="Todo" tasks={state.todo} addState={addState} updateState={updateState} deleteTask={deleteTask} pid={pid} />
      <CardTask title="In progress" tasks={state['in progress']} addState={addState} updateState={updateState} deleteTask={deleteTask} pid={pid} />
      <CardTask title="Completed" tasks={state.completed} addState={addState} updateState={updateState} deleteTask={deleteTask} pid={pid} />
    </DragDropContext>
  )
}


