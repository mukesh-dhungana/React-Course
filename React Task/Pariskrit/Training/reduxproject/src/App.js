import React from "react";
import "./App.css";
import { createStore, applyMiddleware, compose } from "redux";
import { userReducer } from "./store/reducer";
import { customMiddleware } from "./store/customMiddleware";
import Users from "./components/Users";

function App() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    userReducer,
    composeEnhancers(applyMiddleware(customMiddleware))
  );

  return (
    <div className="app">
      <Users store={store} />
    </div>
  );
}

export default App;
