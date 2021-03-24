import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

export const Login = props => {
  console.log("login form", props);
  const [data, setData] = useState({
    defaultUsername: "a",
    defaultPassword: "a",
    username: "",
    password: "",
    error: "",
    api: [],
    redirect: false,
  });

  const {
    defaultUsername,
    defaultPassword,
    username,
    password,
    error,
    redirect,
    api,
  } = data;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>
    await fetch(`http://hn.algolia.com/api/v1/search?query=node`)
      .then(data => data.json())
      .then(result => setData({ ...data, api: result.hits }));

  const handleChange = (name, event) => {
    setData({ ...data, [name]: event.target.value, error: false });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (defaultUsername === username && defaultPassword === password) {
      props.fetchData(api);
      setData({ ...data, error: false, redirect: true });
    } else {
      setData({
        ...data,
        error: "Username And Password Donot Match",
        redirect: false,
      });
    }
  };
  const errorMsg = () => (
    <div style={{ display: error ? "" : "none" }}>{error}</div>
  );
  const redirectTo = () => redirect && <Redirect to="/dashboard" />;

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
