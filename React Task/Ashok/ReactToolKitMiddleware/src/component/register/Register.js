import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { register } from "../../redux/userSlice";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "40%",
    margin: "30px auto",
    padding: "10px",
  },
  formflex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  cardHeader: {
    textAlign: "center",
  },
});

export default function Register({ history }) {
  const classes = useStyles();
  const [userData, setuserData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(register(userData));
    history.push("/profile");
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Register yourself" className={classes.cardHeader} />
      <form className={classes.formflex} onSubmit={handleSubmitRegister}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Register
        </Button>
      </form>
    </Card>
  );
}
