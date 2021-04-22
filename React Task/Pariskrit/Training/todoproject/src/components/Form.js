import React from "react";
import { TextField } from "@material-ui/core";

function Form({ addTodo, reset, value, onChange }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      <TextField placeholder="Enter Todo.." value={value} onChange={onChange} />
    </form>
  );
}

export default Form;
