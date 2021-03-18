import Form from "./components/Form";
import React, { Component } from "react";
import FormDisplay from "./components/FormDisplay";

import "./components/Form.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  handleSubmit = (userDetails) => {
    this.setState({users: [...this.state.users,userDetails]})
    console.log('Passed Component', userDetails);
  }

  removeData = (idx) => {
    this.state.users.splice(idx, 1)
    this.setState({
      users: [...this.state.users]
    })
    console.log('Deleted Row', idx);
  }

  render() {
    // console.log('updated State', this.state.users);
    return (
      <div className="app-container">
        <Form onSubmit={this.handleSubmit}/>
        <FormDisplay users={this.state.users} removeData={this.removeData}/>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }
