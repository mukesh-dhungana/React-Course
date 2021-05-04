import { Avatar } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./navbar.css";

function Navbar() {
  const history = useHistory();

  return (
    <div className="navbar">
      <Avatar className="avatar">P</Avatar>
      <div className="navbar__right">
        <p
          onClick={() => {
            localStorage.removeItem("user");
            history.push("/login");
          }}
        >
          Logout
        </p>
        <p onClick={() => history.push("/user/home")}>Switch To User</p>
      </div>
    </div>
  );
}

export default Navbar;
