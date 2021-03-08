import React, { Component } from "react";
import "./App.css";
import CardLists from "./components/CardLists/CardLists";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showCards: false };
  }

  render() {
    const { showCards } = this.state;
    return (
      <div className="app">
        <h1>Fetch Data</h1>
        <button
          type="button"
          onClick={() => this.setState({ showCards: true })}
        >
          GET JOKES
        </button>
        {showCards && <CardLists />}
      </div>
    );
  }
}
