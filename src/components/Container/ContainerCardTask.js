import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { tasksSelector } from '../../slices/sliceTasks';
import { fetchUpdateTask } from '../../actions/actionsTasks';
import { calculPosition } from '../../utils/tasks';

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
  
  const propsCardTask = useTasksInState(state, setState); // addState, updateState, deleteState

  const moveSameList = (state, newPosition, sourcetype, startIndex, endIndex) => {
    const [removed] = state[sourcetype].splice(startIndex, 1);
    state[sourcetype].splice(endIndex, 0, {...removed, position: newPosition});
    return state;
  };

  const moveBetweenList = (state, newPosition, sourcetype, destinationtype, startIndex, endIndex) => {
    const [removed] = state[sourcetype].splice(startIndex, 1);
    state[destinationtype].splice(endIndex, 0, {...removed, position: newPosition, progression: destinationtype});
    return state;
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const src_id = source.droppableId.toLowerCase();
    const dest_id = destination.droppableId.toLowerCase();
    if (dest_id === src_id && destination.index === source.index) return;

    const newPosition = calculPosition(state, dest_id, destination.index);
    if (dest_id === src_id) {
      setState(moveSameList(state, newPosition, src_id, source.index, destination.index));
    } else {
      setState(moveBetweenList(state, newPosition, src_id, dest_id, source.index, destination.index));
    }
    const newTask = {...state[dest_id][destination.index], progression: dest_id, position: newPosition};
    dispatch(fetchUpdateTask(newTask));
  };

  return (
    <ContainerCard>
      <DragDropContext onDragEnd={onDragEnd}>
        <CardTask title="Todo" tasks={state.todo} pid={pid} {...propsCardTask} />
        <CardTask title="In progress" tasks={state['in progress']} pid={pid} {...propsCardTask} />
        <CardTask title="Completed" tasks={state.completed} pid={pid} {...propsCardTask} />
      </DragDropContext>
    </ContainerCard>
  );
};
