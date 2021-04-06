import { configureStore } from "@reduxjs/toolkit";
import { userCheckMiddleWare } from "./middleware";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userCheckMiddleWare),
});

export default store;
