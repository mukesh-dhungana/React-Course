import React from "react";
import Buttons from '../../buttons/Buttons';

const Email = (props) => {
  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">@primaryemail</span>
        </div>
        <input type="email" aria-label="First name" className="form-control" />
      </div>
      <div className="buttons">
      <Buttons path={props.path} />
      </div>
    </>
  );
};

export default Email;
