import React, { Component } from "react";

export class Trow extends Component {
  controller = new AbortController();
  fetchData = async () => {
    let signal = this.controller.signal;

    try {
      this.props.loadingHandler(true);

      const response = await fetch("https://reqres.in/api/users?delay=3", {
        method: "GET",
        signal: signal,
      });
      const result = await response.json();
      console.log(JSON.stringify(result));
      this.props.loadingHandler(false);
    } catch (err) {
      console.log("The user aborted the request");
    }
  };

  componentWillUnmount = () => {
    this.controller.abort();
    // this.props.loadingHandler(false);
    console.log("unmounted");
  };

  render() {
    const { name, email, deleteRow } = this.props;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button onClick={() => this.fetchData()}>Load API</button>
          <button onClick={() => deleteRow(name)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Trow;
