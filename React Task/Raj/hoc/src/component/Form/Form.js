import React from "react";
import { Button } from "@material-ui/core";

function Form({ handleChange, handleSubmit }) {
  const form = () => (
    <>
      <h2 className="my-10">Login Here... </h2>
      <form className="container col-md-8 offset-md-2">
        <div className="form-group">
          <label className="text-muted">UserName</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={e => handleChange("username", e)}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={e => handleChange("password", e)}
          />
        </div>
        <div>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Login
          </Button>
        </div>
      </form>
    </>
  );
  return <div>{form()}</div>;
}

export default Form;
