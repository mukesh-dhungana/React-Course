import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

const Form = ({ un, pw, setError, setIsAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const userFunction = (e) => {
    setUsername(e.target.value);
  };

  const passFunctioin = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      if (username === un && password === pw) {
        localStorage.setItem("isAuth", "true");
        setIsAuth(localStorage.getItem("isAuth"));
        history.push("/profile");
      } else {
        setError("Username or Password didn't match.");
      }
    } else {
      setError("Please fill the form first");
    }
  };

  return (
    <div>
      <form
        className="loginForm"
        action=""
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <label htmlFor="user"></label>
        <input
          name="user"
          type="text"
          placeholder="Username"
          onChange={(e) => userFunction(e)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => passFunctioin(e)}
        />

        <input className="inputButton" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default withRouter(Form);
