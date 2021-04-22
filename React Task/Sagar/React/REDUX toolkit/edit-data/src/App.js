import "./App.css";
import { edit } from "./actions/action";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    marginTop: 10,
    width: 500,
    padding: 10,
    marginBottom: 10,
  },

  App: {
    textAlign: "center",
    marginTop: 20,
  },

  textField: {
    marginRight: 10,
  },

  submit: {
    marginTop: 16,
    cursor: "pointer",
  },
});

function App() {
  const classes = useStyles();
  const selector = useSelector((state) => state.user, shallowEqual);
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    id: selector.id,
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { id, name, email, address, phone } = value;

  const onChangeHandler = (name, e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(edit({ id, name, email, address, phone }));
    setValue({ name: "", email: "", address: "", phone: "" });
  };

  return (
    <Container className={classes.App}>
      <form action="" onSubmit={onSubmitHandler}>
        <TextField
          color="primary"
          label="Name"
          type="text"
          placeholder="Name"
          onChange={(e) => onChangeHandler("name", e)}
          value={name}
          className={classes.textField}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Email"
          onChange={(e) => onChangeHandler("email", e)}
          value={email}
          className={classes.textField}
        />
        <TextField
          label="Address"
          type="text"
          placeholder="Address"
          onChange={(e) => onChangeHandler("address", e)}
          value={address}
          className={classes.textField}
        />
        <TextField
          label="Phone Number"
          type="number"
          placeholder="Phone No."
          onChange={(e) => onChangeHandler("phone", e)}
          value={phone}
          className={classes.textField}
        />
        <TextField
          type="submit"
          value="OK"
          color="secondary"
          className={classes.submit}
        />
      </form>
      <Paper className={classes.paper} elevation={3}>
        <Grid>
          <Typography variant="h6">{selector.id}</Typography>
          <Typography variant="subtitle1">
            <b>Name:</b> {selector.name}
          </Typography>
          <Typography variant="subtitle1">
            <b>Email:</b> {selector.email}
          </Typography>
          <Typography variant="subtitle1">
            <b>Address:</b> {selector.address}
          </Typography>
          <Typography variant="subtitle1">
            <b>Phone Number:</b> {selector.phone}
          </Typography>
        </Grid>
      </Paper>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          setValue({
            ...value,
            id: selector.id,
            name: selector.name,
            email: selector.email,
            address: selector.address,
            phone: selector.phone,
          })
        }
      >
        Edit
      </Button>
    </Container>
  );
}

export default App;
