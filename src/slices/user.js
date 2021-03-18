import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { auth } from '../firebase';

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        console.log(auth.currentUser);
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState : {
        auth: false,
        loading: true,
        inProgress: false,
        user: null,
        error: ''
    },
    reducers: {
        logoutUser: () => {
            return {
                auth: false,
                loading: false,
                inProgress: false,
                user: null,
                error: ''
            };
        },
        setUser: (state, action) => {
            return {
                auth: false,
                loading: false,
                inProgress: false,
                user: action.payload,
                error: ''
            }
        }
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.inProgress = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.auth = true;
            state.inProgress = false;
            state.user = action.payload;
        },
        [getUser.rejected]: (state) => {
            state.inProgress = false;
            state.error = 'No user authenticated';
        }
    }
});

export const { logoutUser, setUser } = userSlice.actions;

export default userSlice.reducer;