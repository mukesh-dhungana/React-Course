import React, { Component } from "react";
import UserInfo from "./component/UserInfo";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { name, address } = e?.target;
    this.setState({ name: name?.value, address: address?.value });
    e.target.reset();
  };

  render() {
    let { name, address } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" />
          <div className="space"></div>
          Address: <input type="text" name="address" />
          <div className="space"></div>
          <button type="submit">Send</button>
        </form>
        <UserInfo name={name} address={address} />
      </div>
    );
  }
}
