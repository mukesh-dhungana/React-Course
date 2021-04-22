import "./App.css";
import Test from "./test/Test";
import Login from "./components/Login";
import CLogin from "./customhook/CLogin";
import Succeed from "./components/Succeed";
import Register from "./components/Register";
import CRegister from "./customhook/CRegister";
import { Switch, Route, Link } from "react-router-dom";
import HookRegister from "./react-hook-form/HookRegister";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Form Validation</Link>
        <Link to="/customhook">Custom Hook FV</Link>
        <Link to="/hookRegister">React Hook Form</Link>
      </nav>
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Register} />
        <Route path="/succeed" component={Succeed} />

        {/* CustomHook */}
        <Route path="/customhook" component={CRegister} />
        <Route path="/clogin" component={CLogin} />

        {/* React Hook Form */}
        <Route path="/hookRegister" component={HookRegister} />
      </Switch>
    </div>
  );
}

export default App;
