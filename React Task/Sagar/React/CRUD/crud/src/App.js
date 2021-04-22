import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";
import React, { useReducer } from "react";
import UserDetail from "./components/UserDetail";
import { Route, Switch } from "react-router-dom";

const initialState = {
  users: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, users: [...state.users, action.person] };
      
    case "DELETE":
      return {
        ...state,
        users: state.users.filter((l, i) => i !== action.id),
      };

    case "EDIT":
      return {
        ...state,
        users: state.users.map((l, i) =>
          i === action.id ? action.payload : l
        ),
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/user"
          render={() => <User list={state.users} dispatch={dispatch} />}
        />
        <Route
          path="/user/:id"
          render={(d) => (
            <UserDetail state={state.users} dispatch={dispatch} {...d} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
