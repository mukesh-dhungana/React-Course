import React, { PureComponent } from "react";

class ShallowComponent extends PureComponent {
  state = { title: 0, arr: [1, 2, 3, 5] };
  componentDidMount() {
    let newArr = [...this.state.arr];
    newArr.push(6);
    this.setState({ title: 0 });
    console.log("didmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>This is Component</h1>
        {this.state.title}
      </div>
    );
  }
}

export default ShallowComponent;
