import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../slice/slice";

const store = configureStore({
  reducer: Reducer,
});

export default store