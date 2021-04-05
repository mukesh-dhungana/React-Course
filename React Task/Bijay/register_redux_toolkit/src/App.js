import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import "./css/App.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import Navbar from "./components/navbar/Navbar";
import NavLogged from "./components/navbar/NavLogged";
import Register from "./components/auth/Register";
import { checkLogged, fetchUsers } from "./reducers/UsersSlice";
import Profile from "./components/userprofile/Profile";

const App = () => {

  const dispatch = useDispatch()

  //! Check if Logged In
  // const [logged, setLogged] = useState(false);
  const isLogged = useSelector(checkLogged);

  useEffect(()=> {
    dispatch(fetchUsers())
  })

  return (
    <>
      {isLogged ? <NavLogged /> : <Navbar />}
      <Switch>
        <Route path="/" exact render={() => isLogged ? <LandingPage /> : <Register/> } />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/dashboard" render={() => isLogged ? <LandingPage /> : <Register/>} />
        <Route path="/profile" render={() => isLogged ? <Profile /> : <Register/>} />
        {/* <Register /> */}
        {/* <Login /> */}
      </Switch>
    </>
  );
};

export default App;
