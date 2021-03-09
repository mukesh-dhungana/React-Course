import "./App.css";
import Child from "./Child";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  handleState = data => {
    let result = {
      name: data,
    };
    this.setState({
      data: [...this.state.data, result],
    });
  };
  render() {
    return (
      <div>
        {this.state.data.length > 0 ? (
          <Child data={this.state.data} handler={this.handleState} />
        ) : (
          <Child handler={this.handleState} />
        )}
      </div>
    );
  }
}
