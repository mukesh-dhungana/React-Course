import React from "react";

const Username = () => {
  console.log('Rendered');
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">@userName</span>
      </div>
      <input type="text" aria-label="First name" className="form-control" />
    </div>
  );
};

export default Username;
