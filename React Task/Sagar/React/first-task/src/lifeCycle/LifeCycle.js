import React, { Component } from "react";
import "../App.css";



export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      seed: 0,
    };

    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        count: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    console.log("-----------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProps &&
      this.props.ignoreProps !== nextProps.ignoreProps
    ) {
      console.log("No Component shouldn't render");
      console.log(this.props.ignoreProps);
      console.log(nextProps);
      return false;
    }
    return true;
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    console.log("render");
    if (this.state.error) {
      return <div>We have error {this.state.error.message}</div>;
    }
    return (
      <div className="App">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter : {this.state.count}</div>

      </div>
    );
  }
}

export default LifeCycle;
