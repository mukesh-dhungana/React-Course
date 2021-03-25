import { createStore } from "redux";
import getData from "../reducers/reducer";

export const store = createStore(
  getData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
