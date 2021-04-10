import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./Fetch/Fetch";
import editData from "./Config/Config";
// import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: { fetchSlice, editData },
});
