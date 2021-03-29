import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { db } from '../firebase';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (user, { rejectWithValue }) => {
  const task = [];
  try {
    const querySnapshot = await db.collection('tasks').where('userId', '==', user.uid).get();
    querySnapshot.forEach((doc) => {
      task.push({ id: doc.id, ...doc.data() });
    });
    return task.sort((a, b) => a.position - b.position);
  } catch (error) {
    return rejectWithValue(error.code);
  }
});

export const fetchAddTask = createAsyncThunk('tasks/fetchAddTasks', async (task, { rejectWithValue }) => {
  let result = {};
  let error = false;
  await toast.promise(db.collection('tasks').add(task), {
    loading: 'Loading',
    success: (doc) => {
      result = { id: doc.id, ...task };
      return 'Task successfully created 🔥';
    },
    error: (error) => {
      return error.code;
    },
  });
  if (error) {
    return rejectWithValue(error.code);
  }
  return result;
});

export const fetchDeleteTask = createAsyncThunk('tasks/fetchDeleteTask', async (tid, { rejectWithValue }) => {
  let error = false;
  await toast.promise(db.collection('tasks').doc(tid).delete(), {
    loading: 'Loading',
    success: () => {
      return 'Task successfully deleted 🔥';
    },
    error: (error) => {
      return error.code;
    },
  });
  if (error) {
    return rejectWithValue(error.code);
  }
  return tid;
});

export const fetchUpdateTask = createAsyncThunk('tasks/fetchUpdateTask', async (task, { rejectWithValue }) => {
  let error = false;
  await toast.promise(db.collection('tasks').doc(task.id).update(task), {
    loading: 'Loading',
    success: () => {
      return 'Task successfully updated 🔥';
    },
    error: (error) => {
      return error.code;
    },
  });
  if (error) {
    return rejectWithValue(error.code);
  }
  return task;
});
