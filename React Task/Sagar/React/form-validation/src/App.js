import "./App.css";
import Test from "./test/Test";
import Login from "./components/Login";
import Register from "./components/Register";
import Succeed from "./components/Succeed";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/succeed" component={Succeed} />
      </Switch>
    </div>
  );
}

export default App;
