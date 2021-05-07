import "./App.css";
import React from "react";
import Data from "./components/Data";
import Loading from "./components/Loading";
import { edit, getData, load } from "./slice/slice";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

  const selector = useSelector((state) => state.user);
  const selectorData = useSelector((state) => state.entities);
  const selectorLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState({
    id: selector.id,
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  console.log(selector);
  const handleEdit = () => {
    setValue({
      id: selector.id,
      name: selector.name,
      email: selector.email,
      address: selector.address,
      phone: selector.phone,
    });
  };

  const changeHandler = (name, e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(edit({ id, name, email, address, phone }));
    setValue({ name: "", email: "", address: "", phone: "" });
  };

  const { id, name, email, address, phone } = value;

  return (
    <Container className={classes.App}>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <TextField
          color="primary"
          label="Name"
          type="text"
          placeholder="Name"
          onChange={(e) => changeHandler("name", e)}
          value={name}
          className={classes.textField}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Email"
          onChange={(e) => changeHandler("email", e)}
          value={email}
          className={classes.textField}
        />
        <TextField
          label="Address"
          type="text"
          placeholder="Address"
          onChange={(e) => changeHandler("address", e)}
          value={address}
          className={classes.textField}
        />
        <TextField
          label="Phone Number"
          type="number"
          placeholder="Phone No."
          onChange={(e) => changeHandler("phone", e)}
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
        color="secondary"
        variant="contained"
        onClick={() => handleEdit()}
      >
        Edit
      </Button>
      <br />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => (
          <>
            {dispatch(load())}
            {dispatch(getData("https://randomuser.me/api/?results=100"))}
          </>
        )}
      >
        Fetch
      </Button>
      {selectorLoading ? <Loading /> : <Data data={selectorData} />}
    </Container>
  );
}

export default App;
