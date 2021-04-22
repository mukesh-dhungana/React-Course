import React, { Component } from "react";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  abortController = new AbortController();

  componentWillUnmount() {
    this.abortController.abort();
  }

  handleLoad = () => {
    // fetch("https://jsonplaceholder.typicode.com/todos/", {
    //   signal: this.abortController.signal,
    // })
    //   .then((response) => response.json())
    //   .then((json) => this.setState({ json }))

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/", {
        signal: this.abortController.signal,
      })
        .then((response) => response.json())
        .then((json) => this.setState({ json }))
        .catch((err) => console.log(err));
    }, 2000);
  };

  render() {
    console.log(this.state);
    let { item, onClick, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td>
          <button onClick={this.handleLoad}>Load</button>
          <button onClick={onClick}>Remove</button>
        </td>
      </tr>
    );
  }
}

export default Row;
