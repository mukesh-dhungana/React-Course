import React, { useState } from "react";
import Layout from "../core/Layout";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleChange = (name, e) =>
    setUser({ ...user, [name]: e.target.value });
  const form = () => (
    <>
      <form>
        <div className="form-group">
          <label className="text-muted">email</label>
          <input
            type="email"
            className="form-control"
            onChange={e => handleChange("email", e)}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={e => handleChange("password", e)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Signin</button>
        </div>
      </form>
    </>
  );
  return (
    <Layout
      title="Signin Page"
      description="This is Signin Page"
      className="container col-md-8 offset-md-2"
    >
      {form()}
    </Layout>
  );
};

export default Signin;
