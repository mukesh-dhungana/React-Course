import React, { Component } from "react";

export default class Child extends Component {
  state = {
    name: this.props.result.name,
    address: this.props.result.address,
  };

  static getDerivedStateFromProps(props) {
    return { name: props.result.name, address: props.result.address };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.address}</h1>
      </div>
    );
  }
}
