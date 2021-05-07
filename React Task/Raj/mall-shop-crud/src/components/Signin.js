import React, { useState } from "react";
import { Redirect } from "react-router";
import { Auth } from "../context/authContext";
import Firebase from "../firebase/config";
const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    redirect: false,
  });
  const { state, dispatch } = React.useContext(Auth);
  const { email, password, redirect } = user;

  const handleChange = (name, e) => {
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let response = await Firebase.signinUser(email, password);
    if (response.hasOwnProperty("message")) {
      console.log(response.message);
    } else {
      console.log("signin", response);
      setUser(preState => ({ ...preState, redirect: true }));
      return dispatch({
        type: "SIGNIN",
        payload: response.user,
      });
    }
  };
  if (redirect) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={e => handleChange("email", e)} />
        <label htmlFor="password">Password</label>
        <input type="text" onChange={e => handleChange("password", e)} />
        <input type="submit" value="create account" />
      </form>
    </>
  );
};

export default Signin;
