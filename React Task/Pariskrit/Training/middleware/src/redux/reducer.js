import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: false,
  updated: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    updateUserPassword: (state, action) => {
      state.user = action.payload;
      state.updated = true;
    },
    error: (state, action) => {
      state.error = true;
    },
  },
});

export const { registerUser, updateUserPassword, error } = userSlice.actions;
export default userSlice.reducer;
