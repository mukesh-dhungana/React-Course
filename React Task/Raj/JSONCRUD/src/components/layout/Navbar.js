import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Navbar(props) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Button href="/" color="secondary">
            Navbar
          </Button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Button href="/" color="primary">
                  Home
                </Button>
              </li>
              <li className="nav-item">
                <Button href="/about" color="inherit">
                  About
                </Button>
              </li>
              <li className="nav-item">
                <Button href="/contact" color="secondary">
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          <Link className="btn btn-secondary" to="/user">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
