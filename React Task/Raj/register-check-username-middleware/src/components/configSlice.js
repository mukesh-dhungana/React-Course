import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "register",
  initialState: { data: null },
  reducers: {
    signup: (state, { payload }) => {
      state.data = payload;
    },
    logout: state => {
      state.data = null;
    },
    editUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default mySlice.reducer;
export const { signup, logout, editUser } = mySlice.actions;
