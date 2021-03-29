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
      state.text = state.value ? '#9b9b9b' : '#3a3a3a';
      state.shadow = state.value ? '' : '0rem 0rem 1rem rgba(255, 255, 255, .1)';
    },
  },
});

export const { change } = switchSlice.actions;

export default switchSlice.reducer;
