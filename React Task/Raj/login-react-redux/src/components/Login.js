import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

export const Login = props => {
  console.log("login form", props);
  const [data, setData] = useState({});

  const {
    defaultUsername,
    defaultPassword,
    username,
    password,
    error,
    redirect,
    api,
  } = data;

  const handleChange = (name, event) => {
    setData({ ...data, [name]: event.target.value, error: false });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  const form = () => (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => handleChange("username", e)} />
        <input type="password" onChange={e => handleChange("password", e)} />
        <input type="submit" />
      </form>
    </>
  );
  return (
    <div>
      {console.log("fetchapi", api)}
      {errorMsg()}
      {redirectTo()}
      {form()}
    </div>
  );
};
