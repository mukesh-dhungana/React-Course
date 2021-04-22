import React from "react";
import "./App.css";
import Child from "./Child";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: 1,
      isLoading: false,
    };
  }
  handleLoad = show => {
    this.setState({ isLoading: show });
  };
  handleRemoveRow = id => {
    let arr = this.state.data.filter(el => el.id !== id);
    this.setState({ data: arr });
  };
  handleClick = e => {
    e.preventDefault();
    const { id } = this.state;
    this.setState({
      data: [
        ...this.state.data,
        { id, name: e.target.name.value, address: e.target.address.value },
      ],
    });
    this.setState({ id: id + 1 });
  };
  render() {
    return (
      <>
        <div className="App">
          <form onSubmit={this.handleClick}>
            <input
              id="first"
              required
              type="text"
              placeholder="Enter Name"
              name="name"
            />
            <input
              id="second"
              type="text"
              required
              placeholder="
          Enter address"
              name="address"
            />
            <input id="last" type="submit" />
          </form>
        </div>
        {this.state.isLoading && <Spinner />}
        {this.state.data.length > 0 && (
          <Child
            data={this.state.data}
            handleRemoveRow={this.handleRemoveRow}
            handleLoad={this.handleLoad}
          />
        )}
      </>
    );
  }
}

export default App;
