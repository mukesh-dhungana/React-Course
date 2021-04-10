import { applyMiddleware, createStore, compose } from "redux";
import { reducer } from "./reducer";

const asynActionMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") return action(store.dispatch);
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const persistedState = loadState();

export const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(asynActionMiddleware))
);

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    console.log("error saving state");
  }
};

store.subscribe(() => {
  saveState(store.getState());
});
