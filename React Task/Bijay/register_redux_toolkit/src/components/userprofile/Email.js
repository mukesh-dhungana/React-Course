import React from "react";

const Email = () => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">@primaryemail</span>
      </div>
      <input type="email" aria-label="First name" className="form-control" />
    </div>
  );
};

export default Email;
