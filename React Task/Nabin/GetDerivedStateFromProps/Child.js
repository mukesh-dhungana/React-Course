import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.data.name !== state.name &&
      props.data.address !== state.address
    ) {
      return {
        name: props.data.name,
        address: props.data.address,
      };
    } else return null;
  }

  render() {
    return (
      <div>
        <h1>This is child</h1>
        <h5>
          {this.state.name} {this.state.address}
        </h5>
      </div>
    );
  }
}

export default Child;
