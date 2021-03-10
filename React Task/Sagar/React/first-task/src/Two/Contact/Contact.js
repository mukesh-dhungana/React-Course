import React, { Component } from "react";
import Child from "./Child.js";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["abc", "def", "ghi"],
    };
  }

  addArray = (value) => {
    this.setState({ array: [...this.state.array, value] });
  };

  render() {
    return (
      <div>
        {this.state.array.length > 0 ? (
          <Child array={this.state.array} add={this.addArray} />
        ) : (
          <Child add={this.addArray} />
        )}
      </div>
    );
  }
}

export default Contact;
