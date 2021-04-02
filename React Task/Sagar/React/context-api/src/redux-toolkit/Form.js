import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Form = ({ value, setValue, submitHandler }) => {
  const classes = useStyles();

  const { name, phone } = value;

  return (
    <div className={classes.input}>
      <TextField
        style={{ marginRight: "20px" }}
        variant="outlined"
        label="Full Name"
        type="text"
        value={name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <TextField
        style={{ marginRight: "20px" }}
        variant="outlined"
        label="Phone Number"
        type="number"
        value={phone}
        onChange={(e) => setValue({ ...value, phone: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => submitHandler()}
      >
        Ok
      </Button>
    </div>
  );
};

export default Form;
