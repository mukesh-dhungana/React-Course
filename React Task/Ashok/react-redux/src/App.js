import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Profile from "./component/Profile/Profile";
import Error from "./component/Error/Error";
import "./App.css";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  ></Route>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/home" exact component={Home} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
