import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nvarbar from "./components/Navbar/Nvarbar";
import Home from "./screens/home/Home";
import AddUser from "./screens/AddUser";
import Allusers from "./screens/Allusers";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserDetail from "./screens/Userdetail/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Nvarbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/all-users" component={Allusers} />
        <Route exact path="/user/:id" component={UserDetail} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
