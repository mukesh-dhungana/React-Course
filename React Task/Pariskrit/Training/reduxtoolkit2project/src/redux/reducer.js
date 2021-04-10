import { createReducer } from "@reduxjs/toolkit";
import { edit } from "./actionCreators";
const initialState = {
  user: {
    id: 12,
    name: "Xyz",
    email: "xyz@gmail.com",
    address: "xyz xyz",
    phone: "21212121212",
  },
};

export const reducer = createReducer(initialState, {
  [edit]: (state, action) => {
    state.user = action.payload;
  },
});
