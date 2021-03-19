import React, { Component } from "react";
import Child from "../Child/Child";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayData: ["john", "alex", "ravi"],
    };
  }

  getDataFromChild = (data) => {
    this.setState({ arrayData: [...this.state.arrayData, data] });
  };
  render() {
    const { arrayData } = this.state;
    return (
      <div className="Main">
        <Child arrayData={arrayData} getDataFromChild={this.getDataFromChild} />
      </div>
    );
  }
}

export default Main;
