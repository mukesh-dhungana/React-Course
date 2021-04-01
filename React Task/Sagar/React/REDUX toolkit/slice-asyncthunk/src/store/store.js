import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../slice/slice";
import { customMiddleware } from "../middleware/customMiddleware";

const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});

export default store;
