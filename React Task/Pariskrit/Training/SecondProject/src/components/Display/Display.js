import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props?.user.name !== state.user?.name ||
      props?.user.address !== state.user?.address
    ) {
      return { user: props.user };
    }

    return null;
  }
  render() {
    return (
      <div>
        <p>
          <b>Name:</b>
          {this.state?.user?.name}
        </p>
        <p>
          <b>Address:</b>
          {this.state?.user?.address}
        </p>
      </div>
    );
  }
}

export default Display;
