import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./App";
import ErrorBoundry from "./components/ErrorBoundry";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Apps id={0} />
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);
