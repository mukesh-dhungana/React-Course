import { Button, TextField } from "@material-ui/core";
import React from "react";

function FormComponent({ onSubmit }) {
  return (
    <div>
      <form autoComplete="off" onSubmit={onSubmit}>
        <TextField id="standard-basic" label="todo" name="todo" />
        <Button variant="contained" color="secondary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

export default FormComponent;
