import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, fetchAddTask, fetchDeleteTask, fetchUpdateTask } from '../actions/actionsTasks';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchAddTask.pending]: (state) => {
      state.loading = true;
    },
    [fetchAddTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload);
    },
    [fetchAddTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchUpdateTask.pending]: (state) => {
      state.loading = true;
    },
    [fetchUpdateTask.fulfilled]: (state, action) => {
      state.loading = false;
      const task = state.tasks.find((ele) => ele.id === action.payload.id);
      task.name = action.payload.name;
      task.progression = action.payload.progression;
    },
    [fetchUpdateTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchDeleteTask.pending]: (state) => {
      state.loading = true;
    },
    [fetchDeleteTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.filter((ele) => ele.id !== action.payload);
    },
    [fetchDeleteTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const tasksSelector = (state) => state.tasks.tasks;

export default taskSlice.reducer;
