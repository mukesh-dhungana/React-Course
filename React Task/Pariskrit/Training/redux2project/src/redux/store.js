import { createStore, applyMiddleware, compose } from "redux";
import { userReducer } from "./reducer";
import { customMiddleware } from "./customMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(customMiddleware))
);
