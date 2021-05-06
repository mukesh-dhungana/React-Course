import { configureStore } from "@reduxjs/toolkit";
import { photoReducer } from "./photoReducerSlice";

const store = configureStore({
  reducer: {
    photoReducer,
  },
});

export default store;
