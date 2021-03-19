import React, { Component } from "react";

export default class Row extends Component {
  fetchData = () => {
    setTimeout(async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
          {
            signal: this.props.controller.signal,
          }
        );
        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };

  componentWillUnmount() {
    this.props.controller.abort();
  }
  render() {
    const { id, name, address, handleDelete } = this.props;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{address}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
        <td>
          <button onClick={this.fetchData}>Load API</button>
        </td>
      </tr>
    );
  }
}
