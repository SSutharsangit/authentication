
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginsuccesfully: (state, action) => {
      state.currentUser = action.payload;
    },
    loginfailure: (state) => {
      state.currentUser = null;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginsuccesfully, loginfailure, logout } = userSlice.actions;

export default userSlice.reducer;
