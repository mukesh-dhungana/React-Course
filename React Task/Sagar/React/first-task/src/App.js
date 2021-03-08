import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    array: [
      { Id: 1, Name: "Nabil_Bank" },
      { Id: 2, Name: "Nepal_Investment_Bank" },
      { Id: 3, Name: "Global_IME" },
      { Id: 4, Name: "NIC_ASIA" },
      { Id: 5, Name: "PRABHU" },
    ],
    show: false,
  };

  list = this.state.array.map((name) => (
    <p key={name.Id}>{name.Name.replaceAll("_", " ")}</p>
  ));

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
        {this.state.show ? this.list : ""}
      </div>
    );
  }
}

export default App;
