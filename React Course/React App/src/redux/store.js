import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { increment } from "./reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/saga'

const sagaMiddleware=createSagaMiddleware();
const loggerMiddleware = (storeApi) => (next) => (action) => {
  const { dispatch, getState } = storeApi;

  console.log("logger middleware");
  next(action);
  // dispatch(action)
  // else next(action);
};
const nextMiddleware = (storeApi) => (next) => (action) => {
  console.log("next middleware");
  next(action);
};
//const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: true }),
    // loggerMiddleware,
    // nextMiddleware,
    sagaMiddleware
  ],
  devTool: process.env.NODE_ENV !== "production",
});
sagaMiddleware.run(rootSaga);
//store.subscribe(() => console.log("state upated", store.getState()));
export default store;
