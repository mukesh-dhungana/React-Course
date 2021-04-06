import { configureStore } from "@reduxjs/toolkit";
import { customMiddleware } from "./customMiddleware";
import userReducer from "./reducer";

export const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});
