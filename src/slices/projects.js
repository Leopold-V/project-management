import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';
import toast from 'react-hot-toast';
import getCurrentUser from '../utils/user';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async (user, { rejectWithValue }) => {
  const project = [];
  try {
    const querySnapshot = await db.collection('projects').where('userId', '==', user.uid).get();
    querySnapshot.forEach((doc) => {
      project.push({ id: doc.id, ...doc.data() });
    });
    return project;
  } catch (error) {
    return rejectWithValue(error.code);
  }
});

export const fetchAddProject = createAsyncThunk('projects/FetchAddProject', async (project, { rejectWithValue }) => {
  let result = {};
  let error = false;
  const newProject = {
    name: project.name,
    tech: project.tech,
    resume: project.resume,
    userId: getCurrentUser().uid
  }
  toast.promise(db.collection('projects').add(newProject), {
    loading: 'Loading',
    success: (doc) => {
      result = {id: doc.id, ...newProject}; 
      return 'Project successfully created 🔥';
    },
    error: (error) => {
      error = error.code;
      return error.code;
    },
  })
  if (error) {
    return rejectWithValue(error.code);
  }
  return result;
});

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
  },
});

//export const { } = projectSlice.actions;

export const projectsSelector = state => state.projects.projects;

export default projectSlice.reducer;
