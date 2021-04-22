import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./App";
import ErrorBoundry from "./components/ErrorBoundry";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Apps id={0} />
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
