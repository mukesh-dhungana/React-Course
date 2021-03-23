import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";

function Login() {
  const [data, setData] = useState({
    defaultUsername: "admin",
    defaultPassword: "admin",
    username: "admin",
    password: "admin",
    error: "",
    redirect: false,
  });

  const {
    defaultUsername,
    defaultPassword,
    username,
    password,
    error,
    redirect,
  } = data;

  const handleChange = (name, event) => {
    setData({
      ...data,
      [name]: event.target.value,
      error: "",
      redirect: false,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (defaultUsername === username && defaultPassword === password) {
      localStorage.setItem("item", "true");
      setData({ ...data, error: "", redirect: true });
    } else {
      setData({
        ...data,
        redirect: false,
        error: "Username or Password Do not Match",
      });
    }
  };

  const redirectTo = () => redirect && <Redirect to="/dashboard" />;

  const errMsg = () => (
    <div
      className=" container col-md-8 offset-md-2 alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <div>
      <Layout
        title="Login Page"
        description="This is Login page"
        className="container col-md-8 offset-md-2"
      >
        {errMsg()}
        {redirectTo()}
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      </Layout>
    </div>
  );
}

export default Login;
