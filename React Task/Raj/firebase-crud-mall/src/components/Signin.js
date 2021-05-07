import React, { useState } from "react";
import firebase from "../firebase/config";
import { Redirect } from "react-router-dom";
import { Auth } from "../context/authContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, setRouteRedirect] = useState(false);
  const [error, setError] = useState("");
  const { state, dispatch } = React.useContext(Auth);

  const signin = async e => {
    console.log(state);
    e.preventDefault();

    let response = await firebase.signin(email, password);
    if (response.hasOwnProperty("message")) {
      setError(response.message);
    } else {
      console.log(response.user);
      setRouteRedirect(true);
      return dispatch({
        type: "SIGNIN",
        payload: response.user,
      });
    }
  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <form onSubmit={signin}>
        <p>Create an Account.</p>
        {error && <p>{error}</p>}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <input className="signIn" type="submit" value="Create account" />
      </form>
    </React.Fragment>
  );
};
export default Signin;
