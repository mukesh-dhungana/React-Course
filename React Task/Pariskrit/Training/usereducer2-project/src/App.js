import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Route, Switch, useHistory } from "react-router-dom";
import Users from "./components/Users";
import SelectedUser from "./components/SelectedUser";
import { initialState, reducer } from "./useReducer/reducer";

function App() {
  const history = useHistory();
  const [{ userList }, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="App">
      <Button
        variant="outlined"
        color="primary"
        className="button"
        onClick={() => history.push("/allUsers")}
      >
        Users Lists
      </Button>

      <Switch>
        <Route
          path="/allUsers"
          render={() => <Users userList={userList} dispatch={dispatch} />}
        />
        <Route
          path="/user/:id"
          render={() => <SelectedUser dispatch={dispatch} />}
        />
      </Switch>
    </div>
  );
}

export default App;
