import React from "react";
import "./navbaritem.css";

function NavbarItem({ name, onClick, active }) {
  return (
    <div
      className="nav-item"
      onClick={onClick && onClick}
      style={active === name ? { backgroundColor: "rgba(0, 0, 0, 0.1)" } : {}}
    >
      {name}
    </div>
  );
}

export default NavbarItem;
