import React from "react";
import HocComponent from "./HocComponent";
import { Button } from "@material-ui/core";

function Form({ handleSubmit, handleChange, data, clear, result }) {
  return (
    <div>
      <>
        <form
          id="form"
          className="container col-md-8 offset-md-2"
          onSubmit={handleSubmit} 
        >
          <h1>{result}</h1>
          <div className="form-group">
            <label className="text-muted">UserName</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={data}
              onChange={handleChange}
            />
            <Button color="secondary" variant="outlined" onClick={clear}>
              Clear
            </Button>
          </div>
        </form>
      </>
    </div>
  );
}

export default HocComponent(Form);
