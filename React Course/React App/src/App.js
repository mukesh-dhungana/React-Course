import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import Test from "./Test";
import Users from "./components/Users";
import { Test1, Test2 } from "./components/Test";
import UseReducer from "./components/useReducer";
import UseCallBack from "./components/UseCallBack";
import UseMemo from "./components/UseMemo";
import Modal from "./components/Modal";
import Events from "./components/Events";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewUser from "./components/NewUser";
import ErrorPage from "./components/errorPage";
import ActionDispatcher from "./components/ActionDispatcher";
import ProviderWrapper from "./context/ProviderWrapper";
import Form from "./components/form-validation/Form";
import FormHooks from "./components/form-validation/FormHooks";
import StyleComponent from "./components/style-component";
import MyStyleComponent from "./components/style-component/Style";
import Count from "./components/Count";
import Block from './components/Block'
import Attachment from "./components/Attachment";

function App({ id }) {
  const [string, setvalue] = useState(false);
  const [title, setTitle] = useState("This is title");
  const [isShown, setShowModal] = useState(false);
  let value = " This is home page";
  let style =
    id !== 0
      ? {
          background: "red",
          "margin-right": "20px",
          fontSize: "24px",
        }
      : {};

  const changeState = useCallback(
    (title) => {
      setTitle((prev) => title);
    },
    [title]
  );

  const changeValue = (val) => {
    setvalue((prev) => val);
  };

  return (
    <div className="root">
          {/* <Users />
      <button onClick={() => setTitle("dsds")}>Set state</button>
      <button onClick={() => changeState("dsd")}>Change state</button>
      <button onClick={() => changeValue("fdfd")}>Change value</button> */}
      {/* 
      <button onClick={() => setShowModal(!isShown)}>Toggle Modal show</button> */}
      {/* <UseReducer />
      <UseCallBack onClick={changeState} />
      <UseMemo /> */}
      {/* {isShown && <Modal show={isShown} />}
      <Events />
      <ActionDispatcher /> */}
      <Router>
        <Switch>
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route path="/contact">
            <Contact />
          </Route> */}
          {/* <Route path="/contact" render={(props) => <Contact {...props} />} /> */}
          <Route path="/user/:id" exact component={NewUser} />
          <Route path="/contact">
            <Contact />
            <Route path="/contact/user" component={Users} />
          </Route>
          {/* <Route path="/actions" component={ActionDispatcher} /> */}
          <Route path="/contextApi" component={ProviderWrapper} />
          <Route path="/form" component={Form} />
          <Route path="/formhooks" component={FormHooks} />
          <Route
            path="/style"
            render={(props) => <StyleComponent {...props} fontSize="10px" />}
          />
          <Route path="/myStyle" component={MyStyleComponent} />
          <Route path="/count" component={Count} />
          <Route path="/actions" component={ActionDispatcher} />
          <Route path="/blocks" component={Block} />
          <Route path="/upload" component={Attachment} />
          <Redirect from="/home" to="/" />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
