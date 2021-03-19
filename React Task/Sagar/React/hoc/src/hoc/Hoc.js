import React from "react";

const Hoc = (WrapperComponent) => {
  return class extends React.Component {
    state = {
      data: "",
      result: "",
    };

    onChange = (e) => {
      this.setState({ data: e.target.value });
    };

    onSubmitHandler = (e) => {
      e.preventDefault();
      this.setState({ result: this.state.data });
      this.setState({ data: "" });
    };

    clearData = () => {
      this.setState({ result: "" });
    };

    render() {
      return (
        <>
          <h1>Title</h1>
          <WrapperComponent
            result={this.state.result}
            data={this.state.data}
            onSubmitHandler={this.onSubmitHandler}
            onChange={this.onChange}
            input={this.input}
            clearData={this.clearData}
          />
          <button onClick={(e) => this.onSubmitHandler(e)}>Submit</button>
        </>
      );
    }
  };
};

export default Hoc;
