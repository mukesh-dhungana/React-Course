import React from "react";
import Buttons from "../../buttons/Buttons";

const Username = props => {
  console.log("Rendered");
  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">@userName</span>
        </div>
        <input type="text" aria-label="First name" className="form-control" />
      </div>
      <div className="buttons">
        <Buttons path={props.path} />
      </div>
    </>
  );
};

export default Username;
