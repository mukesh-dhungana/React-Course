import React, { Component } from "react";
import Loader from "../Loader";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: this.props.fullName, email: this.props.email }],
      loading: false,
    };
  }

  controller = new window.AbortController();
  signal = this.controller.signal;

  componentDidUpdate = (pP) => {
    // debugger;
    if (pP.fullName !== this.props.fullName) {
      this.setState({
        data: [
          ...this.state.data,
          { name: this.props.fullName, email: this.props.email },
        ],
      });
    }
  };

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch("https://reqres.in/api/users?delay=3", {
        signal: this.signal,
      });
      const result = await response.json();
      console.log(JSON.stringify(result));
      this.setState({ loading: false });
    } catch (err) {
      console.log("The user aborted the request");
    }
  };

  deleteRow = (n) => {
    const arrayCopy = this.state.data.filter((row) => row.name !== n);
    this.setState({ data: arrayCopy });
    this.setState({ loading: false });
    let show = arrayCopy.length > 0;
    this.props.handleRemove(show);
  };

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <button onClick={() => this.fetchData()}>Load API</button>
                  <button
                    onClick={() => {
                      this.deleteRow(item.name);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>

        {this.state.loading ? <Loader /> : null}
      </div>
    );
  }
}

export default Data;
