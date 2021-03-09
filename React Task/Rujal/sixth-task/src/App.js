import './App.css';
import React from 'react'
import List from './Components/List';
import Form from './Components/Form';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'Rujal', address: 'Kumarigal' }
      ]
    }
  }

  handleSubmit = (data) => {
    this.setState({
      data: [...this.state.data, { id: this.getId(), ...data }]
    })
  }
  
  getId = () => this.state.data.reduce((a, c) => a > c.id ? a : c.id, 0) + 1

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} data={this.state.data} />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
