import React, { Component } from "react";

import "./App.css";
import Child from "./component/Child";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { Id: 1, Name: "Nabil_Bank" },
        { Id: 2, Name: "Nepal_Investment_Bank" },
        { Id: 3, Name: "Global_IME" },
        { Id: 4, Name: "NIC_ASIA" },
        { Id: 5, Name: "PRABHU" },
      ],
    };
  }
  HandleChildFormData = (e) => {
    e.preventDefault();
    const [Id, Name] = [e.target.id.value, e.target.name.value];
    this.setState({
      data: [...this.state.data, { Id, Name }],
    });
    e.target.reset();
  };
  render() {
    return (
      <div className="App">
        <Child data={this.state.data} formHandle={this.HandleChildFormData} />
      </div>
    );
  }
}
