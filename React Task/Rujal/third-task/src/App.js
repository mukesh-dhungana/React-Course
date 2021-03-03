import './App.css';
import React from 'react'
import Child from './Components/Child'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    this.setState({ name: formData.get('name'), address: formData.get('address') })
    e.target.reset()
  }

  render() {
    return (
      <div id="main">
        <h1>Parent</h1>
        <form onSubmit={this.handleSubmit}>
          <div id="form">
            <div className="form-control">
              <input type="text" name="name" />
            </div>
            <div className="form-control">
              <input type="text" name="address" />

            </div>
            <div className="form-control">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
        <div id="child">
          <Child {...this.state} />
        </div>
      </div>
    )
  }
}

export default App;
