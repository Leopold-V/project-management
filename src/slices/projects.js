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
  await toast.promise(db.collection('projects').add(newProject), {
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

export const fetchDeleteProject = createAsyncThunk('projects/FetchDeleteProject', async (pid, { rejectWithValue }) => {
  let error = false;
  await toast.promise(db.collection('projects').doc(pid).delete(), {
    loading: 'Loading',
    success: () => {
      return 'Project successfully deleted 🔥';
    },
    error: (error) => {
      error = error.code;
      return error;
    },
  })
  if (error) {
    return rejectWithValue(error.code);
  }
  return pid;
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
  },
});

//export const { } = projectSlice.actions;

export const projectsSelector = state => state.projects.projects;

export default projectSlice.reducer;
