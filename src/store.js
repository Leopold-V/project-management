import { configureStore } from '@reduxjs/toolkit';

import projectReducer from './slices/projects';

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
