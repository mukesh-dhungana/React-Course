import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./Config";
import cuid from "cuid";
import { del, edit } from "./Config";

const Signup = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const [state, setState] = useState({
    name: "",
    password: "",
    bol: false,
    id: "",
  });
  const { bol, id, name, password } = state;

  const handleChange = (name, e) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (bol) {
      dispatch(edit({ id: id, name, password }));
      setState({
        name: "",
        password: "",
      });
    } else {
      dispatch(signup({ id: cuid(), name, password }));
      setState({
        name: "",
        password: "",
      });
    }
  };

  const deleteData = x => {
    return dispatch(del(x));
  };
  const editData = x =>
    setState({
      name: x.name,
      password: x.password,
      id: x.id,
      bol: true,
    });
  const form = () => (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => handleChange("name", e)}
          value={name}
          required
        />
        <input
          type="text"
          value={password}
          onChange={e => handleChange("password", e)}
          required
        />
        <input type="submit" />
      </form>
      <div>
        {selector.data.map(x => (
          <>
            <h1>{x.name}</h1>
            <p>{x.password}</p>
            <button
              onClick={() => {
                let conf = window.confirm("Want to delete?");
                if (conf) {
                  deleteData(x);
                }
              }}
            >
              Delete
            </button>
            <button onClick={() => editData(x)}>Edit</button>
          </>
        ))}
      </div>
    </>
  );
  return <div>{form()}</div>;
};

export default Signup;
