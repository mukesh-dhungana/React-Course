import { applyMiddleware, createStore, compose } from "redux";
import { reducer } from "./reducer";

const asynActionMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") return action(store.dispatch);
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(asynActionMiddleware))
);
