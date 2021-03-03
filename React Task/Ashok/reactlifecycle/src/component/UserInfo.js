import React, { Component } from "react";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name || props.address !== state.address) {
      return { name: props.name, address: props.address };
    } else return null;
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.address}</p>
      </div>
    );
  }
}
