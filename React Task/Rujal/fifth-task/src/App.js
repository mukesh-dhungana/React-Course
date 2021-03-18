import './App.css';
import React from 'react'
import List from './Components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userDetail: {}
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    this.setState({
      userDetail: { name: formData.get('name'), address: formData.get('address') }
    })

    e.target.reset()
  }



  render() {
    const { userDetail } = this.state
    return (
      <div className="main">
        <div className="form">
          <h1>Add Data</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="address" placeholder="Address" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="list">
          {<List {...userDetail} />}
        </div>
      </div>
    )
  }
}

export default App;
