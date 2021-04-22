import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './reducers/store'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
    </Provider>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
