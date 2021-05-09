import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./components/configSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: myReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
