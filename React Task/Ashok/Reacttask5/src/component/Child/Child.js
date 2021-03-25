import React, { Component } from "react";
import Row from "../Row/Row";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidUpdate(prevProps) {
    if (prevProps?.email !== this.props?.email) {
      this.setState({ data: [...this.state?.data, this.props] });
    }
  }

  handleRemove = (email) => {
    let index = this.state.data.findIndex((item) => item.email === email);
    this.state.data.splice(index, 1);
    this.setState({ data: [...this.state.data] });
  };
  render() {
    return (
      <>
        {this.state.data.length
          ? this.state.data.map((item, i) => (
              <Row
                key={item.email}
                index={i}
                item={item}
                onClick={() => this.handleRemove(item.email)}
              />
            ))
          : ""}
      </>
    );
  }
}

export default Child;
