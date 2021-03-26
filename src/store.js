import { configureStore } from '@reduxjs/toolkit';

import projectReducer from './slices/sliceProjects';
import taskReducer from './slices/sliceTasks';
import switchReducer from './slices/sliceSwitch';

const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
    switch: switchReducer
  },
});

export default store;
