import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Auth } from "../context/authContext";
import Firebase from "../firebase/config";

const Nav = props => {
  const [userState, setUserState] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const { state, dispatch } = React.useContext(Auth);

  useEffect(() => {
    // return user that login
    Firebase.getUserState().then(user => {
      if (user) {
        setUserState(user);
        setUserEmail(user.email);
      }
    });
  }, []);

  const logoutUser = () => {
    Firebase.logout();
    setUserState(null);
    props.history.replace("/login");
    return dispatch({
      type: "LOGOUT",
      payload: {},
    });
  };

  let button;
  if (userState != null || state.user.hasOwnProperty("user")) {
    button = (
      <>
        <li>{userEmail}</li>
        <li>
          <button className="logout" onClick={() => logoutUser}>
            Logout
          </button>
        </li>
      </>
    );
  } else {
    button = (
      <>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Malls</Link>
        </li>
        <li>
          <Link to="/create">New Post</Link>
        </li>
        {button}
      </ul>
    </nav>
  );
};

export default withRouter(Nav);
