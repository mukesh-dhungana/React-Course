import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import Form from "./Form";

function Login({ history }) {
  const [data] = useState({
    username: "admin",
    password: "admin",
  });

  const [state, setstate] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, event) => {
    setstate({ ...state, [name]: event.target.value });
  };
  // const timer = () =>
  //   setTimeout(() => localStorage.setItem("item", "false"), 6000);

  const handleSubmit = event => {
    // timer();
    event.preventDefault();
    if (data.username === state.username && data.password === state.password) {
      localStorage.setItem("item", "true");
      return history.push("/dashboard");
    } else {
      alert("Invalid Username and Password");
    }
  };

  return (
    <>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
}

export default withRouter(Login);
