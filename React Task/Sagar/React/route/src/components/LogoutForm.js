import React from "react";

const LogoutForm = ({ setIsAuth }) => {
  return (
    <div>
      <button
        className="logoutBtn"
        onClick={() => {
          localStorage.setItem("isAuth", "false");
          setIsAuth(localStorage.getItem("isAuth"));
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutForm;
