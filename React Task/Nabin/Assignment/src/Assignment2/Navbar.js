import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div className="navbar">
      <div className="buttons">
        <button onClick = {() => setActive("home")} style = {{marginLeft: "570px"}}>Home</button>
        <button onClick = {() => setActive("about")}>About</button>
        <button onClick = {() => setActive("contact")}>Contact</button>
      </div>
      <div>
        {active === "home" && <Home />}
        {active === "about" && <About />}
        {active === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default Navbar;
