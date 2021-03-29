import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

export const btnEdit = createAction("btn");

const initialState = {
  id: 12,
  name: "RaZz Chaudhary",
  email: "craj68168@gmail.com",
  address: "Kathmandu Nepal",
  phone: "9860512866",
};

const rootReducer = createReducer(initialState, {
  [btnEdit]: (state, action) => {
    state.id = action.payload.id;
    state.name = action.payload.name;
    state.email = action.payload.email;
    state.address = action.payload.address;
    state.phone = action.payload.phone;
  },
});

export const store = configureStore({
  reducer: rootReducer,
});
