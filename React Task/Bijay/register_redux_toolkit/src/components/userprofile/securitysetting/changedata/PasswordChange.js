import React from "react";
import Buttons from "../../buttons/Buttons";

const PasswordChange = props => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">@</span>
          <span className="input-group-text">Password</span>
        </div>
        <input type="text" className="form-control" aria-label="Password" />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">@</span>
          <span className="input-group-text">Confirm Password</span>
        </div>
        <input
          type="password"
          className="form-control"
          aria-label="Password2"
        />
      </div>
      <div className="buttons">
        <Buttons path={props.path} />
      </div>
    </>
  );
};

export default PasswordChange;
