import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      id: 3,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.state;
    this.setState({
      userDetails: {
        id,
        name: event.target.name.value,
        address: event.target.address.value,
      },
    });
    event.target.reset();
    this.setState({ id: id + 1 });
  }

  render() {
    const { userDetails } = this.state;
    return (
      <div className="app">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Form</h2>
          <div className="form__inputdiv">
            <label htmlFor="name">NAME:</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name..."
            />
          </div>
          <div className="form__inputdiv">
            <label htmlFor="address">ADDRESS:</label>
            <br />
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter Address..."
            />
          </div>
          <button>Submit</button>
        </form>
        <Table userDetails={userDetails} />
      </div>
    );
  }
}
