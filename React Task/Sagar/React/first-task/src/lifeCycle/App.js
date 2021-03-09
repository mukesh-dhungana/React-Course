import React, { Component } from "react";
import LifeCycle from "./LifeCycle";
import "../App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProps: 0,
      seed: 0,
    };
    this.mountLifeCycle = this.mountLifeCycle.bind(this);
    this.unmountLifeCycle = this.unmountLifeCycle.bind(this);
    this.ignoreProps = this.ignoreProps.bind(this);
    this.seedGenerator = this.seedGenerator.bind(this);
  }

  mountLifeCycle() {
    this.setState({ mount: true });
  }

  unmountLifeCycle() {
    this.setState({ mount: false });
  }

  ignoreProps() {
    this.setState({ ignoreProps: this.state.ignoreProps + 1 });
  }

  seedGenerator() {
    this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.mountLifeCycle} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountLifeCycle} disabled={!this.state.mount}>
          Unmount
        </button>
        <button onClick={this.ignoreProps}>Ignore Props</button>
        <button onClick={this.seedGenerator}>Seed</button>
        {this.state.mount ? (
          <LifeCycle
            seed={this.state.seed}
            ignoreProps={this.state.ignoreProps}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
