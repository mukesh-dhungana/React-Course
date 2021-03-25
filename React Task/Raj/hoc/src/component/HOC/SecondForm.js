import React from "react";
import HocComponent from "./HocComponent";
import { TextField } from "@material-ui/core";

function SecondForm(props) {
  return (
    <div>
      <>
        <form className="container col-md-8 offset-md-2">
          <div className="form-group">
            <TextField label="Username" name="username" />
          </div>
        </form>
      </>
    </div>
  );
}

export default HocComponent(SecondForm);
