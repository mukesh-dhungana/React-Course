import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    username: "",
    password: "",
  },
  error: {
    errorMessage: "",
    errorStatus: false,
  },
  loading: "false",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.userData = action.payload;
    },
    updateUser: (state, action) => {
      state.userData.password = action.payload.newPassword;
      state.error.errorMessage = "User password updated sucessfully";
      state.error.errorStatus = false;
    },
    error: (state, action) => {
      state.error.errorMessage = "Username not found";
      state.error.errorStatus = true;
    },
  },
});
export const { register, updateUser, error } = userSlice.actions;

export default userSlice.reducer;
