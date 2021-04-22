import React from "react";

//state
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state...",
      content: "Content from state...",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
      </div>
    );
  }
}
export default App;

//props
import React from "react";

class ParentComponent extends Component {
  render() {
    return <ChildComponent name="First Child" />;
  }
}

const ChildComponent = (props) => {
  return <p>{props.name}</p>;
};

//state and props
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header from props...",
      content: "Content from props...",
    };
  }
  changeHeader(header){
    this.setState({header:})
  }
  render() {
    return (
      <div>
        <Header headerProp={this.state.header} changeHeader={this.changeHeader}/>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <button onClick={()=>this.props.changeHeader("fdfd")}></button>
      </div>
    );
  }
}
