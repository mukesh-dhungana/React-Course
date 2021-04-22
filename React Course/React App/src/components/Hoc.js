import React, { Component } from "react";
const hoc = () => (WrappedComponent) => {

  class Hoc extends Component {
    ref = React.createRef(null);
    state = {
      isLoading: true,
    };
    componentDidMount() {
      setTimeout(() => this.setState({ isLoading: false }), 2000);
    }
    handleClick = () => {
        //debugger
      this.ref.current.value = "dsds";
    };
    render() {
      return (
        <>
          {this.state.isLoading && (
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
          <button onClick={this.handleClick}>Click</button>
          <WrappedComponent name="Mukesh" {...this.props} newRef={this.ref}/>
        </>
      );
    }
  }
  return Hoc;
};

export default hoc;
