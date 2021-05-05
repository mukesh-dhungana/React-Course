import ProtectedRoute from "./ProtectedRoute";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import React, { useState, useEffect, useReducer, createContext } from "react";
import {
  Login,
  Dashboard,
  MallForm,
  PageNotFound,
  SingleMall,
  AllMalls,
  AllShops,
  ShopForm,
  SingleShop,
} from "./components";
import allDataReducer from "./reducers/allDataReducer";
import Nav from "./components/Nav";

import EditMall from './components/mall/EditMall'

const MyContext = createContext();

function App() {
  const location = useLocation();
  const allData = [];

  //State
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [allDataState, allDataDispatch] = useReducer(allDataReducer, allData);

  //Local Storage Thing
  useEffect(() => {
    if (localStorage.getItem("isAuth") === null) {
      localStorage.setItem("isAuth", "false");
    } else {
      localStorage.getItem("isAuth");
    }
  }, []);

  return (
    <MyContext.Provider value={{ allDataState, allDataDispatch }}>
      {location.pathname.split("/")[1] === "admin" && <Nav />}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route
          exact
          path="/login"
          render={() => <Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <ProtectedRoute
          path="/admin/dashboard"
          component={Dashboard}
          page="/login"
          exact
        />
        <ProtectedRoute
          path="/admin/newMall"
          component={MallForm}
          page="/"
          exact
        />

        <Route exact path="/pageNotFound" component={PageNotFound} />
        <Route exact path="/malls/:id" component={SingleMall} />
        <ProtectedRoute exact path="/admin/malls/:id" component={SingleMall} />
        <ProtectedRoute exact path="/admin/malls" component={AllMalls} />
        <ProtectedRoute exact path="/admin/editMall" component={EditMall} />
        <Route exact path="/malls" component={AllMalls} />
        <ProtectedRoute exact path="/admin/shops" component={AllShops} />
        <Route exact path="/shops" component={AllShops} />

        <ProtectedRoute
          exact
          path="/admin/:id/shops/:type"
          component={SingleShop}
        />
        <Route exact path="/:id/shops/:type" component={SingleShop} />
        <Route exact path="/mall/:id/shops/:type" component={SingleShop} />

        <ProtectedRoute
          path="/admin/newShop"
          component={ShopForm}
          page="/"
          exact
        />
        <Redirect to="/pageNotFound" />
      </Switch>
    </MyContext.Provider>
  );
}

export { MyContext };
export default App;
