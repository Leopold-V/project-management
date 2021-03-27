import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { tasksSelector } from '../../slices/sliceTasks';
import { fetchUpdateTask } from '../../actions/actionsTasks';

import { removeOneTask } from '../../utils/tasks';
import { useTasksInState } from '../../hooks/useTasksInState';

import { ContainerCard } from '../Container';
import { CardTask } from '../Card';

export const ContainerCardTask = ({ pid }) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => tasksSelector(state).filter((ele) => ele.projectId === pid));
  
  const [state, setState] = useState({
    todo: tasks.filter((ele) => ele.progression === 'todo'),
    'in progress': tasks.filter((ele) => ele.progression === 'in progress'),
    completed: tasks.filter((ele) => ele.progression === 'completed'),
  });
  
  const props = useTasksInState(state, setState); // addState, updateState, deleteState

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    const src_id = source.droppableId.toLowerCase();
    const dest_id = destination.droppableId.toLowerCase();
    if (dest_id === src_id) return;

    const task = state[src_id].find((ele) => ele.id === draggableId);
    const newTask = { ...task, progression: dest_id };
    const sourceTasks = removeOneTask(state, src_id, draggableId);
    const destinationTasks = state[dest_id];
    destinationTasks.push(newTask);

    const newState = {
      ...state,
      [src_id]: sourceTasks,
      [dest_id]: destinationTasks,
    };

    setState(newState);
    dispatch(fetchUpdateTask(newTask));
  };

  return (
    <ContainerCard>
      <DragDropContext onDragEnd={onDragEnd}>
        <CardTask title="Todo" tasks={state.todo} pid={pid} {...props} />
        <CardTask title="In progress" tasks={state['in progress']} pid={pid} {...props} />
        <CardTask title="Completed" tasks={state.completed} pid={pid} {...props} />
      </DragDropContext>
    </ContainerCard>
  );
};
