import React, { useReducer } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { reducer, initialState } from "./reducer";
import Users from "./Users";
import UserId from "./UserId";

function Parent() {
  const { path, url } = useRouteMatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state)

  return (
    <div className="parent">
      <Link to={`${url}/users`}>List</Link>
      <Switch>
        <Route path={`${path}/users`} exact>
          <Users state={state} dispatch={dispatch} />
        </Route>
        <Route path={`${path}/users/:id`} exact>
          <UserId state={state} dispatch={dispatch} />
        </Route>
      </Switch>
    </div>
  );
}

export default Parent;
