import { configureStore } from '@reduxjs/toolkit';

import projectReducer from './slices/projects';
import taskReducer from './slices/tasks';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
  },
});

export default store;
