import React, { Component } from "react";
import { NavBarItems } from "../../constant";
import AboutUS from "../aboutus/AboutUS";
import Bank from "../Bank/Bank";
import Gallery from "../gallery/gallery";
import Home from "../home/Home";
import NavbarItem from "../NavbarItem/NavbarItem";
import Product from "../product/product";
import "./navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentId: "Home",
    };
  }

  handleClick = (id) => {
    this.setState({ componentId: id });
  };

  render() {
    let { componentId } = this.state;

    return (
      <>
        <div className="navbar">
          <div id="logo" onClick={() => this.handleClick("Home")}>
            W<span>EN</span>
          </div>

          {NavBarItems.map(({ id, name }) => (
            <NavbarItem
              key={id}
              name={name}
              onClick={() => this.handleClick(name)}
              active={componentId}
            />
          ))}
        </div>

        <div className="com">
          {componentId === "Home" && <Home />}
          {componentId === "About Us" && <AboutUS />}
          {componentId === "Products" && <Product />}
          {componentId === "Blog" && <Bank />}
          {componentId === "Gallery" && <Gallery />}
        </div>
      </>
    );
  }
}
