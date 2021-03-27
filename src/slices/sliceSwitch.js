import { createSlice } from '@reduxjs/toolkit';

export const switchSlice = createSlice({
  name: 'switch',
  initialState: {
    value: true,
    color: '#01b075',
    background: '#030111',
    card: '#27262b',
  },
  reducers: {
    change: (state) => {
      state.value = !state.value;
      state.background = state.value ? '#030111' : '#ebecf0';
      state.card = state.value ? '#27262b' : 'whitesmoke';
    },
  },
});

export const { change } = switchSlice.actions;

export default switchSlice.reducer;
