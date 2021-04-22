import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Raj chaudhary",
    };
    console.log("Constructor");
  }
  componentWillUpdate() {
    console.log("Component Will Update");
  }
  componentDidMount() {
    console.log("Comonenet Did Mount");
    this.setState({ data: "Minni" });
  }
  componentDidUpdate() {
    console.log("Component Did Update", this.state.data);
  }
  render() {
    console.log("Render", this.state.data);
    return <div></div>;
  }
}
