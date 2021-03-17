import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

function EditUser(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    name: "",
    phone: "",
  });

  const history = useHistory();
  const { id } = useParams();

  const handleChange = (name, e) =>
    setUser({ ...user, [name]: e.target.value }); // target the field name and store the value in that field name

  const formSubmit = async e => {
    e.preventDefault();
    await Axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };

  const EditForm = async () => {
    const result = await Axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => EditForm(), []);
  const { username, name, email, phone } = user;
  return (
    <div className="container">
      <h3>Edit User</h3>
      <form method="post" onSubmit={e => formSubmit(e)}>
        <div className="form-group">
          <TextField
            label="Name"
            type="text"
            name="name"
            className="form-control"
            onChange={e => handleChange("name", e)}
            value={name}
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <TextField
            label="Email"
            type="text"
            name="email"
            className="form-control"
            onChange={e => handleChange("email", e)}
            value={email}
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <TextField
            label="Username"
            type="text"
            name="username"
            className="form-control"
            onChange={e => handleChange("username", e)}
            value={username}
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <TextField
            label="Phone"
            type="text"
            name="phone"
            className="form-control"
            onChange={e => handleChange("phone", e)}
            value={phone}
            placeholder="Phone"
          />
        </div>

        <Button type="submit" color="secondary" variant="outlined">
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
