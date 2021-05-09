import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./configSlice";

export const Signup = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const { name, password } = state;

  const handleChange = (name, e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup({ name, password, loggedIn: true }));
    setState({ name: "", password: "" });
  };
  const form = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => handleChange("name", e)}
          value={name}
          required
        />
        <input
          type="text"
          onChange={e => handleChange("password", e)}
          required
          value={password}
        />
        <input type="submit" />
      </form>
    );
  };
  return <div>{form()}</div>;
};
