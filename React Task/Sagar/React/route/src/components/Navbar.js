import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="links">
      <Link to="/" className="home">
        Home
      </Link>
      <Link to="/about" className="about">
        About
      </Link>
      <Link
        to={{ pathname: "/contact", prop: "CONTACT USS" }}
        className="contact"
      >
        Contact
      </Link>
      <Link to="/posts" className="posts">
        Posts
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }} className="login">
        Login
      </Link>
      <Link to="/customhook" className="posts">
        CustomHooks
      </Link>
    </div>
  );
}

export default Navbar;
