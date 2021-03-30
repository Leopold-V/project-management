import { removeTaskById } from '../utils/tasks';

export const useTasksInState = (state, setState) => {
  const addState = (task) => {
    const changeTasks = state[task.progression];
    changeTasks.push(task);
    setState({
      ...state,
      [task.progression]: changeTasks,
    });
  };

  const updateState = (task, index) => {
    const changeTasks = removeTaskById(state, task.progression, task.id);
    changeTasks.splice(index, 0, task);
    setState({
      ...state,
      [task.progression]: changeTasks,
    });
  };

  const deleteTask = (task) => {
    const changeTasks = removeTaskById(state, task.progression, task.id);
    setState({
      ...state,
      [task.progression]: changeTasks,
    });
  };

  return { addState, updateState, deleteTask };
};
