import { useState } from "react";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { registeredUSer } from "../../database/data";
import { connect } from "react-redux";
import { getAllUserAction } from "../../Redux/action";
import { withRouter } from "react-router";
import "./style.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    margin: "20px auto",
  },
  header: {
    textAlign: "center",
  },
});

function Login(props) {
  const classes = useStyles();
  const [user, setuser] = useState({});
  const [isformerr, setFormErr] = useState(false);

  const handleChane = (e) => {
    setuser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = registeredUSer.find(
      (item) => item.email === user.email && item.password === user.password
    );
    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound.email));
      if (isformerr) setFormErr(false);
      props.getAllUserAction("https://jsonplaceholder.typicode.com/users");
      props.history.push("/home");
    } else {
      console.log("user not found");
      setFormErr(true);
    }
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader className={classes.header} title="Login In " />
        <CardContent>
          <form className="formContainer" onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                id="my-input"
                name="email"
                aria-describedby="my-helper-text"
                onChange={handleChane}
              />
              <FormHelperText id="my-helper-text">
                Enter email address
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input
                id="my-input"
                name="password"
                aria-describedby="my-helper-text"
                type="password"
                onChange={handleChane}
              />
              <FormHelperText id="my-helper-text">
                Enter password
              </FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Login In
            </Button>
          </form>
        </CardContent>
        <Typography>{isformerr && "Invalid username or password"}</Typography>
      </Card>
    </div>
  );
}

export default withRouter(connect(null, { getAllUserAction })(Login));
