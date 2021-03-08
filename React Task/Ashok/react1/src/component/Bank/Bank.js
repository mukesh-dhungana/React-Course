import React, { Component } from "react";
import { BankEmployeeDetails } from "../../constant";
import "./bank.css";

class Bank extends Component {
  state = { BankEmployeeDetails };

  handleRemove = (index) => {
    this.setState(this.state.BankEmployeeDetails.splice(index, 1));
  };

  render() {
    return (
      <div className="bank">
        <h1>Welcome to Bank X</h1>
        {this.state?.BankEmployeeDetails?.map((item, i) => (
          <div key={item.Id} className="individual">
            <p>{item.Name.replace(/[_]/g, " ")}</p>
            <button onClick={() => this.handleRemove(i)}>Delete</button>
          </div>
        ))}
        {this.state.BankEmployeeDetails.length < 1 && (
          <h3>No any data to show</h3>
        )}
      </div>
    );
  }
}

export default Bank;
