import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../Action/index";
import cuid from "cuid";

export const AddData = () => {
  const [values, setValues] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setValues(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setValues(dispatch(AddTodo({ value: values, id: cuid() })));
    e.target.data.value = "";
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input name="data" type="text" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};
