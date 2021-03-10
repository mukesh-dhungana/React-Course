import React, { Component } from "react";
import Loader from "../Loader";
import TRow from "./Trow";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: this.props.fullName, email: this.props.email }],
      loading: false,
    };
  }

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

  loadingHandler = (data) => {
    this.setState({ loading: data });
  };

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
                <TRow
                  {...item}
                  key={item.name}
                  data={this.state.data}
                  deleteRow={(n) => {
                    this.setState({
                      data: this.state.data.filter((row) => row.name !== n),
                      loading: false,
                    });
                  }}
                  loadingHandler={this.loadingHandler}
                />
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
