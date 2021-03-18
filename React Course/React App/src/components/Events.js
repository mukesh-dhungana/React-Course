import React, { Component } from "react";

class Events extends Component {
  state = { count: 0 };
  componentDidMount() {
    document
      .getElementById("button")
      .addEventListener("click", this.handleClick.bind(this));
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Submit</button>
        <button id="button">Click</button>
      </div>
    );
  }
}

export default Events;
