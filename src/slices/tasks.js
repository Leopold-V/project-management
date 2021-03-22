import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (user, { rejectWithValue }) => {
  const task = [];
  try {
    const querySnapshot = await db.collection('tasks').where('userId', '==', user.uid).get();
    querySnapshot.forEach((doc) => {
      task.push({ id: doc.id, ...doc.data() });
    });
    return task;
  } catch (error) {
    return rejectWithValue(error.code);
  }
});

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
  },
});

//export const { } = tasksSlice.actions;


export default taskSlice.reducer;
