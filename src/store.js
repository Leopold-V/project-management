import { configureStore } from '@reduxjs/toolkit';

import projectReducer from './slices/sliceProjects';
import taskReducer from './slices/sliceTasks';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
  },
});

export default store;
