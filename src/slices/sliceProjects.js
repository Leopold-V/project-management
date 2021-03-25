import { createSlice } from '@reduxjs/toolkit';
import { fetchProjects, fetchAddProject, fetchDeleteProject, fetchUpdateProject } from '../actions/actionsProjects';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.loading = true;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchAddProject.pending]: (state) => {
      state.loading = true;
    },
    [fetchAddProject.fulfilled]: (state, action) => {
      state.loading = false;
      state.projects.push(action.payload);
    },
    [fetchAddProject.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchDeleteProject.pending]: (state) => {
      state.loading = true;
    },
    [fetchDeleteProject.fulfilled]: (state, action) => {
      state.loading = false;
      state.projects = state.projects.filter((ele) => ele.id !== action.payload);
    },
    [fetchDeleteProject.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchUpdateProject.pending]: (state) => {
      state.loading = true;
    },
    [fetchUpdateProject.fulfilled]: (state, action) => {
      state.loading = false;
      const project = state.projects.find((ele) => ele.id === action.payload.id);
      project.name = action.payload.name;
      project.tech = action.payload.tech;
      project.resume = action.payload.resume;
    },
    [fetchUpdateProject.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const projectsSelector = (state) => state.projects.projects;

export default projectSlice.reducer;
