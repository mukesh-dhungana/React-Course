import React, { Component } from "react";

export class List extends Component {
  state = {
    name: this.props.name,
    address: this.props.address,
  };

  static getDerivedStateFromProps(props, state) {
    return { name: props.name, address: props.address };
  }

  render() {
    return (
      <div>
        {this.state.name} {this.state.address}
      </div>
    );
  }
}

export default List;
