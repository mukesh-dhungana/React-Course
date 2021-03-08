import React from "react";
import "./navbaritem.css";

function NavbarItem({ title, handleClick, isActive }) {
  let style = null;
  if (isActive) {
    style = { background: "#a39e9e" };
  }
  return (
    <li className="navbaritem" onClick={handleClick} style={style}>
      {title}
      <div></div>
    </li>
  );
}

export default NavbarItem;
