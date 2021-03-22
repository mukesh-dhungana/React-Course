import { useReducer } from "react";
import { reducer, initalState } from "./reducer";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllUser from "./component/allusers/AllUser";
import UserDetail from "./component/singleuser/UserDetail";

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="App">
      {console.log(state)}
      <BrowserRouter>
        <Switch>
          <Route exact path="/all-users">
            <AllUser users={state?.allUsers} dispatch={dispatch} />
          </Route>
          <Route exact path="/user/:id">
            <UserDetail users={state?.allUsers} dispatch={dispatch} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
