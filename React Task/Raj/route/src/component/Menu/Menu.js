import React from "react";
import { Link, withRouter } from "react-router-dom";

function Menu({ history }) {
  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "white" };
    } else {
      return { color: "black" };
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs bg-secondary">
        <li className="nav-item">
          <Link className="nav-link" to="/" style={isActive(history, "/")}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/about")}
            to={{ pathname: "/about", state: "About Us " }}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/api"
            style={isActive(history, "/api")}
          >
            NewUser
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Menu);
