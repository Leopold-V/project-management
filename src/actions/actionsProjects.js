import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';
import toast from 'react-hot-toast';
import getCurrentUser from '../utils/user';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async (user, { rejectWithValue }) => {
    const projects = [];
    try {
      const projectsList = await db.collection('projects').where('userId', '==', user.uid).get();
      projectsList.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });
      return projects;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  });
  
  export const fetchAddProject = createAsyncThunk('projects/FetchAddProject', async (project, { rejectWithValue }) => {
    let result = {};
    let error = false;
    await toast.promise(db.collection('projects').add(project), {
      loading: 'Loading',
      success: (doc) => {
        result = { id: doc.id, ...project };
        return 'Project successfully created 🔥';
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
  
  export const fetchDeleteProject = createAsyncThunk('projects/FetchDeleteProject', async (pid, { rejectWithValue }) => {
    let error = false;
    await toast.promise(
      (async function test() {
        const batch = db.batch();
        batch.delete(db.collection('projects').doc(pid));
        const tasks = await db
          .collection('tasks')
          .where('userId', '==', getCurrentUser().uid)
          .where('projectId', '==', pid)
          .get();
        tasks.forEach(function (doc) {
          batch.delete(doc.ref);
        });
        return batch.commit();
      })(),
      {
        loading: 'Loading',
        success: () => {
          return 'Project successfully deleted 🔥';
        },
        error: (error) => {
          return error.code;
        },
      }
    );
    if (error) {
      return rejectWithValue(error.code);
    }
    return pid;
  });
  
  export const fetchUpdateProject = createAsyncThunk(
    'projects/FetchUpdateProject',
    async (project, { rejectWithValue }) => {
      let error = false;
      await toast.promise(db.collection('projects').doc(project.id).update(project), {
        loading: 'Loading',
        success: () => {
          return 'Project successfully updated 🔥';
        },
        error: (error) => {
          return error.code;
        },
      });
      if (error) {
        return rejectWithValue(error.code);
      }
      return project;
    }
  );