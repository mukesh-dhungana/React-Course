import React, { Component } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navbarDetailsArr = ["Home", "About", "Contact"];
  }
  render() {
    return (
      <div className="navbar">
        <ul>
          {this.navbarDetailsArr.map((x) => (
            <NavbarItem
              key={x}
              title={x}
              handleClick={this.props.handleClick}
              isActive={this.props.showPage[x]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;
