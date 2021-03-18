import React, { Component } from "react";
import axios from "axios";
import Loader from "../Loader";

export class Data2 extends Component {
  signal = axios.CancelToken.source();

  state = {
    data: [],
    loading: false,
  };

  componentDidUpdate = (pP) => {
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
    const response = await axios.get("https://reqres.in/api/users?delay=3", {
      cancelToken: this.signal.token,
    });
    // const result = await response.json();
    console.log(JSON.stringify(response.data));
    this.setState({ loading: false });
  };

  deleteRow = (n) => {
    const arrayCopy = this.state.data.filter((row) => row.name !== n);
    this.setState({ data: arrayCopy });
    this.setState({ loading: false });
  };

  componentWillUnmount() {
    this.signal.cancel("Api is being canceled");
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
                  <button onClick={() => this.deleteRow(item.name)}>
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

export default Data2;
