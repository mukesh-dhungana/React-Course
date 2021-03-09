import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
//import { arr } from "./data";

class App extends Component {
  state = {
    data: "",
  };
  render() {
    return (
      <div>
        <nav>
          <button id="btnh" onClick={() => this.setState({ data: "Home" })}>
            Home
          </button>
          <button id="btna" onClick={() => this.setState({ data: "About" })}>
            About
          </button>
          <button id="btnc" onClick={() => this.setState({ data: "Contact" })}>
            Contact
          </button>
        </nav>
        <div>
          {this.state.data === "Home" ? <Home title="Home Page" /> : ""}
          {this.state.data === "About" ? <About title="About Page" /> : ""}
          {this.state.data === "Contact" ? (
            <Contact title="Contact Page" />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
