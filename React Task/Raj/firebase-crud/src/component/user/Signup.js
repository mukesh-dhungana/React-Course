import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = user;
  const handleChange = (name, e) =>
    setUser({ ...user, [name]: e.target.value });
  const form = () => (
    <>
      <form>
        <div className="form-group">
          <label className="text-muted">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={e => handleChange("username", e)}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email</label>
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
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
  return (
    <Layout
      title="Signup"
      description="This is Signup Page"
      className="container col-md-8 offset-md-2"
    >
      {}
      {form()}
    </Layout>
  );
};

export default Signup;
