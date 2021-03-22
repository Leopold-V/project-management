import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: false,
    loading: true,
    inProgress: false,
    user: null,
    error: '',
  },
  reducers: {
    logoutUser: () => {
      return {
        auth: false,
        loading: false,
        inProgress: false,
        user: null,
        error: '',
      };
    },
    setUser: (state, action) => {
      return {
        auth: false,
        loading: false,
        inProgress: false,
        user: action.payload,
        error: '',
      };
    },
  },
  extraReducers: {},
});

export const { logoutUser, setUser } = userSlice.actions;

export default userSlice.reducer;
