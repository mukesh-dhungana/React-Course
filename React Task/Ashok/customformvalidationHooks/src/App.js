import React from "react";
// import Student from "./component/student/Student";
// import { StudentInfoProvider } from "./context/studentInfo.conext";
// import { StudentResultProvider } from "./context/studentResult.context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./component/Form/Register";
import Login from "./component/Form/Login";
import "./App.css";
import RegisterHook from "./component/formByHook/Register";
import LoginHook from "./component/formByHook/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/">
            <StudentInfoProvider>
              <StudentResultProvider>
                <Student />
              </StudentResultProvider>
            </StudentInfoProvider>
          </Route> */}
          <Route exact path="/" component={RegisterHook} />
          <Route exact path="/login" component={LoginHook} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/form/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
