import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { createStore } from "redux";
import { Reducer } from "./Reducer/Reducer";
import { Provider } from "react-redux";
const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
