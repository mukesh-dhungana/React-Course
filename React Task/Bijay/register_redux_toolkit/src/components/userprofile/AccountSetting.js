import React from "react";

const AccountSetting = () => {
  return (
    <div className="container account-container">
      <h4>Account Setting </h4>
      <div className="d-sm-flex align-items-center pt-3" id="deactivate">
        <div>
          {" "}
          <b>Deactivate your account</b>
          <p>Details about your company account and password</p>
        </div>
        <div className="ml-auto">
          {" "}
          <button className="btn danger">Deactivate</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
