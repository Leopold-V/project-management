import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';

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
      console.log(action.payload);
      state.loading = false;
      state.projects = action.payload;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//export const { } = projectSlice.actions;

export default projectSlice.reducer;
