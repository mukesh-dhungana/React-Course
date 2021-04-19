import { createReducer } from "@reduxjs/toolkit";
import { edit } from "../actions/action";

const initialState = {
  user: {
    id: 12,
    name: "Xyz",
    email: "xyz@gmail.com",
    address: "xyz xyz",
    phone: "2121212121221",
  }, 
};

export const rootReducer = createReducer(initialState, {
  [edit]: (state, action) => {
    // console.log(action.payload);
    state.user = action.payload;
    // return action.payload;
  },
});
