import { removeOneTask } from '../utils/tasks';

export const useTasksInState = (state, setState) => {
	const addState = (task) => {
		const changeTasks = state[task.progression];
		changeTasks.push(task);
		setState({
			...state,
			[task.progression]: changeTasks,
		});
	};
		
	const updateState = (task) => {
		const changeTasks = removeOneTask(state, task.progression, task.id);
		changeTasks.push(task);
		setState({
			...state,
			[task.progression]: changeTasks,
		});
	};
	
	const deleteTask = (task) => {
		const changeTasks = removeOneTask(state, task.progression, task.id);
		setState({
			...state,
			[task.progression]: changeTasks,
		});
	};

	return {addState, updateState, deleteTask};
}