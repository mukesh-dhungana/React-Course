import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/reducer";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register() {
  const [user, setUser] = React.useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    history.push("/profile");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegisterUser}>
        <TextField
          id="standard-basic"
          label="Username"
          value={user.username || ""}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          value={user.password || ""}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <Button
          className="button"
          type="submit"
          color="primary"
          variant="contained"
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
