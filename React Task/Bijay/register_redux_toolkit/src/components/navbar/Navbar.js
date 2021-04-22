import React from "react";
import "./Navbar.css";
import { Link, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/">
        {" "}
        <a class="navbar-brand" href="!#">
          LOGO
        </a>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav not-logged mr-auto">
          <div className="flex-end">
            <li class="nav-item ">
              <Link to="/">
                <a class="nav-link" href="!#">
                  Register
                </a>
              </Link>
            </li>
            <li class="nav-item left-nav">
              <Link to="/login">
                <a class="nav-link" href="!#">
                  Login
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
