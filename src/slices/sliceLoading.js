import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: true,
  },
  reducers: {
        endLoading: (state) => {
      state.loading = false;
    } 
  },
});

export const { endLoading } = loadingSlice.actions;

export const loadingSelector = (state) => state.loading.loading;

export default loadingSlice.reducer;
