import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUpdateTask } from '../../actions/actionsTasks';

import { removeOneTask } from '../../utils/tasks';

import { ContainerCard } from '../Container';
import { CardTask } from '../Card';
import { tasksSelector } from '../../slices/sliceTasks';
import { DragDropContext } from 'react-beautiful-dnd';

export const ContainerCardTask = ({pid}) => {

    const dispatch = useDispatch();
    
    const tasks = useSelector((state) => tasksSelector(state).filter((ele) => ele.projectId === pid));
  
    const [state, setState] = useState({
      'todo' : tasks.filter((ele) => ele.progression === 'todo'),
      'in progress' : tasks.filter((ele) => ele.progression === 'in progress'),
      'completed' : tasks.filter((ele) => ele.progression === 'completed')
    });
  
    const onDragEnd = result => {
      const { destination, source, draggableId } = result;

      if (!destination) return;
			const src_id = source.droppableId.toLowerCase();
			const dest_id = destination.droppableId.toLowerCase();
      if (dest_id === src_id) return;

      const task = state[src_id].find((ele) => ele.id === draggableId);
      const newTask = {...task, progression: dest_id};
      const sourceTasks = removeOneTask(state, src_id, draggableId);
      const destinationTasks = state[dest_id];
      destinationTasks.push(newTask);
  
      const newState = {
        ...state,
        [src_id]: sourceTasks,
        [dest_id]: destinationTasks
      };
  
      setState(newState);
      dispatch(fetchUpdateTask(newTask));
    };

    const addState = (newTask) => {
      const changeTasks = state[newTask.progression];
      changeTasks.push(newTask);
      setState({
        ...state,
        [newTask.progression]: changeTasks
      });
    };
  
    const updateState = (newTask) => {
      const changeTasks = removeOneTask(state, newTask.progression, newTask.id);
      changeTasks.push(newTask);
      setState({
        ...state,
        [newTask.progression]: changeTasks
      });
    };
  
    const deleteTask = (task) => {
      const changeTasks = removeOneTask(state, task.progression, task.id);
      setState({
        ...state,
        [task.progression]: changeTasks
      });
    }

    const props = { addState, updateState, deleteTask, pid};
  
    return (
      <ContainerCard>
        <DragDropContext onDragEnd={onDragEnd}>
            <CardTask title="Todo" tasks={state.todo} {...props} />
            <CardTask title="In progress" tasks={state['in progress']} {...props} />
            <CardTask title="Completed" tasks={state.completed} {...props} />
        </DragDropContext>
      </ContainerCard>
    )
  }
  