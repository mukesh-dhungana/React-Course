import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import DashBoard from "./component/dashboard/DashBoard";
import Home from "./component/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Provider store={store}>
            <DashBoard />
          </Provider>
        </Route>
        <Route exact path="/contextApi" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
