import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

function User() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    name: "",
    phone: "",
  });

  const { username, name, email, phone } = user;
  const history = useHistory();
  const inputRef = useRef();

  const handleChange = (e, name) =>
    setUser({ ...user, [name]: e.target.value }); // target the field name and store the value in that field name

  const formSubmit = async e => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/users", user);
    history.push("/");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container">
      <h2>Add User</h2>
      <form method="post" onSubmit={e => formSubmit(e)}>
        <div className="form-group">
          <TextField
            label="Enter Name"
            ref={inputRef}
            type="text"
            name="name"
            className="form-control"
            onChange={e => handleChange(e, "name")}
            value={name}
          />
        </div>

        <div className="form-group">
          <TextField
            label="Enter Email"
            type="text"
            name="email"
            className="form-control"
            onChange={e => handleChange(e, "email")}
            value={email}
          />
        </div>

        <div className="form-group">
          <TextField
            label="Enter Username"
            type="text"
            name="username"
            className="form-control"
            onChange={e => handleChange(e, "username")}
            value={username}
          />
        </div>

        <div className="form-group">
          <TextField
            label="Enter Phone"
            type="text"
            name="phone"
            className="form-control"
            onChange={e => handleChange(e, "phone")}
            value={phone}
          />
        </div>

        <Button type="submit" variant="contained" color="secondary">
          Add
        </Button>
      </form>
    </div>
  );
}

export default User;
