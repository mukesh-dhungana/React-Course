import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "./utils/constant";
import Error from "./component/Error/Error";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/posts" />
          {Routes.map((route) => (
            <Route
              path={route.path}
              exact={route.isExact}
              component={route.component}
              key={route.id}
            />
          ))}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
