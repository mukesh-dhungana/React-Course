import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = { isError: false, error: "", errorInfo: {} };
  static getDerivedStateFromError(error) {
    return { isError: true };
  }
  componentDidCatch(error, info) {
    this.setState({ error: error.message, errorInfo: info });
  }
  render() {
    return (
      <>
        {this.state.isError ? (
          <>
            <h1>Something went wrong</h1>
            <h3>{this.state.error}</h3>
            <h3>{this.state.errorInfo.componentStack}</h3>
          </>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundry;
