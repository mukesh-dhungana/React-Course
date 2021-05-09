import React from "react";
import "./Navbar.css";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-left">
            <img src="./images/logo.jpg" alt="logo" />
          </div>
          <div className="nav-right">
            <Link>
              <div className="cart">
                <BsFillBagFill className="icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
